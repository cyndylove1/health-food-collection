
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
        });


        var ourbody=document.querySelector(".ourpagebody")
    // ourbody.style.background="black"
    var hamburger=document.querySelector(".hamburger-container")

    // console.log(hamburger)

    function addandremove(){
    hamburger.classList.toggle('showburger')
    }
    var mobilelinkscontainer=document.querySelector('.mobile-links-container')

    function addandremove(){
        hamburger.classList.toggle('showburger')
        mobilelinkscontainer.classList.toggle('showmobilelinks')
    }

    