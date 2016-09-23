// JavaScript Document

var SliderImage, SliderImageSM, SliderHref;
var slider, TotalObject, index, SliderContainerATT;
var total, WidthD, SliderHREFset;
var folderLoc = 'images/', smlImageIndex = 'sm-';
var counterSlide = 1;

function sliderActive() {
	for(i = 0; i < SliderAccess.length; i++){
		index = i;		
		TotalObject = SliderAccess.length;						
		SliderImage = SliderAccess[0].image;	
		SliderImageSM = SliderAccess[0].SliderImageSM;	
		SliderHref = SliderAccess[0].imageHref;	
		if(i > 1) {$(".leftArrow, .rightArrow").css("display", "block");}
		else{$(".leftArrow, .rightArrow").css("display", "none");}							 
	}
	document.getElementById('SliderContainer').setAttribute('total', TotalObject);
	slider = document.createElement("img");
	slider.id = "Slider_Main";
	slider.src = SliderImage;
	slider.setAttribute('href', SliderHref);			
	$("#SliderContainer").append(slider);
	$(".leftArrow").click(function(){leftArrow();});
	$(".rightArrow").click(function(){rightArrow();});
	
	if(navigator.userAgent.match(/Mobi/i)){console.log('Mobile');}
	else{
	  console.log('Desktop');
      $(".leftArrow").mouseenter(function(){$(".leftArrow").animate({opacity: "1.0", height: "60px", width: "90px", top: "150px",  left: "9%", paddingTop: "30px"});});
	  $(".leftArrow").mouseleave(function(){$(".leftArrow").animate({opacity: "0.5", height: "40px", width: "50px", top: "175px", left: "10%", paddingTop: "10px"});});
	  $(".rightArrow").mouseenter(function(){$(".rightArrow").animate({opacity: "1.0", height: "60px", width: "90px", top: "150px", right: "9%", paddingTop: "30px"});});
	  $(".rightArrow").mouseleave(function(){$(".rightArrow").animate({opacity: "0.5", height: "40px", width: "50px", top: "175px", right: "10%", paddingTop: "10px"});});
    };
	function leftArrow() {counterSlide--; if (counterSlide < 1){counterSlide = TotalObject;} setSlide();}
	function rightArrow() {counterSlide++; if (counterSlide > TotalObject){counterSlide = 1;} setSlide();}	
	setSlide();
}
  function action(){SliderContainerATT = document.getElementById("SliderContainer").getAttribute('slide');}
 // function urlSet(){SliderHREFset = document.getElementById("Slider_Main").setAttribute("href", );}

function setSlide() {
  WidthD = document.body.clientWidth;
  if(WidthD <= 768){
	  document.getElementById("Slider_Main").src = folderLoc + smlImageIndex + counterSlide +'.jpg'; 
  	  // urlSet();
  }
  else{ document.getElementById("Slider_Main").src = folderLoc + counterSlide +'.jpg'; }
  SliderContainerATT = document.getElementById("SliderContainer").setAttribute("slide", counterSlide);
  // urlSet();
}

window.onresize = function(event) {setSlide();};