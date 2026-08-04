const fs = require('fs');

const shopifyProjects = [
  { title: "Bellydog", url: "https://bellydog.com", cat: "Ecommerce", tech: "Shopify 2.0" },
  { title: "Repell Shield", url: "https://repellshield.com", cat: "Ecommerce", tech: "Shopify 2.0, Liquid" },
  { title: "Nuedes Stuedios", url: "https://www.nuedesstuedios.de", cat: "Theme", tech: "Shopify 2.0, Animations" },
  { title: "Girl Happens Beauty", url: "https://girlhappens.beauty", cat: "Beauty", tech: "Custom Theme, Apps" },
  { title: "Acta Fight Gear", url: "https://actafightgear.com/", cat: "Ecommerce", tech: "Shopify API, JS, CSS" },
  { title: "Kids Land USA", url: "https://www.kidslandusa.com/", cat: "Ecommerce", tech: "Shopify 2.0, REST API" },
  { title: "Zoot Sports", url: "https://zootsports.com/", cat: "Apparel", tech: "Shopify 2.0, JS" },
  { title: "Boohgle USA", url: "https://boohgleusa.com/", cat: "Custom App", tech: "Shopify, PHP, MySQL" },
  { title: "Mad Hippie", url: "https://madhippie.com/", cat: "Subscription", tech: "Loop Subscriptions, Liquid" },
  { title: "KanCan USA", url: "https://www.kancanusa.com/", cat: "Inventory", tech: "Shopify API, PHP" },
  { title: "Nantucket Looms", url: "https://www.nantucketlooms.com/", cat: "Ecommerce", tech: "Liquid, JS, SC Options" },
  { title: "Vital Sleep", url: "https://www.vitalsleep.com/", cat: "Health", tech: "Custom Theme, JS" },
  { title: "Carnation Inc", url: "https://carnation-inc.com/", cat: "Ecommerce", tech: "Liquid, CSS, Warranty" },
  { title: "Lotus Foods", url: "https://www.lotusfoods.com/", cat: "Food", tech: "REST API, Custom Liquid" },
  { title: "Nutiva", url: "https://www.nutiva.com/", cat: "Food", tech: "Metafields, PHP" },
  { title: "James River Laser", url: "https://jamesriverlaser.com", cat: "Ecommerce", tech: "Boost AI Search, Filter" },
  { title: "Glamourental", url: "https://glamourental.com/", cat: "Rental", tech: "Shopify API, Rental App" },
  { title: "ITIP Handles", url: "https://itiphandles.com/", cat: "Ecommerce", tech: "Liquid, JS, CSS" },
  { title: "Salai Shop", url: "https://salaishop.com/", cat: "Ecommerce", tech: "JS Image Magnifier" },
  { title: "Altamont Apparel", url: "https://altamontapparel.com/", cat: "Apparel", tech: "Shopify, Liquid" },
  { title: "BL Lashes", url: "https://www.bllashes.com/", cat: "Beauty", tech: "Shopify, Custom Theme" }
];

