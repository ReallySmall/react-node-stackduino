'use strict';

var request = require('request');
var secrets = require('../config/secrets');

exports.byGroup = function (req, res) {

    var group_id = req.params.group_id;
    var query = '?api_key=' + secrets.flickr.api_key;
    var per_page = req.query.per_page || 10;
    var page = req.query.page || 1;

    query += '&per_page=' + per_page, query += '&page=' + page, query += '&format=json';
    query += '&nojsoncallback=1';
    query += '&method=flickr.groups.pools.getPhotos';
    query += '&group_id=' + group_id;
    query += '&extras=tags,owner_name,url_n,url_o,url_l,url_c';
    query += '&safe_search=1';

    var requestOpts = {
        url: 'https://api.flickr.com/services/rest/' + query,
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
};

exports.featured = function (req, res) {

    var group_id = req.params.group_id;
    var tag = req.params.tag;
    var query = '?api_key=' + secrets.flickr.api_key;
    var user_id = req.query.user_id;

    query += '&format=json';
    query += '&nojsoncallback=1';
    query += '&method=flickr.groups.pools.getPhotos';
    query += '&group_id=' + group_id;
    query += '&tags=' + tag;
    query += '&extras=tags,owner_name,url_n,url_o,url_l,url_c';
    query += '&safe_search=1';
    if (user_id) {
        query += '&user_id=' + user_id;
    }

    var requestOpts = {
        url: 'https://api.flickr.com/services/rest/' + query,
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
};