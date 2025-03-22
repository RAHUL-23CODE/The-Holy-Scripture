document.addEventListener('DOMContentLoaded', function() {
    const verses = [
        '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." - John 3:16',
        '"Trust in the LORD with all your heart and lean not on your own understanding." - Proverbs 3:5',
        '"I can do all this through him who gives me strength." - Philippians 4:13'
    ];

    function updateVerse() {
        const verseElement = document.getElementById('daily-verse');
        const randomVerse = verses[Math.floor(Math.random() * verses.length)];
        verseElement.textContent = randomVerse;
    }

    // Update verse every 24 hours
    setInterval(updateVerse, 24 * 60 * 60 * 1000);
    updateVerse();

    // Modal functionality
    const modal = document.getElementById('modal');
    const btn = document.getElementById('infoButton');
    const span = document.getElementsByClassName('close')[0];
    const messages = [
        'Remember to pray daily and stay connected with God.',
        'Share God\'s love with someone today!',
        'Take time to meditate on scripture.',
        'God is always with you!'
    ];

    btn.onclick = function() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('modal-message').textContent = randomMessage;
        modal.style.display = 'block';
        setTimeout(() => modal.classList.add('active'), 10);
    }

    span.onclick = function() {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.style.display = 'none', 300);
        }
    }

    // City information functionality
    const cityLocations = {
        newyork: {
            address: "123 Broadway, New York, NY",
            times: "Sundays 10 AM, Wednesdays 7 PM",
            contact: "+1 (212) 555-0123"
        },
        london: {
            address: "45 Westminster, London, UK",
            times: "Sundays 11 AM, Tuesdays 6:30 PM",
            contact: "+44 20 7123 4567"
        },
        sydney: {
            address: "789 George St, Sydney, AU",
            times: "Sundays 9 AM, Thursdays 7 PM",
            contact: "+61 2 8765 4321"
        },
        tokyo: {
            address: "1-1 Shibuya, Tokyo, JP",
            times: "Sundays 2 PM, Wednesdays 7 PM",
            contact: "+81 3-1234-5678"
        }
    };

    document.getElementById('citySelect').addEventListener('change', function(e) {
        const locationInfo = document.getElementById('locationInfo');
        const city = cityLocations[this.value];
        
        if (city) {
            locationInfo.innerHTML = `
                <h3>${this.options[this.selectedIndex].text}</h3>
                <p><strong>Address:</strong> ${city.address}</p>
                <p><strong>Meeting Times:</strong> ${city.times}</p>
                <p><strong>Contact:</strong> ${city.contact}</p>
            `;
        } else {
            locationInfo.innerHTML = '';
        }
    });

    // Resource Downloads
    const resourceButtons = document.querySelectorAll('.resource-btn');
    resourceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const resourceType = this.textContent;
            if (resourceType === 'Download Study Guide') {
                alert('Study guide will be downloaded shortly.');
            } else if (resourceType === 'Prayer Request') {
                showPrayerRequestForm();
            } else if (resourceType === 'Weekly Newsletter') {
                showNewsletterSignup();
            } else if (resourceType === 'Online Library') {
                window.open('#', '_blank');
            }
            trackEvent('Resources', 'Download', this.textContent);
        });
    });

    function showPrayerRequestForm() {
        modal.style.display = 'block';
        document.getElementById('modal-message').innerHTML = `
            <form id="prayerForm">
                <input type="text" placeholder="Your Name" required>
                <textarea placeholder="Your Prayer Request" required></textarea>
                <button type="submit">Submit Request</button>
            </form>
        `;
    }

    function showNewsletterSignup() {
        modal.style.display = 'block';
        document.getElementById('modal-message').innerHTML = `
            <form id="newsletterForm">
                <input type="email" placeholder="Your Email" required>
                <button type="submit">Subscribe</button>
            </form>
        `;
    }

    // Enhanced Virtual Access functionality
    document.getElementById('virtualAccessBtn').addEventListener('click', function() {
        modal.style.display = 'block';
        document.getElementById('modal-message').innerHTML = `
            <h3>Virtual Access Details</h3>
            <form id="virtualAccessForm">
                <input type="text" placeholder="Full Name" required>
                <input type="email" placeholder="Email Address" required>
                <select required>
                    <option value="">Select Access Type</option>
                    <option value="zoom">Zoom Meetings (Live Interactive)</option>
                    <option value="stream">Live Stream (Watch Only)</option>
                    <option value="app">Mobile App (On-Demand)</option>
                    <option value="all">Full Access Package</option>
                </select>
                <textarea placeholder="Special Requirements or Questions" rows="3"></textarea>
                <button type="submit">Request Access</button>
            </form>
        `;

        const form = document.getElementById('virtualAccessForm');
        form.addEventListener('submit', handleVirtualAccessSubmit);
    });

    function handleVirtualAccessSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const modal = document.getElementById('modal-message');
        
        // Simulate form submission
        modal.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>Access Request Successful!</h3>
                <p>Check your email for login credentials.</p>
            </div>
        `;

        // Animate materials list items
        document.querySelectorAll('.materials-list li').forEach((item, index) => {
            item.style.setProperty('--item-index', index);
        });

        setTimeout(() => {
            document.getElementById('modal').style.display = 'none';
        }, 3000);

        trackEvent('Access', 'Virtual Access Request', 'Form Submitted');
    }

    // Enhanced Materials List functionality
    function initializeMaterialsList() {
        const lists = document.querySelectorAll('.materials-list');
        lists.forEach(list => {
            list.querySelectorAll('li').forEach((item, index) => {
                item.style.setProperty('--item-index', index);
            });
        });
    }

    // Initialize animations
    initializeMaterialsList();

    // Bible Books functionality
    const bibleBooks = window.bibleDatabase || {};

    const booksGrid = document.getElementById('booksGrid');
    const testamentBtns = document.querySelectorAll('.testament-btn');

    function displayBooks(testament) {
        booksGrid.innerHTML = '';
        bibleBooks[testament].forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book-item';
            bookElement.textContent = book.name;
            bookElement.onclick = () => showBookContent(book);
            booksGrid.appendChild(bookElement);
        });
    }

    testamentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            testamentBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayBooks(this.dataset.testament);
        });
    });

    function showBookContent(book) {
        apiService.trackProgress({
            book: book.name,
            chapter: 1,
            userId: getCurrentUser().id
        });
        const bookContent = document.getElementById('bookContent');
        const selectedBookTitle = document.getElementById('selectedBookTitle');
        const chapterSelector = document.getElementById('chapterSelector');
        
        selectedBookTitle.textContent = book.name;
        chapterSelector.innerHTML = '';
        
        for(let i = 1; i <= book.chapters; i++) {
            const chapterBtn = document.createElement('button');
            chapterBtn.className = 'chapter-btn';
            chapterBtn.textContent = `Chapter ${i}`;
            chapterBtn.onclick = () => showChapterContent(book.name, i);
            chapterSelector.appendChild(chapterBtn);
        }
        
        bookContent.style.display = 'block';

        trackEvent('Bible Study', 'Book Selected', book.name);
    }

    function showChapterContent(bookName, chapter) {
        const verseContent = document.getElementById('verseContent');
        const testament = bibleBooks.old.find(b => b.name === bookName) ? 'old' : 'new';
        const book = bibleBooks[testament].find(b => b.name === bookName);
        
        if (book && book.content && book.content[chapter]) {
            const verses = book.content[chapter];
            verseContent.innerHTML = Object.entries(verses)
                .map(([verseNum, text]) => `
                    <p><strong>${bookName} ${chapter}:${verseNum}</strong> ${text}</p>
                `).join('');
        } else {
            verseContent.innerHTML = '<p>Content loading...</p>';
        }
    }

    // Initialize with Old Testament
    displayBooks('old');

    // Dynamic Background Effects
    function initializeDynamicBackground() {
        const circles = document.querySelectorAll('.animated-circles li');
        circles.forEach(circle => {
            const randomSize = Math.random() * 60 + 20;
            const randomPosition = Math.random() * window.innerWidth;
            const randomDelay = Math.random() * 5;
            const randomSpeed = Math.random() * 10 + 15;

            circle.style.width = `${randomSize}px`;
            circle.style.height = `${randomSize}px`;
            circle.style.left = `${randomPosition}px`;
            circle.style.animationDelay = `${randomDelay}s`;
            circle.style.animationDuration = `${randomSpeed}s`;
        });
    }

    // Enhanced Dynamic Background Effects
    function initializeDynamicBackground() {
        const circles = document.querySelectorAll('.animated-circles li');
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d', '#e056fd'];
        
        circles.forEach((circle, index) => {
            const randomSize = Math.random() * 60 + 20;
            const randomPosition = Math.random() * window.innerWidth;
            const randomDelay = Math.random() * 5;
            const randomSpeed = Math.random() * 10 + 15;
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            circle.style.width = `${randomSize}px`;
            circle.style.height = `${randomSize}px`;
            circle.style.left = `${randomPosition}px`;
            circle.style.animationDelay = `${randomDelay}s`;
            circle.style.animationDuration = `${randomSpeed}s`;
            circle.style.background = `rgba(${hexToRgb(randomColor)}, 0.2)`;
        });
    }

    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
    }

    // Color transition effect for sections
    function initializeColorEffects() {
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => {
            section.addEventListener('mouseenter', () => {
                section.style.transition = 'all 0.5s ease';
                section.style.borderColor = getRandomColor();
            });
            
            section.addEventListener('mouseleave', () => {
                section.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            });
        });
    }

    function getRandomColor() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d', '#e056fd'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Initialize color effects
    initializeColorEffects();

    // Parallax Effect
    function initializeParallax() {
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('main section');
            sections.forEach(section => {
                const distance = window.scrollY;
                section.style.transform = `translateY(${distance * 0.1}px)`;
                section.style.opacity = 1 - (distance * 0.001);
            });
        });
    }

    // Initialize dynamic effects
    initializeDynamicBackground();
    initializeParallax();

    // Google Analytics Event Tracking
    function trackEvent(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    }

    // Voice Assistant functionality
    function initializeVoiceAssistant() {
        const voiceButton = document.getElementById('voiceButton');
        const voiceOutput = document.getElementById('voiceOutput');
        let isListening = false;

        if (annyang) {
            const commands = {
                'read verse': () => {
                    showVoiceCommand('Reading current verse...');
                    readCurrentVerse();
                },
                'next chapter': () => {
                    showVoiceCommand('Moving to next chapter...');
                    navigateChapter('next');
                },
                'previous chapter': () => {
                    showVoiceCommand('Moving to previous chapter...');
                    navigateChapter('prev');
                },
                'go to *book': (book) => {
                    showVoiceCommand(`Opening ${book}...`);
                    navigateToBook(book);
                },
                'search for *query': (query) => {
                    showVoiceCommand(`Searching for: ${query}`);
                    searchBible(query);
                },
                'open *section': (section) => {
                    showVoiceCommand(`Navigating to ${section}...`);
                    navigateToSection(section);
                },
                'help': showVoiceCommands
            };

            annyang.addCommands(commands);
            
            // Add help command
            showVoiceCommands();
        }

        function showVoiceCommand(text) {
            const commandDisplay = document.createElement('div');
            commandDisplay.className = 'voice-command-display';
            commandDisplay.textContent = text;
            document.body.appendChild(commandDisplay);
            
            setTimeout(() => {
                commandDisplay.remove();
            }, 3000);
        }

        function showVoiceCommands() {
            showResourceModal(`
                <h3>Available Voice Commands</h3>
                <div class="voice-commands-list">
                    <div class="command-group">
                        <h4>Navigation Commands</h4>
                        <ul>
                            <li>"next chapter" - Move to next chapter</li>
                            <li>"previous chapter" - Move to previous chapter</li>
                            <li>"go to [book name]" - Open specific book</li>
                        </ul>
                    </div>
                    <div class="command-group">
                        <h4>Reading Commands</h4>
                        <ul>
                            <li>"read verse" - Read current verse</li>
                            <li>"search for [query]" - Search Bible content</li>
                        </ul>
                    </div>
                    <div class="command-group">
                        <h4>Section Navigation</h4>
                        <ul>
                            <li>"open study materials" - Go to study materials</li>
                            <li>"open resources" - Go to resources</li>
                            <li>"open locations" - Go to locations</li>
                        </ul>
                    </div>
                </div>
                <button onclick="modal.style.display='none'">Close Help</button>
            `);
        }

        voiceButton.addEventListener('click', () => {
            if (!isListening) {
                annyang.start();
                voiceButton.classList.add('listening');
                showVoiceOutput('Listening...');
                isListening = true;
            } else {
                annyang.abort();
                voiceButton.classList.remove('listening');
                hideVoiceOutput();
                isListening = false;
            }
        });

        annyang.addCallback('result', phrases => {
            console.log('Voice input:', phrases[0]);
        });

        annyang.addCallback('error', () => {
            showVoiceOutput('Sorry, I didn\'t catch that.');
            setTimeout(hideVoiceOutput, 3000);
        });

        function showVoiceOutput(text) {
            voiceOutput.textContent = text;
            voiceOutput.style.display = 'block';
        }

        function hideVoiceOutput() {
            voiceOutput.style.display = 'none';
        }

        function readCurrentVerse() {
            const verse = document.getElementById('daily-verse').textContent;
            speak(verse);
            showVoiceOutput('Reading: ' + verse);
        }

        function navigateChapter(direction) {
            // Implementation for chapter navigation
            const currentChapter = document.querySelector('.chapter-btn.active');
            if (currentChapter) {
                const chapters = document.querySelectorAll('.chapter-btn');
                const currentIndex = Array.from(chapters).indexOf(currentChapter);
                const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
                
                if (chapters[newIndex]) {
                    chapters[newIndex].click();
                    speak(`Moving to chapter ${newIndex + 1}`);
                }
            }
        }

        function navigateToBook(bookName) {
            const books = document.querySelectorAll('.book-item');
            const book = Array.from(books).find(b => 
                b.textContent.toLowerCase() === bookName.toLowerCase()
            );
            
            if (book) {
                book.click();
                speak(`Opening ${bookName}`);
            } else {
                speak(`Sorry, I couldn't find the book ${bookName}`);
            }
        }

        function searchBible(query) {
            const results = bibleDatabase.search(query);
            if (results.length > 0) {
                speak(`Found ${results.length} results for ${query}`);
                showVoiceOutput(`${results.length} results found`);
            } else {
                speak(`No results found for ${query}`);
            }
        }

        function navigateToSection(section) {
            const sections = {
                'study materials': '.study-materials',
                'resources': '.resources',
                'locations': '.locations',
                'prayer': '.prayer-request'
            };

            const selector = sections[section.toLowerCase()];
            if (selector) {
                const element = document.querySelector(selector);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    speak(`Navigating to ${section}`);
                }
            }
        }

        function speak(text) {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        }
    }

    // Initialize voice assistant
    initializeVoiceAssistant();

    // Enhanced Resource functionality
    function initializeResources() {
        const resourceHandlers = {
            'Download Study Guide': handleStudyGuideDownload,
            'Prayer Request': handlePrayerRequest,
            'Weekly Newsletter': handleNewsletterSignup,
            'Online Library': handleLibraryAccess
        };

        resourceButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const handler = resourceHandlers[this.textContent];
                if (handler) handler();
                trackEvent('Resources', 'Access', this.textContent);
            });
        });
    }

    function handleStudyGuideDownload() {
        const guides = {
            'beginners': 'bible_study_basics.pdf',
            'intermediate': 'deeper_understanding.pdf',
            'advanced': 'theological_studies.pdf'
        };

        showResourceModal(`
            <h3>Select Study Guide Level</h3>
            <form id="studyGuideForm">
                <select required>
                    <option value="">Choose your level</option>
                    <option value="beginners">Beginner's Guide</option>
                    <option value="intermediate">Intermediate Studies</option>
                    <option value="advanced">Advanced Theological Studies</option>
                </select>
                <button type="submit">Download Guide</button>
            </form>
        `);
    }

    function handlePrayerRequest(data) {
        apiService.submitPrayerRequest(data)
            .then(response => {
                showSuccessMessage('Prayer request submitted successfully');
            })
            .catch(error => {
                showErrorMessage('Failed to submit prayer request');
            });
    }

    function handleNewsletterSignup() {
        showResourceModal(`
            <h3>Subscribe to Our Newsletter</h3>
            <form id="newsletterForm">
                <input type="text" placeholder="Full Name" required>
                <input type="email" placeholder="Email Address" required>
                <div class="newsletter-preferences">
                    <label>
                        <input type="checkbox" checked>
                        Daily Verses
                    </label>
                    <label>
                        <input type="checkbox" checked>
                        Weekly Studies
                    </label>
                    <label>
                        <input type="checkbox" checked>
                        Event Updates
                    </label>
                </div>
                <button type="submit">Subscribe</button>
            </form>
        `);
    }

    function handleLibraryAccess() {
        showResourceModal(`
            <h3>Online Library Access</h3>
            <div class="library-categories">
                <div class="category">
                    <h4>Study Materials</h4>
                    <ul class="resource-list">
                        <li><a href="#">Bible Commentaries</a></li>
                        <li><a href="#">Study Guides</a></li>
                        <li><a href="#">Historical Context</a></li>
                    </ul>
                </div>
                <div class="category">
                    <h4>Digital Resources</h4>
                    <ul class="resource-list">
                        <li><a href="#">E-Books</a></li>
                        <li><a href="#">Audio Lessons</a></li>
                        <li><a href="#">Video Series</a></li>
                    </ul>
                </div>
            </div>
            <button onclick="window.open('/library', '_blank')">
                Access Full Library
            </button>
        `);
    }

    function showResourceModal(content) {
        modal.style.display = 'block';
        document.getElementById('modal-message').innerHTML = content;

        // Handle form submissions
        const form = modal.querySelector('form');
        if (form) {
            form.addEventListener('submit', handleResourceSubmit);
        }
    }

    function handleResourceSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        // Show success message
        document.getElementById('modal-message').innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>Success!</h3>
                <p>Your request has been processed.</p>
            </div>
        `;

        setTimeout(() => {
            modal.style.display = 'none';
        }, 2000);
    }

    // Initialize resources
    initializeResources();

    // Gallery functionality
    function initializeGallery() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;
                
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                        setTimeout(() => item.style.opacity = '1', 50);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => item.style.display = 'none', 500);
                    }
                });

                trackEvent('Gallery', 'Filter', filter);
            });
        });

        // Random image rotation
        setInterval(() => {
            galleryItems.forEach(item => {
                const img = item.querySelector('img');
                const category = item.dataset.category;
                const query = category === 'nature' ? 'jungle,forest,mountains' : 'prayer,worship,community';
                img.src = `https://source.unsplash.com/800x600/?${query}&random=${Math.random()}`;
            });
        }, 30000); // Change images every 30 seconds
    }

    // Initialize gallery
    initializeGallery();

    // Social Media Sharing
    window.shareOnFacebook = function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        trackEvent('Social', 'Share', 'Facebook');
    };

    window.shareOnTwitter = function() {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Check out this amazing Bible study resource!');
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        trackEvent('Social', 'Share', 'Twitter');
    };

    window.shareOnWhatsApp = function() {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Check out this amazing Bible study resource!');
        window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
        trackEvent('Social', 'Share', 'WhatsApp');
    };

    window.shareOnLinkedIn = function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank');
        trackEvent('Social', 'Share', 'LinkedIn');
    };

    // Initialize Social Feed
    function initializeSocialFeed() {
        // Facebook Feed
        FB.init({
            appId: 'YOUR_FACEBOOK_APP_ID',
            version: 'v12.0'
        });

        // Twitter Feed
        twttr.widgets.createTimeline(
            {
                sourceType: "profile",
                screenName: "thebible"
            },
            document.getElementById("twitter-feed"),
            {
                height: 400,
                chrome: "nofooter"
            }
        );
    }

    // Initialize social features
    if (typeof FB !== 'undefined') {
        initializeSocialFeed();
    }

    // Add AI image generation functionality
    const aiImageSources = {
        getBibleSceneImage: async function(prompt) {
            const response = await fetch(`https://lexica.art/api/v1/search?q=${encodeURIComponent(prompt)}`);
            const data = await response.json();
            return data.images[0]?.url || 'default-image.jpg';
        },

        getRandomPerson: function() {
            return `https://thispersondoesnotexist.com/?${Date.now()}`;
        },

        getWorshipImage: function() {
            return `https://source.unsplash.com/800x600/?worship,church&random=${Date.now()}`;
        }
    };

    // Initialize gallery with AI and random images
    function initializeGallery() {
        const galleryItems = document.querySelectorAll('.gallery-item img');
        const testimonialImages = document.querySelectorAll('.testimonial-image img');

        // Rotate gallery images
        setInterval(async () => {
            galleryItems.forEach(async (img) => {
                if (img.dataset.category === 'worship') {
                    img.src = aiImageSources.getWorshipImage();
                } else if (img.dataset.category === 'study') {
                    img.src = await aiImageSources.getBibleSceneImage('bible study group praying');
                } else {
                    img.src = aiImageSources.getRandomPerson();
                }
            });
        }, 30000);

        // Rotate testimonial images
        setInterval(() => {
            testimonialImages.forEach(img => {
                img.src = aiImageSources.getRandomPerson();
            });
        }, 60000);
    }

    // Initialize with AI and random images
    initializeGallery();
});

