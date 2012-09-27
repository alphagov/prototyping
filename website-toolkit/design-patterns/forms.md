---
layout: design-pattern
title: Forms
status: draft
---

The 'form' mixin provides a configurable framework for most basic form layouts.

Use it in your Sass like this: `.form-example-1 { @include form }`

<div class="side-by-side">
  <div>
    <h1>Example 1</h1>
<div class="pattern-example">
  <div class="inner">
    <form class="form-example-1">
    <p class="group">
      <label for="label1">Label one</label>
      <input id="label1" type="text">
    </p>
    <p class="group">
      <label for="label2">Label two</label>
      <input id="label2" type="text">
    </p>
    <p class="group">
      <label for="label3">Label three</label>
      <input id="label3" type="text">
    </p>
    </form>
  </div>
</div> 
  </div>
  <div>
  <h1>HTML</h1>
<pre><code>
&lt;form class="form-example-1"&gt;
  &lt;p class="group"&gt;
    &lt;label for="label1"&gt;Label 1&lt;/label&gt;
    &lt;input id="label1" type="text"&gt;
  &lt;/p&gt;
  &lt;p class="group"&gt;
    &lt;label for="label2"&gt;Label 2&lt;/label&gt;
    &lt;input id="label2" type="text"&gt;
  &lt;/p&gt;
  &lt;p class="group"&gt;
    &lt;label for="label3"&gt;Label 3&lt;/label&gt;
    &lt;input id="label3" type="text"&gt;
  &lt;/p&gt;
&lt;/form&gt;

</code></pre>
  </div>
</div>


<h2>Arguments</h2>
<p>The form mixin accepts the following arguments:</p>
<p><code>$label-alignment</code> top, left or right. Default is top.</p>
<p><code>$label-width</code> a value in em. Default is 8em.</p>
<p><code>$legend-colour</code> a colour value or variable. Default is $charcoal-grey.</p>

# Example 2: Contact form

The following example incorporates most of the basic form elements. You can toggle through the different label alignment options to see
the effect it has.

<div class="pattern-example">
  <pre><code class="class-toggle" data-for="form-example-2" >@include form(<span class="option selected">top</span>|<span class="option">left</span>|<span class="option">right</span>, 7.5em, $green)</code></pre>

  <div class="inner">
    <div id="form-example-2" class="top">
      <div class="validation-summary">
        <h1>Please check the form</h1>
        <ul>
          <li><a href="#error1">Confirm your email address</a></li>
          <li><a href="#error2">Select at least one area of interest</a></li>
        </ul>
      </div>
      <form>
        <fieldset>
          <legend>Name</legend>
          <p class="group">
            <label for="title">Title</label>
            <select id="title">
              <option value="Mr">Mr.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Miss">Miss</option>
              <option value="Ms.">Ms.</option>
              <option value="Dr.">Dr.</option>
              <option value="Other">Other</option>
            </select>
          </p>
          <p class="group">
            <label for="first-name">First name <abbr title="Mandatory">*</abbr></label>
            <input id="first-name" type="text" class="name">
          </p>
          <p class="group">
            <label for="last-name">Last name <abbr title="Mandatory">*</abbr></label>
            <input id="last-name" type="text" class="name">
          </p>
        </fieldset>
        <fieldset>
          <legend>Email address</legend>
          <p class="group">
            <label for="email">Enter email <abbr title="Mandatory">*</abbr></label>
            <input id="email" type="text" class="email">
          </p>
          <p class="group validation">
            <span class="validation-message" id="error1">Confirm your email address</span>
            <label for="email-confirm">Confirm email <abbr title="Mandatory">*</abbr></label>
            <input id="email-confirm" type="text" class="email">
          </p>
        </fieldset>
        <fieldset>
          <legend>Telephone number</legend>
          <p class="group">
            <label for="telephone">Telephone</label>
            <input id="telephone" type="text" class="telephone">
            <span class="help">Include your country code</span>
          </p>
        </fieldset>
        <fieldset>
          <legend>Postal address</legend>
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
        </fieldset>
        <fieldset>
          <legend>Biography</legend>
          <p class="group">
            <label for="biography">Write a few short words about yourself</label>
            <textarea id="biography" class="big"></textarea>
          </p>
          <p class="option group">
            <label for="public"><input id="public" type="checkbox"> Make this biography public</label>
          </p>
        </fieldset>
        <fieldset>
          <legend>I am interested in</legend>
          <p class="option group validation">
            <span class="validation-message" id="error2">Select at least one area of interest</span>
            <label><input type="checkbox"> Job offers</label>
            <label><input type="checkbox"> Networking</label>
            <label><input type="checkbox"> Business opportunities</label>
          </p>
        </fieldset>  
        <fieldset>
          <legend>I prefer to be contacted by</legend>
          <ul class="option group">
            <li><label><input type="radio" name="preferred-contact" checked> Email</label></li>
            <li><label><input type="radio" name="preferred-contact"> Telephone</label></li>
            <li><label><input type="radio" name="preferred-contact"> Post</label></li>
          </ul>
        </fieldset>
        <p class="action group">
          <button class="button" type="submit">Submit form</button>
        </p>
      </form>
    </div>
  </div>
