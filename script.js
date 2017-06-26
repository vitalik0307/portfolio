$(document).ready(function(){

	var desctopMenuItem = $(".menu-links");
	desctopMenuItem.click(function(e){
		var sectionId = e.currentTarget.id + "Section";
		$("html body").animate({
		scrollTop: $("#" + sectionId).offset().top
		},1000);
	});
	
	$('.hamburger').click(function() {
    	$('#overlay').fadeIn(300);
    	$('.menu-wrapper').removeClass('display-n');
    });
     
    $('#close').click(function() {
    	$('#overlay').fadeOut(300);
    	$('.menu-wrapper').addClass("display-n");
    });

    $('.menu-wrapper a').click(function() {
    	$('#overlay').fadeOut(300);
    	$('.menu-wrapper').addClass("display-n");
    });
	
});


