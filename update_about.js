const fs = require('fs');

const htmlContent = `
<!-- ABOUT HERO -->
<section class="about-hero py-5">
    <div class="container reveal">
        <div class="row align-items-center g-5">
            
            <div class="col-lg-7">
                <span class="badge bg-success-subtle text-success mb-3 px-3 py-2">
                    ABOUT ME
                </span>

                <h1 class="display-4 fw-bold mb-4">
                    I Build eCommerce Experiences
                    <span class="text-success">That Scale.</span>
                </h1>

                <p class="lead text-secondary mb-4">
                    I'm <strong>Shankha Subhra Bag</strong>, a Senior Full-Stack and
                    eCommerce Developer with <strong>11+ years of professional experience</strong>
                    building scalable Shopify, WordPress, Laravel and BigCommerce solutions.
                </p>

                <p class="text-secondary">
                    My work goes beyond creating storefronts. I build custom Shopify applications,
                    checkout extensions, subscription systems, ERP integrations, automated data
                    synchronization workflows and complex eCommerce functionality designed around
                    real business requirements.
                </p>

                <div class="d-flex flex-wrap gap-3 mt-4">
                    <a href="shopify-projects.html" class="btn btn-success btn-lg">
                        View My Projects
                    </a>

                    <a href="mailto:shankha4030@gmail.com" class="btn btn-outline-dark btn-lg">
                        Let's Work Together
                    </a>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="about-stats shadow-lg rounded-4 p-4 bg-white">

                    <div class="row text-center g-4">

                        <div class="col-6">
                            <h2 class="fw-bold text-success counter" data-target="11">0</h2>
                            <p class="mb-0 text-muted">Years Experience</p>
                        </div>

                        <div class="col-6">
                            <h2 class="fw-bold text-success">
                                <span class="counter" data-target="200">0</span>+
                            </h2>
                            <p class="mb-0 text-muted">eCommerce Projects</p>
                        </div>

                        <div class="col-6">
                            <h2 class="fw-bold text-success">
                                <span class="counter" data-target="10">0</span>+
                            </h2>
                            <p class="mb-0 text-muted">Shopify Apps</p>
                        </div>

                        <div class="col-6">
                            <h2 class="fw-bold text-success">
                                <span class="counter" data-target="4">0</span>+
                            </h2>
                            <p class="mb-0 text-muted">Commerce Platforms</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</section>


<!-- WHAT I DO -->
<section class="py-5 bg-light">
    <div class="container reveal pt-5">

        <div class="text-center mb-5">
            <span class="text-success fw-semibold">WHAT I DO</span>
            <h2 class="fw-bold mt-2">From Storefront to Enterprise Integration</h2>
            <p class="text-muted">
                I work across the complete eCommerce development lifecycle.
            </p>
        </div>

        <div class="row g-4">

            <div class="col-md-6 col-lg-4 reveal">
                <div class="service-card h-100 bg-white rounded-4 shadow-sm p-4 text-center">
                    <div class="service-icon mb-3">🛍️</div>
                    <h4>Shopify Development</h4>
                    <p class="text-muted mb-0 small">
                        Shopify 2.0 themes, Liquid development, Shopify Plus,
                        custom sections, checkout extensions and performance optimization.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 reveal" style="transition-delay: 0.1s;">
                <div class="service-card h-100 bg-white rounded-4 shadow-sm p-4 text-center">
                    <div class="service-icon mb-3">⚙️</div>
                    <h4>Custom Shopify Apps</h4>
                    <p class="text-muted mb-0 small">
                        Custom applications for subscriptions, shipping rules,
                        registrations, automation, pricing logic and business workflows.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 reveal" style="transition-delay: 0.2s;">
                <div class="service-card h-100 bg-white rounded-4 shadow-sm p-4 text-center">
                    <div class="service-icon mb-3">🔗</div>
                    <h4>ERP & API Integrations</h4>
                    <p class="text-muted mb-0 small">
                        Shopify integrations with SAP, Salesforce, NetSuite,
                        Epicor Prophet 21 and other enterprise systems.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 reveal" style="transition-delay: 0.3s;">
                <div class="service-card h-100 bg-white rounded-4 shadow-sm p-4 text-center">
                    <div class="service-icon mb-3">🚀</div>
                    <h4>Platform Migration</h4>
                    <p class="text-muted mb-0 small">
                        Product, customer, inventory, order, pricing and SEO data
                        migration between major eCommerce platforms.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 reveal" style="transition-delay: 0.4s;">
                <div class="service-card h-100 bg-white rounded-4 shadow-sm p-4 text-center">
                    <div class="service-icon mb-3">💻</div>
                    <h4>Laravel Development</h4>
                    <p class="text-muted mb-0 small">
                        Laravel applications, MySQL databases, REST APIs,
                        queues, scheduled jobs and third-party integrations.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 reveal" style="transition-delay: 0.5s;">
                <div class="service-card h-100 bg-white rounded-4 shadow-sm p-4 text-center">
                    <div class="service-icon mb-3">🌐</div>
                    <h4>WordPress Development</h4>
                    <p class="text-muted mb-0 small">
                        Custom WordPress themes, plugins, WooCommerce,
                        ACF, custom post types and API integrations.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>


<!-- MY APPROACH -->
<section class="py-5">
    <div class="container reveal pt-5">
        <div class="row align-items-center g-5">

            <div class="col-lg-6">
                <span class="text-success fw-semibold">MY APPROACH</span>

                <h2 class="fw-bold mt-2 mb-4">
                    I Don't Just Write Code.<br>
                    I Solve Business Problems.
                </h2>

                <p class="text-muted">
                    Every project starts with understanding the business process.
                    I then design a maintainable technical solution that connects
                    storefront experience, backend logic, APIs and third-party systems.
                </p>
            </div>

            <div class="col-lg-6">

                <div class="timeline">

                    <div class="timeline-item reveal" style="transition-delay: 0.1s;">
                        <span>01</span>
                        <div>
                            <h5>Understand</h5>
                            <p class="text-muted small">Business requirements, customer journey and technical challenges.</p>
                        </div>
                    </div>

                    <div class="timeline-item reveal" style="transition-delay: 0.2s;">
                        <span>02</span>
                        <div>
                            <h5>Architect</h5>
                            <p class="text-muted small">Choose scalable technologies and define the integration workflow.</p>
                        </div>
                    </div>

                    <div class="timeline-item reveal" style="transition-delay: 0.3s;">
                        <span>03</span>
                        <div>
                            <h5>Build</h5>
                            <p class="text-muted small">Develop clean, reusable and maintainable functionality.</p>
                        </div>
                    </div>

                    <div class="timeline-item reveal" style="transition-delay: 0.4s; border-bottom: none;">
                        <span>04</span>
                        <div>
                            <h5>Optimize</h5>
                            <p class="text-muted small">Improve speed, usability, stability and conversion performance.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</section>


<!-- TECHNOLOGY -->
<section class="py-5 bg-dark text-white">
    <div class="container reveal py-5">

        <div class="text-center mb-5">
            <span class="text-success fw-semibold">TECH STACK</span>
            <h2 class="fw-bold mt-2 text-white">Technologies I Work With</h2>
        </div>

        <div class="tech-cloud text-center">

            <span>Shopify</span>
            <span>Shopify Plus</span>
            <span>Liquid</span>
            <span>JavaScript</span>
            <span>jQuery</span>
            <span>React</span>
            <span>Node.js</span>
            <span>PHP</span>
            <span>Laravel</span>
            <span>WordPress</span>
            <span>WooCommerce</span>
            <span>BigCommerce</span>
            <span>MySQL</span>
            <span>REST API</span>
            <span>Webhooks</span>
            <span>Git</span>

        </div>

    </div>
</section>


<!-- CAREER STORY -->
<section class="py-5 bg-light">
    <div class="container reveal pt-5">

        <div class="text-center mb-5">
            <span class="text-success fw-semibold">MY JOURNEY</span>
            <h2 class="fw-bold mt-2">More Than a Decade of Development</h2>
        </div>

        <div class="career-line">

            <div class="career-item reveal">
                <strong class="text-success">2014</strong>
                <h5 class="mt-2">Started Web Development</h5>
                <p class="text-muted small mb-0">PHP and WordPress development.</p>
            </div>

            <div class="career-item reveal" style="transition-delay: 0.1s;">
                <strong class="text-success">2018+</strong>
                <h5 class="mt-2">Senior Development Roles</h5>
                <p class="text-muted small mb-0">Shopify, WordPress, Laravel and API integrations.</p>
            </div>

            <div class="career-item reveal" style="transition-delay: 0.2s;">
                <strong class="text-success">2021+</strong>
                <h5 class="mt-2">Senior Team Lead</h5>
                <p class="text-muted small mb-0">Leading Shopify and full-stack eCommerce development.</p>
            </div>

            <div class="career-item reveal" style="transition-delay: 0.3s;">
                <strong class="text-success">2024 – Present</strong>
                <h5 class="mt-2">Senior Shopify Full-Stack Developer</h5>
                <p class="text-muted small mb-0">
                    Shopify applications, subscriptions, checkout extensions,
                    ERP integrations and enterprise commerce solutions.
                </p>
            </div>

        </div>

    </div>
</section>


<!-- CTA -->
<section class="py-5">
    <div class="container reveal">

        <div class="cta-box text-center rounded-4 p-5">

            <span class="text-success fw-semibold">
                HAVE A PROJECT IN MIND?
            </span>

            <h2 class="fw-bold mt-2 mb-3">
                Let's Build Something Powerful Together.
            </h2>

            <p class="text-muted mb-4 mx-auto" style="max-width: 600px;">
                Shopify development, custom apps, Laravel applications,
                API integrations or complex eCommerce challenges —
                I'm ready to help turn your requirements into working solutions.
            </p>

            <a href="mailto:shankha4030@gmail.com" class="btn btn-success btn-lg px-5">
                Start a Conversation
            </a>

        </div>

    </div>
</section>

<script>
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            let current = 0;
            const increment = Math.max(1, Math.ceil(target / 60));
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = current;
            }, 25);
            observer.unobserve(counter);
        });
    }, {
        threshold: 0.5
    });
    counters.forEach(counter => observer.observe(counter));
});
</script>
`;

