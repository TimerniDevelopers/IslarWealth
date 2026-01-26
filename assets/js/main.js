(function($) {
    "use strict";
    // data-background
    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    // data-bg
    $("[data-bg-color]").each(function() {
        $(this).css("background", $(this).attr("data-bg-color"))
    });
    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fas fa-plus"></i>'],
    });
    ////////////////////////////////////////////////////
    //  Sidebar Js
    $(".sidebar-toggle-btn").on("click", function() {
        $(".sidebar__area").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function() {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function() {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });


    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });


    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".menu-area").removeClass("sticky");
        } else {
            $(".menu-area").addClass("sticky");
        }
    });



  



    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });

    //LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
  




    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    ////////////////////////////////////////////////////
    //  Counter Js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // WOW active
    new WOW().init();

    $('.testimonial-active').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    

    // PreLoader Js
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });


	// Banner Carousel
	$('.banner-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 500,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 10000,
        navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            },
        }
    });


    if ($('.slider-one__carousel').length) {
        var slideOneCarousel = $('.slider-one__carousel');
        var singleItem = $('.slider-one__slide');

        slideOneCarousel.owlCarousel({
            loop: false,
            items: 1,
            margin: 0,
            dots: true,
            nav: true,
            navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
            animateOut: 'slideOutDown',
            animateIn: 'fadeIn',
            active: true,
            smartSpeed: 1000,
            autoplay: false
        });
       


        // making thumbnail to owl dots
        var thumbCount = slideOneCarousel.find('.owl-dot').length;
        for (var i = 0; i < thumbCount; i++) {
            var newIdx = i;
            var itemThumb = slideOneCarousel.find(singleItem).eq(newIdx).data('thumb');
            slideOneCarousel.find('.owl-dot').eq(i).find('span').css('background-image', 'url(' + itemThumb + ')');
        }
    }

     // $('.slide-one__left-btn').on('click', function(e) {
        //     slideOneCarousel.trigger('next.owl.carousel');
        //     e.preventDefault();
        // });
        // $('.slide-one__right-btn').on('click', function(e) {
        //     slideOneCarousel.trigger('prev.owl.carousel');
        //     e.preventDefault();
        // });

    	//features Carousel
	$('.features-section-two-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 500,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 10000,
        navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2
            },
            1200: {
                items: 3
            },
        }
    });

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

    // new js 
  
   // Magnific popup
   $('.video-icon').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'https://www.youtube.com/',

                id: 'v=',
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            }

        },
        srcAction: 'iframe_src',
    }
    });  
   $('.video-icon2').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'https://www.youtube.com/',

                id: 'v=',
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            }

        },
        srcAction: 'iframe_src',
    }
    });  
    $('.portfolio-menu ul li').click(function(){
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');
        
        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter:selector,
             itemSelector: '.item',
             layoutMode: 'fitRows',
        });
        return  true;
    });
    var popup_btn = $('.popup-btn');
    popup_btn.magnificPopup({
    type : 'image',
    gallery : {
        enabled : true
    }
    });

    
	//Single Item Carousel

	if ($('.single-item-carousel').length) {

		$('.single-item-carousel').owlCarousel({

			loop:true,

			margin:0,

			nav:true,

			smartSpeed: 700,

			autoplay: 5000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				1024:{

					items:1

				},

				1200:{

					items:1

				}

			}

		});

	}

    $('.success-carousel').owlCarousel({
        loop: true,
        dots:false,
        margin: 0,
        nav: true,
        margin:20,
        smartSpeed: 500,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 10000,
        navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 2
            },
        }
    });

    $('.partner-slider').owlCarousel({
        loop: true,
        dots:false,
        margin: 0,
        nav: false,
        margin:20,
        autoHeight: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1024: {
                items: 4
            },
        }
    });

    $(".trending-carousel").owlCarousel({
        nav: true,
        loop:true,
        dots: false,
        pagination: false,
        margin: 25,
        autoHeight: false,
        stagePadding: 50,
        navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
        responsive:{
          0:{
            items: 1,
            stagePadding: 0,
            margin: 30,
          },
          767:{
            items: 2,
            stagePadding: 25,
          },
          991:{
            items: 2,
          },
          1200:{
            items: 3,
          }
        }
      });    

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const playButton = document.getElementById('custom-play-button');
  
    // Play video and hide the custom play button
    playButton.addEventListener('click', function() {
      video.play();
      playButton.classList.add('hidden');
    });
  
    // Show the play button again if video is paused
    video.addEventListener('pause', function() {
      playButton.classList.remove('hidden');
    });
  
    // Automatically hide the play button once the video starts playing
    video.addEventListener('play', function() {
      playButton.classList.add('hidden');
    });
  });

  var $servicesSlider = $(".services-slider");
    $servicesSlider.owlCarousel({
        loop: false,
        nav: true,
        navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
        ],
        dots: false,
        autoplay: false,
        margin: 5,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 5,
            },
            992: {
                items: 6,
            },
            1399: {
                items: 6,
            },
        }
    });

  // Activate Bootstrap tab when clicking on a tab item in the carousel
  $('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });







    $('.client-say-wrapper').owlCarousel({
        loop: true,
        dots:true,
        margin: 0,
        nav: false,
        margin:20,
        autoHeight: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1024: {
                items: 4
            },
        }
    });
 
})(jQuery);

