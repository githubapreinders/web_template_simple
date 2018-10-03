# Simple Angular Template

A quick way to have a basis working angular front-end app, a basic express backend-app, together with gulp synchronization , sass,  and gulp build.

## Prerequisites
  * Node installed on your machine.
  * Bower installed on your machine. `npm install -g bower`
  * A command line tool like Bash or Powershell


## How to use
  * Git clone this repo onto your local machine.
  * In the shell go to the root folder where you find _package.json_ ; now run `npm install` ; the program will build you a node modules folder with basic modules to build a front-end and an express back-end.
  * Go to the app folder and run `bower install` ; this will install angular, jquery and ui-router in the bower-components folder.
  * When you want to spawn a back-end server you can run `node server/server.js` .This will give you a backend that you can visit at _http://localhost:3000_, as long as you keep the node-server running.
  * From the root folder now run `gulp watch` to start developing your app, the app will popup in your browser.
  * Any change you make to the html will trigger a browser reload after you save it. Similarly, any change you make to your scss will immediately be injected into the browser.
  * when you want to deploy your app to your server you can run `gulp build` which creates a compressed version of your app in the webapp folder.



