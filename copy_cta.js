const fs = require('fs');
const path = require('path');

const indexFile = path.join('e:', 'New Projects', 'shankha-subhra.github.io', 'index.html');
const aboutFile = path.join('e:', 'New Projects', 'shankha-subhra.github.io', 'about.html');

const indexContent = fs.readFileSync(indexFile, 'utf8');
const aboutContent = fs.readFileSync(aboutFile, 'utf8');

const startCta = aboutContent.indexOf('<!-- CTA -->');
const endCta = aboutContent.indexOf('<script>', startCta);
const ctaSection = aboutContent.substring(startCta, endCta);

const startOldCta = indexContent.indexOf('<!-- CTA Bottom -->');
const endOldCta = indexContent.indexOf('</main>', startOldCta);

if (startCta !== -1 && endCta !== -1 && startOldCta !== -1 && endOldCta !== -1) {
    const newContent = indexContent.substring(0, startOldCta) + ctaSection + '\n  ' + indexContent.substring(endOldCta);
    fs.writeFileSync(indexFile, newContent, 'utf8');
    console.log('Successfully replaced CTA in index.html');
} else {
    console.log('Error finding boundaries.');
}
