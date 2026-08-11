const fs = require('fs');
const path = require('path');

const config = {
    shopify: {
        file: 'shopify-projects.html',
        title: 'Senior Shopify Developer | Shopify Plus, Custom Apps & eCommerce Projects',
        desc: 'Senior Shopify Developer with 10+ years of experience in Shopify Plus, custom apps, checkout extensions, APIs, and complex eCommerce workflows.',
        badge: 'SHOPIFY DEVELOPMENT',
        headline: 'Shopify Stores, Custom Apps & Commerce <span class="text-success">Solutions</span>',
        description: '10+ years of Shopify experience building Shopify 2.0 storefronts, Shopify Plus solutions, custom and public apps, subscription systems, checkout extensions, API integrations, performance optimization and complex eCommerce workflows.',
        stats: [
            { icon: 'bi-shop', value: '10', suffix: '+', label: 'Years Shopify Experience' },
            { icon: 'bi-box-seam', value: '25', suffix: '+', label: 'Shopify Apps' },
            { icon: 'bi-cart-check', value: '200', suffix: '+', label: 'eCommerce Projects' },
            { icon: 'bi-star-fill', value: '100', suffix: '%', label: 'Shopify Plus Expertise' }
        ],
        btnText: 'View Shopify Projects'
    },
    wordpress: {
        file: 'wordpress-projects.html',
        title: 'Senior WordPress Developer | WooCommerce, Custom Themes & Plugins',
        desc: 'Senior WordPress Developer with 11+ years of experience building custom themes, WooCommerce stores, custom plugins, and scalable business websites.',
        badge: 'WORDPRESS DEVELOPMENT',
        headline: 'Custom WordPress, WooCommerce & Plugin <span class="text-success">Development</span>',
        description: '11+ years of WordPress development experience building custom themes, WooCommerce stores, custom plugins, ACF-based solutions, custom post types, payment integrations, API integrations and scalable business websites.',
        stats: [
            { icon: 'bi-wordpress', value: '11', suffix: '+', label: 'Years WP Experience' },
            { icon: 'bi-file-earmark-code', value: '350', suffix: '+', label: 'WordPress Projects' },
            { icon: 'bi-plugin', value: '30', suffix: '+', label: 'Custom Plugins' },
            { icon: 'bi-cart4', value: '100', suffix: '%', label: 'WooCommerce Expertise' }
        ],
        btnText: 'View WordPress Projects'
    },
    laravel: {
        file: 'laravel-projects.html',
        title: 'Senior Laravel Developer | APIs, MySQL & Web Applications',
        desc: 'Senior Laravel Developer with 6+ years of experience building secure web applications, REST APIs, MySQL-based systems, and eCommerce automation platforms.',
        badge: 'LARAVEL DEVELOPMENT',
        headline: 'Laravel Applications, APIs & Business <span class="text-success">Automation</span>',
        description: '6+ years of Laravel development experience building secure web applications, REST APIs, MySQL-based systems, queues, scheduled jobs, payment integrations, ERP integrations and eCommerce automation platforms.',
        stats: [
            { icon: 'bi-braces', value: '6', suffix: '+', label: 'Years Laravel Experience' },
            { icon: 'bi-laptop', value: '25', suffix: '+', label: 'Laravel Projects' },
            { icon: 'bi-hdd-network', value: '100', suffix: '%', label: 'REST API Integration' },
            { icon: 'bi-database', value: '100', suffix: '%', label: 'MySQL Backend Systems' }
        ],
        btnText: 'View Laravel Projects'
    }
};

const dir = path.join('e:', 'New Projects', 'shankha-subhra.github.io');

