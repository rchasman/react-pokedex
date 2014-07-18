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
            .done(function(data) {
                $.ajax("http://pokeapi.co/api/v1/pokemon/" + data,
                    { type: 'GET',
                      dataType: 'jsonp'})
                .done(function(data) {
                    this.props.update(data);
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
