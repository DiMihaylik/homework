const allDiv = document.getElementById('div')
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')

function fn (event) {

switch(event.target.id){
  case 'link1':
    div1.innerHTML = link1.innerText + ' '  + `(${link1})`
  break;
  case 'link2':
    div2.innerHTML = link1.innerText + ' '  + `(${link2})`
    break;
  
  case 'link3':
    div3.innerHTML = link1.innerText + ' '  + `(${link3})`
    break;
  
  }

}


allDiv.addEventListener('mouseover', fn)
