sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function (Controller) {
    "use strict";

    return Controller.extend("com.sagar.cbsapp.controller.App", {

        onButtonPressed: function(){
            alert("Button pressed")
        }
        
    });
});