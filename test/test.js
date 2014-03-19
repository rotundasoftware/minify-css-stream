var minifyCssStream = require( '../' );
var fs = require( 'fs' );
var path = require( 'path' );

fs.createReadStream( 'file1.css' ).pipe( minifyCssStream( path.join( __dirname, 'file1.css' ) ) ).pipe( process.stdout );
