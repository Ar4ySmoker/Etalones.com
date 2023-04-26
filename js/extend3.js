"use strict";

var mxmjq = jQuery;

$.noConflict();

mxmjq(function() {


	/*==================================
    	Scroll Navigation Go Link
    ===================================*/
	var scrollNavLink = function() {

		  // Add smooth scrolling to all links
		  mxmjq(".goLinkClass").on('click', function(event) {

		    // Make sure this.hash has a value before overriding default behavior
		    if (this.hash !== "") {
		      // Prevent default anchor click behavior
		      event.preventDefault();

		      // Store hash
		      var hash = this.hash;



		      // Using jQuery's animate() method to add smooth page scroll
		      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		      mxmjq('html, body').animate({
		        scrollTop: mxmjq(hash).offset().top
		      }, 800, function(){
		   
		        // Add hash (#) to URL when done scrolling (default click behavior)
		        // window.location.hash = hash;
		      });
		    } // End if
		  });
	}

	scrollNavLink();
	




	/*==================================
    	Navigation Go Link Navigation Page
    ===================================*/
	var goNavLinkPageSideNav = function() {

		  // Add smooth scrolling to all links
		  mxmjq(".side-navi__list li a").on('click', function(event) {

		    // Make sure this.hash has a value before overriding default behavior
		    if (this.hash !== "") {
		      // Prevent default anchor click behavior
		      event.preventDefault();

		      // Store hash
		      var hash = this.hash;

		      var heightNav01 = mxmjq(".nav").outerHeight(true);	

		      // Using jQuery's animate() method to add smooth page scroll
		      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		      mxmjq('html, body').animate({
		        scrollTop: (mxmjq(hash).offset().top - heightNav01)
		      }, 800, function(){
		   
		        // Add hash (#) to URL when done scrolling (default click behavior)
		        // window.location.hash = hash;
		      });
		    } // End if
		  });
	}

	goNavLinkPageSideNav();	

	/*==================================
    	Mouse Go Link
    ===================================*/
	var goMouseGoLink = function() {

		  // Add smooth scrolling to all links
		  mxmjq(".parallax-item__mouse--icon").on('click', function(event) {

		    // Make sure this.hash has a value before overriding default behavior
		    if (this.hash !== "") {
		      // Prevent default anchor click behavior
		      event.preventDefault();

		      // Store hash
		      var hash = this.hash;

		      var heightNav01 = mxmjq(".nav").outerHeight(true);	

		      // Using jQuery's animate() method to add smooth page scroll
		      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		      mxmjq('html, body').animate({
		        scrollTop: (mxmjq(hash).offset().top - heightNav01 + 1)
		      }, 400, function(){
		   
		        // Add hash (#) to URL when done scrolling (default click behavior)
		        // window.location.hash = hash;
		      });
		    } // End if
		  });
	}

	goMouseGoLink();		






	/*==================================
    	Counter Up Number
    ===================================*/
	var playCounterUp = function () {

	  	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

		var counters = mxmjq(".numeral__counter");

		/* Start counting, do this on DOM ready or with Waypoints. */
		counters.each(function (index, counter) {
		var waypoint_1 = new Waypoint( {
				element: mxmjq(this),
				handler: function() { 
					counterUp(counter, {
						duration: 1000,
						delay: 16
					}); 

					// console.log('Qua diem dem so');	

					this.destroy();
				},
				offset: '90%',
			} );
		});




	}

	playCounterUp();

	/*==================================
    	Counter Up Percent Skill
    ===================================*/
	var playCounterUpPercentSkill = function () {

	  	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

		var counters = mxmjq(".skill__number");

		/* Start counting, do this on DOM ready or with Waypoints. */
		counters.each(function (index, counter) {
		var waypoint_2 = new Waypoint( {
				element: mxmjq(".animatedPercent"),
				handler: function() { 
					counterUp(counter, {
						duration: 2000,
						delay: 9
					}); 

					// console.log('Qua diem dem so');	

					this.destroy();
				},
				offset: '90%',
			} );
		});




	}

	playCounterUpPercentSkill();




	




	/*==================================
    	Counter Up Percent Skill Dark
    ===================================*/
	var playCounterUpPercentSkillDark = function () {

	  	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

		var counters = mxmjq(".skill-dark__number");

		/* Start counting, do this on DOM ready or with Waypoints. */
		counters.each(function (index, counter) {
		var waypoint_2 = new Waypoint( {
				element: mxmjq(".skill-dark__number"),
				handler: function() { 
					counterUp(counter, {
						duration: 2000,
						delay: 9
					}); 

					// console.log('Qua diem dem so');	

					this.destroy();
				},
				offset: '90%',
			} );
		});




	}

	playCounterUpPercentSkillDark();	




	/*==================================
    	Counter Up Percent Slim Skill
    ===================================*/
	var playCounterUpPercentSlimSkill = function () {

	  	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

		var counters = mxmjq(".slim-skill__number");

		/* Start counting, do this on DOM ready or with Waypoints. */
		counters.each(function (index, counter) {
		var waypoint_2 = new Waypoint( {
				element: mxmjq(".animatedPercent"),
				handler: function() { 
					counterUp(counter, {
						duration: 2000,
						delay: 9
					}); 

					// console.log('Qua diem dem so');	

					this.destroy();
				},
				offset: '90%',
			} );
		});




	}

	playCounterUpPercentSlimSkill();	

	

	/*==================================
    	Counter Up Percent Skill Slider
    ===================================*/
	var playCounterUpPercentSkillSlider = function () {

	  	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

		var counters = mxmjq(".progress__icon");

		/* Start counting, do this on DOM ready or with Waypoints. */
		counters.each(function (index, counter) {
		var waypoint_2 = new Waypoint( {
				element: mxmjq(".animatedSkillPercent"),
				handler: function() { 
					counterUp(counter, {
						duration: 2000,
						delay: 9
					}); 


					this.destroy();
				},
				offset: '90%',
			} );
		});




	}

	playCounterUpPercentSkillSlider();		





	/*==================================
    	Counter Up Percent Number New
    ===================================*/
	var playCounterUpPercentNumberNew = function () {

	  	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

		var counters = mxmjq(".number__percent");

		/* Start counting, do this on DOM ready or with Waypoints. */
		counters.each(function (index, counter) {
		var waypoint_2 = new Waypoint( {
				element: mxmjq(".number__percent"),
				handler: function() { 
					counterUp(counter, {
						duration: 2000,
						delay: 9
					}); 


					this.destroy();
				},
				offset: '90%',
			} );
		});




	}

	playCounterUpPercentNumberNew();		


	/*==================================
    	Counter Up Number V1
    ===================================*/
	var playCounterUpNumberV1 = function () {

	  	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

		var counters = mxmjq(".number-v1__num");

		/* Start counting, do this on DOM ready or with Waypoints. */
		counters.each(function (index, counter) {
		var waypoint_2 = new Waypoint( {
				element: mxmjq(".number-v1__num"),
				handler: function() { 
					counterUp(counter, {
						duration: 2000,
						delay: 99
					}); 


					this.destroy();
				},
				offset: '90%',
			} );
		});




	}

	playCounterUpNumberV1();	



	/*==================================
    	Scroll Down Reveal
    ===================================*/
	var playSlideInReveal = function() {

		mxmjq('.saleOff1').css('opacity', 0);
		mxmjq('.saleOff2').css('opacity', 0);
		mxmjq('.saleOff3').css('opacity', 0);

		mxmjq('.saleOff1').waypoint(function() {
		      mxmjq('.saleOff1').addClass('fadeIn');
		      mxmjq('.saleOff2').addClass('fadeIn');
		      mxmjq('.saleOff3').addClass('fadeIn');

		      this.destroy();

		  }, { offset: '90%' });



		mxmjq('.revealSpecial1').css('opacity', 0);	 
		mxmjq('.revealSpecial2').css('opacity', 0);

		mxmjq('.revealSpecial1').waypoint(function() {
		      mxmjq('.revealSpecial1').addClass('fadeInUp');
		      mxmjq('.revealSpecial2').addClass('fadeInUp');

		      this.destroy();

		  }, { offset: '90%' }); 	



		mxmjq('.category1').css('opacity', 0);
		mxmjq('.category2').css('opacity', 0);
		mxmjq('.category3').css('opacity', 0);
		mxmjq('.category4').css('opacity', 0);
		

		mxmjq('.category1').waypoint(function() {
		      mxmjq('.category1').addClass('fadeInLeft');
		      mxmjq('.category2').addClass('fadeInUp');
		      mxmjq('.category3').addClass('fadeInUp');
		      mxmjq('.category4').addClass('fadeInRight');

		      this.destroy();

		  }, { offset: '90%' });	




		mxmjq('.revealTrend1').css('opacity', 0);	 
		mxmjq('.revealTrend2').css('opacity', 0);
		mxmjq('.revealTrend3').css('opacity', 0);

		mxmjq('.revealTrend1').waypoint(function() {
		      mxmjq('.revealTrend1').addClass('fadeInUp');
		      mxmjq('.revealTrend2').addClass('fadeInUp');
		      mxmjq('.revealTrend3').addClass('fadeInUp');

		      this.destroy();

		  }, { offset: '90%' });	



		mxmjq('.animatedPercent').waypoint(function() {
		      mxmjq('.animatedPercent').addClass('processCircle');

		      this.destroy();

		  }, { offset: '90%' });



		



		mxmjq('.animatedPercentDark').waypoint(function() {
		      mxmjq('.animatedPercentDark').addClass('processCircle');

		      this.destroy();

		  }, { offset: '90%' });  		



		mxmjq('.animatedSkillPercent').waypoint(function() {
		      mxmjq('.animatedSkillPercent').addClass('processSkillCircle');

		      this.destroy();

		  }, { offset: '90%' });	    	

	
	}

	playSlideInReveal();





	/*==================================
    	Show Cart When Click
    ===================================*/
    var iconCart = mxmjq(".nav__cart-icon");
	var formCart = mxmjq(".nav__ajax-cart");

	var activeCart = function(){

	  iconCart.attr('data-check-open','closeMxm');

	  iconCart.click(function(event){

	  		// alert("Da kich gio hang");	
	  		// console.log('Da kich gio hang');	

		  event.preventDefault();

	      var statusMxm = mxmjq(this).attr("data-check-open");

	      if(statusMxm == "closeMxm") {

	        formCart.stop(true,true).fadeIn();


	        mxmjq(this).attr('data-check-open','openMxm');

	      } else if(statusMxm == "openMxm") {

	        formCart.stop(true,true).fadeOut();


	        mxmjq(this).attr('data-check-open','closeMxm');
	      }

    	});
	}

	activeCart();


	/*==================================
    	Close Cart Click Other
    ===================================*/
	var cartOther = mxmjq(".nav__cart-icon , .nav__ajax-cart");

    var closeOtherCart = function(){


      mxmjq(document).click(function(event){
        
          if(!cartOther.is(event.target) && cartOther.has(event.target).length === 0){
            formCart.stop(true,true).fadeOut();

            iconCart.attr('data-check-open','closeMxm');
          }
        });
    }	
    closeOtherCart();	
	

	/*==================================
    	Fixed Top Navigation On Scroll Down With Waypoint
    ===================================*/
    var scrollMenuDown = function(){


		mxmjq('.nav').waypoint(function(direction) {
				if(direction == "down") {
					mxmjq(".nav").addClass("nav--fixed");
					mxmjq(".nav__link").addClass("mini");
					mxmjq(".nav__btn-item").addClass("mini");
					mxmjq(".nav__logo-link").addClass("mini");
					mxmjq(".nav--false").addClass("nav--true");
					
				} 
				else if(direction == "up") {
					mxmjq(".nav").removeClass("nav--fixed");
					mxmjq(".nav__link").removeClass("mini");
					mxmjq(".nav__btn-item").removeClass("mini");
					mxmjq(".nav__logo-link").removeClass("mini");
					mxmjq(".nav--false").removeClass("nav--true");
				}

			}, { offset: 0 });
    
		mxmjq(window).resize(function(){
			// Waypoint.refreshAll();
		});	


    }	
    // scrollMenuDown();

  



	/*==================================
    	Fixed Top Navigation On Scroll Down With Jquery
    ===================================*/
    var scrollMenuDownJquery = function(){


		// var rangeNav = mxmjq(".nav").offset().top;

		var activeHeaderTop = function(){

			var rangeNav = mxmjq(".info-box").outerHeight(true);

			if(rangeNav == null) {
				rangeNav = 0;
			}
			
			

			var positionScroll = mxmjq('html, body').scrollTop();

			// console.log("rangeNav: " + rangeNav);
			// console.log("positionScroll: " + positionScroll);

			if(positionScroll > rangeNav) {
				mxmjq(".nav").addClass("nav--fixed");
				mxmjq(".nav__link").addClass("mini");
				mxmjq(".nav__btn-item").addClass("mini");
				mxmjq(".nav__logo-link").addClass("mini");
				mxmjq(".nav--false").addClass("nav--true");

			} 
			else if (positionScroll <= rangeNav) {
				mxmjq(".nav").removeClass("nav--fixed");
				mxmjq(".nav__link").removeClass("mini");
				mxmjq(".nav__btn-item").removeClass("mini");
				mxmjq(".nav__logo-link").removeClass("mini");
				mxmjq(".nav--false").removeClass("nav--true");
			}			
		}


		activeHeaderTop();

		mxmjq(window).scroll(function(){
			activeHeaderTop();
		});	


    }	
    scrollMenuDownJquery();	




	/*==================================
    	Fixed Top Side List Navi
    ===================================*/

    var ww = mxmjq(window).width();


    var fixTopSideListNavi = function(){

	    if(ww >= 768) {
	    	mxmjq(".side-navi__list").addClass("side-navi__temporary");
	    }
	    else if(ww < 768) {
	    	mxmjq(".side-navi__list").removeClass("side-navi__temporary");
	    }
    		
    	var positionSideNavi = mxmjq(".side-navi__temporary").offset().top;


		var activeMiniSideNaviTop = function(){

			var heightNav =  mxmjq(".nav").outerHeight(true);

			var positionScroll = mxmjq('html, body').scrollTop();

			if( positionScroll > (positionSideNavi - heightNav) ) {

				mxmjq('.side-navi__temporary').stop().animate({ marginTop: positionScroll - positionSideNavi + 56 + 16 });
				

			} 
			else if (positionScroll <= (positionSideNavi - heightNav)) {
				mxmjq('.side-navi__temporary').stop().animate({ marginTop: 0 });
			}			
		}


		activeMiniSideNaviTop();

		mxmjq(window).scroll(function(){
			activeMiniSideNaviTop();
		});	



	    mxmjq(window).resize(function () {
		    if(ww >= 768) {
		    	// mxmjq(".side-navi__list").addClass("side-navi__temporary");
		    }
		    else if(ww < 768) {
		    	// mxmjq(".side-navi__list").removeClass("side-navi__temporary");
		    }
	    });		


    }	


    // fixTopSideListNavi();







    	    


	/*==================================
    	Open Menu Mobile Popup
    ===================================*/
    var iconMenuMobile = mxmjq(".nav__mobile-icon");
	var closeIconMenuMobile = mxmjq(".menu-mb__close-link");
	var menuPopupMobile = mxmjq(".menu-mobile-popup");
	var html = mxmjq("html");

    var activeMenuPopupMobile = function(){

	  iconMenuMobile.click(function(event){

		  event.preventDefault();

	      var statusMxm = mxmjq(this).attr("data-check-open");

	      if(statusMxm == "closeMxm") {

	        openMenuPopup();

	      } else if(statusMxm == "openMxm") {

	        closeMenuPopup();
	      }

    	});

	  closeIconMenuMobile.click(function(event){

		  event.preventDefault();

	      var statusMxm = mxmjq(this).attr("data-check-open");

	      if(statusMxm == "closeMxm") {

	        openMenuPopup();

	      } else if(statusMxm == "openMxm") {

	        closeMenuPopup();
	      }

    	});	  

	  menuPopupMobile.click(function(event){
	      	// event.target === this && closeMenuPopup();
	      	if(event.target === this) {
	      		closeMenuPopup();
	      	}
    	});


  		var openMenuPopup = function(){
			menuPopupMobile.addClass("menu-show");
			html.css({"overflow": "hidden"});

			closeIconMenuMobile.attr('data-check-open','openMxm');
			iconMenuMobile.attr('data-check-open','openMxm');
		}
		var closeMenuPopup = function(){
			menuPopupMobile.removeClass("menu-show");
			html.css({"overflow": "visible"});

			closeIconMenuMobile.attr('data-check-open','closeMxm');
			iconMenuMobile.attr('data-check-open','closeMxm');
		}


    }

    activeMenuPopupMobile();




	/*==================================
    	Accordion Menu Mobile Popup
    ===================================*/
    var itemLv1 = mxmjq(".menu-mb__item.menu-mb--drop");
    var itemLv2 = mxmjq(".menu-mb__item--lv2.menu-mb--drop");
    var itemLv2Link = mxmjq(".menu-mb__item--lv2");
    var itemLv3Link = mxmjq(".menu-mb__item--lv3");

    var activeAccordionMenu = function(){

    	itemLv1.children().next().hide();
    	itemLv1.addClass("closeMn");

    	itemLv1.click(function(event){

    		event.preventDefault();

    		if(mxmjq(this).hasClass("closeMn"))	{
    			mxmjq(this).children().next().stop(true,true).slideDown(300);
    			mxmjq(this).removeClass("closeMn");
    			mxmjq(this).addClass("openMn");
    		} 
    		else if (mxmjq(this).hasClass("openMn")) {
    			mxmjq(this).children().next().stop(true,true).slideUp();
    			mxmjq(this).removeClass("openMn");
    			mxmjq(this).addClass("closeMn");
    		}
    		
    	});


    	itemLv2.children().next().hide();
    	itemLv2.addClass("closeMn");

    	itemLv2.click(function(event){

    		event.stopPropagation();
    		event.preventDefault();

    		if(mxmjq(this).hasClass("closeMn"))	{
    			mxmjq(this).children().next().stop(true,true).slideDown(300);
    			mxmjq(this).removeClass("closeMn");
    			mxmjq(this).addClass("openMn");
    		} 
    		else if (mxmjq(this).hasClass("openMn")) {
    			mxmjq(this).children().next().stop(true,true).slideUp();
    			mxmjq(this).removeClass("openMn");
    			mxmjq(this).addClass("closeMn");
    		}
    		
    	});

    	itemLv2Link.click(function(event){

    		event.stopPropagation();
    		
    	});

    	itemLv3Link.click(function(event){

    		event.stopPropagation();
    		
    	});



    }	
    activeAccordionMenu();    



	/*==================================
    	Accordion List Our Service
    ===================================*/
    var serviceLv1 = mxmjq(".list-sv__item.list-sv--drop");

    var activeAccordionListOurService = function(){

    	serviceLv1.children().next().hide();
    	serviceLv1.addClass("closeMn");

    	serviceLv1.first().next().children().next().show();
    	serviceLv1.first().next().addClass("openMn");
    	serviceLv1.first().next().removeClass("closeMn");

    	serviceLv1.click(function(event){

    		event.preventDefault();

    		if(mxmjq(this).hasClass("closeMn"))	{
    			mxmjq(this).children().next().stop(true,true).slideDown(300);
    			mxmjq(this).removeClass("closeMn");
    			mxmjq(this).addClass("openMn");
    		} 
    		else if (mxmjq(this).hasClass("openMn")) {
    			mxmjq(this).children().next().stop(true,true).slideUp();
    			mxmjq(this).removeClass("openMn");
    			mxmjq(this).addClass("closeMn");
    		}
    		
    	});


    }	
    activeAccordionListOurService(); 








	/*==================================
    	Accordion List FAQs
    ===================================*/
    var faqLv1 = mxmjq(".list-faq__item.list-faq--drop");

    var activeAccordionListFaq = function(){

    	faqLv1.children().next().hide();
    	faqLv1.addClass("closeMn");

    	faqLv1.first().next().children().next().show();
    	faqLv1.first().next().addClass("openMn");
    	faqLv1.first().next().removeClass("closeMn");

    	faqLv1.click(function(event){

    		event.preventDefault();

    		if(mxmjq(this).hasClass("closeMn"))	{
    			mxmjq(this).children().next().stop(true,true).slideDown(300);
    			mxmjq(this).removeClass("closeMn");
    			mxmjq(this).addClass("openMn");
    		} 
    		else if (mxmjq(this).hasClass("openMn")) {
    			mxmjq(this).children().next().stop(true,true).slideUp();
    			mxmjq(this).removeClass("openMn");
    			mxmjq(this).addClass("closeMn");
    		}
    		
    	});


    }	
    activeAccordionListFaq();     






	/*==================================
    	Accordion Product Category
    ===================================*/
    var cateLv1 = mxmjq(".widget__product-category--item.widget__product-category--drop");
    var cateLv2 = mxmjq(".widget__product-category--item---lv2.widget__product-category--drop");
    var cateLv3 = mxmjq(".widget__product-category--item---lv3.widget__product-category--drop");
    var cateLv2Link = mxmjq(".widget__product-category--item---lv2");
    var cateLv3Link = mxmjq(".widget__product-category--item---lv3");
    var cateLv4Link = mxmjq(".widget__product-category--item---lv4");

    var activeAccordionProductCate = function(){

    	cateLv1.children().next().hide();
    	cateLv1.addClass("closeMn");

    	cateLv1.click(function(event){

    		event.preventDefault();

    		if(mxmjq(this).hasClass("closeMn"))	{
    			mxmjq(this).children().next().stop(true,true).slideDown(300);
    			mxmjq(this).removeClass("closeMn");
    			mxmjq(this).addClass("openMn");
    		} 
    		else if (mxmjq(this).hasClass("openMn")) {
    			mxmjq(this).children().next().stop(true,true).slideUp();
    			mxmjq(this).removeClass("openMn");
    			mxmjq(this).addClass("closeMn");
    		}
    		
    	});


    	cateLv2.children().next().hide();
    	cateLv2.addClass("closeMn");

    	cateLv2.click(function(event){

    		event.stopPropagation();
    		event.preventDefault();

    		if(mxmjq(this).hasClass("closeMn"))	{
    			mxmjq(this).children().next().stop(true,true).slideDown(300);
    			mxmjq(this).removeClass("closeMn");
    			mxmjq(this).addClass("openMn");
    		} 
    		else if (mxmjq(this).hasClass("openMn")) {
    			mxmjq(this).children().next().stop(true,true).slideUp();
    			mxmjq(this).removeClass("openMn");
    			mxmjq(this).addClass("closeMn");
    		}
    		
    	});


    	cateLv3.children().next().hide();
    	cateLv3.addClass("closeMn");

    	cateLv3.click(function(event){

    		event.stopPropagation();
    		event.preventDefault();

    		if(mxmjq(this).hasClass("closeMn"))	{
    			mxmjq(this).children().next().stop(true,true).slideDown(300);
    			mxmjq(this).removeClass("closeMn");
    			mxmjq(this).addClass("openMn");
    		} 
    		else if (mxmjq(this).hasClass("openMn")) {
    			mxmjq(this).children().next().stop(true,true).slideUp();
    			mxmjq(this).removeClass("openMn");
    			mxmjq(this).addClass("closeMn");
    		}
    		
    	});


    	cateLv2Link.click(function(event){

    		event.stopPropagation();
    		
    	});

    	cateLv3Link.click(function(event){

    		event.stopPropagation();
    		
    	});

    	cateLv4Link.click(function(event){

    		event.stopPropagation();
    		
    	});



    }	
    activeAccordionProductCate();  





	/*==================================
    	Show Model Search Popup
    ===================================*/
    var iconSearchPopup = mxmjq(".nav__search-icon");
	var closeIconSearchPopup = mxmjq(".search-pp__close-link");
	var searchPopup = mxmjq(".search-popup");

    var activeSearchPopup = function(){

	  iconSearchPopup.click(function(event){

		  event.preventDefault();

	      var statusMxm = mxmjq(this).attr("data-check-open");

	      if(statusMxm == "closeMxm") {

	        openSearchPopup();

	      } else if(statusMxm == "openMxm") {

	        closeSearchPopup();
	      }

    	});

	  closeIconSearchPopup.click(function(event){

		  event.preventDefault();

	      var statusMxm = mxmjq(this).attr("data-check-open");

	      if(statusMxm == "closeMxm") {

	        openSearchPopup();

	      } else if(statusMxm == "openMxm") {

	        closeSearchPopup();
	      }

    	});	  

	  searchPopup.click(function(event){
	      	if(event.target === this) {
	      		closeSearchPopup();
	      	}
    	});


  		var openSearchPopup = function(){
			searchPopup.addClass("menu-show");
			html.css({"overflow": "hidden"});

			closeIconSearchPopup.attr('data-check-open','openMxm');
			iconSearchPopup.attr('data-check-open','openMxm');
		}
		var closeSearchPopup = function(){
			searchPopup.removeClass("menu-show");
			html.css({"overflow": "visible"});

			closeIconSearchPopup.attr('data-check-open','closeMxm');
			iconSearchPopup.attr('data-check-open','closeMxm');
		}


    }

    activeSearchPopup();








    /*==================================
    	Add Class Side Navigation 
    ===================================*/

    var addClassPage = function(){
    	mxmjq(".side-navi__content ul").parent("div").addClass("parent-mxm");	
    }

    addClassPage();



    /*==================================
    	Add Filter Price 
    ===================================*/

    var filterPrice = function(){

      if(mxmjq(".widget__price-filter--slide").length){

        mxmjq( ".widget__price-filter--slide" ).slider({
            range: true,
            min: 1,
            max: 500,
            values: [ 30, 300 ],
            slide: function( event, ui ) {
              mxmjq(".widget__price-filter--value").text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
            }
          });

        mxmjq(".widget__price-filter--value").text( "$" + mxmjq( ".widget__price-filter--slide" ).slider( "values", 0 ) + " - $" + mxmjq( ".widget__price-filter--slide" ).slider( "values", 1 ));
      }


    }

    filterPrice();    



    /*==================================
    	Active Tab Content Product Detail 
    ===================================*/

    var activeTabProductDetail = function(){


		mxmjq(".item-product-detail__content--tab-container---inside").removeClass("openMxm");
		mxmjq(".item-product-detail__content--tab-container---inside:first").addClass("openMxm");

		mxmjq(".item-product-detail__content--link").removeClass("active");
		mxmjq(".item-product-detail__content--link:first").addClass("active");

		mxmjq(".item-product-detail__content--link").click(function(event){
			
			// event.preventDefault();

			mxmjq(".item-product-detail__content--link").removeClass("active");
			mxmjq(this).addClass("active");

			mxmjq(".item-product-detail__content--tab-container---inside").removeClass("openMxm");
			var activeTab = mxmjq(this).attr("data-tab");
			mxmjq("." + activeTab).addClass("openMxm");

		});	


    }

    activeTabProductDetail();    



    /*==================================
    	Active Form Checkout  
    ===================================*/

    var activeFormCheckout = function(){

    	var checkboxOtherAddShip = mxmjq(".checkout__checkbox--otherAddShip");	
		var formOtherShip = mxmjq(".checkout__otherAddShip");	

		
        if(checkboxOtherAddShip.is(":checked")){

            formOtherShip.addClass("openMxm");

        }

        else if(checkboxOtherAddShip.is(":not(:checked)")){

        	formOtherShip.removeClass("openMxm");	
        }



		checkboxOtherAddShip.click(function(){
            if(mxmjq(this).is(":checked")){

                formOtherShip.addClass("openMxm");

            }

            else if(mxmjq(this).is(":not(:checked)")){

            	formOtherShip.removeClass("openMxm");	
            }
		});



		var linkLogin = mxmjq(".checkout__link-login");	
		var formLogin = mxmjq(".checkout__form-login");	

		linkLogin.click(function(event){

			event.preventDefault();

			var statusMxm = mxmjq(this).attr("data-check-open");

			if(statusMxm == "closeMxm") {

		        formLogin.addClass("openMxm");

		        mxmjq(this).attr('data-check-open','openMxm');

		    } else if(statusMxm == "openMxm") {

		        formLogin.removeClass("openMxm");

		         mxmjq(this).attr('data-check-open','closeMxm');
		    }
		});



		var linkCoupon = mxmjq(".checkout__link-coupon");	
		var formCoupon = mxmjq(".checkout__form-coupon");

		linkCoupon.click(function(event){

			event.preventDefault();

			var statusMxm = mxmjq(this).attr("data-check-open");

			if(statusMxm == "closeMxm") {

		        formCoupon.addClass("openMxm");

		        mxmjq(this).attr('data-check-open','openMxm');

		    } else if(statusMxm == "openMxm") {

		        formCoupon.removeClass("openMxm");

		         mxmjq(this).attr('data-check-open','closeMxm');
		    }
		});			

    }

    activeFormCheckout();   






    /*==================================
    	Close Item Cart 
    ===================================*/

    mxmjq(window).on('load', function () {

        function removeCartItem() {
        	var closeCart = mxmjq(".cart__table--close");
        	closeCart.click(function(){
        		mxmjq(this).parent().parent().parent().remove();
        	});
        }
        removeCartItem();


    });




    /*==================================
    	Images Loading
    ===================================*/




	mxmjq('body').imagesLoaded( { background: true }, function() {

	  mxmjq(".loading-begin").addClass("closeMxm");

	});




	


    /*==================================
    	Ajax Form Contact
    ===================================*/

    function processFormContact() {

		mxmjq("#contactform").submit(function(event){
		    // cancels the form submission
		    event.preventDefault();
		    submitForm();
		});

		function submitForm(){
		    // Initiate Variables With Form Content
		    var name = mxmjq("#name").val();
		    var email = mxmjq("#email").val();
		    var message = mxmjq("#message").val();
		 
		    mxmjq.ajax({
		        type: "POST",
		        url: "contact_process_form_ajax.php",
		        data: "name=" + name + "&email=" + email + "&message=" + message,
		        success : function(text){
		            if (text == "success"){
		                formSuccess();
		                document.getElementById("contactform").reset(); 
		                
		            }
		            else {
		            	formFail(text);		
		            }


                
		        }
		    });
		}
		function formSuccess(){
		    mxmjq( ".msg-submit" ).addClass("showMxmD").text("Message Submitted!");
		}
		function formFail(text){
		    mxmjq( ".msg-submit" ).addClass("showMxmD").text(text);
		}		

    }
    processFormContact();




    /*==================================
    	Ajax Form Subcribe 1
    ===================================*/

	function processFormSubcribe() {

		mxmjq("#subcribeform").submit(function(event){
		    // cancels the form submission
		    event.preventDefault();
		    submitForm2();
		});

		function submitForm2(){
		    // Initiate Variables With Form Content
		    var email = mxmjq("#emailsub1").val();
		 
		    mxmjq.ajax({
		        type: "POST",
		        url: "subscribe_process_form_ajax.php",
		        data: "email=" + email,
		        success : function(text){
		            if (text == "success"){
		                formSuccess2();
		                document.getElementById("subcribeform").reset(); 
		                
		            }
		            else {
		            	formFail2(text);		
		            }


                
		        }
		    });
		}
		function formSuccess2(){
		    mxmjq( ".msg-submitSubcribe" ).addClass("showMxmD").text("Subcribe Successful!");
		}
		function formFail2(text){
		    mxmjq( ".msg-submitSubcribe" ).addClass("showMxmD").text(text);
		}		

    }
    processFormSubcribe(); 



    /*==================================
    	Ajax Form Subcribe 2
    ===================================*/    

	function processFormSubcribe2() {

		mxmjq("#subcribeform2").submit(function(event){
		    // cancels the form submission
		    event.preventDefault();
		    submitForm3();
		});

		function submitForm3(){
		    // Initiate Variables With Form Content
		    var email = mxmjq("#emailsub2").val();
		 
		    mxmjq.ajax({
		        type: "POST",
		        url: "subscribe_process_form_ajax2.php",
		        data: "email=" + email,
		        success : function(text){
		            if (text == "success"){
		                formSuccess3();
		                document.getElementById("subcribeform2").reset(); 
		                
		            }
		            else {
		            	formFail3(text);		
		            }


                
		        }
		    });
		}
		function formSuccess3(){
		    mxmjq( ".msg-submitSubcribe2" ).addClass("showMxmD").text("Subcribe Successful!");
		}
		function formFail3(text){
		    mxmjq( ".msg-submitSubcribe2" ).addClass("showMxmD").text(text);
		}		

    }
    processFormSubcribe2();        




    /*==================================
    	Active Parallax Item
    ===================================*/    

	function activeParallaxItem() {

		mxmjq(".section-carousel").mousemove(function(e) {
		  parallaxIt(e, ".parallax-item--s1", -300);
		});

		function parallaxIt(e, target, movement) {
		  var $this = mxmjq(".section-carousel");
		  var relX = e.pageX - $this.offset().left;
		  var relY = e.pageY - $this.offset().top;

		  TweenMax.to(target, 1, {
		    x: (relX - $this.width() / 2) / $this.width() * movement,
		    y: (relY - $this.height() / 2) / $this.height() * movement
		  });
		}
	

    }
    // activeParallaxItem(); 




	/*==================================
    	Scroll Down Reveal Draw Chart Cicle
    ===================================*/
	var inRevealDrawChartCicle = function() {

	mxmjq('.skill-v1__circle').waypoint(function() {
	      mxmjq('.skill-v1__circle').addClass('drawCircle');

	      this.destroy();

	  }, { offset: '90%' });	


	}


	inRevealDrawChartCicle();



	/*==================================
    	Scroll Down Reveal Counter Up Percent New Skill
    ===================================*/

	var inRevealCounterUpPercentNewSkill = function () {

	  	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

		var counters = mxmjq(".skill-v1__number");

		/* Start counting, do this on DOM ready or with Waypoints. */
		counters.each(function (index, counter) {
		var waypoint_2 = new Waypoint( {
				element: mxmjq(this),
				handler: function() { 
					counterUp(counter, {
						duration: 1600,
						delay: 11
					}); 

					// console.log('Qua diem dem so');	

					this.destroy();
				},
				offset: '90%',
			} );
		});




	}

	inRevealCounterUpPercentNewSkill();      










	/*==================================
    	Responsive Video Background Scale Center
    ===================================*/


	var minWidthVideo = 300;
	var videoWidthOrigin;
	var videoHeightOrigin;

	mxmjq(function() {

		if(mxmjq(".section-video-bg").length){
		    videoWidthOrigin = parseInt(mxmjq('video').attr('width'));
		    videoHeightOrigin = parseInt(mxmjq('video').attr('height'));

		    mxmjq(window).resize(function () {
		     	fitVideoBg(); 

		 	});
		    mxmjq(window).trigger('resize');			
		}


	});

	function fitVideoBg() {

	    mxmjq('.video-bg__viewport').width(mxmjq('.section-video-bg').width());
	    mxmjq('.video-bg__viewport').height(mxmjq('.section-video-bg').height());

	    var scaleWidth = mxmjq('.section-video-bg').width() / videoWidthOrigin;
	    var scaleHeight = mxmjq('.section-video-bg').height() / videoHeightOrigin;

	    var scaleX = scaleWidth > scaleHeight ? scaleWidth : scaleHeight;

	    if (scaleX * videoWidthOrigin < minWidthVideo) {
    		scaleX = minWidthVideo / videoWidthOrigin;
	    };

	    mxmjq('video').width(scaleX * videoWidthOrigin);
	    mxmjq('video').height(scaleX * videoHeightOrigin);

	    mxmjq('.video-bg__viewport').scrollLeft((mxmjq('video').width() - mxmjq('.section-video-bg').width()) / 2);
	    mxmjq('.video-bg__viewport').scrollTop((mxmjq('video').height() - mxmjq('.section-video-bg').height()) / 2);

	    console.log(scaleX);
	};







    


});
	






