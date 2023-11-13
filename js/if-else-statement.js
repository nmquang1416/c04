// pass mark
var pass = 50;

//current score
var score = 75;

//message
var msg;

//select message to write bassed on score
if(score>pass){
    msg = 'congratulations, you passed!';
} else {
    msg = 'have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;