"use strict";

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
 
}

showSlides(slideIndex);

function showSlides(n) {

  var slides = document.getElementsByClassName("slide-show__container");
  var dots = document.getElementsByClassName("slide-show--dot");

// console.log(slides);

  if(slides.length > 0) {


    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";


    

    // var stopSetTimeOut = setTimeout(function(){

    //   // slideIndex++;
    //   showSlides(slideIndex);
    //   slideIndex++;
    // }, 10000);

    // slideIndex++;

    var objArrayImgLink = document.getElementsByClassName("slide-show__img");

    var arrayLinkImg = [];
    for (var i = 0; i < objArrayImgLink.length; i++) {

      var linkImg = objArrayImgLink[i].getAttribute("src");
      arrayLinkImg = arrayLinkImg.concat(linkImg); 

    }  


    var resultImgList = [];
    resultImgList = SortArrayImg(arrayLinkImg);
    // resultImgList = arrayLinkImg;

    var sectionCarousel = document.getElementsByClassName("section-carousel");
    sectionCarousel[0].style.backgroundImage = 'url("' + resultImgList[slideIndex - 1 ] + '")';

  }

}


function autoNext() {
  setInterval(function(){ plusSlides(1); }, 23000);
}
autoNext();




var stopLoop;

// showSlidesAuto();

function showSlidesAuto() {
  var i;
  var slides = document.getElementsByClassName("slide-show__container");
  var dots = document.getElementsByClassName("slide-show--dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  stopLoop = setTimeout(showSlidesAuto, 1000); // Change image every 2 seconds

} 



function stopSetTimeOut() {
  clearTimeout(stopLoop);
}

var objNext = document.getElementsByClassName("slide-show--next");
var objPrev = document.getElementsByClassName("slide-show--prev");
var objDot = document.getElementsByClassName("slide-show--dot");
var numberObjNext = objNext.length;
var numberObjPrev = objPrev.length;
var numberObjDot = objDot.length;

for (var i = 0; i < numberObjNext; i++) {
  // objNext[i].addEventListener('mouseover', stopSetTimeOut);
  // objNext[i].addEventListener('mouseout', showSlidesAuto);
}
for (var i = 0; i < numberObjPrev; i++) {
  // objPrev[i].addEventListener('mouseover', stopSetTimeOut);
  // objPrev[i].addEventListener('mouseout', showSlidesAuto);
}
for (var i = 0; i < numberObjDot; i++) {
  // objDot[i].addEventListener('mouseover', stopSetTimeOut);
  // objDot[i].addEventListener('mouseout', showSlidesAuto);
}


function SortArrayImg(objArray) {

  var objTemp = [];
  objTemp[0] = objArray[objArray.length - 1];

  objArray.pop();

  var objArrayResult = [];
  objArrayResult = objTemp.concat(objArray);

  return objArrayResult;
}



