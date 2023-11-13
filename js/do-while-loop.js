//set counter to 1
var i = 1;

//message
var msg = '';

//score 5 items tables in a variable
do{
    msg += i + 'x 5 =' + (i*5) + '<br/>';
    i++;
}   while(i<1);

//note how this is already 1 and it still runs

document.getElementById('answer').innerHTML = msg;