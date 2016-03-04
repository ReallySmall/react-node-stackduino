var keystone = require('keystone');
var mongoose = require('mongoose');
var _ = require('lodash');
var Settings = keystone.list('Settings').model;


/**
 * List
 */
exports.all = function(req, res) {
  Settings.find({}).exec(function(err, settings) {
    if(!err) {
      res.json(settings);
    }else {
      console.log('Error in first query');
    }
  });
};
