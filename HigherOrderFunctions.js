/*
	Higher-Order Functions: Functions into which other functions are passed as arguments
*/

function actualInnerFunction(){
    console.log("Hello from actualInnerFunction");
}

function higherOrderFunction(formalInnerFunction){
	formalInnerFunction();
}

higherOrderFunction(actualInnerFunction);