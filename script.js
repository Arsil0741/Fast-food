 
 // back to top btn 
 

 var backToTop = document.getElementById('back-to-top');

 backToTop.addEventListener("click", ()=>{

window.scrollTo
    ({
top:0,
behavior:"smooth",
 });

});


 
// //nav hide
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

 
