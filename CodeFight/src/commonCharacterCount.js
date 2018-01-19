function commonCharacterCount(s1, s2) {
    var s1_array = s1.split("");
    var s2_array = s2.split("");
    var dictionary = [];
    var total = 0;
    
    //build dictionary for 1
    s1_array.forEach(function(item){    
        if(dictionary[item]>0){
            dictionary[item] += 1;
        } else{
            dictionary[item] = 1;
        }
    });
    
    for(var key in dictionary){
       var valueCount = 0;
        s2_array.forEach(function(item){           
            if(item == key){
                valueCount+=1;
            }
        });        
        total += Math.min(dictionary[key],valueCount);
    }
    return total;
}

