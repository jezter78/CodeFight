function matrixElementsSum(matrix) {
    var row_size = matrix.length; //size of matrix
    var col_size = matrix[0].length; //row length
    var total = 0;
    
    //row size more than 1
    for(var k=0;k<col_size;k++){
        for(var i=0;i<row_size;i++){ 
            if(i!=0){
                //mark self to zero if top value is 0
                if(matrix[i-1][k]==0){
                    matrix[i][k]=0;
                }
            } 
            total += matrix[i][k];
        }
    }    
    return total;
}


