//메인 텍스트 애니메이션
$(document).ready(function(){wav(); $("#main p").addClass("transx");}); 

function wav() {
    $(".ani_text span i").addClass("wav")
    setTimeout(function(){
        $(".ani_text span:first-child").appendTo(".ani_text");
        $(".ani_text span i").removeClass("wav")
    },1200);
}
var timer = setInterval("wav()",5000);



//메인 비주얼 사진 애니메이션
const mouseMove = (e) => {
        
        // 마우스 좌표값 가져오기
        let mousePageX = e. pageX;
        let mousePageY = e. pageY;

        // 마우스 좌표값 기준점을 가운데로 변경
        let centerPageX = window.innerWidth/2 - mousePageX;
        let centerPageY = window.innerHeight/2 - mousePageY;

        // centerPage 최소값 -250 최대값 250 설정 (! Point)
        let maxPageX = Math.max(-250, Math.min(250, centerPageX));
        let maxPageY = Math.max(-250, Math.min(250, centerPageY));

        // 각도 줄이는 설정
        let anglePageX = maxPageX * 0.1;
        let anglePageY = maxPageY * 0.1;

        // 부드럽게 설정
        let softPageX = softPageY = 0;
        softPageX += (anglePageX - softPageX)* 0.4;
        softPageY += (anglePageY - softPageY)* 0.4;

        // 이미지 움직이기 - 반복문으로 개별로 움직임
        for ( var i = 1; i < 5; i++ ) {
        var imgMove = document.querySelector(".photo img:nth-child(" + i +")");
        imgMove.style.transform = "perspective(580px) rotateX(" + softPageY + "deg) rotateY(" + -softPageX + "deg) translateX(" + softPageY + "px) translateY(" + -softPageX + "px)"    
        };
    };

    window.addEventListener("mousemove", mouseMove);
    // = document.addEventListener("mousemove", mouseMove);


// 웹 포트폴리오 슬라이드 영역
var n = 0;
var sw = $("#slide .box").width();
var sl = $("#slide .box").length;

$("#slide .next").click(function(){
    n++;
    if ( n >= sl ) { n = 0 };
    $(".slide_box").animate({"left": - (sw + 210)},400,function(){
        $(".slide_box").css({"left":"0"});
        $(".slide_box .box:nth-child(1)").appendTo(".slide_box")});
    $(".fill").animate({"left": n * 16.6666 + "%"})
});

$("#slide .prev").click(function(){
    n--;
    if ( n < 0 ) { n = (sl-1) };
    $(".slide_box .box:nth-child(6)").prependTo(".slide_box");
    $(".slide_box").css({"left":- (sw + 210) +"px"});
    $(".slide_box").animate({"left":"0"},400);
    $(".fill").animate({"left": n * 16.6666 + "%"})
});


//헤더 & 글로벌 내비게이션바 애니메이션
const home = $("#main").offset().top;
const profile = $("#profile").offset().top;
const web = $("#slide .main_tit").offset().top;
const design = $("#design").offset().top;
const contact = $("#contact").offset().top;

var ht = $("html").scrollTop

$(window).scroll(function(){
    var ht = $("html").scrollTop();
    
    if ( ht > 0 ) { //스크롤시 헤더 사이즈변경& 테두리추가
        $("header .wrap").addClass("small");    
        $("header").addClass("border");    
    } else { 
        $("header .wrap").removeClass("small")
        $("header").removeClass("border")
    };
    
    if ( ht < (profile-300)) { //해당 위치로 이동시 메뉴에 클래스on 추가
        $(".gnb li a").removeClass("on");
        $(".gnb li:nth-child(1) a").addClass("on");
    } else if (( ht >= (profile-300)) && ( ht < (web - 340) )) {
        $(".gnb li a").removeClass("on");
        $(".gnb li:nth-child(2) a").addClass("on");
    } else if (( ht >= (web - 340)) && ( ht < (design +50))) {
        $(".gnb li a").removeClass("on");
        $(".gnb li:nth-child(3) a").addClass("on");
    } else if ( ht >= (design - 100)) {
        $(".gnb li a").removeClass("on");
        $(".gnb li:nth-child(4) a").addClass("on");
    };
    
    if ( ht > (profile-300)) { //아이콘 퍼센티지 애니메이션
        $(".bar_fill").addClass("full");
    } else {
        $(".bar_fill").removeClass("full");
    }
    
    //스크롤 페이드 애니메이션
    if ( ht >= (profile-300)) {
        $("#profile .img_con").addClass("show")
        $("#profile .txt_box").addClass("show")
    } else {
        $("#profile .img_con").removeClass("show")
        $("#profile .txt_box").removeClass("show")
    };
    
    if ( ht >= (web - 340)) {
        $("#slide .slide_con").addClass("show")
        $("#slide .pagenation").addClass("show")
    } else {
        $("#slide .slide_con").removeClass("show")    
        $("#slide .pagenation").removeClass("show")    
    };
    
    if ( ht >= (design - 100)) {
        $("#design li").addClass("show")
    } else {
        $("#design li").removeClass("show")  
    };
});

//메뉴 클릭시 스크롤 이동
$("h1").click(function(){
    $("html").animate({scrollTop:home});
});
$(".gnb li:nth-child(1)").click(function(){
    $("html").animate({scrollTop:home});
});
$(".gnb li:nth-child(2)").click(function(){
    $("html").animate({scrollTop:(profile+240)});
});
$(".gnb li:nth-child(3)").click(function(){
    $("html").animate({scrollTop:(web+10)});
});
$(".gnb li:nth-child(4)").click(function(){
    $("html").animate({scrollTop:(design+250)});
});


//디자인 이미지 갤러리
$("#design li p").click(function(){    
    var iscr = $(this).siblings("img").attr("src");
    $(".con > img").attr("src",iscr); //클릭한 이미지의 attr로 변경
    $(".full").addClass("on"); //전체화면
    $("html").addClass("fix"); //스크롤 고정
});
    
$(".con a").click(function(){
    $(".full").removeClass("on");
    $("#design li img").removeClass("select");
    $("html").removeClass("fix");
});




