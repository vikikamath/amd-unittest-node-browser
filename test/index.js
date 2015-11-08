define( function( require ) {

	'use strict';

	var main = require( '../index' );

	var expect = require( 'chai' ).expect;

	describe ( 'Index', function ( ) {


		it ( 'should be a constructor', function ( ) {

			expect( main ).to.be.a( 'function' );

		} );

	} );

} );
