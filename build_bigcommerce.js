const fs = require('fs');

const headAndNav = `<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BigCommerce Portfolio - Shankha Subhra Bag</title>
  <meta name="description"
    content="Senior BigCommerce Developer specializing in B2B and B2C storefronts, large catalogs, ERP integrations, Stencil theme development, and API workflows.">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon-16x16.png">
  <link rel="manifest" href="assets/images/site.webmanifest">
  <link rel="shortcut icon" href="assets/images/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap"
    rel="stylesheet">
</head>

<body>

  <nav class="navbar navbar-expand-lg sticky-navbar">
    <div class="container">
      <a class="navbar-brand" href="/"><img height="52" src="assets/images/ssblogo.png"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Projects</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="all-projects.html">All Projects</a></li>
              <li><a class="dropdown-item" href="shopify-projects.html">Shopify</a></li>
              <li><a class="dropdown-item" href="bigcommerce-projects.html">BigCommerce</a></li>
              <li><a class="dropdown-item" href="wordpress-projects.html">WordPress</a></li>
              <li><a class="dropdown-item" href="laravel-projects.html">Laravel</a></li>
            </ul>
          </li>
          <li class="nav-item ms-lg-3">
            <a href="mailto:shankha4030@gmail.com" class="btn btn-primary d-none d-lg-inline-block">Hire Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main>`;

const hero = `
    <!-- Hero Section -->
    <section class="py-5 bg-light about-hero text-center" style="margin-top: 20px;">
        <div class="container py-5 reveal active">
            <span class="text-success fw-semibold mb-2 d-block">PORTFOLIO</span>
            <h1 class="display-4 fw-bold mb-4">BigCommerce Development <span class="text-success">Projects</span></h1>
            <p class="lead text-secondary mb-5 mx-auto" style="max-width: 800px;">
                Specializing in B2B and B2C BigCommerce stores with large catalogs, ERP integrations, advanced search and filtering, custom pricing tiers, streamlined checkout, shipping automation, and robust API workflows.
            </p>
            <div class="row g-4 justify-content-center text-center mt-3 border-top pt-5">
                <div class="col-6 col-md-3">
                    <h3 class="fw-bold text-success mb-1">4+ Years</h3>
                    <p class="mb-0 text-muted small">BigCommerce Experience</p>
                </div>
                <div class="col-6 col-md-3">
                    <h3 class="fw-bold text-success mb-1">50,000+</h3>
                    <p class="mb-0 text-muted small">SKU Catalog Experience</p>
                </div>
                <div class="col-6 col-md-3">
                    <h3 class="fw-bold text-success mb-1">B2B & B2C</h3>
                    <p class="mb-0 text-muted small">Commerce Focus</p>
                </div>
                <div class="col-6 col-md-3">
                    <h3 class="fw-bold text-success mb-1">ERP & API</h3>
                    <p class="mb-0 text-muted small">Complex Integrations</p>
                </div>
            </div>
        </div>
    </section>
`;

const expertiseCards = [
    { title: 'BigCommerce B2B Development', icon: 'building' },
    { title: 'BigCommerce B2C Development', icon: 'cart' },
    { title: 'Custom Storefront Development', icon: 'layout-text-window' },
    { title: 'Product & Catalog Management', icon: 'box-seam' },
    { title: 'Customer Groups & Dealer Pricing', icon: 'people' },
    { title: 'Searchspring / Klevu Search', icon: 'search' },
    { title: 'ERP Integration', icon: 'diagram-3' },
    { title: 'NetSuite Integration', icon: 'cloud-arrow-up' },
    { title: 'Acumatica Integration', icon: 'hdd-network' },
    { title: 'Celigo Integration', icon: 'arrow-left-right' },
    { title: 'Shipping Rules', icon: 'truck' },
    { title: 'Product Filtering', icon: 'funnel' },
    { title: 'API Integration', icon: 'code-slash' },
    { title: 'Inventory Synchronization', icon: 'arrow-repeat' },
    { title: 'Google Shopping / Product Feeds', icon: 'google' }
];

