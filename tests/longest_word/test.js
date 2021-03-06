const test = require('ava');
const findLongestWord = require('../../longest_word');

test("Assignment Sample 1", t => {
    const testString = 'fun&!! time'
    t.is(findLongestWord(testString), "time")
});

test("Assignment Sample 2", t => {
    const testString = 'I love dogs'
    t.is(findLongestWord(testString), "love")
});

test("Special Characters", t => {
    const testString = 'this^%^&is%^&&a$%^&list%^&of \r  words %^$$ \nof varying ^%%%% lengths'
    t.is(findLongestWord(testString), "varying")
});

test("Medium Length", t => {
    const testString = 'Bacon ipsum dolor amet boudin picanha tri-tip, porchetta shank buffalo rump prosciutto leberkas chicken venison flank. Salami spare ribs pig meatloaf cow ham hock capicola. Capicola filet mignon swine brisket turducken short loin andouille pork chop landjaeger venison corned beef pork loin prosciutto shank pig. Jerky prosciutto biltong cow meatball burgdoggen. Prosciutto bresaola biltong tail turkey pork belly. Drumstick ham hock boudin landjaeger burgdoggen rump brisket ground round porchetta corned beef prosciutto.\n' +
        '\n' +
        'Leberkas swine beef spare ribs jerky buffalo salami turkey pastrami cupim. Turducken rump pancetta kevin spare ribs salami. Tenderloin boudin fatback pork belly. Sausage picanha meatball, frankfurter jowl fatback cupim venison landjaeger.\n' +
        '\n' +
        'Short ribs tri-tip beef ribs, doner shankle porchetta ground round. Bresaola chicken tongue pastrami cow turkey prosciutto tenderloin picanha short ribs filet mignon. Chicken ribeye ham hock salami chuck burgdoggen kielbasa biltong t-bone leberkas brisket turducken tongue. Buffalo turkey pork chop landjaeger prosciutto bresaola. Brisket alcatra swine pancetta tail turkey. Sirloin short loin burgdoggen, biltong beef ribs t-bone brisket. Alcatra pork chop pork belly biltong, ham hock fatback spare ribs sausage.\n' +
        '\n' +
        'Tri-tip ball tip jowl kevin alcatra bresaola capicola, fatback flank. Pork loin tenderloin kielbasa jowl kevin alcatra chicken. Sirloin kielbasa salami, bresaola kevin brisket leberkas meatloaf short ribs buffalo landjaeger doner boudin ribeye flank. Swine picanha landjaeger, meatball ham hock jerky bacon buffalo. Rump prosciutto andouille, buffalo jerky turkey porchetta frankfurter shoulder capicola pig tail.\n' +
        '\n' +
        'Chislic cupim chuck prosciutto corned beef beef sirloin. Flank ground round strip steak, short loin porchetta rump beef boudin meatball bacon pork chop frankfurter. Pork doner cupim meatball, chuck sirloin t-bone flank pastrami. Andouille chuck fatback pig pork loin pancetta salami venison leberkas ham shank sirloin pork chop buffalo. Frankfurter ball tip capicola, jowl cow pork chop salami strip steak kielbasa chislic short ribs chuck prosciutto landjaeger. Fatback pork belly swine short ribs, bresaola leberkas sirloin jerky shoulder cow tri-tip jowl.\n' +
        '\n' +
        'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!'

    t.is(findLongestWord(testString), "frankfurter")
});

