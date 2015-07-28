# node-gisbn
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/eftakhairul/gisbn/master/LICENSE.txt)

It fetches book's information by ISBN number based on Google Book API.

  - Easy to get all information by ISBN
  - Structure data

You don't have to call manually Google API with ISBN number. This library will do everything for you and return you JSON object.



### Version
0.0.1


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
     var Gisbn  = new Gisbn("0262033844", "AIzaSyDKepjfaVBRcgsnPALw5s2UNyfOk-1FHUU", "ca");

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
  totalpage: 1292,
  rating: 4,
  previewlink: 'http://books.google.ca/books?id=i-bUBQAAQBAJ&printsec=frontcover&dq=isbn:0262033844&hl=&cd=1&source=gbs_api',
  smallThumbnail: 'http://books.google.ca/books/content?id=i-bUBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  thumbnail: 'http://books.google.ca/books/content?id=i-bUBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' }
```

### Development

Want to contribute? Great!

1. Fork it ( https://github.com/eftakhairul/node-gisbn/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request


Author
-----------
[Eftakhairul Islam] - eftakhairul [at] gmail [dot] com
[Eftakhairul Islam]:http://eftakhairul.com/


License
----
MIT




