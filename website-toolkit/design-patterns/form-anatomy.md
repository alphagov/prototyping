---
layout: design-pattern
title: Anatomy of a form
status: draft
---

Examples, markup and styles for most basic form elements.

<div class="page-contents">
  <h2>On this page:</h2>
  <ul>
    <li><a href="#styling-forms">Styling forms</a></li>
    <li><a href="#basic-structure">Basic structure</a></li>
    <li><a href="#fieldsets-and-legends">Fieldsets and legends</a></li>
    <li><a href="#radio-buttons-and-checkboxes">Radio buttons and checkboxes</a></li>
    <li><a href="#help-text">Help text</a></li>
    <li><a href="#hidden-labels">Hidden labels</a></li>
    <li><a href="#buttons">Buttons</a></li>
    <li><a href="#validation-messages">Validation messages</a></li>
    <li><a href="#putting-it-all-together">Putting it all together</a></li>
    <li><a href="#rationale">Rationale</a></li>
  </ul>
</div>

# Styling forms

The 'form' mixin provides a configurable framework for styling basic forms.

Use it in your Sass like this: `.form-example-1 { @include form }`

The mixin accepts the following arguments:

`$label-alignment` top, left or right. Default is top.

`$label-width` a value in em. Default is 8em.

`$legend-colour` a colour value or variable. Default is $charcoal-grey.

To see these in action, check out the [contact form example](contact-form.html)


# Basic structure

Wrap each control in an element with a class of 'group'.

<div class="pattern-example">
  <div class="inner">

    <div class="form-example-1">
      <p class="group">
        <label for="label">Label</label>
        <input id="label" type="text">
      </p>
    </div>

  </div>
  <pre><code>  &lt;p class="group"&gt;
    &lt;label for="label"&gt;Label&lt;/label&gt;
    &lt;input id="label" type="text"&gt;
  &lt;/p&gt;
</code></pre>
</div> 


# Fieldsets and legends

Use these to break up forms into logical sections

<div class="pattern-example">
  <div class="inner">

    <div class="form-example-1">

        <fieldset>
          <legend>Name</legend>
          <p class="group">
            <label for="first-name">First name</label>
            <input id="first-name" type="text" class="name">
          </p>
          <p class="group">
            <label for="last-name">Last name</label>
            <input id="last-name" type="text" class="name">
          </p>
        </fieldset>

    </div>

  </div>
  <pre><code>    &lt;fieldset&gt;
      &lt;legend&gt;Name&lt;/legend&gt;
      &lt;p class="group"&gt;
        &lt;label for="first-name"&gt;First name&lt;/label&gt;
        &lt;input id="first-name" type="text" class="name"&gt;
      &lt;/p&gt;
      &lt;p class="group"&gt;
        &lt;label for="last-name"&gt;Last name&lt;/label&gt;
        &lt;input id="last-name" type="text" class="name"&gt;
      &lt;/p&gt;
    &lt;/fieldset&gt;
</code></pre>
</div>


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
  <pre><code>      &lt;p class="option group"&gt;
        &lt;label&gt;&lt;input type="checkbox"&gt; Job offers&lt;/label&gt;
        &lt;label&gt;&lt;input type="checkbox"&gt; Networking&lt;/label&gt;
        &lt;label&gt;&lt;input type="checkbox"&gt; Business opportunities&lt;/label&gt;
      &lt;/p&gt;
</code></pre>

<p>or use a list&hellip;</p>

<pre><code>      &lt;ul class="option group"&gt;
        &lt;li&gt;&lt;label&gt;&lt;input type="checkbox"&gt; Job offers&lt;/label&gt;&lt;/li&gt;
        &lt;li&gt;&lt;label&gt;&lt;input type="checkbox"&gt; Networking&lt;/label&gt;&lt;/li&gt;
        &lt;li&gt;&lt;label&gt;&lt;input type="checkbox"&gt; Business opportunities&lt;/label&gt;&lt;/li&gt;
      &lt;/ul&gt;
</code></pre>
</div> 


# Help text

Help text goes in a 'help' element above or below the relevant control

<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

      <p class="group">
        <label for="telephone">Telephone</label>
        <input id="telephone" type="text" class="telephone">
        <span class="help">Include your country code</span>
      </p>

    </div>
  </div>
  <pre><code>  &lt;p class="group"&gt;
    &lt;label for="telephone"&gt;Telephone&lt;/label&gt;
    &lt;input id="telephone" type="text" class="telephone"&gt;
    &lt;span class="help"&gt;Include your country code&lt;/span&gt;
  &lt;/p&gt;
</code></pre>
</div> 


# Hidden labels

