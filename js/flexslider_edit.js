"use strict";
mxmjq(function() {

  // store the slider in a local variable
  var flexslider = { vars:{} };

  // tiny helper function to add breakpoints
    var getGridSize = function(){

        var sizeWindow = window.innerWidth;

        if(sizeWindow >= 1200) {
            return 5;
        }
        else if((sizeWindow >= 992) && (sizeWindow < 1200)) {
            return 4;
        }
        else if((sizeWindow >= 768) && (sizeWindow < 992)) {
            return 3;   
        } 
        else if((sizeWindow >= 576) && (sizeWindow < 768)) {
            return 2;   
        }
        else if(sizeWindow < 576) {
            return 2;   
        } 
    }

    var getMarginSize = function(){

        var sizeWindow = window.innerWidth;

        if(sizeWindow >= 1200) {
            return 32;
        }
        else if((sizeWindow >= 992) && (sizeWindow < 1200)) {
            return 40;
        }
        else if((sizeWindow >= 768) && (sizeWindow < 992)) {
            return 40;   
        } 
        else if((sizeWindow >= 576) && (sizeWindow < 768)) {
            return 104;   
        }
        else if(sizeWindow < 576) {
            return 4;   
        } 
    }    

 

  mxmjq(window).on('load', function() {
    mxmjq('.brand').flexslider({
      animation: "slide",
      namespace: "brand__",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      controlNav: false,
      animationLoop: true,
      slideshowSpeed: 11000,
      animationSpeed: 3000,
      itemWidth: 202,
      itemMargin: getMarginSize(),
      minItems: getGridSize(),
      maxItems: getGridSize(),
      start: function(slider){
        flexslider = slider;
      }
    });
  });

  // check grid size on resize event
  mxmjq(window).resize(function() {
    var gridSize = getGridSize();
    var marginSize = getMarginSize();

    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
    flexslider.vars.itemMargin = marginSize;

  });


  mxmjq(window).on('load', function() {
    mxmjq('.sign__slider').flexslider({
      animation: "slide",
      namespace: "sign__slider--",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      controlNav: false,
      animationLoop: true,
      slideshowSpeed: 13000,
      animationSpeed: 3000,
      itemWidth: 180,
      itemMargin: 4,

    });
  });

  mxmjq(window).on('load', function() {
    mxmjq('.who__slider').flexslider({
      animation: "slide",
      namespace: "who__",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      controlNav: false,
      animationLoop: true,
      slideshowSpeed: 15000,
      animationSpeed: 1600

    });
  });  

  mxmjq(window).on('load', function() {
    mxmjq('.testimonial-one__slider').flexslider({
      animation: "slide",
      namespace: "testimonial-one__",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      controlNav: false,
      animationLoop: true,
      slideshowSpeed: 17000,
      animationSpeed: 1600

    });
  });

  mxmjq(window).on('load', function() {
    mxmjq('.testimonial-one-dark__slider').flexslider({
      animation: "slide",
      namespace: "testimonial-one-dark__",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      controlNav: false,
      animationLoop: true,
      slideshowSpeed: 19000,
      animationSpeed: 1600

    });
  });

  mxmjq(window).on('load', function() {
    mxmjq('.testimonial-two__slider').flexslider({
      animation: "slide",
      namespace: "testimonial-two__",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      controlNav: false,
      animationLoop: true,
      slideshowSpeed: 21000,
      animationSpeed: 1600

    });
  });  


  mxmjq(window).on('load', function() {
    mxmjq('.hero-slider').flexslider({
      animation: "slide",
      namespace: "hero-slider__",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      animationLoop: true,
      slideshowSpeed: 12000,
      animationSpeed: 1600

    });
  });   


  mxmjq(window).on('load', function() {
    mxmjq('.slide-shop').flexslider({
      animation: "slide",
      namespace: "slide-shop__",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      animationLoop: true,
      slideshowSpeed: 14000,
      animationSpeed: 1600

    });
  });   

  mxmjq(window).on('load', function() {
    mxmjq('.slide-2-shop').flexslider({
      animation: "slide",
      namespace: "slide-2-shop__",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      animationLoop: true,
      slideshowSpeed: 16000,
      animationSpeed: 1600

    });
  });  


  mxmjq(window).on('load', function() {
    mxmjq('.item-blog__gallery').flexslider({
      animation: "slide",
      namespace: "item-blog__gallery--",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      animationLoop: true,
      slideshowSpeed: 18000,
      animationSpeed: 1600

    });
  }); 


  mxmjq(window).on('load', function() {
    mxmjq('.item-2-blog__gallery').flexslider({
      animation: "slide",
      namespace: "item-2-blog__gallery--",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      animationLoop: true,
      slideshowSpeed: 20000,
      animationSpeed: 1600

    });
  });   

  mxmjq(window).on('load', function() {
    mxmjq('.item-detail__gallery').flexslider({
      animation: "slide",
      namespace: "item-detail__gallery--",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      animationLoop: true,
      slideshowSpeed: 11000,
      animationSpeed: 1600

    });
  });



  mxmjq(window).on('load', function() {
    mxmjq('.portfolio-detail__gallery').flexslider({
      animation: "slide",
      namespace: "portfolio-detail__gallery--",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      animationLoop: true,
      slideshowSpeed: 13000,
      animationSpeed: 1600

    });



  });



  mxmjq(window).on('load', function() {
    mxmjq('.portfolio-detail__carousel').flexslider({
      animation: "slide",
      namespace: "portfolio-detail__carousel--",
      prevText: "<i class='material-icons'>keyboard_arrow_left</i>", 
      nextText: "<i class='material-icons'>keyboard_arrow_right</i>", 
      controlNav: false,
      animationLoop: true,
      slideshow: false,
      itemWidth: 88,
      itemMargin: 0,
      asNavFor: '.portfolio-detail__thumbnail-slider',
      // minItems: 8,
      // maxItems: 8,
    });
    mxmjq('.portfolio-detail__thumbnail-slider').flexslider({
      animation: "slide",
      namespace: "portfolio-detail__thumbnail-slider--",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      animationLoop: true,
      slideshow: true,
      slideshowSpeed: 15000,
      animationSpeed: 1600,
      controlNav: false,
      sync: ".portfolio-detail__carousel"

    });



  });   




  mxmjq(window).on('load', function() {
    mxmjq('.item-product-detail__carousel').flexslider({
      animation: "slide",
      namespace: "item-product-detail__carousel--",
      prevText: "<i class='material-icons'>keyboard_arrow_left</i>", 
      nextText: "<i class='material-icons'>keyboard_arrow_right</i>", 
      controlNav: false,
      animationLoop: true,
      slideshow: false,
      itemWidth: 60,
      itemMargin: 0,
      asNavFor: '.item-product-detail__picture',
      // minItems: 8,
      // maxItems: 8,
    });
    mxmjq('.item-product-detail__picture').flexslider({
      // animation: "slide",
      namespace: "item-product-detail__picture--",
      prevText: "<i></i><i></i>", 
      nextText: "<i></i><i></i>", 
      animationLoop: true,
      slideshow: true,
      slideshowSpeed: 17000,
      animationSpeed: 600,
      controlNav: false,
      sync: ".item-product-detail__carousel"

    });



  });



  mxmjq(window).on('load', function() {
    mxmjq('.widget__gallery--slider').flexslider({
      animation: "slide",
      namespace: "widget__gallery--slider---",
      prevText: "<i class='material-icons'>keyboard_arrow_left</i>", 
      nextText: "<i class='material-icons'>keyboard_arrow_right</i>",
      animationLoop: true,
      slideshowSpeed: 19000,
      animationSpeed: 1600,

    });
  });





});