</div>

# HTML

The example above is marked up as follows:

    <div id="form-example-2">
      <div class="validation-summary">
        <h1>Please check the form</h1>
        <ul>
          <li><a href="#error1">Confirm your email address</a></li>
          <li><a href="#error2">Select at least one area of interest</a></li>
        </ul>
      </div>
      <form>
        <fieldset>
          <legend>Name</legend>
          <p class="group">
            <label for="title">Title</label>
            <select id="title">
              <option value="Mr">Mr.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Miss">Miss</option>
              <option value="Ms.">Ms.</option>
              <option value="Dr.">Dr.</option>
              <option value="Other">Other</option>
            </select>
          </p>
          <p class="group">
            <label for="first-name">First name <abbr title="Mandatory">*</abbr></label>
            <input id="first-name" type="text" class="name">
          </p>
          <p class="group">
            <label for="last-name">Last name <abbr title="Mandatory">*</abbr></label>
            <input id="last-name" type="text" class="name">
          </p>
        </fieldset>
        <fieldset>
          <legend>Email address</legend>
          <p class="group">
            <label for="email">Enter email <abbr title="Mandatory">*</abbr></label>
            <input id="email" type="text" class="email">
          </p>
          <p class="group validation">
            <span class="validation-message" id="error1">Confirm your email address</span>
            <label for="email-confirm">Confirm email <abbr title="Mandatory">*</abbr></label>
            <input id="email-confirm" type="text" class="email">
          </p>
        </fieldset>
        <fieldset>
          <legend>Telephone number</legend>
          <p class="group">
            <label for="telephone">Telephone</label>
            <input id="telephone" type="text" class="telephone">
            <span class="help">Include your country code</span>
          </p>
        </fieldset>
        <fieldset>
          <legend>Postal address</legend>
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
        </fieldset>
        <fieldset>
          <legend>Biography</legend>
          <p class="group">
            <label for="biography">Write a few short words about yourself</label>
            <textarea id="biography" class="big"></textarea>
          </p>
          <p class="option group">
            <label for="public"><input id="public" type="checkbox"> Make this biography public</label>
          </p>
        </fieldset>
        <fieldset>
          <legend>I am interested in</legend>
          <p class="option group validation">
            <span class="validation-message" id="error2">Select at least one area of interest</span>
            <label><input type="checkbox"> Job offers</label>
            <label><input type="checkbox"> Networking</label>
            <label><input type="checkbox"> Business opportunities</label>
          </p>
        </fieldset>  
        <fieldset>
          <legend>I prefer to be contacted by</legend>
          <ul class="option group">
            <li><label><input type="radio" name="preferred-contact" checked> Email</label></li>
            <li><label><input type="radio" name="preferred-contact"> Telephone</label></li>
            <li><label><input type="radio" name="preferred-contact"> Post</label></li>
          </ul>
        </fieldset>
        <p class="action group">
          <button class="button" type="submit">Submit form</button>
        </p>
      </form>
    </div>
  </div>

* * *

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
