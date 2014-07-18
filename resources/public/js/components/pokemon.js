define(['react', 'underscore', 'colorthief'],
function (React, _, colorThief) {

    var Pokemon = React.createClass({
        displayName: 'Pokemon',

        RGBToHex: function(r,g,b){
            var bin = r << 16 | g << 8 | b;
            return (function(h){
                return new Array(7-h.length).join("0")+h
            })(bin.toString(16).toUpperCase())
        },

        getDefaultProps: function() {
            return {color: "#000"}
        },

        getBackgroundColor: function() {
            return this.props.color;
        },

        componentDidMount: function() {
            pokemon = $("#pokemon")[0];
            console.log(pokemon);
            var colorThief = new ColorThief();
            var color = colorThief.getColor(pokemon);
            color = RGBToHex(color[0], color[1], color[2]);
            this.setProps({color: color});
        },

        render: function() {
            return React.DOM.div({id: 'pokemon'},
                React.DOM.h1({},this.props.name),
                React.DOM.img({src: this.props.src}));
        }

    });

    return Pokemon;

});
