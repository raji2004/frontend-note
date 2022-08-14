/**object oriented javascript
 * oop: basic idea is that u use objects to represent real world things .
 * objects have own properties and functions (methods)
 * objects can contain data and other code like methods to represt
 * into of what your trying to model
 * data/methods inside the object is encapsulated
 * in classic oop, class is defined, then when an instance of that class
 *  is created all the properties and methods are copied(!!!) over
 * to the instance
 * javascript is what they call dynamic and  does not provide
 * a traditional class implementation per say
 * javascript inheritance is prototype based,
 * each object has a private property called the prototype
 * the prototyope can have a prototype of its own
 * nearly all objects in js are instances of objects
 * which sits ontop a prototype chain
 * tyhe prototypr properties value is an object
 * think of it as a bucket to store properties an methods
 * protype as a template and can have properties of its own
 * the prototype properties is where inherited members are defined
 */

// pretend this is a class
const myobj = {
    a:1,
    b:2,
    valueOf:()=>{
        console.log('got me')
    }
}
// console.log(myobj.valueOf())
/**does myobj prototype have a method called valueOf()
 * NO
 * does object prototype have a method called valueof()
 * YES
 */

const mystring = 'hello'
// console.log(mystring.charAt(3))
/**does mystring prototype have a method caled charAt()
 * NO
 * does string prototpye have a method called charAt()
 * YES
 */
// console.log(mystring.valueOf())
/**does mystring prototpye have method called valueOf()
 * NO
 * does string prototype have method called valueOf()
 * NO
 * does object prototype have method called valueOf()
 * YES
 * mystring > string > object
 */
// console.log(myobj.hasOwnProperty('a'))
const myarray = ['a','b','c','d']
 myarray.push('e')
//  console.log(Array.prototype)
const namw = {
    name: 'raji',
    age:19,
    sayname:function(){
        console.log(`my name is ${this.name}`);
    },
}

const name1 = Object.create(namw)
name1.name = 'timi'

// ------------------------------------------ object constructor ---------------------------------------------
function animal(name,age){
    this.name = name;
    this.age = age;
}
Object.prototype.saybreed = function(){
    console.log(`my dogs name is ${this.name}, it is a ${this.breed} species and it is ${this.age}yrs old`)
}
Object.saybreed()
const dog1  = new animal('spike',3,'labrador')
// dog1 inherits from prototype animal which inherist from prototype objects
const dog2 = new animal('spot',2,'golden retriver')
// dog1.saybreed()
animal.prototype.makenoise = function(){
    console.log(` generic animal noise `)
}
// dog1.saybreed()



//------------------------------------------------- object inheritance -----------------------------------------
function dog(name, age, breed){
  animal.call(this, name, age);
  this.breed = breed;
}
dog.prototype = Object.create(animal.prototype)
dog.prototype.constructor = dog;
dog.prototype.makenoise = function(){
    console.log(`bark bark woof`);
}
function cat(name, age, color){
    animal.call(this, name, age);
    this.color = color;
}
cat.prototype = Object.create(animal.prototype);
cat.prototype.constructor = cat;
cat.prototype.scratchpost = function(){
   if (this instanceof kitten){
    console.log(`kitty scratch post`)
   }else{console.log(`cat scracth post`)}
}

function kitten(name, age, color,litter){
    cat.call(this,name,age,color)
    this.litter = litter
}
kitten.prototype = Object.create(cat.prototype);
kitten.prototype.constructor = kitten;
   
const dog4 = new dog('spot',2,'golden retriver');
// dog4.makenoise()
const kitty = new cat('kit', 3, 'blue');
// kitty.makenoise();
// kitty.scratchpost();
// console.log(kitty)
const tinykitty = new kitten('spot',1,'red',5)
// kitty.scratchpost()






















