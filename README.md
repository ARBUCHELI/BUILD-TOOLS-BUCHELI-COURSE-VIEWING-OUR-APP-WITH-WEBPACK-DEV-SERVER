# BUILD-TOOLS-BUCHELI-COURSE-VIEWING-OUR-APP-WITH-WEBPACK-DEV-SERVER

## In order to view the app in the browser follow the next steps:

* We would first install webpack-dev-server as a development dependency in a local environment:
```
npm install --save-dev webpack-dev-server
```

* Next, we need an HTML document, and it should embed the JavaScript from our exit point:
```
<script src="./dist/main.js"></script>
```

* To use webpack-dev-server, we’ll add start command to package.json inside of the scripts section.
```
"build": "webpack --watch",
"start": "webpack serve"
```

* This is building our project and then serving it to the browser.

The build command is going to compile our project as well as update it when we make changes.

The serve command is going to serve our build and refresh when the build changes.

In order to have our project update any time we make changes, we would typically run each of these commands in a separate terminal.

We would first run the build command in one terminal, to create the bundle and wait for updates.

```
npm run build
```

We would next launch a second terminal and run the start command to serve the site.

```
npm run start
```
