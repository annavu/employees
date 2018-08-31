class Filter {

  // filterData(e) {

  //   const rows = document.querySelectorAll('.rows');
  //   const filter = document.querySelector('.filter')
  //   const options = document.querySelectorAll('.option')
  //   // const select = document.querySelector('.filter');
  //   // select.addEventListener('change', check);
  //   console.log(122);
  //   console.log(e.target.value)
  //   console.log(options[0])
   
  //   filter.addEventListener('change', function() {
  //     const val = filter.value
  //     console.log(val)
  //     console.log(122);
  //   })
    
  // }

  change(e) {
    //const options = document.querySelectorAll('.option')
    const input = document.querySelector('.input-search');
    const list = document.querySelector(".employees-list");
    const rows = list.children;
  console.log(select.value)
  console.log(list.children)

    input.addEventListener('keyup', function(e) {

      let filterVal = e.target.value.toUpperCase();

      let loopThrough =  function(num) {
        for(let i=0; i<rows.length; i++) {
          let td = rows[i].getElementsByTagName("td")[num];
          console.log(td)
          if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filterVal) > -1) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          } 
        }
      }

      
      switch(select.value) {
        case 'id':
        loopThrough(0);
        break;
        case 'firstName':
        loopThrough(1);
        break;
        case 'lastName':
        loopThrough(2);
        break;
        case 'date':
        loopThrough(3);
        break;
        case 'company':
        loopThrough(4);
        break;
        case 'note':
        loopThrough(5);
        break;
      }
    })
  }  
}