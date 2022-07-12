// function add(num1:number,num2:number,showResult:boolean,parse:string):number|string|undefined{
//     let res = num1+num2
//     if(showResult){
//         console.log(parse + res);
//     }else{
//         return res;
//     }
// }

// const n1 = 5;
// const n2 = 19;
// const showResult = true

// add(n1,n2,showResult,'Result is: ')
// console.log(res)/

// //! 2nd
// enum Role {ADMIN, READ_ONLY, AUTHOR};

// let person: {
//   name: string;
//   age: number;
//   hobies: string[];
// } = {
//   name: "gopi",
//   age: 23,
//   hobies: ["sports", "cooking"],
// };


// let favActives: string[];
// favActives = ["sport"];
// console.log(person.name);

// for (const hoby of person.hobies) {
//   console.log(hoby.toUpperCase());
// }

//! type Alies and objects
// type Combinabe = number

//!fuction return types and void

function add(n1:number,n2:number):number{
  return n1+n2
}

// this function as no return type so it will be void
function printResult(num:number):void{
  console.log('Result is ' + num)
}

function addAndHandle (n1:number,n2:number,cb:(a:number)=>void){
  let res = n1+n2;
  cb(res)
}
// printResult(add(10,29))

//! function and types

let combineResult:(a:number,b:number)=>number
combineResult = add
// combineResult = printResult

// console.log(combineResult(18,10))

//! Fucion types & calbacks
addAndHandle(2,3,(res)=>{
  console.log(res)
})
