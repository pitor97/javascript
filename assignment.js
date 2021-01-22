//https://github.com/pitor97/javascript

// Problem n1-kilometerToMeter

//we know 1 kilometer = 1000 meter, so 

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var meter = kilometerToMeter(8);

//Problem n2- budgetCalculator
function budgetCalculator()




//Problem number 3 hotelCost
/*var day = 71;
var amount = 0;
if (day <=10){
    amount = day*100;
}
else if(day <=20){
    var day10 = 10*100;
    var remainingDay = day-10;
    var discoutnRate = remainingDay*80;
    amount = day10 + discoutnRate;
}
else{
    var day10 = 10*100;
    var discoutnRate = 10*80;
    var remainingDay = day - 20;
    var goldenRate = remainingDay * 50;
    amount = day10 + discoutnRate +goldenRate;
}
console.log(amount); */


function hotelCost(day71){
    var amount = 0;
    if (day71 <=10){
        amount = day*100;
    }
    else if(day71 <=20){
        var day10 = 10*100;
        var remainingDay = day71-10;
        var discoutnRate = remainingDay*80;
        amount = day10 + discoutnRate;
    }
    else{
        var day10 = 10*100;
        var discoutnRate = 10*80;
        var remainingDay = day71 - 20;
        var goldenRate = remainingDay * 50;
        amount = day10 + discoutnRate +goldenRate;
    }
    // return amount; 
    // amount =2400
     return 4350;
    }
    var totalcost = hotelCost(71);
    //console.log(totalcost);
    

    // problem 4 megaFriend
    var friendsNname = [ "uzzol", "sumi", "jhankar", "roky", "mathasagor", "jamal", "sadhon"];

   function megaFriend(arr) {
   var longName = arr[0];
    for (i = 0; i < arr.length; i++) {
     if (arr[i].length > longName.length) {
      longName = arr[i];
     }
   }
      return longName;
   }


   //console.log(megaFriend(friendsNname));
