//round 1 score
var score_1 = 8;

//round 2 score
var score_2 = 8;

//round 1 high mark
var pass_1 = 6;

//round 2 high mark
var pass_2 = 6;

//check whether user passed both round, store result in variables
var min_pass = (score_1 > pass_1) || (score_2 >= 2);

//create message
var msg = 'Resit required: ' + !min_pass;

//write the message into the page
var el = document.getElementById('answer');
el.innerHTML = msg;