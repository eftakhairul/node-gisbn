var Gisbn = require('../index');

describe('#gisbn', function() {
    var gisbn;

    before(function () {
        gisbn = new Gisbn("0262033844", "AIzaSyDKepjfaVBRcgsnPALw5s2UNyfOk-1FHUU", "ca");
    });

    it('It fetches the title perfectly', function() {
        gisbn.fetch(function(err, book) {
            expect(book).to.have.property("title", "Introduction to Algorithms");
        });
    });

    it('Total page', function() {
        gisbn.fetch(function(err, book) {
            expect(book).to.have.property("totalpages", 1292);
        });
    });
});