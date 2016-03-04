var keystone = require('keystone');
var mongoose = require('mongoose');
var _ = require('lodash');
var Homepage = keystone.list('Homepage').model;


/**
 * List
 */
exports.all = function(req, res) {
  Homepage.find({}).exec(function(err, homepage) {
    if(!err) {
      res.json(homepage);
    }else {
      console.log('Error in first query');
    }
  });
};
