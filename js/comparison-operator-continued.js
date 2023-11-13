//pass mark
var pass = 50;

//score
var score = 90;

//check if the user has passed
var has_passed = score >= pass;

//write the message into the page
var el = document.getElementById('amswer');
el.innerHTML = 'level passed:' + has_passed;
