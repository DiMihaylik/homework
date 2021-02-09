const div = document.getElementById('div')
const button = document.getElementById('button')
const p = document.getElementById('p')

function fn (event) {

  event.target.value

  p.innerText = ' '

}

div.addEventListener('click', fn)