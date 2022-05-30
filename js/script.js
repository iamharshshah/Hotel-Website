// Swiper----------------------------

const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  
  
  
  });


  //header scroll---------------------------------

  let nav = document.querySelector(".navbar");

  window.onscroll = function (){

    if(document.documentElement.scrollTop > 50){

        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
  }

//   navbar hide while clicking menu-------------------
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector (".navbar-collapse.collapse");

navbar.forEach(function(a) {


    a.addEventListener("click", function(){

        navCollapse.classList.remove("show");
    })
})


// counter--------------------------------------------------------

document.addEventListener("DOMContentLoaded", () =>{
function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
  current = start,
  range = end - start,
  increment = end > start ? 1 : -1,
  step = Math.abs(Math.floor(duration / range)),
  timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if(current == end){
      clearInterval(timer);
    }
  }, step);
}

counter("count1", 0, 1287, 3000);
counter("count2", 100, 4500, 2500);
counter("count3", 0, 1440, 3000);
counter("count4", 0, 3110, 3000);


}); 


// our partners slider-----------------------

const swiper_partner = new Swiper('.our-partner', {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,

 

  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },

  breakpoints: {
'991': {

  slidesPerView: 5,
  spaceBetween: 10,
},

'767': {

  slidesPerView: 3,
  spaceBetween: 10,
},

'300': {

  slidesPerView: 2,
  spaceBetween: 8,
},

'200': {

  slidesPerView: 1.
}


  },



});