$(function(){

  // ヘッダータイトル 
  $('.top-btn').click(function() {
    $('html,body').animate({
      'scrollTop': 0
    }, 500);
  });


  

  // ヘッダーメニュー
  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
  
    $('html,body').animate({
    'scrollTop': position
  }, 500);
  });


// レスポンシブ メニュー 
  $(document).on("click", "#responsive-btn", function() {
  // clickイベントの処理
  var menuicon =$('.responsive-menu i');

  if (menuicon.hasClass('fa-bars')){
   menuicon.removeClass('fa-bars').addClass('fa-times');
   $('.responsive-menu li').slideToggle(500);

  }else if(menuicon.hasClass('fa-times')){
    $('.responsive-menu li').slideToggle(500);
    menuicon.removeClass('fa-times').addClass('fa-bars');
  }

  });








});