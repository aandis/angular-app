 marqueeInit({
          uniqueid: 'mycrawler',
          style: {
            'padding': '2px',
            'width': '300px',
            'height': '100px',
            'margin' : '0 auto'
          },
          inc: 5, //speed - pixel increment for each iteration of this marquee's movement
          mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
          moveatleast: 2,
          neutral: 150,
          savedirection: true,
          random: true
        });

$(document).ready(function(){
 $(".scroll").click(function (event) {
    event.preventDefault();
    //calculate destination place
//    console.log("triggered");
    var dest = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
    } else {
        dest = $(this.hash).offset().top;
    }
    //go to destination
    $('html,body').animate({
        scrollTop: dest
    }, 2000, 'swing');
});
});