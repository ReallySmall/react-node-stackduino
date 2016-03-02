(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null),
    React = require('react'),
    Fields = require('FieldTypes'),
    InvalidFieldType = require('./InvalidFieldType');

var Form = React.createClass({

	displayName: 'CreateForm',

	getDefaultProps: function getDefaultProps() {
		return {
			err: null,
			values: {},
			animate: false
		};
	},

	getInitialState: function getInitialState() {

		var values = this.props.values;

		_.each(this.props.list.fields, function (field) {
			if (!values[field.path]) {
				values[field.path] = field.defaultValue;
			}
		});

		return {
			values: values
		};
	},

	handleChange: function handleChange(event) {
		var values = this.state.values;
		values[event.path] = event.value;
		this.setState({
			values: values
		});
	},

	componentWillMount: function componentWillMount() {
		this._bodyStyleOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
	},

	componentDidMount: function componentDidMount() {
		if (this.refs.focusTarget) {
			this.refs.focusTarget.focus();
		}
	},

	componentWillUnmount: function componentWillUnmount() {
		document.body.style.overflow = this._bodyStyleOverflow;
	},

	getFieldProps: function getFieldProps(field) {
		var props = _.clone(field);
		props.value = this.state.values[field.path];
		props.values = this.state.values;
		props.onChange = this.handleChange;
		props.mode = 'create';
		return props;
	},

	render: function render() {

		var errors = null,
		    form = {},
		    list = this.props.list,
		    formAction = '/keystone/' + list.path,
		    nameField = this.props.list.nameField,
		    focusRef;

		var modalClass = 'modal modal-md' + (this.props.animate ? ' animate' : '');

		if (this.props.err && this.props.err.errors) {
			var msgs = {};
			_.each(this.props.err.errors, function (err, path) {
				msgs[path] = React.createElement(
					'li',
					null,
					err.message
				);
			});
			errors = React.createElement(
				'div',
				{ className: 'alert alert-danger' },
				React.createElement(
					'h4',
					null,
					'There was an error creating the new ',
					list.singular,
					':'
				),
				React.createElement(
					'ul',
					null,
					msgs
				)
			);
		}

		if (list.nameIsInitial) {
			var nameFieldProps = this.getFieldProps(nameField);
			nameFieldProps.ref = focusRef = 'focusTarget';
			if (nameField.type === 'text') {
				nameFieldProps.className = 'item-name-field';
				nameFieldProps.placeholder = nameField.label;
				nameFieldProps.label = false;
			}
			form[nameField.path] = React.createElement(Fields[nameField.type], nameFieldProps);
		}

		_.each(list.initialFields, function (path) {

			var field = list.fields[path];

			if ('function' !== typeof Fields[field.type]) {
				form[field.path] = React.createElement(InvalidFieldType, { type: field.type, path: field.path });
				return;
			}

			var fieldProps = this.getFieldProps(field);

			if (!focusRef) {
				fieldProps.ref = focusRef = 'focusTarget';
			}

			form[field.path] = React.createElement(Fields[field.type], fieldProps);
		}, this);

		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: modalClass },
				React.createElement(
					'div',
					{ className: 'modal-dialog' },
					React.createElement(
						'form',
						{ className: 'modal-content', encType: 'multipart/form-data', method: 'post', action: formAction },
						React.createElement('input', { type: 'hidden', name: 'action', value: 'create' }),
						React.createElement('input', { type: 'hidden', name: Keystone.csrf.key, value: Keystone.csrf.value }),
						React.createElement(
							'div',
							{ className: 'modal-header' },
							React.createElement('button', { type: 'button', className: 'modal-close', onClick: this.props.onCancel }),
							React.createElement(
								'div',
								{ className: 'modal-title' },
								'Create a new ',
								list.singular
							)
						),
						React.createElement(
							'div',
							{ className: 'modal-body' },
							errors,
							form
						),
						React.createElement(
							'div',
							{ className: 'modal-footer' },
							React.createElement(
								'button',
								{ type: 'submit', className: 'btn btn-create' },
								'Create'
							),
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-link btn-cancel', onClick: this.props.onCancel },
								'cancel'
							)
						)
					)
				)
			),
			React.createElement('div', { className: 'modal-backdrop' })
		);
	}

});

module.exports = Form;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./InvalidFieldType":2,"FieldTypes":undefined,"react":undefined}],2:[function(require,module,exports){
'use strict';

var React = require('react');

module.exports = React.createClass({

	displayName: 'InvalidFieldType',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'alert alert-danger' },
			'Invalid field type ',
			React.createElement(
				'strong',
				null,
				this.props.type
			),
			' at path ',
			React.createElement(
				'strong',
				null,
				this.props.path
			)
		);
	}

});

},{"react":undefined}],3:[function(require,module,exports){
'use strict';

var React = require('react');
var CreateForm = require('../components/CreateForm');

var View = React.createClass({

	displayName: 'ListView',

	getInitialState: function getInitialState() {
		return {
			createIsVisible: Keystone.showCreateForm,
			animateCreateForm: false
		};
	},

	toggleCreate: function toggleCreate(visible) {
		this.setState({
			createIsVisible: visible,
			animateCreateForm: true
		});
	},

	renderCreateButton: function renderCreateButton() {
		if (Keystone.list.autocreate) {
			return React.createElement(
				'div',
				{ className: 'toolbar' },
				React.createElement(
					'a',
					{ href: '?new' + Keystone.csrf.query, className: 'btn btn-default btn-create btn-create-item' },
					React.createElement('span', { className: 'ion-plus-round mr-5' }),
					'Create ',
					Keystone.list.singular
				)
			);
		}
		return React.createElement(
			'div',
			{ className: 'toolbar' },
			React.createElement(
				'button',
				{ type: 'button', className: 'btn btn-default btn-create btn-create-item', onClick: this.toggleCreate.bind(this, true) },
				React.createElement('span', { className: 'ion-plus-round mr-5' }),
				'Create ',
				Keystone.list.singular
			)
		);
	},

	renderCreateForm: function renderCreateForm() {
		if (!this.state.createIsVisible) return null;
		return React.createElement(CreateForm, { list: Keystone.list, animate: this.state.animateCreateForm, onCancel: this.toggleCreate.bind(this, false), values: Keystone.createFormData, err: Keystone.createFormErrors });
	},

	render: function render() {
		if (Keystone.list.nocreate) return null;
		return React.createElement(
			'div',
			{ className: 'create-item' },
			this.renderCreateButton(),
			this.renderCreateForm(),
			React.createElement('hr', null)
		);
	}

});

React.render(React.createElement(View, null), document.getElementById('list-view'));

},{"../components/CreateForm":1,"react":undefined}]},{},[3]);
