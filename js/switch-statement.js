//message
var msg;

//level
var level = 2;

//determine message bassed on level

switch (level) {
    case 1:
        msg = 'good luck on the first test';
        break;
    case 2:
        msg = 'second of three - keep going!';
        break;
    case 3:
        msg = 'Final round, almost there!';
        break;
    default:
        msg = 'good luck!';
        break;
}

var el = document.getElementById('anser');
el.textContent = msg;