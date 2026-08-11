const fs = require('fs');
const path = require('path');

const dir = path.join('e:', 'New Projects', 'shankha-subhra.github.io');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');

const indexContent = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

const footerStart = indexContent.indexOf('<footer>');
const footerEnd = indexContent.indexOf('</footer>') + '</footer>'.length;

if (footerStart === -1 || footerEnd === -1) {
    console.error('Could not find footer in index.html');
    process.exit(1);
}

const newFooter = indexContent.substring(footerStart, footerEnd);

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    const start = content.indexOf('<footer>');
    const end = content.indexOf('</footer>') + '</footer>'.length;
    
    if (start !== -1 && end !== -1) {
        const newContent = content.substring(0, start) + newFooter + content.substring(end);
        fs.writeFileSync(filePath, newContent, 'utf8');
        updatedCount++;
        console.log(`Updated footer in ${file}`);
    } else {
        console.log(`Could not find footer in ${file}`);
    }
});

console.log(`Successfully updated footers in ${updatedCount} files.`);
