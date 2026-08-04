const fs = require('fs');

const shopifyProjects = [
  { title: "Fashion Shopify Store", cat: "Ecommerce", tech: "Shopify Plus, Liquid, JS", img: "https://placehold.co/600x400/111/fff?text=Fashion+Store" },
  { title: "Beauty Products Shopify Store", cat: "Ecommerce", tech: "Shopify, Liquid", img: "https://placehold.co/600x400/222/fff?text=Beauty+Store" },
  { title: "Shopify Subscription Store", cat: "App Integration", tech: "Shopify, React", img: "https://placehold.co/600x400/333/fff?text=Subscription+Store" },
  { title: "Food Delivery Shopify Store", cat: "Ecommerce", tech: "Shopify, API", img: "https://placehold.co/600x400/444/fff?text=Food+Delivery" },
  { title: "Shopify Plus B2B Store", cat: "B2B", tech: "Shopify Plus, Liquid", img: "https://placehold.co/600x400/555/fff?text=B2B+Store" },
  { title: "Custom Product Bundle Store", cat: "Ecommerce", tech: "Shopify, React", img: "https://placehold.co/600x400/666/fff?text=Bundle+Store" },
  { title: "Shopify Rental Store", cat: "Ecommerce", tech: "Shopify, Liquid, JS", img: "https://placehold.co/600x400/777/fff?text=Rental+Store" },
  { title: "Shopify Wholesale Store", cat: "B2B", tech: "Shopify Plus", img: "https://placehold.co/600x400/888/fff?text=Wholesale+Store" },
  { title: "Headless Shopify Store", cat: "Headless", tech: "Shopify API, React", img: "https://placehold.co/600x400/999/fff?text=Headless+Store" },
  { title: "Multi-language Shopify Store", cat: "Ecommerce", tech: "Shopify, Liquid", img: "https://placehold.co/600x400/aaa/fff?text=Multi-language" },
  { title: "Shopify Marketplace Integration", cat: "Integration", tech: "Shopify API, Node.js", img: "https://placehold.co/600x400/bbb/fff?text=Marketplace" },
  { title: "Shopify Custom Registration App", cat: "App", tech: "Shopify, Remix, Node", img: "https://placehold.co/600x400/ccc/fff?text=Registration+App" },
  { title: "Shopify Subscription Application", cat: "App", tech: "Shopify Functions, Remix", img: "https://placehold.co/600x400/ddd/fff?text=Subscription+App" },
  { title: "Shopify Bulk Price Quote App", cat: "App", tech: "Shopify, React, Node", img: "https://placehold.co/600x400/eee/fff?text=Price+Quote+App" },
  { title: "Shopify Inventory Sync App", cat: "App", tech: "Shopify API, Node.js", img: "https://placehold.co/600x400/123/fff?text=Inventory+Sync" },
  { title: "Shopify ERP Integration", cat: "Integration", tech: "Shopify Plus, API", img: "https://placehold.co/600x400/456/fff?text=ERP+Integration" },
  { title: "Shopify Checkout Customization", cat: "UI Extension", tech: "Checkout UI Extensions", img: "https://placehold.co/600x400/789/fff?text=Checkout+Customization" },
  { title: "Shopify Speed Optimization", cat: "Optimization", tech: "Liquid, CSS, JS", img: "https://placehold.co/600x400/abc/fff?text=Speed+Optimization" },
  { title: "Shopify Theme 2.0 Migration", cat: "Theme", tech: "Shopify 2.0, Liquid", img: "https://placehold.co/600x400/def/fff?text=Theme+Migration" },
  { title: "Shopify Product Import System", cat: "Integration", tech: "Shopify REST API", img: "https://placehold.co/600x400/222/fff?text=Product+Import" }
];

