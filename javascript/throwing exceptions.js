/** exception handling
 *  throw your own exceptions
 * use the throw statement to throw own exception
 * you specify the expression containing the value to be thrown
 * eg; throw exception
 * can throw any expression
 */
// function checkifnum(n){
//     if(isNaN(n)){
//         throw 'this is not a number'
//     } else{
//         console.log(n+' is a number')
//     }
// }
// checkifnum('yu')
function myexception(message){
    this.message = message;
    this.name = 'my exception';
    this.tostring = () => {
        console.log(this.name + ": " + this.message)
    }
}
// const exception = new myexcept('hi')
// console.log(exception)
//throw new myexception(' invalid');

//---------------------- try,catch,finally ---------------------------
// try....catch
/**it marks a block of code to try
 * and u can catch the error and manipuate
 */
// try{
//     throw 'exception!'
// }
// catch(e){
//     console.log(e)
// }

let mynum = 20;
 function checkifnum(num){
     if(isNaN(num)){
         throw 'not a number'
     } else{
         console.log('yes,this a number')
     }
 }
 function errorhandler(e){
     myErrorLog.push(e);
 }
 try{
//checkifnum('s');
 }
 catch(e){
     errorhandler(e);
 }
function Mystring(s){
     if(typeof s === 'string'){
         this.value = s;
         this.getvalue = function(){
             console.log( 'your string: '+ this.value +'.');
         }
     }
     else{
        throw new stringexceptionerror(s);
     }
}
function stringexceptionerror(value){
    this.value = value;
    this.message = 'must be a string';
    this.tostring = function(){
      return this.value + ': '+ this.message;
      ;
    }
}
function verifystring(s){
   let str;
    try{
     str = new Mystring(s);
    }
    catch(e){
        if (e instanceof stringexceptionerror){
            console.log( e );
        }else{ console.log('other exceptions');}
    }
    finally{
        console.log('always')
    }
   return str;
}
const a = verifystring('i am a string');
const b = verifystring(true);
const c = verifystring(4322344);

// even if you have return statment in your catch block 
// the finally code block will always run 
// the finally code block return statement is above all other return statements in your try catch and finally











