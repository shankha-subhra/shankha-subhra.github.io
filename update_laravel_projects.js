const fs = require('fs');

const rawText = `
001 Kareconnect NDIS CRM Software, NDIS Software Australia, NDIS Provider Software, Best NDIS Software. https://www.kareconnect.com.au/
002 Abbax Laravel/MySQL application with Stripe and PayPal. https://abbax.eu/
003 Pets Spokesman Laravel platform with MySQL and payment integrations. https://pets.spokesman.com/
004 Sport Clips Jobs Production job platform using Laravel and MySQL. https://jobs.sportclips.com/
005 Invoice Ninja Invoicing and payment-management platform. https://invoiceninja.com
006 Contentoo Content talent and collaboration marketplace. https://contentoo.com
007 MyRank Online learning and competitive-exam platform. https://myrank.co.in
008 Usetably User-testing and product-feedback platform. https://www.usetably.com
009 Laracasts Developer education and video-training platform. https://laracasts.com
010 Flarum Modern open-source community forum software. https://www.flarum.com
011 World Walking Gamified walking and wellness platform. https://worldwalking.org
012 Barchart Financial data, market tools and research platform. https://www.barchart.com
013 Cachet Open-source service-status page system. https://cachethq.io
014 Alison Large online learning and certification platform. https://alison.com
015 iHerb Global health and wellness e-commerce platform. https://www.iherb.com
016 Vogue Archive Subscription fashion archive and content platform. https://archive.vogue.com
017 Student Doctor Network Education community and professional tools platform. https://studentdoctor.net
018 Vanity Fair Archive Subscriber archive and editorial content platform. https://archive.vanityfair.com
019 Variety Entertainment media and publishing platform. https://variety.com
020 Startups.com Founder education, mentoring and startup resources. https://startups.com
`;

const lines = rawText.split('\n').filter(l => l.trim().match(/^\d{3}/));

const laravelProjects = [];

for (const line of lines) {
    const match = line.match(/^\d{3}\s+([\w\s]+?)\s+(.*?)\s+(https?:\/\/\S+?)\/?$/);
    if (match) {
        let title = match[1].trim();
        let desc = match[2].trim();
        let url = match[3].trim();

        // Custom names based on provided info
        if (title.toLowerCase().includes('invoice ninja')) title = 'Invoice Ninja';
        if (title.toLowerCase().includes('cachet')) title = 'Cachet';
        if (title.toLowerCase().includes('world walking')) title = 'World Walking';
        if (title.toLowerCase().includes('startups com')) title = 'Startups.com';
        if (title.toLowerCase().includes('vogue archive')) title = 'Vogue Archive';

        let cat = 'Portal';
        const d = desc.toLowerCase();
        if (d.includes('commerce') || d.includes('payment') || d.includes('marketplace') || d.includes('invoicing')) {
            cat = 'Ecommerce';
        } else if (d.includes('education') || d.includes('learning')) {
            cat = 'Education';
        } else if (d.includes('news') || d.includes('magazine') || d.includes('media') || d.includes('archive')) {
            cat = 'Media';
        } else if (d.includes('business') || d.includes('tools')) {
            cat = 'Business';
        }

        laravelProjects.push({
            title,
            url,
            cat,
            tech: 'Laravel, MySQL',
            metaDesc: desc
        });
    }
}

const dataFile = 'filtered_projects.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

data.laravelProjects = laravelProjects;
fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

console.log('Replaced laravel projects with ' + laravelProjects.length + ' new projects.');
