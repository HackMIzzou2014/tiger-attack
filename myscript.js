var img = document.createElement('img');
img.src = "chrome-extension://lajofpiofappbnclhjpefcgcnjhoalja/icon.png";
document.querySelector('body').appendChild(img);

var jq = document.createElement('script');
jq.src = "http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";
document.querySelector('head').appendChild(jq);
jq.onload = procede;

function procede(){
	console.dir($);
$( "img" ).click(function() {
  var html = [ "The clicked div has the following styles:" ];
  console.log("html");
  console.log("html");
  var styleProps = $( this ).css([
    "width", "height", "color", "background-color"
  ]);
  $.each( styleProps, function( prop, value ) {
    html.push( prop + ": " + value );
  });
 
  $( "#result" ).html( html.join( "<br>" ) );
});
}