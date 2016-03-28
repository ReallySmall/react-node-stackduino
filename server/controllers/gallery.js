var keystone = require('keystone');
var mongoose = require('mongoose');
var _ = require('lodash');
var Gallery = keystone.list('Gallery').model;

/**
 * List
 */
exports.all = function(req, res) {
  Gallery.find({}).exec(function(err, gallery) {
    if(!err) {
      res.json(gallery);
    }else {
      console.log('Error in first query');
    }
  });
};
