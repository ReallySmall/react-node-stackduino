'use strict';

var keystone = require('keystone');
var mongoose = require('mongoose');
var _ = require('lodash');
var Wrapper = keystone.list('Wrapper').model;

/**
 * List
 */
exports.all = function (req, res) {
  Wrapper.findOne({}).sort({ '_id': -1 }).exec(function (err, wrapper) {
    if (!err) {
      res.json(wrapper);
    } else {
      console.log('Error in first query');
    }
  });
};