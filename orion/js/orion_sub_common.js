$(function(){
	
	// 탑으로 버튼 부드럽게 이동되는 스크립트
	$(window).scroll(function(){
		var pos = $(window).scrollTop();
		console.log(pos)
		if(pos > 190){
			$("aside").css("display", "block")
		}else{
			$("aside").css("display", "")
		}
		if(pos > 400){
			$("aside").css("opacity", "1")
		}else{
			$("aside").css("opacity", "")
		}
	})
	/* aside 클릭 시 스크롤 탑으로 이동되는 스크립트 */
	$("aside").click(function(){
		$("html, body").stop().animate({scrollTop:"0px"}, 1000)
	})
	/* 클릭시 자동 스크롤이동되는 스크립트- 변수이름과 클래스 이름 클래스 변수값에+되는 수 바꿔서 쓸 것*/
	$(".scont_qbtn").click(function(){
		
		var i = $(this).index();
		var sub_contents = $(".sub_contents"+(i+2)).offset().top;
		$("html, body").stop().animate({scrollTop: sub_contents}, 1000)
	})
	
	/* 네비 메뉴에서 클릭 시 위치로 자동이동되는 스크롤 */
	$(".sub li").click(function(){
		var i =$(this).index()
		var sub_contents = $(".sub_contents"+(i+2)).offset().top;
		$("html, body").stop().animate({scrollTop: sub_contents}, 1000)
	})
	
	
		
   })