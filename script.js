window.onscroll = () => {
    let header = document.querySelector('.header');

    header.classList.toggle('sticky',window.scrollY > 100);
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    
    if (top > offset && top < offset + height) {
        navLinks.forEach((navLinks) => {
            navLinks.classList.remove("active");
            document
            .querySelector("header nav a[href*=" + +"]")
            .classList.add("active");
        });
    }
});
};

// ======scrollreveal ========//
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:2000,
    Delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-imgg imgg , .skills , .probox , .contact form.', { origin: 'bottom' });



  
var typed = new Typed(".multipletext", {
    strings: ["Front end developer","Fresher","Web Developer", "Programmer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// menuicon navbar

let menuicon =document.querySelectorAll('section');
let menuicon =document.querySelectorAll('header nav a');