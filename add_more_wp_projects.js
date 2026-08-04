const fs = require('fs');

const rawData = [
    ["Godin Guitars","https://godinguitars.com/","Guitar manufacturer store featuring electric, acoustic, and bass guitar collections."],
    ["Meblostan","https://meblostan.pl/","Furniture e-commerce website offering home furnishings and interior products."],
    ["Thompson + Hanson","https://thompsonhanson.com/","Luxury garden, home, and lifestyle store with curated products."],
    ["Aunt Fannie’s","https://auntfannies.com/","Natural household cleaning and pest-control product store."],
    ["Badeloft","https://www.badeloftusa.com/","Luxury bathroom store selling freestanding bathtubs, sinks, and fixtures."],
    ["Scrub Daddy","https://scrubdaddy.com/","Popular cleaning-product store featuring sponges, scrubbers, and accessories."],
    ["Porter & York","https://porterandyork.com/","Premium online butcher offering fresh meat and curated food products."],
    ["Offerman Woodshop","https://offermanwoodshop.com/","Handcrafted woodworking shop selling furniture, gifts, and custom pieces."],
    ["Good Dye Young","https://gooddyeyoung.com/","Hair-color and beauty e-commerce store with vibrant product collections."],
    ["Printing New York","https://www.printingnewyork.com/","Commercial printing store offering banners, cards, signage, and custom print services."],
    ["Eat Grub","https://www.eatgrub.co.uk/","Sustainable food store specializing in edible insects and protein products."],
    ["Caesar’s Ice Cream","https://heladitos.com/","Ice cream and frozen dessert website featuring products and retail information."],
    ["Orange Amps","https://orangeamps.com/","Music equipment brand selling amplifiers, cabinets, pedals, and accessories."],
    ["Magna-Tiles","https://www.magnatiles.com/","Educational toy store selling magnetic building sets for children."],
    ["Kawaii Box","https://www.kawaiibox.com/","Subscription and gift store featuring Japanese and Korean kawaii products."],
    ["Strandberg Guitars","https://strandbergguitars.com/","Modern guitar store offering headless guitars, accessories, and artist models."],
    ["FLWR","https://flwr.co.nz/","Florist and gift store offering bouquets, arrangements, and delivery services."],
    ["3 Speed Holster","https://3speedholster.com/","Concealed-carry accessory store offering custom holsters and related products."],
    ["Rotimatic","https://rotimatic.com/","Smart kitchen appliance store featuring automated flatbread-making machines."],
    ["Tom Chalky","https://tomchalky.com/","Digital design marketplace selling fonts, graphics, textures, and creative resources."],
    ["Only Mine","https://www.onlymine.com.au/","Australian chocolate store offering handcrafted products and personalized gifts."],
    ["Sodashi","https://www.sodashi.com.au/","Premium skincare store featuring natural beauty and wellness products."],
    ["AB Aeterno","https://www.abaeternowatches.com/","Watch store offering sustainable wooden and modern timepiece collections."],
    ["Emmanuelle D","https://emmanuelled.com/","Fashion and accessories store featuring designer collections and lifestyle products."],
    ["Zanetto","https://www.zanetto.com/","Italian luxury homeware and silverware store featuring artisan-made products."],
    ["NestBloom","https://www.nestbloom.com/","Wellness food store offering bird’s nest products and gift sets."],
    ["Scratch Pet Food","https://www.scratchpetfood.com.au/","Pet food subscription store offering personalized dog food delivery."],
    ["The Smokehaus","https://smokehaus.com.au/","Australian gourmet meat store specializing in smoked and cured products."],
    ["Huru Backpack","https://huru.rocks/","Travel gear store offering durable modular backpacks and accessories."],
    ["J. Hornig","https://www.jhornig.com/","Coffee store selling beans, capsules, brewing products, and subscriptions."],
    ["Open Wear","https://www.open-wear.com/","Sustainable outdoor clothing store featuring technical apparel and accessories."],
    ["Ruby Atelier","https://rubyatelier.com/","Fashion boutique offering curated clothing, accessories, and lifestyle products."],
    ["Root Science","https://www.shoprootscience.com/","Natural skincare store selling clean beauty products and facial treatments."],
    ["Protest Sportswear","https://www.protest.eu/","Sportswear and outdoor apparel store featuring surf, snow, and lifestyle collections."],
    ["JOCO Cups","https://jococups.com/","Reusable drinkware store offering glass cups, bottles, and accessories."],
    ["BetterBody Foods","https://www.betterbodyfoods.com/","Health food store offering organic pantry staples and nutrition products."],
    ["Asheville Bee Charmer","https://ashevillebeecharmer.com/","Honey and bee-product store featuring artisan flavors and gift collections."],
    ["Barefoot Buttons","https://barefootbuttons.com/","Musical accessory store offering guitar pedal toppers and custom products."],
    ["Wootten","https://wootten.com.au/","Australian leather goods store selling handcrafted footwear, bags, and accessories."],
    ["Disruptive Youth","https://www.disruptiveyouth.com/","Fashion e-commerce store featuring women’s clothing and trend-focused collections."],
    ["Landyachtz","https://landyachtz.com/","Skateboard and longboard store offering boards, completes, and accessories."],
    ["Melt Chocolates","https://meltchocolates.com/","Luxury chocolate store offering handmade chocolates, gifts, and experiences."],
    ["Derek DeYoung","https://www.derekdeyoung.com/","Art and lifestyle store featuring original fish artwork, prints, and apparel."],
    ["Go! Take Better Photos","https://gotakebetterphotos.com/","Online photography course website selling educational programs and resources."],
    ["Wild Souls","https://wildsouls.gr/","Healthy food store featuring nut butters, snacks, and organic products."],
    ["Don’t Buy Her Flowers","https://dontbuyherflowers.com/","Thoughtful gift-box store offering curated care packages for different occasions."],
    ["The Cool Hunter","https://thecoolhunter.net/","Design-led store and editorial platform featuring art, objects, and lifestyle products."],
    ["Elecbrakes","https://www.elecbrakes.com/","Automotive technology store selling wireless electric brake controllers."],
    ["Cupcake Studio","https://cupcakestudio.ro/","Bakery website offering cupcakes, cakes, desserts, and online ordering."],
    ["Essential Gourmet","https://essentialgourmet.com.au/","Gourmet food store offering premium ingredients, pantry items, and gift products."]
];

const dataFile = 'filtered_projects.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

data.wpProjects = [];

for (const [title, url, desc] of rawData) {
    let cat = "Business";
    const d = desc.toLowerCase();
    if (d.includes('store') || d.includes('e-commerce') || d.includes('selling')) {
        cat = 'Ecommerce';
    } else if (d.includes('news') || d.includes('magazine') || d.includes('publication') || d.includes('blog')) {
        cat = 'Blog';
    }
    
    data.wpProjects.push({
        title: title.trim(),
        url: url.trim(),
        cat: cat,
        tech: 'WordPress, Custom Theme',
        metaDesc: desc.trim()
    });
}

// deduplicate by URL just in case
const uniqueWpProjects = [];
const seenUrls = new Set();
for (const p of data.wpProjects) {
    if (!seenUrls.has(p.url)) {
        seenUrls.add(p.url);
        uniqueWpProjects.push(p);
    }
}
data.wpProjects = uniqueWpProjects;

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

console.log('Added ' + rawData.length + ' projects. Total wpProjects: ' + data.wpProjects.length);
