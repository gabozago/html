 $(function(){
	   $(".hover_line").stop().animate({width:"10%", left: "0%"}, 0);
    
	 $(".nav_wrap > ul > li").hover(function(){
		var i = $(this).index();
       console.log(i)
       if(i != 2){
        $(".hover_line").stop().animate({width:"10%", left: i*20+"%"}, 0);
       }
	 },function(){
		$(".hover_line").stop().animate({width:"10%", left: "0%"}, 0);
		 

	 })
    $(".submenu ul").hover(function(){
      var i = $(this).index()
      if(i != 2){
      $(".hover_line").stop().animate({width:"10%", left: i*20+"%"}, 0);  
      }
    },function(){
$(".hover_line").stop().animate({width:"10%", left: "0%"}, 0);
    })
  })