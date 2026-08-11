const fs = require('fs');
const path = require('path');

const dir = path.join('e:', 'New Projects', 'shankha-subhra.github.io');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let updatedCount = 0;

files.forEach(file => {
    if (file === 'bigcommerce-projects.html') return; // Skip the one we already added it to, though it wouldn't hurt to check if it's there.
    
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Update Header
    if (content.includes('<li><a class="dropdown-item" href="shopify-projects.html">Shopify</a></li>') && !content.includes('href="bigcommerce-projects.html">BigCommerce<')) {
        content = content.replace(
            '<li><a class="dropdown-item" href="shopify-projects.html">Shopify</a></li>',
            '<li><a class="dropdown-item" href="shopify-projects.html">Shopify</a></li>\n              <li><a class="dropdown-item" href="bigcommerce-projects.html">BigCommerce</a></li>'
        );
        changed = true;
    }

    // Update Footer
    // The footer has "Shopify\n                Projects</a></li>" or similar due to prettier formatting.
    // Let's use a regex to match the Shopify Projects li.
    const footerRegex = /<li class="mb-2"><a href="shopify-projects\.html" class="text-decoration-none text-muted">Shopify[\s\S]*?Projects<\/a><\/li>/;
    
    if (footerRegex.test(content) && !content.includes('href="bigcommerce-projects.html" class="text-decoration-none text-muted">BigCommerce')) {
        content = content.replace(
            footerRegex,
            `$&
            <li class="mb-2"><a href="bigcommerce-projects.html" class="text-decoration-none text-muted">BigCommerce
                Projects</a></li>`
        );
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
        updatedCount++;
    }
});

console.log(`Updated ${updatedCount} files.`);