const wpProjects = [
  { title: "Corporate WordPress Website", cat: "Business", tech: "WordPress, Elementor", img: "https://placehold.co/600x400/111/fff?text=Corporate+Site" },
  { title: "WooCommerce Fashion Store", cat: "Ecommerce", tech: "WooCommerce, PHP", img: "https://placehold.co/600x400/222/fff?text=Fashion+Store" },
  { title: "Healthcare Website", cat: "Healthcare", tech: "WordPress, ACF", img: "https://placehold.co/600x400/333/fff?text=Healthcare" },
  { title: "Education Portal", cat: "Education", tech: "WordPress, LMS", img: "https://placehold.co/600x400/444/fff?text=Education+Portal" },
  { title: "Real Estate Website", cat: "Real Estate", tech: "WordPress, Custom Theme", img: "https://placehold.co/600x400/555/fff?text=Real+Estate" },
  { title: "Hotel Booking Website", cat: "Booking", tech: "WordPress, Plugins", img: "https://placehold.co/600x400/666/fff?text=Hotel+Booking" },
  { title: "Restaurant Website", cat: "Business", tech: "WordPress, Elementor", img: "https://placehold.co/600x400/777/fff?text=Restaurant" },
  { title: "Membership Website", cat: "Community", tech: "WordPress, MemberPress", img: "https://placehold.co/600x400/888/fff?text=Membership" },
  { title: "News and Magazine Website", cat: "Publishing", tech: "WordPress, PHP", img: "https://placehold.co/600x400/999/fff?text=Magazine" },
  { title: "Personal Portfolio Website", cat: "Portfolio", tech: "WordPress, Divi", img: "https://placehold.co/600x400/aaa/fff?text=Portfolio" },
  { title: "WordPress LMS Website", cat: "Education", tech: "WordPress, LearnDash", img: "https://placehold.co/600x400/bbb/fff?text=LMS+Site" },
  { title: "Custom WordPress Plugin", cat: "Plugin", tech: "PHP, WordPress API", img: "https://placehold.co/600x400/ccc/fff?text=Custom+Plugin" },
  { title: "Salesforce WordPress Integration", cat: "Integration", tech: "WordPress API, PHP", img: "https://placehold.co/600x400/ddd/fff?text=Salesforce+Integration" },
  { title: "WooCommerce Subscription Store", cat: "Ecommerce", tech: "WooCommerce Subs", img: "https://placehold.co/600x400/eee/fff?text=Subscription+Store" },
  { title: "WooCommerce Booking System", cat: "Booking", tech: "WooCommerce Booking", img: "https://placehold.co/600x400/123/fff?text=Booking+System" },
  { title: "Multilingual WordPress Website", cat: "Business", tech: "WordPress, WPML", img: "https://placehold.co/600x400/456/fff?text=Multilingual" },
  { title: "Elementor Business Website", cat: "Business", tech: "WordPress, Elementor", img: "https://placehold.co/600x400/789/fff?text=Business+Site" },
  { title: "WordPress Speed Optimization", cat: "Optimization", tech: "WP Rocket, CDN", img: "https://placehold.co/600x400/abc/fff?text=Speed+Optimization" },
  { title: "WordPress Website Redesign", cat: "Design", tech: "WordPress, CSS", img: "https://placehold.co/600x400/def/fff?text=Website+Redesign" },
  { title: "Custom WooCommerce Checkout", cat: "Ecommerce", tech: "WooCommerce, JS", img: "https://placehold.co/600x400/222/fff?text=Custom+Checkout" }
];

