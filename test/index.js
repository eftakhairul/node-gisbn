var expect      = require('chai').expect;
    Gisbn       = require('../index');
    Gisbn       = new Gisbn("0262033844", "AIzaSyDKepjfaVBRcgsnPALw5s2UNyfOk-1FHUU", "ca");


describe('#escape', function() {
    it('converts & into &amp;', function() {
        Gisbn.fetch(function(err, book) {
            expect(book).to.have.property("title", "Introduction to Algorithms");
        });
    });
});