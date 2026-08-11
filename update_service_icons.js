const fs = require('fs');

const file = 'e:\\New Projects\\shankha-subhra.github.io\\services.html';
let content = fs.readFileSync(file, 'utf8');

const iconMap = {
  'Shopify Store Development': 'bi-shop',
  'Shopify Custom App Development': 'bi-boxes',
  'Shopify Plus Development': 'bi-star-fill',
  'Shopify Checkout Extensions': 'bi-cart-check',
  'Shopify Subscription Development': 'bi-calendar-check',
  'Shopify B2B Development': 'bi-briefcase',
  'BigCommerce Development': 'bi-box-seam',
  'WordPress & WooCommerce Development': 'bi-wordpress',
  'Laravel Application Development': 'bi-code-slash',
  'ERP / CRM / eCommerce Integration': 'bi-diagram-3',
  'API & Webhook Development': 'bi-lightning-charge',
  'eCommerce Migration': 'bi-arrow-left-right',
  'Product & Inventory Synchronization': 'bi-database-fill-up',
  'Shopify Performance Optimization': 'bi-speedometer2',
  'CRO & Conversion Optimization': 'bi-graph-up-arrow',
  'Maintenance & Support': 'bi-tools'
};

for (const [title, icon] of Object.entries(iconMap)) {
    // We need to replace the icon for the specific feature card.
    // We can use a regex to find the block matching this title.
    // Example block:
    // <div class="fs-1 text-primary mb-3"><i class="bi bi-code-square"></i></div>
    // <h5 class="fw-bold">Shopify Store Development</h5>
    
    // We can match the entire block and replace the icon class.
    const regex = new RegExp(`(<div class="fs-1 text-primary mb-3"><i class="bi )[a-z-]+("><\\/i><\\/div>\\s*<h5 class="fw-bold">${title.replace(/[.*+?^$\{}()|[\]\\]/g, '\\$&')}<\\/h5>)`, 'g');
    content = content.replace(regex, `$1`.replace(/<i class="bi [a-z-]+">/, `<i class="bi ${icon}">`));
}

// Fallback in case the precise regex didn't catch due to formatting. We can just do a replace using split/join if needed.
// Wait, the regex captures the `<i class="bi bi-code-square">` part in `$1` so replacing it inside `$1` is tricky in a single string replace unless we use a reviver function.

let lines = content.split('\n');
let i = 0;
while (i < lines.length) {
    if (lines[i].includes('<div class="fs-1 text-primary mb-3">')) {
        let titleLine = lines[i+1];
        for (const [title, icon] of Object.entries(iconMap)) {
            if (titleLine && titleLine.includes(title)) {
                lines[i] = `              <div class="fs-1 text-primary mb-3"><i class="bi ${icon}"></i></div>`;
            }
        }
    }
    i++;
}

fs.writeFileSync(file, lines.join('\n'), 'utf8');
console.log('Updated service icons.');
