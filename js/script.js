$(function () {
  $('.top-navigation__button').on('click', function () {
    $(this).toggleClass('top-navigation__button_active');
  });

  $('.fancybox').fancybox();


	if ( $('.photos-works__list').length > 0 ) {
		$grid = $('.photos-works__list').isotope({
			itemSelector: '.photos-works__item',
			layoutMode: 'masonry'
		});

		$('.work-tabs__list a').on('click', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
			  filter: filterValue
			});

			return false;
		});  		
	}




  var menu_height = 0;
  $('.scroll').on('click', function (event) {

    $('.top-navigation__button_active').removeClass('top-navigation__button_active');

    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: (target.offset().top - menu_height)
      }, 1000);
    }
  });
});

$(function () {


  $('.owl-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    dots: true,
    navText: ['<img src="/img/icon-button-arrow.png" alt="" width="43">',
      '<img src="/img/icon-button-arrow.png" alt="" width="43">'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  })

});
