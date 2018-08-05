class UI {
  


  show(data) {
    // const ul = document.createElement('ul');
    //   document.body.appendChild(ul);

      // const rows = [];
      const list = document.querySelector(".employees-list");
      data.forEach(function(employer) {
        const row = document.createElement("tr");
        row.classList.add("row");
        row.innerHTML = `
        <td class="item">${employer.id}</td>
        <td class="item">${employer.firstName}</td>
        <td class="item">${employer.lastName}</td>
        <td class="item">${employer.dateOfBirth}</td>
        <td class="item">${employer.company}</td>
        <td class="item">${employer.note}</td>
        `;
      
        list.appendChild(row);
        // rows.push(row);
        
      })
      
      // data.forEach(function(item) {
      //   const li = document.createElement('li');
      //   li.textContent = `${item.firstName} ${item.lastName}`
      //   ul.appendChild(li);
      // })
  }
}