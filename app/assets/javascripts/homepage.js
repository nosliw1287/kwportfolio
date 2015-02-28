$(document).on('ready', function() {


$(function() {
	smoothScroll(300);
	workBelt();
	


	 $('.contact-form .input-group input').focusout(function(){
    
    var text_val = $(this).val();
    
    if(text_val === "") {
      
      $(this).removeClass('has-value');
      
    } else {
      
      $(this).addClass('has-value');

      	}

      });
	});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body' ).animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}


function workBelt() {

$('.thumb-unit').on('click', function(event) {
	event.preventDefault();

	$('.work-belt').css('left','-100%');
	var type = $(this).data("work");
	$('.work-container-'+type).show();
});

$('.work-return').on('click', function(event) {
	event.preventDefault();

	$('.work-belt').css('left','0%');
	$('.work-container').hide();
});

}

function awesomeLabels() {
	 $('.contact-form .input-group input').focusout(function(){
    
    var text_val = $(this).val();
    
    if(text_val === "") {
      
      $(this).removeClass('has-value');
      
    } else {
      
      $(this).addClass('has-value');

      	}

      });

}
	
})

