$(document).ready(function(){
	setEventListener();
});

function setEventListener(){
	var mobileMenuItem = $(".menu-item a");
	var desctopMenuItem = $(".menu-links");
	mobileMenuItem.click(function(e){
		var sectionId = e.currentTarget.id;
		// console.log("this is setion id: "+sectionId);
	$("html body").animate({
		scrollTop: $("#" + sectionId + "Section").offset().top
	},1000);
	

	})

	desctopMenuItem.click(function(e){
		var sectionId = e.currentTarget.id + "Section";
		console.log("this is setion id: "+sectionId);
	
	$("html body").animate({
		scrollTop: $("#" + sectionId).offset().top
	},1000);

	})
}
