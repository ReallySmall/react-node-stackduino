var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Board Model
 * ==========
 */

var Settings = new keystone.List('Settings', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Settings.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	header: {
		siteTitle:  { type: String, required: true, initial: true },
    	siteSubtitle:  { type: String, required: true, initial: true }
	},
	footer: {
		col1Title: { type: String },
		col2Title: { type: String },
		col3Title: { type: String }
	},
    gallery: {
    	tags:  { type: String },
    	perPage:  { type: Number }
    } 
});

Settings.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Settings.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Settings.register();
