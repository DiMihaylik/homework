
const div = document.getElementById('div');
const input = document.getElementById('input');
const button = document.getElementById('button');

function fn (event) {

  if (isNaN(input.value)) {

    input.value = '' 

  }
}

div.addEventListener('click', fn)