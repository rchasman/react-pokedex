define(['react', 'underscore', 'colorthief', 'components/pokemon'],
function (React, _, colorThief, Pokemon) {

    var Application = React.createClass({
        displayName: 'Application',

        getDefaultProps: function() {
            return {src: "img/bulbasaur.jpg",
                    name: "Bulbasaur"}
        },

        render: function() {
            return React.DOM.div({id: 'wrapper'},
                new Pokemon({src: this.props.src,
                             name: this.props.name}));
        }

    });

    return Application;

});
