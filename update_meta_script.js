const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const newTitle = '<title>Senior Fullstack Developer</title>';
const newDesc = '<meta name="description" content="Senior Shopify Developer with 10+ years of experience in Shopify Plus, Remix, React.js, Node.js, custom and public apps, headless commerce, and Hydrogen. Skilled in checkout customization, CRO, speed optimization, APIs, and integrations. Also experienced with Laravel, WordPress, BigCommerce, Squarespace and Wix.">';

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace <title>
  content = content.replace(/<title>.*?<\/title>/g, newTitle);
  
  // Replace <meta name="description" ...>
  content = content.replace(/<meta name="description" content="[^"]*">/g, newDesc);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
