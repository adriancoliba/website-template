// Global Variables
var $win = $(window);
var $doc = $(document);

// function Calculating the Header Height
function calcHeaderHeight() {
	var $navbar = $('.navbar');
	var $target = $('#header');

	$win.on('load resize', function() {
		var headerHeight = $navbar.outerHeight();
		
		$target.css('padding-top', headerHeight);
		// $(".footer").css('padding-top', headerHeight);
		$(".section").css('padding-top', headerHeight);
	});
}


function addClassOnLoad() {
	var $element = $('.js-animate-holder');

	/// checking

	var $headerInner = $('.header-inner');

	$headerInner.addClass('popup');

	/// working

	$element.each(function() {
		var $this = $(this);
		
		$this.addClass('animate');
		setTimeout(function() {
    		$this.removeClass("animate");
   			}, 800);
		});

		// do it to loop navbar 
}

function smoothScroll(){
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
	// On-page links
		if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
       
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {

          var $target = $(target);

          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 

            $target.focus(); 
          };
        });
      }
    }
  });
}
 
function stickyHeader() {
	var $header = $('.navbar');
	var $bottomAnchor = $('#about');
	var $topAnchor = $('.header');

	$win.on('load scroll', function() {
		var windowScroll = $win.scrollTop();

		var bottomAnchorTop = $bottomAnchor.offset().top;
		var bottomAnchorHeight = $bottomAnchor.outerHeight();
		
		var bottomAnchorMiddle = bottomAnchorHeight / 2;
		var topAnchorOffsetTop = $topAnchor.offset().top;

		if(windowScroll >= bottomAnchorHeight / 3){
			$header.css({'background-color': '#f6f6f6', 'position': 'fixed', 'color': 'red', 'padding': '2rem 4rem', 'border-bottom': '1px solid  #e7e7e7'});
			$header.addClass('animate');
			$('.li-item').css({'color': '#000'});
			$('.logo p').css({'color': '#000'});
			$('.logo span').css({'background-color': '#ffc600', 'color': '#fff'});
			$('.arrow-up').css({'display': 'inline-block'});
			$('.arrow-up').addClass('popup');
		}else{
			$header.css({'background-color': 'transparent', 'position': 'absolute', 'padding': '3rem 4rem', "border-bottom": 'none'});
			$('.li-item').css({'color': '#fff'});
			// $(".li-item").hover(function(){
			//     $(this).css("border-color", "#000");
			//     }, function(){
			//     $(this).css("border-color", "transparent");
			// });
			$('.logo p').css({'color': '#fff'});
			$('.logo span').css({'background-color': '#fff', 'color': '#000'});
			$('.arrow-up').css({'display': 'none'});
		}
	});
}



$win.on('load resize', function() {
	addClassOnLoad();
});

$win.on('scroll', revealOnScroll);
function revealOnScroll(){
	var scrolled = $(window).scrollTop();
	var winHeight = $(window).height();

	$('.blog-box:not(.fromLeft)').each(function(){
		var offsetTop = $(this).offset().top
    	if (scrolled + winHeight > offsetTop) {
     	$(this).addClass('fromLeft');
    	}
	});
	$('.blog-box.fromLeft').each(function(){
		var offsetTop = $(this).offset().top
    	if (scrolled + winHeight < offsetTop) {
     	$(this).removeClass('fromLeft');
    	}
	});
	
	$('.revealOnScroll:not(.fromTop)').each(function() {
	    var offsetTop = $(this).offset().top
	    if (scrolled + winHeight > offsetTop) {
	      $(this).addClass('fromTop');
	    }
  	});
	$('.revealOnScroll.fromTop').each(function() {
		var offsetTop = $(this).offset().top;
		if (scrolled + winHeight < offsetTop) {
			$(this).removeClass('fromTop');
		}
	});
}


calcHeaderHeight();
smoothScroll();
stickyHeader();