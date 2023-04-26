"use strict";

function masonry(grid, gridCell, gridGutter, xlGridCol, lgGridCol, mdGridCol, smGridCol, xsGridCol, ssGridCol) {
  var g = document.querySelector(grid),
      gc = document.querySelectorAll(gridCell),
      gcLength = gc.length, // Total number of cells in the masonry
      gHeight = 0, // Initial height of our masonry
      i; // Loop counter
  
  // Calculate the net height of all the cells in the masonry
  for(i=0; i<gcLength; ++i) {
    gHeight+=gc[i].offsetHeight+parseInt(gridGutter);
  }
  
  /*
   * Calculate and set the masonry height based on the columns
   * provided for big, medium, and small screen devices.
   */ 
  if(window.screen.width >= 1200) {

      g.style.maxHeight = gHeight/xlGridCol + gHeight/(gcLength+1) + "px";

  } 
  else if(window.screen.width < 1200 && window.screen.width >= 992) {

      g.style.maxHeight = gHeight/lgGridCol + gHeight/(gcLength+1) + "px";

  }
  else if(window.screen.width < 992 && window.screen.width >= 768) {

      g.style.maxHeight = gHeight/mdGridCol + gHeight/(gcLength+1) + "px";

  }
  else if(window.screen.width < 768 && window.screen.width >= 576) {

      g.style.maxHeight = gHeight/smGridCol + gHeight/(gcLength+1) + "px";

  }
  else if(window.screen.width < 576 && window.screen.width >= 320) {

      g.style.maxHeight = gHeight/xsGridCol + gHeight/(gcLength+1) + "px";

  } 
  else {

      g.style.maxHeight = gHeight/ssGridCol + gHeight/(gcLength+1) + "px";

  }
}

var activeMasonry = function(masonryParentX1, masonryItemX1, gridGutter, xlGridCol, lgGridCol, mdGridCol, smGridCol, xsGridCol, ssGridCol) {


    /**
     * Preload and reform the masonry
     *
     * Add some preloader text to the masonry grid and rebuild it on every resize
     * and load event after making sure all the images in the grid are loaded
     * completely.
     */

    // Grab the pointer to the masonry grid
    var masonryParent = document.querySelector(masonryParentX1);

    // Insert preloader text dynamically
    masonryParent.insertAdjacentHTML('afterend', '<div class="masonry__preloader"></div>');

    // Grab the pointer to the masonry preloader
    var masonryPreloader = document.querySelector('.masonry__preloader');

    // Fire the magic on every load and resize event
    ['resize', 'load'].forEach(function(event) {
      // Hide the masonry until it loads
      masonryParent.style.display='none';

      // Follow the below steps on every load and resize event
      window.addEventListener(event, function() {

        // Check if all the images finished loading
        imagesLoaded( document.querySelector(masonryParentX1), function() {

          // Show the masonry, as it is loaded now
          masonryParent.style.display='flex';

          // Hide the preloader, as it is not needed anymore
          masonryPreloader.style.display='none';

          /*
           * A maonsry grid with 8px gutter, with 3 columns on desktop,
           * 2 on tablet, and 1 column on mobile devices.
           */
          masonry(masonryParentX1, masonryItemX1, gridGutter, xlGridCol, lgGridCol, mdGridCol, smGridCol, xsGridCol, ssGridCol);

          // Done!
          // console.log('Flexbox Masonry Loaded');
        });
      }, false);
    });



}
var column2 = document.querySelector(".column2.masonry__parent");
var column2Sidebar = document.querySelector(".column2-sidebar.masonry__parent");
var column2Full = document.querySelector(".column2Full.masonry__parent");
var column3 = document.querySelector(".column3.masonry__parent");
var column3Sidebar = document.querySelector(".column3-sidebar.masonry__parent");
var column3Full = document.querySelector(".column3Full.masonry__parent");
var column4 = document.querySelector(".column4.masonry__parent");
var column4Full = document.querySelector(".column4Full.masonry__parent");
var column5 = document.querySelector(".column5.masonry__parent");
var column5Full = document.querySelector(".column5Full.masonry__parent");

if(column2 != null) {
  activeMasonry('.column2.masonry__parent', '.masonry__item', 40, 2, 2, 2, 2, 1, 1);
}
if(column2Sidebar != null) {
  activeMasonry('.column2-sidebar.masonry__parent', '.masonry__item', 40, 2, 2, 2, 2, 1, 1);
}
if(column2Full != null) {
  activeMasonry('.column2Full.masonry__parent', '.masonry__item', 40, 2, 2, 2, 2, 1, 1);
}
if(column3 != null) {
  activeMasonry('.column3.masonry__parent', '.masonry__item', 40, 3, 3, 2, 2, 1, 1);
}
if(column3Sidebar != null) {
  activeMasonry('.column3-sidebar.masonry__parent', '.masonry__item', 40, 3, 2, 2, 2, 1, 1);
}
if(column3Full != null) {
  activeMasonry('.column3Full.masonry__parent', '.masonry__item', 40, 3, 3, 2, 2, 1, 1);
}

if(column4 != null) {
  activeMasonry('.column4.masonry__parent', '.masonry__item', 40, 4, 3, 2, 2, 1, 1);
}
if(column4Full != null) {
  activeMasonry('.column4Full.masonry__parent', '.masonry__item', 40, 4, 3, 2, 2, 1, 1);
}
if(column5 != null) {
  activeMasonry('.column5.masonry__parent', '.masonry__item', 40, 5, 3, 3, 2, 1, 1);
}
if(column5Full != null) {
  activeMasonry('.column5Full.masonry__parent', '.masonry__item', 40, 5, 3, 3, 2, 1, 1);
}




