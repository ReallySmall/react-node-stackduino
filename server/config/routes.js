/**
 * Routes for express app
 */
var homepage = require('../controllers/homepage');
var boards = require('../controllers/boards');
var posts = require('../controllers/posts');
var wrapper = require('../controllers/wrapper');
var gallery = require('../controllers/gallery');
var express = require('express');
var users = require('../controllers/users');
var mongoose = require('mongoose');
var keystone = require('keystone');
var request = require('request');
var _ = require('lodash');
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
  app.get('/api/gallery', gallery.all);

    // route to proxy calls to Flickr api for gallery
  app.get('/api/flickr/bytags', function(req, res){

    var query = '?api_key=' + secrets.flickr.api_key;
    var tags = req.query.tags;
    var per_page = req.query.per_page || 10;
    var page = req.query.page || 1;

    if(tags){

      query += '&tags=' + tags,
      query += '&per_page=' + per_page,
      query += '&page=' + page,
      query += '&format=json';
      query += '&nojsoncallback=1';
      query += '&method=flickr.photos.search';
      query += '&tag_mode=all';
      query += '&extras=tags,owner_name,url_n,url_o';
      query += '&safe_search=1';

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

    } else {
      res.send(null);
    }

  });

  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
  app.get('*', function(req, res, next) {
    App.default (req, res);
  });

};
