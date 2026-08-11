const fs = require('fs');

const fixBtn = (path) => {
    let c = fs.readFileSync(path, 'utf8');
    c = c.replace(/class="btn btn-success btn-lg px-5"/g, 'class="btn btn-success"');
    fs.writeFileSync(path, c, 'utf8');
};

fixBtn('index.html');
fixBtn('about.html');
