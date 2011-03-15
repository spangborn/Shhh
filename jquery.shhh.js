(function( $ ){

		/**
		 * Sentence Case plugin by @spangborn (http://twitter.com/spangborn)
		 *
		 * Regular expressions by @eltiare (http://twitter.com/eltiare) as well as some of the logic.
		 * 
		 * This should work on multiple targets on selectors.
		 * 
		 * Example usage:
		 * 
		 * 		$(".case").sentenceCase();
		 * 
		 * If you want to change some of the options used in the plugin:
		 * 
		 * 		$(".case").sentenceCase({
		 * 			"startRegex" : /^s*[a-z]/,
		 * 			"punctuationRegex" : /([\!\.\?])\s+([A-z])/,
		 * 			"ignore" : ["I ", "I'm", "I'll", "It's"]
		 * 		});
		 * 
		 * KNOWN ISSUES:
		 * 
		 * - Ignored strings aren't actually ignored if they're at the start of a string.
		 */
	
		// Default values
		var defaults = {
			startRegex : /^\s*[A-z]/ig,
			punctuationRegex: /((\.{4}|([^\.]\.)|\!|\?)\s+)([a-z])/ig,
			ignore : ["I ", "I'm", "I'll", "I've", "I'd"]
		};
		
		// Methods
		var methods = {
			init : function( target, options ) {
				// Extend the options
				var options = $.extend( defaults, options ); 
				
				methods.recompileRegex(options.startRegex, options.punctuationRegex);

				// Call the function on each element in the selection
				target.each( function (i, item) {
					methods.transform( item, options  );
					
				});
				
			},
			transform : function ( target, options ) {
				var text = $(target).text();
				
			
				// Make everything lowercase
			    text = text.toLowerCase();
				
			    // Don't change anything that should be ignored
			    $(options.ignore).each(function ( i , value) {
			    	text = text.replace( value.toLowerCase(), value );
			    });	
			    
				// Make the start of the string(s) uppercase
			    text = text.replace( options.startRegex, methods.upper );
			    
			    // Make the start of each sentence uppercase
			    text = text.replace( options.punctuationRegex, methods.upper );
			    
			    return $(target).text(text);
				
			},
			upper : function ( text ) {
				return String(text).toUpperCase();
			},
			lower : function ( text ) {
				return String(text).toLowerCase();
			},
	        recompileRegex : function(arguments) {
				$(arguments).each(function(i,regex) {
					regex.compile(String(regex).replace(/^\/|\/[a-z]*$/ig, ''), 'ig');
				});
			}
	  };
		
	// The actual function definition
	$.fn.sentenceCase = function ( options ) {
		return methods.init(this, options);
	};
  
})( jQuery );