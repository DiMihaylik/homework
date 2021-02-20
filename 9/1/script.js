function fib (num) {

  let first = 0;

  let next = 1;

for(let i = 0; i < num; i++) {
   
  next = first + next;

  first = next - first;
}

return first

}

fib()

function fib (n) {

  if (n === 1 || n === 2 ){

     return 1 

  }

  else if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)){

     return alert('ERROR!)!!)000!)!)!)!')

  }

  return fib(n - 1) + fib(n - 2)
  
}