define(['react', 'underscore', 'models/pokemon'],
function (React, _, Pokemon) {

    var PokedexTable = React.createClass({
        displayName: 'PokedexTable',

        render: function() {
            pokemon = this.props.pokemon;
            content = _.map(_.keys(pokemon.attributes), function(x) {
                if (typeof pokemon.get(x) == "object") {
                    return React.DOM.tr({},
                        React.DOM.td({className: "name"}, x + ": "),
                        React.DOM.td({className: "data"}, "needs an api call"));
                } else {
                    return React.DOM.tr({},
                        React.DOM.td({className: "name"}, x + ": "),
                        React.DOM.td({className: "data"}, pokemon.get(x)))
                }
            })
            return React.DOM.div(null, content)
        }
    });

    var Pokedex = React.createClass({
        displayName: 'Pokedex',

        render: function() {
            pokemon = this.props.pokemon;
            return React.DOM.div({id: 'pokedex_outer'},
                React.DOM.h1({},
                    React.DOM.img({
                        id: 'poke_sprite',
                        src: pokemon.get("spritesrc")
                    }),
                pokemon.get("name")), React.DOM.img({
                    id: 'poke_img',
                    src: pokemon.get("imgsrc")
                }),
                React.DOM.div({
                    className: 'jumbotron',
                    id: 'pokedex_inner'
                }, PokedexTable({pokemon: pokemon})))
        }

    });

    return Pokedex;

});
