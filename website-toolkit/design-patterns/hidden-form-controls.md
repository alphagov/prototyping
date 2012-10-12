---
layout: design-pattern
title: Hidden form controls
status: draft
---

This pattern uses the details and summary tags to reveal content when a form label is clicked.
Use it to ask the user for additional input if they select a particular option.

<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

      <ul class="option group">
        <li>
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1">
              Attorneys must make all decisions jointly
            </label>
        </li>
        <li>
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
              Attorneys can make decisions jointly or severally
            </label>
        </li>
        <li>                                      
          <details class="hidden-controls group">
            <summary>
              <label><input type="radio" name="optionsRadios" id="optionsRadios3" value="option3"> It depends on the decision…</label>
            </summary>
            <label class="visuallyhidden">Please provide details</label>
            <textarea class="full-size" placeholder="Please provide details"></textarea>
          </details>
        </li>
      </ul>

    </div>
  </div>
</div>


<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

      <ul class="option group">
        <li>                                      
          <details class="hidden-controls group">
            <summary>
              <label><input type="checkbox"  value="value"> I want the following...</label>
            </summary>
            <label class="visuallyhidden">Please provide details</label>
            <textarea class="full-size" placeholder="Please provide details"></textarea>
          </details>
        </li>
      </ul>

    </div>
  </div>
</div>

## Still to do

Needs cross-browser testing. There's a known issue with radio buttons - if you select the radio that
reveals the content, then select one of the other radios, it doesn't hide the content again and the
toggle becomes inverted.

<script src="../javascripts/jquery.details.js"></script>
<script>
  $(function() {
    // Add conditional classname based on support
    $('html').addClass($.fn.details.support ? 'details' : 'no-details');
    // Emulate <details> where necessary and enable open/close event handlers
    $('details').details();

  });
</script>


