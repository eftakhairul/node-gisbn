var Gisbn = require('../index');

describe('#escape', function() {
    var gisbn;

    before(function () {
        gisbn = new Gisbn("0262033844", "AIzaSyDKepjfaVBRcgsnPALw5s2UNyfOk-1FHUU", "ca");
    });

    it('converts & into &amp;', function() {
        gisbn.fetch(function(err, book) {
            expect(book).to.have.property("title", "Introduction to Algorithms");
        });
    });
});