// Progressive Loading
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});

// Smart Search with Autocomplete
const searchHandler = {
    initSmartSearch() {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', this.debounce(this.handleSearch, 300));
        }
    },

    handleSearch(event) {
        const query = event.target.value;
        if (query.length > 2) {
            this.performSearch(query);
        }
    },

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Gesture Controls
const gestureHandler = {
    init() {
        let touchstartX = 0;
        let touchendX = 0;

        document.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            this.handleGesture();
        });
    },

    handleGesture() {
        const THRESHOLD = 50;
        if (touchendX < touchstartX - THRESHOLD) {
            // Swipe left action
            this.navigateNext();
        }
        if (touchendX > touchstartX + THRESHOLD) {
            // Swipe right action
            this.navigatePrevious();
        }
    }
};

// Initialize UX enhancements
document.addEventListener('DOMContentLoaded', () => {
    searchHandler.initSmartSearch();
    gestureHandler.init();
    initializeScrollAnimations();
});

// Scroll Animations
function initializeScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => scrollObserver.observe(el));
}

// Add API service
const apiService = {
    baseUrl: 'http://localhost:5000/api',
    
    async getBibleVerse(book, chapter, verse) {
        const response = await fetch(
            `${this.baseUrl}/bible/verse/${book}/${chapter}/${verse}`
        );
        return response.json();
    },

    async trackProgress(bookData) {
        const response = await fetch(`${this.baseUrl}/study/progress`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        });
        return response.json();
    },

    async submitPrayerRequest(request) {
        const response = await fetch(`${this.baseUrl}/prayer/requests`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        });
        return response.json();
    }
};

