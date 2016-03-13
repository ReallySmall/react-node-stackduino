var keystone = require('keystone');
var mongoose = require('mongoose');
var _ = require('lodash');
var Board = keystone.list('Board').model;


/**
 * List
 */
exports.all = function(req, res) {
  Board.find({}).exec(function(err, boards) {
    if(!err) {
      res.json(boards);
    }else {
      console.log('Error in first query');
    }
  });
};

/**
 * By Id
 */
exports.byId = function(req, res) {
  var versionId = req.params.versionid;
  Board.findOne({version: versionId}).exec(function(err, board) {
    if(!err) {
      res.json(board);
    }else {
      console.log('Error in first query');
    }
  });
};