define(['react', 'colorthief', 'components/picker', 'components/pokemon'],
function (React, colorThief, Picker, Pokemon) {

    var Application = React.createClass({
        displayName: 'Application',

        getDefaultProps: function() {
            return {src: "img/bulbasaur.jpg",
                    name: "Bulbasaur"}
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
                new Picker(),
                new Pokemon({
                    src: this.props.src,
                    name: this.props.name
                })
            );
        }

    });

    return Application;

});
