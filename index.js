(function () {
    "use strict";

    var Gisbn = function(isbn     = null,
                         key      = 'AIzaSyDKepjfaVBRcgsnPALw5s2UNyfOk-1FHUU',
                         country  = 'ca') {
          this.isbn     = isbn;
          this.key      = key;
          this.country  = country;
    };


    /**
     * Set new ISBN number
     *
     * @param {String} isbn to be added
     * @private
     */
    Gisbn.prototype.setIsbn = function(isbn){
      this.isbn = isbn;
    }

    Gisbn.prototype.fetch = function(){

    }

    /**
    * Exports googleapis.
    */
    module.exports = Gisbn;
})();
