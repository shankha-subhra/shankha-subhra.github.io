const fs = require('fs');

const data = JSON.parse(fs.readFileSync('filtered_projects.json', 'utf8'));
const shopifyProjects = data.shopifyProjects;
const wpProjects = data.wpProjects;
const laravelProjects = data.laravelProjects;

const profileImageUrl = "assets/images/ssbag.jpeg";

const navbar = `
<nav class="navbar navbar-expand-lg sticky-navbar">
  <div class="container">
    <a class="navbar-brand" href="index.html">Shankha<span>Subhra</span></a>
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
            <li><a class="dropdown-item" href="all-projects.html">All Projects</a></li>
            <li><a class="dropdown-item" href="shopify-projects.html">Shopify</a></li>
            <li><a class="dropdown-item" href="wordpress-projects.html">WordPress</a></li>
            <li><a class="dropdown-item" href="laravel-projects.html">Laravel</a></li>
          </ul>
        </li>
        <li class="nav-item ms-lg-3">
          <a href="#projects" class="btn btn-primary d-none d-lg-inline-block">Hire Me</a>
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
      <div class="col-md-5 mb-4">
        <h4 class="mb-3 fw-bold" style="font-family:'Jost', sans-serif;">Shankha<span style="color:var(--primary-color);">Subhra</span></h4>
        <p class="text-muted pe-md-4">Senior Shopify, WordPress and Laravel Developer based in Kolkata, India, with 10+ years of experience building modern e-commerce and web solutions.</p>
        
        <div class="mt-4 mb-4">
          <p class="mb-2 fw-semibold"><i class="bi bi-telephone-fill me-2 text-primary"></i> <a href="tel:+919674364030" class="text-decoration-none text-muted">+91 9674364030</a></p>
          <p class="mb-2 fw-semibold"><i class="bi bi-envelope-fill me-2 text-primary"></i> <a href="mailto:shankha4030@gmail.com" class="text-decoration-none text-muted">shankha4030@gmail.com</a></p>
        </div>

        <div class="social-icons mt-4">
          <a href="https://www.linkedin.com/in/shankha-subhra-bag-developer/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
          <a href="https://github.com/shankha-subhra" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
          <a href="https://www.facebook.com/shankhasubhrabag/" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/shankhasubhrabag" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
          <a href="mailto:shankha4030@gmail.com"><i class="bi bi-envelope"></i></a>
        </div>
      </div>
      <div class="col-md-3 mb-4">
        <h5 class="fw-bold mb-3">Quick Links</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="index.html" class="text-decoration-none text-muted">Home</a></li>
          <li class="mb-2"><a href="about.html" class="text-decoration-none text-muted">About</a></li>
          <li class="mb-2"><a href="services.html" class="text-decoration-none text-muted">Services</a></li>
          <li class="mb-2"><a href="skills.html" class="text-decoration-none text-muted">Skills</a></li>
        </ul>
      </div>
      <div class="col-md-4 mb-4">
        <h5 class="fw-bold mb-3">Projects</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="all-projects.html" class="text-decoration-none text-muted">All Projects</a></li>
          <li class="mb-2"><a href="shopify-projects.html" class="text-decoration-none text-muted">Shopify Projects</a></li>
          <li class="mb-2"><a href="wordpress-projects.html" class="text-decoration-none text-muted">WordPress Projects</a></li>
          <li class="mb-2"><a href="laravel-projects.html" class="text-decoration-none text-muted">Laravel Projects</a></li>
        </ul>
      </div>
    </div>
    <hr class="mt-4 mb-4" style="border-color:var(--border-color);">
    <div class="text-center text-muted">
      <small>&copy; 2026 Shankha Subhra Bag. All rights reserved.</small>
    </div>
  </div>
</footer>
`;

