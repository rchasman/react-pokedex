define(['backbone'], function(Backbone) {

    var Pokemon = Backbone.Model.extend({

        urlRoot: "http://pokeapi.co/api/v1/pokemon",

        parse: function(response) {
            console.log(response.date);
            return response.data;
        },

        url: function() {
            return this.urlRoot;
        },

        defaults: {
            "id": 0,
            "name": "Missingno",
            "price": 0,
            "quantity": 0,
            "gain": 0,
            "gainPercent": 0,
            "totalCost": 0,
            "marketValue": 0
        },

    });

    return Pokemon;
});
