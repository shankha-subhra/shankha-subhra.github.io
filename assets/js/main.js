document.addEventListener('DOMContentLoaded', () => {
    // Dark/Light Mode
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            themeBtn.innerHTML = newTheme === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
        });
    }

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('sticky-navbar');
            } else {
                navbar.classList.remove('sticky-navbar');
            }
        });
    }

    // Active Menu Highlighting
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if(link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // Typing Effect
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const words = JSON.parse(typingElement.getAttribute('data-words'));
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before new word
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    function reveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', reveal);
    reveal();

    // Animated Counters
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); 
        
        let current = 0;
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });

    // Back to top
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Project Filtering & Searching
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const searchInput = document.getElementById('project-search');
    
    function filterProjects() {
        let activeFilter = 'all';
        const activeBtn = document.querySelector('.filter-btn.active');
        if (activeBtn) activeFilter = activeBtn.getAttribute('data-filter');
        
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        
        let visibleCount = 0;
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const title = card.querySelector('.card-title').innerText.toLowerCase();
            const tech = card.getAttribute('data-tech').toLowerCase();
            
            const matchesFilter = activeFilter === 'all' || category === activeFilter;
            const matchesSearch = title.includes(searchTerm) || tech.includes(searchTerm);
            
            if (matchesFilter && matchesSearch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });
        
        const countDisplay = document.getElementById('results-count');
        if (countDisplay) countDisplay.innerText = `${visibleCount} projects found`;
    }
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterProjects();
        });
    });
    
    if (searchInput) {
        searchInput.addEventListener('input', filterProjects);
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!contactForm.checkValidity()) {
                e.stopPropagation();
                contactForm.classList.add('was-validated');
            } else {
                const toast = new bootstrap.Toast(document.getElementById('successToast'));
                toast.show();
                contactForm.reset();
                contactForm.classList.remove('was-validated');
            }
        });
    }

    // Site Details Modal Logic
    const siteDetailsModal = document.getElementById('siteDetailsModal');
    if (siteDetailsModal) {
        siteDetailsModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const title = button.getAttribute('data-title');
            const desc = button.getAttribute('data-desc');
            const tech = button.getAttribute('data-tech');
            const url = button.getAttribute('data-url');
            
            siteDetailsModal.querySelector('#modal-site-title').textContent = title || 'Not available';
            siteDetailsModal.querySelector('#modal-site-desc').textContent = desc || 'No description available for this project.';
            siteDetailsModal.querySelector('#modal-site-tech .badge').textContent = tech;
            siteDetailsModal.querySelector('#modal-visit-btn').href = url;
        });
    }
});