function generateHTML(title, content) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Senior Fullstack Developer</title>
    <meta name="description" content="Senior Shopify Developer with 10+ years of experience in Shopify Plus, Remix, React.js, Node.js, custom and public apps, headless commerce, and Hydrogen. Skilled in checkout customization, CRO, speed optimization, APIs, and integrations. Also experienced with Laravel, WordPress, BigCommerce, Squarespace and Wix.">
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
    
    <!-- Site Details Modal -->
    <div class="modal fade" id="siteDetailsModal" tabindex="-1" aria-labelledby="siteDetailsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="siteDetailsModalLabel" style="font-family:'Jost', sans-serif;">Site Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h6 class="text-primary fw-bold mb-1">Title</h6>
            <p id="modal-site-title" class="mb-3 fw-semibold"></p>
            
            <h6 class="text-primary fw-bold mb-1">Description</h6>
            <p id="modal-site-desc" class="mb-3 text-muted"></p>
            
            <h6 class="text-primary fw-bold mb-1">Technology</h6>
            <p id="modal-site-tech" class="mb-0"><span class="badge bg-secondary p-2"></span></p>
          </div>
          <div class="modal-footer">
            <a href="#" id="modal-visit-btn" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Visit Site <i class="bi bi-arrow-right ms-1"></i></a>
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
    <script src="assets/js/main.js" defer></script>
</body>
</html>`;
}

function generateProjectCards(projects, platform = 'shopify') {
  return projects.map(p => {
    let pPlatform = p.platform || platform;
    let pLogoUrl = "";
    let pBgColor = "";
    if (pPlatform === 'shopify') {
      pLogoUrl = "https://cdn.simpleicons.org/shopify/white";
      pBgColor = "#95BF47";
    } else if (pPlatform === 'wordpress') {
      pLogoUrl = "https://cdn.simpleicons.org/wordpress/white";
      pBgColor = "#21759B";
    } else if (pPlatform === 'laravel') {
      pLogoUrl = "https://cdn.simpleicons.org/laravel/white";
      pBgColor = "#FF2D20";
    }

    return `
    <div class="col-md-4 mb-4 project-card" data-category="${p.cat}" data-tech="${p.tech}">
      <div class="card h-100">
        <div class="d-flex align-items-center justify-content-center" style="height: 200px; background-color: ${pBgColor};">
          <img src="${pLogoUrl}" alt="${p.title} Logo" style="width: 70px; height: 70px; object-fit: contain;">
        </div>
        <div class="card-body d-flex flex-column text-center p-4">
          <h5 class="card-title fw-bold mb-2" style="font-family:'Jost', sans-serif;">${p.title}</h5>
          <p class="small fw-bold" style="color:var(--primary-color);">${p.cat}</p>
          <p class="card-text small text-muted flex-grow-1">Developed with ${p.tech}.</p>
          <div class="mt-4 d-flex justify-content-center w-100 gap-2">
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary px-3 rounded-pill" style="padding: 8px 20px;">
              Visit Site <i class="bi bi-box-arrow-up-right ms-1"></i>
            </a>
            <button type="button" class="btn btn-primary px-3 rounded-pill site-details-btn" 
              style="padding: 8px 20px;"
              data-bs-toggle="modal" data-bs-target="#siteDetailsModal" 
              data-title="${(p.metaTitle || p.title).replace(/"/g, '&quot;')}" 
              data-desc="${(p.metaDesc || '').replace(/"/g, '&quot;')}" 
              data-tech="${p.tech}" 
              data-url="${p.url}">
              Details <i class="bi bi-info-circle ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `}).join('');
}

