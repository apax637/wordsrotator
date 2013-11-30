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
 



(function($){$.fn.wordsrotator=function(options){var defaults={autoLoop:true,randomize:false,stopOnHover:false,changeOnClick:false,words:null,animationIn:"flipInY",animationOut:"flipOutY",speed:2000};var settings=$.extend({},defaults,options);var listItem
var array_bak=[];return this.each(function(){var el=$(this)
var cont=$("#"+el.attr("id"));var array=[];if((settings.words)||(settings.words instanceof Array)){array=$.extend(true,[],settings.words);if(settings.randomize)array_bak=$.extend(true,[],array);listItem=0
if(settings.randomize)listItem=Math.floor(Math.random()*array.length)
cont.html(array[listItem]);var rotate=function(){cont.html("<span class='wordsrotator_wordOut'><span>"+array[listItem]+"</span></span>");if(settings.randomize){array.splice(listItem,1);if(array.length==0)array=$.extend(true,[],array_bak);listItem=Math.floor(Math.random()*array.length);}else{if(array.length==listItem+1)listItem=-1;listItem++;}
$("<span class='wordsrotator_wordIn'>"+array[listItem]+"</span>").appendTo(cont);cont.wrapInner("<span class='wordsrotator_words' />");cont.find(".wordsrotator_wordOut").addClass("animated "+settings.animationOut);cont.find(".wordsrotator_wordIn").addClass("animated "+settings.animationIn);};cont.on("click",function(){if(settings.changeOnClick){rotate();return false;};});if(settings.autoLoop){var t=setInterval(rotate,settings.speed);if(settings.stopOnHover){cont.hover(function(){window.clearInterval(t)},function(){t=setInterval(rotate,settings.speed);});};}};});}}(jQuery));