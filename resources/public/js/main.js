require.config({
    baseUrl: 'js',
    paths: {
        'jquery': ['//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery'],
        'backbone': ['//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min'],
        'underscore': ['//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.3/underscore-min'],
        'react': ['//cdnjs.cloudflare.com/ajax/libs/react/0.10.0/react'],
        'modernizr': ['//cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min'],
        'bootstrap': ['//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min'],
        'colorthief': ['scripts/colorthief']
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require(['jquery', 'backbone', 'react', 'components/application', 'modernizr',
        'colorthief', 'bootstrap'],
function($, Backbone, React, Application, Modernizr, ColorTheif, Bootstrap) {

    // Begin rendering the webapp with the main react component 'Application'
    $(document).ready(function() {
        var app = Application();
        React.renderComponent(app, document.getElementById('main'));

        // Single page webapp routing made nice for browser navigation
        Backbone.history.start({
            pushState: false, // False until compojure routing is figured out
            root: "/"
        });
    });
});