// 1. Index Page
const indexContent = `
  <!-- GraphixPro Style Hero -->
  <section class="hero-section">
    <div class="container reveal">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 order-1 order-md-0 mt-5 mt-md-0">
          <h5 class="hero-greeting">Hello</h5>
          <h1 class="hero-title"><span>I'm</span> Shankha</h1>
          <h4 class="hero-designation text-muted">Senior Web <span>Developer</span></h4>
          <p class="lead mb-4 pe-md-4 text-muted">I'm a creative developer based in Kolkata, India, specializing in high-quality Shopify, WordPress, and Laravel solutions.</p>
          
          <div class="social-icons mb-5">
            <a href="https://www.linkedin.com/in/shankha-subhra-bag-developer/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
            <a href="https://github.com/shankha-subhra" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
            <a href="https://www.facebook.com/shankhasubhrabag/" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/shankhasubhrabag" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
          </div>

          <div class="d-flex gap-3">
            <a href="about.html" class="btn btn-primary">About Me</a>
            <a href="shopify-projects.html" class="btn btn-outline-primary">My Work</a>
          </div>
        </div>
        
        <div class="col-12 col-md-6 order-0 order-md-1">
          <div class="hero-img-wrapper mx-auto" style="max-width: 400px;">
            <img src="${profileImageUrl}" alt="Shankha Subhra Bag" class="hero-img">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- GraphixPro Style Feature Cards (About Intro) -->
  <section class="py-5 bg-light" id="about-intro">
    <div class="container reveal">
      <div class="row" style="margin-top:-100px; position:relative; z-index:2;">
        <div class="col-md-4 mb-4">
          <div class="feature-card h-100 text-center">
            <div class="mb-4 text-primary" style="font-size:3rem;"><i class="bi bi-gem"></i></div>
            <h5 class="fw-bold">Pixel Perfect</h5>
            <p class="text-muted small mb-0">I offer a range of the best web development services with flawless UI execution.</p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="feature-card h-100 text-center">
            <div class="mb-4 text-primary" style="font-size:3rem;"><i class="bi bi-award"></i></div>
            <h5 class="fw-bold">High Quality</h5>
            <p class="text-muted small mb-0">Whether you need a new store or application, quality is guaranteed.</p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="feature-card h-100 text-center">
            <div class="mb-4 text-primary" style="font-size:3rem;"><i class="bi bi-lightning-charge"></i></div>
            <h5 class="fw-bold">Fast Delivery</h5>
            <p class="text-muted small mb-0">Efficient processes ensure your project is completed well ahead of deadlines.</p>
          </div>
        </div>
      </div>
      
      <div class="row align-items-center mt-5">
        <div class="col-md-6 mb-5 mb-md-0">
          <span class="section-subtitle">Let Me Introduce</span>
          <h2 class="section-title">I'm Shankha Subhra Bag - Expert Developer</h2>
          <p class="text-muted mb-4 mt-3">With 10+ years of experience specializing in PHP, jQuery, and Liquid, I have a proven track record of delivering high-quality, scalable, and performance-optimized solutions for clients globally.</p>
          <a href="#" class="btn btn-primary mt-2">Download CV</a>
        </div>
        <div class="col-md-6 mt-4 mt-md-0">
          <div class="row g-3 text-center">
            <div class="col-6 col-sm-4">
              <div class="p-3 rounded text-white h-100 d-flex flex-column justify-content-center shadow-sm" style="background-color:var(--primary-color);">
                <h3 class="fw-bold fs-4 mb-0 text-white"><span class="counter" data-target="10">0</span>+</h3>
                <p class="mb-0 fw-bold text-white" style="font-size: 0.75rem;">Years Experience</p>
              </div>
            </div>
            <div class="col-6 col-sm-4">
              <div class="p-3 rounded text-white h-100 d-flex flex-column justify-content-center shadow-sm" style="background-color:var(--heading-color);">
                <h3 class="fw-bold fs-4 mb-0 text-white"><span class="counter" data-target="200">0</span>+</h3>
                <p class="mb-0 fw-bold text-white" style="font-size: 0.75rem;">E-commerce Projects</p>
              </div>
            </div>
            <div class="col-6 col-sm-4">
              <div class="p-3 rounded text-white h-100 d-flex flex-column justify-content-center shadow-sm" style="background-color:var(--primary-color);">
                <h3 class="fw-bold fs-4 mb-0 text-white"><span class="counter" data-target="100">0</span>+</h3>
                <p class="mb-0 fw-bold text-white" style="font-size: 0.75rem;">Shopify Projects</p>
              </div>
            </div>
            <div class="col-6 col-sm-6">
              <div class="p-3 rounded text-white h-100 d-flex flex-column justify-content-center shadow-sm" style="background-color:var(--heading-color);">
                <h3 class="fw-bold fs-4 mb-0 text-white"><span class="counter" data-target="20">0</span>+</h3>
                <p class="mb-0 fw-bold text-white" style="font-size: 0.75rem;">Laravel Projects</p>
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="p-3 rounded text-white h-100 d-flex flex-column justify-content-center shadow-sm" style="background-color:var(--primary-color);">
                <h3 class="fw-bold fs-4 mb-0 text-white"><span class="counter" data-target="25">0</span>+</h3>
                <p class="mb-0 fw-bold text-white" style="font-size: 0.75rem;">Shopify Custom & Public Apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Projects -->
  <section class="py-5" id="projects">
    <div class="container reveal pt-5">
      <div class="text-center mb-5">
        <span class="section-subtitle">Portfolio</span>
        <h2 class="section-title">Here Are My Latest Projects.</h2>
      </div>
      <div class="row">
        ${generateProjectCards(shopifyProjects.slice(0, 10), 'shopify')}
        ${generateProjectCards(wpProjects.slice(0, 7), 'wordpress')}
        ${generateProjectCards(laravelProjects.slice(0, 3), 'laravel')}
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
  <section class="py-5">
    <div class="container py-5 reveal">
      <div class="text-center mb-5">
        <span class="section-subtitle">Discover</span>
        <h2 class="section-title">About Me</h2>
      </div>
      <div class="row align-items-center mb-5">
        <div class="col-md-5 mb-4 mb-md-0">
          <div class="hero-img-wrapper mx-auto" style="max-width: 400px;">
            <img src="${profileImageUrl}" alt="Shankha Subhra Bag" class="hero-img" style="border-radius:10px;">
          </div>
        </div>
        <div class="col-md-7 ps-md-5">
          <h3 class="fw-bold mb-4">Shankha Subhra Bag</h3>
          <p class="lead text-muted mb-4">I am a Senior Web Developer with 10+ years of experience specializing in PHP and jQuery, possessing extensive expertise in WordPress Custom Development, Shopify Development, Liquid Coding, and modern frameworks like Laravel.</p>
          <p class="text-muted mb-4">Throughout my career, I've worked on over 200 e-commerce projects and 25+ custom Shopify apps. I always believe that creation is life, and to stay current, I routinely gain new abilities.</p>
          <a href="#" class="btn btn-primary mt-3">Download Resume</a>
        </div>
      </div>
    </div>
  </section>
`;
fs.writeFileSync('about.html', generateHTML('About', aboutContent));

