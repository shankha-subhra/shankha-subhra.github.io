const fs = require('fs');

async function fetchMeta(url) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' },
      signal: AbortSignal.timeout(8000)
    });
    if (!res.ok) return { metaTitle: '', metaDesc: '' };
    
    const html = await res.text();
    
    // Extract Title
    let metaTitle = '';
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch && titleMatch[1]) {
      metaTitle = titleMatch[1].trim().replace(/\s+/g, ' ');
    }

    // Extract Description (handling both name="description" and property="og:description")
    let metaDesc = '';
    const descMatch = html.match(/<meta[^>]+(?:name|property)=["'](?:description|og:description)["'][^>]+content=["']([^"']+)["']/i) || 
                      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+(?:name|property)=["'](?:description|og:description)["']/i);
                      
    if (descMatch && descMatch[1]) {
      metaDesc = descMatch[1].trim().replace(/\s+/g, ' ');
    }
    
    return { metaTitle, metaDesc };
  } catch (err) {
    console.error(`Failed for ${url}: ${err.message}`);
    return { metaTitle: '', metaDesc: '' };
  }
}

async function run() {
  const data = JSON.parse(fs.readFileSync('filtered_projects.json', 'utf8'));
  
  for (const category of ['shopifyProjects', 'wpProjects', 'laravelProjects']) {
    for (let i = 0; i < data[category].length; i++) {
      const p = data[category][i];
      if (p.metaTitle !== undefined && p.metaDesc !== undefined) continue; // skip if already fetched
      
      console.log(`Fetching meta for: ${p.url}`);
      const meta = await fetchMeta(p.url);
      p.metaTitle = meta.metaTitle || p.title;
      p.metaDesc = meta.metaDesc || `No description available for ${p.title}.`;
      console.log(` -> Title: ${p.metaTitle.substring(0, 50)}...`);
      
      // Save periodically to not lose progress
      fs.writeFileSync('filtered_projects.json', JSON.stringify(data, null, 2));
    }
  }
  console.log("Done fetching metadata!");
}

run();
