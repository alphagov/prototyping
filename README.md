Prototyping
===========

Quickly create static prototypes for GOV.UK.

Built using [Jekyll](https://github.com/mojombo/jekyll).

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

Set "layout" to the template file you want to use - the "default" one is just the header and footer from gov.uk. It currently pulls in CSS from the gov.uk CDN. So you can probably leave this alone.

Set "title" to the name of the app you are building - it controls what appears as the main page title.

Set "categories" to be whatever the gov.uk format might be - eg "service".

Then underneath just start shoving in the content of the prototype!

## Starting the app

Just type "jekyll --server" at the command line in the root folder.
(add "&" at the end if you don't want to lock up your command line and are happy killing processes)

Then in your browser navigate to http://localhost:4000/[app-name]/index.html

Bosh!

(PS If it isn't working or can't find the files, try bundling - at the command line just type "bundle" and let it run)

## Prerequisites & installation

Needs Ruby 1.9.x (not installed by default on OS X 10.7, but GDS dev build includes it)
& Jekyll

Follow this process to get up to speed:

1. After installing git and creating github account
http://help.github.com/mac-set-up-git/

2. Update Ruby, easiest way was to follow the "Install Ruby 1.9" instructions on
http://pragmaticstudio.com/blog/2010/9/23/install-rails-ruby-mac

3. Get the code

    `git clone git@github.com:alphagov/prototyping.git prototyping`

to get a copy of the prototyping tool.

4. Finally install jekyll and dependencies:

    <pre>
    sudo gem install bundle
    bundle install
    </pre>

## Pushing online

We have an instance of Heroku (http://www.heroku.com/) that you can push the prototyping app to, in order to share prototypes externally. It lives at http://govuk-prototyping.herokuapp.com

So you can push to Heroku from your own machine follow these steps:

1. Sign up to Heroku

2. Get invited into our Heroku instance as a contributor

3. Install the Heroku toolbelt from https://toolbelt.herokuapp.com/

4. At the command line:

  <pre>
  $ heroku login
  Enter your Heroku credentials.
  Email: adam@example.com
  Password: 
  Could not find an existing public key.
  Would you like to generate one? [Yn] 
  Generating new SSH public key.
  Uploading ssh public key /Users/adam/.ssh/id_rsa.pub
  </pre>

5. Make sure you're in the repository, then enter "git remote add heroku git@heroku.com:govuk-prototyping.git", which adds the Heroku instance as a remote server for the repo, so you can push to it

6. You can confirm this has worked by using "git remote" then checking you see:

  <pre>
  origin
  heroku
  </pre>

7. Then every time you updated and committed your latest work, you can push to Heroku with "git push heroku master", make sure you have also pushed your changes to github to keep the two origins in sync

8. Finally, you can visit eg http://govuk-prototyping.herokuapp.com/licence-format/ to see your prototype

We might want to think about putting on a password at some point.

## Using Sass

'.scss' files will be converted to their '.css' counterparts in the generated site. By default the Sass converter looks in `/_includes/stylesheets` and `/assets/toolkit/stylesheets` to resolve @import requests.

If you want to use the [GOV.UK Frontend Toolkit](https://github.com/alphagov/govuk_frontend_toolkit) Sass, then add the repo as a submodule to `/assets/toolkit` like this:

    git submodule add git@github.com:alphagov/govuk_frontend_toolkit.git assets/toolkit
    git submodule init
    git submodule update


Finally, in order for .scss conversion to work with Jekyll you'll need to start each '.scss' file with empty YAML front matter. 

## Sharing CSS code

If you find that you've created some useful and reusable styles in your prototype, share it with the rest of us by adding them as mixins to '/_includes/scss/_prototyping-library.scss'

## Working offline

By default the templates reference the unmerged assets in our preview environment. This helps with debugging and means you're always working with the
latest version of the assets. However, there might be times when you need to work offline temporarily. To do this, add the following to the YAML front matter of the page you're working on:

    assets: local

The page will now reference local copies of those assets (in '/static'). Note - these local assets aren't synced in any way and will almost certainly be out date - which is why you should only use this as a temporary measure.
