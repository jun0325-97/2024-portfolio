//로드가 끝난 후 텍스트 애니메이션
window.onload = function(){
    $("#page1 .tit").addClass("view");
};

const p1 = $("#page1").offset().top;
const p2 = $("#page2").offset().top;
const p3 = $("#page3").offset().top;
const p4 = $("#page4").offset().top;

//스크롤 애니메이션
$(window).on('scroll', function() {
    var h = $(document).scrollTop(); 
    
    console.log(h)
    
    if ((h >= 0) && (h < (p2 - 100))) {
        
        $("header").removeClass("white");
        $("header li").removeClass("white");
        
        $("#page1 .tit").addClass("view");
        
        $("#page2 .tit").removeClass("view");
        $("#page2 .more").removeClass("view");
        
        $("header li:nth-child(1) a").addClass("select").parent().siblings().children().removeClass("select");
        
    } else if (( h > (p2 - 100)) && (h < (p3 - 100))) {
        
        $("header").addClass("white");
        $("header li").addClass("white");
        
        $("#page1 .tit").removeClass("view");
        
        $("#page2 .tit").addClass("view");
        $("#page2 .more").addClass("view");
        
        $("#page3 .tit").removeClass("view");
        $("#page3 .more").removeClass("view");
        
        $("header li:nth-child(2) a").addClass("select").parent().siblings().children().removeClass("select");
        
    } else if (( h > (p3 - 100)) && (h < (p4 - 100))) {
        
        $("header").addClass("white");
        $("header li").addClass("white");
        
        $("#page2 .tit").removeClass("view");
        $("#page2 .more").removeClass("view");
        
        $("#page3 .tit").addClass("view");
        $("#page3 .more").addClass("view");
        
        $("#page4 .tit").removeClass("view");
        $("#page4 .box").removeClass("view");
        
        $(".bottle").removeClass("disable");
        $("header li:nth-child(3) a").addClass("select").parent().siblings().children().removeClass("select");
        
    } else if ( h > (p4 - 100)) {
        $("header").removeClass("white");
        $("header li").addClass("white");
        
        $("#page3 .tit").removeClass("view");
        $("#page3 .more").removeClass("view");
        
        $("#page4 .tit").addClass("view");
        $("#page4 .box").addClass("view");
        
        $(".bottle").addClass("disable");
        $("header li:nth-child(4) a").addClass("select").parent().siblings().children().removeClass("select");
    }
    
    //스크롤 위치에 따른 opacity 값 - fade 효과
    var b = (1/-170) * h + ( (p3 + 240) /170); 
    // (-값) + (+값) 공식
    // (-값)이 더 크면 음수가 결과값이므로 opacity도 음수
    // (-값)이 더 작으면 양수가 결과값이므로 opacity도 양수
    $(".bottle").css('opacity', b);
});


//페이지네이션 버튼

$("header ul li:nth-child(1) a").click(function(){//지정된 위치로 스크롤 이동
    $("html").animate({scrollTop:p1},800)});

$("header ul li:nth-child(2) a").click(function(){
    $("html").animate({scrollTop:p2},800)});

$("header ul li:nth-child(3) a").click(function(){
    $("html").animate({scrollTop:p3},800)});

$("header ul li:nth-child(4) a").click(function(){
    $("html").animate({scrollTop:p4},800)});


//슬라이드 배너 영역
var n = 0;
var ln = $("#page4 .slide ul li").length;
var bw = $("body").width();

function auto(){
    n++;
    if ( n => ln ) { n = 0 } ;
    
    $("#page4 .slide ul").css({"left":0})
    $("#page4 .slide ul li:first-child").appendTo("#page4 .slide ul") 
    
    if ( bw > 800 ) {
        $("#page4 .slide ul").animate({"left":-310},300,function(){  
        });
    } else {
        $("#page4 .slide ul").animate({"left":-252},300,function(){  
        });
    }    
};

var timer = setInterval("auto()",3800)

$("#page4 .next").click(function(){
    clearInterval(timer);
    
    auto();
})

$("#page4 .prev").click(function(){
    clearInterval(timer);
    
    n--;
    if ( n < 0 ) { n = (ln - 1)};
    
    if ( bw > 800 ){
        $("#page4 .slide ul li:last-child").prependTo("#page4 .slide ul")
        $("#page4 .slide ul").css({"left":-310})
        $("#page4 .slide ul").stop().animate({"left":0})
    } else {
        $("#page4 .slide ul li:last-child").prependTo("#page4 .slide ul")
        $("#page4 .slide ul").css({"left":-252})
        $("#page4 .slide ul").stop().animate({"left":0})
    }
   
})

//사이드 메뉴 바 영역
$(".click_box div:last-child").click(function(){
   
    $(".menu_bar").addClass("on")
    $("header").addClass("disable")
    $("html").addClass("fix")
    $(".xbutton").addClass("on")
})

$(".xbutton").click(function(){

    $(".menu_bar").removeClass("on")
    $("header").removeClass("disable")
    $("html").removeClass("fix")
    $(".xbutton").removeClass("on")
})


//스크롤 탑 버튼
$("footer .top").click(function(){
    $("html").animate({scrollTop:0},800);
})
