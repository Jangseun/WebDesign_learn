$(function(){
    $('nav>ul>li').mouseenter(function() {
        $(this).children('.sub').stop().slideDown();
    })
    $('nav>ul>li').mouseleave(function() {
        $('.sub').stop().slideUp();
    })
    
    setInterval(function() {
       $('.slide>ul').delay(2000);
       $('.slide>ul').animate({marginLeft: -1200})
       $('.slide>ul').delay(2000);
       $('.slide>ul').animate({marginLeft: -2400})
       $('.slide>ul').delay(2000);
       $('.slide>ul').animate({marginLeft: 0})
       $('.slide>ul').delay(2000);
    })

    $('.tabmenu>li').click(function() {
        $('.tabmenu>li').removeClass('on');
        $(this).addClass('on');
        
        t = $(this).index();

        $('.tabcon').hide();
        $('.tabcon').eq(t).show();

        return false;
    })
})