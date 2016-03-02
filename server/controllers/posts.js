var keystone = require('keystone');
var mongoose = require('mongoose');
var _ = require('lodash');
var Posts = keystone.list('Post').model;


/**
 * List
 */
exports.all = function(req, res) {
  Posts.find({}).exec(function(err, posts) {
    if(!err) {
      res.json(posts);
    }else {
      console.log('Error in first query');
    }
  });
};
