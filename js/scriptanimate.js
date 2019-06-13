$(function() {
  $( "#button1" ).click(function() {
    $( "#button1" ).addClass( "onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#button1" ).removeClass( "onclic" );
      $( "#button1" ).addClass( "validate", 450, callback );
    }, 3250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#button1" ).removeClass( "validate" );
      }, 2250 );
    }
  });
  
  var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },6000);
};

var classname = document.getElementsByClassName("button1");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}