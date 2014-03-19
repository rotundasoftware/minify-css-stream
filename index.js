var through = require( 'through' );
var CleanCSS = require( 'clean-css' );
var path = require( 'path' );

module.exports = function( file, opts ) {
	var data = '';
	if( file !== undefined && path.extname( file ) !== '.css' )
		return through();
	else
		return through( write, end );

	function write( buf ) {
		data += buf;
	}

	function end() {
		this.queue( new CleanCSS( opts ).minify( data ) );
		this.queue( null );
	}
};