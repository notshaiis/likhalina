$(document).ready(function(){

  $('.box').on('click', function(){
    const box = $(this);
    const desc = box.find('.description');

    if (box.hasClass('active')) {
      box.removeClass('active');
      desc.css('maxHeight', '0px');
    } else {
      $('.box').each(function(){
        $(this).removeClass('active');
        $(this).find('.description').css('maxHeight', '0px');
      });
      box.addClass('active');
      desc.css('maxHeight', `${desc[0].scrollHeight}px`);
    }
  });
});