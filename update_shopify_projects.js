const fs = require('fs');

const rawText = `
001 Thrivemeals Subscriptions, checkout extension, cart rules and Laravel APIs. https://thrivemeals.com.au/
002 Bellydog Figma-to-Shopify 2.0 theme, responsive sections and optimization. https://bellydog.com
003 RepellShield Custom product pages, dynamic sections and responsive Liquid build. https://repellshield.com
004 Girl Happens Beauty Beauty storefront, custom layouts and third-party integrations. https://girlhappens.beauty
005 Acta Fight Gear 600+ product/variant API migration and custom theme implementation. https://actafightgear.com/
006 Kidsland USA 1,000+ products; advanced brand, PDP, collection and menu experiences. https://www.kidslandusa.com/
007 Zoot Sports Shopify 2.0 implementation using Liquid, JavaScript and CSS. https://zootsports.com/
008 Boohgle USA PHP registration/replacement app, webhooks and 200+ product import. https://boohgleusa.com/
009 Mad Hippie Loop Subscriptions, 100+ product import and 20+ templates. https://madhippie.com/
010 Kancan USA 1,000+ product import and custom PHP stock-management app. https://www.kancanusa.com/
011 Nantucket Looms Custom Liquid storefront and product-options purchasing workflow. https://www.nantucketlooms.com/
012 VitalSleep Custom storefront with 20+ product and collection templates. https://www.vitalsleep.com/
013 Carnation Interactive additional-warranty variant experience. https://carnation-inc.com/
014 Lotus Foods Recipe metafields, custom navigation and 250+ blog migration. https://www.lotusfoods.com/
015 Nutiva Metafield implementation and 250+ blog migration via REST API. https://www.nutiva.com/
016 James River Laser 500+ product import and Boost AI Search & Filter. https://jamesriverlaser.com
017 Glamourental 500+ product import, custom filters and rental integration. https://glamourental.com/
018 iTip Handles Custom storefront using Liquid, JavaScript and CSS. https://itiphandles.com/
019 Salai Shop Custom theme and JavaScript image-magnification experience. https://salaishop.com/
020 EFF Bomb Custom Shopify theme front-end implementation. https://eff-bomb.com/
021 Altamont Apparel Shopify theme development and storefront customization. https://altamontapparel.com/
022 BL Lashes Custom Shopify theme with Liquid, JavaScript and CSS. https://www.bllashes.com/
023 Allbirds Fashion storefront with useful ideas for merchandising, navigation and conversion. https://www.allbirds.com
024 Gymshark Fitness apparel storefront with useful ideas for merchandising, navigation and conversion. https://www.gymshark.com
025 Kylie Cosmetics Beauty storefront with useful ideas for merchandising, navigation and conversion. https://kyliecosmetics.com
026 Fashion Nova Fashion storefront with useful ideas for merchandising, navigation and conversion. https://www.fashionnova.com
027 Taylor Stitch Menswear storefront with useful ideas for merchandising, navigation and conversion. https://www.taylorstitch.com
028 MVMT Accessories storefront with useful ideas for merchandising, navigation and conversion. https://www.mvmt.com
029 Pura Vida Bracelets Jewelry storefront with useful ideas for merchandising, navigation and conversion. https://www.puravidabracelets.com
030 WP Standard Leather goods storefront with useful ideas for merchandising, navigation and conversion. https://wpstandard.com
031 Jeffree Star Cosmetics Beauty storefront with useful ideas for merchandising, navigation and conversion. https://jeffreestarcosmetics.com
032 Soko Glam Skincare storefront with useful ideas for merchandising, navigation and conversion. https://sokoglam.com
033 Herman Miller Furniture storefront with useful ideas for merchandising, navigation and conversion. https://store.hermanmiller.com
034 Peloton Fitness technology storefront with useful ideas for merchandising, navigation and conversion. https://www.onepeloton.com
035 Waterdrop Beverages storefront with useful ideas for merchandising, navigation and conversion. https://www.waterdrop.com
036 Steve Madden Footwear storefront with useful ideas for merchandising, navigation and conversion. https://www.stevemadden.com
037 Arhaus Home and furniture storefront with useful ideas for merchandising, navigation and conversion. https://www.arhaus.com
038 Stanley 1913 Drinkware storefront with useful ideas for merchandising, navigation and conversion. https://www.stanley1913.com
039 Carhartt Workwear storefront with useful ideas for merchandising, navigation and conversion. https://www.carhartt.com
040 Turtle Beach Electronics storefront with useful ideas for merchandising, navigation and conversion. https://www.turtlebeach.com
041 Shoe Palace Footwear storefront with useful ideas for merchandising, navigation and conversion. https://www.shoepalace.com
042 Fear of God Fashion storefront with useful ideas for merchandising, navigation and conversion. https://fearofgod.com
043 Brooklinen Home goods storefront with useful ideas for merchandising, navigation and conversion. https://www.brooklinen.com
044 Alo Yoga Activewear storefront with useful ideas for merchandising, navigation and conversion. https://www.aloyoga.com
045 Hello Molly Fashion storefront with useful ideas for merchandising, navigation and conversion. https://www.hellomolly.com
046 Sol de Janeiro Beauty storefront with useful ideas for merchandising, navigation and conversion. https://soldejaneiro.com
047 Prime Hydration Beverages storefront with useful ideas for merchandising, navigation and conversion. https://drinkprime.com
048 UNTUCKit Menswear storefront with useful ideas for merchandising, navigation and conversion. https://www.untuckit.com
049 Ruggable Home decor storefront with useful ideas for merchandising, navigation and conversion. https://ruggable.com
050 Aviator Nation Fashion storefront with useful ideas for merchandising, navigation and conversion. https://www.aviatornation.com
051 American Girl Toys storefront with useful ideas for merchandising, navigation and conversion. https://www.americangirl.com
052 Ridge Accessories storefront with useful ideas for merchandising, navigation and conversion. https://ridge.com
053 Cirkul Drinkware storefront with useful ideas for merchandising, navigation and conversion. https://drinkcirkul.com
054 Orthofeet Footwear storefront with useful ideas for merchandising, navigation and conversion. https://www.orthofeet.com
055 Bodybuilding.com Fitness storefront with useful ideas for merchandising, navigation and conversion. https://www.bodybuilding.com
056 Billabong Surf apparel storefront with useful ideas for merchandising, navigation and conversion. https://www.billabong.com
057 BevMo Beverages storefront with useful ideas for merchandising, navigation and conversion. https://www.bevmo.com
058 De La Calle Beverages storefront with useful ideas for merchandising, navigation and conversion. https://www.delacalle.mx
059 Bite Personal care storefront with useful ideas for merchandising, navigation and conversion. https://bitetoothpastebits.com
060 Magic Spoon Food storefront with useful ideas for merchandising, navigation and conversion. https://magicspoon.com
061 Great Jones Cookware storefront with useful ideas for merchandising, navigation and conversion. https://greatjonesgoods.com
062 Weston Table Home goods storefront with useful ideas for merchandising, navigation and conversion. https://westontable.com
063 Heyday Canning Co. Food storefront with useful ideas for merchandising, navigation and conversion. https://heydaycanning.com
064 Ghia Beverages storefront with useful ideas for merchandising, navigation and conversion. https://drinkghia.com
065 FreshCap Wellness storefront with useful ideas for merchandising, navigation and conversion. https://freshcap.com
066 Justin Reed Fashion marketplace storefront with useful ideas for merchandising, navigation and conversion. https://justinreed.com
067 Quite Nice Lifestyle storefront with useful ideas for merchandising, navigation and conversion. https://quite-nice.com
068 207ouest Fashion storefront with useful ideas for merchandising, navigation and conversion. https://207ouest.com
069 Graza Food storefront with useful ideas for merchandising, navigation and conversion. https://www.graza.co
070 OUAI Beauty storefront with useful ideas for merchandising, navigation and conversion. https://theouai.com
071 Perfect White Tee Fashion storefront with useful ideas for merchandising, navigation and conversion. https://perfectwhitetee.com
072 Shock Surplus Automotive storefront with useful ideas for merchandising, navigation and conversion. https://www.shocksurplus.com
073 Anyday Cookware storefront with useful ideas for merchandising, navigation and conversion. https://cookanyday.com
074 Rocco Appliances storefront with useful ideas for merchandising, navigation and conversion. https://roccofridge.com
075 TUSHY Home and wellness storefront with useful ideas for merchandising, navigation and conversion. https://hellotushy.com
076 Velasca Footwear storefront with useful ideas for merchandising, navigation and conversion. https://www.velasca.com
077 Petal & Pup Fashion storefront with useful ideas for merchandising, navigation and conversion. https://petalandpup.com
078 Beard & Blade Grooming storefront with useful ideas for merchandising, navigation and conversion. https://www.beardandblade.com.au
079 Swell No More Wellness storefront with useful ideas for merchandising, navigation and conversion. https://swellnomore.com
080 Diaboli Kill Jewelry storefront with useful ideas for merchandising, navigation and conversion. https://www.diabolikill.com
081 Knack Gifts storefront with useful ideas for merchandising, navigation and conversion. https://knackshops.com
082 Anecdote Candles Home fragrance storefront with useful ideas for merchandising, navigation and conversion. https://anecdotecandles.com
083 Otobrush Personal care storefront with useful ideas for merchandising, navigation and conversion. https://www.otobrush.com
084 Helen's Jewels Jewelry storefront with useful ideas for merchandising, navigation and conversion. https://www.helensjewels.com
085 Harry's Grooming storefront with useful ideas for merchandising, navigation and conversion. https://www.harrys.com
086 Keyboardio Electronics storefront with useful ideas for merchandising, navigation and conversion. https://shop.keyboard.io
087 Wiralcam Camera equipment storefront with useful ideas for merchandising, navigation and conversion. https://www.wiralcam.com
088 The Oodie Apparel storefront with useful ideas for merchandising, navigation and conversion. https://theoodie.com
089 Cove USA Apparel storefront with useful ideas for merchandising, navigation and conversion. https://www.coveusa.co
090 Prashanti Sarees Fashion storefront with useful ideas for merchandising, navigation and conversion. https://www.prashantisarees.in
091 Indigo Luna Activewear storefront with useful ideas for merchandising, navigation and conversion. https://indigoluna.store
092 Carbon38 Activewear storefront with useful ideas for merchandising, navigation and conversion. https://carbon38.com
093 Ally Fashion Fashion storefront with useful ideas for merchandising, navigation and conversion. https://allyfashion.com
094 Birds of Condor Golf apparel storefront with useful ideas for merchandising, navigation and conversion. https://birdsofcondor.com
095 Pactimo Cycling apparel storefront with useful ideas for merchandising, navigation and conversion. https://www.pactimo.com
096 KITH Fashion storefront with useful ideas for merchandising, navigation and conversion. https://kith.com
097 SKIMS Fashion storefront with useful ideas for merchandising, navigation and conversion. https://skims.com
098 Bombas Apparel storefront with useful ideas for merchandising, navigation and conversion. https://bombas.com
099 ColourPop Beauty storefront with useful ideas for merchandising, navigation and conversion. https://colourpop.com
100 Glossier Beauty storefront with useful ideas for merchandising, navigation and conversion. https://www.glossier.com
`;

