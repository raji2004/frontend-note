/*
" a functions is a java scrips procedure- a set of statements
that performs a task or calculate a value. [....]
"
- mozilla developer netwoek (if youre looking for references)
*/


function sayhi(username , last){
    
    console.log("hi " + username + " " + last);
}
const billy = "billy";
const chris = "chris";

sayhi(billy,chris);
// use of the return key word
function numdouble(num){
    return(num*2);
}
console.log(numdouble(10))

const twodoublenum = numdouble(2);
const fivedoublenum = numdouble(5);5

function adder(num1, num2){
    return num1 + num2;
}

console.log(adder(twodoublenum,fivedoublenum))


const myname = "chris"
function sathi(myname){
    if(!myname){
        var myname = "bo"
    }
    console.log("hi " + myname)
}
sathi(myname)


// -----------function expression------------------
var tyhi = function(thyname){
    if(!thyname){
        var myname = "bob"
    }
    console.log("hi "+thyname)
}
tyhi("raji")

const sqr = function(num){
    return num * num;
}

const  add = function(num1,num2){
    return num1 + num2;
}
console.log(add(sqr(10), 5))

let mynum = 100;
function addtwenty(num){
    return num + 20;
}
console.log(addtwenty(mynum))
console.log(mynum)
//------------- nested functions ------------------------
function productandsquare(num1,num2){
    function square(x){
return x * x;
    }
    function multiplyby10(y){
        return y * 10;
    }

    return square(num1) * multiplyby10(num2)
}
const first = productandsquare(2,2)
const second = productandsquare(3,4)
console.log(first + second)


function personformat(fn,ln,age){
    function nameformat(arg1,arg2){
        return arg1 + " " + arg2;
    }
   
   
   function dataformat(fullname, num){
       const formatdata = {
           name: fullname,
           age: num
       }
       return formatdata;
   }
   const formatnamw = nameformat(fn,ln);
   return dataformat(formatnamw,age);
}

console.log(personformat("chris","jones",20));


// ----------------- advanced functions ---------------------
/* arrow functions is a more coinscice 
  way of writing functions as expresions */
var sayhi = ()=> {
    console.log("hi im an an arrow function");
}

sayhi();

const multiplier = (num1, num2) =>{
    return num1 * num2;
}
console.log(multiplier(5,10))

// using built in mapping functions in javascript
const users = [
    {name: "chris", age: 60},
    {name: "jane", age: 30},
    {name: "billy", age: 20}
];
const mapusernames = mayarr =>
  mayarr.map((user) => 
     user.name
    ); 
    


console.log(mapusernames(users));


// if your function expression is returning a single value
// u can skip the curly brackets
const multiplir = (x,y) => x * y;

console.log(multiplir(2,3))


// if u have  just one 
// argument in your function expression u can skip thr braket
const addim = num => num * num;

console.log (addim(10))



// using .filter to return an array  of wat u need to filter
const numbers = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];
const filternum = numbers.filter( num =>
    num % 2 === 0
)

console.log(filternum);


const double = (num) => {
    const numcontainer = [];
    num.forEach((n) => {
     const double = n * 2;
     numcontainer.push(double);
    });
    return numcontainer;
}
console.log(double(numbers));

// using default vlues
function numbermulti(x=5,y=6){
   
    return x * y;

}
console.log(numbermulti(2))

const inti=  "i am fine"
function stringsplitter(arr= "how are you"){
  return arr.split(" "); 
}

console.log(stringsplitter("onegai onichan desuu"))

const bankacc = {
    canspendmoney: true,
    hascreditcard: true,
    balance: 100
}

function canbuy(price , acc=bankacc){
    if (acc.canspendmoney){
        acc.balance -= price;
        if (acc.balance <= 0){
            acc.canspendmoney = false;
        }
        return true;
    }
    else{
        return false;
    }
}
console.log(canbuy(10))
console.log(bankacc)
console.log(canbuy(10))

// USIng an undifined number of arguments and figure out wat they are

function logallarguments(x, ...nums){
console.log(nums.sort() , nums.length);
}
 logallarguments(10,5,1,3,6);


 function multiply(multi, ...numsa){
    return numsa.map((n) => multi * n)
    }
     console.log(multiply(10,5,1,3,6))

// constructing a function
function dog(yr, breed){
    this.age = yr;
    this.type = breed;
}
   const spike = new dog(3, "golden retriever") 
   console.log(spike)









































































































































































