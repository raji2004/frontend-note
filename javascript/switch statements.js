const fruit = 'adftrd3c';
switch(fruit){
    case 'apple':
        console.log('i love aapples');
        break;
    case 'dog':
        console.log('dogs are good too');
        break;
    case 'pear':
        console.log('pears are the best');
        break;
    case 'banana':
        console.log('ok');
        break;
    default:
    console.log('that sounds nice');
}


function numcheck(num){
    let value;    
    switch(num){
        case 0:
        case 1:
        case 2:
            value = volume('low range') ;
            break;
        case 3:
        case 4:
        case 5:
        case 6:
            value = volume('mid range') ;
            break;
        case 7:
        case 8:
        case 9:
            value = volume('high range');
            break;   
        default:
            value = 'input a number between 0-9';
            
    }
    console.log(value)
    
}
function volume(n){
    const loud = 'volume is at ' + n
    return loud
 }
numcheck(100)





















