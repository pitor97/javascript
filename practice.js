//function kilometerToMeter(kilometer){
//    var meter = kilometer*1000;
//    return meter;
//}
//var meter = kilometerToMeter(8);
//console.log(meter);
//
//
//function budgetCalculator(watch){
//    var result = 
//    var phone = 100;
//    var laptop = 500;
//
//}
var day = 32;
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
console.log(amount);