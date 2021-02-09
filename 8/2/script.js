let arr = [1, 2, 3, 0, 4, 5, 6];

function sum (array) {

  let num = 0;

  array.reverse()

 for(let item of array) {

   if (item === 0){

     return num 
   }
   num += item
  }


  console.log(num)
}

sum(arr)