// Add Bible verse API service
const verseApi = {
    async getDailyVerse() {
        const response = await fetch('/api/verses/daily');
        return response.json();
    },

    async getVerseByReference(book, chapter, verse) {
        const response = await fetch(`/api/verses/${book}/${chapter}/${verse}`);
        return response.json();
    },

    async searchVerses(query, translation = 'KJV') {
        const response = await fetch(`/api/verses/search?query=${query}&translation=${translation}`);
        return response.json();
    }
};

// Update verse display
async function updateDailyVerse() {
    try {
        const { verse } = await verseApi.getDailyVerse();
        document.getElementById('daily-verse').textContent = 
            `"${verse.text}" - ${verse.reference}`;
    } catch (error) {
        console.error('Error fetching daily verse:', error);
    }
}

// Add photo upload functionality
function initializePhotoUpload() {
    const photoForm = document.getElementById('photoUploadForm');
    
    if (photoForm) {
        photoForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(photoForm);
            
            try {
                const response = await fetch('/api/photos/upload', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                if (result.success) {
                    showSuccessMessage('Photos uploaded successfully');
                    displayUploadedPhotos(result.files);
                } else {
                    showErrorMessage(result.error);
                }
            } catch (error) {
                showErrorMessage('Failed to upload photos');
            }
        });
    }
}

