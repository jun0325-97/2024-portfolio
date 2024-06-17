$(window).resize(function () {
  bw = $("body").width();
});

var bw = $("body").width();
var n = 0;
var ln = $(".cont li").length;
var lw = $(".cont li").width();


//헤더 애니메이션 영역
$(".gnb li a").mouseover(function () {
  var mn = $(this).parent("li").index();
  $(".mnbar_tab > ul").eq(mn).addClass("view").siblings().removeClass("view");
  $(this).addClass("color");
  $(this).parent("li").siblings().children("a").removeClass("color");
});

$("header").mouseleave(function () {
  $(".mnbar_tab > ul").removeClass("view");
  $(".gnb li a").removeClass("color");
});


//모바일 메뉴 애니메이션 영역
$(".mnbar_tab_m .my_list li b").click(function () {
  $(this).next("ul").slideToggle(300);
});

$(".quickmenu li:nth-child(2)").click(function () {
  $(".mnbar_tab_m").addClass("on");
  $("html").addClass("fix");
});

$(".mnbar_tab_m .close").click(function () {
  $(".mnbar_tab_m").removeClass("on");
  $("html").removeClass("fix");
});


