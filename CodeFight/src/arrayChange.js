function arrayChange(inputArray) {
    var step = 0;
    var currentMax = inputArray[0];
    
    for(var i=1; i<inputArray.length; i++){
        if(inputArray[i]<=currentMax){
            step += currentMax - inputArray[i] + 1;
            currentMax++;
        } else {
            currentMax = inputArray[i];
        }
    }
    
    return step;
}

