
    window.addEventListener("scroll", function(){
        const navbar = document.querySelector("nav-bar");
        navbar.classList.toggle('sticky', window.scrollY > 0);
        });
    