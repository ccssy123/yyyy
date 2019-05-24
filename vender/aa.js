$(function(){

  var H = $('.description-1').offset().top - 200;
  // alert(H);

  $(window).scroll(function(){

    var N = $(window).scrollTop();
    console.log(N);

    if(N > H){
      $('.description-1').animate({opacity:'1'},500);
    }

    if(N > 800){
      $('.description-1').animate({opacity:'1'},500);
    }

    if(N > 1200){
      $('.text3').animate({fontSize:'18px'},500);
    }

  })

  
  
})