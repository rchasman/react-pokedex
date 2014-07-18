define(['react', 'jquery'],
function (React, $) {

    var Picker = React.createClass({
        displayName: 'Picker',

        getInitialState: function() {
            return {value: ""}
        },

        handleChange: function(e) {
            this.setState({value: e.target.value});
            console.log(e.target.value);
            $.ajax("/pokemon/" + e.target.value, { type: 'GET' }
            )
            .done(function(data) {
                console.log(data);
            })
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
