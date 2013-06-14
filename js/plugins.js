// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

//custom carousel plugin
(function($){
    $.fn.customCarousel = function( params ) {
        // set config
        var defaults = {


        };
        var config = $.extend(defaults, params);
        //Main logic
        var currId = 0;
        var timerId;
        function setTimer(){
            clearTimeout(timerId);
            timerId = setTimeout(function(){

            },3000);
        }
        this.each(function(){
            console.log("-"+$(this));
        });
    };
})(jQuery);