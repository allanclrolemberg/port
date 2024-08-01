$(document).ready(function(){

	$('.section-link').click(function(){
		$('#'+$(this).html().toLowerCase()).scrollView();
	});

	var nav = $('#navigation');

	$(window).on('scroll', function(e) {
		//console.log($(window).scrollTop());

		var windowpos = $(window).scrollTop();
		var windowHeight = $( window ).height() - 180;

		//Navbar changing
		if(windowpos >= 100) {
			nav.addClass('scrolled');
			$('.layout').addClass('loose');
		} else {
			$('.layout').removeClass('loose');
			nav.removeClass('scrolled');
		}
		//Container header highlighting
		$('.container:not(.animated)').removeClass('animate');
		if (windowpos >= $('#about').offset().top - windowHeight) {
			$('#about').addClass('animate animated');
		}
		if (windowpos >= $('#portfolio').offset().top - windowHeight) {
			$('#portfolio').addClass('animate animated');
		}
		if (windowpos >= $('#skills').offset().top - windowHeight) {
			$('#skills').addClass('animate animated');
		}
		if (windowpos >= $('.time-box').offset().top - windowHeight) {
			$('.time-box').addClass('animate animated');
		}
		if (windowpos >= $('#contact').offset().top - windowHeight) {
			$('#contact').addClass('animate animated');
		}
	});

	//Hover highligth for navbar
	HoverNav('home');
	HoverNav('about');
	HoverNav('portfolio');
	HoverNav('skills');
	HoverNav('experience');
	HoverNav('contact');

	function HoverNav(id) {
		$('#'+id).hover(function() {
			$('#'+id+'-btn').addClass('blue');
		}, function() {
	    	$('#'+id+'-btn').removeClass('blue');
		});
	}

	var modalVisible = false;

	//Rollovers
	$('.pane').mouseover(function() { 
		if(!modalVisible) {
			$(this).attr("src", "images/"+$(this).attr('id')+".jpg");
		}
	})
	.mouseout(function() {
		if(!modalVisible) {
			$(this).attr("src", "images/"+$(this).attr('id')+"-bw.jpg");
		}
	});

    //Popups
    $('.pane, .modal').on("click", function() {

		if(modalVisible) {
			$('body').removeClass("modalOpen");
			$('.modal.visible').removeClass("visible");
			modalVisible = false;
		} else {
			$('body').addClass("modalOpen");
			$('.modal.'+$(this).attr('id')).addClass("visible");
			modalVisible = true;
		}
	});

	//Link to site 

	$('#link-1').on("click", function() {
		window.open('http://astralgun.com/', '_blank');
	});
	$('#link-2').on("click", function() {
		window.open('https://ltbp6.rutgers.edu/', '_blank');
	});
	$('#link-3').on("click", function() {
		window.open('http://whatdoiwatchnow.com/', '_blank');
	});
	$('#link-4').on("click", function() {
		window.open('http://thomasmoonkang.com/bookexchange', '_blank');
	});
	$('#link-5').on("click", function() {
		window.open('https://play.google.com/store/apps/details?id=com.ThomasMoonKang.MinBlue&hl=en', '_blank');
	});

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-64851226-1', 'auto')
  ga('send', 'pageview');
});

$.fn.scrollView = function () {
	return this.each(function () {
		$('html, body').animate({
			scrollTop: $(this).offset().top
		}, 1000);
	});
}