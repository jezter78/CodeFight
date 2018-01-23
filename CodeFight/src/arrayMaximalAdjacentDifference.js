function arrayMaximalAdjacentDifference(inputArray) {
    var max = 0;
    
    for (var i=0; i < inputArray.length - 1; i++){
        var diff = Math.abs(inputArray[i] - inputArray[i+1]);
        max = diff>max ? diff:max;
    }
    
    return max;
}



