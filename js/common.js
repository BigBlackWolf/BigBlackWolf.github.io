  $(document).ready(function(){
  	$("#go-to-top").hide();
  	$(function () {
  		$(window).scroll(function () {
  			if ($(this).scrollTop() > 500) {
  				$('#go-to-top').fadeIn();
  			} else {
  				$('#go-to-top').fadeOut();
  			}
  		});
  		$('#go-to-top').click(function () {
  			$('html, body').animate({scrollTop: 0}, 'slow');
  			return false;
  		});
  	});
  });

  $(document).ready(function() { 

  	$('a[href=#second-block-bg]').click(function(){
  		$('html, body').animate({scrollTop:675}, 'slow');
  		return false;
  	});
  });

  $(document).ready(function() { 

  	$('a[href=#fourth-block-bg]').click(function(){
  		$('html, body').animate({scrollTop:2020}, 'slow');
  		return false;
  	});
  });

  $(document).ready(function() { 

  	$('a[href=#fifth-block-bg]').click(function(){
  		$('html, body').animate({scrollTop:2700}, 'slow');
  		return false;
  	});
  });

  $(document).ready(function() { 

  	$('a[href=#sixth-block-bg]').click(function(){
  		$('html, body').animate({scrollTop:3360}, 'slow');
  		return false;
  	});
  });

  $(document).ready(function() { 

  	$('a[href=#thirteen-block-bg]').click(function(){
  		$('html, body').animate({scrollTop:7550}, 'slow');
  		return false;
  	});
  });

   $(document).ready(function() { 

  	$('a[href=#seventeen-block-bg]').click(function(){
  		$('html, body').animate({scrollTop: 11000}, 'slow');
  		return false;
  	});
  });