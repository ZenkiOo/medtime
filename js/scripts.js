jQuery(document).ready(function($){
	$('sbody').on('click', function(e){
		e.preventDefault();
		if($('.layer').length){
			$('.layer').remove();
		}else{
			$('body').css({'position':'relative'}).append('<img alt="" src="images/layer.png" class="layer"><!-- Если хотите убрать эту херню, просто удалите кусочек кода в scripts.js -->')
			$('.layer').css({
				'position': 'absolute',
				'top': '222px',
				'left': '0px',
				'right': '0px',
				'margin': '0 auto',
				'opacity': '0.6',
	            'z-index': '666'
			})
		}
	});

	/* Slick slider */
	$('.megakek-reviews-slider').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
  		responsive: [
	    {
	      breakpoint: 1264,
	      settings: {

	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {

	      }
	    }
	  ]
	})
	$('.video-slider').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	    ]
	})
	$('.reviews-slider').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		responsive: [
	    {
	      breakpoint: 1264,
	      settings: {

	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {

	      }
	    }
	  ]
	})
	$('.serv-slider').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
  		responsive: [
	    {
	      breakpoint: 1264,
	      settings: {

	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {

	      }
	    }
	  ]
	})
	$('.reviews-slider-audio').slick({
		slidesToShow: 3,
		dots: true,
  		slidesToScroll: 1,
  		responsive: [
	    {
	      settings: {
	      	breakpoint: 1264
	      }
	    },
	    {
	      breakpoint: 1100,
	      settings: {
	      	slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 620,
	      settings: {
	      	slidesToShow: 1
	      }
	    }
	  ]
	})
	$('.team-list.v2').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		dots: false,
  		responsive: [
	    {
	      settings: {
	      	breakpoint: 1264
	      }
	    },
	    {
	      breakpoint: 1100,
	      settings: {
	      	slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 620,
	      settings: {
	      	slidesToShow: 1
	      }
	    }
	  ]
	})

	$('.megakek-nav-search-button a').on('click', function(e){
		e.preventDefault();
		$(this).closest('.megakek-nav').toggleClass('megakek-show-search');
	})

	$(window).click(function() {
		$('.megakek-nav').removeClass('megakek-show-search');
	});

	$('.megakek-nav-search-button a, .megakek-search').click(function(event){
	    event.stopPropagation();
	});


	$(window).click(function() {
	    $('.megakek-mobile-menu').removeClass('show')
		$('.megakek-mobile-button').removeClass('active')
	});

	$('megakek-.mobile-button, .megakek-mobile-menu').click(function(event){
		event.stopPropagation();
	});

	$('.megakek-mobile-button').on('click', function(){
		$('.megakek-mobile-button').toggleClass('active')
		$('.megakek-mobile-menu').toggleClass('show')
	})
	$('.megakek-mobile-menu .megakek-nav-list-item > a .megakek-dropdown-menu-toggle').on('click', function(e){
		e.preventDefault();
	    var btn = $(this).closest('.megakek-nav-list-item');

	    if(btn.hasClass('megakek-menu-open')){
	        btn.removeClass('megakek-menu-open')
	    }else{
			$('.megakek-mobile-menu .megakek-menu > .megakek-menu-item > a').removeClass('megakek-menu-open');
	        btn.addClass('megakek-menu-open')
	    }
	});


	$("#top-menu > li a").click(function(){
		var _href = $(this).attr("href");

		if(window.matchMedia('(max-width: 990px)').matches) {
			$('#burger').removeClass('active');
			$('#et-top-navigation').removeClass("open");
			$("html, body").animate({scrollTop: $(_href).offset().top-50});
			return false;
		} else {
			$("html, body").animate({scrollTop: $(_href).offset().top-135});
			return false;
		}
	});

	$('#burger').click(function(e){
		e.preventDefault();
		$('#et-top-navigation').toggleClass('open');
		$('#burger').toggleClass('active');
	});

	$('.megakek-tab').click(function(e){
		e.preventDefault();

		var tabName = $(this).data('tabname')

		$('[data-tabname]').removeClass('megakek-active');
		$('[data-tabname='+tabName+']').addClass('megakek-active');
	});
});