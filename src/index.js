$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
    });
  });

  $('.button').click(function(e){
    $(this).toggleClass('.corpo');
    e.preventDefault();
});