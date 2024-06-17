$(window).resize(function () {
  bw = $("body").width();
});

var bw = $("body").width();
var n = 0;
var ln = $(".cont li").length;
var lw = $(".cont li").width();

//슬라이드1 번호 표시
$(".number .now").text("0" + (n + 1));
$(".number .total").text("0" + ln);

//슬라이드1 애니메이션
function auto() {
  n++;

  if (bw > 800) {
    if (n >= ln) { n = 0; }

    $(".cont li").eq(n).addClass("view").siblings().removeClass("view");
    // 활성화된 슬라이드만 효과 적용  
    $(".cont").stop().animate({ left: n * -424 }, 500);
    // 왼쪽으로 -n * 424px 이동 
    $(".wrap .number .now").text("0" + (n + 1));
    // 현재 슬라이드 순번 표시  
    $(".list li").eq(n).addClass("select").siblings().removeClass("select");
    // 활성화된 슬라이드 목록만 효과 적용  
  } else {
    if (n >= ln) { n = 0; }

    $(".cont li").eq(n).addClass("view").siblings().removeClass("view");

    $(".cont").stop().animate({ left: n * -300 }, 500);

    $(".wrap .number .now").text("0" + (n + 1));

    $(".list li").eq(n).addClass("select").siblings().removeClass("select");
  }
}

var timer = setInterval("auto()", 5000);

//슬라이드1 다음버튼
$("#prod .next").click(function () {
  auto();
  clearInterval(timer);
  $(".play").removeClass("on");
});
//슬라이드1 이전버튼
$("#prod .prev").click(function () {
  n--;

  if (bw > 800) {
    if (n < 0) {
      n = ln - 1;
    }

    $(".cont li").eq(n).addClass("view").siblings().removeClass("view");

    $(".cont").stop().animate({ left: n * -424 }, 500);

    $(".play").removeClass("on");

    $(".wrap .number .now").text("0" + (n + 1));

    $(".list li").eq(n).addClass("select").siblings().removeClass("select");

    clearInterval(timer);
  } else {
    if (n < 0) {
      n = ln - 1;
    }

    $(".cont li").eq(n).addClass("view").siblings().removeClass("view");

    $(".cont").stop().animate({ left: n * -300 }, 500);

    $(".play").removeClass("on");

    $(".wrap .number .now").text("0" + (n + 1));

    $(".list li").eq(n).addClass("select").siblings().removeClass("select");

    clearInterval(timer);
  }
});

//슬라이드1 재생 / 일시정지 버튼
$(".play a:first-child").click(function () {
  clearInterval(timer);
  $(".play").removeClass("on");
});

$(".play a:last-child").click(function () {
  timer = setInterval("auto()", 5000);
  $(".play").addClass("on");
});

//목록 클릭시 슬라이드 이동 애니메이션
$(".list li").click(function () {
  if (bw > 800) {
    n = $(this).index();

    $(".cont li").eq(n).addClass("view").siblings().removeClass("view");

    $(".cont").stop().animate({ left: n * -424 }, 500);

    $(".wrap .number .now").text("0" + (n + 1));

    $(".list li").eq(n).addClass("select").siblings().removeClass("select");

    $(".play").removeClass("on");

    clearInterval(timer);
  } else {
    n = $(this).index();

    $(".cont li").eq(n).addClass("view").siblings().removeClass("view");

    $(".cont").stop().animate({ left: n * -300 }, 500);

    $(".wrap .number .now").text("0" + (n + 1));

    $(".list li").eq(n).addClass("select").siblings().removeClass("select");

    $(".play").removeClass("on");

    clearInterval(timer);
  }
});

//단축 메뉴 목록 슬라이드 영역
$(".menu_list .next").click(function(){
    $(this).children("img").css({"cursor":"default"}).attr("src","images/list_next_g.png")
    $(".menu_list ul").addClass("move")
    $(".menu_list .prev img").attr("src","images/list_prev_b.png").css({"cursor":"pointer"})
})

$(".menu_list .prev").click(function(){
    $(this).children("img").css({"cursor":"default"}).attr("src","images/list_prev_g.png")
    $(".menu_list ul").removeClass("move")
    $(".menu_list .next img").attr("src","images/list_next_b.png").css({"cursor":"pointer"})
})

//모바일용 스와이퍼 슬라이드
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});
