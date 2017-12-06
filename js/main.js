//import { cities_or_countries } from "../images_data/countries_or_cities/data.json";

(function() {
  $( document ).ready(function() {

    //$("#SignUpModalStep1").modal("show");

  });

  document.getElementById('signIn_form_1').addEventListener('submit', function(e) {
    e.preventDefault();

    if (validateSignUp1Form()) {
      $('#SIGN_UP_1').css('display', 'none');
      $('#SIGN_UP_2').css('display', 'block');
    }
  });

  let user_email,
      user_password;

  function validateSignUp1Form() {
    let isValid = true;
    const form = document.forms["signInForm_1"];
    user_email = form["signIn_email"].value;
    user_password = form["signIn_password"].value;

    user_email === ""
    ?
    (
      $('#signIn_email').addClass('alert_border'),
      $('.validation_propmpt').html('please fill the required fields'),
      isValid = false
    )
    :
    (
      $('#signIn_email').removeClass('alert_border'),
      isValid = true
    )


    user_password === ""
    ?
    (
      $('#signIn_password').addClass('alert_border'),
      $('.validation_propmpt').html('please fill the required fields'),
      isValid = false
    )
    :
    (
      $('#signIn_password').removeClass('alert_border'),
      isValid = true
    )

    return isValid
  }






  let signInFullName,
      age,
      gender;




  function validateSignUp2Form() {
    let isValid = true;
    const form = document.forms["signInForm_2"];
    signInFullName = form["signIn_full_name"].value;
    age = form["signIn_age"].value;
    gender = form["signIn_radio"].value;

    signInFullName === ""
    ?
    (
      $('#signIn_full_name').addClass('alert_border'),
      $('#validation_propmpt').html('please fill the required fields'),
      isValid = false
    )
    :
    (
      $('#signIn_full_name').removeClass('alert_border'),
      isValid = true
    )


    age === ""
    ?
    (
      $('#signIn_age').addClass('alert_border'),
      $('#validation_propmpt').html('please fill the required fields'),
      isValid = false
    )
    :
    (
      $('#signIn_age').removeClass('alert_border'),
      isValid = true
    )


    gender === ""
    ?
    (
      $('#signIn_radio').addClass('alert_border'),
      $('#validation_propmpt').html('please fill the required fields'),
      isValid = false
    )
    :
    (
      $('#signIn_radio').removeClass('alert_border'),
      isValid = true
    )

    return isValid
  }


  document.getElementById('signIn_form_2').addEventListener('submit', function(e) {
    e.preventDefault();
    if(validateSignUp2Form()) {
      $('#main_container').css('display', 'none');
      $('#GET_STARTED_CONTAINER').css('display', 'flex');
    } else {
      console.log('invalid(((((');
    }
  });

  document.getElementById('button_back').addEventListener('click', function(e) {
    $('#SIGN_UP_2').css('display', 'none');
    $('#SIGN_UP_1').css('display', 'block');
  });


  document.getElementById('get_started_button').addEventListener('click', function(e) {
    $('#GET_STARTED_CONTAINER').css('display', 'none');
    $('#main_container').css('display', 'block');
  });


  //************* Modals

  $("#SelectiveModal_1").modal("show");










})();








































{/* <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Project name</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <form class="navbar-form navbar-right" role="form">
        <div class="form-group">
          <input type="text" placeholder="Email" class="form-control">
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" class="form-control">
        </div>
        <button type="submit" class="btn btn-success">Sign in</button>
      </form>
    </div><!--/.navbar-collapse -->
  </div>
</nav>

<!-- Main jumbotron for a primary marketing message or call to action -->
<div class="jumbotron">
  <div class="container">
    <h1>Hello, world!</h1>
    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
    <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
  </div>
</div>

<div class="container">
  <!-- Example row of columns -->
  <div class="row">
    <div class="col-md-4">
      <h2>Heading</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
    </div>
    <div class="col-md-4">
      <h2>Heading</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
   </div>
    <div class="col-md-4">
      <h2>Heading</h2>
      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
    </div>
  </div>

  <hr>

  <footer>
    <p>&copy; Company 2015</p>
  </footer> */}
