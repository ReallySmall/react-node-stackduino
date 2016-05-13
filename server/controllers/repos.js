var _ = require('lodash');
var request = require('request');

exports.commits = function(req, res) {

    const user = req.params.user;
    const repo = req.params.repo;
    const repoUrl = 'https://api.github.com/repos/' + user + '/' + repo;
    const query = '/commits?per_page=3' // just for testing, need to get this dynamically

    var requestOpts = {
        url: repoUrl + query,
        headers: { 'User-Agent': 'Stackduino-App' },
        method: "GET",
        gzip: true,
        timeout: 3000
    };

    request(requestOpts, function(error, response, body) {
        if (!error) {
            res.send({
                id: repo + 'commits',
                body: body
            });
        } else {
            console.log(error);
            res.status(500).send(error); 
        }
    });

};

exports.issues = function(req, res) {

    const user = req.params.user;
    const repo = req.params.repo;
    const repoUrl = 'https://api.github.com/repos/' + user + '/' + repo;
    const query = '/issues?state=all' // just for testing, need to get this dynamically

    var requestOpts = {
        url: repoUrl + query,
        headers: { 'User-Agent': 'Stackduino-App' },
        method: "GET",
        gzip: true,
        timeout: 3000
    };

    request(requestOpts, function(error, response, body) {
        if (!error) {
            res.send({
                id: repo + 'issues',
                body: body
            });
        } else {
            console.log(error);
            res.status(500).send(error); 
        }
    });

};