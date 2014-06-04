<!DOCTYPE html>
<html>  
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Arvo">    
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/loading-bar.css">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script type="text/javascript" src = "js/angular.min.js"></script>
    <script type="text/javascript" src = "js/angular-route.js"></script>
    <script type="text/javascript" src = "js/angular-animate.min.js"></script>
    <script type="text/javascript" src = "js/angular-resource.min.js"></script>
    <script type="text/javascript" src = "js/loading-bar.js"></script>
    <script type="text/javascript" src = "js/oridomi.min.js"></script>
    <script type="text/javascript" src = "js/script-angular.js"></script>
    <script type="text/javascript" src = "js/script.js"></script>
    <script type="text/javascript" src = "js/script-oridomi.js"></script>
  </head>

  <body ng-app = "myapp" id ="body">
    <div class = "row">
      <div class = "col-lg-2 col-md-2 col-sm-2 col-xs-2" id ="logo-box">
        <a href = "#">
          <img src = "images/swanz.png" id ="logo">
        </a>
      </div>
      <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" id = "nav-bar">
        <ul class="nav nav-pills">
          <li class = "list">
            <a href="#/events"><img src = "images/events.png"></a>
            <span class = "description">Events</span>
          </li>
          <li class = "list">
            <a href="#/sponsors"><img src = "images/sponsors.png"></a>
            <span class = "description">Sponsors</span>
          </li>
          <li class = "list">
            <a href="#"><img src = "images/gallery.png"></a>
            <span class = "description">Gallery</span>
          </li>
          <li class = "list">
            <a href="#/contact"><img src = "images/contact.png"></a>
            <span class = "description">Contact</span>
          </li>
          <li class = "list">
            <a href="#"><img src = "images/register.png"></a>
            <span class = "description">Register</span>
          </li>
        </ul>      
      </div>
    </div>

    <div ng-view class="fade">

    </div>

    <!--footer -->

    <div class = "col-lg-2" id = "social-home">
      <a href = "#" id = "fb">
        <img src="images/icon-fb.png">
      </a>
      <a href="#" id = "twit">
        <img src="images/icon-twit.png">
      </a>
    </div>

    <script src="js/bootstrap.min.js"></script>
    
    <script type="text/javascript" src = "js/scrollReveal.js"></script>
    <script type="text/javascript" src = "js/fox-angular-scrollReveal.js"></script>
    <script>

      window.scrollReveal = new scrollReveal();

    </script>

  </body>
</html>