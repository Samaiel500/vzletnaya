$(function () {
    $('.header-bnt-menu').on('click', function(event) {
        event.preventDefault();
        $('.mobile-menu').addClass('active');
    })
    $('.mobile-menu-close').on('click', function(event) {
        event.preventDefault();
        $('.mobile-menu').removeClass('active');
    })


    const swiper = new Swiper('.architect-slider.swiper', {
      effect: "fade",
      autoHeight: true,

      pagination: {
        el: '.architect-slider .swiper-pagination',
        clickable: true,
      },
    
      navigation: {
        nextEl: '.architect-slider .swiper-button-next',
        prevEl: '.architect-slider .swiper-button-prev',
      },
    });

    const swiperTwo = new Swiper('.iandscaping.swiper', {
      effect: "fade",
      autoHeight: true,

      pagination: {
        el: '.iandscaping .swiper-pagination',
        clickable: true,
      },
    
      navigation: {
        nextEl: '.iandscaping .swiper-button-next',
        prevEl: '.iandscaping .swiper-button-prev',
      },
    });

    const swiperGallery = new Swiper('.gallery-slider.swiper', {

      pagination: {
        el: '.gallery-slider .swiper-pagination',
        clickable: true,
      },
    
      navigation: {
        nextEl: '.gallery-slider .swiper-button-next',
        prevEl: '.gallery-slider .swiper-button-prev',
      },
    });

    $('.scroll-to').on( 'click', function(){ 
      var el = $(this);
      var dest = el.attr('href'); // получаем направление
      if($(dest).length != 0) {
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({ 
              scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 700 // скорость прокрутки
            );
        }
        return false;
      }
    });

    //Submint from
    $('.submit-form').on('click', function(event) {
      event.preventDefault();

      let countErrors = 0;
      const form = $(this).parents('form');
      const requiredInputs = $(form).find('.required');
      const errorMessage = $('.form-error-message');

      $(errorMessage).each(function() {
        $(this).removeClass('active');
      })

      $(requiredInputs).each(function() {
        if($(this).attr('name') === 'name') {
          if($(this).val() === '') {
            $('.form-error-message[data-name="name"]').addClass('active'); 
            countErrors++;
          }
        }
        
        if($(this).attr('name') === 'email') {
          if($(this).val() === '') {
            $('.form-error-message[data-name="email"]').addClass('active'); 
            countErrors++;
          }
        }

        if($(this).attr('name') === 'message') {
          if($(this).val() === '') {
            $('.form-error-message[data-name="message"]').addClass('active'); 
            countErrors++;
          }
        }

        if($(this).attr('name') === 'conferm') {
          if(!$(this).prop('checked')) {
            $('.form-error-message[data-name="conferm"]').addClass('active'); 
            countErrors++;
          }
        }
      })

      if(countErrors) {
        return;
      }


    })
})