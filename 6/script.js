//1

function Animal(name, age, colour) {
  if(!new.target){
   return new Animal(name, age, colour)
   }
  this.name = name
  this.age = age
  this.colour = colour
  }
  
  let lion = Animal('Name', 'Age', 'Colour'); 

//2

function Calculator() {

  this.read = function() {
  
  this.firstVal = +prompt('Введите первое число')
  this.secondVal = +prompt('Введите второе число')
   }
  
  this.setAction = function () {
  
  this.do = prompt('Какое действие вы хотите сделать "+ , - , / " ?')
  
   }
  
  this.sum = function(){
  return this.firstVal + this.secondVal
  }
  
  this.mul = function (){
  return this.firstVal / this.secondVal
  }
  
  this.min = function (){
  return this.firstVal - this.secondVal
  }
  
  this.doAction = function (){
  
  if (this.do === '+') {
  
  return this.sum()
  
  } else if (this.do === '-'){
  
  return this.min()
  
  } else if (this.do === '/'){
  
  return this.mul()
  
   }
  }
  }
  
  
  let calculator = new Calculator();
  calculator.read();
  calculator.setAction();
  let tres = calculator.doAction(); // результат
  alert(tres)



//3

function Nums(...arguments) {

  this.args = arguments

}

Nums.prototype.getSum = function () {

let sum = 0

this.args.filter(function(item) {

 if(Number.isInteger(item)) {

 sum += item

  }})

Nums.prototype.myFilterReverse = function() {

let filters = []
let reverse = []

this.args.filter(function(item) {

 if (Number.isInteger(item)){

   filters.push(item)

 }

})

for(let i = filters.length; i > 0; i--) {
 
reverse.push(filters.pop())
 }

return reverse

 }
}

let test = new Nums(1,2,3)

test.getSum(); // найдет сумму всех элементов в свойстве args, которые являются целыми  числами.
test.myFilterReverse(); // Отфильтруем массив в свойстве args и развернет массив (было [1, 2, 3] -> стало [3, 2, 1])

//4

let arr = [1, 1, 2, 2, 3];

Array.prototype.getUnique = function () {
let arr1 = []
this.forEach(item => {

if(!arr1.includes(item)){
arr1.push(item)
  }
 }
)

return arr1
}


arr.getUnique(); //  [1, 2, 3]
