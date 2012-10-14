---
layout: design-pattern
title: Emphasised form controls
status: draft
css: ../css/design-patterns/emphasised-form-controls.css
---

The pattern below gives selected radio buttons and checkboxes a highlight colour and makes their clickable area larger. Use this to emphasise important decisions.

<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

      <ul class="emphasised option group">
        <li>
          <label>
            <input type="radio" name="LPAtypeRadios" id="optionsRadios1" value="option1">
            Create an LPA for property and financial affairs
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="LPAtypeRadios" id="optionsRadios2" value="option2">
            Create an LPA for health and welfare
          </label>
        </li>
      </ul>

    </div>
  </div>
</div>

      <ul class="emphasised option group">
        <li>
          <label>
            <input type="radio" name="LPAtypeRadios" id="optionsRadios1" value="option1">
            Create an LPA for property and financial affairs
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="LPAtypeRadios" id="optionsRadios2" value="option2">
            Create an LPA for health and welfare
          </label>
        </li>
      </ul>


<script type="text/javascript">
$(function() {
  {% include javascripts/design-patterns/_emphasised_form_controls.js %}
});
</script>


