// for in loop
/*
 it loops through an obkect's properties in arbitrary order
 it is mosstly used on objects
*/
const users ={1: 'sally', 2:'billy', 3:'ashley',4:'timi'}
for(let key in users){
  console.log(key)
}
const user =[ 'sally', 'billy', 'ashley','timi']
user.forEach((user) => {
        console.log(user);
    });
// for in loops are more customizable than a for each loop
// for in is ued for looping over object properties
for (let d in user){
    if(user[d] === 'ashley'){
        console.log(user[d])
        break;
    }
}
// for of loop
/*
new loop used in es6 to loop over iterable objects(arrays strings maps and sets)
it is used for looping over data
*/
for (const d of user){
    if(user[d] === 'ashley'){
     console.log(user[d])
     break;
    }
}

const ogarray =['billy', 'sally','sally','billy']
const unique = new setInterval(ogarray)
for(const n of unique){
    console.log(n)
}







