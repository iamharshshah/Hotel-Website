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


