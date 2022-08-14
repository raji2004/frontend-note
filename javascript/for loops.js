/* for loops
 repeats until a conditions defines to false
 below is a for loop structure
 for(initial expression ; condition ; increment conditions){
    statement
 }*/
 const ice =['1','vanilla', 'chocolate','gum','cookie','india','niger','spain','korea']
 const user = prompt('what are u looking for')
 
 function namecheck(arr , name ){
    for(var index = 0; index< ice.length; index ++){
        console.log(index)
         
         
       if (arr[index] === name){
            console.log(arr[index])
            console.log('at index', index)
            break
        }
        
        
        
     }
     
     
}
namecheck(ice,user)
for(let i =1; i <=100; i++){
    if(i%15 === 0){
        console.log('multiple of two and five')
    }
    else if(i%3 === 0){
      console.log('multiple of three')
  }
  else if (i%5 === 0){
      console.log('multiple of 5')
  }
  else(
      console.log(i)
  )

} 
//--------------------------------------- using label to control a loop --------------------------
console.log("starting loop")
outerloop:
for(let i = 0; i<10; i++){
    
    console.log('loop#',i)
    innerloop:
    for(let a = 0; a<10; a++){
        console.log(' inner loop ',a)
        if (a > 4){
            break innerloop;
        }
       
    }
    if (i === 5){
        break outerloop
    }
}
console.log ('finished loop')

// using settimeout to print output after a particular amount of time
setTimeout(function(){
 console.log('one second has pass')
},1000)

   

for(let i=0; i<10; i++){
    setTimeout(()=>{console.log(i, 'seconds has passed');},i * 1000);


}








































