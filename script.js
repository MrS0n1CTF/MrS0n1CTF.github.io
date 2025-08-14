document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    for (const link of scrollLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Reveal sections on scroll
    const sections = document.querySelectorAll('.reveal');
    const revealOnScroll = function() {
        for (const section of sections) {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run on initial load
});
