import { cataratas2 } from "../assets";
import { macuco1 } from "../assets";
import { macucoIcon } from "../assets";
import { birdpark1 } from "../assets";
import { birdpark3 } from "../assets";
import { panoramicheli } from "../assets";
import { ecoadventure1 } from "../assets";
import { ecoadventure3 } from "../assets";
import { ecoadventureBlackIcon } from "../assets";
import { ecoadventureBlack2 } from "../assets";
import { otherAttractions1 } from "../assets";
import { restaurantIcon } from "../assets";
import { teatroplazaIcon } from "../assets";
import { cassinoIcon } from "../assets";
import { brazilianbarbecueIcon } from "../assets";
import { yatchclub } from "../assets";
import { hotelIcon } from "../assets";
import { argentinaIcon } from "../assets";
import { brazilIcon } from "../assets";
import { gauchoranch } from "../assets";
import { brazilianBarbcue } from "../assets";
import { cassinoiguazu } from "../assets";
import { teatroPlaza } from "../assets";
import { portocanoas1 } from "../assets";
import { otherAttractions2 } from "../assets";
import { otherAttractionsIcon } from "../assets";
import { ecoadventureBlack1 } from "../assets";
import { ecoadventureicon } from "../assets";
import { ecoadventure2 } from "../assets";
import { panoramicheliIcon } from "../assets";
import { birdparkicon } from "../assets";
import { birdpark2 } from "../assets";
import { grandadv1 } from "../assets";
import { macuco2 } from "../assets";
import { cataratasArg } from "../assets";
import { cataratas1 } from "../assets";
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
    icon: waterfall,
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
      cataratas1, cataratas2
    ]
  },
  {
    title: "Argentine Falls with Devil’s Throat",
    country: "Argentina",
    icon: waterfall,
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
      cataratasArg
    ]
  },
  {
    title: "Macuco Boat Safari",
    country: "Brasil",
    icon: macucoIcon,
    iconBg: "#E6DEDD",
    duration: "2 hours",
    points: [
      "In an open wagon ride 2 km in the forest at a reduced speed, hearing explanations and curiosities of the native flora and fauna.",
      "We continue on foot up to the margin of the Iguassu River where a inflatable motor boat takes the tourist on one of the most moving trips, where one has a close-up view of the falls, hearing the thunder of the waters, and getting wet in the mist of the falls, unforgettable.",
    ],
    images: [
      macuco1, macuco2
    ]
  },
  {
    title: "Grand Adventure",
    country: "Argentina",
    icon: macucoIcon,
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
      grandadv1
    ]
  },
  {
    title: "Parque das Aves",
    country: "Brasil",
    icon: birdparkicon,
    iconBg: "#E6DEDD",
    duration: "1 hour",
    points: [
      "The Bird Park is conveniently located at the entrance of the Iguassu National Park, and fully integrated into its natural surroundings.",
      "Mingle with and photograph hundreds of different native and exotic birds, snakes, caimans, marmosets and butterflies in spacious walk-through aviaries and trails that wind through the jungle.",
    ],
    images: [
      birdpark1, birdpark2, birdpark3
    ]
  },
  {
    title: "Panoramic Helicopter Flight",
    country: "Brasil",
    icon: panoramicheliIcon,
    iconBg: "#E6DEDD",
    duration: "10 minutes",
    points: [
      "Thrilling and informative, a helicopter flight over the falls affords a completely different perspective of the Cataratas.",
    ],
    images: [
      panoramicheli
    ]
  },
  {
    title: "EcoAdventure Bananeira Trail",
    country: "Brasil",
    icon: ecoadventureicon,
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
      ecoadventure1, ecoadventure2, ecoadventure3
    ]
  },
  {
    title: "EcoAdventure Black Well/Upper Iguassu",
    country: "Brasil",
    icon: ecoadventureBlackIcon,
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
      ecoadventureBlack1, ecoadventureBlack2
    ]
  },
  {
    title: "Other Attractions",
    country: "Brasil & Argentina",
    icon: otherAttractionsIcon,
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
      otherAttractions1, otherAttractions2
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

const gastronomyTour = [
  {
    title: "Porto Canoas Restaurant",
    country: "Brasil",
    icon: restaurantIcon,
    iconBg: "#E6DEDD",
    duration: "~1 hour",
    points: [
      "Overlooking the Iguassu River the Porto Canoas Restaurant offers regional Brazilian cuisine, with a unique unique atmosphere.",
      "The architecture is integrated into the natural surroundings.",
      "To sit at your table you will have the sensation to be in the river itself, encircled by flowers and birds.",
      "Choose the air-conditioned panoramic room or opt for seating on the open-air deck built over the water itself.",
      "Have lunch watching the mist from the Devil’s Throat."
    ],
    images: [
      portocanoas1
    ]
  },
  {
    title: "Teatro Plaza Foz Night Club Extravaganza",
    country: "Brasil",
    icon: teatroplazaIcon,
    iconBg: "#E6DEDD",
    duration: "3 hours",
    points: [
      "Enjoy a musical production which is a mixture of Las Vegas and local folklore, highlighting the exuberant cultures of Brazil, Argentina and Paraguay.",
      "Option: Dine at the Night Club or other restaurant of your choice."
    ],
    images: [
      teatroPlaza
    ]
  },
  {
    title: "Cassino Iguazú in Argentina",
    country: "Argentina",
    icon: cassinoIcon,
    iconBg: "#E6DEDD",
    duration: "4 hours",
    points: [
      "The elegant and modern Casino Iguazú is located just across the border from Brazil.",
      "Time for playing and entertainment.",
    ],
    images: [
      cassinoiguazu
    ]
  },
  {
    title: "Brazilian Barbecue (Churrasco)",
    country: "Brasil",
    icon: brazilianbarbecueIcon,
    iconBg: "#E6DEDD",
    duration: "~1 hour",
    points: [
      "The most famous speciality of southern Brazil, the churrasco can be savored with all of its typical accompaniments and a vast selection of salads and hot plates.",
    ],
    images: [
      brazilianBarbcue
    ]
  },
  {
    title: "Yacht Club (Restaurant)",
    country: "Brasil",
    icon: restaurantIcon,
    iconBg: "#E6DEDD",
    duration: "~1 hour",
    points: [
      "Option for lunch or dinner.",
      "Savor several different types of fresh fish from the Paraná basin in a rustic setting on the banks of the scenic Parana River.",
    ],
    images: [
      yatchclub
    ]
  },
  {
    title: "Gaucho Ranch",
    country: "Brasil",
    icon: brazilianbarbecueIcon,
    iconBg: "#E6DEDD",
    duration: "~1 hour",
    points: [
      "Enjoy real gaucho hospitality and culture while savoring the best of grazed beef in a traditional Brazilian Churrasco (barbecue).",
      "The Estancia maintains its typical gaucho architecture and setting and during your meal enjoy an authentic regional folkloric show with music and dancers in full gaucho costume.",
      "You may join in on the spacious dance floor.",
      "Afterwards, enjoy an exhibition of gaucho horsemanship.",
      "Playground for the children."
    ],
    images: [
      gauchoranch
    ]
  },
];

const hotels = [
  {
    title: "Hotel das Cataratas",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "Único hotel dentro do Parque Nacional Brasileiro, é um atrativo para aqueles que desejam vivenciar o magnífico espetáculo das Cataratas, cercado pela natureza tropical.",
      "Situado em frente as belíssimas quedas, este encantador hotel em estilo colonial é um prédio histórico.",
      "Propicia um ambiente de alto luxo para os mais exigentes visitantes.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Loi Suites Iguazu Hotel",
    country: "Argentina",
    icon: argentinaIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "Combinando extremo luxo com um ambiente natural, o Loi Suítes Iguazu Hotel está embutido na selva a beira do Rio Iguaçu, em uma área de preservação privada de 600 hectares.",
      "O hóspede terá a sensação de estar dentro da própria selva, porém com o conforto de cinco estrelas.",
      "Dispomos de um conjunto de piscinas, uma arquitetura deslumbrante e apartamentos com alto grau de luxo e decoração de extremo bom gosto.",
      "Desfrute de nosso Spa, restaurante gourmet, cais com deck de observação e atividades organizados como trekking, arvorismo, cavalgadas e caiaques."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Mabu Thermas & Resorts",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "O resort oferece variadas acomodações em hospedagem, além de possuir uma vasta área de lazer e espaço para eventos.",
      "Localizado entre o aeroporto e o centro da cidade, o resort está no caminho de todas as maravilhosas atrações da fronteira.",
      "O hotel oferece serviços completos de spa e em sua sofisticada área conta com termas naturais no meio de uma grande área verde.",
      "Uma estrutura funcional e sofisticada com serviço eficiente está focado na satisfação cliente para criar. Uma Experiência Memorável."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Iguazú Grand Hotel Resort & Casino",
    country: "Argentina",
    icon: argentinaIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "Um resorte que abrange elegância, prazer e entretenimento, localizado na Argentina, a 10 minutos das Cataratas.",
      "Os apartamentos oferecem o mais alto nível de conforto e luxo.",
      "O resorte é formado por uma diversificada área natural, jardins, variações gastronômicas, spa, cassino, enorme piscina, entre outros atrativos.",
      "Sua arquitetura e serviços impecáveis fazem do Iguazu Grand Hotel Resort & Casino um local que proporciona o melhor para o viajante mais exigente."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Bourbon Cataratas Convention Resorts",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "O hotel oferece uma infraestrutura perfeita para seu lazer e negócios.",
      "Localizado em Foz do Iguaçu, próximo aos principais pontos turísticos da fronteira, como as belíssemas Cataratas.",
      "O Bourbon conta com apartamentos e suítes altamente sofisticados, além de uma completa área de lazer e esportes.",
      "Dispõe de uma das mais completas infraestruturas de eventos da região."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Hotel Sheraton Iguazú Resort & Spa",
    country: "Argentina",
    icon: argentinaIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "Localizado no coração do Parque Nacional na Argentina, o Sheraton Iguazú Resort & Spa combina uma belíssema paisagem, cômodos estilizados com atendimento requintado.",
      "Desfrute também dos espaços para convenções e eventos, linda psicina com vista para as quedas das Cataratas, spa, área de esportes.",
      "Com localização privilegiada, perto das atrações das Três Fronteiras. Uma experiência sem igual para sua viagem.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Iguassu Golf & Resort",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "O cenário é um dos mais belos do planeta, o complexo de lazer faz jus ao local privilegiado onde está inserido.",
      "É nessa harmonia entre meio ambiente e infraestrutura, nessa fusão de paisagem e luxo que se encontra o Iguassu Resort.",
      "Campo de Golf regulamentar de 18 buracos com instrutores e todo equipamento para a maior comodidade para o praticante de golf.",
      "Próximo as encantadas Cataratas, ao aeroporto e a fronteira Brasil/Argentina."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Panoramic Hotel Iguazu",
    country: "Argentina",
    icon: argentinaIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "O hotel está localizado num morro próximo ao marco das Três Fronteiras e oferece uma vista panorâmica (dali o seu nome) da união dos rios Iguaçu e Paraná, os quais dividem as beiradas da Argentina, o Brasil e o Paraguai.",
      "Rodeado de jardins e águas do rio Iguaçu, é o lugar ideal para se distender e desfrutar uma vista mágica desde o conforto de um 5 estrelas.",
      "Localizado em Argentina, oferece o melhor da gastronomia exuberante desse país.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Mercure Grand Hotel Internacional Foz",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "A renomada rede Mercure garante a qualidade de uma estadia em alto estilo para os turistas e os homens de negócios que exigem competência profissional com as mais modernas instalações.",
      "São três agradáveis restaurantes preparados para satisfazer todos os gostos.",
      "Outros dois bares completam essa estrutura.",
      "Para seu lazer, dispomos de salão de jogos, sala de leitura, sauna, fitness, salão e agência de turismo.",
      "Localizado na região central da cidade de Foz do Iguaçu, com acesso rápido aos principais centros turísticos e empresariais da cidade e região."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Best Western Falls Galli Hotel",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "Colocamos às suas ordens apartamentos Luxo, Super Luxo e Suítes.",
      "Para seu entretenimento, oferecemos sala de jogos, piscina, cofee shop, restaurante internacional, e outros atrativos.",
      "Estamos localizados a 18km do Parque Nacional do Iguaçu, 16 km do Aeroporto Internacional, a 500m da Rodoviária internacional, proporcionando fácil acesso a todos os pontos turísticos da Terra das Cataratas.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Hotel Continental Inn",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "Com apartamentos e suites de luxo, ambientes modernos e requintados, o hospede é recebido com um esmerado padrão de qualidade.",
      "O hotel proporciona entretenimento diversificado como piscinas, coffee shop, fitness center, sauna, sala de jogos, playground para as crianças e dois sotificados bares.",
      "Localizado no centro de Foz do Iguaçu, entre todos os atrativos das Três Fronteiras, é um excelente ambiente para se hospedar.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Hotel Cassino",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "O Hotel Cassino é uma ótima opção de hospedagem na Terra das Cataratas.",
      "Localizado na região central de Foz do Iguaçu, onde qualidade, simpatia e bom atendimento faz parte da estadia.",
      "Oferecemos apartamentos amplos e bem equipados.",
      "O hotel dispõe ainda de sala de jogos, piscina adulto e infantil, restaurante climatizado, estacionamento fechado e seguro para veículos e ônibus."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Rafain Centro",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "Tradição na qualidade de atendimento, elegância e conforto fazem deste hotel um dos mais importantes da região.",
      "Sua infra-estrutura é composta de sala de tv, business center, fitness center, sala de reuniões, loja de souvenirs, piscinas, garagem, restaurante Ritorna, bar acquavite, área para eventos e convenções.",
      "Oferecemos todo conforto e tranquilidade em sua hospedagem.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Turrance Green Hotel",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "O hotel Torrance Green é tradicional por seu aconchegante espaço, bem como com uma equipe altamente capacitada, sempre trazendo inovações no atendimento e em sua estrutura.",
      "Estamos localizados próximo à Av. das Cataratas, no caminho para o Parque Nacional e próximo a todas atrações da região trinacional.",
      "É sinômimo de uma estadia de alto grau de conforto e tranquilidade.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "San Rafael",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "Conforto, Segurança, Praticidade, Qualidade de Atendimento, ótima Localização no centro da cidade são os principais motivos para se hospedar no hotel San Rafael.",
      "Espaço e conforto para o visitante é fundamental para uma ótima e aconchegante estadia.",
      "Nosso hotel ainda oferece piscina, salão de jogos, lan house, fitness-center, wi-fi, loja de souveniers e churrasqueira.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Hotel Carimã",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "Localizado no corredor das Cataratas, a apenas 5 minutos do Aeroporto Internacional de Foz do Iguaçu, e próximo a fronteira Brasil/Argentina.",
      "O hotel é cercado por bosques, jardins, trilhas para boas caminhadas matinais, dois belíssemos lagos, uma grandiosa área para convenções e eventos, além de dois restaurantes com vista para a piscina com uma gastronomia altamente requintada.",
      "Sua grandiosa área de lazer faz do Carimã o maior hotel do estado do Paraná.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "San Martin",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "O Hotel San Martin está localizado ao lado da entrada do Parque Nacional do Iguaçu, em meio a selva, e bem próximo ao Aeroporto Internacional de Foz do Iguaçu.",
      "O hotel oferece a seus hóspedes academia de ginástica, uma bela piscina com bar, suites luxuosas, área de esportes, e restaurantes.",
      "Uma equipe altamente treinada está pronta para lhe proporcionar uma estadia inesquecível.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Yacutinga Lodge",
    country: "Argentina",
    icon: argentinaIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "O Yacutinga Lodge encontra-se no coração da Selva Missioneira e faz divisa com os parques nacionais da Argentina e Brasil.",
      "Um paraíso para quem procura biodiversidade na fauna e na flora.",
      "O Lodge oferece excelentes comodidades de alojamento, restaurante, piscina, guias especialistas e um inventário natural que supera 400 espécies de aves e mamíferos.",
      "Ainda mantém uma política e um compromisso de baixo impacto ambiental longe do massivo fluxo de turismo que caracteriza a área das Cataratas do Iguaçu."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Aldea Lodge",
    country: "Argentina",
    icon: argentinaIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "Localizado em Puerto Iguazú, Argentina, a Aldea Lodge oferece um estilo de vida natural, para levar o hospede ao íntimo da Mãe Natureza.",
      "Relaxe, caminhe pela selva, entre em contato com a vida silvestre, se aventure no rapel ou simplesmente descubra novas experiências culinárias da mão de nosso chef.",
      "Se acomodar no Aldea Lodge é embarcar em uma viajem fascinante.",
      "Estamos a 17km das Cataratas Argentinas e a 20 km do aeroporto internacional de Puerto Iguazú."
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Recanto Park Hotel",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "Um lugar íntimo, confortável e pitoresco que reserva para você, sua família e seus amigos um ambiente sofisticado, amplas áreas de lazer e serviços de alta qualidade.",
      "São 195 apartamentos e 5 suítes especiais, todos com piso em madeira e equipados para atender ao hóspede mais exigente.",
      "Em uma área de 40.000 m² cercado de bosques com plantas nativas, o Recanto Park Hotel oferece aos seus hóspedes ambientes agradáveis, amplos e modernos incluindo: Piscinas, Sauna, Bosques, Treking, Futebol, Vôlei, Playground.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
    ]
  },
  {
    title: "Rafain Palace",
    country: "Brasil",
    icon: brazilIcon,
    iconBg: "#E6DEDD",
    isTranslation: "There are no translations available.",
    points: [
      "Muito bem localizado, o hotel Rafain Palace oferece todas as comodidades de um grande hotel de luxo, com uma super estrutura de lazer com de 63 mil m2 e uma equipe de recreação pronta para desenvolver atividades diárias que proporcionam muita diversão e interação aos nossos hóspedes.",
      "Contamos com suites econômicas e de luxo, além de um sofisticado restaurante e dois bares.",
      "O hotel Rafain Palace conta com um dos maiores e mais modernos centro de eventos da região.",
    ],
    images: [
      itaipu1, itaipu2, itaipu3
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

export { 
  services,
  technologies,
  natureTours,
  testimonials,
  projects,
  culturalTours,
  gastronomyTour,
  hotels
};