const wpProjects = [
  { title: "KLS Services", url: "http://klsservices.com.au/", cat: "Booking", tech: "WordPress, ACF, JS" },
  { title: "Fire Safe Chimney", url: "http://firesafechimneyservices.com/", cat: "Business", tech: "WordPress, Custom Theme" },
  { title: "ILM Weekly", url: "https://ilmweekly.com/", cat: "Blog", tech: "WordPress, ACF" },
  { title: "4 Nations", url: "http://www.4nations.com.au/", cat: "Business", tech: "WordPress, PHP" },
  { title: "The Wisdom Academy", url: "https://www.thewisdomacademy.in/", cat: "Ecommerce", tech: "WooCommerce, Plugin" },
  { title: "Leadigo", url: "https://www.leadigo.com/", cat: "Business", tech: "WordPress, CPT" },
  { title: "Ravinia Plumbing", url: "http://raviniaplumbing.com/", cat: "Services", tech: "WordPress, Custom Theme" },
  { title: "Precision Work Inc", url: "http://precisionworkinc.com/", cat: "Business", tech: "WordPress, Filters" },
  { title: "Restore Masonry", url: "http://restoremasonry.com/", cat: "Services", tech: "WordPress, ACF" },
  { title: "Tyler Lane Inc", url: "http://tylerlaneinc.com/", cat: "Business", tech: "WordPress, Custom Theme" },
  { title: "Curiously You", url: "http://www.curiouslyyou.com/", cat: "Business", tech: "WordPress, JS, CSS" },
  { title: "EduJobs Canada", url: "http://edujobscanada.com/", cat: "Portal", tech: "MemberPress, Stripe" },
  { title: "Tasha Jean", url: "http://tasha-jean.com/", cat: "Portfolio", tech: "WordPress, ACF" },
  { title: "Hotel Digonera", url: "http://www.hoteldigonera.com/en/", cat: "Hotel", tech: "Translator Plugin, ACF" },
  { title: "Consultants SI", url: "http://consultantssi.com/", cat: "Business", tech: "WordPress, Translation" },
  { title: "Flexi", url: "http://flexi.co.in/", cat: "Business", tech: "WordPress, Custom Theme" },
  { title: "IT People Network", url: "http://itpeoplenetwork.com/", cat: "Network", tech: "WordPress, ACF" },
  { title: "Punjab Sweets Online", url: "http://punjabsweetsonline.com/", cat: "Ecommerce", tech: "ToastTab, WordPress" },
  { title: "Splash Car Wash", url: "https://www.splashcarwash.com.au/", cat: "Services", tech: "WordPress, Custom Theme" },
  { title: "Caster Concepts", url: "https://www.casterconcepts.com/", cat: "Business", tech: "WordPress, PHP" },
  { title: "FlipNerd", url: "https://flipnerd.com/", cat: "Real Estate", tech: "WordPress, Custom Theme" },
  { title: "Green As It Gets", url: "https://www.greenasitgets.com/", cat: "Business", tech: "WordPress, ACF" },
  { title: "Toby Weston", url: "http://tobyweston.net/", cat: "Portfolio", tech: "WordPress, Custom Theme" }
];

const laravelProjects = [
  { title: "Laali Co", url: "https://laali.co/", cat: "Search", tech: "Laravel, Algolia, MySQL" },
  { title: "Abbax EU", url: "https://abbax.eu/", cat: "Payment", tech: "Laravel, Stripe, PayPal" },
  { title: "Pets Spokesman", url: "https://pets.spokesman.com/", cat: "Payment", tech: "Laravel, Stripe" },
  { title: "Sport Clips Jobs", url: "https://jobs.sportclips.com/", cat: "Portal", tech: "Laravel, MySQL" },
  { title: "Employee Time Tracking System", url: "https://google.com?q=time+tracking", cat: "HR", tech: "Laravel, Vue" },
  { title: "Staff Shift Management System", url: "https://google.com?q=shift+management", cat: "Management", tech: "Laravel, PHP" },
  { title: "NDIS Management System", url: "https://google.com?q=ndis", cat: "Healthcare", tech: "Laravel, MySQL" },
  { title: "Invoice Management Application", url: "https://google.com?q=invoice", cat: "Finance", tech: "Laravel, Bootstrap" },
  { title: "Customer Relationship Management System", url: "https://google.com?q=crm", cat: "CRM", tech: "Laravel, API" },
  { title: "Inventory Management System", url: "https://google.com?q=inventory", cat: "Inventory", tech: "Laravel, Livewire" },
  { title: "E-commerce Admin Panel", url: "https://google.com?q=admin+panel", cat: "Ecommerce", tech: "Laravel, DataTables" },
  { title: "Shopify Product Sync Application", url: "https://google.com?q=shopify+sync", cat: "Integration", tech: "Laravel, Shopify API" },
  { title: "Xero Accounting Integration", url: "https://google.com?q=xero", cat: "Integration", tech: "Laravel, Xero API" },
  { title: "Salesforce Integration", url: "https://google.com?q=salesforce", cat: "Integration", tech: "Laravel, API" },
  { title: "Subscription Management System", url: "https://google.com?q=subscription", cat: "SaaS", tech: "Laravel, Stripe" },
  { title: "Project Management Application", url: "https://google.com?q=project", cat: "Management", tech: "Laravel, React" },
  { title: "Appointment Booking System", url: "https://google.com?q=booking", cat: "Booking", tech: "Laravel, Calendar" },
  { title: "Learning Management System", url: "https://google.com?q=lms", cat: "Education", tech: "Laravel, Video" },
  { title: "Support Ticket Management System", url: "https://google.com?q=support", cat: "Support", tech: "Laravel, Webhooks" },
  { title: "Multi-vendor Marketplace", url: "https://google.com?q=marketplace", cat: "Ecommerce", tech: "Laravel, PHP" },
];

