const bw = $("body").width();

const s1 = $(".site1").offset().top;
const s2 = $(".site2").offset().top;
const s3 = $(".site3").offset().top;
const s4 = $(".site4").offset().top;

const ht = $(".history").offset().top - 250;
const rt = $(".road").offset().top;

var n = 0;
var h = $(document).scrollTop();

//탭 메뉴 영역
$(".year li").click(function(){
    $(".year li").removeClass("select"); 
    $(this).addClass("select");
    $(".his_list_con").css({"left":0}); // pc탭메뉴 슬라이드 리셋
    
    var tn = $(this).index()+1; 
    
    $(".tab"+tn).addClass("on").siblings("div").removeClass("on"); 
    
    //탭메뉴 누르면 목록이 없어졌다 페이드로 나타남
    $(".his_list_con").css({"opacity":"0","width":"100%"})
    $(".tab"+tn).find(".his_list_con").animate({"opacity":"1","width":"100%"},400)
    
    n = 0; // 모바일 탭메뉴 슬라이드 리셋
})


//탭 메뉴 슬라이드 영역
if ( bw > 800 ) { // pc
    $(".tab1 .next").click(function(){
        $(".tab1 .his_list_con").animate({"left":-530},400)
    })
    $(".tab1 .prev").click(function(){
        $(".tab1 .his_list_con").animate({"left":0},400)
    })
    
    $(".tab2 .next").click(function(){
        $(".tab2 .his_list_con").animate({"left":-1060},400)
    })
    $(".tab2 .prev").click(function(){
        $(".tab2 .his_list_con").animate({"left":0},400)
    })
} else { // mobile
    $(".history .next").click(function(){
        var al = $(this).siblings(".his_list").find("article").length-1;
        n++;
        
        if ( n >= al ) { n = al };
        $(this).siblings(".his_list").children(".his_list_con").stop().animate({"left": -n * 83 + "vw" },300)
    })
    
    $(".history .prev").click(function(){
        n--;
        
        if ( n <= 0) { n = 0 };
         $(this).siblings(".his_list").children(".his_list_con").stop().animate({"left": -n * 83 + "vw" },300)
    })
}


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
    
    //페이지 스크롤 버튼 보이기
     if (h > ht) {
        $(".scroll").addClass("on");
    } else {
        $(".scroll").removeClass("on");
    }
    
    //에센셜 영역 페이드 애니메이션
    if (h < (s1 - 400)) {
        $(".essence > div p").removeClass("view"); 
        
    } else if ((h >= (s1 - 400)) && (h < (s2 - 400))) {
        $(".site1 p").addClass("view");
        
    } else if ((h >= (s2 - 400)) && (h < (s3 - 400))) {
        $(".site2 p").addClass("view");
        
    } else if ((h >= (s3 - 400)) && (h < (s4 - 400))) {
        $(".site3 p").addClass("view");
        
    } else if ((h >= (s4 - 400)) && (h < (s4 + 500))) {
        $(".site4 p").addClass("view");
    } 
    
    //브랜드로드 페이드 애니메이션
    if (h < (rt - 600)) {
        $(".road article").removeClass("view");
    
    } else if ((h >= (rt - 600)) && (h < (rt - 300))) {
        $(".road .step1").addClass("view");
        
    } else if ((h >= (rt - 300)) && (h < (rt - 50))) {
        $(".road .step2").addClass("view"); 
        
    } else if ((h >= (rt - 50)) && (h < (rt + 200))) {
        $(".road .step3").addClass("view");
        
    } else if ((h >= (rt + 200)) && (h < (rt + 400))) {
        $(".road .step4").addClass("view"); 
        
    } else if ((h >= (rt + 350)) && (h < (rt + 600))) {
        $(".road .step5").addClass("view"); 
        
    } else if (h >= (rt + 550))  {
        $(".road .step6").addClass("view");  
    }
    
    
    //페이지 스크롤 버튼 애니메이션
    if (h >= rt - 200) {
        $(".scroll .scroll03").addClass("now").siblings().removeClass("now");
    } else if (h >= s1 - 200) {
        $(".scroll .scroll02").addClass("now").siblings().removeClass("now");
    } else {
        $(".scroll .scroll01").addClass("now").siblings().removeClass("now");
    }
    
    if ((h >= rt - 200) || (h <= s1 - 200)) {
        $(".scroll > div .dot").removeClass("white")
    } else {
        $(".scroll > div .dot").addClass("white")
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


//페이지 스크롤 버튼
if (h > ht) {
        $(".scroll").addClass("on");
    } else {
        $(".scroll").removeClass("on");
    };

$(".scroll .scroll01").click(function(){
    $("html").animate({scrollTop:ht+200},700);});
    
$(".scroll .scroll02").click(function(){
    $("html").animate({scrollTop:s1},700);});

$(".scroll .scroll03").click(function(){
    $("html").animate({scrollTop:rt},700);});

