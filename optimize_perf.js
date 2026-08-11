const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const fontLinks = `  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">`;

const preloadHero = `  <link rel="preload" as="image" href="assets/images/ssbag.jpeg">`;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Add Font Links if not present
    if (!content.includes('fonts.googleapis.com')) {
        content = content.replace('</head>', `${fontLinks}\n</head>`);
    }

    // 2. Preload Hero Image in index.html and about.html
    if ((file === 'index.html' || file === 'about.html') && !content.includes('rel="preload" as="image"')) {
        content = content.replace('</head>', `${preloadHero}\n</head>`);
    }

    // 3. Add loading="lazy" and decoding="async" to <img> tags (excluding the hero image)
    content = content.replace(/<img(.*?)>/g, (match, p1) => {
        // Skip hero image
        if (p1.includes('ssbag.jpeg')) return match;
        // Skip logo (it's above the fold)
        if (p1.includes('ssblogo.png')) return match;
        
        let newImg = match;
        if (!p1.includes('loading=')) {
            newImg = newImg.replace('>', ' loading="lazy" decoding="async">');
        }
        return newImg;
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${file}`);
}
