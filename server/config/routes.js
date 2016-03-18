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
var App = require('../../public/assets/app.server');
var secrets = require('./secrets');
var body = require('body-parser');

module.exports = function(app, passport) {

  // homepage routes
  app.get('/api/homepage', homepage.all);

  // board routes
  app.get('/api/boards', boards.all);
  app.get('/api/boards/:versionid', boards.byId);

  // article routes
  app.get('/api/posts', posts.all);

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

  // App is a function that requires store data and url to initialize and return the React-rendered html string
  app.get('*', function (req, res, next) {
    App(req, res);
  });

};
