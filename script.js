let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let stop=0;
let inte=null;
const sl=document.getElementById("sl")
function showSlide(index) {
    if (index >= totalSlides) { slideIndex = 0; }
    if (index < 0) { slideIndex = totalSlides - 1; }

    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'block' : 'none';
    });
}
function plusSlides(n) {
    showSlide(slideIndex += n);
}

sl.addEventListener("mouseover",()=>
{
    clearInterval(inte);
});

sl.addEventListener("mouseleave",()=>
{
    startSlideshow();
});

function startSlideshow() {
    inte =setInterval(() => {
        plusSlides(1);
    }, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    console.log(1);
    showSlide(slideIndex);
    startSlideshow();
});
