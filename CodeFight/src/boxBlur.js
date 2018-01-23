function boxBlur(image) {
    var row = image.length;
    var col = image[0].length;
    var output = [];
    var outputs = [];
    
    for(var k=0; k<row-2; k++){
        output = [];
        for(var i = 0; i<col-2; i++){
            var blur = Math.floor((image[k][i] + image[k][i+1] + image[k][i+2] + 
                        image[k+1][i] + image[k+1][i+1] + image[k+1][i+2] +
                        image[k+2][i] + image[k+2][i+1] + image[k+2][i+2])/9);
            output.push(blur);   
        }
        outputs.push(output);
    }    
    return outputs;
}



