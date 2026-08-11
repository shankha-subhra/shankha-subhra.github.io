const fs = require('fs');

const file = 'e:\\New Projects\\shankha-subhra.github.io\\index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Update Title and Meta
content = content.replace('<title>Senior Fullstack Developer</title>', '<title>Shopify, eCommerce & Integration Development Services</title>');
content = content.replace('Senior Fullstack Developer', 'Shopify, eCommerce & Integration Development Services');

// 2. Update Hero
content = content.replace('<h4 class="hero-designation text-muted letter-anim">Senior Fullstack <span>Developer</span></h4>', 
`<h4 class="hero-designation text-muted letter-anim">Shopify, eCommerce & Integration <span>Development Services</span></h4>
<p class="fw-bold mb-3" style="color: var(--primary-color);">Shopify Plus &bull; Custom Apps &bull; BigCommerce &bull; Laravel &bull; WordPress &bull; ERP/API Integrations</p>`);

// 3. Update Tools & Technologies
const toolsStart = content.indexOf('<div class="d-flex flex-wrap gap-3">');
const toolsEnd = content.indexOf('</div>\n          </div>\n        </div>\n      </div>\n    </section>');

if (toolsStart !== -1 && toolsEnd !== -1) {
    const newTools = `
            <div class="row g-3">
              <div class="col-12">
                <h6 class="fw-bold text-primary mb-2">eCommerce</h6>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge bg-secondary p-2">Shopify</span>
                  <span class="badge bg-secondary p-2">Shopify Plus</span>
                  <span class="badge bg-secondary p-2">BigCommerce</span>
                  <span class="badge bg-secondary p-2">WooCommerce</span>
                </div>
              </div>
              <div class="col-12">
                <h6 class="fw-bold text-primary mb-2">Frontend</h6>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge bg-secondary p-2">Liquid</span>
                  <span class="badge bg-secondary p-2">React.js</span>
                  <span class="badge bg-secondary p-2">JavaScript</span>
                  <span class="badge bg-secondary p-2">jQuery</span>
                  <span class="badge bg-secondary p-2">Bootstrap</span>
                  <span class="badge bg-secondary p-2">Tailwind CSS</span>
                </div>
              </div>
              <div class="col-12">
                <h6 class="fw-bold text-primary mb-2">Backend & Database</h6>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge bg-secondary p-2">Node.js</span>
                  <span class="badge bg-secondary p-2">PHP</span>
                  <span class="badge bg-secondary p-2">Laravel</span>
                  <span class="badge bg-secondary p-2">MySQL</span>
                  <span class="badge bg-secondary p-2">Prisma</span>
                </div>
              </div>
              <div class="col-12">
                <h6 class="fw-bold text-primary mb-2">APIs & Integrations</h6>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge bg-secondary p-2">REST API</span>
                  <span class="badge bg-secondary p-2">Storefront API</span>
                  <span class="badge bg-secondary p-2">Admin API</span>
                  <span class="badge bg-secondary p-2">Webhooks</span>
                  <span class="badge bg-secondary p-2">OAuth</span>
                </div>
              </div>
              <div class="col-12">
                <h6 class="fw-bold text-primary mb-2">ERP / CRM</h6>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge bg-secondary p-2">SAP</span>
                  <span class="badge bg-secondary p-2">Salesforce</span>
                  <span class="badge bg-secondary p-2">NetSuite</span>
                  <span class="badge bg-secondary p-2">Epicor P21</span>
                  <span class="badge bg-secondary p-2">Xero</span>
                </div>
              </div>
              <div class="col-12">
                <h6 class="fw-bold text-primary mb-2">Tools</h6>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge bg-secondary p-2">Git</span>
                  <span class="badge bg-secondary p-2">GitHub</span>
                  <span class="badge bg-secondary p-2">Docker</span>
                  <span class="badge bg-secondary p-2">CI/CD</span>
                </div>
              </div>
            </div>`;
    content = content.substring(0, toolsStart) + newTools + content.substring(toolsEnd);
}

// 4. Add Integration and Custom App Sections before Featured Projects
const projectsSection = '<!-- Featured Projects -->';

