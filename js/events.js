//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  });
}
function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  });
}
function pressIt() {
  $(':input').on('keydown', function(e) {
    console.log(parseInt(e.keyCode))

    if (e.which == 71)
      alert('You pressed G!')
  });
}
function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  });
}
$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
