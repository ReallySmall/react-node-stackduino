'use strict';

/**
 * Routes for express app
 */
var homepage = require('../controllers/homepage');
var boards = require('../controllers/boards');
var repos = require('../controllers/repos');
var posts = require('../controllers/posts');
var wrapper = require('../controllers/wrapper');
var gallery = require('../controllers/gallery');
var flickr = require('../controllers/flickr');
var express = require('express');
var mongoose = require('mongoose');
var keystone = require('keystone');
var request = require('request');
var _ = require('lodash');
var secrets = require('./secrets');
var body = require('body-parser');

var path = require('path');
var compiled_app_module_path = path.resolve(__dirname, '../../', 'public', 'assets', 'server.js');
var App = require(compiled_app_module_path);

module.exports = function (app, passport) {

  // homepage routes
  app.get('/api/homepage', homepage.all);

  // board routes
  app.get('/api/boards', boards.all);
  app.get('/api/boards/:slug', boards.byId);

  // repo routes
  app.get('/api/repos/github/commits/:user/:repo', repos.commits);
  app.get('/api/repos/github/issues/:user/:repo', repos.issues);

  // article routes
  app.get('/api/posts', posts.all);
  app.get('/api/posts/:slug', posts.byId);

  // settings routes
  app.get('/api/wrapper', wrapper.all);

  // gallery route
  app.get('/api/gallery', gallery.gallery);
  app.get('/api/gallery/features', gallery.features);

  // route to proxy calls to Flickr api for gallery
  app.get('/api/flickr/byGroup/:group_id', flickr.byGroup);

  // route to proxy calls to Flickr api for gallery
  app.get('/api/flickr/byGroup/:group_id/:tag', flickr.featured);

  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
  app.get('*', function (req, res, next) {
    App.default(req, res);
  });
};