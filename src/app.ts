type Adimin = {
    name:string,
    privilages:string[]
}

type Employee = {
    name:string,
    startDate:Date,
}

type EvaluateEmploye = Adimin & Employee
//interface EvaluteEmploye extends Employee , admin {}

const e1:EvaluateEmploye={
    name:'gopi',
    privilages:['developer'],
    startDate:new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universe = Combinable & Numeric

function add(a:Combinable,b:Combinable){
  if(typeof a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString()
  }
  return a+b
}

type UnknownEmploye= Employee | Adimin

function printEmployeesInformation (emp:UnknownEmploye){
    console.log('Name '+ emp.name)
    if('privilages'in emp){
        console.log('Privilages '+emp.privilages)
    }

    if('startDate'in emp){
        console.log('StartDate: '+emp.startDate)
    }
}

printEmployeesInformation(e1)


class Car{
    drive(){
        console.log('drive a car......')
    }
}

class Truck{
    drive(){
        console.log('drive a Truck......')
    }
    loadin(amount:number){
        console.log("loading "+ amount)
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle (vehicle:Vehicle){
    vehicle.drive()
    // if("loadin" in vehicle){
    if(vehicle instanceof Truck){
        vehicle.loadin(10)
    }
}
useVehicle(v1)


interface Bird{
    type:'bird';
    flyingSpeed:number;
}

interface Horse{
    type:'horse';
    groundSpeed:number
}

type Animal = Bird | Horse

function movingSpeed (animal :Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
        break;
        case 'horse':
            speed = animal.groundSpeed;
        break;
    }
    console.log('Moving speed '+ speed)
}

movingSpeed({type:"bird",flyingSpeed:122})

// type Casting

const inputElemet =document.getElementById("num1")! as HTMLInputElement;
inputElemet.value = 'add'

interface ErrorContainer{
    [prop:string]:string
}

const errorBag : ErrorContainer= {
    email :"error mail",
    email2 :"nothing going to be wrong...."
}