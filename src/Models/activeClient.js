/*global TUF, Backbone*/

APP.Models = APP.Models || {};

(function () {


    APP.Models.ActiveClient = Backbone.Model.extend({

        url : function() {
             return 'https://raw.githubusercontent.com/MichaelPeterJoyce/UX_Developer_Test/master/activeClients.json?token=AIismmrhtOUb7W3oD05Nl20P86WsvSCdks5ZUGC7wA%3D%3D';
        },
       
    });

})();
