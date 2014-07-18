define(['react', 'underscore', 'colorthief'],
function (React, _, colorThief) {

    var Application = React.createClass({
        displayName: 'Application',

        getDefaultProps: function() {
            return {color: "NONE"}
        },

        componentDidMount: function() {
            pokemon = $("#pokemon")[0];
            console.log(pokemon);
            var colorThief = new ColorThief();
            var color = colorThief.getColor(pokemon);
            this.setProps({color: color});
        },

        render: function() {
            return React.DOM.div({id : 'wrapper'},
                React.DOM.p({}, this.props.color));
        }

    });

    return Application;

});
