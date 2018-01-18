function checkPalindrome(inputString) {
    var inputArray = inputString.split("");
    var array_length = inputArray.length;
    
    if(array_length == 1){
        return true;
    } else {
        var forwardString = "";
        var backwardString = "";
        var midpt = Math.floor(array_length/2);
        for(i=0;i<midpt;i++){
            forwardString += inputArray[i];
            backwardString += inputArray[array_length-1-i];
        }
        
        if(forwardString == backwardString){
            return true;            
        }         
    }    
    return false;    
}


