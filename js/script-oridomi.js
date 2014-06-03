$(document).ready(function(){

        var demos, logo, methods, folded;
        if (!OriDomi.isSupported) {
            alert("Not supported");
            return;
        }
          else{
              alert("supported");
          }
    window.setTimeout(function() {
      
              folded = new OriDomi('#homepage-logo', 
              {
                    vPanels:         10,     // number of panels when folding left or right (vertically oriented)
                    hPanels:         10,     // number of panels when folding top or bottom
                    speed:           1200,  // folding duration in ms
                    ripple:          10,     // backwards ripple effect when animating
                    shadingIntesity: .5,    // lessen the shading effect
                    perspective:     800,   // smaller values exaggerate 3D distortion
                    maxAngle:        80,    // keep the user's folds within a range of -40 to 40 degrees
                    //shading:         '' // change the shading type
                  });
                  //folded.fracture(800);
                  //folded.accordion(100).wait(100);
      //    folded.accordion(0).ramp(30).curl(-30).stairs(300).accordion(30);    
      //    folded.setRipple().accordion(28).stairs(-40);//.ramp(30).curl(-30).stairs(300).accordion(30);    
      folded.curl(50).collapse().setSpeed(2000).stairs(-29).foldUp().unfold();

}, 1000);

});
