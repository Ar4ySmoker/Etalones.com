"use strict";
mxmjq(function() {




    /*==================================
    	Modal Video Click 
    ===================================*/

    var modalVideoClick = function(){

    	var objModalYoutube = mxmjq(".modal__youtube");
    	var objModalVimeo = mxmjq(".modal__vimeo");

	  	objModalYoutube.click(function(event){

		  event.preventDefault();

		});

		objModalYoutube.modalVideo({
			channel:'youtube'
		});

		objModalVimeo.click(function(event){

		  event.preventDefault();

		});

		objModalVimeo.modalVideo({
			channel:'vimeo'
		});

    }

    modalVideoClick();







    /*==================================
    	Modal Image Click 
    ===================================*/

    var modalImageClick = function(){

    	var objModalImage = mxmjq(".modal__image");

	  	objModalImage.click(function(event){

		  // event.preventDefault();

		});

		objModalImage.SmartPhoto();



    }

    modalImageClick();    





});	