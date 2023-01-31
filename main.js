
window.addEventListener("scroll", function(){
    const nav-section = document.querySelector("nav-section");
    nav-section.classList.toggle('sticky', window.scrollY > 0);
    });
