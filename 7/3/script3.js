const holder = document.getElementsByClassName('holder');

const div1 = document.createElement('div');
div1.className = 'item';
div1.innerHTML = '1';

const div2 = document.createElement('div');
div2.className = 'item';
div2.innerHTML = '2';

const div3 = document.createElement('div');
div3.className = 'item';
div3.innerHTML = '3';

const div4 = document.createElement('div');
div4.className = 'item';
div4.innerHTML = '4';

const div5 = document.createElement('div');
div5.className = 'item';
div5.innerHTML = '5';

let divs = [div1, div2, div3, div4, div5]

for(let i = 0; i < divs.length; i++){
  console.log(divs)
  holder[0].append(divs[i])
}





