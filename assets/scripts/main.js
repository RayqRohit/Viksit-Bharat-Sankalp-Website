// Scroll to Top Button and Sticky Navbar Functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const navbar = document.getElementById('navbar');
    
    // Show/hide button and handle sticky navbar based on scroll position
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        
        // Scroll to top button
        if (scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
        
        // Sticky navbar - activate when scrolling past navbar
        if (scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
    
    // Smooth scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});