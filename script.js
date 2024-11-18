
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tripForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Store the data in localStorage
            localStorage.setItem('tripPlannerName', name);
            localStorage.setItem('tripPlannerEmail', email);
            
            // Animate form submission
            form.style.opacity = '0';
            form.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                window.location.href = 'plan.html';
            }, 500);
        });
    }

    // Animate elements on scroll
    const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
    
    const checkScroll = function() {
        animateOnScroll.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
                el.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load

    // Add hover effect to navbar items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
