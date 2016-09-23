// JavaScript Document

var SliderImage;
var SliderHref;
var slider;
var counterSlide = 1;
var TotalObject;
var index;
var SliderContainerATT;

function sliderActive() {
	for(i = 0; i < SliderAccess.length; i++){
			index = i;		
			TotalObject = SliderAccess.length;						
			SliderImage = SliderAccess[0].image;	
			SliderHref = SliderAccess[0].imageHref;	
			
		if(i > 1) {$("#leftArrow").css("display", "block"); $("#rightArrow").css("display", "block");}
		else{$("#leftArrow").css("display", "none"); $("#rightArrow").css("display", "none");	}								 
	}
	        slider = document.createElement("img");
			slider.id = "Slider_Main";
			slider.src = SliderImage;
			slider.setAttribute('href', SliderHref);			
			$("#SliderContainer").append(slider);
	
	$("#leftArrow").click(function(){leftArrow();});
	$("#rightArrow").click(function(){rightArrow();});
	
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