function displayUploadedPhotos(files) {
    const galleryContainer = document.querySelector('.gallery-grid');
    
    files.forEach(file => {
        const photoItem = document.createElement('div');
        photoItem.className = 'gallery-item';
        photoItem.innerHTML = `
            <img src="${file.path}" alt="Uploaded photo" loading="lazy">
            <div class="gallery-caption">Local Upload</div>
        `;
        galleryContainer.insertBefore(photoItem, galleryContainer.firstChild);
    });
}

// Initialize photo upload
initializePhotoUpload();

// Frontend API Integration
const apiClient = {
    baseUrl: 'http://localhost:5000/api',
    
    async getBibleVerse(book, chapter, verse) {
        const response = await fetch(
            `${this.baseUrl}/verses/${book}/${chapter}/${verse}`
        );
        return response.json();
    },

    async getDailyVerse() {
        const response = await fetch(`${this.baseUrl}/verses/daily`);
        return response.json();
    },

    async searchVerses(query, translation = 'KJV') {
        const response = await fetch(
            `${this.baseUrl}/verses/search?query=${query}&translation=${translation}`
        );
        return response.json();
    }
};

// Update verse display with API data
async function updateDailyVerse() {
    try {
        const { verse } = await apiClient.getDailyVerse();
        const verseElement = document.getElementById('daily-verse');
        verseElement.innerHTML = `
            <div class="verse-text">"${verse.text}"</div>
            <div class="verse-reference">- ${verse.reference}</div>
            <div class="verse-translation">${verse.translation}</div>
        `;
    } catch (error) {
        console.error('Error fetching daily verse:', error);
        showErrorMessage('Failed to load daily verse');
    }
}

