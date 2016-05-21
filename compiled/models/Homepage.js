'use strict';

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Homepage Model
 * ==========
 */

var Homepage = new keystone.List('Homepage', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Homepage.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	imagesSlot1: { type: Types.CloudinaryImages },
	imagesSlot2: { type: Types.CloudinaryImages },
	imagesSlot1Local: {
		type: Types.LocalFiles,
		dest: './files/multiple',
		prefix: '/multiple',
		format: function format(item, file) {
			return '<img src="' + file.href + '" style="max-width: 300px">';
		}
	},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
		additional: { type: Types.Html, wysiwyg: true, height: 400 }
	}
});

Homepage.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Homepage.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Homepage.register();