let expertiseHTML = `
    <!-- Expertise Section -->
    <section class="py-5 bg-white">
        <div class="container reveal">
            <div class="text-center mb-5">
                <span class="text-success fw-semibold">WHAT I DO</span>
                <h2 class="fw-bold mt-2">BigCommerce Expertise</h2>
            </div>
            <div class="row g-4 justify-content-center">`;

expertiseCards.forEach(card => {
    expertiseHTML += `
                <div class="col-6 col-md-4 col-lg-3">
                    <div class="service-card p-4 rounded-4 h-100 text-center bg-light">
                        <div class="text-success mb-3">
                            <i class="bi bi-${card.icon} fs-1"></i>
                        </div>
                        <h6 class="fw-bold mb-0" style="font-family:'Jost', sans-serif;">${card.title}</h6>
                    </div>
                </div>`;
});

expertiseHTML += `
            </div>
        </div>
    </section>`;


const projects = [
    { name: "Casey’s Distributing", url: "https://www.caseys-distributing.com/", desc: "B2B BigCommerce wholesale storefront supporting thousands of resellers, 50+ manufacturers, and more than 50,000 products.", features: "Wholesale purchasing, bulk catalogue management, custom product fields, spreadsheet imports, reseller functionality.", color: "#1a1a1a" },
    { name: "BB Wheels Online", url: "https://www.bbwheelsonline.com/", desc: "Large automotive BigCommerce catalog with vehicle-based product discovery and dealer pricing.", features: "Searchspring filtering, vehicle search, NetSuite via Celigo, customer groups, dealer pricing, B2B discounts, BNPL.", color: "#c41230" },
    { name: "Woodworking Shop", url: "https://www.woodworkingshop.com/", desc: "BigCommerce woodworking store with approximately 13,000 products.", features: "Advanced navigation, search, filtering, shipping rules, Google Shopping integration, automated feed management.", color: "#2f5c2b" },
    { name: "Regal Fish", url: "https://regalfish.co.uk/", desc: "Combined B2C and B2B seafood commerce platform.", features: "Wholesale pricing, customer-specific catalogs, quotation workflows, company-account hierarchy, sales-rep management.", color: "#005a9c" },
    { name: "Andover Fabrics", url: "https://www.andoverfabrics.com/", desc: "B2B fabric ordering portal.", features: "Customer-specific pricing, inventory visibility, pre-orders, wholesale ordering, Acumatica integration.", color: "#545454" },
    { name: "Indigo Fragrance", url: "https://indigofragrance.com/", desc: "Hybrid B2C and B2B fragrance commerce store.", features: "Product variants, online payments, ShipStation integration, Trustpilot integration, Google Analytics.", color: "#3a2a6e" },
    { name: "Envision Xpress", url: "https://www.envisionxpress.com/", desc: "Multi-channel commerce platform supporting government, military, business, and retail buyers.", features: "Vendor management, inventory automation, multi-channel purchasing workflows.", color: "#004785" },
    { name: "Discount Pool Supply", url: "https://www.discountpoolsupply.com/", desc: "BigCommerce pool-supply store.", features: "Advanced filters, replacement-part discovery, promotional functionality, online checkout.", color: "#00a1df" },
    { name: "Kaiser Willys", url: "https://www.kaiserwillys.com/", desc: "Automotive-parts BigCommerce store specializing in vintage Willys Jeeps.", features: "Vehicle-based navigation, Klevu search, personalized product discovery.", color: "#111111" }
];

let projectsHTML = `
    <!-- Projects Section -->
    <section class="py-5 bg-light">
        <div class="container reveal">
            <div class="text-center mb-5">
                <span class="text-success fw-semibold">PORTFOLIO</span>
                <h2 class="fw-bold mt-2">Featured BigCommerce Projects</h2>
            </div>
            <div class="row g-4">`;

