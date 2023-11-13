//unit of table
var table = 3;

//type off calculation
var operator = 'addition';

// set counter to 1
var i = 1;

//message
var msg = '';

if (operator === 'addition') {
    
    //do addition
    while (i<11) {
        msg += i + '+' + table + '=' + (i+table) + '<br/>';
        i++;
    }
} else {

    //do multiplication
    while (i<11) {
        msg += i + '+' + table + '=' + (i+table) + '<br/>';
        i++;
    }
}

//write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;