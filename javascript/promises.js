/**promises
 * a promise is proxy for a value not necessarily known
 * when the promise is created
 * promises are also used for asynchronous computation
 * a promises exist in these states:
 * pending: initial stae not fulfilled
 * fulfilled
 * rejected
 */
// const tpromise = new Promise((resolve,reject)=>{
//     if(Math.random()> 0.5){
//         reject('promise no good')
//     }
//       setTimeout(()=>{
//         resolve("promises ok");
//       },5000);
// });
// tpromise.then((resolvemessage)=>{
//     console.log(`looks like: ${resolvemessage}`);
// }).then(()=>{
//     console.log('i should run after5')
// }).catch((reject)=>{
//     console.log(`error ${reject}`)
// })


function numadder(n1,n2){
    return new Promise((resolve,reject)=>{
        const add = n1+n2
        setTimeout(() => {
            resolve(add)
        }, 1000);
    })
}
function numsqr (n){
    return new Promise((resolve,reject)=>{
        const s = n*n
        setTimeout(() => {
            resolve(s)
        }, 100);
    })
}
// numadder(1,2)
// .then((data)=> { 
//     return numsqr(data)
// })
// .then((mdata)=> {
//     console.log(mdata)
// })
function alwaysresolve(){
    return Promise.resolve('i love resolving :D')
}
// alwaysresolve().then(data=>console.log(data))
const prom = Promise.resolve([12,13,14])
// prom
//    .then(num=>num.map(num=>num*10))
//    .then(tnum => console.log(tnum))
const pro = Promise.resolve({text:"resolved :D"})
// pro
// .then(data=>console.log(data.text))

// Promise.resolve()
//     .then((res)=>{
//         console.log('r')
//      },
//     err =>{ console.log('b')
        
//     }
//     )
    
function timelog(message , time){
    return new Promise((resolve,reject) => {
     setTimeout(()=>{
        resolve(message)
    },time)
    if(typeof message !== 'string' || typeof time !== 'number'){
        reject();
    }
})
}
// timelog('first',1000)
// .then(message => {console.log(message)
//       return timelog('second',800)
//       .then(m =>{
//         console.log(m)
//         return timelog('third',500)
//         .then(t => console.log(t))
//       })
// })
// .catch(err => console.log('incorrect message type'))
// Promise.resolve('hi')
// .then(string=> {
//     return new ssPromise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(string+" there")
//            },1)
//     })
    
// }).then(string=>{
//     console.log(string)
// })

const p1 = Promise.resolve('A')
const p2 = Promise.resolve('B')
const p3 = Promise.resolve('C')
const p4 = Promise.resolve('D')

Promise.all([p1,p2,p3,p4])
.then(data=>console.log(data))