const fs = require('fs');
const path = require('path');

const config = {
    shopify: {
        file: 'shopify-projects.html',
        heading: 'Shopify Capabilities',
        desc: 'Technologies, integrations and Shopify capabilities I use to build, customize, integrate and scale modern B2B and B2C eCommerce solutions.',
        badges: [
            'Shopify', 'Shopify Plus', 'Shopify 2.0', 'Liquid', 'Metafields', 'Metaobjects', 'Shopify Functions',
            'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'React',
            'Custom Shopify Apps', 'Public Shopify Apps', 'Remix', 'Node.js', 'Theme App Extensions', 'Checkout Extensions', 'Subscription Apps',
            'Shopify Admin API', 'Storefront API', 'REST API', 'Webhooks', 'OAuth', 'Third-Party API Integration',
            'Product Migration', 'Customer Migration', 'Inventory Sync', 'Pricing Sync', 'Order Sync', 'Fulfillment Sync',
            'SAP Integration', 'NetSuite Integration', 'Salesforce Integration', 'Epicor P21 Integration', 'ERP Integration',
            'CRO', 'Speed Optimization', 'Responsive Development', 'Shopify Performance Optimization'
        ]
    },
    wordpress: {
        file: 'wordpress-projects.html',
        heading: 'WordPress Capabilities',
        desc: 'Technologies and WordPress capabilities I use to build custom websites, WooCommerce stores, plugins and scalable business solutions.',
        badges: [
            'WordPress', 'WooCommerce', 'PHP', 'MySQL',
            'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap',
            'Custom WordPress Themes', 'Theme Customization', 'Child Themes', 'Responsive Development',
            'Custom Plugins', 'Plugin Customization', 'WordPress Hooks', 'Actions & Filters',
            'ACF', 'Custom Post Types', 'Custom Taxonomies', 'Gutenberg', 'Elementor', 'Divi',
            'WooCommerce Customization', 'Custom Product Types', 'Checkout Customization', 'Payment Gateway Integration', 'Product Import', 'Order Management',
            'WordPress REST API', 'Third-Party APIs', 'Webhooks', 'CRM Integration', 'Payment API Integration',
            'Membership Websites', 'Multilingual Websites', 'Website Migration', 'Data Migration', 'Performance Optimization', 'Security Optimization', 'SEO-Friendly Development'
        ]
    },
    laravel: {
        file: 'laravel-projects.html',
        heading: 'Laravel Capabilities',
        desc: 'Technologies, APIs and backend capabilities I use to build secure, scalable Laravel applications, integrations and business automation systems.',
        badges: [
            'Laravel', 'PHP', 'MySQL', 'Eloquent ORM', 'Blade',
            'REST APIs', 'Webhooks', 'API Authentication', 'OAuth 2.0', 'Database Design', 'MVC Architecture',
            'Laravel Queue', 'Laravel Scheduler', 'Cron Jobs', 'Background Jobs', 'Automated Workflows',
            'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap',
            'Stripe API', 'PayPal API', 'Payment Gateway Integration',
            'Shopify Integration', 'WooCommerce Integration', 'Xero Integration', 'ERP Integration', 'Third-Party API Integration',
            'Product Sync', 'Customer Sync', 'Inventory Sync', 'Pricing Sync', 'Order Sync', 'Fulfillment Sync',
            'Git', 'GitHub', 'Docker', 'CI/CD', 'PDF Generation'
        ]
    }
};

const dir = path.join('e:', 'New Projects', 'shankha-subhra.github.io');

Object.values(config).forEach(c => {
    const filePath = path.join(dir, c.file);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${c.file}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    let badgesHTML = c.badges.map(b => `<span>${b}</span>`).join('\n                ');

    const techSection = `
    <!-- Capabilities Section -->
    <section class="py-5 bg-dark text-white">
        <div class="container reveal py-5">

            <div class="text-center mb-5">
                <span class="text-success fw-semibold">TECH STACK</span>
                <h2 class="fw-bold mt-2 text-white">${c.heading}</h2>
                <p class="text-white-50 mx-auto" style="max-width:750px;">
                    ${c.desc}
                </p>
            </div>

            <div class="tech-cloud text-center">
                ${badgesHTML}
            </div>

        </div>
    </section>
`;

    // Remove old tech stack if it exists
    const techRegex = /<!-- Capabilities Section -->[\s\S]*?<\/section>/;
    if (techRegex.test(content)) {
        content = content.replace(techRegex, '');
    }
    
    // Find where to insert (before CTA section or before </main>)
    const ctaRegex = /<!-- CTA -->|<section class="py-5 mb-4">/;
    const ctaMatch = content.match(ctaRegex);
    
    if (ctaMatch) {
        const ctaIndex = ctaMatch.index;
        content = content.substring(0, ctaIndex) + techSection + '\n' + content.substring(ctaIndex);
    } else {
        const mainEnd = content.indexOf('</main>');
        if (mainEnd !== -1) {
            content = content.substring(0, mainEnd) + techSection + '\n' + content.substring(mainEnd);
        } else {
            console.log(`Could not find insertion point in ${c.file}`);
            return;
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${c.file}`);
});

// Update style.css
const cssPath = path.join(dir, 'assets', 'css', 'style.css');
if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    
    const newCSS = `

/* Tech Cloud / Capability Badges */
.tech-cloud {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
}

.tech-cloud span {
    display: inline-block;
    padding: 10px 18px;
    border: 1px solid rgba(255,255,255,.18);
    background: rgba(255,255,255,.07);
    border-radius: 50px;
    transition: all .3s ease;
}

.tech-cloud span:hover {
    background: var(--primary-color);
    transform: translateY(-4px);
}
`;
    if (!css.includes('.tech-cloud {')) {
        fs.appendFileSync(cssPath, newCSS, 'utf8');
        console.log('Updated style.css with .tech-cloud');
    }
}
