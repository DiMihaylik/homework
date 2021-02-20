
let result = 0

function funcInterval (from) {
  
  result += from

  console.log('Прошло: ' + result + ' сек.')

  if(result === 5){

  clearInterval(interval)

 }
 
}

let interval = setInterval(funcInterval,1000, 1)