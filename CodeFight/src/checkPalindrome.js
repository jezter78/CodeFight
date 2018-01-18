function checkPalindrome(inputString) {
    var inputArray = inputString.split("");
    var array_length = inputArray.length;
    var midpt = Math.floor(array_length/2);
    
    if(array_length>0){
         for(i=0;i<midpt;i++){  
            //compare outermost values 
            if(inputArray[i]!=inputArray[array_length-1-i]){
                return false;
            }
        }
    }    
    return true;    
}


