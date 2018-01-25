function evenDigitsOnly(n) {
    var inputArray = n.toString().split("");
    
    for (var i=0; i<inputArray.length; i++){
        if(parseInt(inputArray[i])%2>0){
            return false;
        }
    }
    
    console.log(inputArray);
    return true;
}