// Add verse search functionality
function initializeVerseSearch() {
    const searchForm = document.querySelector('.verse-search');
    if (searchForm) {
        searchForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const query = searchForm.querySelector('input').value;
            const results = await apiClient.searchVerses(query);
            displaySearchResults(results);
        });
    }
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    if (results.success && results.results.length > 0) {
        resultsContainer.innerHTML = results.results.map(verse => `
            <div class="verse-result">
                <div class="verse-text">"${verse.text}"</div>
                <div class="verse-reference">- ${verse.reference}</div>
            </div>
        `).join('');
    } else {
        resultsContainer.innerHTML = '<p>No verses found</p>';
    }
}

// Update book content display
async function showBookContent(book) {
    try {
        const chapters = await apiClient.getBibleVerse(book.name, 1, 1);
        // ...existing showBookContent code...
    } catch (error) {
        console.error('Error loading book content:', error);
        showErrorMessage('Failed to load book content');
    }
}

// Initialize frontend integration
document.addEventListener('DOMContentLoaded', () => {
    updateDailyVerse();
    initializeVerseSearch();
    // Update verse every 24 hours
    setInterval(updateDailyVerse, 24 * 60 * 60 * 1000);
});

// Error handling
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
}

// Dynamic Interface Controller
const interfaceController = {
    init() {
        this.setupDynamicHeaders();
        this.initializeParallax();
        this.setupScrollAnimations();
        this.initializeIntersectionObservers();
    },

    setupDynamicHeaders() {
        const headers = document.querySelectorAll('.dynamic-header');
        headers.forEach(header => {
            window.addEventListener('scroll', () => {
                const scroll = window.scrollY;
                header.style.transform = `translateY(${scroll * 0.5}px)`;
                header.style.opacity = 1 - (scroll * 0.003);
            });
        });
    },

    initializeParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            window.addEventListener('scroll', () => {
                const offset = window.scrollY * speed;
                element.style.transform = `translateY(${offset}px)`;
            });
        });
    },

    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.scroll-animate');
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            },
            { threshold: 0.1 }
        );
        animatedElements.forEach(el => observer.observe(el));
    }
};

