// while loop
/*
while(condition) {
    statement
}
*/
// noprotect
let numberofloops = 0;
while(numberofloops< 10){
    numberofloops +=1;
   // console.log(numberofloops)
   // console.log('i am looping')
}

let num1 = 0;
let num2 = 0;
while (num1 < 20){
    num1 +=1;
    num2 += num1;
   // console.log(num1)
   // loopde()
   if (num1 % 10 == 1  ){
      // console.log("i have looped 10 times")
       
   }
    
}
// console.log(num2)

function loopde(){
    // console.log("i have looped " + num1 + " time")
}

const names = ['chris', 'bob', 'joe', 'nana', 'josh'];

function nameloop(arr , username){
    let index = 0;
    while(index < arr.length){
        if (arr[index] === username){
            console.log(arr[index])
            console.log( 'at index',index)
            break
        }
        index += 1;
    }
}
nameloop(names, 'joe');

// do while loop
// do while  will run even if the condition is false the first time
// in other words it will run atleast once
/*
do{
    statement

} while(condition)
 */
let runonce = true;
let yet = 0
do{
    // console.log('run once')
    yet ++
    if (yet === 10){
    runonce = false;
    }
} while(runonce);

let condition;
do{
    const userinput = prompt('enter q at the exit')
    if (userinput === 'q') {
        condition = false;
    }
    else{
        condition = true
    }
} while(condition)
let money = 0;

do{
    
    canbuy();
    
}while(!money === 0)
function canbuy(){
    
    if(money > 500){
        console.log('can buy')
    }
    else{
        console.log('cannot buy')
    }
}







































































































