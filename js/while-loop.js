// set counter to 1
var i = 1;

//message
var msg = '';

//store 5 times table in a variable
while (i<10) {
    msg += i + 'x 5 =' + (i*5) + '<br/>';
    i++;
}

document.getElementById('answer').innerHTML = msg;