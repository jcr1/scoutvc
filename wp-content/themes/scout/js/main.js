(function(jQuery) {

	jQuery(function() { //on DOM ready
		// jQuery(window).bind("resize", function(){
		//     var orientation = window.orientation;

		//     alert(orientation);

		//     var new_orientation = (orientation) ? -90 : 0;
		//     jQuery('body').css({
		//         "-webkit-transform": "rotate(" + new_orientation + "deg)"
		//     });
		// });

		var stalker = jQuery('.sv-stalker'),
			social = jQuery('.social-fixed');

		jQuery('#about').waypoint(function(){
			if(jQuery(document).width() > 767 ){
				
				if(social.hasClass('stuck')){
					social.removeClass('stuck stuck-social');
				}else{
					social.addClass('stuck stuck-social');
				}
			}
		}, {offset: -100});

		jQuery('.panel').waypoint(function(direction){
			var newCurr;
			if(direction == 'down'){
				newCurr = jQuery('.'+jQuery(this).attr('id')+'-link');
				jQuery('.anchors li a').removeClass('active');
				newCurr.addClass('active');
			}else{
				var newCurr = jQuery('.anchors li .active').parent().prev().find('a');
				jQuery('.anchors li a').removeClass('active');
				newCurr.addClass('active');
			}

			if(sv.device){
				jQuery('.navbar-inner .load').html(newCurr.html()).css('text-transform', 'capitalize');
			}

			// window.location.hash = newCurr.data('target');
		}, {offset:60});


		// Top Nav Bar Events
		jQuery('.anchors li a').on({
			click: function(event){
				if(event.currentTarget.id == "twitter" || event.currentTarget.id == "angellist")
					console.log("routing!")
				else
					event.preventDefault();

				var target = jQuery(this).data('target');

				var offset = jQuery('#'+target).offset();

				if(typeof offset !='undefined'){
   				jQuery('html,body').animate({
						scrollTop: offset.top+'px' 
					}, 'slow', 'easeInOutQuad' , function(){
						window.location.hash = target;
					});
   			}
				
				if(sv.device){
					jQuery('.collapsed').removeClass('collapsed');
					jQuery('.collapse').removeClass('in').css('height', 0);
				}
			}
		});

		stalker.find('.toTop').on({
			click: function(event){
				event.preventDefault();

				jQuery('html,body').animate({
					scrollTop: 0+'px' 
				}, 'slow', 'easeInOutQuad' , function(){
					console.log(window.location);
				});
			}
		})

		jQuery('#teamMembers').scroller({
			contentArea: '#team .container'
		});

		jQuery('#advisorsMembers').find('li').shuffle();
		jQuery('#advisorsMembers').scroller({
			contentArea: '#advisors .container',
			margin:10
		});
		
		var svPlayground = jQuery('.portfolio');
		svPlayground.isotope({ filter: '.fund-1' });

		jQuery('.filters li').click(function(){
			var selector;
			if(!jQuery(this).hasClass('active')){
				jQuery('.filters li').removeClass('active');
				jQuery(this).addClass('active');
				selector = jQuery(this).attr('data-filter');

				svPlayground.isotope({ filter: selector });
			}
		});

		function lightBox (jQueryelem) {
			jQuery('body').addClass('stopScrolling');
			var overlay, container, close;

			container = jQuery('#container');

			overlay = jQuery('#overlay').css({
				height : jQuery(document).height()
			}).fadeIn();


			container.css({
				display:'block',
				top:jQuery(document).scrollTop()+ 50+'px',
				left:(jQuery(window).width()-container.width()-40)/2 + 'px',
				maxHeight: jQuery(window).height() - 100 + 'px',
				overflow:'scroll'
			});

			console.log(container.width(), jQuery(window).width(), jQuery(document).width());

			close = container.find('.close'),
			load = container.find('.load');

			var header = jQueryelem.find('.data-header'),
				content = jQueryelem.find('.data-content');

				load.html(header.html() + content.html());
				close = container.find('.close');

				close.on({
					click:function(){
						overlay.css('display', 'none');
						container.css('display', 'none');
			jQuery('body').removeClass('stopScrolling');
					}
				});

				overlay.on({
					click:function(){
						overlay.css('display', 'none');
						container.css('display', 'none');
			jQuery('body').removeClass('stopScrolling');
					}
				});
		};

		jQuery('#sv-contactForm').contactForm();
jQuery('#portfolio .item').on({
	click: function(){
		lightBox(jQuery(this));
	}
});

		// GOOGLE MAPS

		google.maps.visualRefresh = true;

		function initialize() {
			var marker, map, newYork = new google.maps.LatLng(40.714353,-74.005973),
				scout = new google.maps.LatLng(40.71414,-74.00938),
				mapOptions = {
	    			scrollwheel: false,
	    			zoom: 15,
	    			minZoom: 14,
	    			maxZoom: 16,
	    			mapTypeId: google.maps.MapTypeId.ROADMAP,
	    			center: newYork
  				};

  			map = new google.maps.Map(document.getElementById('sv-map'), mapOptions);

  			marker = new google.maps.Marker({
    			map:map,
    			draggable:true,
    			animation: google.maps.Animation.DROP,
    			position: scout
  			});


			jQuery(window).resize(function(){
				google.maps.event.trigger(map, 'resize');
				map.setCenter(newYork);
			});

  			google.maps.event.addListener(marker, 'click', function(){
			 	var infowindow = new google.maps.InfoWindow({
    				content:'<p class="info-heading"><b>Scout Ventures</b></p><p class="info-addy">47 Murray St<br>New York, NY  10007</p>'
				});

			 	infowindow.open(marker.get('map'), marker);
  			});
  		}

		google.maps.event.addDomListener(window, 'load', initialize);

	});	
})(jQuery);
