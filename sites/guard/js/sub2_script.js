$(window).scroll(function(){
    var h = $(document).scrollTop();
    
    if(h > 500) { 
        $("header").addClass("active");
    } else if ( h <= 500 ) {  
        $("header").removeClass("active");
    }   
});


var bw = $("body").width();

if (bw > 800) {
    $(function(){
	   var controller = new ScrollMagic.Controller();
    
        var imgmove = document.getElementsByClassName("move");
        
        for (var i=0; i<imgmove.length; i++) {
        
        var tween = TweenMax.to(imgmove[i], 0.5, {	//2. animation object 생성
            width:"48%"
    	});    
            
        var scene = new ScrollMagic.Scene({
          triggerElement: imgmove[i],
          triggerHook: 0.95,
          duration: 300,
        })
        .setTween(tween)
        .addTo(controller)
        }   
    });        
} else { 
    $(function(){
	var controller = new ScrollMagic.Controller();

    var imgmove = document.getElementsByClassName("move");
    
    for (var i=0; i<imgmove.length; i++) {
    
    var tween = TweenMax.to(imgmove[i], 0.5, {	//2. animation object 생성
        width:"100%"
	});    
        
    var scene = new ScrollMagic.Scene({
      triggerElement: imgmove[i],
      triggerHook: 0.95,
      duration: 300,
    })
    .setTween(tween)
    .addTo(controller)
    }   
    });     
}


$(function(){
    var controller = new ScrollMagic.Controller();
        
    var tween1 = TweenMax.to("#sub2 > h2", 0.5, { //2. animation object 생성
        scale: 0.7,
        y:150,
    });    
    var tween2 = TweenMax.to("#sub2 > p", 0.5, {	//2. animation object 생성
        scale: 1.3,
        y:150,
    });        
            
    var scene = new ScrollMagic.Scene({
          triggerElement: ".trigger",
          triggerHook: 0.3,
          duration: 380,
          offset:280,
    })
        .setTween(tween1)
        .addTo(controller)
          
    var scene = new ScrollMagic.Scene({
        triggerElement: ".trigger",
        triggerHook: 0.3,
        duration: 380,
        offset:280,
    })
        .setTween(tween2)
        .addTo(controller)    
   
});         
    
$(function(){
    var controller = new ScrollMagic.Controller();	
    
    var scene = new ScrollMagic.Scene({	
        triggerElement: '.func',	
        triggerHook: 0.89	
    })
    .setClassToggle(".func", "visible")
    .addTo(controller)
});      
            
$(function(){
    var controller = new ScrollMagic.Controller();	
    
    var scene = new ScrollMagic.Scene({	
        triggerElement: '.vip ul',	
        triggerHook: 0.86	
    })
    .setClassToggle(".vip ul", "visible")
    .addTo(controller)
});      
            
        
  
    
    
