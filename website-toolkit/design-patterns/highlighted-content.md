---
layout: design-pattern
title: Highlighted content
status: draft
css: ../css/design-patterns/panels.css
---

There are various options for highlighting different kinds of content.
Typically the content is wrapped in a div or other element and assigned a class, for example:

    <div class="application-notice">
      <!-- Content goes here -->
    </div>

The following highlight classes are available from any page. Use them sparingly. Every additional highlight panel you use on a page diminishes their overall impact.

<div class="pattern-example">
  <div class="inner">

    <div class="application-notice">
      <p>class="application-notice"</p>
    </div>

    <div class="application-notice info-notice">
      <p>class="application-notice info-notice"</p>
    </div>

    <div class="application-notice help-notice">
      <p>class="application-notice help-notice"</p>
    </div>

    <div class="advisory minor">
      <p>class="advisory minor"</p>
    </div>

    <div class="form-download">
      <p>class="form-download"</p>
    </div>

    <div class="subscribe">
      <p>class="subscribe"</p>
    </div>

    <div class="intro">
      <p>class="intro"</p>
    </div>

    <div class="contact">
      <p>class="contact"</p>
    </div>

  </div>
</div>

# Panel mixin

If you need to roll your own panel styles there's a [panel mixin](https://github.com/alphagov/prototyping/blob/master/_includes/scss/design-patterns/_panels.scss) available as well.


<div class="pattern-example">

  <div class="inner">

    <div class="new-panel">
      <p>Here's a new panel</p>
    </div>

  </div>

  <div class="side-by-side">
  <div>
    <h2>HTML</h2>
<pre><code>&lt;div class="new-panel"&gt;
  &lt;p&gt;Here's a new panel&lt;/p&gt;
&lt;/div&gt;
</code></pre>
  </div>
  <div>
    <h2>Sass</h2>
<pre><code>.new-panel {
  @include panel($grass-green-25) 
}
</code></pre>
  </div>
</div>

</div>

The mixin also lets you specify width and float properties for the panel:

<div class="pattern-example">

  <div class="inner">
    <div class="floated-panel">
      <p>50% wide, floated right.</p>
    </div>
    <p>Eyes right --></p>
  </div>
  <div class="side-by-side">
    <div>
      <h2>HTML</h2>
  <pre><code>&lt;div class="inner"&gt;
    &lt;div class="floated-panel"&gt;
      &lt;p&gt;50% wide, floated right.&lt;/p&gt;
    &lt;/div&gt;
    &lt;p&gt;Eyes right --&gt;&lt;/p&gt;
  &lt;/div&gt;
  </code></pre>
    </div>
    <div>
      <h2>Sass</h2>
  <pre><code>.floated-panel {
    @include panel($light-blue-25, 50%, right);
  }</code></pre>
    </div>
  </div>

</div>

* * * 

# Discussion

Q: It feels like the CSS for these needs some rationalising.
For example, why do some of the styles need two classes to work properly?

The help notice icon feels more like a warning or alert. Could we just use the info notice instead
and repurpose the help one as a warning one?