// Initialize dynamic interface
interfaceController.init();

// Language handling
const languageHandler = {
    init() {
        $('#languageSelect').select2().on('change', this.changeLanguage);
    },

    async changeLanguage(e) {
        const lang = e.target.value;
        const translations = await fetchTranslations(lang);
        updatePageContent(translations);
    }
};

// 3D Bible Lands
const bible3D = {
    init() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        
        // Initialize 3D environment
    }
};

// AI Study Assistant
const aiAssistant = {
    init() {
        const chatInterface = document.querySelector('.ai-chat-interface');
        this.setupChatInterface(chatInterface);
    },

    async processQuery(query) {
        const response = await fetch('/api/ai/study-assistant', {
            method: 'POST',
            body: JSON.stringify({ query })
        });
        return response.json();
    }
};

// Initialize new features
document.addEventListener('DOMContentLoaded', () => {
    languageHandler.init();
    bible3D.init();
    aiAssistant.init();
});

// Sliding Window Controller
const slidingWindowController = {
    init() {
        this.window = document.createElement('div');
        this.window.className = 'sliding-window';
        this.window.innerHTML = `
            <div class="sliding-window-content">
                <div class="sliding-window-header">
                    <h3>Quick Access</h3>
                    <button class="close-btn">&times;</button>
                </div>
                <div class="sliding-window-tabs">
                    <div class="sliding-window-tab active" data-tab="notes">Notes</div>
                    <div class="sliding-window-tab" data-tab="bookmarks">Bookmarks</div>
                    <div class="sliding-window-tab" data-tab="highlights">Highlights</div>
                </div>
                <div class="sliding-window-body"></div>
            </div>
        `;
        
        document.body.appendChild(this.window);
        this.setupToggle();
        this.setupEventListeners();
    },

    setupToggle() {
        const toggle = document.createElement('div');
        toggle.className = 'sliding-window-toggle';
        toggle.innerHTML = '<i class="fas fa-book"></i>';
        document.body.appendChild(toggle);

        toggle.addEventListener('click', () => {
            this.window.classList.toggle('active');
        });
    },

    setupEventListeners() {
        const closeBtn = this.window.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            this.window.classList.remove('active');
        });

        const tabs = this.window.querySelectorAll('.sliding-window-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.loadTabContent(tab.dataset.tab);
            });
        });
    },

    loadTabContent(tab) {
        const content = this.getTabContent(tab);
        this.window.querySelector('.sliding-window-body').innerHTML = content;
    },

    getTabContent(tab) {
        const contents = {
            notes: `
                <div class="notes-section">
                    <textarea placeholder="Add your study notes here..."></textarea>
                    <button class="save-note-btn">Save Note</button>
                </div>
            `,
            bookmarks: `
                <div class="bookmarks-section">
                    <div class="bookmark-list">
                        ${this.getBookmarks().map(b => `
                            <div class="bookmark-item">
                                <span>${b.reference}</span>
                                <small>${b.date}</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `,
            highlights: `
                <div class="highlights-section">
                    <div class="highlight-list">
                        ${this.getHighlights().map(h => `
                            <div class="highlight-item">
                                <p>${h.text}</p>
                                <small>${h.reference}</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `
        };
        return contents[tab] || '';
    },

    getBookmarks() {
        return JSON.parse(localStorage.getItem('bookmarks') || '[]');
    },

    getHighlights() {
        return JSON.parse(localStorage.getItem('highlights') || '[]');
    }
};

// Initialize sliding window
document.addEventListener('DOMContentLoaded', () => {
    slidingWindowController.init();
});

// Translation Window Controller
const translationWindow = {
    init() {
        this.window = document.querySelector('.translation-window');
        this.sourceText = document.getElementById('sourceText');
        this.targetText = document.getElementById('translatedText');
        this.translateBtn = document.querySelector('.translate-btn');
        this.copyBtn = document.querySelector('.copy-btn');
        this.closeBtn = document.querySelector('.close-translation-btn');
        this.swapBtn = document.querySelector('.swap-language-btn');
        
        this.setupEventListeners();
    },

    setupEventListeners() {
        this.translateBtn.addEventListener('click', () => this.translate());
        this.copyBtn.addEventListener('click', () => this.copyTranslation());
        this.closeBtn.addEventListener('click', () => this.hide());
        this.swapBtn.addEventListener('click', () => this.swapLanguages());
        
        // Auto-translate after brief pause in typing
        this.sourceText.addEventListener('input', this.debounce(() => this.translate(), 1000));
    },

    async translate() {
        const text = this.sourceText.value;
        const sourceLang = document.getElementById('sourceLanguage').value;
        const targetLang = document.getElementById('targetLanguage').value;

        if (!text) return;

        try {
            const translation = await this.getTranslation(text, sourceLang, targetLang);
            this.targetText.textContent = translation;
        } catch (error) {
            console.error('Translation failed:', error);
        }
    },

    async getTranslation(text, sourceLang, targetLang) {
        const response = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, sourceLang, targetLang })
        });
        const data = await response.json();
        return data.translation;
    },

    copyTranslation() {
        navigator.clipboard.writeText(this.targetText.textContent)
            .then(() => {
                this.showToast('Copied to clipboard!');
            })
            .catch(err => console.error('Failed to copy:', err));
    },

    swapLanguages() {
        const sourceLang = document.getElementById('sourceLanguage');
        const targetLang = document.getElementById('targetLanguage');
        [sourceLang.value, targetLang.value] = [targetLang.value, sourceLang.value];
        this.translate();
    },

    show() {
        this.window.classList.add('active');
    },

    hide() {
        this.window.classList.remove('active');
    },

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    },

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Initialize translation window
document.addEventListener('DOMContentLoaded', () => {
    translationWindow.init();
});

