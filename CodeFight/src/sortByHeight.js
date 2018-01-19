function sortByHeight(a) {
    var tree = [];
    var height = [];
    
    //remove height from tree
    a.forEach(function(item){
        if(item==-1){
            tree.push(-1);
        } else {
            tree.push(0);
            height.push(item);
        }
    });
    
    //sort height
    height.sort(function(a,b){
        return (a-b);
    });
    
    //insert height back to tree
    var insertIndex = 0;
    for(var i=0;i<tree.length; i++){
         if(tree[i]!=-1){
            tree[i] = height[insertIndex];
            insertIndex++;
        }
    }
    
    return tree;
}


