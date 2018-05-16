// follow this script to easy_select/init.js
(function ($) {
    "use strict";

    /**
     * passing the current element to initialize and the options to initialize with
     * @param $el - Jquery object to initialize with select2
     * @param obj - select2 constructor options
     */
    function redisplay_select2($el, obj){

        if($("#" + $el.attr('id')).hasClass("select2-hidden-accessible")){
            $("#" + $el.attr('id')).select2('destroy').select2(obj);
        } else{
            $("#" + $el.attr('id')).select2(obj);
        }

    }

    /**
     * core function call for easy_select2
     * @param options - select2 constructor properties
     */
    function add_select2_handlers(options){


        $('div.field-easy-select2:not([id*="__prefix__"])').each(function(){
            // taking data-* for select2 constructor properties for backward compatibility
            var obj = $(this).data();

            // merging the options and data properties, modifying the first
            // NOTE: obj properties will be overwritten by options
            // https://api.jquery.com/jquery.extend/
            $.extend(obj, options);

            redisplay_select2($(this), obj);
            $("#" + $(this).attr('id')).on('DOMNodeInserted', function(){
                $(this).select2('destroy').select2(obj);
            })
        });
    }

    /**
     * JQuery plugin for django-easy-select2
     * @param options - object containing select2 constructor properties
     */
    $.fn.easy_select = function(options){
        add_select2_handlers(options);
    };

}(jQuery || django.jQuery));


// sample property callback for select2 constructor argument
function formatState (state) {
  console.log('--being called--');
  var baseUrl = "http://lorempixel.com/4/4/";
  var $state = $(
    '<span><img src="' + baseUrl + '" class="img-flag" /> ' + state.text + '</span>'
  );
  return $state;
};

/**
 * this call can be in a separate file, making the file optional to include or override for properties
 */
$(document).ready(function(){
    $('body').easy_select({
        templateSelection: formatState
    });
})