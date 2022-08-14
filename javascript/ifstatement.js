// if statement
const hi = true;
if(hi===true){
    console.log("hi there")
}
// never use a single = cuz it means your 
// assinging a new value
// advisable to use three = (===)
// difference between == and ===
//=== is known as the identity operator
// == is known as the equality operator (it does type conversion)

const five = 5;
console.log(typeof five);
const stringfive= "5";
console.log(typeof stringfive);

console.log(five === stringfive);
console.log(five == stringfive);

// double = converts the data your are trying to compare to make them similar
// use the "parseint()" function to cinverse strings to integers
const myfno = 123;
const mysno = 120;
if (myfno > mysno) {
    console.log("hi there!")
}
// !== is the not equal to operator
// ---------------- logic operators -------------------------
// bab (bank account balance)
// coi (const of item)
const bab = 120;
const coi = 123;
const tax = 0.30;
const hascreditcard = true;
const canspendmoney = true;
const creditlimit = false;
if (bab >= coi && canspendmoney === true){
    console.log("you can buy")
    
}
// && is the logical operator for "and" in java script
if (bab >= coi || canspendmoney === true){
    console.log("you can buy")
    
}
// "||" is the logical operator for "and " in java script

// "!" is the logical operator for "not" in javascript

if((bab >= coi) || (hascreditcard && !creditlimit)){
    console.log(" you can purchase")
}



//----------------- else and elseif ---------------------------
if(bab >= coi) {
    console.log(" you can purchase")
} 
else if(hascreditcard && !creditlimit){
    console.log("you can buy")
}

else{
    console.log("you cannot buy :(")
}





















