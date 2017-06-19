/*global TUF, Backbone*/

APP.Collections = APP.Collections || {};

(function() {


    APP.Collections.Alerts = Backbone.Collection.extend({
      initialize: function () {
          model: APP.Models.Alert;

      },
      url: '../alerts.json'



    });
})();
