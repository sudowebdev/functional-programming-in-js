/*
	Higher-Order Functions: A higher-order function is a function that can take another function as an argument,
	or that returns a function as a result
*/

function actualInnerFunction(){
    console.log("Hello from actualInnerFunction");
}

function higherOrderFunction(formalInnerFunction){
	formalInnerFunction();
}

higherOrderFunction(actualInnerFunction);