const lines = rawText.split('\n').filter(l => l.trim().match(/^\d{3}/));

const shopifyProjects = [];

for (const line of lines) {
    const match = line.match(/^\d{3}\s+([\w\s&'\.]+?)\s+(.*?)\s+(https?:\/\/\S+?)\/?$/);
    if (match) {
        let title = match[1].trim();
        let desc = match[2].trim();
        let url = match[3].trim();
        
        // Clean up title in case some description words slipped in
        if (title.toLowerCase().includes('girl happens')) title = 'Girl Happens Beauty';
        if (title.toLowerCase().includes('acta fight gear')) title = 'Acta Fight Gear';
        if (title.toLowerCase().includes('kidsland usa')) title = 'Kidsland USA';
        if (title.toLowerCase().includes('mad hippie')) title = 'Mad Hippie';
        if (title.toLowerCase().includes('kancan usa')) title = 'Kancan USA';
        if (title.toLowerCase().includes('james river')) title = 'James River Laser';
        if (title.toLowerCase().includes('eff bomb')) title = 'EFF Bomb';
        if (title.toLowerCase().includes('taylor stitch')) title = 'Taylor Stitch';
        if (title.toLowerCase().includes('pura vida')) title = 'Pura Vida Bracelets';
        if (title.toLowerCase().includes('jeffree star')) title = 'Jeffree Star Cosmetics';
        if (title.toLowerCase().includes('soko glam')) title = 'Soko Glam';
        if (title.toLowerCase().includes('herman miller')) title = 'Herman Miller';
        if (title.toLowerCase().includes('steve madden')) title = 'Steve Madden';
        if (title.toLowerCase().includes('shoe palace')) title = 'Shoe Palace';
        if (title.toLowerCase().includes('fear of god')) title = 'Fear of God';
        if (title.toLowerCase().includes('sol de janeiro')) title = 'Sol de Janeiro';
        if (title.toLowerCase().includes('prime hydration')) title = 'Prime Hydration';
        if (title.toLowerCase().includes('american girl')) title = 'American Girl';
        if (title.toLowerCase().includes('magic spoon')) title = 'Magic Spoon';
        if (title.toLowerCase().includes('great jones')) title = 'Great Jones';
        if (title.toLowerCase().includes('weston table')) title = 'Weston Table';
        if (title.toLowerCase().includes('heyday canning')) title = 'Heyday Canning Co.';
        if (title.toLowerCase().includes('justin reed')) title = 'Justin Reed';
        if (title.toLowerCase().includes('perfect white')) title = 'Perfect White Tee';
        if (title.toLowerCase().includes('shock surplus')) title = 'Shock Surplus';
        if (title.toLowerCase().includes('petal & pup')) title = 'Petal & Pup';
        if (title.toLowerCase().includes('beard & blade')) title = 'Beard & Blade';
        if (title.toLowerCase().includes('swell no more')) title = 'Swell No More';
        if (title.toLowerCase().includes('diaboli kill')) title = 'Diaboli Kill';
        if (title.toLowerCase().includes('anecdote candles')) title = 'Anecdote Candles';
        if (title.toLowerCase().includes('wiralcam')) title = 'Wiralcam';
        if (title.toLowerCase().includes('the oodie')) title = 'The Oodie';
        if (title.toLowerCase().includes('cove usa')) title = 'Cove USA';
        if (title.toLowerCase().includes('prashanti sarees')) title = 'Prashanti Sarees';
        if (title.toLowerCase().includes('indigo luna')) title = 'Indigo Luna';
        if (title.toLowerCase().includes('ally fashion')) title = 'Ally Fashion';
        if (title.toLowerCase().includes('birds of condor')) title = 'Birds of Condor';

        let cat = 'Ecommerce';
        const d = desc.toLowerCase();
        if (d.includes('fashion') || d.includes('apparel') || d.includes('menswear') || d.includes('clothing') || d.includes('activewear')) {
            cat = 'Fashion';
        } else if (d.includes('beauty') || d.includes('skincare') || d.includes('cosmetics') || d.includes('grooming') || d.includes('personal care')) {
            cat = 'Beauty';
        } else if (d.includes('food') || d.includes('beverage') || d.includes('drink')) {
            cat = 'Food & Beverage';
        } else if (d.includes('furniture') || d.includes('home') || d.includes('decor')) {
            cat = 'Home & Decor';
        } else if (d.includes('fitness') || d.includes('wellness') || d.includes('health')) {
            cat = 'Health & Fitness';
        } else if (d.includes('jewelry') || d.includes('accessories')) {
            cat = 'Accessories';
        } else if (d.includes('electronic') || d.includes('appliance') || d.includes('equipment')) {
            cat = 'Electronics';
        }

        shopifyProjects.push({
            title,
            url,
            cat,
            tech: 'Shopify, Liquid, JavaScript',
            metaDesc: desc
        });
    }
}

const dataFile = 'filtered_projects.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

data.shopifyProjects = shopifyProjects;
fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

console.log('Replaced shopify projects with ' + shopifyProjects.length + ' new projects.');