const newSections = `
    <!-- CTA Middle -->
    <section class="py-5" style="background-color: var(--primary-color);">
      <div class="container reveal text-center text-white py-4">
        <h3 class="fw-bold mb-3 text-white">Have a Shopify, BigCommerce, Laravel or integration project?</h3>
        <p class="lead mb-4 text-white">I can help with development, migration, custom apps, ERP/API integrations and ongoing support.</p>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <a href="mailto:shankha4030@gmail.com" class="btn btn-light fw-bold">Discuss Your Project &rarr;</a>
          <a href="shopify-projects.html" class="btn btn-outline-light fw-bold">View Portfolio</a>
          <a href="#" class="btn btn-outline-light fw-bold">Shopify App Demo</a>
          <a href="https://www.linkedin.com/in/shankha-subhra-bag-developer/" target="_blank" class="btn btn-outline-light fw-bold">LinkedIn</a>
        </div>
      </div>
    </section>

    <!-- Integration Solutions -->
    <section class="py-5 bg-light">
      <div class="container reveal pt-5">
        <div class="text-center mb-5">
          <span class="section-subtitle">Seamless Data Flow</span>
          <h2 class="section-title">Featured Integration Solutions</h2>
        </div>
        
        <div class="row justify-content-center mb-5">
          <div class="col-md-10">
            <div class="p-4 rounded shadow-sm text-center fw-bold" style="background-color: var(--card-bg); border: 2px dashed var(--primary-color);">
              ERP / CRM &nbsp;<i class="bi bi-arrow-right text-primary"></i>&nbsp; API Middleware &nbsp;<i class="bi bi-arrow-right text-primary"></i>&nbsp; Shopify / BigCommerce &nbsp;<i class="bi bi-arrow-right text-primary"></i>&nbsp; Orders &nbsp;<i class="bi bi-arrow-right text-primary"></i>&nbsp; ERP
            </div>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-6 reveal">
            <div class="feature-card h-100">
              <h5 class="fw-bold text-primary mb-3">SAP &rarr; Shopify Integration</h5>
              <p class="text-muted small mb-0">Product catalog &rarr; Inventory &rarr; Pricing &rarr; Customers &rarr; Orders &rarr; Fulfillment</p>
            </div>
          </div>
          <div class="col-md-6 reveal" style="transition-delay: 0.1s;">
            <div class="feature-card h-100">
              <h5 class="fw-bold text-primary mb-3">NetSuite &rarr; Shopify Integration</h5>
              <p class="text-muted small mb-0">Products &rarr; Inventory &rarr; Customer groups &rarr; Orders &rarr; Fulfillment</p>
            </div>
          </div>
          <div class="col-md-6 reveal" style="transition-delay: 0.2s;">
            <div class="feature-card h-100">
              <h5 class="fw-bold text-primary mb-3">Salesforce &rarr; Shopify</h5>
              <p class="text-muted small mb-0">Customers &rarr; CRM records &rarr; Orders &rarr; Automated workflows</p>
            </div>
          </div>
          <div class="col-md-6 reveal" style="transition-delay: 0.3s;">
            <div class="feature-card h-100">
              <h5 class="fw-bold text-primary mb-3">Epicor P21 &rarr; Shopify B2B</h5>
              <p class="text-muted small mb-0">Customer pricing &rarr; Inventory &rarr; Quotes &rarr; Orders &rarr; Fulfillment</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shopify Custom Apps -->
    <section class="py-5">
      <div class="container reveal pt-5">
        <div class="text-center mb-5">
          <span class="section-subtitle">Beyond Theme Development</span>
          <h2 class="section-title">Shopify App Development</h2>
          <p class="text-muted">Over 10+ custom Shopify applications built using Remix, React, Node.js, and Laravel.</p>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-3"><div class="p-3 border rounded shadow-sm fw-semibold"><i class="bi bi-check-circle-fill text-primary me-2"></i> Subscription apps</div></div>
          <div class="col-md-6 col-lg-4 mb-3"><div class="p-3 border rounded shadow-sm fw-semibold"><i class="bi bi-check-circle-fill text-primary me-2"></i> Shipping-rule apps</div></div>
          <div class="col-md-6 col-lg-4 mb-3"><div class="p-3 border rounded shadow-sm fw-semibold"><i class="bi bi-check-circle-fill text-primary me-2"></i> Product registration apps</div></div>
          <div class="col-md-6 col-lg-4 mb-3"><div class="p-3 border rounded shadow-sm fw-semibold"><i class="bi bi-check-circle-fill text-primary me-2"></i> Inventory synchronization</div></div>
          <div class="col-md-6 col-lg-4 mb-3"><div class="p-3 border rounded shadow-sm fw-semibold"><i class="bi bi-check-circle-fill text-primary me-2"></i> Customer portals</div></div>
          <div class="col-md-6 col-lg-4 mb-3"><div class="p-3 border rounded shadow-sm fw-semibold"><i class="bi bi-check-circle-fill text-primary me-2"></i> Review applications</div></div>
          <div class="col-md-6 col-lg-4 mb-3"><div class="p-3 border rounded shadow-sm fw-semibold"><i class="bi bi-check-circle-fill text-primary me-2"></i> Bulk product/order processing</div></div>
          <div class="col-md-6 col-lg-4 mb-3"><div class="p-3 border rounded shadow-sm fw-semibold"><i class="bi bi-check-circle-fill text-primary me-2"></i> ERP synchronization</div></div>
          <div class="col-md-6 col-lg-4 mb-3"><div class="p-3 border rounded shadow-sm fw-semibold"><i class="bi bi-check-circle-fill text-primary me-2"></i> Checkout extensions</div></div>
          <div class="col-md-6 col-lg-4 mb-3 mx-auto"><div class="p-3 border rounded shadow-sm fw-semibold"><i class="bi bi-check-circle-fill text-primary me-2"></i> Admin dashboards</div></div>
        </div>
      </div>
    </section>

`;

content = content.replace(projectsSection, newSections + projectsSection);

fs.writeFileSync(file, content, 'utf8');
console.log('index.html Part 1 updated.');
