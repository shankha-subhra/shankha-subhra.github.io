const fs = require('fs');

let c = fs.readFileSync('e:/New Projects/shankha-subhra.github.io/assets/css/style.css', 'utf8');

c = c.replace('.btn {\n  font-size: 16px !important;\n  border-radius: 50px !important;\n  animation: btnFadeIn', 
`.btn {
  font-size: 16px !important;
  border-radius: 50px !important;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 35px;
  letter-spacing: 1px;
  animation: btnFadeIn`);

fs.writeFileSync('e:/New Projects/shankha-subhra.github.io/assets/css/style.css', c, 'utf8');
