
/* ================= CLOUD MOUSE EFFECT ================= */

/* ================= MENU ANIMATION ================= */
const header = document.querySelector(".header");
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menulabel = document.querySelector(".menu-items-label");
const bg = document.querySelector(".menu-bg");
const items = document.querySelectorAll(".menu-item");
const right = document.querySelector(".menu-right");

let tl = gsap.timeline({ paused:true });

tl.to(bg,{
  clipPath:"circle(150% at 100% 0%)",
  duration:1,
  ease:"power4.inOut"
})
.to(items,{
  opacity:1,
  x:0,
  stagger:0.1,
  duration:0.6
},"-=0.6")
.to(right,{
  opacity:1,
  x:0,
  duration:0.6
},"-=0.6");

toggle.addEventListener("click",()=>{

  toggle.classList.toggle("active");
  header.classList.toggle("active");
  menulabel.classList.toggle("active");

  if(toggle.classList.contains("active")){
    menu.style.visibility="visible";
    tl.play();
    document.body.style.overflow="hidden";
  }else{
    tl.reverse();
    setTimeout(()=>{
      menu.style.visibility="hidden";
      document.body.style.overflow="auto";
    },800);
  }

});


// $(document).ready(function() {
//   $("#owl-demo").owlCarousel({
//     autoplay: true,
//     autoplayTimeout: 3000,
//     loop:true,
//     items: 3,
//     margin: 20,   // 👈 space between items
//     responsive:{
//       0:{ items:1 },
//       768:{ items:2 },
//       1000:{ items:3 }
//     }
//   });
// });

// gsap.registerPlugin(ScrollTrigger);

// const text = document.querySelector(".reveal-text");
// const words = text.innerText.split(" ");
// text.innerHTML = "";

// words.forEach(word => {
//   const span = document.createElement("span");
//   span.textContent = word + " ";
//   text.appendChild(span);
// });

// const spans = document.querySelectorAll(".reveal-text span");

// gsap.to(spans, {
//   opacity: 1,
//   stagger: 0.1,
//   ease: "none",
//  scrollTrigger: {
//   trigger: ".reveal-section",
//   start: "top 40%",
//   end: "bottom 40%",
//   scrub: true,
// }
// });



// $(".testimonial-carousel").owlCarousel({
//   loop: true,
//   center: true,
//   margin: 20,
//   nav: true,
//     navText: [
//         '<i class="fa fa-arrow-left"></i>',
//         '<i class="fa fa-arrow-right"></i>'
//     ],
//   dots: false,
//   autoplay: true,
//   autoplayTimeout: 4000,
//   responsive:{
//     0:{ items:1 },
//     768:{ items:1.5 },
//     1200:{ items:2.5 }
//   }
// });

document.addEventListener("DOMContentLoaded", function () {

  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");

  if (!header) return;

  const getHeroHeight = () => (hero ? hero.offsetHeight : 0);
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const threshold = getHeroHeight() - header.offsetHeight;
        if (window.scrollY > threshold) {
          header.classList.add("scroll");
        } else {
          header.classList.remove("scroll");
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  // set initial state
  onScroll();

});


     AOS.init({
  once: true,          
  mirror: false      
});



var swiper = new Swiper(".wellnessSwiper", {
    slidesPerView: 3.5,
    spaceBetween: 35,
    loop: true,
    speed: 1000,

    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 4
        }
    }
});



$('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 15, // equal center spacing
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,

    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        768: {
            items: 2,
            margin: 15
        }
    }
});


