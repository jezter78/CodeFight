function shapeArea(n) {
    var base = n * 2 - 1; //base area
    var area = 0; //initialize triangle area
    
    //loop through and build up both sides of triangle
    for(i=1;i<n;i++){
        area += 2 * (base - i * 2); //the number of empty spaces increases by 2 per step
    }    
    return area + base;    
}


