APP.Views = APP.Views || {};

(function () {

    APP.Views.HomeView = Backbone.View.extend({
        //template: JST['tpl/HomeView.html'],
        el: '#main_container',
        name: 'HomeView',
        events: {
            "click #btn-submitSignup": "signup"
        },
        initialize: function () {
            this.render();
        },

        render: function () {
            //tuflog(this);
            var that = this;
            $.get('/tmpl/home.html', function (data) {
                template = _.template(data, {  });
                that.$el.html(template);
            }, 'html');
            return this;
        }

    });

})();
