const fs = require('fs');

const indexFile = 'e:\\New Projects\\shankha-subhra.github.io\\index.html';
const servicesFile = 'e:\\New Projects\\shankha-subhra.github.io\\services.html';

const indexContent = fs.readFileSync(indexFile, 'utf8');
let servicesContent = fs.readFileSync(servicesFile, 'utf8');

// Section 1: CTA Middle
const ctaStart = indexContent.indexOf('<!-- CTA Middle -->');
const ctaEnd = indexContent.indexOf('<!-- Integration Solutions -->');
let section1 = indexContent.substring(ctaStart, ctaEnd).trim();

// Section 2: Seamless Data Flow (Integration Solutions)
const integStart = indexContent.indexOf('<!-- Integration Solutions -->');
const integEnd = indexContent.indexOf('<!-- Shopify Custom Apps -->');
let section2 = indexContent.substring(integStart, integEnd).trim();

// Section 3: Beyond Theme Development (Shopify Custom Apps)
const appStart = indexContent.indexOf('<!-- Shopify Custom Apps -->');
const appEnd = indexContent.indexOf('<!-- Featured Projects -->');
let section3 = indexContent.substring(appStart, appEnd).trim();

if (ctaStart !== -1 && integStart !== -1 && appStart !== -1) {
    // We want to insert these three sections into services.html.
    // Let's put them right after the services grid, which ends before the footer.
    // We can just append them before the `</main>` tag, or maybe before the `<!-- CTA Bottom -->` if it exists.
    // Currently, services.html doesn't have these, but let's see where to insert.
    const insertionPoint = servicesContent.indexOf('</main>');
    
    if (insertionPoint !== -1) {
        const combinedSections = '\n\n' + section1 + '\n\n' + section2 + '\n\n' + section3 + '\n\n';
        servicesContent = servicesContent.substring(0, insertionPoint) + combinedSections + '  ' + servicesContent.substring(insertionPoint);
        fs.writeFileSync(servicesFile, servicesContent, 'utf8');
        console.log('Sections copied successfully.');
    } else {
        console.log('Could not find insertion point in services.html');
    }
} else {
    console.log('Could not find one or more sections in index.html');
}
