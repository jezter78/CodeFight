function alphabeticShift(inputString) {
    var str = inputString.split("");
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var charcode = (str[i].charCodeAt());
        if(charcode == 122){
            charcode = 97;
        } else {
            charcode++;
        }        
        result += String.fromCharCode(charcode);
    }
    return result;    
}