const navbar = `
<nav class="navbar navbar-expand-lg sticky-navbar">
  <div class="container">
    <a class="navbar-brand fw-bold" href="index.html">Shankha Subhra Bag</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="skills.html">Skills</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="shopify-projects.html">Shopify</a></li>
            <li><a class="dropdown-item" href="wordpress-projects.html">WordPress</a></li>
            <li><a class="dropdown-item" href="laravel-projects.html">Laravel</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        <li class="nav-item ms-lg-3">
          <button class="btn btn-outline-secondary btn-sm" id="theme-toggle" aria-label="Toggle Dark Mode">
            <i class="bi bi-moon"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

const footer = `
<footer>
  <div class="container reveal">
    <div class="row">
      <div class="col-md-4 mb-4">
        <h5>Shankha Subhra Bag</h5>
        <p class="text-muted">Senior Shopify, WordPress and Laravel Developer based in Kolkata, India, with over 12 years of experience building modern e-commerce and web solutions.</p>
        <div>
          <a href="#" class="text-secondary me-2 fs-5"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="text-secondary me-2 fs-5"><i class="bi bi-github"></i></a>
          <a href="#" class="text-secondary fs-5"><i class="bi bi-envelope"></i></a>
        </div>
      </div>
      <div class="col-md-2 mb-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="index.html" class="text-decoration-none text-muted">Home</a></li>
          <li><a href="about.html" class="text-decoration-none text-muted">About</a></li>
          <li><a href="services.html" class="text-decoration-none text-muted">Services</a></li>
          <li><a href="skills.html" class="text-decoration-none text-muted">Skills</a></li>
          <li><a href="experience.html" class="text-decoration-none text-muted">Experience</a></li>
        </ul>
      </div>
      <div class="col-md-2 mb-4">
        <h5>Projects</h5>
        <ul class="list-unstyled">
          <li><a href="shopify-projects.html" class="text-decoration-none text-muted">Shopify Projects</a></li>
          <li><a href="wordpress-projects.html" class="text-decoration-none text-muted">WordPress Projects</a></li>
          <li><a href="laravel-projects.html" class="text-decoration-none text-muted">Laravel Projects</a></li>
        </ul>
      </div>
      <div class="col-md-4 mb-4">
        <h5>Contact Info</h5>
        <ul class="list-unstyled text-muted">
          <li><i class="bi bi-geo-alt me-2"></i>Kolkata, India 700159</li>
          <li><i class="bi bi-telephone me-2"></i>+91 9674364030</li>
          <li><i class="bi bi-envelope me-2"></i>shankha4030@gmail.com</li>
        </ul>
      </div>
    </div>
    <hr class="mt-4 mb-4">
    <div class="text-center text-muted">
      <small>&copy; 2026 Shankha Subhra Bag. All rights reserved.</small>
    </div>
  </div>
  <a href="#" id="back-to-top" class="btn btn-primary rounded-circle shadow"><i class="bi bi-arrow-up"></i></a>
</footer>
`;

function generateHTML(title, content) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Shankha Subhra Bag</title>
    <meta name="description" content="Portfolio of Shankha Subhra Bag, Senior Web Developer.">
    <meta name="keywords" content="Shopify, WordPress, Laravel, Web Developer, E-commerce, Kolkata">
    <link rel="canonical" href="https://shankha-subhra.github.io/${title.toLowerCase().replace(/\s+/g, '-')}.html">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    ${navbar}
    <main>
        ${content}
    </main>
    ${footer}
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
    <script src="assets/js/main.js" defer></script>
</body>
</html>`;
}

  function generateProjectCards(projects) {
    return projects.map(p => {
      const encodedTitle = encodeURIComponent(p.title);
      return `
      <div class="col-md-4 mb-4 project-card" data-category="${p.cat}" data-tech="${p.tech}">
        <div class="card h-100 shadow-sm border-0">
          <img src="https://placehold.co/600x400/f8f9fa/343a40?text=${encodedTitle}" class="card-img-top border-bottom" alt="${p.title}" loading="lazy">
          <div class="card-body d-flex flex-column text-center">
            <h5 class="card-title fw-bold mb-2">${p.title}</h5>
            <p class="text-muted small mb-2 fw-semibold">${p.cat}</p>
            <p class="card-text small text-muted flex-grow-1">Developed with ${p.tech}.</p>
            <div class="mt-4 d-flex justify-content-center w-100">
              <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary px-4 rounded-pill">
                Visit Site <i class="bi bi-box-arrow-up-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `}).join('');
  }

