var axios = require('axios');

var githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/',
    timeout: 3000,
    headers: {'User-Agent': 'Stackduino-App'}
});

exports.commits = function(req, res) {

    const query =  req.params.user + '/' + req.params.repo + '/commits?per_page=3'

    githubApi.get(query)
        .then(function(response) {
            console.log(response);
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);         
        });

};

exports.issues = function(req, res) {

    const query =  req.params.user + '/' + req.params.repo + '/issues?state=all';

    githubApi.get(query)
        .then(function(response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);         
        });

};