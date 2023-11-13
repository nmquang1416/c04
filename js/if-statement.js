// pass mark
var pass = 75;

//message
var msg;

if(score >= 50){

    //if score is 50 or higher
    msg = 'congratulations!';
    msg += 'proceed to the next round.';
}

document.getElementById('answer').textContent = msg;