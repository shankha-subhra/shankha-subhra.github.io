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
console.log('Updated service icons safely.');
