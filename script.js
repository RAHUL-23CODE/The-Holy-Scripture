// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
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

// Form Submission Handling
const contactForm = document.querySelector('.contact-form');
const newsletterForm = document.querySelector('.newsletter-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your newsletter subscription logic here
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Scroll to Top Button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑';
scrollButton.className = 'scroll-top';
document.body.appendChild(scrollButton);

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/Hide Scroll Button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Add some CSS for the scroll button
const style = document.createElement('style');
style.textContent = `
    .scroll-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #e67e22;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: none;
        font-size: 20px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: background 0.3s ease;
    }
    
    .scroll-top:hover {
        background: #d35400;
    }
`;
document.head.appendChild(style);

// Add active class to navigation links on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Page Transition
document.addEventListener('DOMContentLoaded', () => {
    // Create transition overlay
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);

    // Handle navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                transition.classList.add('active');
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                        transition.classList.remove('active');
                    }, 500);
                }, 500);
            }
        });
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe section headers
document.querySelectorAll('.section-header').forEach(header => {
    observer.observe(header);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Add animation to profile box on scroll
const profileBox = document.querySelector('.profile-box');
if (profileBox) {
    observer.observe(profileBox);
}

// Add animation to leader cards on scroll
document.querySelectorAll('.leader').forEach(leader => {
    observer.observe(leader);
});

// Add animation to city items on scroll
document.querySelectorAll('.city-item').forEach(city => {
    observer.observe(city);
});

// Voice Recognition System
const voiceCommands = {
    'order': ['order', 'buy', 'purchase', 'get'],
    'items': ['item', 'product', 'dress', 'suit', 'jacket', 'shirt', 'pants'],
    'navigation': ['go to', 'show me', 'take me to', 'navigate to'],
    'sections': ['home', 'collection', 'about', 'contact', 'trends']
};

let recognition = null;
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
}

// Voice Command Button
const voiceButton = document.createElement('button');
voiceButton.className = 'voice-command-btn';
voiceButton.innerHTML = '<i class="fas fa-microphone"></i>';
document.body.appendChild(voiceButton);

// Add CSS for voice button
const voiceStyle = document.createElement('style');
voiceStyle.textContent = `
    .voice-command-btn {
        position: fixed;
        bottom: 90px;
        right: 30px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--gradient-1);
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .voice-command-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }

    .voice-command-btn.listening {
        background: #ff4444;
        animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    .voice-feedback {
        position: fixed;
        bottom: 160px;
        right: 30px;
        background: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    }

    .voice-feedback.show {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(voiceStyle);

// Create voice feedback element
const voiceFeedback = document.createElement('div');
voiceFeedback.className = 'voice-feedback';
document.body.appendChild(voiceFeedback);

// Voice Command Handler
function handleVoiceCommand(text) {
    text = text.toLowerCase();
    let command = '';
    let target = '';

    // Check for order commands
    for (const orderWord of voiceCommands.order) {
        if (text.includes(orderWord)) {
            command = 'order';
            break;
        }
    }

    // Check for navigation commands
    for (const navWord of voiceCommands.navigation) {
        if (text.includes(navWord)) {
            command = 'navigate';
            break;
        }
    }

    // Check for items
    for (const item of voiceCommands.items) {
        if (text.includes(item)) {
            target = item;
            break;
        }
    }

    // Check for sections
    for (const section of voiceCommands.sections) {
        if (text.includes(section)) {
            target = section;
            break;
        }
    }

    // Execute command
    if (command === 'order' && target) {
        showVoiceFeedback(`Ordering ${target}...`);
        // Add your order processing logic here
        setTimeout(() => {
            showVoiceFeedback(`Order placed for ${target}!`);
        }, 2000);
    } else if (command === 'navigate' && target) {
        showVoiceFeedback(`Navigating to ${target}...`);
        const section = document.getElementById(target);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Show voice feedback
function showVoiceFeedback(message) {
    voiceFeedback.textContent = message;
    voiceFeedback.classList.add('show');
    setTimeout(() => {
        voiceFeedback.classList.remove('show');
    }, 3000);
}

// Voice Recognition Event Handlers
if (recognition) {
    recognition.onstart = () => {
        voiceButton.classList.add('listening');
        showVoiceFeedback('Listening...');
    };

    recognition.onend = () => {
        voiceButton.classList.remove('listening');
        showVoiceFeedback('Voice command completed');
    };

    recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        handleVoiceCommand(text);
    };

    recognition.onerror = (event) => {
        showVoiceFeedback('Error: ' + event.error);
    };
}

// Voice Button Click Handler
voiceButton.addEventListener('click', () => {
    if (recognition) {
        recognition.start();
    } else {
        showVoiceFeedback('Voice recognition not supported in your browser');
    }
}); 