

mxmjq(function() {

  mxmjq('.show-case-v5__img').each(function(){

    var img = mxmjq(this);


    var imgParent = mxmjq(this).parent();


    function parallaxImg () {
      var speed = img.data('speed');
      // console.log('speed: ' + speed); 

      var imgY = imgParent.offset().top;
      // console.log('imgY: ' + imgY);   
      var winY = mxmjq(this).scrollTop();
      // console.log('winY: ' + winY); 
      var winH = mxmjq(this).height();
      // console.log('winH: ' + winH); 
      var parentH = imgParent.innerHeight();
      // console.log('parentH: ' + parentH); 


      // The next pixel to show on screen      
      var winBottom = winY + winH;
      // console.log('winBottom: ' + winBottom);

      // If block is shown on screen
      if (winBottom  > imgY && winY < imgY + parentH) {
        // Number of pixels shown after block appear
        var imgBottom = ((winBottom - imgY) * speed);
        // Max number of pixels until block disappear
        var imgTop = winH + parentH;
        // Porcentage between start showing until disappearing
        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
      }
      img.css({
        top: imgPercent + '%',
        transform: 'translateY(-' + imgPercent + '%)'
      });
    }
    mxmjq(document).on({
      scroll: function () {
        parallaxImg();
      }, ready: function () {
        parallaxImg();
      }
    });
  });



});