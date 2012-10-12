---
layout: design-pattern
title: Emphasised form controls
status: draft
---

# Emphasised radio buttons

<div class="pattern-example">
  <div class="inner">
    <div class="form-example-1">

      <p class="emphasised option group">
        <label><input type="radio" name="radios"> Job offers</label>
        <label><input type="radio" name="radios"> Networking</label>
        <label><input type="radio" name="radios"> Business opportunities</label>
      </p>

    </div>
  </div>
</div>

<script type="text/javascript">
$(function() {
  {% include javascripts/design-patterns/_emphasised_form_controls.js %}
});
</script>

