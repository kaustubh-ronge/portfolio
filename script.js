let nav = document.querySelector('.navbar');
window.onscroll =  function (){
    if(document.documentElement.scrollTop > 10){
        nav.classList.add('header-scrolled')
    }
    else{
        nav.classList.remove('header-scrolled')
    }
}


let screenWidth = window.innerWidth

if(screenWidth>320 && screenWidth<438){
    nav.style ='background-color:#091020;'
}




let navBar = document.querySelectorAll(".nav-link")
let navCollapse = document.querySelector(".navbar-collapse.collapse")
navBar.forEach(function(a){
    a.addEventListener("click",()=>{
        navCollapse.classList.remove("show")
    })
})


  
document.querySelectorAll('.card-title').forEach(title => {
    title.style.transition = 'transform 0.3s';
  });
  
 
  document.querySelectorAll('.card-content').forEach(cardContent => {
    cardContent.addEventListener('mouseleave', () => {
      cardContent.querySelector('.card-title').style.transform = 'translateY(0%)';
    });
  });



 
  
      const form = document.querySelector('form');
      form.addEventListener('submit', async function(event) {
          event.preventDefault(); 

          const formData = new FormData(form);
          const data = {};
          formData.forEach((value, key) => {
              data[key] = value;
          });

          try {
              const response = await fetch(form.action, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
              });

              const result = await response.json();

              if (response.ok) {
                  if (result.status === 'success') {
                      alert(result.message);
                  } else if (result.status === 'error') {
                      alert(result.message);
                  } else if (result.status === 'exists') {
                      alert(result.message);
                  }
              } else {
                 
                  alert('An unexpected error occurred: ' + result.message);
              }
          } catch (error) {
              alert('An error occurred: ' + error.message);
              console.error('Error:', error);
          }
      });


