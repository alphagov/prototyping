---
layout: design-pattern
title: Buttons
status: draft
css: ../css/design-patterns/buttons.css
---


### Examples
<div class="pattern-example">
  <div class="inner">

  <p>
    <a href="#" class="btn">Primary action</a> 
    <a href="#" class="btn-secondary">Secondary action</a> 
    <a href="#" class="btn-warning">Warning action</a>
  </p>

  <p>
    <a class="disabled btn">Primary action</a> 
    <a class="disabled btn-secondary">Secondary action</a> 
    <a class="disabled btn-warning">Warning action</a>
  </p>

  <p>
    <a href="#" class="small btn">Primary action</a> 
    <a href="#" class="small btn-secondary">Secondary action</a> 
    <a href="#" class="small btn-warning">Warning action</a>
  </p>

  <p>
    <a href="#" class="x-small btn">Primary action</a> 
    <a href="#" class="x-small btn-secondary">Secondary action</a> 
    <a href="#" class="x-small btn-warning">Warning action</a>
  </p>

  </div>
</div>

### Code

    <a href="#" class="btn">Primary action</a> 
    <a href="#" class="btn-secondary">Secondary action</a> 
    <a href="#" class="btn-warning">Warning action</a>



## Dependencies

The above classes are included when you import 'forms.scss'. To create your own button colours you'll need to import 'buttons.scss' and use it as follows:

    .btn-class{
      @include button($colour);
    }