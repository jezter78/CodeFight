function addBorder(picture) {
    var picture_size = picture.length;
    var row_size = picture[0].length;
    
    var border = "";
    
    //make dots
    for(var i=0; i<row_size+2; i++){
        border += "*";
    }
    
    var final = [];
    //make picture with border
    for(var i=0; i<picture_size+2; i++){
        if(i==0 || i==picture_size+2 -1){
            final.push(border);
        } else {
            final.push("*"+picture[i-1]+"*");
        }
    }
    
    return final;
}



