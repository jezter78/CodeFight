function isLucky(n) {
    var ticket_array = n.toString().split("");
    var ticket_length = ticket_array.length;
    var first_sum = 0;
    var second_sum = 0;
    
    for(var i=0; i<ticket_length/2; i++){
        first_sum += parseInt(ticket_array[i]);
        second_sum += parseInt(ticket_array[ticket_length -1 - i]);
    }
    return first_sum == second_sum ? true:false;
}


