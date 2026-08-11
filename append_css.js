const fs = require('fs');
const css = `\n\n.about-hero a.btn.btn-outline-dark {
    font-family: 'Jost', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    padding: 12px 35px;
    border-radius: 0;
    letter-spacing: 1px;
    transition: all 0.3s;
}\n`;

fs.appendFileSync('e:/New Projects/shankha-subhra.github.io/assets/css/style.css', css);
