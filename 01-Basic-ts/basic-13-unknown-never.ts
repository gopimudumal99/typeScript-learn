//! unknown type

let userInput : unknown;
let userName :string;

userInput = 5;
userInput = "ram";
// for unknown we need extra check for type value asign to variable
if(typeof userInput === 'string'){
    userName = userInput;
}


//! never Type

//? this function allways crashes of the script it return never

function generateError (message:string,code:number):never{
    throw {message:message,errCode:code}
    //while(true){}
}

let res = generateError('this code error',500)
console.log(res) // nothing is print



