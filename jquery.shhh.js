(function( $ ){

	/**
	 * Shhh jQuery plugin 
	 *
	 * https://github.com/spangborn/Shhh
	 */

	// Default values
	var defaults = {
		punctuation : ['.', '!', '?'],
		ignore : ["I ", "I'm", "I'll", "I've", "I'd"]
	};
	
	// Methods
	var methods = {
		init : function( target, options ) {
			// Extend the options
			options = $.extend( defaults, options ); 

			// Call the function on each element in the selection
			target.each( function (i, item) {
				methods.transform( item, options );
			});
			
			return target;
			
		},
		transform : function ( target, options ) {
			var text = $(target).text();
			var pString = methods.punctuationString(options.punctuation);
			
			// Make everything lowercase
			text = text.toLowerCase();
			
			// Change back the stuff that's on the "ignore" list
			$(options.ignore).each(function ( i , value) {
				var ignoreRegexp = new RegExp("(^|\\s+)" + value + "(\\s+|" + pString + ")", 'igm' );
				text = text.replace( ignoreRegexp, '$1' + value + '$2' );
			});	
			
			// Make the start of the string(s) uppercase
			// text = text.replace( options.startRegex, methods.upper );
			
			// Make the start of each sentence uppercase
			var sentenceBegin = new RegExp('(^|' + pString+')([a-z])', 'igm');
			text = text.replace( sentenceBegin , function(str) {
				return String(str).toUpperCase();
			});
			
			$(target).text(text);
			
		},
		
		punctuationString : function(pArray) {
			var str = '';
			var nArray = [];
			// /((\.|\!|\?)\s+)([a-z])/
			$(pArray).each(function(index, punc) {
				nArray.push( '\\' + punc);
			})
			return '((' + nArray.join('|') + ')(\\s+|$))'
		}
	};
		
	// The actual function definition
	$.fn.shhh = function ( options ) {
		return methods.init(this, options);
	};
  
})( jQuery );