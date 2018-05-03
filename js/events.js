//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
});
function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty')
  })
}
function pressIt() {
  $(':input').on('keydown', function(e) {
    console.log(parseInt(e.keyCode))

    if (parseInt(e.keyCode) === 71)
      alert('You pressed G!')
  })
}
function submitIt() {
  $('form').on('submit', alert('Your form is going to be submitted now.'))
}
$(document).ready(function(){
// call functions here
  //getIt();
  frameIt();
  pressIt();
  //submitIt();
});
