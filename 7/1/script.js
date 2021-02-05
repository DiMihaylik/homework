//1

let arr = ['Vasya', 'Petya', 'Alexey']

function removeUser (array, i) {

let ar = array.slice()

ar.splice(i,1)

 

return ar

}

let a = removeUser(arr, 1)
console.log(a) 



