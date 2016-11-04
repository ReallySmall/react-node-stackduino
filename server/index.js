var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var secrets = require('./config/secrets');
var webpack = require('webpack');

// keystone integration
var keystone = require('keystone');
var serve = require('serve-static');
var favicon = require('serve-favicon');
var body = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var session = require('express-session');
var flash = require('connect-flash');

var app = express();
keystone.static(app);

app.use('/keystone', keystone.adminApp.staticRouter);
app.use(cookieParser(secrets.keystone.cookieSecret));
app.use(body.urlencoded({ extended: true }));
app.use(body.json());
app.use(multer());
app.use(session());
app.use(flash());

keystone.app = app;
keystone.mongoose = mongoose;

keystone.init({
   'name': 'Stackduino',
   'brand': 'Stackduino',
   'session': true,
   'updates': true,
   'auth': true,
   'user model': 'User',
   'auto update': true,
   'cookie secret': secrets.keystone.cookieSecret,
   'mongo': secrets.db
});

keystone.set('cloudinary config', secrets.keystone.cloudinary);
keystone.set('static', ['public', 'images']);

// Let keystone know where your models are defined. Here we have it at the `/models`
keystone.import('models');

// Set keystone routes for the admin panel, located at '/keystone'
keystone.routes(app);

// Initialize keystone's connection to the database
keystone.mongoose.connect(keystone.get('mongo'));

// Serve your static assets
app.use(serve('./public'));

// Find the appropriate database to connect to, default to localhost if not found.
var connect = function() {
  mongoose.connect(secrets.db, function(err, res) {
    if(err) {
      console.log('Error connecting to: ' + secrets.db + '. ' + err);
    }else {
      console.log('Succeeded connected to: ' + secrets.db);
    }
  });
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

var isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  var config = require('../webpack/webpack.config.dev-client.js');
  var compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// Bootstrap application settings
require('./config/express')(app);

// Bootstrap routes
require('./config/routes')(app);

app.listen(app.get('port'));
