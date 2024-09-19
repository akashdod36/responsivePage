document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const navHeight = nav.offsetHeight;

    function updateNav() {
        if (window.scrollY > navHeight) {
            nav.style.backgroundColor = '#f8f8f8';
            nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            for (let link of nav.getElementsByTagName('a')) {
                link.style.color = '#333';
            }
        } else {
            nav.style.backgroundColor = '#333';
            nav.style.boxShadow = 'none';
            for (let link of nav.getElementsByTagName('a')) {
                link.style.color = 'white';
            }
        }
    }

    window.addEventListener('scroll', updateNav);

    // Add hover effect
    const navLinks = nav.getElementsByTagName('a');
    for (let link of navLinks) {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#ffd700';
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = window.scrollY > navHeight ? '#333' : 'white';
        });
    }
});

        // Form submission handling
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
