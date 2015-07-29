(function () {
    "use strict";

    var querystring = require('querystring');
    var https       = require('https');

    // Base url for Google Books API  (Google Book API V1)
    var baseUrl     = 'https://www.googleapis.com/books/v1/volumes?';

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
     * Fetch all information from google book api
     *
     * @param {function} callBack method
     * @return Object
     */
    Gisbn.prototype.fetch = function(callBack) {

      // Create the request uri
        var query = {
            key:        this.key,
            country:    this.country,
            q:          'isbn:' + this.isbn
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
                try {
                    var responseObject = JSON.parse(body);
                    callBack(null, {
                        id:             responseObject.items[0].kind,
                        selflink:       responseObject.items[0].selfLink,
                        title:          responseObject.items[0].volumeInfo.title,
                        authors:        responseObject.items[0].volumeInfo.authors,
                        publisher:      responseObject.items[0].volumeInfo.publisher,
                        publisheddate:  responseObject.items[0].volumeInfo.publishedDate,
                        description:    responseObject.items[0].volumeInfo.description,
                        isbn13:         responseObject.items[0].volumeInfo.industryIdentifiers[0].identifier,
                        isbn10:         responseObject.items[0].volumeInfo.industryIdentifiers[1].identifier,
                        totalpage:      responseObject.items[0].volumeInfo.pageCount,
                        rating:         responseObject.items[0].volumeInfo.averageRating,
                        previewlink:    responseObject.items[0].volumeInfo.previewLink,
                        smallthumbnail: responseObject.items[0].volumeInfo.imageLinks.smallThumbnail,
                        thumbnail:      responseObject.items[0].volumeInfo.imageLinks.thumbnail
                    });

                } catch (e) {
                    callBack(e, null);
                }
            });

            res.on('error', function(err) {
                // handle errors with the request itself
                console.error('Error with the request:', err.message);
                callBack(err, null);
            });
        }).end();
    }

    /**
     * Exports googleapis.
     */
    module.exports = Gisbn;
})();