<!DOCTYPE html>
<html>  
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Zeitgeist 2014</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Arvo">    
    <!-- the marquee css file -->

    <link rel="stylesheet" type="text/css" href="css/responsive.css">
    <link rel="stylesheet" type="text/css" href="css/pace.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script type="text/javascript" src = "js/pace.js"></script>
    <script type="text/javascript" src = "js/loadimages.js"></script>
    <script type="text/javascript" src = "js/angular.min.js"></script>
    <script type="text/javascript" src = "js/angular-route.js"></script>
    <script type="text/javascript" src = "js/angular-animate.min.js"></script>
    <script type="text/javascript" src = "js/angular-resource.min.js"></script>
    <script type="text/javascript" src = "js/script-angular.js"></script>
    <script type="text/javascript" src = "js/script.js"></script>

    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-52347496-1', 'auto');
      ga('send', 'pageview');

    </script>

  </head>

  <h2 id = "wait">Please wait</h2>
  <body ng-app = "myapp" id ="body">
    <div id="wrap">
      <div class = "container">

        <div class = "row">
          <div class = "col-lg-2 col-md-2 col-sm-2 col-xs-2" id ="logo-box">
            <a href = "#">
              <img src = "" id ="logo">
            </a>
          </div>

          <div class = "" id = "nav-bar">
            <ul>
              <li class = "list">
                <a href="#/events" class = "link" onClick="ga('send', 'event', 'Menu', 'Event-clicks');">
                  <img src = "" id = "events" class = "nav-image">
                </a>
                <center><div class = "description">Events</div></center>
              </li>
              <li class = "list">
                <a href="#/sponsors" onClick="ga('send', 'event', 'Menu', 'Sponsors-clicks');">
                  <img src = "" id = "sponsors" class = "nav-image">
                </a>
                <center><div class = "description">Sponsors</div></center>
              </li>
              <li class = "list">
                <a href="#/gallery" onClick="ga('send', 'event', 'Menu', 'Gallery-clicks');">
                  <img src = "" id = "gallery" class = "nav-image">
                </a>
                <center><div class = "description">Gallery</div></center>
              </li>
              <li class = "list">
                <a href="#/contact" onClick="ga('send', 'event', 'Menu', 'Contact-clicks');">
                  <img src = "" id = "contact" class = "nav-image">
                  </a>
                <center><div class = "description">Contact</div></center>
              </li>
              <li class = "list">
                <a href="#/register" onClick="ga('send', 'event', 'Menu', 'Register-clicks');">
                  <img src = "" id = "register" class = "nav-image">
                </a>
                <center><div class = "description">Register</div></center>
              </li>
              <li class = "list">
                <a href="#" onClick="ga('send', 'event', 'Menu', 'Info-clicks');">
                  <img src = "" id = "info" class = "nav-image">
                </a>
                <center><div class = "description">About Us</div></center>
              </li>
            </ul>   
          </div>
        </div>

        <div ng-view class="fade">

        </div>
      </div>
    </div>
      <!--footer -->
      <div id="footer">      
        <div class="container">
        <ul>
          <li>
        <a href = "https://www.facebook.com/zeitgeist.iitrpr" id = "fb" target="_blank">
          <img src="" id ="facebook" class = "social-image">
        </a>
          </li>
          <li>
        <a href="https://www.youtube.com/user/ZeitgeistIITRopar" id = "twit" target="_blank">
          <img src="" id = "youtube" class = "social-image">
        </a>
          </li>
        </ul>
      </div>
    </div>

    <script src="js/bootstrap.min.js"></script>
    
    <script type="text/javascript" src = "js/scrollReveal.js"></script>
    <script type="text/javascript" src = "js/fox-angular-scrollReveal.js"></script>
    <script>
      //for sequential appearance of images
      window.scrollReveal = new scrollReveal();

    </script>

  </body>
</html>