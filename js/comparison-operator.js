//round 1 score
var score_1 = 90;

//round 2 score
var score_2 = 95;

//round 1 high score
var high_score_1 = 75;

//round 2 high score
var high_score_2 = 95;

//check if score are higher than current high scores
var comparison = (score_1 + score_2) > (high_score_1 + high_score_2);

//write the message into the page
var el = document.getElementById('answer');
el.innerHTML = 'New high score: ' + comparison;
