var keystone = require('keystone');
var mongoose = require('mongoose');
var _ = require('lodash');
var Homepage = keystone.list('Homepage').model;


/**
 * List
 */
exports.all = function(req, res) {
  Homepage.findOne({}).sort({'_id': -1}).populate('images.slot1 images.slot2 images.slot3 images.slot4 images.slot5').exec(function(err, homepage) {
    if(!err) {
    	res.json(homepage);
    } else {
      console.log('Error in first query');
    }
  });
};
