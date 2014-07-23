define(['react', 'jquery', 'models/pokemon'],
function (React, $, Pokemon) {

    var Picker = React.createClass({
        displayName: 'Picker',

        handleChange: function(e) {
            $.ajax("/pokemon/" + $('#picker').val(), {
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
                this.props.update({})
            }.bind(this));
        },

        render: function() {
            return React.DOM.div({},
                React.DOM.h2({}, "Pokedex:  ",
                    React.DOM.input({
                        id: "picker",
                        type: "text",
                        height: "200px",
                        placeholder: "Enter a Pokemon",
                        onChange: _.debounce(this.handleChange, 240)
                    })),
                React.DOM.hr({})
            )
        }
    });

    return Picker;

});
