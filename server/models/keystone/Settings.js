var keystone = require('keystone');
var Types = keystone.Field.Types;

var Wrapper = new keystone.List('Wrapper', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Wrapper.add({
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
	} 
});

Wrapper.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Wrapper.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Wrapper.register();
