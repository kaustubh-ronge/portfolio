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

if(screenWidth >=320 && screenWidth<438){
    nav.style ='background-color:#091020;'
}




let navBar = document.querySelectorAll(".nav-link")
let navCollapse = document.querySelector(".navbar-collapse.collapse")
navBar.forEach(function(a){
    a.addEventListener("click",()=>{
        navCollapse.classList.remove("show")
    })
})


   // This is optional if you want to ensure smooth transition for the card title
document.querySelectorAll('.card-title').forEach(title => {
    title.style.transition = 'transform 0.3s';
  });
  
  // This part ensures the card title moves back down when mouse leaves the card
  document.querySelectorAll('.card-content').forEach(cardContent => {
    cardContent.addEventListener('mouseleave', () => {
      cardContent.querySelector('.card-title').style.transform = 'translateY(0%)';
    });
  });
  
