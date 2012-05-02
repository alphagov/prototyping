Prototyping
===========

Use this app to make your protype static apps in!

## How to make a new prototype and configuration

Just create a new folder, named eg "app-name", then duplicate the root index.html into it.

Configuration is easy, here's the only bit you need to edit:

<pre>
---
layout: default
title: Prototype app
categories: Format
---
</pre>

Set "layout" to the template file you want to use - the current one "default" is just the header and footer from gov.uk. It currently pulls in CSS from the gov.uk CDN. So you can probably leave this alone.

Set "title" to the name of the app you are building - it controls what appears as the main page title.

Set "categories" to be whatever the gov.uk format might be - eg "service".

## Starting the app

Just type "jekyll --server" at the command line in the root folder.

Then in your browser navigate to http://localhost:4000/app-name/index.html

Bosh!