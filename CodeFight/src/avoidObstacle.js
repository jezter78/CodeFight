function avoidObstacles(inputArray) {
    inputArray.sort();
    
    var step = 1;
    var i = 0;
    while(i<40){
        if(inputArray.indexOf(i)>-1){
            console.log(step);
            i=0;
            step++;
        }
        i += step;
    }
    return step;
}

