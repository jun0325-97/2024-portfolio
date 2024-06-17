//헤더 영역
$("header").mouseover(function(){ // header에 마우스오버 - 색상 on
    $(this).addClass("color")
})
$("header").mouseleave(function(){ // header에 마우스리브 - 색상 off
    $(this).removeClass("color")
})
 
$("header .gnb").mouseover(function(){ // header .gnb에 마우스오버
    $("header .gnb").addClass("vari")
    $(".link li:first-child").addClass("hide") // 바로가기버튼 숨김
    $(".gnb_bg").stop().slideDown(420,function(){ //.gnb 배경 나타남
        $(".tab").addClass("op")});
});
$("header .gnb").mouseleave(function(){ // header .gnb에 마우스리브
    $("header .gnb").removeClass("vari")
    $(".link li:first-child").removeClass("hide") // 바로가기버튼 나타남
    $(".gnb_bg").stop().slideUp(100)  //.gnb 배경 숨김
    $(".tab").removeClass("op");
});

var old = 0;

$(window).scroll(function(){
    var h = $(document).scrollTop(); //현재 스크롤 위치
    
    if (h > old) { // 새로 스크롤 한 값이 그 전 스크롤 값보다 크면
        $("header").addClass("hide") // 스크롤 다운 > 헤더 사라짐
    } else { 
        $("header").removeClass("hide") // 스크롤 업 > 헤더 나타남
    }
    old = h; // 스크롤 애니메이션이 끝난 후 스크롤 위치
});

//스크롤 탑 버튼 영역
$(".top").click(function(){
    $("html, body").animate({scrollTop: 0},800); 
})

//셀렉트 박스 영역
$(".op").click(function(){
    $(".op_list").slideToggle(300);
});


//모바일 메뉴 영역
$(".quick").click(function () {
    $(".mobile_menu_bg").addClass("on");
    $("html").addClass("fix");
    /* 스크롤 기능 off */
    $('html').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
});

$(".close").click(function () {
    $(".mobile_menu_bg").removeClass("on");
    $("html").removeClass("fix");
    $('html').off('scroll touchmove mousewheel');
});

$(".bar_left ul li").click(function(){
    var tabn = $(this).index();
    
    $(".bar_left ul li").removeClass("select"); 
    $(this).addClass("select");
    $(".bar_right .tab").eq(tabn).addClass("view").siblings().removeClass("view");
    $(".tab > li > a").removeClass("on")
    $(".tab > li ul").removeClass("slide")
});

$(".tab > li > a").click(function(){
    $(this).toggleClass("on").parent().siblings().children("a").removeClass("on")
    
    $(this).next().toggleClass("slide").parent().siblings().children("a").next().removeClass("slide")
});


//스크롤 움직임 라이브러리 Scrooth
//윈도우 스크롤휠 제어
class Scrooth {
  constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
    this.element = element;
    this.distance = strength;
    this.acceleration = acceleration;
    this.deceleration = deceleration;
    this.running = false;

    this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
    this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
    this.scroll = this.scroll.bind(this);
  }

  scrollHandler(e) {
    e.preventDefault();

    if (!this.running) {
      this.top = this.element.pageYOffset || this.element.scrollTop || 0;
      this.running = true;
      this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
      this.isDistanceAsc = true;
      this.scroll();
    } else {
      this.isDistanceAsc = false;
      this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
    }
  }

  scroll() {
    if (this.running) {
      this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
      Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
      Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;

      this.top += this.currentDistance;
      this.element.scrollTo(0, this.top);
      
      requestAnimationFrame(this.scroll);
    }
  }
}

const scroll = new Scrooth({
  element: window,
  strength: 21, //스크롤 한번에 이동하는 거리
  acceleration: 1.25, //가속도
  deceleration: .94, //감속도
});



//셀렉트 박스 스크롤휠 제어
var op_list = document.querySelector(".op_list");

class Scrooth1 {
  constructor({element =op_list, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
    this.element = element;
    this.distance = strength;
    this.acceleration = acceleration;
    this.deceleration = deceleration;
    this.running = false;

    this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
    this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
    this.scroll = this.scroll.bind(this);
  }

  scrollHandler(e) {
    e.preventDefault();

    if (!this.running) {
      this.top = this.element.pageYOffset || this.element.scrollTop || 0;
      this.running = true;
      this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
      this.isDistanceAsc = true;
      this.scroll();
    } else {
      this.isDistanceAsc = false;
      this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
    }
  }

  scroll() {
    if (this.running) {
      this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
      Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
      Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;

      this.top += this.currentDistance;
      this.element.scrollTo(0, this.top);
      
      requestAnimationFrame(this.scroll);
    }
  }
}

const scroll1 = new Scrooth1({
  element: op_list,
  strength: 20, //스크롤 한번에 이동하는 거리
  acceleration: 1.1, //가속도
  deceleration: .75, //감속도
});

