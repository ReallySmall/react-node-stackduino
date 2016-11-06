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
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);         
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