const fs = require('fs');

const rawText = `1	TechCrunch	https://techcrunch.com/	Technology news covering startups, venture capital, apps, and innovation.
2	Variety	https://variety.com/	Entertainment industry news covering film, television, music, and media.
3	TIME	https://time.com/	Global news and magazine website covering politics, business, culture, and science.
4	Rolling Stone	https://www.rollingstone.com/	Music, entertainment, politics, and popular culture publication.
5	New York Post	https://nypost.com/	News website covering breaking news, sports, entertainment, and lifestyle.
6	Vox	https://www.vox.com/	Explanatory journalism covering news, politics, culture, and technology.
7	The Intercept	https://theintercept.com/	Investigative journalism and analysis on politics, security, and world affairs.
8	Grist	https://grist.org/	Climate, environmental justice, sustainability, and energy publication.
9	Physics World	https://physicsworld.com/	Physics research, industry news, education, and scientific analysis.
10	TVLine	https://tvline.com/	Television news, reviews, interviews, spoilers, and entertainment updates.
11	The Dieline	https://thedieline.com/	Packaging, branding, product design, and creative-industry publication.
12	PRINT Magazine	https://www.printmag.com/	Graphic design, typography, illustration, branding, and visual-culture magazine.
13	Freethink	https://www.freethink.com/	Innovation, science, technology, and future-focused storytelling platform.
14	PlayStation Blog	https://blog.playstation.com/	Gaming news, releases, developer interviews, and PlayStation updates.
15	Mozilla Blog	https://blog.mozilla.org/	Firefox, privacy, open-source technology, and internet-policy publication.
16	Slack Blog	https://slack.com/blog	Workplace collaboration, productivity, customer stories, and product updates.
17	Salesforce Blog	https://www.salesforce.com/blog/	CRM, AI, marketing, sales, service, and business-technology content.
18	Kinsta Blog	https://kinsta.com/blog/	WordPress, hosting, web development, performance, and marketing tutorials.
19	WP Engine	https://wpengine.com/	Managed WordPress hosting, enterprise solutions, and developer resources.
20	10up	https://10up.com/	Digital agency specializing in enterprise publishing and WordPress solutions.
21	Human Made	https://humanmade.com/	Enterprise WordPress agency offering engineering, strategy, and digital products.
22	Automattic	https://automattic.com/	Technology company behind WordPress.com, WooCommerce, Jetpack, and other products.
23	Taylor Swift	https://www.taylorswift.com/	Official artist website featuring music, tour details, news, and merchandise.
24	Usain Bolt	https://usainbolt.com/	Athlete website featuring career highlights, partnerships, and foundation projects.
25	Rafael Nadal	https://rafaelnadal.com/	Professional athlete website featuring news, career details, and academy information.
26	James Bond 007	https://www.007.com/	Official franchise website featuring films, news, products, and videos.
27	Michael Pollan	https://michaelpollan.com/	Author website presenting books, articles, interviews, and appearances.
28	Jason Zweig	https://jasonzweig.com/	Financial journalist website featuring articles, books, and investing resources.
29	Sudha Murty	https://sudhamurty.in/	Author and philanthropist website featuring books, speeches, and social initiatives.
30	Daybreaker	https://www.daybreaker.com/	Community and event platform offering dance experiences and wellness events.
31	Opus One Winery	https://www.opusonewinery.com/	Winery website featuring wines, history, reservations, and membership details.
32	Ubisoft Québec	https://quebec.ubisoft.com/en/	Game studio website featuring projects, careers, news, and company culture.
33	Tata Motors	https://www.tatamotors.com/	Automotive corporate website featuring vehicles, investors, and sustainability content.
34	Sony Music	https://www.sonymusic.com/	Music company website featuring artists, labels, careers, and corporate news.
35	Meta Engineering	https://engineering.fb.com/	Engineering publication covering infrastructure, AI, data, and open-source work.
36	Facebook Design	https://design.facebook.com/	Product design, research, creative processes, and design-team stories.
37	Airstream	https://www.airstream.com/	Travel trailer and touring coach website with models, shopping tools, and stories.
38	Brodo	https://www.brodo.com/	Food brand and e-commerce website selling broth, bundles, and subscriptions.
39	Taika	https://taika.co/	Beverage brand website presenting products, ingredients, and online shopping.
40	NOVOS	https://novoslabs.com/	Longevity and wellness website featuring products, research, and educational content.
41	Yumi	https://helloyumi.com/	Baby-food subscription website featuring meal plans, nutrition, and parenting resources.
42	Polly Pizza	https://pollypizza.com/	Restaurant website featuring menus, locations, reservations, and brand content.
43	The Webby Awards	https://www.webbyawards.com/	Digital awards platform featuring winners, categories, events, and industry insights.
44	Cooper Hewitt	https://www.cooperhewitt.org/	Design museum website featuring exhibitions, collections, events, and education.
45	American Film Institute	https://www.afi.com/	Film education, festivals, awards, archives, and membership information.
46	Clooney Foundation for Justice	https://cfj.org/	Justice-focused nonprofit website featuring programs, cases, and impact stories.
47	Pew Research Center	https://www.pewresearch.org/	Research reports, surveys, data visualizations, and public-opinion analysis.
48	Harvard Gazette	https://news.harvard.edu/gazette/	University news publication covering research, education, and campus life.
49	TED Blog	https://blog.ted.com/	Ideas, speakers, events, science, technology, and design stories.
50	For the Record by Spotify	https://newsroom.spotify.com/	Spotify newsroom featuring company announcements, product news, and artist stories.
51	Microsoft News	https://news.microsoft.com/	Corporate newsroom featuring technology, research, products, and company updates.
52	Meta Newsroom	https://about.fb.com/news/	Meta product announcements, company news, safety updates, and technology stories.
53	Adobe Blog	https://blog.adobe.com/	Creative technology, design, marketing, AI, and product-related content.
54	Angry Birds	https://www.angrybirds.com/	Entertainment franchise website featuring games, characters, products, and news.
55	Comedy Bang Bang World	https://www.comedybangbangworld.com/	Membership platform offering podcasts, archives, shows, and exclusive content.
56	MOREAN	https://morean.de/	Creative production agency portfolio featuring animation, media, and technology.
57	Landia	https://landia.com/	Production company portfolio featuring directors, films, and advertising work.
58	KOBU	https://kobu.co.uk/	Luxury travel platform featuring curated properties and destination content.
59	Digitalists	https://digitalists.at/	Digital agency portfolio featuring branding, strategy, and web development.
60	be-beau	https://be-beau.nl/	Creative agency website showcasing campaigns, branding, and digital experiences.
61	AD Dal Pozzo	https://shop.arredodalpozzo.it/	Interior design and e-commerce website featuring luxury furniture and home products.
62	The Wisdom Academy	https://www.thewisdomacademy.in/	Education website featuring courses, programs, learning resources, and admissions.
63	Leadigo	https://www.leadigo.com/	Business website presenting services, solutions, insights, and contact information.
64	ILM Weekly	https://ilmweekly.com/	Digital publication featuring articles, news, opinions, and community content.
65	Splash Car Wash	https://www.splashcarwash.com.au/	Car wash business website featuring services, locations, and customer information.
66	Caster Concepts	https://www.casterconcepts.com/	Industrial manufacturer website featuring caster products, engineering, and resources.
67	FlipNerd	https://flipnerd.com/	Real-estate investing platform featuring education, resources, and community content.
68	Green As It Gets	https://www.greenasitgets.com/	Sustainable business website featuring products, services, and environmental content.
69	Toby Weston	https://tobyweston.net/	Personal author and technology website featuring books, articles, and projects.
70	Curiously You	https://www.curiouslyyou.com/	Personal-development and coaching website featuring programs, articles, and resources.
71	EduJobs Canada	https://edujobscanada.com/	Education jobs website featuring vacancies, memberships, and career resources.
72	Hotel Digonera	https://www.hoteldigonera.com/en/	Hotel website featuring rooms, location information, bookings, and local experiences.
73	Flexi	https://flexi.co.in/	Business website featuring products, services, company details, and enquiries.
74	IT People Network	https://itpeoplenetwork.com/	Technology recruitment and professional-networking website.
75	Restore Masonry	https://restoremasonry.com/	Masonry restoration company website featuring services and project information.
76	Tyler Lane Construction	https://tylerlaneinc.com/	Construction company website featuring services, projects, and contact information.
77	Ravinia Plumbing	https://raviniaplumbing.com/	Plumbing and home-services website featuring repairs, maintenance, and appointments.
78	Precision Works	https://precisionworkinc.com/	Industrial services website featuring capabilities, projects, and company information.
79	KLS Services	http://klsservices.com.au/	Australian service business website featuring offerings and appointment information.
80	Firesafe Chimney Services	http://firesafechimneyservices.com/	Chimney inspection, repair, cleaning, and safety-services website.
81	Four Nations	http://www.4nations.com.au/	Australian business website featuring company services and contact information.
82	Consultants SI	http://consultantssi.com/	Consulting business website featuring services, industries, and company information.
83	Punjab Sweets Online	http://punjabsweetsonline.com/	Restaurant and food-ordering website featuring menus and online ordering.`;

const lines = rawText.trim().split('\n');
const wpProjects = [];

for (const line of lines) {
  const parts = line.split('\t');
  if (parts.length >= 4) {
    const [id, title, url, desc] = parts;
    wpProjects.push({
      title: title.trim(),
      url: url.trim(),
      cat: 'Business', // Default category
      tech: 'WordPress, Custom Theme', // Default tech
      metaDesc: desc.trim()
    });
  }
}

const dataFile = 'filtered_projects.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
data.wpProjects = wpProjects;
fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

console.log('Successfully updated wpProjects with ' + wpProjects.length + ' items.');
