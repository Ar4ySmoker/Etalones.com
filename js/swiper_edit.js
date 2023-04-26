"use strict";


mxmjq(function() {


	/*==================================
    	Slider Swiper Version 01
    ===================================*/
	var optionsV1 = {

			pagination: {
				el: '.swiper-pagination__v1',
				type: 'bullets',
				bulletClass: 'swiper-pagination__v1--bullet',
				bulletActiveClass: 'swiper-pagination__v1--active',
				modifierClass: 'swiper-pagination__v1--',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">0' + (index + 1) + '</span>';
				}
			},
			// speed: 2000,
			autoplay: {
				delay: 10000000000,
			},		
			// loop: true,
			grabCursor: true,
			effect: "slide",

    }

	if(mxmjq(".swiper-container__v1").length){
		var swiperV1 = new Swiper('.swiper-container__v1', optionsV1);
	}   



	/*==================================
    	Slider Swiper Version 02
    ===================================*/
	var optionsV2 = {

			loop: true,
			grabCursor: true,
			slidesPerView: 1,
	      	spaceBetween: 16,
	      	
			pagination: {
				el: '.swiper-pagination__v2',
				type: 'custom',
				modifierClass: 'swiper-pagination__v2--',
		        renderCustom: function (swiper, current, total) {
		            var ratio = (100 / total) * current;
		            ratio = ratio.toFixed(6);
		            return  '<div class="swiper-pagination__v2--fill" style="width: ' + ratio + "%" + '"></div>'
		        }		  	

			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				576: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
				1687: {
					slidesPerView: 5,
					spaceBetween: 16,
				},
			}      	

    }

	if(mxmjq(".swiper-container__v2").length){
		var swiperV2 = new Swiper('.swiper-container__v2', optionsV2);
	} 








	/*==================================
    	Slider Swiper Version 03
    ===================================*/
	var optionsV3 = {

			loop: true,
			grabCursor: true,
			slidesPerView: 1,
	      	spaceBetween: 16,
	      	// speed: 5000,
			autoplay: {
				delay: 12000,
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				576: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
				1200: {
					slidesPerView: 5,
					spaceBetween: 16,
				},
				1687: {
					slidesPerView: 5,
					spaceBetween: 16,
				},
			},      	

    }

	if(mxmjq(".swiper-container__v3").length){
		var swiperV3 = new Swiper('.swiper-container__v3', optionsV3);
	} 	 



	/*==================================
    	Slider Swiper Version 04
    ===================================*/
	var optionsV4 = {

			loop: true,
			grabCursor: true,
			slidesPerView: 1,
	      	spaceBetween: 16,

			navigation: {
				nextEl: '.swiper-button-next__v4',
				prevEl: '.swiper-button-prev__v4',
			},	      	

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				576: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 28,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 28,
				},
				1200: {
					slidesPerView: 2,
					spaceBetween: 28,
				},
				1687: {
					slidesPerView: 2,
					spaceBetween: 28,
				},
			}      	

    }

	if(mxmjq(".swiper-container__v4").length){
		var swiperV4 = new Swiper('.swiper-container__v4', optionsV4);
	} 



	/*==================================
    	Slider Swiper Version 05
    ===================================*/
	var optionsV5 = {

			pagination: {
				el: '.swiper-pagination__v5',
				type: 'bullets',
				bulletClass: 'swiper-pagination__v5--bullet',
				bulletActiveClass: 'swiper-pagination__v5--active',
				modifierClass: 'swiper-pagination__v5--',
				clickable: true,
				
			},
			navigation: {
				nextEl: '.swiper-button-next__v5',
				prevEl: '.swiper-button-prev__v5',
			},			
			// speed: 2000,
			autoplay: {
				delay: 10000000000,
			},		
			loop: true,
			grabCursor: true,
			effect: "slide",

    }

	if(mxmjq(".swiper-container__v5").length){
		var swiperV5 = new Swiper('.swiper-container__v5', optionsV5);
	} 




	/*==================================
    	Slider Swiper Version 06
    ===================================*/
	var optionsV6 = {

			loop: true,
			grabCursor: true,
			slidesPerView: 1,
	      	speed: 2000,
			autoplay: {
				delay: 13000,
			},
     	

    }

	if(mxmjq(".swiper-container__v6").length){
		var swiperV6 = new Swiper('.swiper-container__v6', optionsV6);
	} 

	/*==================================
    	Slider Swiper Version 07
    ===================================*/
	var optionsV7 = {

			loop: true,
			grabCursor: true,
			slidesPerView: 1,
	      	speed: 2000,
			autoplay: {
				delay: 13000,
			},
     	

    }

	if(mxmjq(".swiper-container__v7").length){
		var swiperV7 = new Swiper('.swiper-container__v7', optionsV7);
	} 	




	/*==================================
    	Slider Swiper Version 08
    ===================================*/
	var optionsV8 = {

			pagination: {
				el: '.swiper-pagination__v8',
				type: 'bullets',
				bulletClass: 'swiper-pagination__v8--bullet',
				bulletActiveClass: 'swiper-pagination__v8--active',
				modifierClass: 'swiper-pagination__v8--',
				clickable: true,
				
			},
			navigation: {
				nextEl: '.swiper-button-next__v8',
				prevEl: '.swiper-button-prev__v8',
			},			
			// speed: 2000,
			autoplay: {
				delay: 10000000000,
			},		
			loop: true,
			grabCursor: true,
			effect: "slide",

    }

	if(mxmjq(".swiper-container__v8").length){
		var swiperV8 = new Swiper('.swiper-container__v8', optionsV8);
	} 



	/*==================================
    	Slider Swiper Version 09
    ===================================*/
	var optionsV9 = {

			pagination: {
				el: '.swiper-pagination__v9',
				type: 'bullets',
				bulletClass: 'swiper-pagination__v9--bullet',
				bulletActiveClass: 'swiper-pagination__v9--active',
				modifierClass: 'swiper-pagination__v9--',
				clickable: true,
				
			},
			navigation: {
				nextEl: '.swiper-button-next__v9',
				prevEl: '.swiper-button-prev__v9',
			},			
			// speed: 2000,
			autoplay: {
				delay: 10000000000,
			},		
			loop: true,
			grabCursor: true,
			effect: "slide",

    }

	if(mxmjq(".swiper-container__v9").length){
		var swiperV9 = new Swiper('.swiper-container__v9', optionsV9);
	} 	




	/*==================================
    	Slider Swiper Version 10
    ===================================*/
	var optionsV10 = {

			pagination: {
				el: '.swiper-pagination__v10',
				type: 'bullets',
				bulletClass: 'swiper-pagination__v10--bullet',
				bulletActiveClass: 'swiper-pagination__v10--active',
				modifierClass: 'swiper-pagination__v10--',
				clickable: true,
				
			},
			navigation: {
				nextEl: '.swiper-button-next__v10',
				prevEl: '.swiper-button-prev__v10',
			},			
			// speed: 2000,
			autoplay: {
				delay: 10000000000,
			},		
			loop: true,
			grabCursor: true,
			effect: "slide",
	        on: {
	            init: function(){
	                var index = this.activeIndex;

	                var target = mxmjq('.slider-swiper-v10__item').eq(index).data('target');

	                console.log(target);

	                mxmjq('.slider-swiper-v10__list-pic--item').removeClass('active');
	                mxmjq('.slider-swiper-v10__list-pic--item.'+ target).addClass('active');

	                mxmjq('.slider-swiper-v10__txt-box--side').removeClass('active');
	                mxmjq('.slider-swiper-v10__txt-box--side.'+ target).addClass('active');
	            }
	        }			

    }

	if(mxmjq(".swiper-container__v10").length){
		var swiperV10 = new Swiper('.swiper-container__v10', optionsV10);

	    swiperV10.on('slideChange', function () {
	        var index = this.activeIndex;

            var target = mxmjq('.slider-swiper-v10__item').eq(index).data('target');

            console.log(target);

            mxmjq('.slider-swiper-v10__list-pic--item').removeClass('active');
            mxmjq('.slider-swiper-v10__list-pic--item.'+ target).addClass('active');

			mxmjq('.slider-swiper-v10__txt-box--side').removeClass('active');
            mxmjq('.slider-swiper-v10__txt-box--side.'+ target).addClass('active');            


	    });		
	} 






	/*==================================
    	Slider Swiper Version 11
    ===================================*/
	var optionsV11 = {


			pagination: {
				el: '.swiper-pagination__v11',
				type: 'custom',
				clickable: true,
				modifierClass: 'swiper-pagination__v11--',
		        renderCustom: function (swiper, current, total) {
		            return  '<div class="swiper-pagination__v11--side">' + current + '/' + total + '</div>'
		        }		  	

			},			
			navigation: {
				nextEl: '.swiper-button-next__v11',
				prevEl: '.swiper-button-prev__v11',
			},				
			// speed: 2000,
			autoplay: {
				delay: 10000000000,
			},		
			loop: true,
			grabCursor: true,
			effect: "slide",

    }

	if(mxmjq(".swiper-container__v11").length){
		var swiperV11 = new Swiper('.swiper-container__v11', optionsV11);
	} 	



	/*==================================
    	Slider Swiper Version 012
    ===================================*/
	var optionsV12 = {

			pagination: {
				el: '.swiper-pagination__v12',
				type: 'bullets',
				bulletClass: 'swiper-pagination__v12--bullet',
				bulletActiveClass: 'swiper-pagination__v12--active',
				modifierClass: 'swiper-pagination__v12--',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">0' + (index + 1) + '</span>';
				}
			},
			// speed: 2000,
			autoplay: {
				delay: 10000000000,
			},		
			loop: true,
			grabCursor: true,
			effect: "slide",

    }

	if(mxmjq(".swiper-container__v12").length){
		var swiperV1 = new Swiper('.swiper-container__v12', optionsV12);
	} 	



});	