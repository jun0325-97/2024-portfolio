const bw = $("body").width();
const mt = $(".main").offset().top;
const sec1 = $("#sec1").offset().top;
const sec2 = $("#sec2").offset().top;
const sec3 = $("#sec3").offset().top;
const sec4 = $("#sec4").offset().top;
const sec5_box1 = $("#sec5 .box1").offset().top;
const sec5_box2 = $("#sec5 .box2").offset().top;
const sec6_box1 = $("#sec6 .box1").offset().top;
const sec6_box2 = $("#sec6 .box2").offset().top;
const sec6_box3 = $("#sec6 .box3").offset().top;


var n = 0;
var h = $(document).scrollTop();

$(".main .wrap > img").addClass("show");


//스크롤 애니메이션
$(window).scroll(function() {
    var h = $(document).scrollTop();
    console.log(h)
    
    //배경 이미지 애니메이션
    $(".bg_con").css({"background-position-y": (-h * 0.4 )+ "px" })
    //이미지를 스크롤의 0.4배속으로 올라가게 함
    
    if ( h > 630 ) {
        $(".header").addClass("on")
    } else { 
        $(".header").removeClass("on")
    }
    
    if ( h > (mt + 700)) {
        $(".main .wrap > img").removeClass("show");   
    } else {
        $(".main .wrap > img").addClass("show"); 
    }
    
    if (( h > (sec1-260)) && ( h < (sec1+800))) {
        $("#sub2 #sec1 div:nth-of-type(2)").addClass("show")
        $("#sub2 #sec1 div:nth-of-type(3)").addClass("show")
        $("#sub2 #sec1 p:nth-of-type(2)").addClass("show")
    } else {
        $("#sub2 #sec1 div:nth-of-type(2)").removeClass("show")
        $("#sub2 #sec1 div:nth-of-type(3)").removeClass("show")
        $("#sub2 #sec1 p:nth-of-type(2)").removeClass("show")
    }
    
    if ( h > (sec3-700)) {
        $("#sub2 #sec3 ul li:nth-child(1)").addClass("show")
        $("#sub2 #sec3 ul li:nth-child(2)").addClass("show")
        $("#sub2 #sec3 ul li:nth-child(3)").addClass("show")
    } else {
        $("#sub2 #sec3 ul li:nth-child(1)").removeClass("show")
        $("#sub2 #sec3 ul li:nth-child(2)").removeClass("show")
        $("#sub2 #sec3 ul li:nth-child(3)").removeClass("show")
    }
    
    if (( h > (sec4-140)) && ( h < (sec4+1200))) {
        $("#sub2 #sec4 img").addClass("show")
        $("#sub2 #sec4 video").addClass("show")
    } else {
        $("#sub2 #sec4 img").removeClass("show")
        $("#sub2 #sec4 video").removeClass("show")
    }
    
    if ( h > (sec5_box1-550)) {
        $("#sub2 #sec5 .box1 .text").addClass("show")
    } else {
        $("#sub2 #sec5 .box1 .text").removeClass("show")
    }
    
    if ( h > (sec5_box2-550)) {
        $("#sub2 #sec5 .box2 .text").addClass("show")
    } else {
        $("#sub2 #sec5 .box2 .text").removeClass("show")
    }
    
    if ( h > (sec6_box1-550)) {
        $("#sub2 #sec6 .box1 .text").addClass("show")
    } else {
        $("#sub2 #sec6 .box1 .text").removeClass("show")
    }
    
    if ( h > (sec6_box2-550)) {
        $("#sub2 #sec6 .box2 .text").addClass("show")
    } else {
        $("#sub2 #sec6 .box2 .text").removeClass("show")
    }
    
    if ( h > (sec6_box3-550)) {
        $("#sub2 #sec6 .box3 .text").addClass("show")
    } else {
        $("#sub2 #sec6 .box3 .text").removeClass("show")
    }
    

});


//스크롤 탑 버튼
$("footer .top").click(function(){
    $("html").animate({scrollTop:0},800);
})


//사이드 메뉴 바 영역
$(".click_box div:last-child").click(function(){
   
    $(".menu_bar").addClass("on")
    $(".header").addClass("disable")
    $("html").addClass("fix")
    $(".xbutton").addClass("on")
})

$(".xbutton").click(function(){

    $(".menu_bar").removeClass("on")
    $(".header").removeClass("disable")
    $("html").removeClass("fix")
    $(".xbutton").removeClass("on")
})





