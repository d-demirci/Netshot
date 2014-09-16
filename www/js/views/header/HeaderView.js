define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/header/header.html',
	'views/users/UserDialog'
], function($, _, Backbone, headerTemplate, UserDialog) {

	var HeaderView = Backbone.View.extend({
		el: $("#header"),

		initialize: function() {

		},

		render: function() {
			var compiledTemplate = _.template(headerTemplate);
			this.$el.html(compiledTemplate({
				user: user.toJSON()
			}));
			if (!user.isAdmin()) {
				this.$('#nstoolbar-admin').next().addBack().remove();
			}
			this.$('#nstoolbarpages').buttonset();
			this.$('#nstoolbar-devices').click(function() {
				window.location = "#/devices";
			});
			this.$('#nstoolbar-compliance').click(function() {
				window.location = "#/compliance";
			});
			this.$('#nstoolbar-tasks').click(function() {
				window.location = "#/tasks";
			});
			this.$('#nstoolbar-reports').click(function() {
				window.location = "#/reports";
			});
			this.$('#nstoolbar-admin').click(function() {
				window.location = "#/admin";
			});
			this.$('#nstoolbar-help').button().click(function() {
				window.open("help.html", "_blank");
			});
			this.$("#nsuser").click(function() {
				var userDialog = new UserDialog({
					model: user
				});
				return false;
			});
			return this;
		}

	});

	return HeaderView;

});