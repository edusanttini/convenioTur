import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flagpy,
  flagbr,
  flagarg,
  cataratas,
  cardCataratas,
  cardTechnologic,
  cardTransfer,
  cardGastronomia,
  cardHotels,
  cardEvents,
  waterfall, wf1, wf2,
  itaipuLogo, itaipu1, itaipu2, itaipu3,
  ruinsIcon, ruins1, ruins2,
  katalogo, kata1, kata2, kata3,
  bertoniMuseumIcon, bertoniMuseum,
  sportFishingIcon, sportFishing1,
  bordersIcon, borders1,
  ruralTourIcon, ruralTour1, ruralTour2, ruralTour3,
  pyIcon, py1, py2, py3
} from "../assets";

export const bgImg = [
  {
    id: 'kodak',
    imgUrl: cataratas,
    title: 'cataratas',
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "explore",
    title: "Explore",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const exploreCountries = [
  {
    id: 'Arg',
    imgUrl: flagarg,
    title: 'Argentina',
  },
  {
    id: 'Br',
    imgUrl: flagbr,
    title: 'Brasil',
  },
  {
    id: 'Py',
    imgUrl: flagpy,
    title: 'Paraguay',
  },
];

const services = [
  {
    title: "Events and Incentives",
    icon: cardEvents,
    url: "eventsandincentives",
  },
  {
    title: "Cataratas and Nature Tours",
    icon: cardCataratas,
    url: "naturetours",
  },
  {
    title: "Technologic/Cultural Tours",
    icon: cardTechnologic,
    url: "culturaltours",
  },
  {
    title: "Transfer/Receptive Services",
    icon: cardTransfer,
    url: "transferservices",
  },
  {
    title: "Gastronomy and Entertainment",
    icon: cardGastronomia,
    url: "gastronomy",
  },
  {
    title: "Hotels",
    icon: cardHotels,
    url: "hotels",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const natureTours = [
  {
    title: "The Brazillian Falls",
    country: "Brasil",
    icon: itaipuLogo,
    iconBg: "#E6DEDD",
    duration: "3 hours",
    points: [
      "“Never has so much beauty been seen in one place”",
      "Board at the Iguassu National Park Visitor’s Center for a drive through the lush subtropical vegetation of park en route to the falls.",
      "Stroll the trail descending the canyon that offers the most panoramic view of the more than 240 different falls.",
      "Penetrate the mist of the Devil’s Throat on the main walkway.",
      "Take the glass elevator up the cliff face for a view from the upper deck.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Argentine Falls with Devil’s Throat",
    country: "Argentina",
    icon: itaipuLogo,
    iconBg: "#E6DEDD",
    duration: "7 hours",
    points: [
      "Cross the Tancredo Neves Bridge with its lovely view of the Iguassu Canyon en route to the Iguazú National Park in Argentina.",
      "Visit the upper and lower walkways which allow a different perspective and more intimate contact with the falls adjoining rainforest filled with orchids, bromeliads, birds and other wildlife.",
      "The highlight of the trip is a visit to the suspended platform at the very brink of the abysmal Devil’s Throat - largest of the waterfalls.",
      "This very complete trip shows you all the different angles of the waterfalls from the Argentine side and includes not only the upper trails and the Devil's Throat but also the lower trail which winds through heavy rainforest.",
      "On this trip, we offer several different options for lunch, which is optional."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Macuco Boat Safari",
    country: "Brasil",
    icon: itaipuLogo,
    iconBg: "#E6DEDD",
    duration: "2 hours",
    points: [
      "In an open wagon ride 2 km in the forest at a reduced speed, hearing explanations and curiosities of the native flora and fauna.",
      "We continue on foot up to the margin of the Iguassu River where a inflatable motor boat takes the tourist on one of the most moving trips, where one has a close-up view of the falls, hearing the thunder of the waters, and getting wet in the mist of the falls, unforgettable.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Grand Adventure",
    country: "Argentina",
    icon: itaipuLogo,
    iconBg: "#E6DEDD",
    duration: "2 hours",
    points: [
      "This attraction is conveniently located on the Argentine side.",
      "It starts with a ride throughn the jungle in special 4x4 vehicles.",
      "Hike down the Iguassu canyon and board inflatable boats.",
      "Take an exiting trip through the rapids and arrive at the base of the waterfalls with a view of the Devil`s Throat.",
      "Get your hair wet in the mist and feel the forces of nature."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Parque das Aves",
    country: "Brasil",
    icon: itaipuLogo,
    iconBg: "#E6DEDD",
    duration: "1 hour",
    points: [
      "The Bird Park is conveniently located at the entrance of the Iguassu National Park, and fully integrated into its natural surroundings.",
      "Mingle with and photograph hundreds of different native and exotic birds, snakes, caimans, marmosets and butterflies in spacious walk-through aviaries and trails that wind through the jungle.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Panoramic Helicopter Flight",
    country: "Brasil",
    icon: itaipuLogo,
    iconBg: "#E6DEDD",
    duration: "10 minutes",
    points: [
      "Thrilling and informative, a helicopter flight over the falls affords a completely different perspective of the Cataratas.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "EcoAdventure Bananeira Trail",
    country: "Brasil",
    icon: itaipuLogo,
    iconBg: "#E6DEDD",
    duration: "3 hours and 30 minutes",
    points: [
      "This tour starts with a jungle trail of 1,6 km, either on foot or by bicycle (conventional or electric).",
      "Nature lovers can promenade through small ponds, where they can watch birds with aquatic habits.",
      "Next, navigate in powerboats on the Upper Iguassu to the Poço Preto dock and visit an observation tower with a view of the Jacaré Pond, which is rich in terrestrial and aquatic life.",
      "Visit Taquara islands with the option of kayaks.",
      "The return path is through Bananeiras or Canoas Ports, always accompanied by specialized guides."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "EcoAdventure Black Well/Upper Iguassu",
    country: "Brasil",
    icon: itaipuLogo,
    iconBg: "#E6DEDD",
    duration: "4 hours",
    points: [
      "In the first part of this excursion, the visitor takes a nine kilometer jungle trail and can opt for either doing it on foot, by bike, electric bicycle or electric tram.",
      "Enroute, enjoy and observe the native flora, hard-woods and with luck, some of the animals and colorful birds of the region.",
      "Board powerboats on the upper Iguassu River and navigate to the Taquara Islands, large caimans and other river life can be observed from the boat.",
      "Another available option is to do a 30 minute kayak trip among the islands.",
      "This trip ends up at Porto Canoas where an optional lunch can be served."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Other Attractions",
    country: "Brasil & Argentina",
    icon: itaipuLogo,
    iconBg: "#E6DEDD",
    duration: "null",
    points: [
      "Tree Climbing and Zipline - Tree climbing and trips between rainforest trunks and an exciting trip hanging from a pulley on a steel cable.",
      "Field of Challenges - Programmed activities in a jungle environment that present mental and physical challenges.",
      "Eco Adventure - Porto Canoas - Departures from Porto Canoas for a 20 min. boat ride on the Upper Iguassu.",
      "Rock Climbing - Climb an artificial rock wall or choose among 30 different canyon routes.",
      "Floating Safari - Floating boat ride on the Upper Iguassu without the use of motors. Argentine side.",
      "Bird Watching - Iguassu has over 400 different species, early morning departures. Accompaniment of a specialist. Snack included.",
      "Rafting on the Iguassu - Four kilometers. of rapids in inflatable rafts - the participants row together.",
      "Rapel and Cascading - Practice rappel in the Iguassu Canyon from a height of 55m with the Cataratas as a backdrop! In special excursions, practice “Cascading” in a local waterfall.",
      "Selva Safari - Argentine Park - Special 4x4 vehicles explore the exclusive Yacaratía Trail with short walks and explanations from a professional jungle guide.",
      "Martins Trail - Visit a remote area of the National Park with a kayak (duck) trip. Snack included."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  }
  
];

const culturalTours = [
  {
    title: "The Itaipu Dam",
    country: "Brasil",
    icon: itaipuLogo,
    iconBg: "#E6DEDD",
    duration: "2 hours and 30 minutes",
    points: [
      "This visit to the largest Hydroelectric Dam in the world begins at the Reception Center where an audiovisual is presented showcasing the history of the construction.",
      "Visit the power station and the observation deck with a panoramic view of the whole dam and the spillway giving an idea of this dimension of this colossal project.",
      "The Itaipu Dam is eight kilometers wide with a total of 20 turbines and a installed capacity of 14,000,00 kilowatts. Special technical visits may be arranged upon request.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "The Jesuit Ruins of San Ignacio",
    country: "Argentina",
    icon: ruinsIcon,
    iconBg: "#E6DEDD",
    duration: "Full day",
    points: [
      "Visit the ruins of San Ignacio, located 250 kilometers from Iguassu Falls.",
      "Here the Jesuits founded the Guarani Republic, which flourished in the seventeenth century.",
      "Visit the communal houses, churches and buildings, with their baroque traits and numerous stone sculptures now invaded by the jungle.",
      "The trip is via a paved highway winding through the picturesque Argentine countryside with its Mate-Tea plantations and well-preserved tropical rainforest.",
      "Enroute we visit a working open-air gemstone mine. Lunch is optional"
    ],
    images: [
      ruins1, ruins2
    ]
  },
  {
    title: "Kattamaram",
    country: "Brasil",
    icon: katalogo,
    iconBg: "#E6DEDD",
    duration: "3 hours",
    points: [
      "The grandest and most luxurious ship in the region.",
      "The Kattamaram is a large yacht specially designed to provide comfort and safety for its passengers with an infrastructure to realize dinners and events for up to 200 guests.",
      "Conveniently located at the Itaipu Lake, the Kattamaram plies the water of this gigantic reservoir with its forested shoreline.",
      "Daily departures. We suggest that this tour be done with the visit to the Itaipu Dam.",
    ],
    images: [
      kata1, kata2, kata3
    ]
  },
  {
    title: "Navegation on the Paraná and Iguassu Rivers with Visit to the Bertoni Museum",
    country: "Brasil",
    icon: bertoniMuseumIcon,
    iconBg: "#E6DEDD",
    duration: "4 hours",
    points: [
      "Departure from the Cataratas Yacht Club.",
      "We board modern boats with experienced pilots for an unforgettable trip on the Paraná River observing the International Friendship Bridge, Acaray Island and the Three Borders enroute to the Bertoni Parque and Museum on the Paraguayan side.",
      "On board refreshments included.",
    ],
    images: [
      bertoniMuseum
    ]
  },
  {
    title: "Sport Fishing",
    country: "Brasil",
    icon: sportFishingIcon,
    iconBg: "#E6DEDD",
    duration: "4 hours",
    points: [
      "Motor skiffs equipped with special sonar, tackle and live bait.",
      "The current and depth of the river facilitate the catching of dourado salmon, pacú, surubim.",
      "On board refreshments included.",
    ],
    images: [
      sportFishing1
    ]
  },
  {
    title: "Three Borders",
    country: "Brasil",
    icon: bordersIcon,
    iconBg: "#E6DEDD",
    duration: "1 hour",
    points: [
      "Enjoy the view from the observation deck at the “Meeting of the Waters” of the Iguassu and Paraná rivers where Brazil, Argentina and Paraguay form the Three Borders.",
      "Three stone markers dating from 1916 designate the territory of each country.",
    ],
    images: [
      borders1
    ]
  },
  {
    title: "Rural Tour",
    country: "Brasil",
    icon: ruralTourIcon,
    iconBg: "#E6DEDD",
    duration: "Full day (Overnight Optional)",
    points: [
      "Get to know the local culture while visiting or staying overnight with families from the Sabia River Community, in Matelandia, Paraná.",
      "The strong influence of Italian and German immigrants can be felt in the food, speech and stories which trigger a nostalgic well being in the visitor.",
      "The Sabia Circuit offers visits which emphasize real rest, authentic local cuisine prepared with the local produce, leisure activities and convivial country living.",
      "Have walks on nature trails and enjoy beautiful landscapes. Visits can be full-day or with overnight.",
    ],//check current website, thers another route that must be done on rural tours 'get to know the farms'
    images: [
      ruralTour1, ruralTour2, ruralTour3
    ]
  },
  {
    title: "Visit to Paraguay",
    country_name: "Paraguay",
    icon: pyIcon,
    iconBg: "#E6DEDD",
    duration: "4 hours",
    points: [
      "Cross the picturesque Friendship Bridge to Ciudad Del Este, Paraguay.",
      "Ample time to shop for duty-free imported goods and local handicrafts.",
      "Accompanied by guide.",
      "Please bring passport or valid I.D.",
    ],
    images: [
      py1, py2, py3
    ]
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, natureTours, testimonials, projects, culturalTours };
