'use strict';

var keystone = require('keystone');
var mongoose = require('mongoose');
var _ = require('lodash');
var request = require('request');
var Gallery = keystone.list('Gallery').model;

exports.gallery = function (req, res) {
    Gallery.findOne({}).sort({ '_id': -1 }).exec(function (err, gallery) {
        if (!err) {

            var groupID = gallery.groupID;
            var tags = req.query.tags || gallery.tags;
            var pagination = gallery.pagination;
            var page = req.query.page || gallery.page;
            var user_id = req.query.user_id;

            var query = 'http://localhost:3000/api/flickr/byGroup/';
            query += groupID;
            query += '?per_page=' + pagination;
            query += '&page=' + page;
            if (tags) {
                query += '&tags=' + tags;
            }
            if (user_id) {
                query += '&user_id=' + user_id;
            }

            var requestOpts = {
                url: query,
                method: "GET",
                timeout: 10000
            };

            request(requestOpts, function (error, response, body) {
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

exports.features = function (req, res) {
    Gallery.findOne({}).sort({ '_id': -1 }).exec(function (err, gallery) {
        if (!err) {

            var groupID = gallery.groupID;
            var tags = gallery.tags;
            var user_id = gallery.userId;

            var query = 'http://localhost:3000/api/flickr/byGroup/';
            query += groupID + '/';
            query += tags;
            if (user_id) {
                query += '?user_id=' + user_id;
            }

            var requestOpts = {
                url: query,
                method: "GET",
                timeout: 10000
            };

            request(requestOpts, function (error, response, body) {
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