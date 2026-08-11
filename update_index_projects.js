const fs = require('fs');
const path = require('path');

const indexFile = path.join('e:', 'New Projects', 'shankha-subhra.github.io', 'index.html');
const dataFile = path.join('e:', 'New Projects', 'shankha-subhra.github.io', 'filtered_projects.json');

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
const shopify = data.shopifyProjects.slice(0, 6);
const wp = data.wpProjects.slice(0, 6);
const laravel = data.laravelProjects.slice(0, 3);

const allProjects = [...shopify, ...wp, ...laravel];

function getCategoryFilter(techStr) {
    if (techStr.toLowerCase().includes('shopify')) return 'shopify';
    if (techStr.toLowerCase().includes('wordpress')) return 'wordpress';
    if (techStr.toLowerCase().includes('laravel')) return 'laravel';
    return 'all';
}

function getIcon(techStr) {
    if (techStr.toLowerCase().includes('shopify')) return 'https://cdn.simpleicons.org/shopify/white';
    if (techStr.toLowerCase().includes('wordpress')) return 'https://cdn.simpleicons.org/wordpress/white';
    if (techStr.toLowerCase().includes('laravel')) return 'https://cdn.simpleicons.org/laravel/white';
    return 'https://cdn.simpleicons.org/code/white';
}

function getBgColor(techStr) {
    if (techStr.toLowerCase().includes('shopify')) return '#95BF47';
    if (techStr.toLowerCase().includes('wordpress')) return '#21759B';
    if (techStr.toLowerCase().includes('laravel')) return '#FF2D20';
    return '#333333';
}

let cardsHtml = '';

allProjects.forEach(p => {
    const filterCat = getCategoryFilter(p.tech);
    const icon = getIcon(p.tech);
    const bg = getBgColor(p.tech);
    const techDisplay = p.tech.replace(/"/g, '&quot;');
    const descStr = p.desc || `Developed with ${p.tech}`;
    const descDisplay = descStr.replace(/"/g, '&quot;');
    const titleDisplay = p.title.replace(/"/g, '&quot;');
    const categoryDisplay = p.category ? p.category.replace(/"/g, '&quot;') : 'Ecommerce';
    
    cardsHtml += `
          <div class="col-md-4 mb-4 project-card reveal" data-category="${filterCat}" data-tech="${techDisplay}">
            <div class="card h-100">
              <div class="d-flex align-items-center justify-content-center"
                style="height: 180px; background-color: ${bg};">
                <img src="${icon}" alt="${titleDisplay} Logo"
                  style="width: 70px; height: 70px; object-fit: contain;">
              </div>
              <div class="card-body d-flex flex-column text-center p-4">
                <h5 class="card-title fw-bold mb-2" style="font-family:'Jost', sans-serif;">${titleDisplay}</h5>
                <p class="small fw-bold" style="color:var(--primary-color);">${categoryDisplay}</p>
                <p class="card-text small text-muted flex-grow-1">${descDisplay}</p>
                <div class="mt-4 d-flex justify-content-center w-100 gap-2">
                  <a href="${p.url}" target="_blank" rel="noopener noreferrer"
                    class="btn btn-outline-primary px-3 rounded-pill" style="padding: 8px 20px;">
                    Visit Site <i class="bi bi-box-arrow-up-right ms-1"></i>
                  </a>
                  <button type="button" class="btn btn-primary px-3 rounded-pill site-details-btn"
                    style="padding: 8px 20px;" data-bs-toggle="modal" data-bs-target="#siteDetailsModal"
                    data-title="${titleDisplay}"
                    data-desc="${descDisplay}"
                    data-tech="${techDisplay}" data-url="${p.url}">
                    Details <i class="bi bi-info-circle ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
`;
});

let indexContent = fs.readFileSync(indexFile, 'utf8');

// The section is <!-- Featured Projects -->
// Under that, there's a row after the project-filters div.
// Let's replace the content inside that row.

const startMarker = '<div class="project-filters mt-4 d-flex justify-content-center flex-wrap gap-2">';
const rowStart = indexContent.indexOf('<div class="row">', indexContent.indexOf(startMarker));
const endSection = indexContent.indexOf('</section>', rowStart);

if (rowStart !== -1 && endSection !== -1) {
    // Extract everything from rowStart to endSection
    const beforeRow = indexContent.substring(0, rowStart + 17); // include <div class="row">\n
    
    // Find the closing </div> of that row. We can assume the row ends right before </section> 
    // actually, there's a </div> for the row, then </div> for the container, then </section>.
    // Let's just find the closing </div></div>\n    </section>
    const afterCardsMatch = indexContent.match(/<\/div>\s*<\/div>\s*<\/section>/);
    if (afterCardsMatch) {
        // Wait, multiple sections might match. Let's start searching from endSection backwards, or just use string manipulation carefully.
        const tail = indexContent.substring(endSection - 20); // rough
    }
}

// Safer approach: Split by <section class="py5 mb-5" id="projects"> and <!-- CTA Bottom -->
const sectionStart = indexContent.indexOf('<section class="py5 mb-5" id="projects">');
const nextSection = indexContent.indexOf('<!-- CTA Bottom -->');

if (sectionStart !== -1 && nextSection !== -1) {
    let sectionContent = indexContent.substring(sectionStart, nextSection);
    const rowStart = sectionContent.indexOf('<div class="row">');
    const rowEnd = sectionContent.lastIndexOf('</div>\n      </div>'); // the row div closing and container div closing
    
    if (rowStart !== -1 && rowEnd !== -1) {
        const newSectionContent = sectionContent.substring(0, rowStart + 17) + '\n' + cardsHtml + '        </div>\n      </div>\n    </section>\n\n    ';
        indexContent = indexContent.substring(0, sectionStart) + newSectionContent + indexContent.substring(nextSection);
        fs.writeFileSync(indexFile, indexContent, 'utf8');
        console.log('Successfully updated index.html with 15 dynamic projects.');
    } else {
        console.log('Could not find row boundaries.');
    }
} else {
    console.log('Could not find section boundaries.');
}
