$(function(){
	
/* 파일 내 이름값을 찾기위한 임시 명령 */	
/*    var CurrentFileName = document.URL.substring(document.URL.lastIndexOf("/") + 1);
    var CurrentFileName_lastindex = CurrentFileName.lastIndexOf(".");
    CurrentFileName = CurrentFileName.substring(0, CurrentFileName_lastindex);*/
	
var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
	// 클릭시 화면을 움직이는 소스를 함수화 해놓은거...
	// 사용법은 sTopscroll(값) 끝 =ㅁ=;;;
 function sTopscroll(px) {
        $("html, body").stop().animate({
            scrollTop: px
        }, 1000);
    }
	// 변수 메뉴 인덱스 = 파라미터의 메뉴 인덱스 값에 임시 저장
    var menu_index = getUrlParameter("menu_index");
	// 만약에 섭아이디가 아무것도 없는게 아니라면 오프셋 값을 가지고 와서
	// 스크롤탑함수를 서브아이디의 스크롤탑의 -100으로 이동하라 ...
	if (getUrlParameter("sub_id") != undefined) {
        var url = $("#" + getUrlParameter("sub_id")).offset().top;
        sTopscroll(url - 100);
    }	
	
	})