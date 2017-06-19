/*global TUF, Backbone*/

APP.Models = APP.Models || {};

(function () {


    APP.Models.ActiveClient = Backbone.Model.extend({

        url : function() {
             return 'activeClients.json';
        },
       
    });

})();
