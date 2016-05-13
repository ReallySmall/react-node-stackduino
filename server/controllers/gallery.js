var keystone = require('keystone');
var mongoose = require('mongoose');
var _ = require('lodash');
var request = require('request');
var Gallery = keystone.list('Gallery').model;

exports.all = function(req, res) {
  Gallery.findOne({}).sort({'_id': -1}).exec(function(err, gallery) {
    if(!err) {

        var groupID = gallery.groupID;
    	var tags = gallery.tags;
    	var pagination = gallery.pagination;
    	var page = req.query.page || gallery.page;

    	var query = 'http://localhost:3000/api/flickr/byGroup?';
        query += 'group_id=' + groupID;
    	query += '&tags=' + tags;
    	query += '&per_page=' + pagination;
    	query += '&page=' + page;

    	var requestOpts = {
        	url: query,
	        method: "GET",
	        gzip: true,
	        timeout: 10000
	    };

	    request(requestOpts, function(error, response, body) {
	        if (!error && response.statusCode === 200) {
                res.send(body);
	        } else {
	          console.log(error);
	          res.send(error);         
	        }
	    });

    } else {
      console.log('Error in first query');
    }
  });
};
