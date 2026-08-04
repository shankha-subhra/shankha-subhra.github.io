const fs = require('fs');
const shopifyProjects = [
  { title: "Bellydog", url: "https://bellydog.com", cat: "Ecommerce", tech: "Shopify 2.0" },
  { title: "Repell Shield", url: "https://repellshield.com", cat: "Ecommerce", tech: "Shopify 2.0, Liquid" },
  { title: "Nuedes Stuedios", url: "https://www.nuedesstuedios.de", cat: "Theme", tech: "Shopify 2.0, Animations" },
  { title: "Girl Happens Beauty", url: "https://girlhappens.beauty", cat: "Beauty", tech: "Custom Theme, Apps" },
  { title: "Acta Fight Gear", url: "https://actafightgear.com/", cat: "Ecommerce", tech: "Shopify API, JS, CSS" },
  { title: "Kids Land USA", url: "https://www.kidslandusa.com/", cat: "Ecommerce", tech: "Shopify 2.0, REST API" },
  { title: "Zoot Sports", url: "https://zootsports.com/", cat: "Apparel", tech: "Shopify 2.0, JS" },
  { title: "Boohgle USA", url: "https://boohgleusa.com/", cat: "Custom App", tech: "Shopify, PHP, MySQL" },
  { title: "Mad Hippie", url: "https://madhippie.com/", cat: "Subscription", tech: "Loop Subscriptions, Liquid" },
  { title: "KanCan USA", url: "https://www.kancanusa.com/", cat: "Inventory", tech: "Shopify API, PHP" },
  { title: "Nantucket Looms", url: "https://www.nantucketlooms.com/", cat: "Ecommerce", tech: "Liquid, JS, SC Options" },
  { title: "Vital Sleep", url: "https://www.vitalsleep.com/", cat: "Health", tech: "Custom Theme, JS" },
  { title: "Carnation Inc", url: "https://carnation-inc.com/", cat: "Ecommerce", tech: "Liquid, CSS, Warranty" },
  { title: "Lotus Foods", url: "https://www.lotusfoods.com/", cat: "Food", tech: "REST API, Custom Liquid" },
  { title: "Nutiva", url: "https://www.nutiva.com/", cat: "Food", tech: "Metafields, PHP" },
  { title: "James River Laser", url: "https://jamesriverlaser.com", cat: "Ecommerce", tech: "Boost AI Search, Filter" },
  { title: "Glamourental", url: "https://glamourental.com/", cat: "Rental", tech: "Shopify API, Rental App" },
  { title: "ITIP Handles", url: "https://itiphandles.com/", cat: "Ecommerce", tech: "Liquid, JS, CSS" },
  { title: "Salai Shop", url: "https://salaishop.com/", cat: "Ecommerce", tech: "JS Image Magnifier" },
  { title: "Altamont Apparel", url: "https://altamontapparel.com/", cat: "Apparel", tech: "Shopify, Liquid" },
  { title: "BL Lashes", url: "https://www.bllashes.com/", cat: "Beauty", tech: "Shopify, Custom Theme" }
];

const wpProjects = [
  { title: "KLS Services", url: "http://klsservices.com.au/", cat: "Booking", tech: "WordPress, ACF, JS" },
  { title: "Fire Safe Chimney", url: "http://firesafechimneyservices.com/", cat: "Business", tech: "WordPress, Custom Theme" },
  { title: "ILM Weekly", url: "https://ilmweekly.com/", cat: "Blog", tech: "WordPress, ACF" },
  { title: "4 Nations", url: "http://www.4nations.com.au/", cat: "Business", tech: "WordPress, PHP" },
  { title: "The Wisdom Academy", url: "https://www.thewisdomacademy.in/", cat: "Ecommerce", tech: "WooCommerce, Plugin" },
  { title: "Leadigo", url: "https://www.leadigo.com/", cat: "Business", tech: "WordPress, CPT" },
  { title: "Ravinia Plumbing", url: "http://raviniaplumbing.com/", cat: "Services", tech: "WordPress, Custom Theme" },
  { title: "Precision Work Inc", url: "http://precisionworkinc.com/", cat: "Business", tech: "WordPress, Filters" },
  { title: "Restore Masonry", url: "http://restoremasonry.com/", cat: "Services", tech: "WordPress, ACF" },
  { title: "Tyler Lane Inc", url: "http://tylerlaneinc.com/", cat: "Business", tech: "WordPress, Custom Theme" },
  { title: "Curiously You", url: "http://www.curiouslyyou.com/", cat: "Business", tech: "WordPress, JS, CSS" },
  { title: "EduJobs Canada", url: "http://edujobscanada.com/", cat: "Portal", tech: "MemberPress, Stripe" },
  { title: "Tasha Jean", url: "http://tasha-jean.com/", cat: "Portfolio", tech: "WordPress, ACF" },
  { title: "Hotel Digonera", url: "http://www.hoteldigonera.com/en/", cat: "Hotel", tech: "Translator Plugin, ACF" },
  { title: "Consultants SI", url: "http://consultantssi.com/", cat: "Business", tech: "WordPress, Translation" },
  { title: "Flexi", url: "http://flexi.co.in/", cat: "Business", tech: "WordPress, Custom Theme" },
  { title: "IT People Network", url: "http://itpeoplenetwork.com/", cat: "Network", tech: "WordPress, ACF" },
  { title: "Punjab Sweets Online", url: "http://punjabsweetsonline.com/", cat: "Ecommerce", tech: "ToastTab, WordPress" },
  { title: "Splash Car Wash", url: "https://www.splashcarwash.com.au/", cat: "Services", tech: "WordPress, Custom Theme" },
  { title: "Caster Concepts", url: "https://www.casterconcepts.com/", cat: "Business", tech: "WordPress, PHP" },
  { title: "FlipNerd", url: "https://flipnerd.com/", cat: "Real Estate", tech: "WordPress, Custom Theme" },
  { title: "Green As It Gets", url: "https://www.greenasitgets.com/", cat: "Business", tech: "WordPress, ACF" },
  { title: "Toby Weston", url: "http://tobyweston.net/", cat: "Portfolio", tech: "WordPress, Custom Theme" }
];

const laravelProjects = [
  { title: "Laali Co", url: "https://laali.co/", cat: "Search", tech: "Laravel, Algolia, MySQL" },
  { title: "Abbax EU", url: "https://abbax.eu/", cat: "Payment", tech: "Laravel, Stripe, PayPal" },
  { title: "Pets Spokesman", url: "https://pets.spokesman.com/", cat: "Payment", tech: "Laravel, Stripe" },
  { title: "Sport Clips Jobs", url: "https://jobs.sportclips.com/", cat: "Portal", tech: "Laravel, MySQL" }
];

async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'GET', signal: AbortSignal.timeout(5000) });
    return res.ok;
  } catch (err) {
    return false;
  }
}

async function run() {
  const s_ok = [];
  const w_ok = [];
  const l_ok = [];
  
  for(const p of shopifyProjects) { if(await checkUrl(p.url)) s_ok.push(p); else console.log("[DEAD] " + p.url); }
  for(const p of wpProjects) { if(await checkUrl(p.url)) w_ok.push(p); else console.log("[DEAD] " + p.url); }
  for(const p of laravelProjects) { if(await checkUrl(p.url)) l_ok.push(p); else console.log("[DEAD] " + p.url); }

  fs.writeFileSync('filtered_projects.json', JSON.stringify({ shopifyProjects: s_ok, wpProjects: w_ok, laravelProjects: l_ok }, null, 2));
  console.log("Filtered list written to filtered_projects.json");
}

run();