const laravelProjects = [
  { title: "Employee Time Tracking System", cat: "HR", tech: "Laravel, Vue", img: "https://placehold.co/600x400/111/fff?text=Time+Tracking" },
  { title: "Staff Shift Management System", cat: "Management", tech: "Laravel, PHP", img: "https://placehold.co/600x400/222/fff?text=Shift+Management" },
  { title: "NDIS Management System", cat: "Healthcare", tech: "Laravel, MySQL", img: "https://placehold.co/600x400/333/fff?text=NDIS+System" },
  { title: "Invoice Management Application", cat: "Finance", tech: "Laravel, Bootstrap", img: "https://placehold.co/600x400/444/fff?text=Invoice+App" },
  { title: "Customer Relationship Management System", cat: "CRM", tech: "Laravel, API", img: "https://placehold.co/600x400/555/fff?text=CRM+System" },
  { title: "Inventory Management System", cat: "Inventory", tech: "Laravel, Livewire", img: "https://placehold.co/600x400/666/fff?text=Inventory+System" },
  { title: "E-commerce Admin Panel", cat: "Ecommerce", tech: "Laravel, DataTables", img: "https://placehold.co/600x400/777/fff?text=Admin+Panel" },
  { title: "Shopify Product Sync Application", cat: "Integration", tech: "Laravel, Shopify API", img: "https://placehold.co/600x400/888/fff?text=Product+Sync" },
  { title: "Xero Accounting Integration", cat: "Integration", tech: "Laravel, Xero API", img: "https://placehold.co/600x400/999/fff?text=Xero+Integration" },
  { title: "Salesforce Integration", cat: "Integration", tech: "Laravel, API", img: "https://placehold.co/600x400/aaa/fff?text=Salesforce+Integration" },
  { title: "Subscription Management System", cat: "SaaS", tech: "Laravel, Stripe", img: "https://placehold.co/600x400/bbb/fff?text=Subscription+System" },
  { title: "Project Management Application", cat: "Management", tech: "Laravel, React", img: "https://placehold.co/600x400/ccc/fff?text=Project+App" },
  { title: "Appointment Booking System", cat: "Booking", tech: "Laravel, Calendar", img: "https://placehold.co/600x400/ddd/fff?text=Booking+System" },
  { title: "Learning Management System", cat: "Education", tech: "Laravel, Video", img: "https://placehold.co/600x400/eee/fff?text=LMS+System" },
  { title: "Support Ticket Management System", cat: "Support", tech: "Laravel, Webhooks", img: "https://placehold.co/600x400/123/fff?text=Ticket+System" },
  { title: "Multi-vendor Marketplace", cat: "Ecommerce", tech: "Laravel, PHP", img: "https://placehold.co/600x400/456/fff?text=Marketplace" },
  { title: "Payroll Management System", cat: "Finance", tech: "Laravel, Queues", img: "https://placehold.co/600x400/789/fff?text=Payroll+System" },
  { title: "Reporting Dashboard", cat: "Analytics", tech: "Laravel, Charts JS", img: "https://placehold.co/600x400/abc/fff?text=Reporting" },
  { title: "API Integration Platform", cat: "API", tech: "Laravel, OAuth 2.0", img: "https://placehold.co/600x400/def/fff?text=API+Platform" },
  { title: "Role and Permission Management System", cat: "Security", tech: "Laravel, Spatie", img: "https://placehold.co/600x400/222/fff?text=Role+System" }
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
        <li class="nav-item"><a class="nav-link" href="experience.html">Experience</a></li>
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
  return projects.map(p => `
    <div class="col-md-4 mb-4 project-card" data-category="${p.cat}" data-tech="${p.tech}">
      <div class="card h-100 shadow-sm border-0">
        <img src="${p.img}" class="card-img-top" alt="${p.title}" loading="lazy">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.title}</h5>
          <p class="text-muted small">${p.cat}</p>
          <p class="card-text small flex-grow-1">Developed with ${p.tech}. A fully featured web application optimized for performance.</p>
          <div class="mt-auto d-flex gap-2">
            <a href="project-details.html" class="btn btn-sm btn-outline-primary w-50">Details</a>
            <a href="#" class="btn btn-sm btn-primary w-50">Visit</a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// 1. Index Page
const indexContent = `
  <section class="hero-section bg-light border-bottom">
    <div class="container reveal">
      <img src="https://placehold.co/200" alt="Shankha Subhra Bag" class="hero-img mb-4 shadow">
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

// 2. About Page
const aboutContent = `
  <div class="container py-5 reveal">
    <div class="row align-items-center mb-5">
      <div class="col-md-5 mb-4 mb-md-0">
        <img src="https://placehold.co/400x500" alt="Shankha Subhra Bag" class="img-fluid rounded shadow w-100 object-fit-cover">
      </div>
      <div class="col-md-7">
        <h1 class="fw-bold mb-4">About Me</h1>
        <p class="lead text-muted mb-4">I am a Senior Web Developer with over 12 years of experience specializing in PHP and jQuery, possessing extensive expertise in WordPress Custom Development, Shopify Development, Liquid Coding, and modern frameworks like Laravel.</p>
        <p class="text-muted mb-4">I have a proven track record of delivering high-quality, scalable, and performance-optimized solutions. Throughout my career, I've worked on over 200 e-commerce projects and 10+ custom Shopify apps.</p>
        <a href="#" class="btn btn-primary"><i class="bi bi-download me-2"></i>Download Resume</a>
      </div>
    </div>
  </div>
`;
fs.writeFileSync('about.html', generateHTML('About', aboutContent));

// 3. Services Page
const servicesContent = `
  <div class="container py-5 reveal">
    <h1 class="fw-bold text-center mb-5">My Services</h1>
    <div class="row g-4">
      ${['Shopify Store Development', 'Shopify Theme Development', 'Shopify Custom App Development', 'Shopify Plus Development', 'Shopify API Integration', 'WordPress Website Development', 'WooCommerce Development', 'WordPress Plugin Development', 'Laravel Application Development', 'REST API Development'].map(s => `
        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0 text-center p-4">
            <div class="fs-1 text-primary mb-3"><i class="bi bi-code-slash"></i></div>
            <h5 class="card-title fw-bold">${s}</h5>
            <p class="text-muted small">Professional ${s.toLowerCase()} tailored to your business needs, ensuring high performance and scalability.</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;
fs.writeFileSync('services.html', generateHTML('Services', servicesContent));

// 4. Skills Page
const skillsContent = `
  <div class="container py-5 reveal">
    <h1 class="fw-bold text-center mb-5">My Skills</h1>
    <div class="row">
      <div class="col-md-6 mb-4">
        <h4 class="mb-4">Development Skills</h4>
        ${['Shopify / Liquid', 'WordPress / WooCommerce', 'Laravel / PHP', 'React / Remix / Node.js'].map(s => `
          <div class="mb-3">
            <div class="d-flex justify-content-between">
              <span class="fw-bold">${s}</span>
              <span class="text-muted">90%</span>
            </div>
            <div class="progress" style="height: 10px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 90%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="col-md-6 mb-4">
        <h4 class="mb-4">Tools & Technologies</h4>
        <div class="d-flex flex-wrap gap-2">
          ${['MySQL', 'JavaScript', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3', 'REST API', 'GraphQL', 'Git', 'GitHub', 'Salesforce', 'Xero', 'NetSuite'].map(t => `
            <span class="badge bg-secondary px-3 py-2 fs-6">${t}</span>
          `).join('')}
        </div>
      </div>
    </div>
  </div>
`;
fs.writeFileSync('skills.html', generateHTML('Skills', skillsContent));

// 5. Experience Page
const expContent = `
  <div class="container py-5 reveal">
    <h1 class="fw-bold text-center mb-5">Work Experience</h1>
    <div class="timeline ps-4 border-start border-primary border-3">
      <div class="mb-5 position-relative">
        <div class="position-absolute bg-primary rounded-circle" style="width:16px; height:16px; left:-24px; top:4px;"></div>
        <h4 class="fw-bold">Senior Shopify Full-Stack Developer</h4>
        <h6 class="text-muted">OPPENHEIMER PTY LIMITED (Remote) | 2024 - Current</h6>
        <p class="text-muted mt-3">Managing complete projects from requirement analysis, Figma design conversion, to development, testing, launch, and ongoing support. Built responsive Shopify stores using Liquid, HTML, CSS, JavaScript.</p>
      </div>
      <div class="mb-5 position-relative">
        <div class="position-absolute bg-primary rounded-circle" style="width:16px; height:16px; left:-24px; top:4px;"></div>
        <h4 class="fw-bold">Senior Team Lead</h4>
        <h6 class="text-muted">Maxsource Technologies | 2022 - 2024</h6>
        <p class="text-muted mt-3">Shopify developer with expertise in front-end development using Liquid, back-end solutions with PHP and Laravel framework, and seamless integration of Shopify APIs.</p>
      </div>
      <div class="mb-5 position-relative">
        <div class="position-absolute bg-primary rounded-circle" style="width:16px; height:16px; left:-24px; top:4px;"></div>
        <h4 class="fw-bold">Senior Team Lead</h4>
        <h6 class="text-muted">SynapseIndia | 2021 - 2022</h6>
        <p class="text-muted mt-3">Dynamic Web Developer with extensive experience in Shopify, WordPress, and Laravel development. Adept at crafting front-end solutions using Liquid.</p>
      </div>
    </div>
  </div>
`;
fs.writeFileSync('experience.html', generateHTML('Experience', expContent));

// 6, 7, 8. Projects Pages
function projectPageContent(title, projects) {
  return `
    <div class="container py-5 reveal">
      <h1 class="fw-bold text-center mb-4">${title}</h1>
      
      <div class="row mb-5 justify-content-center">
        <div class="col-md-8 d-flex gap-2 justify-content-center flex-wrap">
          <input type="text" id="project-search" class="form-control w-auto flex-grow-1" placeholder="Search projects...">
          <button class="btn btn-primary filter-btn active" data-filter="all">All</button>
          <button class="btn btn-outline-primary filter-btn" data-filter="Ecommerce">E-commerce</button>
          <button class="btn btn-outline-primary filter-btn" data-filter="App">Apps / Plugins</button>
          <button class="btn btn-outline-primary filter-btn" data-filter="Integration">Integrations</button>
        </div>
      </div>
      
      <p class="text-center text-muted mb-4" id="results-count">20 projects found</p>

      <div class="row g-4" id="project-grid">
        ${generateProjectCards(projects)}
      </div>
    </div>
  `;
}

fs.writeFileSync('shopify-projects.html', generateHTML('Shopify Projects', projectPageContent('Shopify Projects', shopifyProjects)));
fs.writeFileSync('wordpress-projects.html', generateHTML('WordPress Projects', projectPageContent('WordPress Projects', wpProjects)));
fs.writeFileSync('laravel-projects.html', generateHTML('Laravel Projects', projectPageContent('Laravel Projects', laravelProjects)));

// 9. Project Details Page
const detailsContent = `
  <div class="container py-5 reveal">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item"><a href="shopify-projects.html">Projects</a></li>
        <li class="breadcrumb-item active" aria-current="page">Project Details</li>
      </ol>
    </nav>
    <img src="https://placehold.co/1200x500/111/fff" class="img-fluid rounded mb-5 shadow w-100 object-fit-cover" style="max-height: 400px;" alt="Project Banner">
    
    <div class="row">
      <div class="col-lg-8">
        <h1 class="fw-bold mb-3">Custom E-commerce Platform</h1>
        <div class="mb-4">
          <span class="badge bg-primary me-2">Shopify Plus</span>
          <span class="badge bg-secondary me-2">Liquid</span>
          <span class="badge bg-secondary">React</span>
        </div>
        
        <h4 class="fw-bold mt-5 mb-3">Project Overview</h4>
        <p class="text-muted">This project involved building a highly customized, scalable e-commerce solution from scratch using modern web technologies. The client needed a platform capable of handling thousands of SKUs and a massive influx of concurrent users during peak sales periods.</p>
        
        <h4 class="fw-bold mt-5 mb-3">Challenges & Solutions</h4>
        <p class="text-muted">The main challenge was ensuring lightning-fast load times while maintaining a complex filtering logic on the frontend. We implemented a headless architecture with Shopify Storefront API and a Next.js/React frontend to achieve sub-second page loads.</p>
      </div>
      <div class="col-lg-4 mt-5 mt-lg-0">
        <div class="card border-0 shadow-sm bg-light p-4">
          <h5 class="fw-bold mb-3">Project Info</h5>
          <ul class="list-unstyled text-muted">
            <li class="mb-2"><strong>Client:</strong> Confidential</li>
            <li class="mb-2"><strong>Category:</strong> E-commerce</li>
            <li class="mb-2"><strong>Date:</strong> 2025</li>
            <li class="mb-4"><strong>Website:</strong> <a href="#">Live Preview</a></li>
          </ul>
          <a href="#" class="btn btn-primary w-100">Visit Live Site <i class="bi bi-box-arrow-up-right ms-2"></i></a>
        </div>
      </div>
    </div>
  </div>
`;
fs.writeFileSync('project-details.html', generateHTML('Project Details', detailsContent));

// 10. Contact Page
const contactContent = `
  <div class="container py-5 reveal">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center mb-5">
        <h1 class="fw-bold">Get In Touch</h1>
        <p class="text-muted">Interested in working together? Fill out the form below with some info about your project and I will get back to you as soon as I can.</p>
      </div>
    </div>
    
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card border-0 shadow-sm p-4 p-md-5">
          <form id="contact-form" class="needs-validation" novalidate>
            <div class="row g-3">
              <div class="col-md-6">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name" required>
                <div class="invalid-feedback">Please enter your name.</div>
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" required>
                <div class="invalid-feedback">Please enter a valid email.</div>
              </div>
              <div class="col-12">
                <label for="service" class="form-label">Required Service</label>
                <select class="form-select" id="service" required>
                  <option value="">Choose...</option>
                  <option value="shopify">Shopify Development</option>
                  <option value="wordpress">WordPress Development</option>
                  <option value="laravel">Laravel Development</option>
                </select>
                <div class="invalid-feedback">Please select a service.</div>
              </div>
              <div class="col-12">
                <label for="message" class="form-label">Project Details</label>
                <textarea class="form-control" id="message" rows="5" required></textarea>
                <div class="invalid-feedback">Please provide project details.</div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="terms" required>
                  <label class="form-check-label" for="terms">I agree to the terms and conditions</label>
                  <div class="invalid-feedback">You must agree before submitting.</div>
                </div>
              </div>
              <div class="col-12 mt-4">
                <button class="btn btn-primary btn-lg w-100" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Success Toast -->
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="successToast" class="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          Your message has been sent successfully!
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  </div>
`;
fs.writeFileSync('contact.html', generateHTML('Contact', contactContent));

console.log('Successfully generated all 10 HTML files.');
