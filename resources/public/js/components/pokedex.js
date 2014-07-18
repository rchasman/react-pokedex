define(['react', 'underscore', 'models/pokemon', 'colorthief'],
function (React, _, Pokemon, colorThief) {

    var Pokedex = React.createClass({
        displayName: 'Pokedex',

        getDefaultProps: function() {
            return { color: "#000" }
        },

        getBackgroundColor: function() {
            return this.props.color;
        },

        render: function() {
            console.log(this.props.pokemon)
            return React.DOM.div({id: 'pokemon'},
                React.DOM.h1({}, this.props.pokemon.get("name")),
                React.DOM.img({id: 'poke-img', src: this.props.src}));
        }

    });

    return Pokedex;

});
