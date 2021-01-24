sap.ui.define([
	"sap/m/Text",
	"sap/m/Button"
], function (Text, Button) {
	"use strict";
alert("executed")
	sap.ui.jsview("com.sagar.cbsapp.view.App", {

		getControllerName: function () {
			return "com.sagar.cbsapp.controller.App";
		},

		createContent: function () {
			return [new Text({
				text: "Views and Controllers in UI5 (JS View)"
			}),
			new Button({
				text: "A simple Button",
				press: this.getController().onButtonPressed
			})]
		}
	});

});