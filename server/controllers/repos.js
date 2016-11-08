var axios = require('axios');

var githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/',
    timeout: 3000,
    headers: {'User-Agent': 'Stackduino-App'}
});

exports.commits = function(req, res) {

    const user = req.params.user;
    const repo = req.params.repo;
    const query =  user + '/' + repo + '/commits?per_page=3'

    githubApi.get(query)
        .then(function(response) {
            res.send({
               id: repo + 'commits',
               body: response.data
            });
        })
        .catch(function (error) {
            res.send(error);         
        });

};

exports.issues = function(req, res) {

    const user = req.params.user;
    const repo = req.params.repo;
    const query =  user + '/' + repo + '/issues?state=all';

    githubApi.get(query)
        .then(function(response) {
            res.send({
                id: repo + 'issues',
                body: response.data
            });
        })
        .catch(function (error) {
            res.send(error);         
        });

};