var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Image Model
 * ==========
 */

var Image = new keystone.List('Image', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Image.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
    image:  { type: Types.CloudinaryImage }, 
    caption: { type: Types.Html, wysiwyg: true, height: 150 },
	link: { type: Types.Url }
});

Image.relationship({ path: 'homepages', ref: 'Homepage', refPath: 'images' });

Image.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Image.register();
