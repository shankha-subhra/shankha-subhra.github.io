const fs = require('fs');
const path = require('path');

const ctaBlock = `
        <!-- CTA -->
        <section class="py-5 mb-4">
            <div class="container reveal active">

                <div class="cta-box text-center rounded-4 p-5">

                    <span class="text-success fw-semibold">
                        HAVE A PROJECT IN MIND?
                    </span>

                    <h2 class="fw-bold mt-2 mb-3">
                        Let's Build Something Powerful Together.
                    </h2>

                    <p class="text-muted mb-4 mx-auto" style="max-width: 600px;">
                        Shopify development, custom apps, Laravel applications,
                        API integrations or complex eCommerce challenges —
                        I'm ready to help turn your requirements into working solutions.
                    </p>

                    <a href="mailto:shankha4030@gmail.com" class="btn btn-primary">
                        Start a Conversation
                    </a>

                </div>

            </div>
        </section>
`;

const files = [
    'all-projects.html',
    'laravel-projects.html',
    'shopify-projects.html',
    'wordpress-projects.html'
];

files.forEach(file => {
    const filePath = path.join('e:', 'New Projects', 'shankha-subhra.github.io', file);
    if (!fs.existsSync(filePath)) {
        console.log("File not found: " + file);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it already has the CTA
    if (content.includes("HAVE A PROJECT IN MIND?")) {
        console.log("CTA already exists in " + file + ", skipping.");
        return;
    }
    
    const mainEnd = content.indexOf('</main>');
    if (mainEnd !== -1) {
        content = content.substring(0, mainEnd) + ctaBlock + content.substring(mainEnd);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Added CTA to " + file);
    } else {
        console.log("Could not find </main> in " + file);
    }
});
