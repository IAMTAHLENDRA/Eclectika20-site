(function($) {
		"use strict";
		function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 50 is increment */	
		$this.html(++current);
			if(current > $this.data('count')){
				$this.html($this.data('count'));
			} else {    
				setTimeout(function(){count($this)}, 0.1);
			}
		}        	
		$(".stat-count").each(function() {
		  $(this).data('count', parseInt($(this).html(), 10));
		  $(this).html('0');
		  count($(this));
		});
   })(jQuery);



//    preloader
$(function(){
  'use strict';
	$(window).on('load', function () {
		if ($(".pre-loader").length > 0)
		{
			$(".pre-loader").fadeOut("slow",function(){
			  $(".pre-loader").css("display", "none");
			});
		}
	});
})
