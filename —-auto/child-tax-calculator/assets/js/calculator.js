$(document).ready(function () {
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

    newChildCount++;
    addEditChild($newChild)
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

    var instanceId = "#stopped-child-" + stoppedChildCount;
    $newChild.attr('id', instanceId);
    $newChild.find('.child-number').text(stoppedChildCount + 1);

    $newChild.appendTo("#stopped-children-container");
    $newChild.show();

    stoppedChildCount++;
});