const cssContent = `
/* ABOUT PAGE CUSTOM STYLES */
.service-card {
    transition: all .35s ease;
    border: 1px solid #eee;
}
.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 45px rgba(0,0,0,.10) !important;
}
.service-icon {
    font-size: 38px;
}
.tech-cloud {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
}
.tech-cloud span {
    padding: 12px 20px;
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 50px;
    transition: .3s;
}
.tech-cloud span:hover {
    background: #198754;
    transform: translateY(-4px);
}
.timeline-item {
    display: flex;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
}
.timeline-item span {
    min-width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #198754;
    color: #fff;
    border-radius: 50%;
    font-weight: 700;
}
.career-line {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
}
.career-item {
    border-top: 3px solid #198754;
    padding: 25px 20px;
    background: #fff;
    box-shadow: 0 8px 30px rgba(0,0,0,.06);
    transition: .3s;
    border-radius: 0 0 10px 10px;
}
.career-item:hover {
    transform: translateY(-6px);
}
.cta-box {
    background: linear-gradient(
        135deg,
        #f2fff7 0%,
        #ffffff 100%
    );
    border: 1px solid #dcefe3;
}
@media (max-width: 991px) {
    .career-line {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 575px) {
    .career-line {
        grid-template-columns: 1fr;
    }
}
`;

// 1. Update about.html
const aboutFile = 'e:\\New Projects\\shankha-subhra.github.io\\about.html';
let aboutHtml = fs.readFileSync(aboutFile, 'utf8');

const mainStart = aboutHtml.indexOf('<main>');
const mainEnd = aboutHtml.indexOf('</main>');

if (mainStart !== -1 && mainEnd !== -1) {
    aboutHtml = aboutHtml.substring(0, mainStart + 6) + '\n' + htmlContent + '\n' + aboutHtml.substring(mainEnd);
    fs.writeFileSync(aboutFile, aboutHtml, 'utf8');
    console.log('Updated about.html');
}

// 2. Append CSS to style.css
const cssFile = 'e:\\New Projects\\shankha-subhra.github.io\\assets\\css\\style.css';
let styleCss = fs.readFileSync(cssFile, 'utf8');
if (!styleCss.includes('.tech-cloud')) {
    fs.appendFileSync(cssFile, '\n\n' + cssContent);
    console.log('Appended CSS to style.css');
} else {
    console.log('CSS already present.');
}
