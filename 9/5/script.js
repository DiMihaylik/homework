const ulList = document.getElementById('ulList');
const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const li = document.querySelectorAll('.li')
// const allLi = document.querySelectorAll('ul li')

function getSum () {

let result = 0;

let arr = [];

li.forEach(({innerHTML}) => {

  if(!isNaN(innerHTML)){

    arr.push(innerHTML)

    result += +innerHTML

  }
});
 inp.value = `${arr.join(' + ')} = ${result}`
}

btn.addEventListener('click', getSum)