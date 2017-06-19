var APP = {
    // The url to the backend api
    //host: 'http://service.tellusfirst.com',
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
};

$(document).ready(function() {
    Backbone.history.start({
        pushState: true,
        root: '/'
    });
});
