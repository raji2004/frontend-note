// more es6 features

// spread syntax
/**
 * can be used in places were (e.g.) functions
 * expect multiplw arguments,multiple elements or multiple variables
 */

function spread(...args){
    console.log(args)
}
const myarr = [1,2,3,4,5]
const mysecondarr =[6,7,8,9]
const mythirdarr = [...myarr,...mysecondarr,10]
// or
// myarr.push(...mysecondarr)
// console.log(mythirdarr)

function say(x,y,z){
    console.log(`hello ${x},${y},${z}`)
}
const h = ['bod','jane','annie']
// say(...h)

// concat()
const arr = ['jelly beans']
const arr2 = ['donuts','chocolate']
const arr3 =['pie','lemonade']
const newarr = arr.concat(arr2,arr3)
// console.log(newarr)

const carparts =['gaskets','tire','radiator','muffer']
const lparts = ['wipers','headlights']
function listinserter(arr1,arr2,index){
       const arr3 = arr1.slice(0,index)
       const arr4 = arr1.slice(index)
       const  arr5 = [...arr3,...arr2,...arr4]
       console.log(arr5)
}
// listinserter(carparts,lparts,0)
const tarr =[10,12,13,14,15,16]
// const yetarr = [...tarr]


// rest operator
function manyargs(...allargs){
   for(const prop of allargs){
    console.log(prop+10)
   }
}
manyargs(1,2,3,4,5,6,7,8,900,8,7,65,4,657,9,6,5,34,6,8,64,3,4,56,7,9,65,3,2,4,6,422,3,5,77,54,3,2,4,567,7,3,4,57,8,7,54,4,5,78,5,4,3,5,7,7,6,5,4,33,4,6,7,65,4,5,7,)




