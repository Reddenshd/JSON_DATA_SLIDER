// JavaScript Document

var SliderImage, SliderImageSM, SliderHref, slider, TotalObject, index, SliderContainerATT;
var total, WidthD, SliderHREFset, folderLoc = 'images/', smlImageIndex = 'sm-', counterSlide = 1;
var dftM_H , dftM_W, dftD_H, dftD_W;

function sliderActive() {
	for(i = 0; i < SliderAccess.length; i++){
		index = i;		
		TotalObject = SliderAccess.length;						
		SliderImage = SliderAccess[0].image;	
		SliderImageSM = SliderAccess[0].SliderImageSM;	
		SliderHref = SliderAccess[0].imageHref;	
		dftM_H = SliderAccess[0].dftM_H;	
        dftM_W = SliderAccess[0].dftM_W;	
        dftD_H = SliderAccess[0].dftD_H;	
        dftD_H = SliderAccess[0].dftD_H;	
		if(i > 1) {$(".leftArrow, .rightArrow").css("display", "block");}
		else{$(".leftArrow, .rightArrow").css("display", "none");}							 
	}
	document.getElementById('SliderContainer').setAttribute('total', TotalObject);
	slider = document.createElement("img");
	SliderHREF = document.createElement("a");
	slider.id = "Slider_Main";
	SliderHREF.id = "SliderHREF";
	//SliderHREF.src = SliderImage;
	SliderHREF.setAttribute('href', SliderHref);			
	$("#SliderContainer").append(slider);
	$("#SliderContainer").append(SliderHREF);
	$("#SliderHREF").attr("target", "_blank");
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
	function leftArrow() {counterSlide--; if (counterSlide < 1){counterSlide = TotalObject;} 	SliderHREF.setAttribute('href', SliderAccess[counterSlide - 1].imageHref);	 setSlide();}
	function rightArrow() {counterSlide++; if (counterSlide > TotalObject){counterSlide = 1;} SliderHREF.setAttribute('href', SliderAccess[counterSlide - 1].imageHref); setSlide();}	
	setSlide();
}
function action(){SliderContainerATT = document.getElementById("SliderContainer").getAttribute('slide');}

function setSlide() {
  WidthD = document.body.clientWidth;
  if(WidthD <= 768){
	  document.getElementById("Slider_Main").src = folderLoc + smlImageIndex + counterSlide +'.jpg'; 
	  var imageHeightSet =  $("#Slider_Main").height();
	  var imageWidthSet =  $("#Slider_Main").width();
	  if(imageHeightSet == 0 && imageWidthSet == 0) { imageHeightSet = dftM_H; imageWidthSet = dftM_W;} 
	  document.getElementById('SliderHREF').style.width = imageWidthSet + 'px';
	  document.getElementById('SliderHREF').style.height = imageHeightSet + 'px';
	  document.getElementById('SliderHREF').style.top = '-177px';
	  SliderContainerATT = document.getElementById("SliderContainer").setAttribute("slide", counterSlide);
  }
  else{ 
  
   var imageHeightSet =  $("#Slider_Main").height();
   var imageWidthSet =  $("#Slider_Main").width();
   if(imageHeightSet == 0 && imageWidthSet == 0) { imageHeightSet = dftD_H; imageWidthSet = dftD_W;}

   document.getElementById("Slider_Main").src = folderLoc + counterSlide +'.jpg'; 
   document.getElementById('SliderHREF').style.width = imageWidthSet + 'px';
   document.getElementById('SliderHREF').style.height = imageHeightSet + 'px';
   document.getElementById('SliderHREF').style.top = '-226px';
   SliderContainerATT = document.getElementById("SliderContainer").setAttribute("slide", counterSlide);
  }
}
window.onresize = function(event) {setSlide();};