Use the 'visuallyhidden' class to hide labels (you need a good reason to do this though).

<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

      <p class="group">
        <label for="street1">Street</label>
        <input id="street1" type="text" class="street">
      </p>
      <p class="group">
        <label for="street2" class="visuallyhidden">Street line two</label>
        <input id="street2" type="text" class="street">
      </p>
      <p class="group">
        <label for="town">Town/City</label>
        <input id="town" type="text" class="town">
      </p>
      <p class="group">
        <label for="postcode">Postcode</label>
        <input id="postcode" type="text" class="postcode">
      </p>

    </div>
  </div>
  <pre><code>  &lt;p class="group"&gt;
    &lt;label for="street1"&gt;Street&lt;/label&gt;
    &lt;input id="street1" type="text" class="street"&gt;
  &lt;/p&gt;
  &lt;p class="group"&gt;
    &lt;label for="street2" class="visuallyhidden"&gt;Street line two&lt;/label&gt;
    &lt;input id="street2" type="text" class="street"&gt;
  &lt;/p&gt;
  &lt;p class="group"&gt;
    &lt;label for="town"&gt;Town/City&lt;/label&gt;
    &lt;input id="town" type="text" class="town"&gt;
  &lt;/p&gt;
  &lt;p class="group"&gt;
    &lt;label for="postcode"&gt;Postcode&lt;/label&gt;
    &lt;input id="postcode" type="text" class="postcode"&gt;
  &lt;/p&gt;
</code></pre>
</div> 


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
  <pre><code>    &lt;p class="action group"&gt;
      &lt;button class="button" type="submit"&gt;Submit form&lt;/button&gt;
    &lt;/p&gt;
</code></pre>
</div> 


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
  <pre><code>&lt;div class="validation-summary"&gt;
  &lt;h1&gt;Please check the form&lt;/h1&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#error1"&gt;Confirm your email address&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#error2"&gt;Select at least one area of interest&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</code></pre>
</div> 


Each link should jump the user down to the corresponding form control. Add a 'validation' class to the control and insert a 'validation-message' element.

<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

      <p class="validation group">
        <span class="validation-message" id="error1">Confirm your email address</span>
        <label for="email-confirm">Confirm email <abbr title="Mandatory">*</abbr></label>
        <input id="email-confirm" type="text" class="email">
      </p>

    </div>
  </div>
  <pre><code>&lt;p class="validation group"&gt;
  &lt;span class="validation-message" id="error1"&gt;Confirm your email address&lt;/span&gt;
  &lt;label for="email-confirm"&gt;Confirm email &lt;abbr title="Mandatory"&gt;*&lt;/abbr&gt;&lt;/label&gt;
  &lt;input id="email-confirm" type="text" class="email"&gt;
&lt;/p&gt;
</code></pre>
</div> 

# Putting it all together

To see all the examples above in a single form, check out the [contact form example](contact-form.html).

# Rationale

## Text input fields

* Light grey background: To make them stand out equally on a white page or coloured panel
* Inset border style: By convention people type into 'holes' cut into the interface

## Label positioning

The framework provides support for top, left or right alignment because there are valid cases for the use of all three. The table below (from a [great article on form design](http://uxdesign.smashingmagazine.com/2011/11/08/extensive-guide-web-form-usability/) in Smashing Magazine) outlines the relative advantages of each approach:

|-----------------------------------|--------------|-------------------|---------------|
|                                   | Top          | Right             | Left          |
|-----------------------------------|--------------|-------------------|---------------|
| Speed of completion               | Fastest      |                   | Slowest       |
|-----------------------------------|--------------|-------------------|---------------|
| Horizontal space required         | Least        |                   | Most          |
|-----------------------------------|--------------|-------------------|---------------|
| Vertical space required           | Most         |                   | Least         |
|-----------------------------------|--------------|-------------------|---------------|
| Label text space available        | Most         |                   | Least         |
|-----------------------------------|--------------|-------------------|---------------|
| Proximity to input                | Closest      |                   | Least close   |
|-----------------------------------|--------------|-------------------|---------------|
| User eye movement                 | Down         | Down + right      | Down + right  |
|-----------------------------------|--------------|-------------------|---------------|
| Time to move from label to input  | 50ms         | 240ms             | 500ms         |
|-----------------------------------|--------------|-------------------|---------------|
| Ideal for...                      | Simple forms | Less simple forms | Complex forms |
|-----------------------------------|--------------|-------------------|---------------|

## Validation messages

When a form is submitted, any validation messages are summarised at the top of the page.
The messages link down to the part of the form they relate to.
This helps users of assistive technology navigate around the form.

The red bar connects the summary to the messages in the form and aids quick scanning of the form for errors.

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
