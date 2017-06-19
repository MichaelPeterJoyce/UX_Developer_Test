/*global TUF, Backbone, JST*/

APP.Views = APP.Views || {};

(function () {


    APP.Views.AlertView = Backbone.View.extend({
        el: '#table_body',
        events: {
            "click #btn-delete": "deleteCategory",
            "click #btn-edit": "editCategory"
        },
        initialize: function () {
            this.render();
        },

        render: function () {
            var that = this;
            var iconSet;
            if (this.model.get("importance") == "Very") {
                iconSet = "img/full.png";
            } else if (this.model.get("importance") == "Middle") {
                iconSet = "img/med.png";
            } else {
                iconSet = "img/low.png";
            }
            this.model.set({
                icon: iconSet
            })
            $.get('/tmpl/Alert.html', function (data) {
                that.template = _.template(data, {});
                $("#table_body").append(that.template(that.model.toJSON()));;
            }, 'html');

            return this;
        }



    });

})();
