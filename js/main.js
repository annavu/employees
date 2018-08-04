
document.addEventListener("DOMContentLoaded", loadEmployees);

// function load() {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'data.json');

//   xhr.onload = function() {
//     if(this.status === 200) {
//       console.log(this.responseText);
//       console.log(JSON.parse(this.responseText));

//       const data = JSON.parse(this.responseText);

//       const ul = document.createElement('ul');
//       document.body.appendChild(ul);
      
//       data.forEach(function(item) {
//         const li = document.createElement('li');
//         li.textContent = `${item.firstName} ${item.lastName}`
//         ul.appendChild(li);
//       })
//     }
//   }

//   xhr.send()
// }

// function loadData() {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'https://api.myjson.com/bins/18ia4g');

//   xhr.onload = function() {
//     if(this.status === 200) {
      
//       console.log(JSON.parse(this.responseText));

//       const data = JSON.parse(this.responseText);

//       const ul = document.createElement('ul');
//       document.body.appendChild(ul);
      
//       data.forEach(function(item) {
//         const li = document.createElement('li');
//         li.textContent = `${item.firstName} ${item.lastName}`
//         ul.appendChild(li);
//       })
//     }
//   }

//   xhr.send()
// }

const employees = new Employees();
const ui = new UI();

function loadEmployees() {
  employees.getEmployees().then(function(response) {
    console.log(response)
    ui.show(response);
  })
}