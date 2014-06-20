define(['react', 'underscore'],
function (React, _) {

    var Application = React.createClass({
        displayName: 'Application',

        render: function() {
            return React.DOM.div({id : 'wrapper'},
                React.DOM.p({}, "HELLO POKEDEX"));
        }

    });

    return Application;

});
