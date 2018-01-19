function allLongestStrings(inputArray) {
    var stringLength = 0;
    var builder=[];
    
    inputArray.forEach(function(item){
        
        if(item.length>stringLength){
            stringLength = item.length;
            //delete all items in array and make new array
            builder=[];
            builder.push(item);
        } else if (item.length==stringLength) {
            builder.push(item);
        }
    });
    
    return builder;
}


