document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#corenavbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + sectionHeight - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // About Section Fade-In Animation
    const aboutSection = document.getElementById('about');
    const aboutContent = document.querySelector('.about-content');

    function fadeInOnScroll() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            aboutContent.classList.add('visible');
        } else {
            aboutContent.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); 

    const skillsSection = document.getElementById('skills');
    const skillsContainer = document.querySelector('.skills-container');

    function popOutOnScroll() {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            skillsContainer.classList.add('reveal');
        } else {
            skillsContainer.classList.remove('reveal');
        }
    }

    window.addEventListener('scroll', popOutOnScroll);
    popOutOnScroll(); 
});document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const indicator = document.querySelector(".nav-indicator");

    function changeIndicator() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            index = sections.length - 1;
        }
        
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
        
        const activeLink = navLinks[index];
        const linkRect = activeLink.getBoundingClientRect();
        const navRect = document.querySelector("#corenavbar").getBoundingClientRect();
        
        indicator.style.left = (linkRect.left - navRect.left) + "px";
        indicator.style.width = linkRect.width + "px";
    }

    changeIndicator();
    window.addEventListener("scroll", changeIndicator);
});
