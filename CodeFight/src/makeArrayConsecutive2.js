function makeArrayConsecutive2(statues) {   
    var array_length = statues.length;
    
    //sort smallest to biggest size, provide a function to sort in int order
    var sorted_statues = statues.sort(function (a, b){
                            return (a - b) 
                        });
    
    var min_size = sorted_statues[0];
    var max_size = sorted_statues[array_length-1];
    
    return max_size - min_size - array_length + 1;   
}


