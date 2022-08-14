// object property shorthands
const a = 10
const b = 20
const c = 30
const d = {
    a: a,
    b:b,
    c:c
}
const e = {
    a,
    b,
    c
}
const {b: yetb} = e
// console.log(yetb)
 
function obj(x,y,z,numt){
    const alllobj = []
    for(let i=0;i<numt;i++){
        const newobj = {
            x: i+1,
            y,
            z
        }
        alllobj.push(newobj)
    }
   return alllobj
}

const bob = obj(10,'t',true,2)
const{x : bobid, y: nam, z:boolean} = bob[1]
// console.log(bobid,nam,boolean)

// computed property key
/**allows use of [] which will evaluated as the property name */
 let id = 1
 const idpara = 'userid'
const computedobj = {
    [idpara + (id++)] : '10343422',
    [idpara + (id++)] : '1034422',
    [idpara + (id++)] : '103453422',
    [idpara + (id++)] : '1034342',
    [idpara + (id++)] : '1034345422',
    [idpara + (id++)] : '103422',
    [idpara + (id++)] : '103432345422',
}
// console.log(computedobj)
function capital(word){
    const a = word.charAt(0).toUpperCase()
    const b = word.slice(1).toLowerCase()
    return a+b
}

const obj111 = {
    [capital('hello')]: 'me',
    [capital('ALLCAPS')]: 'you'

}
// console.log(obj111)
function dataformant(arr){
    const formatobj = {}
    for (const prop of arr){
        formatobj['userid'+prop.x]=prop
    }
    return formatobj
}
console.log(dataformant(bob))
