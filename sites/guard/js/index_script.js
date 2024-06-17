var bw = $("body").width();
        
$(window).resize(function(){
    location.reload();
    bw = $("body").width();
});



//비디오 제어 영역
const video = document.querySelector("#bg_video");

$(".video_ui .play").click(function(){// 재생 버튼
    video.play();
});
$(".video_ui .stop").click(function(){// 정지 버튼
    video.pause();
});

setInterval(function(){ // 비디오 프로그레스 바
    var vidps = ((100 / video.duration) * video.currentTime);
    // ( 100 / 비디오 전체시간) * 비디오 현재시간 = 비디오 재생률
    $(".prog_fill").css({"width":vidps+"%"}) },100);
    // 0.1초마다 현재 재생률을 업데이트    


//스크롤 애니메이션 영역
var anios = $("#animate").offset().top;
var rptop = $(".report").offset().top;

$(window).scroll(function(){
    var h = $(document).scrollTop(); //현재 스크롤 위치
    

    if (( h > (rptop - 770) ) && ( h < (rptop + 5000) )) {
        $(".report").css({"position":"fixed","top":"770px"})
    } else if ( h >= (rptop + 5000) ) {
        $(".report").css({"position":"absolute","top":(rptop + 4852)+"px"})
    } else {
        $(".report").css({"position":"absolute"})
    };
    
    if(h > 600) { 
        $("header").addClass("active");
    } else if ( h <= 600 ) {  
        $("header").removeClass("active");
    };   
});


//슬라이드 영역
var n = 0; 

function auto(){
    n++;
    
    
    if ( bw > 800 ) { //pc
        if (n > 4) { n=0;};
        
        if (n > 3) {
        $(".slide").stop().animate({left:-n*862},700);    
        } else {
        $(".slide").animate({left:-n*862},700);    
        }
        
        $(".progress_fill").css({"width":(n+1)*20+"%"});
    } else { //모바일
        if (n > 5) { n=0;};
        
        if (n > 3) {
        $(".slide").stop().animate({left:-n*475},700);    
        } else {
        $(".slide").animate({left:-n*475},700);    
        }
        
        $(".progress_fill").css({"width":(n+1)*16.6666+"%"});
    }
    
    opacity();
    
}

var timer = setInterval("auto()",3500);

$(".slide_ui .pause .stop").click(function(){ //슬라이드정지
    clearInterval(timer);
    opacity();
    $(this).addClass("hide").next().removeClass("hide");
});

$(".slide_ui .pause .play").click(function(){ //슬라이드재생
    timer = setInterval("auto()",3500);
    opacity(); $(this).addClass("hide").prev().removeClass("hide");
});

$(".slide_ui .next").click(function(){ //슬라이드 다음버튼
    if ( n < 4){
        auto();
    }
    
    clearInterval(timer);
    $(".slide_ui .pause .stop").addClass("hide").next().removeClass("hide")
    
    opacity();
});

$(".slide_ui .prev").click(function(){ //슬라이드 이전버튼
    clearInterval(timer);
    $(".slide_ui .pause .stop").addClass("hide").next().removeClass("hide")
    
    n--;
    if (n < 0) { n = 0;};
    
    if (n > 3) {
        $(".slide").stop().animate({left:-n*862},700);    
    } else {
        $(".slide").stop().animate({left:-n*862},700);    
    }
    console.log(n)
    
    $(".progress_fill").css({"width":(n+1)*20+"%"});
    
    opacity();
});

function opacity() { //슬라이드 버튼 비활성 디자인
    if ( n <= 0 ) {
    $(".prev img").css({"cursor":"default","opacity":"0.3"})
    $(".next img").css({"cursor":"pointer","opacity":"1"})
    } else if ( n >= 4 ) {
    $(".next img").css({"cursor":"default","opacity":"0.3"})
    } else {
    $(".next img").css({"cursor":"pointer","opacity":"1"})
    $(".prev img").css({"cursor":"pointer","opacity":"1"})
    }
};


//스크롤 다운 버튼 영역
var down = $("#focus h2").offset().top //해당 위치 반환

$(".down").click(function(){
    $("html, body").animate({scrollTop: down},800); 
})


//풀페이지 스크롤 애니메이션 영역 (트윈맥스 + 스크롤매직 라이브러리)
$(function(){
	var controller = new ScrollMagic.Controller();	// 1. ScrollMagic 컨트롤러

	var tween = TweenMax.to('#animate', 0.5, {	//2. animation object - 배경 너비 변경
        width:"100vw"
	});

	var scene = new ScrollMagic.Scene({	//3. Scene object
		triggerElement: '#trigger1',	//스크롤 애니메이션 시작 지점
		duration: "520",	//애니메이션 재생 스크롤 값 설정
	})
	.setTween(tween)//4. 2번을 3번에 추가
	.addTo(controller)	//5. 1번을 3번에 추가
	//.addIndicators() 인디케이터 표시
});

$(function(){
	var controller = new ScrollMagic.Controller();

    var textreveal = document.getElementsByClassName("text");
    
    for (var i=0; i<textreveal.length; i++) {
    
    var scene = new ScrollMagic.Scene({
      triggerElement: textreveal[i],
      offset: -200,
      triggerHook: 0.5,
      duration: '500'
    })
    .setClassToggle(textreveal[i], "active") // add class toggle
    .addTo(controller)
    //.addIndicators();
    }   
});  

$(function(){
    var controller = new ScrollMagic.Controller();
    
    var scene = new ScrollMagic.Scene({
    triggerElement: ".title", //트리거 설정
    triggerHook: 0.8
    })
    
    .setClassToggle(".title", "visible")
    .addTo(controller)
    
    
    var reveal = document.getElementsByClassName("ani");
    
    for (var i=0; i<reveal.length; i++) {
    
    var scene2 = new ScrollMagic.Scene({
      triggerElement: reveal[i],
      offset: 50,
      triggerHook: 0.95
    })
    .setClassToggle(reveal[i], "visible") // add class toggle
    .addTo(controller)
}
});


$(function(){
	var controller = new ScrollMagic.Controller();	

	var scene = new ScrollMagic.Scene({	
		triggerElement: '#photo h2',	
		triggerHook: 0.9	
	})
	.setClassToggle("#photo h2", "visible")
	.addTo(controller)
	//.addIndicators();
});

$(function(){
	var controller = new ScrollMagic.Controller();

    var bannerreveal = document.getElementsByClassName("ban");
    
    for (var i=0; i<bannerreveal.length; i++) {
    
    var scene = new ScrollMagic.Scene({
      triggerElement: bannerreveal[i],
      offset: 50,
      triggerHook: 0.89,
    })
    .setClassToggle(bannerreveal[i], "visible") // add class toggle
    .addTo(controller)
    //.addIndicators({name: "ban " + (i+1)});
    }   
});  
