var Gisbn = require('../index');

describe('#gisbn', function() {
    var gisbn;

    before(function () {
        gisbn = new Gisbn("9780804139298", "AIzaSyDKepjfaVBRcgsnPALw5s2UNyfOk-1FHUU", "ca");
    });

    it('Check Object', function(done) {
        gisbn.fetch(function(err, book) {
            expect(book).to.be.an('object');
            done();
        });
    });

    it('Check book title perfectly', function(done) {
        gisbn.fetch(function(err, book) {
            expect(book).to.have.property("title");
            done();
        });
    });

    it('Check Total page', function(done) {
        gisbn.fetch(function(err, book) {
            expect(book).to.have.property("totalpages", 210);
            done();
        });
    });

    it('Check none exists property', function(done) {
        gisbn.fetch(function(err, book) {
            expect(book).to.not.have.property("hello");
            done();
        });
    });
});