Object.values(config).forEach(c => {
    const filePath = path.join(dir, c.file);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${c.file}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Update Title
    content = content.replace(/<title>.*?<\/title>/, `<title>${c.title}</title>`);
    
    // Update Meta Description
    content = content.replace(/<meta name="description"[\s\S]*?>/, `<meta name="description" content="${c.desc}">`);

    // Add id="projects" to the projects section
    // Replace `<section class="py-5 bg-light min-vh-100">` with `<section id="projects" class="py-5 bg-light min-vh-100">`
    if (!content.includes('id="projects"')) {
        content = content.replace('<section class="py-5 bg-light min-vh-100">', '<section id="projects" class="py-5 bg-light min-vh-100">');
    }

    // Build the hero section
    const heroSection = `
    <!-- Hero Section -->
    <section class="py-5 bg-white border-bottom hero-section">
        <div class="container py-lg-5">
            <div class="row align-items-center g-5">
                <div class="col-lg-6 reveal fade-up">
                    <span class="badge bg-success-subtle text-success mb-3 px-3 py-2 fw-semibold tracking-wide">
                        ${c.badge}
                    </span>
                    <h1 class="display-4 fw-bold mb-4 lh-tight" style="font-family:'Jost', sans-serif;">
                        ${c.headline}
                    </h1>
                    <p class="lead text-secondary mb-4 pe-lg-4" style="line-height: 1.8;">
                        ${c.description}
                    </p>
                    <div class="d-flex flex-wrap gap-3 mt-2">
                        <a href="#projects" class="btn btn-primary px-4 py-3 rounded-pill fw-semibold shadow-sm d-flex align-items-center smooth-scroll">
                            ${c.btnText} <i class="bi bi-arrow-down ms-2"></i>
                        </a>
                        <a href="mailto:shankha4030@gmail.com" class="btn btn-outline-dark px-4 py-3 rounded-pill fw-semibold d-flex align-items-center">
                            Hire Me <i class="bi bi-envelope ms-2"></i>
                        </a>
                    </div>
                </div>
                
                <div class="col-lg-6 reveal fade-up delay-1">
                    <div class="row g-4">
                        <div class="col-6">
                            <div class="hero-stat-card bg-white rounded-4 p-4 shadow-sm h-100 border text-center">
                                <div class="icon-wrapper bg-primary-subtle text-primary rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                                    <i class="bi ${c.stats[0].icon} fs-3"></i>
                                </div>
                                <h2 class="fw-bold text-dark mb-1"><span class="counter" data-target="${c.stats[0].value}">0</span>${c.stats[0].suffix}</h2>
                                <p class="text-muted small mb-0 fw-semibold">${c.stats[0].label}</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="hero-stat-card bg-white rounded-4 p-4 shadow-sm h-100 border text-center mt-lg-4">
                                <div class="icon-wrapper bg-success-subtle text-success rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                                    <i class="bi ${c.stats[1].icon} fs-3"></i>
                                </div>
                                <h2 class="fw-bold text-dark mb-1"><span class="counter" data-target="${c.stats[1].value}">0</span>${c.stats[1].suffix}</h2>
                                <p class="text-muted small mb-0 fw-semibold">${c.stats[1].label}</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="hero-stat-card bg-white rounded-4 p-4 shadow-sm h-100 border text-center mt-lg-n4">
                                <div class="icon-wrapper bg-info-subtle text-info rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                                    <i class="bi ${c.stats[2].icon} fs-3"></i>
                                </div>
                                <h2 class="fw-bold text-dark mb-1"><span class="counter" data-target="${c.stats[2].value}">0</span>${c.stats[2].suffix}</h2>
                                <p class="text-muted small mb-0 fw-semibold">${c.stats[2].label}</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="hero-stat-card bg-white rounded-4 p-4 shadow-sm h-100 border text-center">
                                <div class="icon-wrapper bg-warning-subtle text-warning rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                                    <i class="bi ${c.stats[3].icon} fs-3"></i>
                                </div>
                                <h2 class="fw-bold text-dark mb-1"><span class="counter" data-target="${c.stats[3].value}">0</span>${c.stats[3].suffix}</h2>
                                <p class="text-muted small mb-0 fw-semibold">${c.stats[3].label}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

    // Remove any previously added hero section (if rerunning)
    const heroRegex = /<!-- Hero Section -->[\s\S]*?<\/section>/;
    if (heroRegex.test(content)) {
        content = content.replace(heroRegex, '');
    }

    // Insert Hero after <main>
    const mainTag = '<main>';
    const mainIndex = content.indexOf(mainTag);
    if (mainIndex !== -1) {
        content = content.substring(0, mainIndex + mainTag.length) + '\n' + heroSection + content.substring(mainIndex + mainTag.length);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${c.file}`);
    } else {
        console.log(`Could not find <main> in ${c.file}`);
    }
});

// Now update style.css
const cssPath = path.join(dir, 'assets', 'css', 'style.css');
if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    
    const newCSS = `

/* Hero Stats Card */
.hero-stat-card {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    top: 0;
}
.hero-stat-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.08) !important;
}
.hero-stat-card .icon-wrapper {
    transition: transform 0.3s ease;
}
.hero-stat-card:hover .icon-wrapper {
    transform: scale(1.1);
}
.tracking-wide {
    letter-spacing: 1px;
}
`;
    if (!css.includes('.hero-stat-card')) {
        fs.appendFileSync(cssPath, newCSS, 'utf8');
        console.log('Updated style.css');
    }
}

// Now update main.js for animated counters and smooth scroll
const jsPath = path.join(dir, 'assets', 'js', 'main.js');
if (fs.existsSync(jsPath)) {
    let js = fs.readFileSync(jsPath, 'utf8');

    const newJS = `

// Animated Counters for Hero Sections
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            
            // Only animate if the element is in view (using intersection observer)
            const observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting) {
                    updateCount();
                    observer.disconnect();
                }
            }, { threshold: 0.5 });
            observer.observe(counter);
        });
    };
    
    if (counters.length > 0) {
        animateCounters();
    }
});
`;

    if (!js.includes('animateCounters')) {
        fs.appendFileSync(jsPath, newJS, 'utf8');
        console.log('Updated main.js');
    }
}