test("Long", t => {
    const testString = 'I\'m baby enamel pin asymmetrical pabst vaporware intelligentsia organic, DIY freegan poutine normcore swag meggings microdosing hexagon. Disrupt aesthetic brooklyn paleo bitters. Narwhal jean shorts umami art party, pabst readymade before they sold out cronut lo-fi fam pork belly af hoodie swag. Keytar ugh organic truffaut celiac letterpress 90\'s hoodie adaptogen kombucha. Venmo cliche stumptown activated charcoal pok pok distillery ennui flexitarian church-key post-ironic vegan kickstarter. Synth try-hard actually tumeric kitsch venmo succulents meditation fam listicle shoreditch cliche mustache.\n' +
        '\n' +
        'Succulents lomo humblebrag squid franzen hammock. Snackwave poutine marfa kombucha, sriracha air plant intelligentsia plaid activated charcoal ethical. Paleo venmo sriracha hell of, lumbersexual raw denim disrupt ethical narwhal hoodie succulents wolf chambray squid keffiyeh. Tacos blog quinoa four dollar toast PBR&B cornhole umami tilde forage. Affogato poke mumblecore portland kickstarter selvage keytar umami occupy kitsch gochujang jean shorts fixie scenester.\n' +
        '\n' +
        'Bitters 90\'s prism brunch farm-to-table, godard 3 wolf moon mustache deep v fam before they sold out palo santo. YOLO cardigan kogi 3 wolf moon scenester roof party +1. Normcore knausgaard lyft, drinking vinegar shaman iceland butcher kale chips gastropub. Tousled cliche meh ennui shabby chic, vape pitchfork sartorial. Pinterest vexillologist selfies snackwave master cleanse cornhole wolf brunch messenger bag cray raw denim small batch selvage post-ironic franzen.\n' +
        '\n' +
        'Lomo brooklyn 8-bit freegan fixie next level DIY microdosing flexitarian listicle blog selfies knausgaard four dollar toast. Leggings iceland synth, truffaut food truck bespoke brooklyn church-key flannel poutine pug. Gastropub meditation mlkshk, chia blue bottle fingerstache bitters pabst truffaut affogato. Tbh yr literally ramps. Jianbing pour-over put a bird on it VHS shoreditch typewriter.\n' +
        '\n' +
        'Hammock affogato fanny pack ennui, shabby chic palo santo bespoke kogi food truck. Banjo organic authentic echo park forage tofu adaptogen chartreuse synth taxidermy. Food truck cloud bread poutine normcore leggings. Green juice tacos PBR&B shaman, flannel mixtape literally dreamcatcher 8-bit church-key readymade biodiesel freegan. Shoreditch bicycle rights microdosing forage tacos XOXO kickstarter biodiesel dreamcatcher woke health goth cronut. Banh mi put a bird on it offal, drinking vinegar distillery pop-up VHS ramps microdosing tattooed kombucha.\n' +
        '\n' +
        'Forage truffaut master cleanse, coloring book kickstarter disrupt meggings hot chicken chartreuse pork belly subway tile mustache next level whatever hell of. Stumptown occupy bitters, bespoke freegan raclette la croix bushwick distillery aesthetic schlitz man braid salvia. 3 wolf moon vexillologist sustainable beard, leggings mumblecore ugh authentic. Ugh af crucifix fixie hashtag microdosing viral twee ethical selfies vexillologist 90\'s adaptogen blog.\n' +
        '\n' +
        'La croix heirloom disrupt before they sold out hot chicken banjo taxidermy iPhone everyday carry crucifix. La croix biodiesel craft beer you probably haven\'t heard of them shaman glossier iceland narwhal tilde neutra yuccie. Salvia offal coloring book fingerstache hell of letterpress cray irony mlkshk austin readymade gastropub. Adaptogen live-edge vexillologist, humblebrag activated charcoal irony tumblr mixtape pickled intelligentsia pug chia viral.\n' +
        '\n' +
        'Scenester blue bottle photo booth four dollar toast tbh yuccie health goth. 8-bit post-ironic four dollar toast, migas put a bird on it farm-to-table tbh tousled pabst. Activated charcoal la croix affogato mlkshk, yuccie etsy paleo heirloom 3 wolf moon pop-up. Pok pok vegan viral ramps roof party literally, vape bespoke paleo health goth listicle tilde blog. Knausgaard iceland selvage kombucha.\n' +
        '\n' +
        'Bicycle rights aesthetic semiotics, vexillologist everyday carry edison bulb intelligentsia hot chicken quinoa chambray marfa echo park lomo chicharrones irony. Leggings direct trade fam deep v artisan post-ironic small batch helvetica. Readymade pug keffiyeh coloring book twee, actually venmo humblebrag af bicycle rights tilde. Typewriter tbh vexillologist 8-bit ugh. Chicharrones you probably haven\'t heard of them irony, freegan hella taxidermy cred ethical XOXO normcore chambray offal.\n' +
        '\n' +
        'Master cleanse schlitz activated charcoal portland wolf beard, banjo crucifix salvia af lo-fi synth chia. Coloring book umami beard mlkshk. Direct trade woke microdosing freegan dreamcatcher lomo pour-over pitchfork fashion axe celiac pinterest. Banh mi offal synth venmo DIY church-key activated charcoal. Helvetica wolf swag, hella microdosing asymmetrical iPhone try-hard gluten-free freegan. IPhone cred small batch, fixie polaroid occupy selvage sartorial.\n' +
        '\n' +
        'Drinking vinegar gentrify echo park, coloring book tote bag la croix raclette chia hexagon meh fixie. Church-key edison bulb whatever venmo art party adaptogen man bun prism. Kogi salvia beard enamel pin ugh tbh. Vape fanny pack gentrify banh mi gochujang snackwave VHS cloud bread wolf health goth. Cardigan cold-pressed letterpress VHS tattooed, DIY polaroid enamel pin forage messenger bag vice jianbing lyft scenester.\n' +
        '\n' +
        'Master cleanse migas offal trust fund, photo booth sartorial +1 cray banjo disrupt man bun. Meditation stumptown viral you probably haven\'t heard of them DIY pitchfork yr mustache chillwave before they sold out kitsch jean shorts tumeric. 8-bit flannel subway tile, lomo microdosing vaporware banjo flexitarian hexagon distillery. Intelligentsia readymade paleo, drinking vinegar photo booth celiac edison bulb leggings normcore migas yr artisan. Microdosing shoreditch vape readymade tumeric synth swag. Intelligentsia tote bag crucifix truffaut.\n' +
        '\n' +
        'Polaroid raw denim drinking vinegar bespoke four dollar toast freegan. Narwhal meh wolf shaman keffiyeh offal VHS lumbersexual. Coloring book vinyl actually cold-pressed sriracha. Kombucha affogato lyft small batch brooklyn ennui. Gentrify jean shorts skateboard, vinyl occupy typewriter hella shoreditch deep v plaid tote bag selfies. Irony activated charcoal poutine cray cold-pressed next level. Bicycle rights small batch selvage raclette kale chips affogato, keffiyeh man bun microdosing organic.\n' +
        '\n' +
        'VHS live-edge four loko fingerstache franzen polaroid selvage semiotics gastropub green juice craft beer YOLO asymmetrical tousled art party. Green juice pug gluten-free deep v knausgaard. 90\'s coloring book sartorial fashion axe. Subway tile prism health goth portland, knausgaard kinfolk bushwick kickstarter hammock distillery next level gastropub whatever photo booth.\n' +
        '\n' +
        'Pitchfork shabby chic taxidermy, meggings paleo before they sold out poke green juice occupy tattooed asymmetrical mumblecore brooklyn hashtag. Helvetica actually freegan synth keffiyeh kale chips, la croix four dollar toast kombucha roof party crucifix. Authentic vaporware copper mug, hammock gastropub synth locavore tbh crucifix thundercats. Lumbersexual four loko thundercats church-key, kale chips letterpress intelligentsia craft beer.\n' +
        '\n' +
        'Mlkshk craft beer sartorial kinfolk live-edge ugh waistcoat seitan gentrify asymmetrical lo-fi jean shorts. Before they sold out PBR&B retro, mixtape fashion axe distillery chia readymade waistcoat austin. Gentrify ugh tumeric heirloom hexagon. You probably haven\'t heard of them cloud bread chicharrones thundercats, trust fund hot chicken DIY post-ironic mumblecore. Master cleanse banjo raw denim helvetica blue bottle kale chips chillwave live-edge distillery kogi scenester gochujang pork belly. Prism mlkshk put a bird on it, kogi gluten-free +1 photo booth pok pok health goth listicle taxidermy keffiyeh vaporware la croix.\n' +
        '\n' +
        'Bicycle rights pickled kombucha craft beer raw denim semiotics snackwave put a bird on it schlitz. Distillery man bun raw denim blue bottle, bicycle rights pork belly cred shabby chic copper mug next level. Chartreuse vape farm-to-table, bitters edison bulb letterpress skateboard pork belly. Flannel kickstarter mlkshk polaroid locavore. Biodiesel kombucha vinyl mlkshk yuccie woke taiyaki single-origin coffee green juice whatever vape tote bag raw denim polaroid listicle. Poke man bun hell of 8-bit pour-over sustainable, irony cliche austin seitan whatever. Mustache chicharrones helvetica forage sustainable selvage fixie cold-pressed literally whatever lo-fi.\n' +
        '\n' +
        'Cardigan locavore la croix marfa post-ironic, cliche mumblecore gluten-free seitan raclette tousled roof party four dollar toast vaporware. Pabst cronut poke palo santo tofu. Wayfarers actually chia normcore, cliche vinyl readymade. Yuccie mumblecore banjo cred. Fam lyft blog, flannel mustache ramps twee.\n' +
        '\n' +
        'Food truck chillwave twee quinoa edison bulb, bicycle rights leggings flexitarian cloud bread affogato ugh fam echo park af. IPhone af jianbing, activated charcoal craft beer fanny pack fingerstache you probably haven\'t heard of them la croix cold-pressed sartorial. Everyday carry affogato organic, pug iPhone williamsburg blue bottle raw denim ethical occupy gastropub live-edge beard artisan. Beard scenester neutra, cronut vice kinfolk coloring book iPhone try-hard disrupt gluten-free small batch.\n' +
        '\n' +
        'Neutra celiac cornhole selfies occupy ethical hexagon. Farm-to-table ugh blue bottle kale chips thundercats schlitz ennui squid cornhole blog neutra salvia butcher art party. Biodiesel umami celiac retro mumblecore art party roof party gluten-free green juice lyft church-key salvia try-hard fashion axe. Pop-up kitsch mustache truffaut microdosing umami vegan church-key kogi tbh plaid mumblecore banjo. Kinfolk messenger bag la croix sriracha quinoa.\n' +
        '\n' +
        'Hoodie scenester banjo, chillwave tacos lumbersexual VHS XOXO taiyaki. Church-key shaman biodiesel before they sold out mustache. Prism af everyday carry gochujang. Kitsch bushwick twee keytar etsy single-origin coffee cray artisan distillery poutine drinking vinegar. Drinking vinegar lomo YOLO messenger bag pickled freegan. Roof party ennui squid williamsburg readymade. Fingerstache distillery VHS locavore put a bird on it, forage brooklyn typewriter umami ugh vaporware bicycle rights.\n' +
        '\n' +
        '+1 3 wolf moon church-key edison bulb helvetica butcher air plant yuccie kogi farm-to-table bicycle rights sartorial sriracha gastropub venmo. Subway tile ennui mixtape pop-up cold-pressed viral keffiyeh sriracha celiac cray prism farm-to-table actually bushwick ethical. Vegan kitsch mumblecore pour-over slow-carb XOXO, occupy tattooed. Succulents venmo chicharrones salvia post-ironic adaptogen gastropub green juice hot chicken tote bag gentrify waistcoat before they sold out knausgaard cloud bread.\n' +
        '\n' +
        'Cray offal succulents iceland, mlkshk you probably haven\'t heard of them vinyl chia meditation. Coloring book copper mug vaporware, narwhal readymade asymmetrical skateboard. Heirloom roof party next level green juice fingerstache humblebrag. Put a bird on it godard succulents pop-up.\n' +
        '\n' +
        'YOLO raclette snackwave raw denim, glossier jianbing beard organic forage polaroid. XOXO snackwave woke bespoke paleo kale chips actually irony biodiesel bicycle rights. Unicorn flannel waistcoat, church-key hella locavore shabby chic. Narwhal kogi normcore literally la croix taiyaki gastropub celiac waistcoat intelligentsia pabst fanny pack gochujang. Mumblecore woke sriracha, single-origin coffee chicharrones XOXO photo booth. Pok pok pop-up copper mug enamel pin PBR&B scenester prism portland forage.\n' +
        '\n' +
        '+1 intelligentsia gochujang street art vinyl jianbing small batch mumblecore disrupt art party tilde ennui keytar. Kitsch squid neutra, meh vice iceland hexagon vegan. Brunch celiac forage trust fund actually poke. Dreamcatcher enamel pin bitters, yuccie coloring book tofu squid post-ironic quinoa.\n' +
        '\n' +
        'Vice ennui cliche neutra polaroid YOLO intelligentsia taxidermy tofu shabby chic. Synth dreamcatcher art party, post-ironic trust fund neutra meggings gastropub. Helvetica migas echo park heirloom waistcoat occupy cloud bread tousled pour-over raclette sartorial. Cold-pressed normcore mumblecore taxidermy, franzen butcher semiotics. Swag messenger bag drinking vinegar, truffaut roof party tattooed chia yuccie listicle bicycle rights VHS. Four dollar toast cardigan helvetica offal skateboard, tattooed food truck franzen kitsch single-origin coffee chillwave. PBR&B blog gochujang, four loko leggings pour-over live-edge ennui.\n' +
        '\n' +
        'Gentrify celiac actually poke woke tousled air plant fam photo booth brunch. Crucifix man bun poke biodiesel enamel pin direct trade. Thundercats sartorial brunch yuccie XOXO, keytar ramps vegan. Vape mumblecore brunch small batch art party twee tacos trust fund truffaut butcher four dollar toast williamsburg humblebrag knausgaard slow-carb.\n' +
        '\n' +
        'Vaporware fingerstache swag marfa whatever disrupt squid deep v. Subway tile flannel pork belly vexillologist adaptogen. Woke PBR&B unicorn seitan post-ironic. Scenester microdosing lomo franzen. Celiac direct trade wolf kale chips. 8-bit XOXO church-key synth.\n' +
        '\n' +
        'Salvia vaporware raw denim brooklyn chambray. Locavore hot chicken forage irony shoreditch. 8-bit salvia intelligentsia celiac keffiyeh mumblecore mlkshk af. Normcore keytar stumptown austin raclette. Fashion axe health goth chartreuse hot chicken enamel pin fam pork belly chicharrones four loko. Next level literally neutra, cray subway tile sustainable synth authentic ramps biodiesel PBR&B.\n' +
        '\n' +
        'Austin wayfarers master cleanse lo-fi echo park gastropub. Twee jean shorts kitsch kickstarter, taxidermy plaid kale chips mustache beard. Ugh hammock meggings deep v authentic literally. Before they sold out polaroid coloring book banjo artisan vaporware stumptown lyft normcore you probably haven\'t heard of them kombucha locavore ethical +1 cred. Chicharrones umami enamel pin lomo.\n' +
        '\n' +
        'Meggings humblebrag copper mug offal food truck vexillologist, coloring book VHS edison bulb intelligentsia. Ugh tofu meh swag lo-fi 3 wolf moon. Craft beer poke roof party forage hammock. Taxidermy mumblecore dreamcatcher pop-up iceland man bun, kitsch bitters you probably haven\'t heard of them bespoke. Plaid VHS organic, brooklyn neutra cardigan gastropub portland edison bulb crucifix. Selvage gastropub bushwick paleo fingerstache, austin vaporware woke activated charcoal thundercats semiotics pop-up. Irony williamsburg organic, waistcoat vaporware tousled tumblr wolf schlitz kinfolk.\n' +
        '\n' +
        'Kickstarter thundercats roof party cornhole kale chips, microdosing beard 8-bit chia meditation church-key heirloom synth. Air plant meggings semiotics kombucha godard blue bottle. Echo park gentrify lumbersexual quinoa copper mug. Hexagon slow-carb photo booth mixtape. Single-origin coffee drinking vinegar whatever, wolf poutine edison bulb kombucha squid +1 four dollar toast try-hard.\n' +
        '\n' +
        'Farm-to-table air plant next level green juice, tattooed williamsburg meditation lumbersexual stumptown hexagon meh cornhole craft beer. Portland beard mlkshk mumblecore unicorn keytar. Kogi raclette food truck, authentic organic jianbing marfa bushwick knausgaard pop-up bitters. Disrupt raw denim jianbing, organic street art af unicorn. Iceland swag direct trade, brunch succulents art party locavore irony flannel.\n' +
        '\n' +
        'Echo park shoreditch four loko iPhone truffaut tattooed schlitz. Venmo seitan XOXO humblebrag hashtag meditation kogi lumbersexual fam air plant four loko street art. Chillwave flexitarian edison bulb gochujang, sustainable 90\'s chicharrones hammock kale chips vexillologist taxidermy selfies offal jianbing. Aesthetic enamel pin pour-over beard, leggings meh fam whatever. Enamel pin hella banjo, pour-over master cleanse semiotics whatever hashtag locavore gastropub selfies occupy.\n' +
        '\n' +
        'Bespoke artisan crucifix biodiesel photo booth typewriter tofu tbh normcore. Pok pok everyday carry yr YOLO fanny pack, cold-pressed four loko. Activated charcoal wolf la croix tote bag letterpress poke irony. Vinyl fanny pack cornhole stumptown meh, farm-to-table edison bulb authentic blog messenger bag. Glossier hot chicken whatever, art party ennui chartreuse offal humblebrag. Lo-fi sustainable bushwick lyft waistcoat live-edge. VHS vape hexagon glossier kale chips shabby chic, distillery fashion axe meh PBR&B kogi.\n' +
        '\n' +
        'Single-origin coffee paleo locavore live-edge la croix crucifix tilde art party. Truffaut fam quinoa, godard bushwick skateboard tumblr kitsch hot chicken cronut vape helvetica vinyl air plant. Authentic organic palo santo PBR&B, prism mustache chia poutine single-origin coffee. Humblebrag gluten-free disrupt, distillery single-origin coffee snackwave art party cornhole.\n' +
        '\n' +
        'Snackwave brooklyn pug adaptogen, ramps farm-to-table DIY authentic locavore slow-carb cardigan vice selvage lo-fi fanny pack. Semiotics bespoke stumptown, microdosing sriracha butcher skateboard cornhole edison bulb XOXO woke waistcoat succulents. Authentic pour-over neutra umami iPhone food truck. +1 dreamcatcher umami forage live-edge hella, lo-fi literally craft beer pug hell of tofu offal. Hoodie sriracha subway tile, mlkshk kitsch copper mug meh four dollar toast. Vegan narwhal roof party chambray. Art party bitters quinoa mixtape, distillery small batch dreamcatcher.\n' +
        '\n' +
        'Scenester hammock typewriter PBR&B mlkshk. Cardigan kitsch farm-to-table, vice hammock forage tumblr. Tumeric hexagon 8-bit hammock church-key hashtag. Pinterest prism iceland gentrify fanny pack tbh fam portland austin intelligentsia hashtag adaptogen church-key subway tile. Chicharrones retro asymmetrical seitan echo park 8-bit franzen.\n' +
        '\n' +
        'Viral palo santo locavore hammock you probably haven\'t heard of them, YOLO marfa kickstarter lo-fi post-ironic la croix raw denim iceland craft beer green juice. Twee shabby chic aesthetic wolf leggings. Microdosing ramps jean shorts activated charcoal chambray church-key enamel pin, poke snackwave street art man bun vaporware. Direct trade put a bird on it blue bottle activated charcoal edison bulb mixtape viral tacos, thundercats next level lumbersexual.\n' +
        '\n' +
        'Brooklyn fashion axe bespoke heirloom flannel gentrify paleo shabby chic narwhal bitters quinoa cold-pressed. Air plant lomo raw denim put a bird on it VHS. Yr occupy woke actually flexitarian normcore neutra organic, readymade waistcoat VHS. Organic narwhal jianbing, copper mug bushwick mumblecore banjo cold-pressed neutra occupy swag chicharrones dreamcatcher succulents hoodie. Cardigan cronut tacos raw denim retro, occupy typewriter beard synth pug meh venmo.\n' +
        '\n' +
        'Yuccie street art umami normcore scenester. Literally fam bespoke banjo cronut messenger bag vinyl blue bottle vaporware art party. Pork belly sriracha church-key, bicycle rights raclette vaporware swag adaptogen brunch. Retro craft beer coloring book lumbersexual austin kitsch ennui snackwave twee typewriter brunch affogato.\n' +
        '\n' +
        'Blue bottle pork belly try-hard, shabby chic fixie bicycle rights small batch bushwick knausgaard asymmetrical gochujang actually mlkshk meggings. Brooklyn tofu marfa neutra occupy, salvia shaman roof party hoodie taiyaki readymade tacos everyday carry gochujang sartorial. Four dollar toast unicorn selfies pickled. Enamel pin thundercats portland la croix echo park bicycle rights glossier photo booth meditation you probably haven\'t heard of them poke etsy. Raw denim kale chips blue bottle fanny pack. Edison bulb trust fund letterpress, pitchfork locavore ethical street art chillwave prism.\n' +
        '\n' +
        'Beard yuccie single-origin coffee palo santo echo park gastropub. Semiotics banjo brooklyn normcore waistcoat tumeric lomo truffaut literally stumptown brunch schlitz. Deep v chillwave YOLO adaptogen banjo. Sustainable tilde viral unicorn pop-up mixtape, vice iPhone kickstarter jean shorts cloud bread beard af. Jean shorts air plant venmo tousled, franzen man bun mustache irony fingerstache actually. Trust fund waistcoat venmo copper mug. Everyday carry lo-fi 90\'s skateboard irony cardigan narwhal XOXO next level.\n' +
        '\n' +
        'Helvetica intelligentsia 3 wolf moon hell of typewriter. Four dollar toast marfa tilde you probably haven\'t heard of them aesthetic gluten-free. Mlkshk street art vape air plant. Chambray air plant polaroid actually cornhole messenger bag, vinyl jean shorts tote bag listicle copper mug hammock YOLO cold-pressed. Mumblecore truffaut portland ethical pok pok readymade umami synth locavore cornhole hell of. Etsy retro helvetica flexitarian kale chips jianbing snackwave enamel pin.\n' +
        '\n' +
        'Farm-to-table gastropub blue bottle kickstarter direct trade seitan coloring book fanny pack occupy godard. Mixtape banh mi letterpress, poutine umami seitan vexillologist listicle schlitz keffiyeh vape craft beer authentic enamel pin. Mlkshk cardigan etsy skateboard selvage microdosing paleo organic art party asymmetrical pok pok messenger bag. DIY hexagon truffaut sartorial, snackwave artisan ennui pitchfork chambray vinyl pabst 90\'s. Lo-fi freegan typewriter blue bottle. Yuccie mustache meggings literally PBR&B hexagon forage. Retro green juice gochujang single-origin coffee tote bag taxidermy, literally forage.\n' +
        '\n' +
        'Woke forage poke retro next level church-key tumblr. Salvia irony viral DIY. Street art air plant chicharrones deep v, small batch palo santo chillwave shaman. Narwhal fanny pack yr, distillery wolf beard helvetica. Blue bottle aesthetic ennui cray, XOXO shaman twee sustainable small batch raw denim umami tilde.\n' +
        '\n' +
        'Butcher tote bag meggings, knausgaard crucifix man braid tumblr PBR&B helvetica meditation twee. Sartorial tilde tofu live-edge gluten-free mustache retro. Live-edge you probably haven\'t heard of them fingerstache dreamcatcher prism cred church-key, ramps fashion axe. Man braid quinoa dreamcatcher iPhone 3 wolf moon scenester, pug meggings venmo small batch activated charcoal before they sold out. Photo booth jianbing cardigan raw denim yr. Sriracha activated charcoal PBR&B, glossier drinking vinegar forage vape banjo iceland. Flexitarian green juice synth, vinyl marfa migas flannel offal YOLO paleo stumptown jean shorts tumeric.\n' +
        '\n' +
        'Normcore freegan health goth deep v cardigan sartorial, farm-to-table brunch four loko vape. Hella beard air plant 3 wolf moon flexitarian iPhone squid hell of selvage. PBR&B williamsburg waistcoat paleo iceland neutra lumbersexual echo park pitchfork letterpress vinyl edison bulb. Beard before they sold out next level unicorn poke. IPhone fam prism farm-to-table before they sold out green juice. Chicharrones lo-fi stumptown, fixie kogi ugh fingerstache try-hard godard. Succulents pok pok beard intelligentsia gluten-free raw denim ramps tilde swag.\n' +
        '\n' +
        '8-bit gentrify occupy poke, DIY whatever hoodie before they sold out palo santo chicharrones. Mlkshk mumblecore before they sold out, helvetica succulents venmo marfa fashion axe pitchfork ugh air plant. Intelligentsia distillery dreamcatcher kombucha paleo pinterest. Enamel pin whatever meggings celiac lo-fi crucifix drinking vinegar try-hard cold-pressed everyday carry pop-up yuccie pok pok air plant swag. Post-ironic skateboard blog normcore godard twee snackwave polaroid yuccie.\n' +
        '\n' +
        'Migas leggings paleo, chambray readymade wayfarers blue bottle ethical twee kogi keffiyeh man braid. Hot chicken distillery trust fund put a bird on it iceland YOLO PBR&B vape pinterest hoodie direct trade. Woke pop-up irony locavore forage plaid cardigan blue bottle hammock cold-pressed schlitz pork belly. DIY tumeric cronut heirloom, woke drinking vinegar subway tile copper mug freegan hashtag hexagon. Coloring book fashion axe street art pug. Disrupt gastropub migas farm-to-table yr yuccie. Pitchfork selvage fingerstache lomo viral ugh tumeric.\n' +
        '\n' +
        'Dummy text? More like dummy thicc text, amirite?'
    t.is(findLongestWord(testString), "intelligentsia")
});

test("No Words", t => {
    const testString = '%^&*#$834934878324'
    t.is(findLongestWord(testString), "NO_WORDS_FOUND")
});


