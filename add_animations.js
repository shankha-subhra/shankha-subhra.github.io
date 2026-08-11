const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add letter-anim to section titles
    content = content.replace(/<h2 class="section-title">/g, '<h2 class="section-title letter-anim">');
    
    // Add reveal to project cards
    content = content.replace(/<div class="col-md-4 mb-4 project-card"/g, '<div class="col-md-4 mb-4 project-card reveal"');
    
    // Add reveal to col-md-4 that wrap feature cards (like in services.html)
    // First, let's just add reveal to the feature cards themselves to be safe
    content = content.replace(/<div class="feature-card h-100 text-center">/g, '<div class="feature-card h-100 text-center reveal">');
    
    // In about.html, the image container
    content = content.replace(/<div class="col-md-5 mb-4 mb-md-0">/g, '<div class="col-md-5 mb-4 mb-md-0 reveal">');
    content = content.replace(/<div class="col-md-7 ps-md-5">/g, '<div class="col-md-7 ps-md-5 reveal" style="transition-delay: 0.2s;">');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${file}`);
}
