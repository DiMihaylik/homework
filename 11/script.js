
const arr = [1, 2, 3, 4, 5]; 

//[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

arr.splice(1, 0, 'a','b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');

console.log(arr)




// const area = document.getElementById('area');


// const getText = (e) => {

// const textArea = e.target.value;

// if (textArea !== '') {

//   localStorage.setItem('textArea', textArea)

//   textArea.innerText = localStorage.getItem('textArea')
  
//  }

// }

// area.addEventListener('change', getText);



// const divInp = document.getElementById('divInp')
// const input = document.getElementById('input')
// const btn = document.getElementById('btn')

// const now = Date.now()

// const test = (e) => {

// const inpVal = e.target.value;

// if (inpVal.match(/^\d{2}.\d{2}/)){

//   localStorage.setItem('inpVal', inpVal)
  
//   console.log(inpVal)

//   }

//   const birhdayUser = localStorage.getItem('inpVal')

//   const result = now - birhdayUser;

//   alert(result)

// }


// input.addEventListener('change', test);
// btn.addEventListener('click', test);



// const user =  {
//    name: 'Diana', 
//    age: 22,
// };

// const infoUser = document.cookie = `${user.name} ${user.age}`;

// console.log(infoUser)



