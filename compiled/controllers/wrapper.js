'use strict';

var keystone = require('keystone');
var mongoose = require('mongoose');
var _ = require('lodash');
var Wrapper = keystone.list('Wrapper').model;
var Link = keystone.list('Link').model;

/**
 * List
 */
exports.all = function (req, res) {

	var data = {};
	var wrapperData = void 0;
	var linkData = void 0;

	Wrapper.findOne({}).sort({ '_id': -1 }).exec(function (err, wrapper) {
		if (!err) {

			wrapperData = wrapper;

			Link.find({}).sort({ '_id': -1 }).exec(function (err, link) {

				if (!err) {
					linkData = link;
					data.wrapperData = wrapperData;
					data.linkData = linkData;
					res.json(data);
				} else {
					console.log('Error in links query');
				}
			});
		} else {
			console.log('Error in wrapper query');
		}
	});
};