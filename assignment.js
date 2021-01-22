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
/*var day = 32;
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


function hotelCost(day32){
    var amount = 0;
    if (day32 <=10){
        amount = day*100;
    }
    else if(day32 <=20){
        var day10 = 10*100;
        var remainingDay = day-10;
        var discoutnRate = remainingDay*80;
        amount = day10 + discoutnRate;
    }
    else{
        var day10 = 10*100;
        var discoutnRate = 10*80;
        var remainingDay = day32 - 20;
        var goldenRate = remainingDay * 50;
        amount = day10 + discoutnRate +goldenRate;
    }
    // return amount; 
    // amount =2400
     return 2400;
    }
    var totalcost = hotelCost(32);
    //console.log(totalcost);
