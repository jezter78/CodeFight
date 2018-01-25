function minesweeper(matrix) {
    var col = matrix[0].length;
    var row = matrix.length;
    
    var output = [];
    var outputs = [];
    
    for(var i=0; i<row; i++){
        output = [];
        for(var k=0; k<col; k++){
            var temp = 0;
            for(var j=-1; j<=1;j++){
                for(var p=-1; p<=1;p++){
                    if(i+j>-1 && k+p>-1 && i+j<row && k+p<col){
                        if(j==0 && p==0){
                            continue;
                        } 
                        temp += matrix[i+j][k+p]?1:0; 
                    }
                }
            }
            output.push(temp);            
        }
        outputs.push(output);
    } 
    
    return outputs;
}


