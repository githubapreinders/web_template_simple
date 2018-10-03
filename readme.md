# Simple Angular Template

A quick way to have a basis working angular app, together with gulp synchronization and gulp build.

## Prerequisites
..* Node installed on your machine.
..* Bower installed on your machine. `npm install -g bower`
..* A command line tool like Bash or Powershell


## how to use
  * Git clone this repo onto your local machine.
  * In the shell go to the root folder where you find _package.json_ ; now run `npm install` ; the program will build you a node modules folder with basic modules to build a front-end and an express back-end.
  * Go to the app folder and run `bower install` ; this will install angular, jquery and ui-router in the bower-components folder.
  * from the root folder now run `gulp watch` to start developing your app
  * when you want to deploy your app to your server you can run `gulp build` which creates a compressed version of your app in the webapp folder.


