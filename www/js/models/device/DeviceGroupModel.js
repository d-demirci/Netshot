define([
	'underscore',
	'backbone',
], function(_, Backbone) {

	var DeviceGroupModel = Backbone.Model.extend({

		urlRoot: "rs/groups",

		defaults: {
			'name': "A name"
		},

		save: function(attrs, options) {
			attrs = attrs || this.toJSON();
			options = options || {};
			attrs = _.pick(attrs, [
				'id',
				'type',
				'name',
				'folder',
				'hiddenFromReports',
				'staticDevices',
				'deviceClassName',
				'query'
			]);
			options.attrs = attrs;
			return Backbone.Model.prototype.save.call(this, attrs, options);
		},
		
		getPath: function() {
			var folder = this.get('folder');
			var path = [];
			_.each(folder.split('/'), function(f) {
				f = f.replace(/^\s+|\s+$/g, '');
				if (f === "") return;
				path.push(f);
			});
			return path;
		}

	});

	return DeviceGroupModel;

});