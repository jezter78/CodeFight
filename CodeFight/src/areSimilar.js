function areSimilar(a, b) {
    var temp = -1;
    var position = -1;
    
    for(var i=0;i<a.length;i++){
        if(a[i]!=b[i]){
            //first time register number and position to swap            
            if(temp==-1){
                temp=a[i];
                position=i;
            } else {
                //swap
                a[position]=a[i];
                a[i]=temp;
                break;
            }
        }
    }//end swapping loop
    
    
    for(var k=0;k<a.length;k++){
        if(a[k]!=b[k]){
            return false;
        }
    }
    return true;
}

