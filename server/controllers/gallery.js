var keystone = require('keystone');
var mongoose = require('mongoose');
var axios = require('axios');
var Gallery = keystone.list('Gallery').model;

var flickrApi = axios.create({
  timeout: 10000
});

exports.gallery = function(req, res) {

    var protocol = req.protocol;
    var hostName = req.headers.host;
    flickrApi.defaults.baseURL = protocol + '://' + hostName + '/api/flickr/';

  Gallery
    .findOne({})
    .sort({'_id': -1})
    .exec(function(err, gallery) {
    if(!err) {

        var groupID = gallery.groupID;
    	var tags = req.query.tags || gallery.tags;
    	var pagination = gallery.pagination;
    	var page = req.query.page || gallery.page;
        var user_id = req.query.user_id;

    	var query = 'byGroup/';
        query += groupID;
    	query += '?per_page=' + pagination;
    	query += '&page=' + page;

        if(tags){
            query += '&tags=' + tags;
        }

        if(user_id){
            query += '&user_id=' + user_id;
        }

        flickrApi.get(query)
            .then(function(response) {
                res.send(response.data);
            })
            .catch(function (error) {
                res.send(error);         
            });

    } else {
      console.log('Error in first query');
    }
  });
};

exports.features = function(req, res) {

    var protocol = req.protocol;
    var hostName = req.headers.host;
    flickrApi.defaults.baseURL = protocol + '://' + hostName + '/api/flickr/';

  Gallery.findOne({}).sort({'_id': -1}).exec(function(err, gallery) {
    if(!err) {

        var groupID = gallery.groupID;
        var tags = gallery.tags;
        var user_id = gallery.userId;

        var query = 'byGroup/';
        query += groupID + '/';
        query += tags;
        if(user_id){
            query += '?user_id=' + user_id;
        }

        flickrApi.get(query)
            .then(function(response) {
                res.send(response.data);
            })
            .catch(function (error) {
                res.send(error);         
            });

    } else {
      console.log('Error in first query');
    }
  });
};
