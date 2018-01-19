function alternatingSums(a) {
    var even = 0;
    var odd = 0;
    
    for(var i=0;i<a.length;i++){
        //if it is even
        if(i%2 == 0){ 
            even += a[i];
        } else {
            odd += a[i];
        }
    }
    
    return [even,odd];
}

