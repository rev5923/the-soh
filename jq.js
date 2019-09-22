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
  $(document).on("click", ".responsive-menu", function() {
  // clickイベントの処理
  var menuicon =$('.responsive-menu i');

  if (menuicon.hasClass('fa-bars')){
   menuicon.removeClass('fa-bars').addClass('fa-times');
  }else if(menuicon.hasClass('fa-times')){
    menuicon.removeClass('fa-times').addClass('fa-bars');
  }

  $('.responsive-menu li').slideToggle();
  });


  
});
