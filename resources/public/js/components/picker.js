define(['react', 'jquery', 'models/pokemon'],
function (React, $, Pokemon) {

    var Picker = React.createClass({
        displayName: 'Picker',

        handleChange: function(e) {
            $.ajax("/pokemon/" + e.target.value, {
                type: 'GET',
                dataType: 'json'}
            )
            .done(function(id) {
                $.ajax("http://pokeapi.co/api/v1/pokemon/" + id, {
                    type: 'GET',
                    dataType: 'jsonp'
                })
                .done(function(data) {
                    var spriteUrl = ""
                    $.ajax("http://pokeapi.co" + data['sprites'][0]['resource_uri'], {
                        type: 'GET',
                        dataType: 'jsonp'
                    })
                    .done(function(spriteData) {
                        var artRoot = "http://img.pokemondb.net/artwork/";
                        var name = data["name"].toLowerCase();
                        data['imgsrc'] = artRoot + name + ".jpg";
                        data['spritesrc'] = "http://pokeapi.co" + spriteData['image'];
                        this.props.update(data);
                    }.bind(this))
                }.bind(this))
            }.bind(this))
            .fail(function(code) {
                console.log("not found");
            });
        },

        render: function() {
            return React.DOM.div({id: 'picker'},
                React.DOM.h2({}, "Pokedex:  ",
                    React.DOM.input({
                        type: "text",
                        height: "200px",
                        placeholder: "Enter a Pokemon",
                        onChange: this.handleChange
                    })),
                React.DOM.hr({})
            )
        }
    });

    return Picker;

});
