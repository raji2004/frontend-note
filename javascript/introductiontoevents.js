// events
/**
 *it represent any event that takes place in the dom
 * it can be user generated or by any type of api
 * there many types of events
 * events constains properties and methods
 * addEventListener functions takes in an
 * event to listen for and second argument function to 
 * be called whenever the event is fires.
 *  addEventListener('click',()=> logic inside functions)
 */
 const color =['red','orange','black','yellow','teal']
const div = document.querySelector('.color')
const button = document.querySelector('button')
//  button.addEventListener('click',function(){
//   for(let c=0;c<color.length;c++){
      
//        div.style.backgroundColor = color[c]
//    }
// });
button.addEventListener('click',logevent);
function logevent(event){
    button.innerHTML = event.timeStamp;
    button.removeEventListener('click', logevent);
    console.log(event.type)

}

const back = document.getElementById('col')
const ul = back.querySelector('UL')
const all = back.querySelectorAll('LI')
document.addEventListener('click',sitch)
ul.addEventListener('click',addgreen)
function sitch(e){
    console.log(e)
    const c = back.contains(e.target)
    if(c){
        back.classList.add('color')
    }
    else{
        back.classList.remove('color')
    }
}
function addgreen(e){
  e.stopPropagation(sitch);
  const t = e.target
   const geen = document.querySelector('.gren')
   if(t.nodeName == 'UL'){
       return;
   }
   if(geen){
       geen.classList.remove('gren');
   }
   
   t.classList.add('gren')
   
}

const div2 = document.getElementById('div2')
const l = div2.querySelector('a')
const form = document.getElementById('my form')
l.addEventListener('click',(e)=>{
    e.preventDefault()
    l.innerText = 'hahaha this was a prank!'
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
   const n = e.target
   const inp = document.getElementById('myint').value
   newli = document.createElement('li')
   newli.innerText = inp
   ul.appendChild(newli)
   form.reset()
 })

const div3 = document.getElementById('div3')
const pa = div3.querySelector('p')
const text = div3.querySelector('textarea')
const ptext = 'user is typing'
const ton = div3.querySelector('button')
let timer;

text.addEventListener('keydown',addtext)
text.addEventListener('keyup',removetext)
ton.addEventListener('click',postm)
function addtext(e){
    pa.innerText = ptext
     
}
function removetext(e){
    clearTimeout(timer)
   timer = setTimeout(()=>{
    pa.innerText = ""
   },1000)
}

function postm(e){
    const v = text.value
    newli = document.createElement('li')
    newli.innerText= v
    ul.appendChild(newli)
    text.reset()
}







































