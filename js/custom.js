$(function () {
    ////////////////////////////////////TYPED
    $('.typed').typed({
        strings: ["Developer", "Designer", "3D Animator"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 150,
        // time before typing starts
        startDelay: 500,
        // backspacing speed
        backSpeed: 70,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: Infinity,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},

        // callback for reset
        resetCallback: function () {}
    });
    ////////////////////////////////////BANNER
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        dots: false,
        fade: true,
        autoplaySpeed: 3500,
    });
    ////////////////////////////////////    NAVBAR
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 25) {
            $('.menu').addClass('bg');
        } else {
            $('.menu').removeClass('bg');
        }
        if (scrolling > 1000) {
            $('.back-top').fadeIn(500);
        } else {
            $('.back-top').fadeOut(500);
        }
    });
    ////////////////////////////////////    Animation Scroll
    var html_body = $('html, body');
    $('.menu a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 500);
                return false;
            }
        }
    });
    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('.nav-item').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('.nav-item').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    ////////////////////////////////////  Vertical slider

    $('.vertical-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        speed: 1200,
        vertical: true,
        autoplaySpeed: 1300,
    });
    ////////////////////////////////////  Vertical slider

    $('.horizontal-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 1300,
    });
    //////////////////////////////////// background video with YT player    
    jQuery(".player").YTPlayer();
    ////////////////////////////////////  feedback slider

    $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        autoplay: true,
        speed: 1300,
        autoplaySpeed: 1900,
    });
    ////////////////////////////////////    Animation Scroll
    var html_body = $('html, body');
    $('.scroll-down a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });


    //////////////////////////////////// SNAKE
    $(".snake").snakeify({
        speed: 200
    });
    /////////////////////////////////// MIXIT UP
    var containerEl = document.querySelector('.mixitup-con');

    var mixer = mixitup(containerEl);

    //////////////////////////////////// PRELOADER
    $(window).on('load', function () {
        $('.preloader').delay(600).fadeOut(1000);
    });

    //////////////////////////////////// Back-Top   
    $('.back-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1500);
    });

//    $('.spinner').on('click', function () {
//        $('.colorize').toggleClass('spin-click');
//    });
//////////////////////////////////// VENOBOX
    $('.venobox').venobox(); 
    
    
    
    //////////////////////////////////// Colorize
   var colorSheets = [
            {
                color: "#ff8400",
                title: "Switch to Default",
                href: "./css/color-default.css"
            },
            {
                color: "#ff463a",
                title: "Switch to Red",
                href: "./css/color-red.css"
            },
            {
                color: "#4bda28",
                title: "Switch to Green",
                href: "./css/color-green.css"
            },
            {
                color: "#4650dc",
                title: "Switch to Blue",
                href: "./css/color-blue.css"
            },
            {
                color: "#f41c54",
                title: "Switch to Magenta",
                href: "./css/color-magenta.css"
            }
        ];

        ColorSwitcher.init(colorSheets);
//    $('body').removeClass('width1600 width1700 width1800');
//		$('body').addClass($(this).val());
////		THEME.mobileFilter ? THEME.mobileFilter.reinit() : false;
////		THEME.product.productWidth('.prd, .prd-hor, .prd-promo');
////		THEME.product.countdownWidth('.countdown-box-full-text');
//		$('.slick-initialized').slick('setPosition');
////		$('.js-arrowCenter').each(function () {
////			THEME.sections.arrowCenter($(this), '.slick-arrow', 'img', 100);
////		});
////		$('.slick-initialized.slick-vertical').slick('reinit');
//	})
//	$('#rtlToggle').on('click', function () {
//		if (!$('body').hasClass('rtl')) {
//			$('body').addClass('rtl');
//			$('.rtlToggle').html('LTR')
//			$('head').append('<link href="//cdn.shopify.com/s/files/1/0201/0942/6742/t/32/assets/style-rtl.css?v=5383211639742680931" rel="stylesheet" type="text/css" media="all" />');
//		} else {
//			$('body').removeClass('rtl');
//			$('.rtlToggle').html('RTL')
//			$('head link[href*="style-rtl"]').remove();
//		}
//		$('.header-side-panel').hide()
//		setTimeout(function () {
//			//THEME.sidefixed ? THEME.sidefixed.reinit() : false;
//			THEME.mobileFilter ? THEME.mobileFilter.reinit() : false;
//			$('.header-side-panel').show()
//		}, 500)
//	})
//	$('.colorPicker-icon-list > span').on('click', function () {
//		$(this).siblings().removeClass('active');
//		$(this).addClass('active');
//		$('html').css("--theme-color", $(this).data('change-color'));
//		if ($(this).data('change-color') == '#17c6aa') {
//			$('body').addClass('has-custom-color');
//		} else {
//			if ($(this).data('change-color') == '#282828') {
//				$('body').addClass('has-dark-color');
//			} else {
//				$('body').removeClass('has-dark-color');
//			}
//			$('body').removeClass('has-custom-color');
//		}
//    

});
