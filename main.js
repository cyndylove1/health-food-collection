
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
        });


        

    const sr = ScrollReveal ({
        distance: '60px',
        duration: 2000,
        reset: true
    
     })
     
 sr.reveal('.content',{delay:350, origin:'bottom'})
 sr.reveal('.images',{delay:350, origin:'top'})