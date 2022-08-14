/**template literals
 * string literals allowing embedded expressions
 * make it easier to make multi line strings
 * allows string interpolation
 * enclosed in back-ticks(` string goes in here `) instead of your 
 * normal qoutes
 * can contain placeholders
 */
// var myfirstname = 'chris'
// var mylastname = 'jones'
// var age = 30
// // console.log('hello', myfirstname,mylastname,'i am',age,'yrs old')

// const ne = ` 
//      <ul>
//         <h1>literals are the best :D</h1>
//         <li> i am item1</li>
//         <li> i am item2</li>
//         <li> i am item3</li>
//         <li> i am item4</li>
//      </ul>
// `
// const div = document.getElementById('mydiv')
// div.innerHTML = ne
// console.log(`hello ${myfirstname} ${mylastname} i am ${age} yrs old`)
// const istrue = true
// console.log(`is true ${!istrue}`)
// const datenow = new Date()
// console.log(`today is ${datenow.toLocaleString()}`)
// console.log(`result is ${50*100}`)


// // const arr = [1,2,3,4,5,6]
// // console.log(`${arr.map((arr)=>` ${arr + 5}`)}`)
// const reasonstokillmyself = ['school','stress','grades','depression','and many more......']
// const count = 0
// const killmediv = (`
//    <article>
//        <h1>
//          reasons to die
//        </h1>
//        <ul>
//            ${reasonstokillmyself.map((iwanttodie)=>`<li>reason  ${iwanttodie}</li>`).join('\n')}
//          </ul>
//    </article>
// `)

// div.innerHTML = killmediv
// function t(arrofstrings,expression1,expression2){
//    console.log(`"${arrofstrings}","${expression1}","${expression2}"`)
// }

// const mytpass = t`i am ${myfirstname},  i am ${mylastname},  i am${age}`

/**-------------------------DESTRUCTURING---------------------------
 * The destructuring assingment syntax is a js expression 
 * that makes it possibl to extract data from arrays or objects
 * into distinct variables - mozila developer network
 * 
 * Destructuring syntaxt can be used on left hand of assigntments 
 */
//-------------------------- array destructuring -------------------------------------
const myarray = [1,2,3,4,5,6]
const [p,o,r,n,h,u,b] = myarray


const mysecondarray = ['jane','rey','rat']
let name1,name2,name3,name4
[name1,name2,name3,name4='i am a default :D'] = mysecondarray

//-------------------------- swap two variables ------------------------------
let aa = 100  ;
let bb = 250;
let cc = 500;
// console.log(aa, bb, cc);
[bb, cc] = [cc, bb]
//---------------------- destructuring with functions -----------------------
function returnarray(){
   return ['r','t','y','u','i','o']
}
const [gt,yy,uu,ii,oo] = returnarray()

function search(arr,output){
        return arr.filter((t)=> t === output)
}
const [t] = search([1,2,3,4,5,6,7],8)

// ------------------------- to ignore some values -------------------------------
const an = [15,67,89,07,65,43,12]
const [num2,num5,,num6,,numt,] = an


//------------------------------- using rest pattern --------------------------
// function hi(firstarg,...restofargs){
//    console.log(`hi ,${firstarg} `)
//    console.log(restofargs)
// }
// hi('raji','dad','uncle','t')

const yet = ['dogs','cats','snakes',false]
const [arg,args,...rest] = yet
// console.log(arg)
// console.log(args)
// console.log(...rest)
// console.log(rest)
//--------------------------- destructuring objects -----------------------------
const myobj = {firstname : 'chris', lastname: 'jones', age:10,hieght:'6ft'};
const {firstname,lastname,age,hieght} = myobj;
// console.log(firstname,lastname,age,hieght)
let myvar1,myvar2;
const myobj2 = {myvar1:'a',myvar2:'b'};
({myvar1,myvar2} = myobj2);

//------------------------------- assigning new variable names ----------------------------------
const myobj3 = { q:'cool',w:'oh yh',e:'nice',c:'fuck it'};
const{q: cool,w: yh,e: nice,c: awesome} = myobj3;
// console.log(awesome)

// -------------- passing default values in objects --------------
const myobj5 = {a1:10,b1:20,c1:40};
const {a1,b1,c1,d1=60} = myobj5
// console.log(a1,b1,c1,d1)
function stateuser({user = 'bob', membertype}){
        console.log(`username: ${user}, membertype: ${membertype}`)
}

// stateuser({user:'steve', membertype: 'standard'})

function sayifvalid({prop: s}){
        console.log(s)
}
const myobj6 = { prop: 'i am valid',proop: 'i am pornhub',pro:'i love u'}

// sayifvalid(myobj6)
// the function is taking just the value of prop that has been defined!!!!


//----------------------------- nested data destructuring ---------------------------------
const myobj7 = { title : 'my address book', entries:[
{ name:'tob',number:'099-999',address: [1,2,3,4,5,6],other:{cell:'333-5555', email: 'raj2004'}},
{name:'tb',number:'049-999',address: [1,2,3,7,5,6],other:{cell:'33-5555', email: 'aj2004'}},
{name:'b',number:'99-999',address: [t,2,3,4,5,6],other:{cell:'3555-5555', email: 'raj204'}}], phone: "555-1111"};
const{title,entries }= myobj7;
for(const {name, number,other:{email,cell}} of entries){
        console.log(`name: ${name}, #:${number}, email:${email}, othercell:${cell}`);
};
























