function fibo(nguong){
        var number1 = 0;
        var number2 = 1;
        var number3;

        var arr =[];
        
        
     arr.push(number1)
     arr.push(number2)
    for ( i=0; i<nguong; i++){
        number3= number1+ number2;
        if(number3 <nguong){
             arr.push(number3)
            number1= number2;
            number2= number3;

        }

    }
    return arr; 
}
var arrFibo = fibo(400);



for( i=0; i<= arrFibo.length; i++){
    var sole = arrFibo[i]
    if(arrFibo[i]%2 ==!0){
        console.log(sole);
    }
}
















