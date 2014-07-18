define(['react', 'underscore', 'colorthief'],
function (React, _, colorThief) {

    var Pokemon = React.createClass({
        displayName: 'Pokemon',

        getDefaultProps: function() {
            return {color: "#000"}
        },

        getBackgroundColor: function() {
            return this.props.color;
        },

        render: function() {
            return React.DOM.div({id: 'pokemon'},
                React.DOM.h1({},this.props.name),
                React.DOM.img({id: 'poke-img', src: this.props.src}));
        }

    });

    return Pokemon;

});
