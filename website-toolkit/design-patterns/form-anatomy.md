---
layout: design-pattern
title: Anatomy of a form
status: draft
---


* Basic structure
* Fieldsets and legends
* Radio buttons and checkboxes
* Help text
* Hidden labels
* Buttons
* Validation messages


# Basic structure

Wrap each control in an element with a class of 'group'.

<div class="pattern-example">
  <div class="inner">

    <div class="form-example-1">
      <p class="group">
        <label>Label</label>
        <input type="text">
      </p>
    </div>

  </div>
</div> 


    <p class="group">
      <label>Label</label>
      <input type="text">
    </p>


# Fieldsets and legends

Use these to break up forms into logical sections

<div class="pattern-example">
  <div class="inner">

    <div class="form-example-1">

        <fieldset>
          <legend>Name</legend>
          <p class="group">
            <label>First name</label>
            <input type="text" class="name">
          </p>
          <p class="group">
            <label>Last name</label>
            <input type="text" class="name">
          </p>
        </fieldset>

    </div>

  </div>
</div>

        <fieldset>
          <legend>Name</legend>
          <p class="group">
            <label>First name</label>
            <input type="text" class="name">
          </p>
          <p class="group">
            <label>Last name</label>
            <input type="text" class="name">
          </p>
        </fieldset> 


# Radio buttons and checkboxes

Wrap the radio or checkbox in its label and wrap the whole thing in an 'option group' element.

<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

      <p class="option group">
        <label><input type="checkbox"> Job offers</label>
        <label><input type="checkbox"> Networking</label>
        <label><input type="checkbox"> Business opportunities</label>
      </p>

    </div>
  </div>
</div> 



          <p class="option group">
            <label><input type="checkbox"> Job offers</label>
            <label><input type="checkbox"> Networking</label>
            <label><input type="checkbox"> Business opportunities</label>
          </p>


or use a list...


          <ul class="option group">
            <li><label><input type="checkbox"> Job offers</label></li>
            <li><label><input type="checkbox"> Networking</label></li>
            <li><label><input type="checkbox"> Business opportunities</label></li>
          </ul>


# Help text

Help text goes in a 'help' element above or below the relevant control

<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

      <p class="group">
        <label>Telephone</label>
        <input type="text" class="telephone">
        <span class="help">Include your country code</span>
      </p>

    </div>
  </div>
</div> 


      <p class="group">
        <label>Telephone</label>
        <input type="text" class="telephone">
        <span class="help">Include your country code</span>
      </p>


# Hidden fields

Use the 'visuallyhidden' class to hide labels (you need a good reason to do this though).

<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

      <p class="group">
        <label>Street</label>
        <input type="text" class="street">
      </p>
      <p class="group">
        <label class="visuallyhidden">Street line two</label>
        <input type="text" class="street">
      </p>
      <p class="group">
        <label>Town/City</label>
        <input type="text" class="town">
      </p>
      <p class="group">
        <label>Postcode</label>
        <input type="text" class="postcode">
      </p>

    </div>
  </div>
</div> 


      <p class="group">
        <label>Street</label>
        <input type="text" class="street">
      </p>
      <p class="group">
        <label class="visuallyhidden">Street line two</label>
        <input type="text" class="street">
      </p>
      <p class="group">
        <label>Town/City</label>
        <input type="text" class="town">
      </p>
      <p class="group">
        <label>Postcode</label>
        <input type="text" class="postcode">
      </p>


# Buttons

Nest rows of buttons in an 'action group' element.

<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

        <p class="action group">
          <button class="button" type="submit">Submit form</button>
        </p>

    </div>
  </div>
</div> 

        <p class="action group">
          <button class="button" type="submit">Submit form</button>
        </p>


# Validation messages

Summarise any validation errors at the top of your page like this:

<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

      <div class="validation-summary">
        <h1>Please check the form</h1>
        <ul>
          <li><a href="#error1">Confirm your email address</a></li>
          <li><a href="#error2">Select at least one area of interest</a></li>
        </ul>
      </div>

    </div>
  </div>
</div> 

    <div class="validation-summary">
      <h1>Please check the form</h1>
      <ul>
        <li><a href="#error1">Confirm your email address</a></li>
        <li><a href="#error2">Select at least one area of interest</a></li>
      </ul>
    </div>


Each link should jump the user down to the corresponding form control. Add a 'validation' class to the control and insert a 'validation-message' element.

<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

      <p class="group validation">
        <span class="validation-message" id="error1">Confirm your email address</span>
        <label>Confirm email <abbr title="Mandatory">*</abbr></label>
        <input type="text" class="email">
      </p>

    </div>
  </div>
</div> 

    <p class="group validation">
      <span class="validation-message" id="error1">Confirm your email address</span>
      <label>Confirm email <abbr title="Mandatory">*</abbr></label>
      <input type="text" class="email">
    </p>




<script>
  $(function() {

    // Style toggle for pattern examples
    // Takes the text of the clicked 'option' and assigns it as
    // a class to the element named in the 'data-for' attribute
    $('.class-toggle .option').click(function(){
      $('.class-toggle .option').removeClass('selected');
      $(this).addClass('selected');
      var selectedClass = $(this).text();
      var selectedElement = "#" + $(this).parents('.class-toggle').data("for");
      $(selectedElement).removeClass().addClass(selectedClass);
      return false;
    });



  });
</script>
