// JavaScript Document

var SliderImage;
var SliderHref;
var slider;
var counterSlide = 1;
var TotalObject;
var index;
var SliderContainerATT;
var total;

function sliderActive() {
	for(i = 0; i < SliderAccess.length; i++){
			index = i;		
			TotalObject = SliderAccess.length;						
			SliderImage = SliderAccess[0].image;	
			SliderHref = SliderAccess[0].imageHref;	
			
		if(i > 1) {
			$(".leftArrow, .rightArrow").css("display", "block");
		}
		else{
			$(".leftArrow, .rightArrow").css("display", "none");
		}								 
	}
	
	document.getElementById('SliderContainer').setAttribute('total', TotalObject);
	
	        slider = document.createElement("img");
			slider.id = "Slider_Main";
			slider.src = SliderImage;
			slider.setAttribute('href', SliderHref);			
			$("#SliderContainer").append(slider);
	
	$(".leftArrow").click(function(){leftArrow();});
	$(".rightArrow").click(function(){rightArrow();});
	
	$(".leftArrow").mouseenter(function(){$(".leftArrow").animate({opacity: "1.0", height: "100px", width: "100px", top: "150px",  left: "9%"});});
	$(".leftArrow").mouseleave(function(){$(".leftArrow").animate({opacity: "0.5", height: "50px", width: "50px", top: "175px", left: "10%"});});
	$(".rightArrow").mouseenter(function(){$(".rightArrow").animate({opacity: "1.0", height: "100px", width: "100px", top: "150px", right: "9%"});});
	$(".rightArrow").mouseleave(function(){$(".rightArrow").animate({opacity: "0.5", height: "50px", width: "50px", top: "175px", right: "10%"});});

	
	function leftArrow() {
		counterSlide--; 
		if (counterSlide < 1){counterSlide = TotalObject;} 
		SliderContainerATT = document.getElementById("SliderContainer").setAttribute("slide", counterSlide);
		
		
		document.getElementById("Slider_Main").src = 'images/' + counterSlide +'.jpg';
		//document.getElementById("Slider_Main").setAttribute('href', SliderAccess[counterSlide].imageHref);
		SliderContainerATT = document.getElementById("SliderContainer").setAttribute("slide", counterSlide);
		
		action();
	}
	function rightArrow() {
		counterSlide++; 
		if (counterSlide > TotalObject){counterSlide = 1;} 
			document.getElementById("Slider_Main").src = 'images/' + counterSlide +'.jpg';
			//document.getElementById("Slider_Main").setAttribute('href', SliderAccess[counterSlide].imageHref);
			SliderContainerATT = document.getElementById("SliderContainer").setAttribute("slide", counterSlide);
			action();
		}
}
function action(){SliderContainerATT = document.getElementById("SliderContainer").getAttribute('slide');
}