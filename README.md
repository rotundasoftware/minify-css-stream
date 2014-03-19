minify-css-stream
=================

A css minification stream wrapper around [clean-css](https://github.com/GoalSmashers/clean-css).  Returns a [through stream](https://github.com/dominictarr/through) that has css contents written in and outputs the minified version.

#example
```javascript
var minifyCssStream = require( 'minify-css-stream' );
var fs = require( 'fs' );
var path = require( 'path' );

fs.createReadStream( 'file1.css' ).pipe( minifyCssStream( path.join( __dirname, 'file1.css' ) ) ).pipe( process.stdout );
```

#usage

### minifyCssStream( file, [ opts ] )

`file` - the file being minified
`opts` - minification options passed through to clean-css
