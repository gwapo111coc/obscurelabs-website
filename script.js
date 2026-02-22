// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Try Demo button functionality with sanitized feedback
document.querySelectorAll('.try-demo-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Use textContent instead of alert for better UX and security
        if (this.dataset.clicked !== 'true') {
            this.textContent = 'Coming Soon!';
            this.disabled = true;
            this.style.opacity = '0.7';
            this.dataset.clicked = 'true';
        }
    });
});

// Add scroll effect to navbar using CSS class instead of inline styles
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Handle button clicks with ripple effect using CSS animations
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple using CSS animation instead of inline styles
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.dataset.x = x;
        ripple.dataset.y = y;
        ripple.dataset.size = size;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Security: Disable right-click context menu on sensitive elements (optional)
// Commented out as it may impact UX
// document.addEventListener('contextmenu', (e) => {
//     if (e.target.closest('.protected-content')) {
//         e.preventDefault();
//     }
// });
