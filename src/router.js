APP.Routers = APP.Routers || {};
(function() {

    APP.Router = Backbone.Router.extend({
        routes: {
            "": "home",
            "test": "test"
        },

        home: function() {
            APP.HomeView = new APP.Views.HomeView();

            APP.ActiveClientsModel = new APP.Models.ActiveClient();
            APP.ActiveClientsModel.fetch().done(function() {
                APP.ClientsView = new APP.Views.ClientsView({model: APP.ActiveClientsModel});
            });
            APP.AlertsCollection = new APP.Collections.Alerts();
            APP.AlertsCollection.fetch().done(function() {
                APP.AlertsView = new APP.Views.AlertsView({collection: APP.AlertsCollection});
            });

        },
    });
    APP.app_router = new APP.Router;
})();
