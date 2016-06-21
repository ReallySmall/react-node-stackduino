var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Homepage Model
 * ==========
 */

var Homepage = new keystone.List('Homepage', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	sortable: true
});

Homepage.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	content: {
		slot1: { type: Types.Html, wysiwyg: true, height: 150 },
		slot2: { type: Types.Html, wysiwyg: true, height: 800 },
		slot3: { type: Types.Html, wysiwyg: true, height: 400 },
		slot4: { type: Types.Html, wysiwyg: true, height: 400 }
	},
	images: {
		slot1: { type: Types.Relationship, ref: 'Image', many: true },
		slot2: { type: Types.Relationship, ref: 'Image', many: true },
		slot3: { type: Types.Relationship, ref: 'Image', many: true },
		slot4: { type: Types.Relationship, ref: 'Image', many: true }
	}
});

Homepage.schema.virtual('content.full').get(function() {
	return this.content.slot2 || this.content.slot1;
});

Homepage.relationship({ path: 'images', ref: 'Image', refPath: 'homepages' });

Homepage.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Homepage.register();
