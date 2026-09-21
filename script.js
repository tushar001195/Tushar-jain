/* ==========================================================================
   INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // Set up the observer options
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the section is visible on screen
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the section scrolls into view
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible');
                
                // Optional: Stop observing once the animation has happened
                // This keeps the element visible even if they scroll up and back down
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Grab all sections with the 'section-fade' class
    const fadeSections = document.querySelectorAll('.section-fade');
    
    // Tell the observer to watch each section
    fadeSections.forEach(section => {
        observer.observe(section);
    });

    // Cinematic Hero Load Effect
    // Forces the very first section to fade in immediately when the site loads
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        setTimeout(() => {
            heroSection.classList.add('visible');
        }, 150); // 150 millisecond delay for a premium feel
    }
});