// 3. Services Page
const servicesContent = `
  <section class="py-5 bg-light">
    <div class="container py-5 reveal">
      <div class="text-center mb-5">
        <span class="section-subtitle">Services</span>
        <h2 class="section-title">I Provide Excellent Solutions</h2>
      </div>
      <div class="row g-4 mt-3">
        ${['Shopify Store Development', 'Shopify Theme Development', 'Shopify Custom Apps', 'WordPress Development', 'Laravel Development', 'API Integrations'].map(s => `
          <div class="col-md-4">
            <div class="feature-card h-100 text-center">
              <div class="fs-1 text-primary mb-3"><i class="bi bi-code-square"></i></div>
              <h5 class="fw-bold">${s}</h5>
              <p class="text-muted small mb-0">Professional solutions tailored to your business needs, ensuring high performance and scalable architecture.</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`;
fs.writeFileSync('services.html', generateHTML('Services', servicesContent));

// 4. Skills Page
const skillsContent = `
  <section class="py-5">
    <div class="container py-5 reveal">
      <div class="text-center mb-5">
        <span class="section-subtitle">Creation is Life</span>
        <h2 class="section-title">My Professional Skills</h2>
      </div>
      <div class="row mt-5">
        <div class="col-md-6 mb-5 pe-md-5">
          <h4 class="mb-4 fw-bold">Development Skills</h4>
          ${[
            {name: 'Shopify / Liquid', val: 95},
            {name: 'WordPress / WooCommerce', val: 90},
            {name: 'Laravel / PHP', val: 87},
            {name: 'React / Node.js', val: 80}
          ].map(s => `
            <div class="mb-4">
              <div class="d-flex justify-content-between mb-2">
                <span class="fw-bold text-uppercase" style="font-family:'Jost', sans-serif;">${s.name}</span>
                <span class="fw-bold text-primary">${s.val}%</span>
              </div>
              <div class="progress" style="height: 8px; border-radius:10px; background-color:var(--border-color);">
                <div class="progress-bar" role="progressbar" style="width: ${s.val}%; background-color:var(--primary-color); border-radius:10px;"></div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="col-md-6 mb-5">
          <h4 class="mb-4 fw-bold">Tools & Technologies</h4>
          <div class="d-flex flex-wrap gap-3">
            ${['MySQL', 'JavaScript', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3', 'REST API', 'GraphQL', 'Git', 'GitHub', 'Salesforce'].map(t => `
              <span class="btn btn-outline-primary" style="pointer-events:none;">${t}</span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>
`;
fs.writeFileSync('skills.html', generateHTML('Skills', skillsContent));

// Project Pages
function projectPageContent(title, projects) {
  return `
    <section class="py-5 bg-light min-vh-100">
      <div class="container py-5 reveal">
        <div class="text-center mb-5">
          <span class="section-subtitle">Portfolio</span>
          <h2 class="section-title">${title}</h2>
        </div>
        
        <div class="row mb-5 justify-content-center">
          <div class="col-md-10 text-center">
            <ul class="nav nav-pills justify-content-center mb-3">
              <li class="nav-item">
                <button class="nav-link active filter-btn" data-filter="all">All Projects</button>
              </li>
              ${Array.from(new Set(projects.map(p => p.cat))).sort().map(cat => `
              <li class="nav-item">
                <button class="nav-link filter-btn" data-filter="${cat}">${cat === 'Ecommerce' ? 'E-commerce' : cat}</button>
              </li>
              `).join('')}
            </ul>
          </div>
        </div>
        
        <p class="text-center text-muted mb-5 fw-bold" id="results-count" style="font-family:'Jost', sans-serif;">${projects.length} PROJECTS FOUND</p>

        <div class="row g-4" id="project-grid">
          ${generateProjectCards(projects, title.toLowerCase().includes('all') ? 'mixed' : (title.toLowerCase().includes('shopify') ? 'shopify' : title.toLowerCase().includes('wordpress') ? 'wordpress' : 'laravel'))}
        </div>
      </div>
    </section>
  `;
}

fs.writeFileSync('shopify-projects.html', generateHTML('Shopify Projects', projectPageContent('Shopify Projects', shopifyProjects)));
fs.writeFileSync('wordpress-projects.html', generateHTML('WordPress Projects', projectPageContent('WordPress Projects', wpProjects)));
fs.writeFileSync('laravel-projects.html', generateHTML('Laravel Projects', projectPageContent('Laravel Projects', laravelProjects)));

const allProjectsCombined = [
  ...shopifyProjects.map(p => ({...p, platform: 'shopify'})),
  ...wpProjects.map(p => ({...p, platform: 'wordpress'})),
  ...laravelProjects.map(p => ({...p, platform: 'laravel'}))
];
fs.writeFileSync('all-projects.html', generateHTML('All Projects', projectPageContent('All Projects', allProjectsCombined)));

console.log('Complete generation finished. Contact section totally removed. GraphixPro layout applied.');
