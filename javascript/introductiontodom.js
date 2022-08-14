/** document object model(DOM)
 * it is a programming interface for html & xml documents
 *  it provides a structured representation of the documents(html)
 * defines methods to access the structure and manipulates it
 * connects web pages to script or other programming languages
 * dom is not a programming language
 * it provides a model of a web page
 * page content is stored in the dom and can be accessed and manipulated
 * 'the dom is a representation of the document as 
 * a structured group pf nodes that have objects
 *  and properties'- mozilla developer network
 */
//document.body.innerText = '<h1>something<h1>';
// const myp = document.getElementsByTagName('p');
// myp[1].innerHTML = 'i like food'
// for(const p of myp){
//     p.innerHTML = 'renammed :D';
// }
 const dummydiv = document.querySelector('.dummy span');
 //console.log(dummydiv.parentNode)
//   dummydiv.parentNode.Style.backgroundcolor = "green";
//  const testdiv = document.getElementById('test')
// console.log(testdiv.childNodes)
const allspan = document.getElementById('span')
// for(const prop of allspan){
//     prop.innerHTML = 'things'
// }
const div = document.getElementsByTagName('div')
const but = div[div.length-1]
but.id = 'bottom' 
but.innerHTML = 'i <span>am</span> a div'
but.style.color = 'black'
but.className = 'blue'
const sq = document.querySelector('.blue')
sq.style.backgroundColor = 'blue'
sq.style.width = '100px'
sq.style.height = '100px'

// const b = black[black.length-1]
//b.className = 'black'
const r = document.querySelector('.black')
// black.forEach((black)=> black.classList.add(' dummy foo'))

const b = document.querySelectorAll('.black')
b.forEach((b)=>{
    b.style.width = '100px'
    b.style.height = '100px'
    b.style.backgroundColor = 'black'
})
const cr = document.getElementById('created')
const favice =['vanilla','gum','strawberry','rockroad']
const newelement = document.createElement("div")


newelement.innerHTML = "i was made"
newelement.classList.add('purple')

console.log(newelement)
cr.appendChild(newelement)
const newlist = document.createElement('ul')

for(let p=0;p<favice.length;p++){
  const newli = document.createElement('li')
  newli.innerText = favice[p]
  newlist.appendChild(newli)
}
//newlist.appendChild(newli)

newelement.appendChild(newlist)
cr.appendChild(newelement)
const remov = newlist.childNodes[3]
// u can only remove direct children of a particular element
// cr.removeChild(newelement)
const black = document.querySelectorAll('div')
for(const pr of black){
  pr.classList.add('foo')
 }
setInterval(()=>{
  for(const pr of black){
    pr.classList.toggle('foo')
   }
}, 1000)
















