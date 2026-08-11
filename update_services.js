const fs = require('fs');

const services = [
  { title: 'Shopify Store Development', desc: 'Shopify 2.0 stores, custom Liquid themes, Figma-to-Shopify, sections, PDPs, collections, cart customization, metafields and responsive development.' },
  { title: 'Shopify Custom App Development', desc: 'Custom/private/public apps using Remix, React, Node.js, Laravel and Shopify APIs. Your resume specifically mentions 10+ custom Shopify applications.' },
  { title: 'Shopify Plus Development', desc: 'Enterprise Shopify development, B2B functionality, advanced checkout requirements, automation and scalable storefront architecture.' },
  { title: 'Shopify Checkout Extensions', desc: 'Checkout UI Extensions, validation rules, delivery logic, discounts, subscription checkout functionality and custom checkout experiences. Your current role includes checkout-extension work.' },
  { title: 'Shopify Subscription Development', desc: 'Weekly, fortnightly and monthly subscriptions, recurring-order logic, subscription discounts, delivery rules and custom subscription applications.' },
  { title: 'Shopify B2B Development', desc: 'Wholesale pricing, company accounts, customer-specific catalogs, dealer pricing, quantity rules, quotation workflows and B2B portals.' },
  { title: 'BigCommerce Development', desc: 'Theme customization, B2B storefronts, catalog management, customer pricing, product filtering, APIs and third-party integrations. Your resume lists 3+ years of BigCommerce experience.' },
  { title: 'WordPress & WooCommerce Development', desc: 'Custom themes, plugins, WooCommerce development, ACF, custom post types, payment integrations and performance optimization.' },
  { title: 'Laravel Application Development', desc: 'Custom portals, dashboards, CRM/ERP systems, REST APIs, scheduled jobs, queues, payments, search and business automation.' },
  { title: 'ERP / CRM / eCommerce Integration', desc: 'SAP ↔ Shopify, Salesforce, NetSuite, Epicor Prophet 21, Xero and Magento integrations. Your resume directly highlights these integration areas.' },
  { title: 'API & Webhook Development', desc: 'REST APIs, Shopify Admin API, Storefront API, third-party APIs, webhooks, OAuth, scheduled synchronization, queues and automated workflows.' },
  { title: 'eCommerce Migration', desc: 'Shopify → Magento, Magento → Shopify, legacy platform → Shopify, including: Products, variants, customers, orders, inventory, pricing, images, redirects and SEO data.' },
  { title: 'Product & Inventory Synchronization', desc: 'ERP-to-store product synchronization, real-time/near-real-time inventory, pricing updates, multi-location stock and scheduled sync jobs.' },
  { title: 'Shopify Performance Optimization', desc: 'Core Web Vitals, Liquid optimization, JavaScript cleanup, image optimization, app/script analysis and mobile performance.' },
  { title: 'CRO & Conversion Optimization', desc: 'PDP improvements, cart UX, quick-add, upsells, bundles, trust sections, checkout optimization and mobile conversion improvements.' },
  { title: 'Maintenance & Support', desc: 'Bug fixing, feature enhancements, API monitoring, Shopify updates, app maintenance, server maintenance and ongoing monthly support.' }
];

let htmlContent = '';
services.forEach((s, index) => {
    // Add staggered delay to reveal
    const delay = (index % 3) * 0.1;
    const delayStyle = delay > 0 ? ` style="transition-delay: ${delay}s;"` : '';
    
    htmlContent += `
          <div class="col-md-4">
            <div class="feature-card h-100 text-center reveal"${delayStyle}>
              <div class="fs-1 text-primary mb-3"><i class="bi bi-code-square"></i></div>
              <h5 class="fw-bold">${s.title}</h5>
              <p class="text-muted small mb-0">${s.desc}</p>
            </div>
          </div>`;
});

const file = 'e:\\New Projects\\shankha-subhra.github.io\\services.html';
let content = fs.readFileSync(file, 'utf8');

const startTag = '<div class="row g-4 mt-3">';
const endTag = '</div>\n    </div>\n  </section>';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const newContent = content.substring(0, startIndex + startTag.length) + '\n' + htmlContent + '\n      ' + content.substring(endIndex);
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated services.html successfully');
} else {
    console.log('Failed to find tags in services.html');
}
