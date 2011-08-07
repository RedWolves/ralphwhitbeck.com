(function($) {
$.fn.equalHeight = function() { var max_bottom = 0; this.each(function() { var bottom = $(this).offset().top + $(this).outerHeight(); if (bottom > max_bottom) max_bottom = bottom; }); return this.each(function() { var offtop = $(this).offset().top, curheight = $(this).outerHeight(), diff = curheight - $(this).height(), bottom = offtop + curheight; if (max_bottom > bottom) $(this).height(max_bottom - offtop - diff); }); };

})(jQuery);


window.log = function(){
  log.history = log.history || [];
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});


