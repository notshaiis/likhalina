/* 
TODO: 
- About Page
- Origin
- Trivia
- Uses
- Products Header
- Vision Mission Template
- Popup Tutorial

*/

$(document).ready(function(){
  console.log('Document ready');

  const swiper = new Swiper('.swiper-container .swiper', {
    loop: true,
    slidesPerView: 5,
    navigation: {
      nextEl: '.swiper-container .swiper-button-next',
      prevEl: '.swiper-container .swiper-button-prev',
    },
  });

  $('#menu-btn').on('click', () => {
    const dropdownContent = $('.dropdown-content');

    dropdownContent.css('maxHeight', dropdownContent.css('maxHeight') === '0px' ? `${dropdownContent[0].scrollHeight}px` : '0px');
  });

  $('.swipre-slide').on('mouseover', function(){
    console.log($(this))
  });

  $('.watch-tutorial').on('click', function(){
    const videoSrc = $(this).data('src');
    const popupContainer = $('#popup-container');
    const ytIframe = $('#youtube-iframe');

    ytIframe.attr('src', `https://youtube.com/embed/${videoSrc}`);
    popupContainer.css('display', 'flex').animate({
      'opacity': 1,
    }, 500, function(){
      $(this).css('pointerEvents', 'auto');
    });
  });

  $('#close-popup').on('click', function(){
    const popupContainer = $('#popup-container');

    popupContainer.animate({
      'opacity': 0,
    }, 500, function(){
      $(this).css({
        'display': 'none',
        'pointerEvents': 'none',
      });
    })
  });
});