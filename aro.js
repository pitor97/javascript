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
     return 2400;
    }
    var totalcost = hotelCost(32);

    var mega friend = [ 'uzzol' 'pitore' 'uv']:
    var max = friend[0];
    for(var i = 0; i<friend.length; i++){
        var element = friend[1];
        if( elelent>max){
            max = elelent;
        }
    }
   console.log("highest valu")
    