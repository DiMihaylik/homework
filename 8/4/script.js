const button = document.getElementById('button')
const input = document.getElementById('input')
const div = document.getElementById('div')

function fn (event) {

  console.log(input.value)
  
}

div.addEventListener('click', fn)