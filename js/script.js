$(document).ready(function() {
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	// вверх
	$(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
		$('#to_top').fadeIn();
	    } else {
		$('#to_top').fadeOut();
	    }
	});
	$('#to_top').click(function() {
	    $('body,html').animate({scrollTop:0},800);
	});
	
	$(".scroll_bottom").on("click", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
		top = $(id).offset().top - 0;
	    $('body,html').animate({scrollTop: top}, 500);
	});

	// класс меню с подменю
	$('.main_menu > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});
	$('.submenu > ul > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu2');
		};
	});
	$('.submenu2 > ul > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu3');
		};
	});
	// открытие подменю
	if ( window.innerWidth < 1401 ) {
	    $('.main_menu .submenu > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
			$(this).parent().addClass('show');  
			$(this).parent().children('ul').slideDown(500);
			e.preventDefault();
		    }
	    });
	    
	    $('.main_menu .submenu2 > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
			$(this).parent().addClass('show');  
			$(this).parent().children('ul').slideDown(500);
			e.preventDefault();
		    }
	    });
	    $('.main_menu .submenu3 > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
			$(this).parent().addClass('show');  
			$(this).parent().children('ul').slideDown(500);
			e.preventDefault();
		    }
	    });
	};
	
	// закрытие подменю
	//$('body').click(function (event) {
	//    if ($(event.target).closest('.main_menu .submenu').length == 0 ) {
	//	$('.main_menu .submenu ul').slideUp(500);
	//	$('.main_menu .submenu').removeClass('show');
	//    }
	//});
	
	// показываем меню
	$('.menu_button').on('click', function(){
		$('.main_menu_wrap').addClass('show');
		$('.menu_close').addClass('show');
		//$('.main_menu').css('left', '50%');
	});

	// скрываем меню, удаляем классы активности, возвращаем меню на исходную
	$('').on('click', function(){
		$('.submenu.active').removeClass('show');
		$('.submenu').removeClass('show');
		//$('.main_menu').css('left', '100%');
		$(this).removeClass('show');
		setTimeout(function(){
			$('.main_menu_wrap').removeClass('show');
		}, 300);
	});
	
	
	
	$(window).resize(function(){
	        var width = $(window).width();
		if (width < 1020) {
			$('.main_menu').css("display", "none");
		}else{
			$('.main_menu').attr('style', '');
			$('.submenu ul').attr('style', '');
		}
	});
	
	$('.menu_button_mob').click(function(){
		if ($('.main_menu').css("display") == "block") {
		   $('.main_menu').slideUp(500);
		   $(this).removeClass('active');
		}else{
		   $('.main_menu').slideDown(500);
		   $(this).addClass('active');
		}
	});
	
	
	    if ( window.innerWidth>0 ) {
		    $('.main_section').toggleClass("hidden");
		    $('#index #header').addClass('hidden');
		    $('#main_slide').addClass('animated');
		    //$('#header').addClass('animated');
	    };
	    
	    setTimeout (function(){
		$('#index #header').addClass('animated');
		
		}, 1000); 
	
	
	
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
		    $(this).addClass('animated');
		}
		
	    });
	});
	
	    
	$(window).on('load scroll resize', function(){
		var height = $(window).height() - 100;
		if($(this).scrollTop() > height) {
		    $('#header').addClass('scroll');
		} else {
		    $('#header').removeClass('scroll');
		}
		
	var height_main_slide = $('#main_slide').height();
	$('#catalog').css('margin-top', height_main_slide);
	});
	 
	

	
	
	$( function() {
	    $( ".accordion" ).accordion({
	      heightStyle: "content",
	      collapsible: true,
	      active: false
	    });
	} );
	
	
	
	$('.timetable_slider').slick({
	    dots: true,
	    arrows: true,
	    infinite: true,
	    speed: 1000,
	    fade: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    adaptiveHeight: true,
	    appendDots: '.timetable_slider_nav',
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    appendArrows: '.timetable_slider_nav',
	});
	
	
	$('.specialists_more').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    fade: true,
	    //variableWidth: true,
	    //adaptiveHeight: true,
	    asNavFor: '.specialists_preview',
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	  });
	$('.specialists_preview').slick({
	    slidesToShow: 6,
	    slidesToScroll: 1,
	    arrows: false,
	    asNavFor: '.specialists_more',
	    dots: false,
	    //centerMode: true,
	    //vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 1601,
		    settings: {
		      slidesToShow: 5,
		    }
		  },
		  {
		    breakpoint: 1301,
		    settings: {
		      slidesToShow: 4,
		    }
		  },
		  {
		    breakpoint: 1021,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  
		  {
		    breakpoint: 350,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		]
	});
	
	$('.recomm_more').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: true,
	    fade: true,
	    //variableWidth: true,
	    //adaptiveHeight: true,
	    asNavFor: '.recomm_preview',
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    appendArrows: '.recomm_slider .slider_arrows',
	  });
	$('.recomm_preview').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    asNavFor: '.recomm_more',
	    dots: false,
	    centerMode: true,
	    focusOnSelect: true,
	    centerPadding: "200px",
	    //rtl: true,
	    responsive: [
		  {
		    breakpoint: 1451,
		    settings: {
		      centerPadding: "150px",
		    }
		  },
		  {
		    breakpoint: 1301,
		    settings: {
		      centerPadding: "100px",
		    }
		  },
		  {
		    breakpoint: 1001,
		    settings: {
		      slidesToShow: 1,
		      centerPadding: "50px",
		    }
		  },
		  
		  {
		    breakpoint: 801,
		    settings: {
		      slidesToShow: 3,
		      centerPadding: "0px",
		    }
		  },
		  {
		    breakpoint: 601,
		    settings: {
		      slidesToShow: 2,
		      centerPadding: "0px",
		    }
		  },
		  {
		    breakpoint: 451,
		    settings: {
		      slidesToShow: 1,
		      centerPadding: "0px",
		    }
		  },
		]
	});
	
	
	$('.content .specialists_slider').slick({
	    dots: false, //true,
	    arrows: true,
	    infinite: true,
	    speed: 1200,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    appendArrows: '.specialists .slider_arrows ',
	    responsive: [
	      {
		breakpoint: 1201,
		settings: {
			slidesToShow: 2,
		}
	      },
		 
		{
		    breakpoint: 800,
		    settings: {
		      slidesToShow: 1,
		    }
		},
	    ]
	});
	$('.partners_slider').slick({
	    dots: false, //true,
	    arrows: true,
	    infinite: true,
	    speed: 1200,
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    appendArrows: '.partners_slider_arrows ',
	    responsive: [
	      {
		breakpoint: 1021,
		settings: {
			slidesToShow: 1,
		}
	      }
	    ]
	});
	
	
	$('.sertificates_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	
	
	

	$('.button_more').on('click', function(e){
	  e.preventDefault();
	  
	  var
	    $this = $(this),
	    content = $(this).parents('.slide').find('.hidden');  
	  
	  
	  if(!$this.hasClass('show')){
	    $this.addClass('show');
	    $this.html('Свернуть');
	    
	    content.slideDown();
	  } else {
	    $this.removeClass('show');
	    $this.html('Развернуть');
	    
	    content.slideUp();
	  }
	});
	  
    
});

