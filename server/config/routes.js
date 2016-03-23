/**
 * Routes for express app
 */
var topics = require('../controllers/topics');
var homepage = require('../controllers/homepage');
var boards = require('../controllers/boards');
var posts = require('../controllers/posts');
var wrapper = require('../controllers/wrapper');
var express = require('express');
var users = require('../controllers/users');
var mongoose = require('mongoose');
var keystone = require('keystone');
var request = require('request');
var _ = require('lodash');
var Topic = mongoose.model('Topic');
var Board = keystone.list('Board').model;
var Post = keystone.list('Post').model;
var secrets = require('./secrets');
var body = require('body-parser');

var path = require('path');
var compiled_app_module_path = path.resolve(__dirname, '../../', 'public', 'assets', 'server.js');
var App = require(compiled_app_module_path);

module.exports = function(app, passport) {

  // homepage routes
  app.get('/api/homepage', homepage.all);

  // board routes
  app.get('/api/boards', boards.all);
  app.get('/api/boards/:slug', boards.byId);

  // article routes
  app.get('/api/posts', posts.all);
  app.get('/api/posts/:slug', posts.byId);

  // settings routes
  app.get('/api/wrapper', wrapper.all);

  // gallery route
  // route to proxy calls to Flickr api for gallery
  app.get('/api/gallery', function(req, res){

      var query = '?api_key=' + secrets.flickr.api_key;
      query += '&tags=stackduino,-controller',
      query += '&format=json&nojsoncallback=1&per_page=150&page=1&method=flickr.photos.search&tag_mode=all&extras=tags,owner_name,url_n,url_o&safe_search=1'

      var requestOpts = {
        url: 'https://api.flickr.com/services/rest/' + query,
        method: "GET",
        gzip: true,
        timeout: 3000
      };

      request(requestOpts, function(error, response, body) {
        if (!error && response.statusCode === 200) {
          res.send(body);
        } else {
          console.log(error);
          res.send(error);         
        }
      });

  });

  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
  app.get('*', function(req, res, next) {
    App.
  default (req, res);
  });

};
