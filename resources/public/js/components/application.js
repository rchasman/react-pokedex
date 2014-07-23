define(['react', 'components/picker', 'components/pokedex', 'models/pokemon'],
function (React, Picker, Pokedex, Pokemon) {

    var Application = React.createClass({
        displayName: 'Application',

        getInitialState: function() {
            return {pokemon: new Pokemon()}
        },

        handleUpdatePokemon: function(pokemon) {
            pokemon = new Pokemon(pokemon);
            this.setState({pokemon: pokemon});
        },

        render: function() {
            return React.DOM.div({id: 'wrapper'},
                Picker({update: this.handleUpdatePokemon}),
                Pokedex({pokemon: this.state.pokemon})
            );
        }

    });

    return Application;

});
