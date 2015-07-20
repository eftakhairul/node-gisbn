(function () {
    "use strict";

    var querystring = require('querystring');
    var https       = require('https');

    // Base url for Google Books API  (Google Book API V1)
    var baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn&';

    /**
     * Gisbn constructor.
     *
     * @param {String} isbn must be passed in
     * @param {String} key must be passed in
     * @param {String} country must be passed in
     *
     * @constructor
     */
    var Gisbn = function(isbn, key, country) {
        this.isbn     = typeof isbn     !== 'undefined' ? isbn : null;
        this.key      = typeof key      !== 'undefined' ? key :'AIzaSyDKepjfaVBRcgsnPALw5s2UNyfOk-1FHUU';
        this.country  = typeof country  !== 'undefined' ? country :'ca';
        this.data = '';

      //  this.fetch();
      //  this.data     = global.data;
    };


    /**
     * Set new ISBN number
     *
     * @param {String} isbn to be added
     * @private
     */
    Gisbn.prototype.setIsbn = function(isbn) {
        this.isbn = isbn;
    }

    /**
     * Set new ISBN number
     *
     * @private
     */
    Gisbn.prototype.fetch = function(helloRain) {

        var data = '';
        // Create the request uri
        var query = {
            key:     this.key,
            country: this.country,
            isbn:    this.isbn
        };

        //Book API Request URI
        var bookRequestUri = baseUrl + querystring.stringify(query);

        var req = https.get(bookRequestUri, function(res) {

            var body = '';
            res.on('data', function(chunk) {
                body += chunk;
            });

            res.on('end', function() {
                // Parse response body
                global.data = JSON.parse(body);
                helloRain();
            });
        });



        req.end();
        console.log(global.data);
    }

    /**
     * Set new ISBN number
     *
     * @private
     */
    Gisbn.prototype.data = function() {
        return this.data;
    }

    /**
     * Exports googleapis.
     */
    module.exports = Gisbn;

    var gisbn = new Gisbn("0262033844", "AIzaSyDKepjfaVBRcgsnPALw5s2UNyfOk-1FHUU");
    gisbn.fetch(function(){
        console.log(global.data);
    });
    //gisbn.setIsbn('in');

})();
