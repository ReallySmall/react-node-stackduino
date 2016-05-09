'use strict';

var request = require('request');
var secrets = require('../config/secrets');

exports.byGroup = function (req, res) {

    var query = '?api_key=' + secrets.flickr.api_key;
    var groupID = req.query.group_id;
    var tags = req.query.tags;
    var per_page = req.query.per_page || 10;
    var page = req.query.page || 1;

    //query += '&tags=' + tags,
    query += '&per_page=' + per_page, query += '&page=' + page, query += '&format=json';
    query += '&nojsoncallback=1';
    query += '&method=flickr.groups.pools.getPhotos';
    query += '&group_id=' + groupID;
    query += '&extras=tags,owner_name,url_n,url_o';
    query += '&safe_search=1';

    var requestOpts = {
        url: 'https://api.flickr.com/services/rest/' + query,
        method: "GET",
        gzip: true,
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