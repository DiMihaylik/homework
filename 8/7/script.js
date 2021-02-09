
//не работает

const div = document.getElementById('div');
const input = document.getElementById('input');
const button = document.getElementById('button');

function fn (event) {

  if (typeof event.target.value === 'number') {

    console.log('ok')

  } else {

    event.preventDefault()

  }

}

div.addEventListener('click', fn)