var axios = require('axios');

var flickrApi = axios.create({
  baseURL: 'https://api.flickr.com/services/rest/',
  timeout: 8000
});

exports.byGroup = function(req, res) {

    var group_id = req.params.group_id;
    var query = '?api_key=' + process.env.FLICKR_API_KEY; 
    var per_page = req.query.per_page || 10;
    var page = req.query.page || 1;

    query += '&per_page=' + per_page,
    query += '&page=' + page,
    query += '&format=json';
    query += '&nojsoncallback=1';
    query += '&method=flickr.groups.pools.getPhotos';
    query += '&group_id=' + group_id;
    query += '&extras=tags,owner_name,url_n,url_o,url_l,url_c,url_z';
    query += '&safe_search=1';

    flickrApi.get(query)
        .then(function(response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);         
        });

};

exports.featured = function(req, res) {

    var group_id = req.params.group_id;
    var tag = req.params.tag;
    var query = '?api_key=' + process.env.FLICKR_API_KEY;
    var user_id = req.query.user_id;

    query += '&format=json';
    query += '&nojsoncallback=1';
    query += '&method=flickr.groups.pools.getPhotos';
    query += '&group_id=' + group_id;
    query += '&tags=' + tag;
    query += '&extras=tags,owner_name,url_n,url_o,url_l,url_c,url_z';
    query += '&safe_search=1';
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

};