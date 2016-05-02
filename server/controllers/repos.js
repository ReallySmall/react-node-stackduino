var _ = require('lodash');
var request = require('request');

exports.byUrl = function(req, res) {

    console.log(req);

    const repoUrl = 'https://api.github.com/repos/reallysmall/stackduino-v2'; // just for testing, need to get this dynamically
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
            res.send(body);
        } else {
            console.log(error);
            res.status(500).send(error); 
        }
    });

};
