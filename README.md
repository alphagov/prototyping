Prototyping
===========

Use this app to make your protype static apps in!

It uses jekyll - https://github.com/mojombo/jekyll - to generate static files generated from templates.

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

Then underneath just start shoving in the content of the prototype!

## Starting the app

Just type "jekyll --server" at the command line in the root folder.
(add "&" at the end if you don't want to lock up your command line and are happy killing processes)

Then in your browser navigate to http://localhost:4000/[app-name]/index.html

Bosh!

## Prerequisites & installation

Needs Ruby 1.9.x (not installed by default on OS X 10.7, but GDS dev build includes it)
& jekyll

Follow this process to get up to speed:

1. After installing git and creating github account
http://help.github.com/mac-set-up-git/

2. Update Ruby, easiest way was to follow the "Install Ruby 1.9" instructions on
http://pragmaticstudio.com/blog/2010/9/23/install-rails-ruby-mac

3. then run
sudo gem install jekyll
(see https://github.com/mojombo/jekyll/wiki/install )

4. then finally
git clone git@github.com:alphagov/prototyping.git prototyping
to get a copy of the prototyping tool.
