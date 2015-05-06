// Navigation style selected and un seledted on hover and scroll
jQuery(document).ready(function(){
		jQuery(".nav-button").click(function(){
				jQuery("nav ul li a").removeClass("current");
				jQuery(this).addClass("current");
		});
		
		jQuery(".checkit").hover(function(){
			var valudID = jQuery(this).attr("id");
			jQuery("nav ul li a").removeClass("current");
			jQuery("." + valudID).addClass("current");
			//alert(valudID);
		});

// Resposive menu for website
		
		jQuery(".res-menu").click(function(){
			jQuery(".res-dropdown").toggle();
			jQuery(".somelink").toggleClass("active");
		}); 
				
	
	
// Calender Functions 


	jQuery(".small-circle").click(function(){
		jQuery(".small-circle").removeClass("checked");
		jQuery(this).addClass("checked");
		var smallId = jQuery(this).attr("id");
		jQuery(".main-detail").fadeOut("slow");
		
		if ( jQuery("." + smallId).is(":visible") )
		{
			jQuery("." + smallId).fadeOut("slow");
			jQuery(this).removeClass("checked");
			jQuery(this).parent().removeClass("actived");
		} else {
			jQuery("." + smallId).fadeIn("slow");
		}

		jQuery(".calender-detail").css('height' , '40px');
	});

// animations 
	  jQuery(".banner-center-text").animate({
	  		opacity:1,
			top:"30%"	
	  },1500); 
	
//var height = jQuery( window ).height();	  
//alert(height);
//jQuery(".banner-wrapper , .banner-container" ).css('height' , height-80);

jQuery(window).on('scroll', function() {
    var scrollTop = jQuery(this).scrollTop();
    jQuery('#about').each(function() {
        var topDistance = jQuery(this).offset().top;
        if ( (topDistance-150) < scrollTop ) {
            jQuery(".about-sv-detail").animate({
				opacity:1,
				marginRight:"0px"	
	  		},500); 
			jQuery(".about-sv-ul").animate({
				opacity:1,
				marginLeft:"0px"	
	  		},500); 
        }
    });
});
	
	
	 
	
	  
// Code for scroll deck menu 

			var deck = new jQuery.scrolldeck({
				buttons: '.nav-button',
				easing: 'easeInOutExpo'
			});
			
			// add other animations using the scrolldeck.controller (see Scrollorama plugin)
			//console.log(deck.controller);
			deck.controller.animate('#instructions',{ duration: 100, property:'opacity', end: 0 });
		  
	  });



//	  
//// Stricky menu  
//	  
//	 jQuery(window).load(function () {
//         jQuery("#header").sticky({ topSpacing: 0, center: true, className: "hey" });
//     });
//	 

	 
	 