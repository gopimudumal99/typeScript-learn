// //code goes here
// const hobies = ['smoking','drinking']

// const person = {
//     firstName:"gopi",
//     age:22
// }

// function add(...numbers:number[]){
//     return numbers.reduce((curRes,preVal)=>{
//         return curRes+preVal
//     },0)
// }

// const combine = add(1,2,3,4,5,6,4)
// console.log(combine)

// // in array desturcturing always order they pull
// const [hoby1,hoby2, ...remaininghobies] = hobies
// console.log(hobies,hoby1,hoby2)

// //in objecti destucturing order not matters only key name is matters
// const {firstName:username,age} = person  // js syntxt
// console.log(username,age)

//! CLASS AND INHERITANCE
class Department {
  static yearStart = 2022;
  // private readonly id:string;
  // private name:string;
  //   private employees: string[] = []; //! it not acces from other class
  protected employees: string[] = [];

  constructor(protected id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department Name: ${this.name} id: ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo() {
    console.log(this.employees.length);
    console.table(this.employees);
  }
}

//!Inheritance
class ITDepartment extends Department {
  // admins:string[]
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT deparment id :" + this.id);
  }
}

class Accounting extends Department {
  private lastReport: string;
  private static instance : Accounting;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance (){
    if(Accounting.instance){
        return this.instance
    }
    this.instance = new Accounting('d2',[]);
    return this.instance
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw Error("No report found recenly");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw Error("please send valid value");
    }
    this.addReport(value);
  }

  addEmployee(employee: string) {
    if (employee === "gopi") return;
    this.employees.push(employee);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReport() {
    console.log(this.reports);
  }
}

let it = new ITDepartment("d1", ["gopi"]);
// it.employees[2]='gopi' //  use privite key not acces outside
console.log(Department.yearStart); // static can acces without using of new key word
it.addEmployee("Maxy");
it.addEmployee("nicky");
it.describe();
it.printEmployeesInfo();
console.log(it);

// let account = new Accounting("d2", []);
const account = Accounting.getInstance();
const account2 = Accounting.getInstance();
console.log(account,account2)
account.addEmployee("gopi");
account.addEmployee("omnath");
account.addReport("something new");
account.describe();
console.log(account.mostRecentReport);
account.mostRecentReport = "new report adding throw setter";
account.printReport();
account.printEmployeesInfo();
