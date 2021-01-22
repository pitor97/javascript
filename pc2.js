function hotelCost(day32){
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
 return amount;
}
var count = hotelCost(32);
console.log(count);