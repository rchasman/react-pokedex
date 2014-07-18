define(['react', 'jquery', 'models/pokemon'],
function (React, $, Pokemon) {

    var Picker = React.createClass({
        displayName: 'Picker',

        getInitialState: function() {
            return {value: ""}
        },

        handleChange: function(e) {
            this.setState({value: e.target.value});
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
                        artRoot = "http://img.pokemondb.net/artwork/";
                        name = data["name"].toLowerCase();
                        data['imgsrc'] = artRoot + name + ".jpg";
                        data['spritesrc'] = "http://pokeapi.co" + spriteData['image'];
                        this.props.update(data);
                    }.bind(this))
                }.bind(this))
            }.bind(this))
            .fail(function(code) {
                console.log(code);
            });

        },

        render: function() {
            var value = this.state.value;
            return React.DOM.div({id: 'picker'},
                React.DOM.input({
                    type: "text",
                    value: value,
                    placeholder: value,
                    onChange: this.handleChange
                })
            )
        }

    });

    return Picker;

});