// Initialize Bible Guide
document.addEventListener('DOMContentLoaded', () => {
    const bibleGuide = new BibleGuide();
    
    // Add to global window object for access
    window.bibleGuide = bibleGuide;
});

// Initialize Books Guide
document.addEventListener('DOMContentLoaded', () => {
    const booksGuide = new BooksGuide();
    window.booksGuide = booksGuide; // Make it globally accessible if needed
});

// Initialize Bible Reader
document.addEventListener('DOMContentLoaded', () => {
    const bibleReader = new BibleReader();
    document.querySelector('main').appendChild(bibleReader.container);
});

// Initialize connection service
const connectionService = new ConnectionService();

// Add connection status listener
connectionService.addListener(async (isOnline) => {
    if (isOnline) {
        await connectionService.syncData();
    }
});

// Add periodic sync
setInterval(async () => {
    if (connectionService.online) {
        await connectionService.syncData();
    }
}, 5 * 60 * 1000); // Sync every 5 minutes

// Initialize Bible Sidebar
document.addEventListener('DOMContentLoaded', () => {
    const bibleSidebar = new BibleSidebar();
    
    // Handle book selection
    document.addEventListener('bookSelected', (e) => {
        const bookName = e.detail;
        // Update other components when book is selected
        if (window.bibleReader) {
            window.bibleReader.loadBook(bookName);
        }
    });
});
