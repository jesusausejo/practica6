$(document).ready(function(){
	
	//Fix Errors - http://www.learningjquery.com/2009/01/quick-tip-prevent-animation-queue-buildup/
	
	//Remove outline from links
	$("#animated-menu a").click(function(){
		$(this).blur();
	});
	
	//When mouse rolls over
	$("#animated-menu>ul>li").mouseover(function(){
		$(this).stop().animate({height:'150px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	
	//When mouse is removed
	$(" #animated-menu>ul>li").mouseout(function(){
		$(this).stop().animate({height:'34px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	
});