const fs = require('fs');
const path = require('path');

const indexFile = path.join('e:', 'New Projects', 'shankha-subhra.github.io', 'index.html');
const aboutFile = path.join('e:', 'New Projects', 'shankha-subhra.github.io', 'about.html');

const indexContent = fs.readFileSync(indexFile, 'utf8');
const aboutContent = fs.readFileSync(aboutFile, 'utf8');

const startJourney = aboutContent.indexOf('<!-- CAREER STORY -->');
const endJourney = aboutContent.indexOf('<!-- CTA -->');
const journeySection = aboutContent.substring(startJourney, endJourney);

const insertIndex = indexContent.indexOf('<!-- Featured Projects -->');

if (insertIndex !== -1 && startJourney !== -1) {
    const newContent = indexContent.substring(0, insertIndex) + journeySection + indexContent.substring(insertIndex);
    fs.writeFileSync(indexFile, newContent, 'utf8');
    console.log('Successfully copied MY JOURNEY to index.html');
} else {
    console.log('Error finding insertion point or source section.');
}
