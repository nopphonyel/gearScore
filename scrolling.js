$('a').click(function(e){
    e.preventDefault();
      var jumpId = $(this).attr('href');
      $('body,html').animate({scrollTop: $(jumpId).offset().top}, 'slow');
  });