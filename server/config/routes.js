/**
 * Routes for express app
 */
var topics = require('../controllers/topics');
var homepage = require('../controllers/homepage');
var boards = require('../controllers/boards');
var posts = require('../controllers/posts');
var settings = require('../controllers/settings');
var express = require('express');
var users = require('../controllers/users');
var mongoose = require('mongoose');
var keystone = require('keystone');
var _ = require('lodash');
var Topic = mongoose.model('Topic');
var Board = keystone.list('Board').model;
var Post = keystone.list('Post').model;
var App = require('../../public/assets/app.server');

module.exports = function(app, passport) {

  // google auth
  // Redirect the user to Google for authentication. When complete, Google
  // will redirect the user back to the application at
  // /auth/google/return
  // Authentication with google requires an additional scope param, for more info go 
  // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
  app.get('/auth/google', passport.authenticate('google', { scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ] }));

  // Google will redirect the user to this URL after authentication. Finish the
  // process by verifying the assertion. If valid, the user will be logged in.
  // Otherwise, the authentication has failed.
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/login'
    }));

  // homepage routes
  app.get('/api/homepage', homepage.all);

  // board routes
  app.get('/api/boards', boards.all);
  app.get('/api/boards/:versionid', boards.byId);

  // article routes
  app.get('/api/posts', posts.all);

  // settings routes
  app.get('/api/settings', settings.all);

  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
  app.get('*', function (req, res, next) {
    App(req, res);
  });

};
