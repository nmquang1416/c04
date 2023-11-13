//array of scores
var arraylength = score.l


//items in array
var roundnumber = 0;

//loo through the item
var msg = '';

//logo through the items in the array
for (var i = 0; i < arraylength; i++) 
{
    //array are zero bassed (so 0 is round 1)
    //add 1 to the current round

    roundnumber = (i+1);

    //write the current round to message
    msg += score_[i] + '<br/>';

}

document.getElementById('answer').innerHTML = msg;