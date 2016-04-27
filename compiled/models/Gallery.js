'use strict';

var keystone = require('keystone');
var Types = keystone.Field.Types;

var Gallery = new keystone.List('Gallery', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Gallery.add({
	title: { type: String, required: true },
	intro: { type: String },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	tags: { type: String },
	pagination: { type: Number },
	page: { type: Number, default: 0 }
});

Gallery.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Gallery.register();