// Node class
var Node = function(opts) {
  this.elem = $(opts.selector);
  this.id = this.elem[0].id;
  this.type = opts.type;
  this.name = opts.name || this.id;
  this.isOutcome = opts.outcome || false;
  this.onAnswer = opts.onAnswer || function() {};
};

Node.prototype.parse = function() {
  if(this.type === "money") {
    this.elem.data("response", parseFloat(this.elem[0].value.replace("£", "")));
  } else if(this.type === "integer") {
    this.elem.data("response", parseInt(this.elem[0].value, 10));
  } else if(this.type === "date") {
    this.elem.data("response", this.elem.find("input").get(0).value + "/" + this.elem.find("input").get(1).value + "/" + this.elem.find("input").get(2).value);
  } else if(this.type === "multiple-choice") {
    this.elem.data("response", this.elem.find("select").get(0).value);
  }
}

// Calculator
var Calculator = function() {
  this.questions = [];
  this.responses = {};
  this.computedFns = {};
};


Calculator.prototype = {
  add: function(q) { this.questions.push(q); },
  process: function() {
    $.each(this.questions, $.proxy(function(i, item) {
      item.parse.call(item);
      this.responses[item.name] = item.elem.data("response");
    }, this));
    for(var key in this.computedFns) {
      this.responses[key] = this.computedFns[key].call(this.responses);
    }
  },
  computed: function(name, fn) {
    this.computedFns[name] = fn;
  },
  startingChildren: function() {
    return $.grep(this.questions, function(item, i) {
      console.log(item.name, item.name.indexOf("startChild") > 01);
      return item.name.indexOf("startChild") > -1;
    });
  },
  stoppingChildren: function() {
    return $.grep(this.questions, function(item, i) {
      return item.name.indexOf("stoppedChild") > -1;
    });
  },
  updateOutcome: function() {
    $(".starting-children").text(this.startingChildren().length);
    $(".stopping-children").text(this.stoppingChildren().length);
    $(".adjusted-net-income").text(this.responses.finalIncome);
    $(".total-owed").text(this.responses.totalOwed);
  }
    
};



$(document).ready(function () {

  var calc = new Calculator();

  calc.add(new Node({
    selector: "#total-annual-income-before-tax",
    name: "totalIncome",
    type: "money"
  }));

  calc.add(new Node({
    selector: "#gross-pension-contributions",
    name: "grossPension",
    type: "money"
  }));

  calc.add(new Node({
    selector: "#net-pension-contributions",
    name: "netPension",
    type: "money"
  }));

  calc.add(new Node({
    selector: "#trading-losses-if-youre-self-employed",
    name: "tradingLosses",
    type: "money"
  }));

  calc.add(new Node({
    selector: "#gift-aid-donations",
    name: "giftAid",
    type: "money"
  }));

  calc.add(new Node({
    selector: "#children",
    name: "children",
    type: "integer"
  }));

  calc.computed("finalIncome", function() {
    if(this.totalIncome) return this.totalIncome;
    return this.grossPension + this.netPension + this.tradingLosses + this.giftAid;
  });

  calc.computed("totalOwed", function() {
    if(this.taxYear === "2013-14") {
      return this.finalIncome * (this.children * 0.1);
    } else {
      return this.finalIncome * 0.4 * (this.children * 0.1);
    }
  });

  window.calc = calc;

  $("form").on("submit", function(e) {
    e.preventDefault();
    calc.process();
    calc.updateOutcome();
  }).find("input").on("change", function(e) {
    calc.process();
    calc.updateOutcome();
  });



  $('#net-income-calculations').hide();

  $("#open-net-income").click(function (e) {
    e.preventDefault();
    $('#net-income-calculations').show();
  });

  $('#info-total-net-income').hide();

  $("#info").click(function (e) {
    e.preventDefault();
    $('#info-total-net-income').toggle();
  });

  $('#new-children').hide();

  $("#new_children_yes").click(function () {
    $('#new-children').show();

    if ($('#children-container > div').length == 0) {
      addNewChild();
    }
  });

  $("#new_children_no").click(function () {
    $('#new-children').hide();
  });

  $('#new-children a.add-child').click(function (e) {
    e.preventDefault();
    addNewChild();
    hideOldChildren();
  });

  var newChildCount = 0;

  function addNewChild() {
    var $template = $("#new-child-template");
    var $newChild = $template.clone();
    var instanceId = "new-child-" + newChildCount;

    $newChild.attr('id', instanceId);
    $newChild.find('.child-number').text(newChildCount + 1);

    $newChild.appendTo("#children-container");
    $newChild.show();

    addEditChild($newChild)
    newChildCount++;

    calc.add(new Node({
      selector: "#" + instanceId,
      name: "startChild" + newChildCount,
      type: "date"
    }));

  }

  function hideOldChildren() {
    var $children = $('.new-child');

    $children.not(':last-child').find('fieldset').hide();
    $children.not(':last-child').find('.edit').show();
   
  }

  function addEditChild (childparameter) {
    childparameter.find(".edit").hide().click(function (e) {
      e.preventDefault();
      $(this).parents('.new-child').find('fieldset').show();
    });
  }

  $("#stopped_children_yes").click(function () {
    $('#stopped-children').show();

    if ($('#stopped-children-container > div').length == 0) {
      addStoppedChild();
    }
  });

  $("#stopped_children_no").click(function () {
    $('#stopped-children').hide();
  })

  $('#stopped-children a.add-child').click(function (e) {
    e.preventDefault();
    addStoppedChild();
  })

  var stoppedChildCount = 0;

  function addStoppedChild() {
    var $template = $("#stopped-child-template");
    var $newChild = $template.clone();

    var instanceId = "stopped-child-" + stoppedChildCount;
    $newChild.attr('id', instanceId);
    $newChild.find('.child-number').text(stoppedChildCount + 1);

    $newChild.appendTo("#stopped-children-container");
    $newChild.show();


    stoppedChildCount++;
    calc.add(new Node({
      selector: "#" + instanceId,
      name: "stoppedChild" + stoppedChildCount,
      type: "date"
    }));
  }
});
