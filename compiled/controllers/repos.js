'use strict';

var _ = require('lodash');
var request = require('request');

exports.commits = function (req, res) {

    var user = req.params.user;
    var repo = req.params.repo;
    var repoUrl = 'https://api.github.com/repos/' + user + '/' + repo;
    var query = '/commits?per_page=3'; // just for testing, need to get this dynamically

    var requestOpts = {
        url: repoUrl + query,
        headers: { 'User-Agent': 'Stackduino-App' },
        method: "GET",
        gzip: true,
        timeout: 3000
    };

    request(requestOpts, function (error, response, body) {
        if (!error) {
            res.send(body);
        } else {
            console.log(error);
            res.status(500).send(error);
        }
    });
};

exports.issues = function (req, res) {

    var user = req.params.user;
    var repo = req.params.repo;
    var repoUrl = 'https://api.github.com/repos/' + user + '/' + repo;
    var query = '/issues?state=all'; // just for testing, need to get this dynamically

    var requestOpts = {
        url: repoUrl + query,
        headers: { 'User-Agent': 'Stackduino-App' },
        method: "GET",
        gzip: true,
        timeout: 3000
    };

    request(requestOpts, function (error, response, body) {
        if (!error) {
            res.send(body);
        } else {
            console.log(error);
            res.status(500).send(error);
        }
    });
};