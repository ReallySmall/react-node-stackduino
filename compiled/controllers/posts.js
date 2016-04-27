'use strict';

var keystone = require('keystone');
var mongoose = require('mongoose');
var _ = require('lodash');
var Posts = keystone.list('Post').model;

/**
 * List
 */
exports.all = function (req, res) {
  Posts.find({}).exec(function (err, posts) {
    if (!err) {
      res.json(posts);
    } else {
      console.log('Error in first query');
    }
  });
};

/**
 * By Id
 */
exports.byId = function (req, res) {
  var slug = req.params.slug;
  Posts.findOne({ slug: slug }).exec(function (err, post) {
    if (!err) {
      res.json(post);
    } else {
      console.log('Error in first query');
    }
  });
};