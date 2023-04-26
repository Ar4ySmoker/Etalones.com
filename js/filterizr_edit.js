"use strict";

mxmjq(function() {

	/*==================================
    	
    ===================================*/

    var navLi = mxmjq(".portfolio-filter-t__nav li");
    navLi.click(function(event){
    	navLi.removeClass("active");
    	mxmjq(this).addClass("active");
    });

	const optionsFilter = {
		controlsSelector: '.fltr-controls',
		gutterPixels: 4,
		delay: 0,
		delayMode: 'progressive',
		layout: 'sameWidth',
		spinner: {
			enabled: true,
			fillColor: '#ff4f59',
			styles: {
			  height: '75px',
			  margin: '0 auto',
			  width: '75px',
			  'z-index': 2,
			},
		}
	}
	if(mxmjq(".filtr-container").length){
		var filterizr = new Filterizr('.filtr-container', optionsFilter);
	}


	





	/*==================================
    	
    ===================================*/
    
    var itemNavLi = mxmjq(".item-portfolio-filter__nav li");
    itemNavLi.click(function(event){
    	itemNavLi.removeClass("active");
    	mxmjq(this).addClass("active");
    });

	const optionsFilter2 = {
		controlsSelector: '.fltr-controls-2',
		gutterPixels: 4,
		delay: 0,
		delayMode: 'progressive',
		layout: 'sameWidth',
		spinner: {
			enabled: true,
			fillColor: '#ff4f59',
			styles: {
			  height: '75px',
			  margin: '0 auto',
			  width: '75px',
			  'z-index': 2,
			},
		}
	}
	if(mxmjq(".filtr-container-2").length){
		var filterizrItem = new Filterizr('.filtr-container-2', optionsFilter2);
	}	


	/*==================================
    	
    ===================================*/

    var navLi3 = mxmjq(".portfolio-filter-v1-title__nav li");
    navLi3.click(function(event){
    	navLi3.removeClass("active");
    	mxmjq(this).addClass("active");
    });

	const optionsFilter3 = {
		controlsSelector: '.fltr-controls-3',
		gutterPixels: 0,
		delay: 0,
		delayMode: 'progressive',
		layout: 'sameWidth',
		spinner: {
			enabled: true,
			fillColor: '#ff4f59',
			styles: {
			  height: '75px',
			  margin: '0 auto',
			  width: '75px',
			  'z-index': 2,
			},
		}
	}
	if(mxmjq(".filtr-container-3").length){
		var filterizr3 = new Filterizr('.filtr-container-3', optionsFilter3);
	}




	/*==================================
    	
    ===================================*/

    var navLi4 = mxmjq(".portfolio-filter-v2-title__nav li");
    navLi4.click(function(event){
    	navLi4.removeClass("active");
    	mxmjq(this).addClass("active");
    });

	const optionsFilter4 = {
		controlsSelector: '.fltr-controls-4',
		gutterPixels: 0,
		delay: 0,
		delayMode: 'progressive',
		layout: 'sameWidth',
		spinner: {
			enabled: true,
			fillColor: '#ff4f59',
			styles: {
			  height: '75px',
			  margin: '0 auto',
			  width: '75px',
			  'z-index': 2,
			},
		}
	}
	if(mxmjq(".filtr-container-4").length){
		var filterizr4 = new Filterizr('.filtr-container-4', optionsFilter4);
	}











	



	

});