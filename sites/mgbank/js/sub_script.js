
//sub1 아코디언 메뉴 영역
$(".caution .c_list div").click(function () {
  $(".c_list ul").slideUp(200);
  $(this)
    .toggleClass("open")
    .parent()
    .siblings()
    .children("div")
    .removeClass("open");
  $(this).next().stop().slideToggle(200);
});

//sub2 탭메뉴 영역
$(".tablist li a").click(function () {
  var tn = $(this).parent().index(); //클릭한 요소의 부모의 index 순번

  $(".tablist li a").removeClass("select"); //모든 요소들의 .select를 제거
  $(this).addClass("select"); //클릭한 요소에만 .select를 추가
  $("#sub2 .tab").eq(tn).addClass("view").siblings().removeClass("view");
  //클릭한 요소의 부모 순번 탭만 활성화
});

//sub2 아코디언메뉴 영역
$("#sub2 .tab2 li div").click(function () { 
  $("#sub2 .tab2 li p").slideUp(300); //다른 요소는 접히고 
  $(this).next().stop().slideToggle(300); //클릭한 요소만 펼쳐짐
  $(this) //클릭한 요소의 화살표만 돌아가게 함
    .toggleClass("rotate") 
    .parent()
    .siblings()
    .children("div")
    .removeClass("rotate");
});


//서브 페이지 로컬 네비게이션 바 영역
$(window).scroll(function () {
  var sc = $(this).scrollTop();

  /*var lnbsc = $(".lnb").offset().top;*/

  if (sc > 150) {
    // 스크롤이 1이상 발생하면
    $(".lnb").addClass("color fix");
    $(".blank").addClass("fix");
    $(".lnb").mouseleave(function () {
      $(".lnb").addClass("color");
    });
  } else {
    // 맨위로 올라오면
    $(".lnb").removeClass("color fix");
    $(".blank").removeClass("fix");
    $(".lnb").mouseover(function () {
      $(".lnb").addClass("color");
    });
    $(".lnb").mouseleave(function () {
      $(".lnb").removeClass("color");
    });
  }
});