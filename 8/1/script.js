let p = document.getElementById('p');
let img = document.getElementById('img');


function fn () {

  img.src = './image/8290b39b6601efa615afd4bbd93d82320a039883_720_405_c.png'
  img.style.width = '100px';
  img.style.height = '100px';
  
}
 
function fn2 () {
  img.style.width = '200px';
  img.style.height = '200px';
  
}

function fn3 () {
  img.style.display = 'none'
}

p.addEventListener('click', fn)
img.addEventListener('mouseover', fn2)
img.addEventListener('click', fn3)