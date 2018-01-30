function depositProfit(deposit, rate, threshold) {
    var index = 0;
    
    while(deposit<threshold){
        deposit = deposit * (100+rate)/100;
        index++;
    }
    
    return index;
}


