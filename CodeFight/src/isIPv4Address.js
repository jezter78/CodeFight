function isIPv4Address(inputString) {
    var ipArray = inputString.split(".");
    
    if(ipArray.length!=4){
        return false;
    }
    
    for(var i = 0; i < ipArray.length; i++){
        if(ipArray[i] == "" || ipArray[i] > 255){
            return false;
        }
        
        if(isNaN(ipArray[i])){
            return false;
        }
    }
    console.log(ipArray);
    return true;
}

