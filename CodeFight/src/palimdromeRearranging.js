function palindromeRearranging(inputString) {
    var inputArray = inputString.split("").sort();    
    var dictionary = [];
    var single = 0; //number of singles
    
    //consolidate all counts of characters
    for (var i=0; i<inputArray.length; i++){
        if(dictionary[inputArray[i]]>0){
            dictionary[inputArray[i]] += 1;
        } else {
            dictionary[inputArray[i]] = 1;
        }
    }
    
    //check number of odd characters and mark single
    for (var key in dictionary){
        if(dictionary[key]%2>0){
            single += 1;
        }
    }
    
    if(single == 1 && inputArray.length%2 ==0){
        //if the array length is even and has one single, return false
        return false;
    } else if(single > 1){
        //if array has more than one singles, return false
        return false;
    }
    
    return true;
}
