//!GENERICS TYPES
// const names : Array<string>=['gopi','sagar'];

// const promise :Promise<string>= new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hi i am Promise")
//     },1000)
// })


//! CREATING OWN GENERIC FUNCTION
// function merge<T, U>(obj1: T, obj2: U): T & U
// function merge<T,U>(obj1:T,obj2:U){
//     return Object.assign(obj1,obj2)
// }

// const mergeObj = merge({name:'gopi'},{age:10})

// console.log(mergeObj)

//!woriking with constraints
// function merge<T extends object,U extends object>(obj1:T,obj2:U){
//     return Object.assign(obj1,obj2)
// }

// const mergeObj = merge({name:'gopi',hobies:['sports','dance']},10)  // now its shows error

//! Another Generic Function

// interface Lengthy{
//     length:number
// }

// function countAndDescribe<T extends Lengthy> (el:T){
//     let des = 'Go no value'
//     if(el.length==1){
//         des='Got 1 element.'
//     }else if(el.length >1){
//         des = `Got ${el.length} elements.`
//     }
//     return [el,des]
// }
// console.log(countAndDescribe("hi full happy"))

//! keyOf constraints
// function extractAndConver<T extends object,U extends keyof T>(obj:T,key:U){
//   return 'value '+ obj[key];
// }
// extractAndConver({name:"gopi"},'name')

//! Generic Classes
// class DataStorage<T extends string | number | boolean> {
//     private data:T[] = []

//     addItem (item:T){
//         this.data.push(item)
//     }
//     removeItem(item:T){
//         this.data.splice(this.data.indexOf(item),1)
//     }
//     getItems(){
//         return [...this.data]
//     }
// }

// const stringStorage = new DataStorage<string>();
// stringStorage.addItem("max")
// stringStorage.addItem("mamul")
// stringStorage.addItem('gopi')
// stringStorage.removeItem('mamul')
// console.log(stringStorage.getItems())

//! Generic Utilies Types
// interface  CourseGoal{
//     title:string;
//     description:string;
//     completeUnitl:Date;
// }

// function createCourseGoal(){

// }

//! Generic Types v/s Union Types
