

(function ($) {
    "use strict";

    function formatState (state) {
      console.log('being called');
      var baseUrl = "http://lorempixel.com/4/4/";
      var $state = $(
        '<span><img src="' + baseUrl + '" class="img-flag" /> ' + state.text + '</span>'
      );
      return $state;
    };
    function redisplay_select2($el){
        var obj = $el.data();
        obj.templateSelection = formatState;

        if($("#" + $el.attr('id')).hasClass("select2-hidden-accessible")){
            $("#" + $el.attr('id')).select2('destroy').select2(obj);
        } else{
            $("#" + $el.attr('id')).select2(obj);
        }

    }
    function add_select2_handlers(){


        $('div.field-easy-select2:not([id*="__prefix__"])').each(function(){
            var obj = $(this).data();
            obj.templateSelection = formatState;
            redisplay_select2($(this));
            $("#" + $(this).attr('id')).on('DOMNodeInserted', function(){
                $(this).select2('destroy').select2(obj);
            })
        });
    }
    $(function(){
        add_select2_handlers();
    });
}(jQuery || django.jQuery));