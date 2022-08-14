/**calls backs and promises
 * a way to write asynchronous javascript
 * 
 * callbacks:
 * its a functions that is passes to another functions
 * as a prameter
 * this inner functions is called at somepoint during the execution
 * of the containing function
 * in other words its called back at some specified point inside the containing functions body
 */

function first(callback){
    setTimeout(() => {
     console.log('i should be first') 
     callback() 
    }, 1000);
}
function second(){
    console.log('i should go second')
}


function sumofnum(num1,num2,cb){
    let sum;
    setTimeout(() => {
     sum = num1 + num2
     cb(sum)
    }, 1000);
}
function print(sum){
    console.log(sum)
}
// sumofnum(2,3,print)


function saydone(c){
    console.log(`done :D looped ${c} times`)
}
const c = ['p','o','r','n','h','u','b']
const names = ['angella','broski','daniel','corny']
function countdown(list,cb){
     let i = 0
    for( i ; i<list.length;i++){
        const name = list[i]
        const upper = name.charAt(0).toUpperCase() + name.slice(1)
        list[i] = upper
        console.log(list[i])
    }
    cb(i)
}
// countdown(names,saydone)





function logger(num1,num2,cb){
     const sqr = (num1*num1) + (num2*num2)
     console.log(sqr)
     //cb();
}
// logger(10,10)
const mydiv = document.getElementById('main');
const button = mydiv.querySelector('button');
const p = document.getElementById('blow');
const data = {
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae id doloribus esse nesciunt! Sit reiciendis similique necessitatibus asperiores illo aspernatur vitae dolorum perspiciatis veritatis repudiandae? Enim repudiandae dolor, consectetur iste laboriosam, incidunt blanditiis nostrum modi, vitae perspiciatis consequatur eos alias."
}
button.addEventListener('click',function(){
    requestdata(pop)
})

function requestdata(cb){
    const e = 'loading....'
    cb(e)
    // fake server request and response
     setTimeout(()=>{
      // response from server
      const dat = data.text;
      cb(dat)
     },3000) 

}
function pop(info){
    p.innerHTML = info 
}
















