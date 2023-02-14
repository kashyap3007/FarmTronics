window.addEventListener("load", ()=>{
    const themeChanger=
 ()=>{
     const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    //  console.log(toggleSwitch);
     const currentTheme = localStorage.getItem('theme');
     if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    function myswitchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else { document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}
toggleSwitch.addEventListener("click", myswitchTheme, false);
}
setTimeout(() => {
    themeChanger();
}, 2000);
// window.addEventListener('load', themeChanger );
// window.onscroll = function() {
//     scrollFunction()
// };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}
window.addEventListener("scroll" , scrollFunction);



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            $("#site-header").addClass("nav-fixed");
        } else {
            $("#site-header").removeClass("nav-fixed");
        }
    });

    //Main navigation Active Class Add Remove
    $(".navbar-toggler").on("Click", function() {
        $("header").toggleClass("active");
    });
    $(document).on("ready", function() {
        if ($(window).width() > 991) {
            $("header").removeClass("active");
        }
        $(window).on("resize", function() {
            if ($(window).width() > 991) {
                $("header").removeClass("active");
            }
        });
    });

    $(function() {
        //  $('.navbar-toggler').addEventListener('click', ()=>{
        //      $('body').toggleClass('noscroll');
        //  })
         $('.navbar-toggler').click(function() {
            $('body').toggleClass('noscroll');
         })
    });

})