import { DataStory } from "../interfaces/data-structure/data-story";

export const STORIES: DataStory[] = [
    { id: 1, title: "Some Personal Arguments in Support of the BetterYou (Based on Early Interactions)", genres: [3, 4], warnings: [3,1,7,4], 
        identities: [{ romantic: 3, sexuality: 1, gender: 1, prominance: 1, explicit: 1}], author: 1, intersectionalities: [1],
        link: "http://strangehorizons.com/fiction/some-personal-arguments-in-support-of-the-betteryou-based-on-early-interactions/",
        description: "Dark story that showcases how society can marginalise minorities. Despite fantastical elements, the story feels very grounded in its details." +
        " The main character welcomes a BetterYou to replace her in aspects of her life that she fails to live up to society's standards."},
    { id: 2, title: "The Portal", author: 1, genres: [1], warnings: [1, 3, 4], link: "https://www.lightspeedmagazine.com/fiction/the-portal/",
        identities: [{romantic: 3, sexuality: 1, gender: 1, prominance: 1, explicit: 1}], intersectionalities: [1],
        description: "A story of conversion therapy where the narrator's voice tries to deal with their feelings through the medium of a story, involving a portal to another world."},
    { id: 3, title: "Entangled", author: 2, genres: [3], link: "https://clarkesworldmagazine.com/barnett_08_19/", 
        identities: [{romantic: 4, sexuality: 1, gender: 2, prominance: 2, explicit: 1}], warnings: [], intersectionalities: [],
        description: "Lonely alien searched for connection. The asexuality representation is a little mixed. " + 
        "While it does feature a merger of the asociating asexuality with aliens and robots, there is a normal asexual human character as well." + 
        " Asexuality feels more of a convenient side aspect, where the main themes are around community and belonging."},
    { id: 4, title: "Sex With Ghosts", author: 3, genres: [3], link: "http://strangehorizons.com/fiction/sex-with-ghosts/",
        warnings: [1], identities: [{romantic: 4, sexuality: 1, gender: 1, prominance: 1, explicit: 1}], intersectionalities: [],
        description: "An asexual receptionist at a custom robot brothel is met with a creation she was not expecting, and has to decide how to deal with it."},
    { id: 5, title: "How to Become a Robot in 12 Easy Steps", author: 4, genres: [3], warnings: [4, 9],
        identities: [{romantic: 4, sexuality: 1, gender: 1, explicit: 1, prominance: 1}], intersectionalities: [1],
        link: "https://www.lightspeedmagazine.com/fiction/how-to-become-a-robot-in-12-easy-steps/",
        description: "Our depressed, probably autistic, and asexual protagonist falls in love with a robot, and wants to be one herself. A different play on the " + 
        "asexual/neurodivergent as a robot trope as she is very much not a robot. Emphasises the importance of connection."},
    { id: 6, title: "Giant Country", author: 5, genres: [1], warnings: [6], link: "https://www.havenspec.com/giant-country",
        identities: [{romantic: 1, sexuality: 3, prominance: 1, explicit: 1, gender: 1}], intersectionalities: [1],
        description: "Our disabled protagonist, on a quest for her best friend with her grandmother, has been caught by a giant, and must undertake an escape before carrying on."},
    { id: 7, title: "The Girl and Her Unicorn", author: 6, genres: [1], warnings: [5], intersectionalities: [2],
        link: "https://aroworlds.com/fiction/nine-laws/the-girl-and-her-unicorn/", source: [1], series: 1,
        identities: [{romantic: 1, sexuality: 4, gender: 6, prominance: 1, explicit: 2}, {romantic: 1, sexuality: 4, gender: 2, prominance: 2, explicit: 2},
        {romantic: 1, sexuality: 4, gender: 1, prominance: 2, explicit: 2}],
        description: "Ponder is sent as a sacrifice and presumed virgin to attract a unicorn to ask for a boon. But Ponder knows ze doesn't meet hir village's exacting " + 
        "requirements, and so ze must fail."},
    { id: 8, title: "The Lies Lovers Tell", author: 6, genres: [1], warnings: [5], series: 1,
        link: "https://aroworlds.com/2023/02/25/fiction-the-lies-lovers-tell/", source: [1], intersectionalities: [2],
        identities: [{romantic: 1, sexuality: 4, gender: 6, prominance: 1, explicit: 2}, {romantic: 1, sexuality: 1, gender: 1, prominance: 2, explicit: 2}],
        description: "A new take on Rapunzel. Thorn is a proliffic gardener, trapped living in a tower by a witch. If only people would stop trying to rescue hir!"},
    { id: 9, title: "Bisclavret", author: 7, genres: [1], warnings: [1],intersectionalities: [],
        identities: [{romantic: 5, sexuality: 2, prominance: 1, explicit: 2, gender: 2}], 
        description: "A queer retelling of an old French story, in which the Lord Bisclavret is cursed to transform into a wolf every month. To turn back into a man, he must come upon his clothes." +
        " His wife eventually convinces him to reveal his secret, after which she becomes afraid and hides his cloths. Trapped as a wolf, Lord Bisclavret is picked up by the king, who has been " +
        "shamed by his father for not wanting sex enough."},
    { id: 10, title: "D.I.Y.", author: 8, genres: [1], link: "https://www.tor.com/2022/08/24/d-i-y-john-wiswell/", 
        warnings: [8], intersectionalities: [1],
        identities: [{romantic: 4, sexuality: 1, gender: 2, explicit: 2, prominance: 1}, {romantic: 4, sexuality: 1, gender: 3, explicit: 2, prominance: 1}],
        description: "In a water-scarce and socially stratified near-future, two working-class, disbled teens attempt to solve a problem no one has achieved, create water."},
    { id: 11, title: "Lemon & Salt", author: 9, genres: [3], source: [2], warnings: [5], intersectionalities: [2],
        identities: [{romantic: 1, sexuality: 3, gender: 1, prominance: 1, explicit: 2}, {romantic: 1, sexuality: 3, gender: 3, prominance: 1, explicit: 2}],
        description: "Two singers renegotiate their queerplatonic relationship in a concert."},
    { id: 12, title: "Hunter", author: 6, genres: [1], warnings: [], link: "https://aroworlds.com/2021/12/17/hallo-aro-hunter-k-a-cook/",
        identities: [{romantic: 1, sexuality: 5, gender: 1, prominance: 1, explicit: 2}], source: [1, 4], series: 1, intersectionalities: [],
        description: "Prue travels the country searching for a witch, finding it better than the alternatives.", length: 3},
    { id: 13, title: "Before Crows' Eyes", author: 6, genres: [1], warnings: [1, 3, 5, 9], 
        link: "https://aroworlds.com/2022/02/21/fiction-before-crows-eyes/", series: 1, intersectionalities:[], source: [1], 
        identities: [{romantic: 1, sexuality: 1, gender: 2, prominance: 1, explicit: 2}, {romantic: 1, sexuality: 4, gender: 2, prominance: 2, explicit: 2}],
        description: "Aro-ace baker Even is happy with how he is, and initially pleases his sex-negative village. But his refusal to marry has opinion of him souring."},
    { id: 14, title: "The Cage and the Road", author: 6, genres: [1], warnings: [5, 9], link: "https://aroworlds.com/2022/02/24/fiction-the-cage-and-the-road/",
        identities: [{romantic: 1, sexuality: 5, gender: 1, prominance: 1, explicit: 2}], source: [1], intersectionalities: [], series: 1,
        description: "In Prue's travels around the country, she encounters unwanted company who raises questions about her own life."},
    { id: 15, title: "Pillar", author: 6, genres: [1], warnings: [], link: "https://aroworlds.com/2022/11/07/hallo-aro-pillar-k-a-cook/",
        identities: [{romantic: 1, sexuality: 4, gender: 1, prominance: 1, explicit: 2}], source: [1,4], series: 1, intersectionalities: [],
        description: "Quick doesn't want marriage or children, and tires of the demands of those who do.", length: 3},
    { id: 16, title: "Witch", author: 6, genres: [1], warnings: [], link: "https://aroworlds.com/2021/12/03/hallo-aro-witch-k-a-cook/",
        identities: [{romantic: 1, sexuality: 4, gender: 5, prominance: 1, explicit: 2}], source: [1,4], series: 1, intersectionalities: [],
        description: "An aro allo villager leaves to seek change.", length: 3},
    { id: 17, title: "Bones of Green and Hearts of Gold", author: 6, genres: [1], warnings: [], intersectionalities: [2],
    link: "https://aroworlds.com/2020/11/10/fiction-bones-of-green-and-hearts-of-gold/",
        identities: [{romantic: 1, sexuality: 4, gender: 1, prominance: 1, explicit: 2}, {romantic: 1, sexuality: 4, gender: 6, prominance: 2, explicit: 2}], source: [1], series: 1,
        description: "Princess Constance knows that she is supposed to marry the prince. But doing so would be a mistake, so she must run to the witch for help."},
    { id: 18, title: "Le Trotteur", author: 9, genres: [3], warnings: [1, 10], source: [2],
        identities:[{romantic: 6, sexuality: 1, gender: 1, explicit: 2, prominance: 2}], intersectionalities: [],
        description: "A backwater MagSkater becomes too arrogent for his own good."},
    { id: 19, title: "The Wyvern Brood", author: 9, genres: [1], warnings: [10], intersectionalities: [],
        identities: [{romantic: 1, sexuality: 1, gender: 1, prominance: 1, explicit: 2}],
        description: "A young woman from a village plagued by wyverns seeks to end seige.", source: [2]},
    { id: 20, title: "Seida the Fairy Troll", author: 9, genres: [1], warnings: [10], source: [2], intersectionalities: [],
        identities: [{romantic: 1, sexuality: 1, gender: 1, prominance: 2, explicit: 1}], description: "Outcast fairy Seida is called upon to save the day."},
    { id: 21, title: "The Daisy Haunt", author: 9, genres: [1], warnings: [], source: [2], intersectionalities: [1],
        identities: [{romantic: 5, sexuality: 2, gender: 1, prominance: 1, explicit: 2}], description: "A blind gardener comes across some mysterious flowers."},
    { id: 22, title: "Human Blooms", author: 9, genres: [1], warnings: [11], source: [2], intersectionalities: [],
        identities: [{romantic: 1, sexuality: 1, gender: 1, prominance: 1, explicit: 2}], description: "A new parent visits a grave to grieve."},
    { id: 23, title: "The Vampire Conundrum", author: 6, genres: [5], warnings: [12], intersectionalities: [1,2],
        link: "https://aroworlds.com/2019/11/16/fiction-the-vampire-conundrum-part-one/",
        identities: [{romantic: 7, sexuality: 6, gender: 2, prominance: 1, explicit: 1}, {romantic: 1, sexuality: 1, gender: 1, prominance: 2, explicit: 1}], 
        description: "Rowan brings an aromantic mug to the office, but doesn't know what to do when no one reacts.", source: [3]},
    { id: 24, title: "The Dirty Golden Yellow House", author: 1, genres: [1,4], warnings: [13], link: "https://www.lightspeedmagazine.com/fiction/the-dirty-golden-yellow-house/",
        identities: [{sexuality:1, romantic:3, gender:1, prominance:1, explicit:2}], intersectionalities: [], length: 2,
        description: "A story of a woman who doesn't want to have sex being repeatedly coerced into sex and eventually arranging for her husband to be eaten by a monster. " 
        + "It is more implied than outright stated that the woman is asexual, though the word is used in the story. The story is told non-linearly with narrator interjections." },
    { id: 25, title: "The Love It Bears Fair Maidens", author: 10, genres: [1], link: "https://apex-magazine.com/short-fiction/the-love-it-bears-fair-maidens/",
        identities: [{sexuality: 1, romantic: 4, gender: 1, explicit: 2, prominance: 1}], intersectionalities: [], warnings: [1],
        description: "Alegorical look at the unicorn myth and it's relation to sex and compulsory sexuality from the perspective of an asexal person." },
    { id: 26, title: "A Taxonomy of Hurts", author: 11, genres: [1], link: "https://firesidefiction.com/a-taxonomy-of-hurts",
        identities: [{sexuality: 1, romantic: 6, gender: 5, prominance: 1, explicit: 2}], intersectionalities: [], warnings: [2],
        description: "Characters in this world wear their hurts on their sleeves, and the protagonist learns to understand their loneliness and fear of rejection from asexuality with help."},
    { id: 27 , title: "So, You Married Your Arch Nemesis . . . Again", author: 4, link: "https://www.lightspeedmagazine.com/fiction/so-you-married-your-arch-nemesis-again/",
        genres: [6], intersectionalities: [2], warnings: [16, 10], 
        identities:[{romantic: 8, sexuality: 1, gender: 3, explicit: 1, prominance: 1}, {romantic: 8, sexuality: 1, gender: 3, explicit: 1, prominance: 2}], 
        description: "An exploration of the 'bury your gays' trope where a character tries to escape the pressure of a particular narrative strincture. Plays about with genre and style."},
    { id: 28, title: "Later, Let’s Tear Up The Inner Sanctum", author: 4, link: "https://www.lightspeedmagazine.com/fiction/later-lets-tear-inner-sanctum/", warnings: [2], genres: [6],
        identities: [{sexuality: 1, romantic: 5, gender: 2, explicit: 1, prominance: 2}, {sexuality: 1, romantic: 5, gender: 2, explicit: 1, prominance: 2}], intersectionalities:[], length: 2,
        description: "Epistolery story about secrets and betrayals in a superhero group. A couple of minor characters are described as being asexual, and therefor not impacted by a villan called Lust."},
    {id: 29, title: "The Aromatic Lovers", author: 12, warnings: [12], genres: [1], identities: [{sexuality: 3, romantic: 1, gender: 2, explicit: 2, prominance: 2}], 
        description: "A nonbinary person searches for a perfume that signals their gender.", intersectionalities:[]},
    {id: 30, title: "Would You Like Charms With That?", author: 13, warnings: [2, 10, 12], intersectionalities: [2], genres: [1], source: [5], identities: [{sexuality: 1, romantic: 1, gender: 3, explicit: 1, prominance: 1}, 
        {sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 2}, {sexuality: 1, romantic: 1, gender: 2, explicit: 1, prominance: 2}], description: "Two retired adventurers in a QPR run a shop."},
    {id: 31, title: "Moon Sisters", author: 14, warnings: [12, 14], genres: [1], source: [5], identities: [{sexuality: 4, romantic: 1, gender: 1, explicit: 1, prominance: 1}], 
        description: "A werewolf comforts her friend/a member of her pack after a breakup.",  intersectionalities:[]},
    {id: 32, title: "Shift", author: 15, warnings: [7], genres: [1], source: [5], identities: [{sexuality: 1 , romantic: 1, gender: 1, explicit: 1, prominance: 1}, {sexuality: 4 , romantic: 1, gender: 1, explicit: 1, prominance: 2}], 
        description: "A girl accepts that her college roommate is a werewolf.",  intersectionalities:[]},
    {id: 33, title: "Cinder", author: 16, warnings: [6, 2, 7, 15], genres: [1], source: [5], intersectionalities: [1], identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 1}, {sexuality: 1, romantic: 1, gender: 1, explicit: 2, prominance: 2}], 
        description: "Basically a disabled a-spec Cinderella retelling where the main character seeks to escape from an abusive family member and help others do the same. It’s a wild ride." + "The side character is only implied to be aro ace, she’s described as being similar to the main character and confirmed not to want of all in love/have kids."},
    {id: 34, title: "Seams of Iron", author: 17, genres: [1], source: [5], identities: [{sexuality: 3, romantic: 1, gender: 1, explicit: 2, prominance: 2}, {sexuality: 3, romantic: 1, gender: 1, explicit: 2, prominance: 1}], 
        description: "A girl is cursed to make cloaks made of nettles." + "Main character is only vaguely implied to be aro",  intersectionalities:[], warnings:[]},
    {id: 35, title: "Not to Die", author: 18, warnings: [11], genres: [1], source: [5], identities: [{sexuality: 3, romantic: 1, gender: 1, explicit: 2, prominance: 1}], 
        description: "A person who can create knots that suggest the future of relationships recovers from the loss of her found family.",  intersectionalities:[]},
    {id: 36, title: "Dracanmõt Council of Human Study Report Compiled by Usander Greystart", author: 19, warnings: [15, 2], genres: [1], source: [5], identities: [{sexuality: 3, romantic: 1, gender: 1, explicit: 2, prominance: 2}], 
        description: "A dragon in disguise is tasked with investigating a human settlement.",  intersectionalities:[]},
    {id: 37, title: "Busy Little Bees", author: 20, warnings: [7, 15], genres: [3], source: [5], identities: [{sexuality: 1, romantic: 1, gender:1 , explicit: 2, prominance: 1}], 
        description: "A person who’s a clone goes on a journey to find her cloned siblings and their surrogate mothers.",  intersectionalities:[]},
    {id: 38, title: "Spacegirl and the Martian", author: 21, warnings: [7], genres: [6], source: [5], identities: [{sexuality: 3, romantic: 1, gender: 1, explicit: 1, prominance: 1}], 
     description: "A superhero must face off with her evil twin sister.",  intersectionalities:[]},
    {id: 39, title: "A Full Deck", author: 22, warnings: [6, 7], genres: [1], source: [5], intersectionalities: [2], 
     identities: [{sexuality: 1, romantic: 8, gender: 1, explicit: 1, prominance: 1}, {sexuality: 4, romantic: 1, gender: 2, explicit: 1, prominance: 1}, {sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 2}, {sexuality: 2, romantic: 8, gender: 3, explicit: 1, prominance: 2}], 
     description: "A team of a-specs must find a way of defeating a succubus." + "I wasn’t a huge fan of the allo aro representation in this one. It felt a bit sex negative to me personally."},
    { id: 40, title: "Power to Yield", author: 23, link: "https://clarkesworldmagazine.com/takacs_07_20/", genres: [3], intersectionalities: [1], warnings: [], length: 1,
         identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 1}, {sexuality: 1, romantic: 1, gender: 2, explicit: 1, prominance: 1}], 
         description: "On a planet inhabited largely by autistic people, a young woman develops an interest in an influential and contraversial figure on her planet, leading to circustances of difficult morality."},
    { id: 41, title: "(don’t you) love a singer", author: 24, source: [6], genres: [3], warnings: [10], intersectionalities: [], 
         identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 1}], description: "A singer must take up the lead position to bring a spaceship safely home. "},
    { id: 42, title: "Far From The Home I Love", author: 25, link: "https://www.castofwonders.org/2022/09/cast-of-wonders-509-far-from-the-home-i-love/", 
         identities: [{sexuality: 1, romantic: 1, explicit: 2, gender: 1, prominance: 2}], intersectionalities: [], warnings: [1,9], genres: [3],
         description: "Miriam has to go back to her family to remove herself from her queerphobic family tree."},
    { id: 43, title: "Humans Die, Stars Fade", author: 26, link: "https://escapepod.org/2018/05/10/escape-pod-627-humans-die-stars-fade/", genres: [3], 
         identities: [{sexuality: 1, romantic: 8, gender: 2, prominance: 2, explicit: 1}], intersectionalities: [], warnings:[],
         description: "An alien lifeform living in an unstable part of the universe is visited by a human spaceship. The asexual character does not actually appear, and is only referred to."},
    {id: 44, title: "The Library Ghost", author: 27, warnings: [8, 17], genres: [3], source: [7], intersectionalities: [1,2], identities: [{sexuality: 1, romantic: 6, gender: 3, explicit: 2, prominance: 2}, 
         {sexuality: 1, romantic: 6, gender: 3, explicit: 2, prominance: 2}, {sexuality: 1, romantic: 6, gender: 2, explicit: 3, prominance: 2}], 
         description: "A ghost tries to infiltrate a library that’s a base of operations for a rebel group in a dystopian city. (There’s a lot going on here)."},
    {id: 45, title: "Runtime", author: 27, warnings: [17], genres: [3], source: [7], intersectionalities: [1,2], identities: [{sexuality: 1, romantic: 6, gender: 2, explicit: 1, prominance: 1}, {sexuality: 1, romantic: 6, gender: 3, explicit: 3, prominance: 2}], 
         description: "A anxious character transports important information across a city that’s falling apart."},
    {id: 46, title: "Come Home Alone", author: 27, warnings: [2, 10], genres: [3], source: [7], intersectionalities: [], identities: [{sexuality: 1, romantic:6 , gender: 2, explicit: 3, prominance: 2}], 
        description: "Canon-adjacent story about a man in a city that’s falling apart saving another person from an evil government operation and a serious wound."},
    {id: 47, title: "Nkásht íí", author: 25, warnings: [16, 7], genres: [1, 4], link: "http://strangehorizons.com/fiction/nksht/", intersectionalities: [3], 
        identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 2, prominance: 1}], description: "Two Indigenous girls that ran away from home solve a haunting. Character is only briefly implied to be a-spec."},
    {id: 48, title: "Surely You'll Drown Here if You Stay", author: 29, warnings: [2, 13], genres: [1, 4], link: "https://www.uncannymagazine.com/article/youll-surely-drown-stay/", intersectionalities: [], 
        identities: [{sexuality: 1, romantic: 3, gender: 2, explicit: 2, prominance: 1}], description: "A boy in a Wild West setting has powers because his mother is the desert. He acts as a guide through the desert to some greedy men. This representation is controversial/has been criticized by some asexual reviewers"},
    {id: 49, title: "Anything Resembling Love", author: 30, warnings: [2], genres: [7], link: "https://reactormag.com/anything-resembling-love-s-qiouyi-lu/", intersectionalities: [3], identities: [{sexuality: 1, romantic: 4, gender: 1, explicit: 1, prominance: 2}], 
        description: "A first year university student explores her sexuality and learns to hide her discomfort (manifested in the form of centipedes emerging from her body) from men. This is a powerful exploration of the effect of rape culture on university students."}
 ]
