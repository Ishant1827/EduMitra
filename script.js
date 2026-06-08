/* ==================================
   EduMitra Skill Hub
   Premium JavaScript
================================== */

/* ==========================
   MOBILE MENU
========================== */

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

if(hamburger){

hamburger.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

/* CLOSE MENU */

document
.querySelectorAll(".nav-links a")
.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter");

const startCounter = () => {

counters.forEach(counter=>{

const target =
+counter.getAttribute("data-target");

let count = 0;

const speed = target / 100;

const updateCounter = () => {

if(count < target){

count += speed;

counter.innerText =
Math.ceil(count);

setTimeout(updateCounter,20);

}else{

counter.innerText =
target;

}

};

updateCounter();

});

};

startCounter();

/* ==========================
   FAQ ACCORDION
========================== */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question =
item.querySelector(".faq-question");

question.addEventListener("click",()=>{

item.classList.toggle("active");

});

});

/* ==========================
   BACK TO TOP
========================== */

const backToTop =
document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

backToTop.style.display = "flex";

}else{

backToTop.style.display = "none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

/* ==========================
   SMOOTH SCROLL
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navbar.style.background =
"rgba(11,31,58,.98)";

navbar.style.boxShadow =
"0 5px 20px rgba(0,0,0,.15)";

}else{

navbar.style.background =
"rgba(11,31,58,.95)";

navbar.style.boxShadow =
"none";

}

});

/* ==========================
   GALLERY POPUP
========================== */

const galleryImages =
document.querySelectorAll(
".gallery-item img"
);

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

const overlay =
document.createElement("div");

overlay.classList.add(
"image-overlay"
);

overlay.innerHTML =

`
<img src="${img.src}">
`;

document.body.appendChild(
overlay
);

overlay.addEventListener(
"click",
()=>{

overlay.remove();

}
);

});

});

/* ==========================
   PAGE LOADER EFFECT
========================== */

window.addEventListener(
"load",
()=>{

document.body.style.opacity =
"1";

});

/* ==========================
   DARK MODE
========================== */

const darkButton =
document.getElementById(
"darkMode"
);

if(darkButton){

darkButton.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark"
);

});
}

/* ==========================
   REVEAL ON SCROLL
========================== */

const revealElements =
document.querySelectorAll(

".about-card,\
 .why-box,\
 .course-card,\
 .resource-card,\
 .certificate-card,\
 .testimonial-card,\
 .contact-card"

);

function revealOnScroll(){

const windowHeight =
window.innerHeight;

revealElements.forEach(el=>{

const position =
el.getBoundingClientRect().top;

if(position <
windowHeight - 100){

el.style.opacity = "1";

el.style.transform =
"translateY(0)";

}

});

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ==========================
   CONTACT CARD CLICK
========================== */

document
.querySelectorAll(".contact-card")
.forEach(card=>{

card.addEventListener(
"mouseenter",
()=>{

card.style.transform =
"translateY(-10px)";

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"translateY(0)";

});

});

/* ==========================
   PAYMENT SUCCESS MESSAGE
========================== */

const paymentButtons =
document.querySelectorAll(".btn");

paymentButtons.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

console.log(
"Button Clicked"
);

});

});

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(

"EduMitra Skill Hub Loaded Successfully"

);