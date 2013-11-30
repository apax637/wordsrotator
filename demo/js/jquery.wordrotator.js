/*
 * jQuery Words Rotator plugin
 *
 * Copyright (c) 2013 Andrea Pace
 * licensed under MIT license.
 *
 * https://github.com/andreapace/wordsrotator
 * http://andreapace.co.uk/wordsrotator
 *
 * Version: 0.9.0
 */
 
(function ( $ ) {

	$.fn.wordsrotator = function(options){
		var defaults = {
			autoLoop: true,
			randomize: false,
			stopOnHover: false,
			changeOnClick: false,
			words: null,
			animationIn: "flipInY",
			animationOut: "flipOutY",
			speed: 2000
		};
		var settings = $.extend({}, defaults, options);
		var listItem
		var array_bak = [];

		return this.each(function(){
			var el = $(this)
			var cont = $("#" + el.attr("id"));
			var array = [];
			
			//if array is not empty
			if ((settings.words) || (settings.words instanceof Array)) {
				array = $.extend(true, [], settings.words); 

				//In random order, need a copy of array
				if (settings.randomize) array_bak = $.extend(true, [], array); 
	
		
				listItem = 0
				//if randomize pick a random value for the list item
				if (settings.randomize) listItem = Math.floor(Math.random() * array.length)

				//init value into container
				cont.html(array[listItem] );
	
			
				// animation option
				var rotate = function() {
	
					cont.html("<span class='wordsrotator_wordOut'><span>" + array[listItem] + "</span></span>");
	
					if (settings.randomize) {
						//remove printed element from array
						array.splice(listItem, 1);
						//refill the array from his copy, if empty
						if (array.length==0) array = $.extend(true, [], array_bak);
						//generate new random number
						listItem = Math.floor(Math.random() * array.length);
					} else {
						//if reached the last element of the array, reset the index 
						if (array.length==listItem+1) listItem=-1;
						//move to the next element
						listItem++;
					}
	
					$("<span class='wordsrotator_wordIn'>" + array[listItem] + "</span>").appendTo(cont);
					cont.wrapInner("<span class='wordsrotator_words' />");
					cont.find(".wordsrotator_wordOut").addClass("animated " + settings.animationOut);
					cont.find(".wordsrotator_wordIn").addClass("animated " + settings.animationIn);
				};
	
			
		
					cont.on("click", function() {
						if (settings.changeOnClick) {
							rotate();
							return false;
						};
					});
							
					if (settings.autoLoop) {
						var t = setInterval(rotate, settings.speed);
						if (settings.stopOnHover) {
							cont.hover(function() {
								window.clearInterval(t)
							},function() {
								t = setInterval(rotate, settings.speed);
			
							});	  
						};
					}
	
				};
				
		  });
	  }
	 
}( jQuery ));

