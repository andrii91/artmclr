$(document).ready(function() {

    $('.video-item').each(function() {
    	if(!$(this).data('id')){
		 $(this).find('img').attr('src', 'http://i.ytimg.com/vi/' + $(this).data('id') + '/mqdefault.jpg');
		 $(this).append('<div class="lock"></div>');
         $(this).addClass('nohover');
    	}else{
	        $(this).find('img').attr('src', 'http://i.ytimg.com/vi/' + $(this).data('id') + '/mqdefault.jpg');
    	}
    });
    $("#video").attr('src', "https://www.youtube.com/embed/" + $('.video-item.active').data('id') + "?autoplay=0&autohide=1&rel=0&amp;showinfo=0")
    $("#video-title").text($('.video-item.active').data('title'))

    $('.video-item img').click(function() {
        var iframe_url = "https://www.youtube.com/embed/" + $(this).parent().data('id') + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
        $("#video").attr('src', iframe_url)
    });

    $('.video-item').click(function(){
    	if ($(this).data('id')) {
	    	$('.video-item').removeClass('active');
	    	$(this).addClass('active');
			$("#video-title").text($(this).data('title'));
		    var id = $('#video'),
		      top = $(id).offset().top;

		    $('body,html').animate({
		      scrollTop: top - 100
		    }, 1500);
    	}
    })
});