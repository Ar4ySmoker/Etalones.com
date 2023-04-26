"use strict";
mxmjq(function() {

  var infiniteLoadTeam = function(){
    var infinite = new Waypoint.Infinite({
      //position waypoint
      element: mxmjq('.info-box-2')[0],
      container: mxmjq('.infinite-container-mxm'),
      items: '.infinite-item-mxm',
      more: '.infinite-more-link-mxm',
      offset: '0',
      loadingClass: 'infinite-loading-mxm',
    })

    mxmjq('.infinite-more-link-mxm').on('click', function(e) {
        e.preventDefault();
        infinite.waypoint.trigger();
    });
  }

  infiniteLoadTeam();

});