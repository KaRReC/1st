$(document).ready(function(){
	$(".menu-icon").on("click", function(){
		$("nav ul").toggleClass("showing");
	});
});

$(window).on("scroll", function(){
	if($(window).scrollTop()){
		$('nav').addClass('blue');
	}else{
		$('nav').removeClass('blue');

	}
});


$(document).ready(function(){
    $(".card").click(function(){
        $(".card").addClass("hover1");
       
    });
    $(".card").dblclick(function(){
        $(".card").removeClass("hover1");
        
    });
});
