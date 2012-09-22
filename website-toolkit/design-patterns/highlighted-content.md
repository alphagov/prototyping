---
layout: design-pattern
title: Highlighted content
status: draft
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

    <div class="address vcard">
      <div class="adr org fn">
        <p>
              Office for Judicial Complaints
          <br>Steel House
          <br>11 Tothill Street
          <br>London
          <br>SW1H 9LJ
        </p>
      </div>
    </div>  

  </div>
</div>

* * * 

# Discussion

Q: It feels like the CSS for these needs some rationalising.
For example, why do some of the styles need two classes to work properly?

The help notice icon feels more like a warning or alert. Could we just use the info notice instead
and repurpose the help one as a warning one?



