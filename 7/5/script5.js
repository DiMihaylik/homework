const group = [{
  name: 'Diana',
  lastName: 'Mihaylik',
  age: 22,
  notebook: true,
}, 
{
  name: 'Masha',
  lastName: 'Evtushenko',
  age: 22,
  notebook: true,
},
];

function getStudentsList (arrayOfStudents) {

let str = '';

 arrayOfStudents.forEach(function (item) {

for(let key in item){

 str += key + ' - ' + item[key] + ' ,';
  
}})

return str 
      }
getStudentsList(group)