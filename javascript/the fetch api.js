// the fetch api
/**returns a promise */
const mydiv = document.getElementById('planet')
const b = mydiv.querySelector('button')
const t = document.getElementById('b')
b.addEventListener('click',getplanet)
t.addEventListener('click', getplanets)
function getplanet(){
    const randomnum = Math.floor(Math.random()*60)+1;
    fetch(`https://swapi.dev/api/planets/${randomnum}/`)
    .then(data => data.json())
    .then(data=>populateplanet(data))
    .catch(err=>console.log(err))
    
}
function getplanets(){
  fetch(`https://swapi.dev/api/planets/`)
  .then(data => data.json())
  .then(data=> process(data.results))
  .catch(err=>console.log(err))
}
function process(parray){
     for(const [i, d] of parray.entries()){
      populateplanet(d, i)
     }
}


function populateplanet(planetobj){
   const {name, climate, terrain, population,orbital_period} = planetobj
   let pop;
      if(population >0 && population <= 1000000){
        pop = 'low'
      }
      else if(population > 1000000 && population < 1000000000){
        pop = 'medium'
      }
      else if(population > 1000000000 ){
        pop = 'high'
      }
      else{
        pop = 'unknown'
      }
   
   const pdiv = `
         <div class="planets" data-pop=${pop}  >
           <h1>${name}</h1>
           <pre>
             planet ${name} has a ${climate} wheather today
             the terrain is ${terrain},
             population: ${ population === 'unknown'? pop = population : pop = parseInt(population).toLocaleString() }
             orbitals is ${orbital_period} days
           </pre>
         </div>
   `
   mydiv.insertAdjacentHTML('beforeend',pdiv)
   
}
const but = document.getElementById('c')
but.addEventListener('click',show)
const allp = document.getElementsByClassName('planets')
function show(){
  for(const prop of allp){
    if(prop.dataset.pop === 'unknown'){
      prop.style.backgroundColor = 'yellow'
    }
  }
}

const select = document.getElementById('sel')
select.addEventListener('change',selecte)
function selecte (e){
  const { value } = e.target;
  //prop.style.background = 'white'
  for (const prop of allp){
    if(prop.dataset.population === value){
      prop.style.background = 'black'
    }
  }
}