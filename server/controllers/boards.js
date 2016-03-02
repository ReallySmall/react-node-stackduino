var keystone = require('keystone');
var mongoose = require('mongoose');
var _ = require('lodash');
var Boards = keystone.list('Board').model;


/**
 * List
 */
exports.all = function(req, res) {
  Boards.find({}).exec(function(err, boards) {
    if(!err) {
      res.json(boards);
    }else {
      console.log('Error in first query');
    }
  });
};
