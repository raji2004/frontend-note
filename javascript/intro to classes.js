/**Object oriented programming part2: classes
 * classes in ES6 are just syntactical sugar over 
 * JavaScript's existing prototype based inheritance
 * Simple and clean syntax to create objects and take care 
 * of inheritance
 */
// class method: 
//const person = class  {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// const raj = new person("raji",19);
// console.log(raj)
class person{
  constructor(name, age){
    this.name = name;
    this.age = age;
 }
 greeting(){
    return 'classes are the coolest'
 }
}
const raj = new person("raji",19);
// console.log(raj)

// classes are not hoisted!
// person.prototype.greeting= function(){
//     console.log('i hate objects :D')
// }

class employee extends person{
   constructor(name,age,position){
      super(name,age);
      this.position = position;
   }
  saygreeting(){
    const pstring = super.greeting();
    console.log(`${this.name} thinks ${pstring}`)
  }
}

const pay = new employee('raj',25,'js jr dev')
// console.log(pay)
// pay.saygreeting()
// super keyword calls funvtions on an objectsprent class
// the super method comes b4 any this statement

class customer extends person{
   constructor(name= 'customer',age='n/a',contactmethod){
      super(name,age);
      this.contactmethod = contactmethod;
      this.accountcredit = null;
   }
   addcredit(amount){
      this.accountcredit += amount;
   }
   deductcredit(amount){
      this.accountcredit -= amount;
   }
   static saycustomern(...customers){
      for(const c of customers){
         console.log(`${c.name} is a customer`)
      }
   }
   static transfercredit(source,target){
      const amt = source.accountcredit
      target.accountcredit += amt
      source.accountcredit -=amt
      console.log('credit has been transfered succesfully')
   }
}
const customer1 = new customer('raji',20,'email');
const customer2 = new customer('timi',30,'mobile')
// customer.saycustomern(customer1,customer2)
// console.log(customer1.accountcredit);
customer1.addcredit(300)
// console.log(customer1.accountcredit);
// customer1.deductcredit(100)
// console.log(customer1.accountcredit);
// console.log(customer1);
// static classes are functions u can only call on the class 
// the can also be inherited with the super key word


class family{
   constructor(lastname,firstname,relationship){
      this.lastname = lastname;
      this.firstname = firstname;
      this.relationship= relationship;
   }
   sayfamilyname(){
      console.log(`we are the ${this.lastname}`)
   }
}
class familygroupp {
   constructor(parent=[]){
      this.parent = parent;
      this.children = [];
   }
   addchild(child){
      this.children.push(child)
   }
}
const smithfamily = {
   1:['raji','timi','dad'],
   2:['raji','fatima','mom'],
   3:['raji','adonis','child']
}
// const dad = new family('raji','timi','dad')
// const mom = new family('raji','fatima','mom')
// const tony = new family('raji','adonis','child')
// const rajis = new familygroupp([dad,mom])
// //  console.log(rajis)
//  rajis.addchild(tony)
// console.log(rajis)
const createfamilymembers = (famobj) => {
   const newfamgroup = new familygroupp() 
   for(const d in famobj){
      const[last,first,relationship] = famobj[d]
      const newmember = new family(last,first, relationship)
      if(relationship === 'dad' || relationship === 'mom'){
         newfamgroup.parent.push(newmember)
      }
      else{
         newfamgroup.children.push(newmember)
      }
   }
   console.log(newfamgroup)
}
createfamilymembers(smithfamily)









