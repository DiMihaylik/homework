//setTimeout

function printNumbers (from, to) {

  setTimeout(function time() {
    console.log(from)
    if(from < to) {
    setTimeout(time, 1000);
   }

    from++;

  }, 1000)

}

 printNumbers(1, 10)

//setInterval

let result = 0

function printNumbers (from, to) {

  if (result < to) {

  result += from

  console.log(result)

  } else {

  clearInterval(interval);

 }
 
}


let interval = setInterval(printNumbers, 1000, 1, 5)