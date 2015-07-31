# node-gisbn
[![Build Status](https://travis-ci.org/eftakhairul/gisbn.svg?branch=master)](https://travis-ci.org/eftakhairul/node-gisbn) [![GitHub issues](https://img.shields.io/github/issues/eftakhairul/gisbn.svg)](https://github.com/eftakhairul/node-gisbn/issues)  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/eftakhairul/node-gisbn/master/LICENSE.txt)

It fetches book's information by ISBN number based on Google Book API.

  - Easy to get all information by ISBN
  - Structure data

You don't have to call manually Google API with ISBN number. This library will do everything for you and return you JSON object.



### Version
1.0.6


### Installation
Install package globally:

```sh
$ npm install -g gisbn
```

Or inside project:

```sh
$ npm install -g gisbn --save
```


## Examples
```js
var Gisb = require('Gisbn');
Gisbn    = new Gisbn("0262033844", "AIzaSyDKepjfaVBRcgsnPALw5s2UNyfOk-1FHUU", "ca");

Gisbn.fetch(function(err, book){
    console.log(book);
});

//output:
{ id: 'books#volume',
  selflink: 'https://www.googleapis.com/books/v1/volumes/i-bUBQAAQBAJ',
  title: 'Introduction to Algorithms',
  authors: [ 'Thomas H. Cormen' ],
  publisher: 'MIT Press',
  publisheddate: '2009-07-31',
  description: 'A new edition of the essential text and professional reference, with substantial newmaterial on such topics as vEB trees, multithreaded algorithms, dynamic programming, and edge-baseflow.',
  isbn13: '9780262033848',
  isbn10: '0262033844',
  totalpages: 1292,
  rating: 4,
  previewlink: 'http://books.google.ca/books?id=i-bUBQAAQBAJ&printsec=frontcover&dq=isbn:0262033844&hl=&cd=1&source=gbs_api',
  smallthumbnail: 'http://books.google.ca/books/content?id=i-bUBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  thumbnail: 'http://books.google.ca/books/content?id=i-bUBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' }
  
  
//set new isbn
Gisbn.setIsbn(9780804139298);

Gisbn.fetch(function(err, book){
    console.log('Title: ' + book.title);
    
    console.log('Description: ' + book.description);
});

//Output
Title: Zero to One

Description: The billionaire Silicon Valley entrepreneur behind such companies as PayPal and Facebook 
outlines an innovative theory and formula for building the companies of the future by creating and 
monopolizing new markets instead of competing in old ones. 200,000 first printing.
```