lightGallery(document.getElementById('animated-thumbnails'), {
    thumbnail: true,
        allowMediaOverlap: false,
        controls: true
});

// AOS animation
setTimeout(() => {
    AOS.init();
}, 500);

// preloader section
const preloader = document.getElementById("preloader");
const content = document.querySelector("body");
if (preloader) {
    setTimeout(() => {
        preloader.style.visibility = "hidden";
        content.style.display = "block";
    }, 3000);
}

// navbar links active on scroll and click
const links = document.querySelectorAll('#navLinks a');
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 100;
    links.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (    
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// navbar section
const header = document.getElementById("mainHeader");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header-sticky");
    }
    else {
        header.classList.remove("header-sticky");
    }
});

// navbar toggle menu
$(document).ready(function () {
    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
    });
});

// fullscreen searchbar section
const searchBtn = document.querySelector('.search-btn');
const searchOverlay = document.querySelector('.search-overlay');
const closeBtn = document.querySelector('.close-btn');
searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    document.querySelector('.search-input').focus();
});
closeBtn.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        searchOverlay.classList.remove('active');
    }
});

// menu-bar section
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}

// counter section
let count = document.querySelectorAll(".count");
var counted = 0;
$(window).scroll(function () {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        let arr = Array.from(count);
        arr.map(function (item) {
            let spanValue = item.querySelector('span');
            let startnumber = 0;
            function counterup() {
                startnumber++;
                spanValue.innerHTML = startnumber;
                if (startnumber == item.dataset.number) {
                    clearInterval(stop);
                }
            }
            let stop = setInterval(function () {
                counterup();
            }, 50);
        });
        counted = 1;
    }
});

// infinite scroll section
$(function () {
    $('.infinite-scroll').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        arrows: false,
        swipe: false,
        slidesToShow: 4,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// skill section
const skillSection = document.querySelector(".skill-content");
const skillBars = document.querySelectorAll(".skill-per");
let animated = false;
const animateSkillBar = (bar, target) => {
    bar.style.width = `${target}%`;
    let start = null;
    const update = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / 1000, 1);
        const current = Math.floor(target * progress);
        bar.setAttribute("per", `${current}%`);
        if (progress < 1) requestAnimationFrame(update);
        else bar.setAttribute("per", `${target}%`);
    };
    requestAnimationFrame(update);
};
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animated) {
        skillBars.forEach(bar => {
            const target = parseFloat(bar.getAttribute("data-number"));
            animateSkillBar(bar, target);
        });
        animated = true;
        observer.unobserve(skillSection);
    }
}, { threshold: 0.5 });
observer.observe(skillSection);

// testimonial section
$('.autoplay').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// blog section
$('.blog-autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// contact section
const form = document.getElementById('form');
const message = document.getElementById('thank-you-msg');
form.addEventListener("submit", () => {
    message.style.display = "block";
});

// back to top section
let scrollToTop = document.getElementById("up");
window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTop.style.display = "flex";
    }
    else {
        scrollToTop.style.display = "none";
    }
};

// cursor section
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});