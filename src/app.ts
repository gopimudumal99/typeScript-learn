function Login(loginString:string){
    return function(constructor:Function){
        console.log(loginString)
        console.log(constructor)
    }
}

function wWthTemplate(template:string,temId:string){
    return function(_:Function){
        const element = document.getElementById(temId)!
        if(element){
            element.innerHTML = template
        }
    }

}


// @Login('LOGIN-GOPI')
@wWthTemplate('<h1> HI I AM GOPI </h1>','app')
class Person {
    name = 'gopi'

    constructor(){
        console.log('constuctor is running .....')
    }
}

let p1 = new Person()
console.log(p1)


// 

function Autobind(_:any, _2:string , descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable:true,
        enumerable:false,
        get(){
            const bondFun = originalMethod.bind(this)
            return bondFun
        },

    };
    return adjDescriptor;
}
class Printer{
    message = 'This works ! '
    @Autobind
    showMessage (){
        console.log(this.message)
    }
}

const p = new Printer()

const button = document.querySelector('button')
button?.addEventListener('click',p.showMessage)


//

interface ValidatorConfig{
    [property:string]:{
        [validableProp:string]:string[]
    }
}

const registerValidators: ValidatorConfig ={}

function Required(target:any,propName:string){
    registerValidators[target.constructor.name] ={
       ...registerValidators[target.constructor.name],
        [propName]:['required']
    }
}

function PositiveNumb(target:any,propName:string){
    registerValidators[target.constructor.name] ={
        ...registerValidators[target.constructor.name],
        [propName]:['positive']
    }
}

function validate(obj:any){
    const objValidatorConfig = registerValidators[obj.constructor.name];
    if(!objValidatorConfig){
        return true
    }
    let isValid = true
    for(const prop in objValidatorConfig){
        for(const validator of objValidatorConfig[prop]){
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop]>0;
                    break;
            }
        }
    }
    return isValid
}
class Course{
    @Required
    title:string;
    @PositiveNumb
    price:number;

    constructor(t:string,p:number){
        this.title = t;
        this.price = p;
    }

}

const couseForm = document.querySelector('form')!
couseForm.addEventListener('submit',e=>{
    e.preventDefault()
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;
    const title = titleEl.value;
    const price = +priceEl.value;

    const createCource = new Course(title,price)
    if(!validate(createCource)){
        alert('Invalid input, please try again!');
        return
    }
    console.log(createCource)

})