// 1. Index Page
const indexContent = `
  <section class="hero-section bg-light border-bottom">
    <div class="container reveal">
      <div class="mx-auto bg-primary text-white d-flex align-items-center justify-content-center rounded-circle mb-4 shadow fs-1 fw-bold" style="width:120px; height:120px;">
        SB
      </div>
      <h1 class="display-4 fw-bold mb-3">Shankha Subhra Bag</h1>
      <h2 class="h3 text-primary mb-4" id="typing-text" data-words='["Senior Shopify Developer", "WordPress Developer", "Laravel Developer", "Shopify App Developer", "API Integration Specialist"]'></h2>
      <p class="lead mb-4 mx-auto text-muted" style="max-width:700px;">I am a Senior Web Developer with over 12 years of experience building Shopify stores, Shopify applications, WordPress websites, custom plugins, and Laravel applications.</p>
      <div class="d-flex justify-content-center gap-3 mb-5">
        <a href="shopify-projects.html" class="btn btn-primary btn-lg px-4 shadow">View Projects</a>
        <a href="contact.html" class="btn btn-outline-secondary btn-lg px-4">Contact Me</a>
      </div>
    </div>
  </section>
  <section class="py-5">
    <div class="container reveal">
      <h2 class="text-center mb-5 fw-bold">Statistics</h2>
      <div class="row text-center g-4">
        <div class="col-md-3"><div class="p-4 border rounded shadow-sm bg-white"><h3 class="counter text-primary fw-bold" data-target="12">0</h3><p class="mb-0 text-muted">Years Experience</p></div></div>
        <div class="col-md-3"><div class="p-4 border rounded shadow-sm bg-white"><h3 class="counter text-primary fw-bold" data-target="200">0</h3><p class="mb-0 text-muted">E-commerce Projects</p></div></div>
        <div class="col-md-3"><div class="p-4 border rounded shadow-sm bg-white"><h3 class="counter text-primary fw-bold" data-target="100">0</h3><p class="mb-0 text-muted">Shopify Projects</p></div></div>
        <div class="col-md-3"><div class="p-4 border rounded shadow-sm bg-white"><h3 class="counter text-primary fw-bold" data-target="20">0</h3><p class="mb-0 text-muted">Laravel Projects</p></div></div>
      </div>
    </div>
  </section>
  <section class="py-5 bg-light">
    <div class="container reveal">
      <h2 class="text-center mb-5 fw-bold">Featured Projects</h2>
      <div class="row">
        ${generateProjectCards(shopifyProjects.slice(0, 3))}
        ${generateProjectCards(wpProjects.slice(0, 3))}
      </div>
      <div class="text-center mt-4">
        <a href="shopify-projects.html" class="btn btn-primary">See All Projects</a>
      </div>
    </div>
  </section>
`;
fs.writeFileSync('index.html', generateHTML('Home', indexContent));

function projectPageContent(title, projects) {
  return `
    <div class="container py-5 reveal">
      <h1 class="fw-bold text-center mb-4">${title}</h1>
      
      <div class="row mb-5 justify-content-center">
        <div class="col-md-8 d-flex gap-2 justify-content-center flex-wrap">
          <input type="text" id="project-search" class="form-control w-auto flex-grow-1" placeholder="Search projects...">
          <button class="btn btn-primary filter-btn active" data-filter="all">All</button>
          <button class="btn btn-outline-primary filter-btn" data-filter="Ecommerce">E-commerce</button>
          <button class="btn btn-outline-primary filter-btn" data-filter="Business">Business</button>
          <button class="btn btn-outline-primary filter-btn" data-filter="Integration">Integrations</button>
        </div>
      </div>
      
      <p class="text-center text-muted mb-4" id="results-count">${projects.length} projects found</p>

      <div class="row g-4" id="project-grid">
        ${generateProjectCards(projects)}
      </div>
    </div>
  `;
}

fs.writeFileSync('shopify-projects.html', generateHTML('Shopify Projects', projectPageContent('Shopify Projects', shopifyProjects)));
fs.writeFileSync('wordpress-projects.html', generateHTML('WordPress Projects', projectPageContent('WordPress Projects', wpProjects)));
fs.writeFileSync('laravel-projects.html', generateHTML('Laravel Projects', projectPageContent('Laravel Projects', laravelProjects)));

console.log('HTML files regenerated without images, using clean text cards and target=_blank links.');
