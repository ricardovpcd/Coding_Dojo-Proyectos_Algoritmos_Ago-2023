// EJERCICIO 1
/*var number = 2016;

while(number > 0){
    console.log(number);
    number = number - 4;
}*/


// EJERCICIO 2
function cuentaRegresiva(lowNum, highNum, mult){
    for(var i = highNum; i >= lowNum; i--){
        if(i % mult == 0){
            console.log(i);
        }
    }
}

//cuentaRegresiva(2, 9, 2);

// EJERCICIO 3
function cuentaAdelante(param1, param2, param3, param4){
    while(param2 <= param3){
        if(param2 % param1 == 0 && param2 != param4){
            console.log(param2);
        }

        param2++;
    }
}

cuentaAdelante(3, 5, 17, 9);