
jQuery(document).ready(function() {

	/* ---------------------------------------------------------------------- */
	/*	BACKGROUND SLIDESHOW
	/* ---------------------------------------------------------------------- */
    $('.coming-soon').backstretch([
      "img/backgrounds/screen_webleap.jpg"
    , "img/backgrounds/screen_webleap.jpg"
    , "img/backgrounds/screen_webleap.jpg"
    ], {duration: 3000, fade: 750});

    /* ---------------------------------------------------------------------- */
	/*	COUNTDOWN INITIALIZER
	/* ---------------------------------------------------------------------- */
    
    $(".ccounter").ccountdown(2015,09,15);

    
    /* ---------------------------------------------------------------------- */
	/*	SUSCRIPTION FORM
	/* ---------------------------------------------------------------------- */

    $('.success-message').hide();
    $('.error-message').hide();

    $('.subscribe form').submit(function() {
        var postdata = $('.subscribe form').serialize();
        $.ajax({
            type: 'POST',
            url: 'php/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.error-message').fadeIn();
                }
                else {
                    $('.error-message').hide();
                    $('.success-message').hide();
                    $('.subscribe form').hide();
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn();
                }
            }
        });
        return false;
    });
    

});

