/**
 * Created by iamoperand on 18/7/17.
 */


function notACurriedFunction(parameter1, parameter2, parameter3, parameter4){
    "use strict";

    return parameter1 + " " + parameter2 + " " + parameter3 + " " + parameter4;
}

console.log(notACurriedFunction("Not", "A", "Curried", "Function"));
