var keystone = require('keystone');
var mongoose = require('mongoose');
var Posts = keystone.list('Post').model;
var Tags = keystone.list('Tag').model;

/**
 * List
 */
exports.all = function(req, res) {

  var data = {
    teasers: [],
    tags: []
  };

  Posts
    .find({})
    .sort({publishedDate: -1})
    .populate('images.slot1 images.slot2 tags').exec(function(err, teasers) {
      if(!err) {
        data.teasers = teasers;
        Tags
          .find({})
          .exec(function(err, tags) {
            if(!err) {
              
              var tagList = [];

              for(var i = 0; i < tags.length; i++){
                tagList.push(tags[i].name);
              };

              data.tags = tagList;
              res.json(data);
            } else {
              console.log('Error in tags query');
            }
        });
      } else {
        console.log('Error in posts query');
      }
  });
};

/**
 * By Id
 */
exports.byId = function(req, res) {
  var slug = req.params.slug;
  Posts.findOne({slug: slug}).populate('images.slot1 images.slot2 tags').exec(function(err, post) {
      if(!err) {
        res.json(post);
      } else {
        console.log('Error in post query');
      }
  });
};
