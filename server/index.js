var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var passport = require('passport');
var secrets = require('./config/secrets');
var webpack = require('webpack');
var config = require('../webpack/webpack.config.dev.js');
var app = express();
var compiler = webpack(config);

// keystone integration
//var keystone = require('keystone');
//var serve = require('serve-static');
//var favicon = require('serve-favicon');
//var body = require('body-parser');
//var cookieParser = require('cookie-parser');
//var multer = require('multer');

//var cookieSecret = 'secretCookie';

//app.use(cookieParser(cookieSecret));
//app.use(body.urlencoded({ extended: true }));
//app.use(body.json());
//app.use(multer());

// keystone.init({
//   'name': 'Website Name',
//   'brand': 'Website Brand',
//   'session': false,
//   'updates': 'updates',
//   'auth': true,
//   'user model': 'User',
//   'auto update': true,
//   'cookie secret': cookieSecret
// });

// Let keystone know where your models are defined. Here we have it at the `/models`
//keystone.import('models');

// Serve your static assets
//app.use(serve('./public'));

// keystone integration

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

// Bootstrap models
fs.readdirSync(__dirname + '/models').forEach(function(file) {
  if(~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

var isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}


// Bootstrap passport config
require('./config/passport')(app, passport);

// Bootstrap application settings
require('./config/express')(app, passport);

// Bootstrap routes
require('./config/routes')(app, passport);

app.listen(app.get('port'));

//keystone.app = app;
//keystone.start();