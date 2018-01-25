function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    for(var i=0; i<inputArray.length; i++){
        inputArray[i] = (inputArray[i] == elemToReplace) ? substitutionElem : inputArray[i];
    }
    
    return inputArray;
}


