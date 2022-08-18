// === Take a callback function as an argument & call
function receivesAFunction(receivedFunction){
    receivedFunction()
}

// === Take no arguments & return a named function
function returnsANamedFunction(){
    return returnsANamedFunction;
}

// === Takes no arguments & returns an anonymous function
function returnsAnAnonymousFunction() {
    return () => {return "this is an anonymous function";
}}