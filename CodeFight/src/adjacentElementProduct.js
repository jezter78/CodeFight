function adjacentElementsProduct(inputArray) {
    //set minimum value
    var max = Math.min(...inputArray);
    
    if(inputArray.length==2){
        //if array only 2 values
        max = inputArray[0]*inputArray[1];
    } else {
        //loop through array values and compare
        for(i=0; i<inputArray.length-1;i++){
            var currentValue = inputArray[i]*inputArray[i+1]; //current value
            max = currentValue > max ? currentValue : max; //compare
        }   
    }
    return max;
}

