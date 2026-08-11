const fs = require('fs');

const file = 'e:\\New Projects\\shankha-subhra.github.io\\index.html';
let content = fs.readFileSync(file, 'utf8');

const projectsStart = content.indexOf('<div class="row g-4 mt-4" id="project-container">');
const projectsEnd = content.indexOf('</section>', projectsStart);

if (projectsStart !== -1 && projectsEnd !== -1) {
    const newProjects = `<div class="row g-4 mt-4" id="project-container">
          
          <div class="col-md-4 mb-4 project-card reveal" data-category="shopify" data-tech="Shopify, Laravel APIs">
            <div class="card h-100">
              <div class="d-flex align-items-center justify-content-center" style="height: 180px; background-color: var(--primary-color);">
                <h3 class="text-white fw-bold mb-0">Thrivemeals</h3>
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold">Thrivemeals &mdash; Subscription App</h5>
                <p class="card-text text-muted small">Shopify + Custom Subscription App, Checkout extensions, delivery rules, discounts and Laravel APIs.</p>
                <div class="mt-3">
                  <span class="badge bg-secondary">Shopify</span>
                  <span class="badge bg-secondary">Laravel API</span>
                </div>
              </div>
              <div class="card-footer bg-transparent border-0 pb-3">
                <a href="#" class="btn btn-outline-primary btn-sm view-details-btn" data-title="Thrivemeals" data-desc="Shopify + Custom Subscription App, Checkout extensions, delivery rules, discounts and Laravel APIs." data-tech="Shopify, Laravel APIs">View Details</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4 project-card reveal" data-category="shopify" data-tech="Shopify 2.0">
            <div class="card h-100">
              <div class="d-flex align-items-center justify-content-center" style="height: 180px; background-color: #2a2d43;">
                <h3 class="text-white fw-bold mb-0">Kidsland USA</h3>
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold">Kidsland USA &mdash; Shopify 2.0</h5>
                <p class="card-text text-muted small">1,000+ products, custom brand pages, product pages, collections and navigation optimization.</p>
                <div class="mt-3">
                  <span class="badge bg-secondary">Shopify 2.0</span>
                </div>
              </div>
              <div class="card-footer bg-transparent border-0 pb-3">
                <a href="#" class="btn btn-outline-primary btn-sm view-details-btn" data-title="Kidsland USA" data-desc="1,000+ products, custom brand pages, product pages, collections and navigation optimization." data-tech="Shopify 2.0">View Details</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4 project-card reveal" data-category="shopify" data-tech="Custom App">
            <div class="card h-100">
              <div class="d-flex align-items-center justify-content-center" style="height: 180px; background-color: var(--primary-color);">
                <h3 class="text-white fw-bold mb-0">Boohgle USA</h3>
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold">Boohgle USA &mdash; Custom App</h5>
                <p class="card-text text-muted small">200+ products plus a custom product registration and replacement application using Shopify APIs.</p>
                <div class="mt-3">
                  <span class="badge bg-secondary">Shopify API</span>
                </div>
              </div>
              <div class="card-footer bg-transparent border-0 pb-3">
                <a href="#" class="btn btn-outline-primary btn-sm view-details-btn" data-title="Boohgle USA" data-desc="200+ products plus a custom product registration and replacement application using Shopify APIs." data-tech="Shopify API">View Details</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4 project-card reveal" data-category="bigcommerce" data-tech="BigCommerce">
            <div class="card h-100">
              <div class="d-flex align-items-center justify-content-center" style="height: 180px; background-color: #2a2d43;">
                <h3 class="text-white fw-bold mb-0">Casey's Distributing</h3>
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold">Casey's Distributing &mdash; B2B</h5>
                <p class="card-text text-muted small">BigCommerce B2B platform with 50,000+ products, thousands of resellers and 50+ manufacturers.</p>
                <div class="mt-3">
                  <span class="badge bg-secondary">BigCommerce</span>
                </div>
              </div>
              <div class="card-footer bg-transparent border-0 pb-3">
                <a href="#" class="btn btn-outline-primary btn-sm view-details-btn" data-title="Casey's Distributing" data-desc="BigCommerce B2B platform with 50,000+ products, thousands of resellers and 50+ manufacturers." data-tech="BigCommerce">View Details</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4 project-card reveal" data-category="laravel" data-tech="Laravel, MySQL">
            <div class="card h-100">
              <div class="d-flex align-items-center justify-content-center" style="height: 180px; background-color: var(--primary-color);">
                <h3 class="text-white fw-bold mb-0">KareConnect</h3>
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold">KareConnect &mdash; Platform</h5>
                <p class="card-text text-muted small">Laravel/MySQL management platform featuring complex data handling and advanced search integration.</p>
                <div class="mt-3">
                  <span class="badge bg-secondary">Laravel</span>
                  <span class="badge bg-secondary">MySQL</span>
                </div>
              </div>
              <div class="card-footer bg-transparent border-0 pb-3">
                <a href="#" class="btn btn-outline-primary btn-sm view-details-btn" data-title="KareConnect" data-desc="Laravel/MySQL management platform featuring complex data handling and advanced search integration." data-tech="Laravel, MySQL">View Details</a>
              </div>
            </div>
          </div>

        </div>
      </div>
`;
    content = content.substring(0, projectsStart) + newProjects + content.substring(projectsEnd - 12);
}

// Add Bottom CTA before </main>
const bottomCta = `
    <!-- CTA Bottom -->
    <section class="py-5" style="background-color: var(--card-bg);">
      <div class="container reveal text-center py-4">
        <h3 class="fw-bold mb-3">Ready to transform your eCommerce business?</h3>
        <p class="lead mb-4 text-muted">I can help with development, migration, custom apps, ERP/API integrations and ongoing support.</p>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <a href="mailto:shankha4030@gmail.com" class="btn btn-primary fw-bold">Hire Me</a>
          <a href="shopify-projects.html" class="btn btn-outline-primary fw-bold">View Portfolio</a>
          <a href="#" class="btn btn-outline-primary fw-bold">Shopify App Demo</a>
        </div>
      </div>
    </section>
`;
content = content.replace('</main>', bottomCta + '\n  </main>');

fs.writeFileSync(file, content, 'utf8');
console.log('index.html Part 2 updated.');
