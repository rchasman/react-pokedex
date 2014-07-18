define(['react', 'colorthief', 'components/picker', 'components/pokedex', 'models/pokemon'],
function (React, colorThief, Picker, Pokedex, Pokemon) {

    var Application = React.createClass({
        displayName: 'Application',

        getInitialState: function() {
            return {pokemon: new Pokemon()}
        },

        handleUpdatePokemon: function(pokemon) {
            pokemon = new Pokemon(pokemon);
            artRoot = "http://img.pokemondb.net/artwork/";
            name = pokemon.get("name").toLowerCase();
            pokemon.set({src: artRoot + name + ".jpg"});
            this.setState({pokemon: pokemon});
        },

        RGBToHex: function(r,g,b){
            var bin = r << 16 | g << 8 | b;
            return (function(h){
                return new Array(7-h.length).join("0")+h
            })(bin.toString(16).toUpperCase())
        },

        /*componentDidMount: function() {
            pokemon = $("#poke-img")[0];
            console.log(pokemon);
            var colorThief = new ColorThief();
            var color = colorThief.getColor(pokemon);
            color = this.RGBToHex(color[0], color[1], color[2]);
            this.setProps({color: color});
        },
        */


        render: function() {
            return React.DOM.div({id: 'wrapper'},
                new Picker({update: this.handleUpdatePokemon}),
                new Pokedex({pokemon: this.state.pokemon})
            );
        }

    });

    return Application;

});
