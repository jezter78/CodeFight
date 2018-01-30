function chessBoardCellColor(cell1, cell2) {
    var even = ["A","C","E","G"];
    
    var cell1_type = even.indexOf(cell1[0])>-1 ? "even" : "odd";
    var cell2_type = even.indexOf(cell2[0])>-1 ? "even" : "odd";
    
    if(cell1_type == cell2_type){
        if((parseInt(cell1[1]) - parseInt(cell2[1]))%2!=0){
            return false;
        }
    } else {       
        if((parseInt(cell1[1]) - parseInt(cell2[1]) + 1)%2!=0){
            return false;
        }
    }    
    return true;
}