projects.forEach(p => {
    projectsHTML += `
                <div class="col-md-6 col-lg-4 mb-4 project-card">
                    <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                        <div class="d-flex align-items-center justify-content-center text-white" style="height: 180px; background-color: ${p.color};">
                            <h3 class="fw-bold m-0" style="font-family:'Jost', sans-serif;">${p.name}</h3>
                        </div>
                        <div class="card-body d-flex flex-column p-4">
                            <h5 class="card-title fw-bold mb-2">${p.name}</h5>
                            <p class="card-text text-muted mb-3" style="font-size: 0.95rem;">${p.desc}</p>
                            <div class="mb-4">
                                <h6 class="text-dark fw-bold mb-2 small">Key Features:</h6>
                                <p class="small text-secondary mb-0">${p.features}</p>
                            </div>
                            <div class="mt-auto d-flex justify-content-center w-100 gap-2">
                                <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary px-4 rounded-pill">
                                    Visit Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;
});

projectsHTML += `
            </div>
        </div>
    </section>`;


const techCloud = [
    'BigCommerce', 'BigCommerce B2B', 'Stencil', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap',
    'REST APIs', 'Webhooks', 'NetSuite', 'Celigo', 'Acumatica', 'Searchspring', 'Klevu', 'ShipStation',
    'Google Shopping', 'ERP Integration', 'Inventory Sync'
];

let techHTML = `
    <!-- Capabilities Section -->
    <section class="py-5 bg-dark text-white">
        <div class="container reveal py-5">
            <div class="text-center mb-5">
                <span class="text-success fw-semibold">TECH STACK</span>
                <h2 class="fw-bold mt-2 text-white">BigCommerce Capabilities</h2>
            </div>
            <div class="tech-cloud text-center">`;
techCloud.forEach(t => {
    techHTML += `\n                <span>${t}</span>`;
});
techHTML += `
            </div>
        </div>
    </section>`;

const workflowHTML = `
    <!-- How I Work -->
    <section class="py-5 bg-light">
        <div class="container reveal">
            <div class="text-center mb-5">
                <span class="text-success fw-semibold">PROCESS</span>
                <h2 class="fw-bold mt-2">How I Work</h2>
            </div>
            <div class="career-line mt-5">
                <div class="career-item">
                    <span>1</span>
                    <h5 class="mt-4 fw-bold">Analyze Requirements</h5>
                    <p class="text-muted small mt-2">Understanding your B2B/B2C needs, catalog complexity, and integration touchpoints.</p>
                </div>
                <div class="career-item">
                    <span>2</span>
                    <h5 class="mt-4 fw-bold">Design Architecture</h5>
                    <p class="text-muted small mt-2">Planning data flows, API connections, ERP endpoints, and theme structure.</p>
                </div>
                <div class="career-item">
                    <span>3</span>
                    <h5 class="mt-4 fw-bold">Develop & Integrate</h5>
                    <p class="text-muted small mt-2">Building the Stencil storefront and establishing robust webhook/API integrations.</p>
                </div>
                <div class="career-item">
                    <span>4</span>
                    <h5 class="mt-4 fw-bold">Test, Optimize & Launch</h5>
                    <p class="text-muted small mt-2">Rigorous QA of orders, inventory sync, performance profiling, and go-live.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Architecture Section -->
    <section class="py-5 bg-white">
        <div class="container reveal text-center">
            <div class="mb-5">
                <span class="text-success fw-semibold">ARCHITECTURE</span>
                <h2 class="fw-bold mt-2">BigCommerce Integration Workflow</h2>
                <p class="text-muted mt-3 mx-auto" style="max-width: 700px;">Seamlessly connecting your storefront with back-office operations to automate data synchronization for Products, Inventory, Customers, Pricing, Orders, and Fulfillment.</p>
            </div>
            
            <div class="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 gap-md-4 py-4">
                <div class="p-4 bg-light border rounded-4 text-center shadow-sm" style="min-width: 200px;">
                    <i class="bi bi-shop text-success fs-1 mb-2 d-block"></i>
                    <h5 class="fw-bold mb-0">BigCommerce Store</h5>
                </div>
                
                <div class="d-flex flex-column align-items-center text-muted">
                    <i class="bi bi-arrow-right fs-3 d-none d-md-block"></i>
                    <i class="bi bi-arrow-down fs-3 d-block d-md-none"></i>
                    <span class="badge bg-success-subtle text-success">API / Webhooks</span>
                </div>
                
                <div class="p-4 bg-dark text-white border rounded-4 text-center shadow-sm" style="min-width: 200px;">
                    <i class="bi bi-diagram-3 text-success fs-1 mb-2 d-block"></i>
                    <h5 class="fw-bold mb-0">Integration Layer</h5>
                    <small class="text-white-50">(Celigo / Custom Middleware)</small>
                </div>
                
                <div class="d-flex flex-column align-items-center text-muted">
                    <i class="bi bi-arrow-right fs-3 d-none d-md-block"></i>
                    <i class="bi bi-arrow-down fs-3 d-block d-md-none"></i>
                    <span class="badge bg-success-subtle text-success">Sync</span>
                </div>
                
                <div class="p-4 bg-light border rounded-4 text-center shadow-sm" style="min-width: 200px;">
                    <i class="bi bi-server text-primary fs-1 mb-2 d-block"></i>
                    <h5 class="fw-bold mb-0">Back-Office Systems</h5>
                    <small class="text-muted d-block mt-2">NetSuite / Acumatica / Search / Shipping</small>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Work With Me -->
    <section class="py-5 bg-light">
        <div class="container reveal">
            <div class="text-center mb-5">
                <span class="text-success fw-semibold">ADVANTAGE</span>
                <h2 class="fw-bold mt-2">Why Work With Me</h2>
            </div>
            <div class="row g-4 justify-content-center">
                <div class="col-md-6 col-lg-4">
                    <ul class="list-group list-group-flush bg-transparent">
                        <li class="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i class="bi bi-check-circle-fill text-success me-3 fs-5"></i> <span class="fw-semibold">11+ years overall web development</span></li>
                        <li class="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i class="bi bi-check-circle-fill text-success me-3 fs-5"></i> <span class="fw-semibold">4+ years BigCommerce experience</span></li>
                        <li class="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i class="bi bi-check-circle-fill text-success me-3 fs-5"></i> <span class="fw-semibold">Shopify, WordPress, Laravel background</span></li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-4">
                    <ul class="list-group list-group-flush bg-transparent">
                        <li class="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i class="bi bi-check-circle-fill text-success me-3 fs-5"></i> <span class="fw-semibold">Large catalog experience</span></li>
                        <li class="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i class="bi bi-check-circle-fill text-success me-3 fs-5"></i> <span class="fw-semibold">B2B & B2C commerce workflows</span></li>
                        <li class="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i class="bi bi-check-circle-fill text-success me-3 fs-5"></i> <span class="fw-semibold">ERP/API integration expertise</span></li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-4">
                    <ul class="list-group list-group-flush bg-transparent">
                        <li class="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i class="bi bi-check-circle-fill text-success me-3 fs-5"></i> <span class="fw-semibold">Performance optimization</span></li>
                        <li class="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i class="bi bi-check-circle-fill text-success me-3 fs-5"></i> <span class="fw-semibold">Responsive & custom Stencil development</span></li>
                        <li class="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i class="bi bi-check-circle-fill text-success me-3 fs-5"></i> <span class="fw-semibold">Complex eCommerce logic implementation</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
`;

const ctaAndFooter = `
    <!-- CTA -->
    <section class="py-5 mb-4">
        <div class="container reveal active">

            <div class="cta-box text-center rounded-4 p-5">

                <span class="text-success fw-semibold">
                    Need a BigCommerce Developer?
                </span>

                <h2 class="fw-bold mt-2 mb-3">
                    Let's build a scalable B2B or B2C BigCommerce solution tailored to your business requirements.
                </h2>

                <div class="d-flex flex-wrap justify-content-center gap-3 mt-4">
                    <a href="mailto:shankha4030@gmail.com" class="btn btn-primary">
                        Hire Me
                    </a>
                    <a href="mailto:shankha4030@gmail.com" class="btn btn-outline-dark">
                        Email Me
                    </a>
                </div>

            </div>

        </div>
    </section>
  </main>

  <footer>
    <div class="container reveal">
      <div class="row">
        <div class="col-md-7 mb-2">
          <div class="row">
            <div class="col-md-8">
              <h4 class="mb-3 fw-bold" style="font-family:'Jost', sans-serif;">Shankha<span
                  style="color:var(--primary-color);">Subhra</span></h4>
              <p class="text-muted pe-md-4">Senior Shopify, WordPress and Laravel Developer based in Kolkata, India,
                with
                10+ years of experience building modern e-commerce and web solutions.</p>

              <div class="mt-4 mb-2">
                <p class="mb-2 fw-semibold"><i class="bi bi-telephone-fill me-2 text-primary"></i> <a
                    href="tel:+919674364030" class="text-decoration-none text-muted">+91 9674364030</a></p>
                <p class="mb-2 fw-semibold"><i class="bi bi-envelope-fill me-2 text-primary"></i> <a
                    href="mailto:shankha4030@gmail.com"
                    class="text-decoration-none text-muted">shankha4030@gmail.com</a>
                </p>
              </div>

              <div class="social-icons mt-2">
                <a href="https://www.linkedin.com/in/shankha-subhra-bag-developer/" target="_blank"
                  rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
                <a href="https://github.com/shankha-subhra" target="_blank" rel="noopener noreferrer"><i
                    class="bi bi-github"></i></a>
                <a href="https://www.facebook.com/shankhasubhrabag/" target="_blank" rel="noopener noreferrer"><i
                    class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/shankhasubhrabag" target="_blank" rel="noopener noreferrer"><i
                    class="bi bi-instagram"></i></a>
                <a href="mailto:shankha4030@gmail.com"><i class="bi bi-envelope"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-2">
          <h5 class="fw-bold mb-3">Quick Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="index.html" class="text-decoration-none text-muted">Home</a></li>
            <li class="mb-2"><a href="about.html" class="text-decoration-none text-muted">About</a></li>
            <li class="mb-2"><a href="services.html" class="text-decoration-none text-muted">Services</a></li>
            <li class="mb-2"><a href="skills.html" class="text-decoration-none text-muted">Skills</a></li>
          </ul>
        </div>
        <div class="col-md-2 mb-2">
          <h5 class="fw-bold mb-3">Projects</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="all-projects.html" class="text-decoration-none text-muted">All Projects</a></li>
            <li class="mb-2"><a href="shopify-projects.html" class="text-decoration-none text-muted">Shopify
                Projects</a></li>
            <li class="mb-2"><a href="bigcommerce-projects.html" class="text-decoration-none text-muted">BigCommerce
                Projects</a></li>
            <li class="mb-2"><a href="wordpress-projects.html" class="text-decoration-none text-muted">WordPress
                Projects</a></li>
            <li class="mb-2"><a href="laravel-projects.html" class="text-decoration-none text-muted">Laravel
                Projects</a></li>
          </ul>
        </div>
      </div>
      <hr class="mt-4 mb-4" style="border-color:var(--border-color);">
      <div class="text-center text-muted">
        <small>&copy; 2026 Shankha Subhra Bag. All rights reserved.</small>
      </div>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
  <script src="assets/js/main.js" defer></script>
</body>
</html>`;

const finalHTML = headAndNav + hero + expertiseHTML + projectsHTML + techHTML + workflowHTML + ctaAndFooter;

fs.writeFileSync('e:/New Projects/shankha-subhra.github.io/bigcommerce-projects.html', finalHTML, 'utf8');
console.log('Successfully created bigcommerce-projects.html');
