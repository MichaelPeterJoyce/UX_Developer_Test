/*global TUF, Backbone*/

APP.Collections = APP.Collections || {};

(function() {


    APP.Collections.Alerts = Backbone.Collection.extend({
      initialize: function () {
          model: APP.Models.Alert;

      },
      url: 'https://raw.githubusercontent.com/MichaelPeterJoyce/UX_Developer_Test/master/alerts.json?token=AIismvqOtPM35DSZyxJbpxDgvDU0cML6ks5ZUGEJwA%3D%3D'



    });
})();
