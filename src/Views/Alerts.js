/*global TUF, Backbone, JST*/

APP.Views = APP.Views || {};

(function() {


    APP.Views.AlertsView = Backbone.View.extend({
        el: '#table_section',
        events: {
            "click th": "headerClick",
            "click #addCategory": "addCategory",
            'click #categories_table thead th': 'sortThingsByColumn'
        },
        initialize: function() {
            this.render();
            //this.listenTo(this.collection, "sort", this.updateTable);
        },

        render: function() {
            var that = this;
            $.get('/tmpl/Alerts.html', function(data) {
                template = _.template(data, {});
                that.$el.html(template);
            }, 'html');

              this.collection.each(function (model) {
                APP.AlertView = new APP.Views.AlertView({model: model});

              });



        }

    });

})();
