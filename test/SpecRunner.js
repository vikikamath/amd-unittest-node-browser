require.config(	{

		baseUrl: '.',

		paths: {

			'mocha'			: '../bower_components/mocha/mocha',

			'chai'			: '../bower_components/chai/chai'

			// other modules

		},

		shim: {

			'mocha'			: {

				'exports'	: 'mocha'

			},

			'chai'			: {

				'exports'	: 'chai'

			}

		}

} );

define( function( require ) {

	var mocha 	= require( 'mocha' );
	var chai	= require( 'chai' );

	mocha.setup('bdd');

	require( [

		'index.js',

	], function( ) {

			window.mochaPhantomJS ? mochaPhantomJS.run( ) : mocha.run( );

	} );
} );
