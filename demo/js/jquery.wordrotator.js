/*
 * jQuery Words Rotator plugin
 *
 * Copyright (c) 2013 Andrea Pace
 * licensed under MIT license.
 *
 * https://github.com/andreapace/wordsrotator
 * http://andreapace.co.uk/wordsrotator
 *
 * Version: 0.1.0
 */
 
(function ( $ ) {

	$.fn.wordsrotator = function(options){
		var defaults = {
			collegamenti: true,
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
			$("<span id=\"" + el.attr("id") + "_container\"></span>").insertAfter(el);
			var cont = $("#" + el.attr("id") + "_container");

			var array = [];
			


			if ((settings.words) || (settings.words instanceof Array)) {
				array = $.extend(true, [], settings.words); 
			} else {
				el.hide();
				el.children("li").each(function(index) {
/*
					if ($(this).attr("data-url") && settings.collegamenti) {
						array.push("<a href=\"" + $(this).attr("data-url") + "\">" + $(this).text() + "</a>"); 
					} else {	
*/
						array.push($(this).html()); 
//					};
				});
			};
			
			
			//se l'ordine è randomize popola l'array di backup
			if (settings.randomize) array_bak = $.extend(true, [], array); 

	
			if (settings.randomize) {
				listItem = Math.floor(Math.random() * array.length)
			} else {
				listItem = 0
			}
			//init value into cont
			cont.html(array[listItem] );

		
			// animation option
			var rotate = function() {

				cont.html("<span class='front'><span>" + array[listItem] + "</span></span>");
				if (settings.randomize) {
					//rimuovo l'elemento randomize dall'array 
					array.splice(listItem, 1);
					//ripopolo l'array in caso sia stato svuotato
					if (array.length==0) array = $.extend(true, [], array_bak);
					//rigenero l'indice randomize
					listItem = Math.floor(Math.random() * array.length);
				} else {
					//se ho raggiunto l'indice massimo riazzero l'indice
					if (array.length==listItem+1) listItem=-1;
					//incremento l'indice
					listItem++;
				}

				$("<span class='back'>" + array[listItem] + "</span>").appendTo(cont);
            	cont.wrapInner("<span class='rotating' />");
//				$("#" + el.attr("id") + "_container .rotating").css("width",Math.max(parseInt(cont.find(".back").css("width")),parseInt(cont.find(".front").css("width"))))
				
				//.css("min-width",parseInt(cont.find(".front").css("width")));

//.css("min-width",Math.max(parseInt(cont.find(".back").css("width")),parseInt(cont.find(".front").css("width"))))

				
//				$("#" + el.attr("id") + "_container .rotating").css("width",Math.max(parseInt(cont.find(".back").css("width")),parseInt(cont.find(".front").css("width"))));
//				$("body").append("a" + parseInt(cont.find(".back").css("width")) + Math.max(parseInt(cont.find(".back").css("width")),parseInt(cont.find(".front").css("width"))))
				$("#" + el.attr("id") + "_container .rotating .front").addClass("animated " + settings.animationOut)
/*
				$("#" + el.attr("id") + "_container .rotating .front").addClass("animated " + settings.animationOut).one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function(){
					$("#" + el.attr("id") + "_container .rotating").css("min-width",parseInt(cont.find(".back").css("width")));
					$("body").append("a" + parseInt(cont.find(".back").css("width")) + Math.max(parseInt(cont.find(".back").css("width")),parseInt(cont.find(".front").css("width"))))

				});
*/
				$("#" + el.attr("id") + "_container .rotating .back").addClass("animated " + settings.animationIn)

//				$("#" + el.attr("id") + "_container .rotating .front").one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd',$("#" + el.attr("id") + "_container .rotating").css("min-width",parseInt(cont.find(".back").css("width"))))

				
				

			};

		

		var t = setInterval(rotate, settings.speed);
			cont.on("click", function() {
				if (settings.changeOnClick) {
					rotate();
					return false;
				};
			});
					
			if (settings.stopOnHover) {
				cont.hover(function() {
					window.clearInterval(t)

				},function() {
					t = setInterval(rotate, settings.speed);

				});	  
			};
			
	});
  }
	 
}( jQuery ));

