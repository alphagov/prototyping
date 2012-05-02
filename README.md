Prototyping
===========

Use this app to make your protype static apps in!

To start a new prototype, just make a new folder, named eg "app-name", then duplicate the root index.html into it.

Configuring is this easy:

---
layout: default
title: Prototype app
categories: Format
---

Set "layout" to the template file you want to use - the current one "default" is just the header and footer from gov.uk. It currently pulls in CSS from the gov.uk CDN. So you can probably leave this alone.

Set "title" to the name of the app you are building - it controls what appears as the main page title.

Set "categories" to be whatever the format might be - eg "service".

### Starting the app

Just type "jekyll --server" at the command line in the root folder.

Then in your browser navigate to http://localhost:4000/app-name/index.html

Bosh!