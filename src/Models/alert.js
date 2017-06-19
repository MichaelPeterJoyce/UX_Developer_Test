/*global TUF, Backbone*/

APP.Models = APP.Models || {};

(function () {


    APP.Models.Alert = Backbone.Model.extend({

        // url : function() {
        //     return this.id ? TUF.host+'/api/v1/category/' + this.id : TUF.host+'/api/v1/category/';
        // },
        defaults: {
            name: "",
            description: ""
        },


    });

})();
