define(['react', 'underscore', 'models/pokemon', 'colorthief'],
function (React, _, Pokemon, colorThief) {

    var PokedexTable = React.createClass({
        displayName: 'PokedexTable',
        render: function() {
            pokemon = this.props.pokemon;
            content = _.map(_.keys(pokemon.attributes), function(x) {
                if (typeof pokemon.get(x) == "object") {
                    return React.DOM.tr({},
                        React.DOM.td({id: "name"}, x + ": "),
                        React.DOM.td({id: "data"}, "needs an api call"));
                } else {
                    return React.DOM.tr({},
                        React.DOM.td({id: "name"}, x + ": "),
                        React.DOM.td({id: "data"}, pokemon.get(x))
                        )
                }
            })
            return React.DOM.div(null, content)
        }
    });

    var Pokedex = React.createClass({
        displayName: 'Pokedex',

        getDefaultProps: function() {
            return { color: "#000" }
        },

        getBackgroundColor: function() {
            return this.props.color;
        },

        render: function() {
            pokemon = this.props.pokemon;
            return React.DOM.div({id: 'pokedex_outer'},
                React.DOM.h1({}, pokemon.get("name")),
                React.DOM.img({id: 'poke_img', src: pokemon.get("src")}),
                React.DOM.div({id: 'poxedex_inner'},
                    PokedexTable({pokemon: pokemon})))
        }

    });

    return Pokedex;

});
