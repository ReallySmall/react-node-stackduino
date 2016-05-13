'use strict';

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Link Model
 * ==========
 */

var Link = new keystone.List('Link', {
  map: { name: 'title' }
});

Link.add({
  title: { type: String, required: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  url: { type: Types.Url, required: true, initial: true },
  icon: { type: String },
  description: { type: String },
  location: { type: Types.Select, options: 'header, footer_col1, footer_col2, footer_col3' }
});

Link.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Link.register();