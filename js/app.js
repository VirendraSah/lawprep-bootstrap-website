let ourcousearrow = document.querySelector(".mobileOurCourseArrow")
ourcousearrow.addEventListener("click", () => {
    let icon = ourcousearrow.lastElementChild
    if (icon.classList.contains("fa-chevron-down")) {
        icon.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
        icon.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
})

$('#Student-Air1-OwlCarousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1.1
        },
        600: {
            items: 2.1
        },
        1000: {
            items: 1
        }
    }
})

$('#ResouceMaterial').owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1.1
        },
        600: {
            items: 2.1
        },
        1000: {
            items: 1
        }
    }
})

$(document).ready(function () {
    var owl = $('#testimonials');

    var isMobile = window.innerWidth < 576; // Only autoplay on xs screens

    // Initialize Owl Carousel with conditional autoplay
    owl.owlCarousel({
        items: 6,
        loop: true,
        margin: 10,
        autoplay: isMobile, // Only autoplay on mobile
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        }
    });

    // Optional manual controls
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [600]);
    });

    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay');
    });

});

$('#student-testimonialOverView').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

const input = document.querySelector("#mobile");
window.intlTelInput(input, {
  separateDialCode: true,
  initialCountry: "in",
  preferredCountries: ["in", "us", "gb"]
});

