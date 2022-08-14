/**Map object
 * used for simple key/value pairs
 * any value can be used for either a key or value (i.e: objects string function)
 * reasons for using map over objects
 * object prototype has default keys that might conflict with own key
 * keys can be anything, whereas with objectss must be string or symbol
 * can easily get the size of map
 */
const mymap = new Map();
const first = 'kay'
const val = 'value4'
const thirdkey = function(){}
const fourth = {a:1,b:2,c:3}
const r = [1,23,4]
mymap.set('key','value')
// console.log(mymap.get('key'))
mymap.set('anotherkey','avalue')
mymap.set('anotherkey1','aalue')
mymap.set(first,val)
mymap.set(thirdkey,'another')
mymap.set(fourth,r)
// mymap.clear()
// console.log(mymap)


// iterating
// keys(), values(), entries()
for (const [key,value] of mymap.entries()){
    // console.log(`${key}=>${value}`)
}

const mapdata = [['keya','value one'],['keytwo','valuetwo']]
const anothermap = new Map(mapdata)
// console.log(anothermap)


// set object
/** lets u store unique values of anytype
 * each elements is unique
 */
const myset = new Set()
const obj = {a:1,b:2,c:3}
const obj2 = {x:1,y:2,z:3}
const arr = [1,2,3,4,5]
const str = 'hello there'
myset.add('bob')
myset.add(true)
myset.add(obj)
myset.add(obj2)
myset.add(arr)
myset.add(str)
console.log(myset.size)

// iterating in a set is the same as doing so in a map
// u can call keys() values() and the entries()

