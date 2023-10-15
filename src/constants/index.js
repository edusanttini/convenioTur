import { LoiSuites1, aldea1, aldea2, bestwetern1, bestwetern2, bourbon1, bourbon2, carima1, carima2, cataratas01, cataratas02, cataratas2, cataratasbr, cataratasbr1, cataratasbr10, cataratasbr11, cataratasbr12, cataratasbr13, cataratasbr2, cataratasbr3, cataratasbr4, cataratasbr5, cataratasbr6, cataratasbr7, cataratasbr8, cataratasbr9, comingSoon, continentalinn1, continentalinn2, damIcon, devilsthoat4, devilsthroat, devilsthroat1, devilsthroat2, devilsthroat3, eventsIcon, fallIcon, golfresort1, golfresort2, heli, heli1, heli2, heli3, hotelcassino1, hotelcassino2, hotelcataratas1, hotelcataratas2, iguazuGrand1, iguazugrand2, loisuites2, mabu1, mabu2, mabu3, mercure1, mercure2, mercure3, panoramic1, panoramic2, rafaincentro1, rafaincentro2, rafainpalace1, rafainpalace2, rafainpalace3, recanto1, recanto2, ruins3, ruins4, ruins5, ruins6, ruins7, san_martin1, san_martin2, sanrafael1, sanrafael2, sheratoniguazu1, sheratoniguazu2, templo, templo1, templo2, transferIcon, turrance1, turrance2, yacutinga1, yacutinga2 } from "../assets";
import { macuco1 } from "../assets";
import { macucoIcon } from "../assets";
import { birdpark1 } from "../assets";
import { birdpark } from "../assets";
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
import { cataratas1 } from "../assets";
import {
  carrent,
  jobit,
  tripguide,
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
  katalogo, kata1,
  bertoniMuseumIcon, bertoniMuseum,
  sportFishingIcon, sportFishing1,
  bordersIcon, borders1,
  ruralTourIcon, ruralTour1, ruralTour2, ruralTour3,
  pyIcon, py1, py2, py3,
  cataratasArg
} from "../assets";
import { useTranslation } from "react-i18next";


export const bgImg = [
  {
    id: 'kodak',
    imgUrl: cataratas,
    title: 'cataratas',
  },
];

export const navLinks = () => {
  const { t } = useTranslation();
  return [
    {
      id: "overview",
      title: t('overview'),
    },
    {
      id: "products",
      title: t('products'),
    },
    {
      id: "explore",
      title: t('explore'),
    },
    {
      id: "map",
      title: t('map'),
    },
    {
      id: "about",
      title: t('about'),
    },
    {
      id: "contact",
      title: t('contact'),
    },
  ]
}

export const exploreCountries = () => {
  const { t } = useTranslation();
  return [
    {
      id: 'Arg',
      imgUrl: flagarg,
      title: t('arg'),
      url: 'arg'
    },
    {
      id: 'Br',
      imgUrl: flagbr,
      title: t('br'),
      url: 'br'
    },
    {
      id: 'Py',
      imgUrl: flagpy,
      title: t('py'),
      url: 'py'
    },
  ]
}

const services = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('service_card_events'),
      icon: eventsIcon,
      img: cardEvents,
      url: "eventsandincentives",
    },
    {
      title: t('service_card_nature'),
      icon: fallIcon,
      img: cardCataratas,
      url: "naturetours",
    },
    {
      title: t('service_card_Transfer'),
      icon: transferIcon,
      img: cardTransfer,
      url: "transferservices",
    },
    {
      title: t('service_card_gastronomy'),
      icon: restaurantIcon,
      img: cardGastronomia,
      url: "gastronomy",
    },
    {
      title: t('br_dam_title'),
      icon: damIcon,
      img: itaipu2,
      url: "itaipu",
    },
    {
      title: t('arg_ruins_title'),
      icon: ruinsIcon,
      img: ruins2,
      url: "ruins",
    },
    {
      title: t('br_kata_title'),
      icon: katalogo,
      img: kata1,
      url: "katamaram",
    },
    {
      title: t('br_bertoni_museum_sub_title'),
      icon: bertoniMuseumIcon,
      img: bertoniMuseum,
      url: "museum",
    },
    {
      title: t('br_fish_title'),
      icon: sportFishingIcon,
      img: sportFishing1,
      url: "fishing",
    },
    {
      title: t('br_marco_title'),
      icon: bordersIcon,
      img: borders1,
      url: "borders",
    },
    {
      title: t('arg_cassino_title'),
      icon: cassinoIcon,
      img: cassinoiguazu,
      url: "cassino",
    },
    {
      title: t('br_rural_title'),
      icon: ruralTourIcon,
      img: ruralTour2,
      url: "rural",
    },
  ]
}

const natureTours = () => {
  const { t } = useTranslation();
  return [
    {
      id: "brfall",
      title: t('br_falls_title'),
      country: t('br'),
      icon: waterfall,
      iconBg: "#E6DEDD",
      duration: `3 ${t('hours')}`,
      points: [
        t('br_falls_t1'),
        t('br_falls_t2'),
        t('br_falls_t3'),
        t('br_falls_t4'),
        t('br_falls_t5'),
      ],
      images: [
        cataratasbr, cataratasbr1, cataratasbr2, cataratasbr3, cataratasbr4, cataratasbr5,
        cataratasbr6, cataratasbr7, cataratasbr8, cataratasbr9, cataratasbr10, cataratasbr11,
        cataratasbr12, cataratasbr13, devilsthoat4, devilsthroat, devilsthroat1, devilsthroat2,
        devilsthroat3
      ]
    },
    {
      id: "argfall",
      title: t('arg_falls_title'),
      country: t('arg'),
      icon: waterfall,
      iconBg: "#E6DEDD",
      duration: `7 ${t('hours')}`,
      points: [
        t('arg_falls_t1'),
        t('arg_falls_t2'),
        t('arg_falls_t3'),
        t('arg_falls_t4'),
        t('arg_falls_t5'),
      ],
      images: [
        cataratasArg, devilsthoat4, devilsthroat, devilsthroat1, devilsthroat2,
        devilsthroat3
      ]
    },
    {
      id: "macuco",
      title: t('br_macuco_title'),
      country: t('br'),
      icon: macucoIcon,
      iconBg: "#E6DEDD",
      duration: `2 ${t('hours')}`,
      points: [
        t('br_macuco_t1'),
        t('br_macuco_t2'),
      ],
      images: [
        macuco1
      ]
    },
    {
      id: "gadv",
      title: t('arg_gran_adventure_title'),
      country: t('arg'),
      icon: macucoIcon,
      iconBg: "#E6DEDD",
      duration: `2 ${t('hours')}`,
      points: [
        t('arg_gran_adventure_t1'),
        t('arg_gran_adventure_t2'),
        t('arg_gran_adventure_t3'),
        t('arg_gran_adventure_t4'),
        t('arg_gran_adventure_t5'),
      ],
      images: [
        grandadv1
      ]
    },
    {
      id: "birdpark",
      title: t('br_bird_park_title'),
      country: t('br'),
      icon: birdparkicon,
      iconBg: "#E6DEDD",
      duration: `1 ${t('hour')}`,
      points: [
        t('br_bird_park_t1'),
        t('br_bird_park_t2'),
      ],
      images: [
        birdpark1, birdpark2, birdpark
      ]
    },
    {
      id: "heli",
      title: t('br_heli_flight_title'),
      country: t('br'),
      icon: panoramicheliIcon,
      iconBg: "#E6DEDD",
      duration: `10 ${t('minutes')}`,
      points: [
        t('br_heli_flight_t1')
      ],
      images: [
        heli, heli1, heli2, heli3
      ]
    },
    {
      id: "eadv",
      title: t('br_eco_trail_title'),
      country: t('br'),
      icon: ecoadventureicon,
      iconBg: "#E6DEDD",
      duration: `3 ${t('hours')} ${t('and')} 30 ${t('minutes')}`,
      points: [
        t('br_eco_trail_t1'),
        t('br_eco_trail_t2'),
        t('br_eco_trail_t3'),
        t('br_eco_trail_t4'),
        t('br_eco_trail_t5')
      ],
      images: [
        ecoadventure1, ecoadventure2, ecoadventure3
      ]
    },
    {
      id: "ecoadv",
      title: t('br_eco_black_title'),
      country: t('br'),
      icon: ecoadventureBlackIcon,
      iconBg: "#E6DEDD",
      duration: `4 ${t('hours')}`,
      points: [
        t('br_eco_black_t1'),
        t('br_eco_black_t2'),
        t('br_eco_black_t3'),
        t('br_eco_black_t4'),
        t('br_eco_black_t5')
      ],
      images: [
        ecoadventureBlack1, ecoadventureBlack2
      ]
    },
    {
      id: "otherAtt",
      title: t('nature_others_title'),
      country: `${t('br')} & ${t('arg')}`,
      icon: otherAttractionsIcon,
      iconBg: "#E6DEDD",
      duration: "null",
      points: [
        t('nature_others_t1'),
        t('nature_others_t2'),
        t('nature_others_t3'),
        t('nature_others_t4'),
        t('nature_others_t5'),
        t('nature_others_t6'),
        t('nature_others_t7'),
        t('nature_others_t8'),
        t('nature_others_t9'),
        t('nature_others_t10')
      ],
      images: [
        otherAttractions1, otherAttractions2
      ]
    }  
  ];
}

const culturalTours = () => {
  const { t } = useTranslation();
  return [
    {
      id: "itaipu",
      title: t('br_dam_title'),
      country: t('br'),
      icon: damIcon,
      iconBg: "#E6DEDD",
      duration: `2 ${t('hours')} ${t('and')} 30 ${t('minutes')}`,
      points: [
        t('br_dam_t1'),
        t('br_dam_t2'),
        t('br_dam_t3')
      ],
      images: [
        itaipu1, itaipu2, itaipu3
      ]
    },
    {
      id: "ruins",
      title: t('arg_ruins_title'),
      country: t('arg'),
      icon: ruinsIcon,
      iconBg: "#E6DEDD",
      duration: t('full_day'),
      points: [
        t('arg_ruins_t1'),
        t('arg_ruins_t2'),
        t('arg_ruins_t3'),
        t('arg_ruins_t4'),
        t('arg_ruins_t5')
      ],
      images: [
        ruins1, ruins2, ruins3, ruins4, ruins5, ruins6, ruins7
      ]
    },
    {
      id: "kata",
      title: t('br_kata_title'),
      country: t('br'),
      icon: katalogo,
      iconBg: "#E6DEDD",
      duration: `3 ${t('hours')}`,
      points: [
        t('br_kata_t1'),
        t('br_kata_t2'),
        t('br_kata_t3'),
        t('br_kata_t4')
      ],
      images: [
        kata1
      ]
    },
    {
      id: "museum",
      title: t('br_bertoni_museum_sub_title'),
      country: t('br'),
      icon: bertoniMuseumIcon,
      iconBg: "#E6DEDD",
      duration: `4 ${t('hours')}`,
      points: [
        t('br_bertoni_museum_t1'),
        t('br_bertoni_museum_t2'),
        t('br_bertoni_museum_t3')
      ],
      images: [
        bertoniMuseum
      ]
    },
    {
      id: "fishing",
      title: t('br_fish_title'),
      country: t('br'),
      icon: sportFishingIcon,
      iconBg: "#E6DEDD",
      duration: `4 ${t('hours')}`,
      points: [
        t('br_fish_t1'),
        t('br_fish_t2'),
        t('br_fish_t3')
      ],
      images: [
        sportFishing1
      ]
    },
    {
      id: "borders",
      title: t('br_marco_title'),
      country: t('br'),
      icon: bordersIcon,
      iconBg: "#E6DEDD",
      duration: `1 ${t('hour')}`,
      points: [
        t('br_marco_t1'),
        t('br_marco_t2')
      ],
      images: [
        borders1
      ]
    },
    {
      id: "rural",
      title: t('br_rural_title'),
      country: t('br'),
      icon: ruralTourIcon,
      iconBg: "#E6DEDD",
      duration: t('full_day'),//overnightoptional
      points: [
        t('br_rural_t1'),
        t('br_rural_t2'),
        t('br_rural_t3'),
        t('br_rural_t4')
      ],
      images: [
        ruralTour1, ruralTour2, ruralTour3
      ]
    }
  ]
};

const gastronomyTour = () => {
  const { t } = useTranslation();
  return [
    {
      id: "portocan",
      title: t('br_porto_canoas_title'),
      country: t('br'),
      icon: restaurantIcon,
      iconBg: "#E6DEDD",
      duration: `~1 ${t('hour')}`,
      points: [
        t('br_porto_canoas_t1'),
        t('br_porto_canoas_t2'),
        t('br_porto_canoas_t3'),
        t('br_porto_canoas_t4'),
        t('br_porto_canoas_t5')
      ],
      images: [
        portocanoas1
      ]
    },
    {
      id: "cassino",
      title: t('arg_cassino_title'),
      country: t('arg'),
      icon: cassinoIcon,
      iconBg: "#E6DEDD",
      duration: `4 ${t('hours')}`,
      points: [
        t('arg_cassino_t1'),
        t('arg_cassino_t2')
      ],
      images: [
        cassinoiguazu
      ]
    },
    {
      id: "brbarbcue",
      title: t('br_barbcue_title'),
      country: t('br'),
      icon: brazilianbarbecueIcon,
      iconBg: "#E6DEDD",
      duration: `~1 ${t('hour')}`,
      points: [
        t('br_barbcue_t1')
      ],
      images: [
        brazilianBarbcue
      ]
    }
  ]
};

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
      hotelcataratas1, hotelcataratas2
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
      loisuites2, LoiSuites1
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
      mabu1, mabu2, mabu3
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
      iguazuGrand1, iguazugrand2
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
      bourbon1, bourbon2
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
      sheratoniguazu1, sheratoniguazu2
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
      golfresort1, golfresort2
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
      panoramic1, panoramic2
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
      mercure1, mercure2, mercure3
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
      bestwetern1, bestwetern2
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
      continentalinn1, continentalinn2
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
      hotelcassino1, hotelcassino2
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
      rafaincentro1, rafaincentro2
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
      turrance1, turrance2
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
      sanrafael1, sanrafael2
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
      carima1, carima2
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
      san_martin1, san_martin2
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
      yacutinga1, yacutinga2
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
      aldea1, aldea2
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
      recanto1, recanto2
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
      rafainpalace1, rafainpalace2, rafainpalace3
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

const map = () => {
  const { t } = useTranslation();
  return [
    {
      id: "ruins",
      name: t('ruins_title'),
      local: t('br'),
      description: [
        t('ruins_t1'),
        t('ruins_t2'),
        t('ruins_t3'),
        t('ruins_t4'),
        t('ruins_t5'),
      ],
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,676.78,2199.55)",
      rideIndex: "ride-point-1",
      path: "br",
      image: cataratas01
    },
    {
      id: "macuco",
      name: t('br_macuco_title'),
      local: t('br'),
      description: t('macuco_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1854.78,1969.55)",
      rideIndex: "ride-point-1",
      path: "br",
      image: macuco1
    },
    {
      id: "marcobr",
      name: t('br_marco_title'),
      local: t('br'),
      description: t('br_marco_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1216.1,1565.53)",
      rideIndex: "ride-point-10",
      path: "br",
      image: borders1
    },
    {
      id: "marcoarg",
      name: t('br_marco_title'),
      local: t('arg'),
      description: t('br_marco_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1246.29,1702.09)",
      rideIndex: "ride-point-4",
      path: "arg",
      image: bordersIcon
    },
    {
      id: "fallbr",
      name: t('br_falls_title'),
      local: t('br'),
      description: t('br_fall_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1900.29,2036.3)",
      rideIndex: "ride-point-0",
      path: "br",
      image: cataratas02
    },
    {
      id: "fallarg",
      name: t('arg_fall_title'),
      local: t('arg'),
      description: t('br_fall_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1798.38,2071.09)",
      rideIndex: "ride-point-0",
      path: "arg",
      image: cataratasArg
    },
    {
      id: "birdp",
      name: t('br_bird_park_title'),
      local: t('br'),
      description: t('birdp_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1830.96,1869.4)",
      rideIndex: "ride-point-2",
      path: "br",
      image: birdpark
    },
    {
      id: "helis",
      name: t('br_heli_flight_title'),
      local: t('br'),
      description: t('helip_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1753.1,1715.67)",
      rideIndex: "ride-point-3",
      path: "br",
      image: heli
    },
    {
      id: "moviec",
      name: t('br_moviecar_title'),
      local: t('br'),
      description: t('moviec_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1658.02,1605.18)",
      rideIndex: "ride-point-18",
      path: "br",
      image: ""
    },
    {
      id: "bertoni",
      name: t('br_bertoni_museum_sub_title'),
      local: t('br'),
      description: t('bertoni_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1224.67,1326.56)",
      rideIndex: "ride-point-8",
      path: "br",
      image: bertoniMuseum
    },
    {
      id: "dreamsp",
      name: t('br_dreampark_title'),
      local: t('br'),
      description: t('dreamp_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1558.95,1644.01)",
      rideIndex: "ride-point-17",
      path: "br",
      image: ""
    },
    {
      id: "itaipu",
      name: t('br_dam_title'),
      local: t('br'),
      description: t('itaipu_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1299.54,947.249)",
      rideIndex: "ride-point-6",
      path: "br",
      image: itaipu1
    },
    {
      id: "templob",
      name: t('br_templo_title'),
      local: t('br'),
      description: t('templo_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1149.62,1110.39)",
      rideIndex: "ride-point-14",
      path: "br",
      image: ""
    },
    {
      id: "mesq",
      name: t('br_mesquita_title'),
      local: t('br'),
      description: t('mesq_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1245.69,1167.23)",
      rideIndex: "ride-point-15",
      path: "br",
      image: ""
    },
    {
      id: "cath",
      name: t('br_cated_title'),
      local: t('br'),
      description: t('cath_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1367.79,1134.6)",
      rideIndex: "ride-point-16",
      path: "br",
      image: ""
    },
    {
      id: "marcopy",
      name: t('br_marco_title'),
      local: "Paraguay",
      description: t('br_marco_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1143.44,1579.4)",
      rideIndex: "ride-point-1",
      path: "py",
      image: bordersIcon
    },
    {
      id: "moday",
      name: t('py_monday_title'),
      local: "Paraguay",
      description: t('moday_desc'),
      keyword: t('here'),
      coordinates: "matrix(0.26779,0,0,0.26779,1042.33,1530.44)",
      rideIndex: "ride-point-2",
      path: "py",
      image: ""
    },
  ]
};

const argentinaRides = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('arg_falls_title'),
      countryKey: "arg",
      country: t('arg'),
      icon: cataratasArg,
      iconBg: "#E6DEDD",
      duration: `7 ${t('hours')}`,
      points: [
        t('arg_falls_t1'),
        t('arg_falls_t2'),
        t('arg_falls_t3'),
        t('arg_falls_t4'),
        t('arg_falls_t5'),
      ],
      images: [
        cataratasArg, devilsthoat4, devilsthroat, devilsthroat1, devilsthroat2, devilsthroat3
      ]
    },
    {
      title: t('arg_gran_adventure_title'),
      countryKey: "arg",
      country: t('arg'),
      icon: macucoIcon,
      iconBg: "#E6DEDD",
      duration: `2 ${t('hours')}`,
      points: [
        t('arg_gran_adventure_t1'),
        t('arg_gran_adventure_t2'),
        t('arg_gran_adventure_t3'),
        t('arg_gran_adventure_t4'),
        t('arg_gran_adventure_t5'),
      ],
      images: [
        grandadv1
      ]
    },
    {
      title: t('arg_ruins_title'),
      countryKey: "arg",
      country: t('arg'),
      icon: ruinsIcon,
      iconBg: "#E6DEDD",
      duration: t('full_day'),
      points: [
        t('arg_ruins_t1'),
        t('arg_ruins_t2'),
        t('arg_ruins_t3'),
        t('arg_ruins_t4'),
        t('arg_ruins_t5'),
      ],
      images: [
        ruins1, ruins2, ruins3, ruins4, ruins5, ruins6, ruins7
      ]
    },
    {
      title: t('arg_cassino_title'),
      countryKey: "arg",
      country: t('arg'),
      icon: cassinoIcon,
      iconBg: "#E6DEDD",
      duration: `4 ${t('hours')}`,
      points: [
        t('arg_cassino_t1'),
        t('arg_cassino_t2'),
      ],
      images: [
        cassinoiguazu
      ]
    },
    {
      title: t('py_marco_title'),
      countryKey: "arg",
      country: t('arg'),
      icon: cassinoIcon,
      iconBg: "#E6DEDD",
      duration: `4 ${t('hours')}`,
      points: [
        t('arg_marco_t1'),
        t('arg_marco_t2'),
        t('arg_marco_t3'),
      ],
      images: [
        comingSoon
      ]
    },
  ]
}

const brasilRides = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('br_falls_title'),
      countryKey: "br",
      country: t('br'),
      icon: cataratas01,
      iconBg: "#E6DEDD",
      duration: `3 ${t('hours')}`,
      points: [
        t('br_falls_t1'),
        t('br_falls_t2'),
        t('br_falls_t3'),
        t('br_falls_t4'),
        t('br_falls_t5'),
      ],
      images: [
        cataratasbr, cataratasbr2, cataratasbr3, cataratasbr4, cataratasbr5, cataratasbr6,
        cataratasbr7, cataratasbr8, cataratasbr9, cataratasbr10, cataratasbr11, cataratasbr12,
        cataratasbr13
      ]
    },
    {
      title: t('br_macuco_title'),
      countryKey: "br",
      country: t('br'),
      icon: macucoIcon,
      iconBg: "#E6DEDD",
      duration: `2 ${t('hours')}`,
      points: [
        t('br_macuco_t1'),
        t('br_macuco_t2'),
      ],
      images: [
        devilsthoat4, macuco1
      ]
    },
    {
      title: t('br_bird_park_title'),
      countryKey: "br",
      country: t('br'),
      icon: birdparkicon,
      iconBg: "#E6DEDD",
      duration: `1 ${t('hour')}`,
      points: [
        t('br_bird_park_t1'),
        t('br_bird_park_t2'),
      ],
      images: [
        birdpark, birdpark1, birdpark2
      ]
    },
    {
      title: t('br_heli_flight_title'),
      countryKey: "br",
      country: t('br'),
      icon: panoramicheliIcon,
      iconBg: "#E6DEDD",
      duration: `10 ${t('to')} 35 ${t('minutes')}`,
      points: [
        t('br_heli_flight_t1'),
        t('br_heli_flight_t2'),
      ],
      images: [
        heli, heli1, heli2, heli3
      ]
    },
    {
      title: t('br_eco_trail_title'),
      countryKey: "br",
      country: t('br'),
      icon: ecoadventureicon,
      iconBg: "#E6DEDD",
      duration: `3 ${t('hours')} ${t('and')} 30 ${t('minutes')}`,
      points: [
        t('br_eco_trail_t1'),
        t('br_eco_trail_t2'),
        t('br_eco_trail_t3'),
        t('br_eco_trail_t4'),
        t('br_eco_trail_t5'),
      ],
      images: [
        ecoadventure1, ecoadventure2, ecoadventure3
      ]
    },
    {
      title: t('br_eco_black_title'),
      countryKey: "br",
      country: t('br'),
      icon: ecoadventureBlackIcon,
      iconBg: "#E6DEDD",
      duration: `4 ${t('hours')}`,
      points: [
        t('br_eco_black_t1'),
        t('br_eco_black_t2'),
        t('br_eco_black_t3'),
        t('br_eco_black_t4'),
        t('br_eco_black_t5'),
      ],
      images: [
        ecoadventureBlack1, ecoadventureBlack2
      ]
    },
    {
      title: t('br_dam_title'),
      countryKey: "br",
      country: t('br'),
      icon: itaipuLogo,
      iconBg: "#E6DEDD",
      duration: `2 ${t('hours')} ${t('and')} 30 ${t('minutes')}`,
      points: [
        t('br_dam_t1'),
        t('br_dam_t2'),
        t('br_dam_t3'),
      ],
      images: [
        itaipu1, itaipu2, itaipu3
      ]
    },
    {
      title: t('br_kata_title'),
      countryKey: "br",
      country: t('br'),
      icon: katalogo,
      iconBg: "#E6DEDD",
      duration: `3 ${t('hours')}`,
      points: [
        t('br_kata_t1'),
        t('br_kata_t2'),
        t('br_kata_t3'),
        t('br_kata_t4'),
      ],
      images: [
        kata1
      ]
    },
    {
      title: t('br_bertoni_museum_title'),
      countryKey: "br",
      country: t('br'),
      icon: bertoniMuseumIcon,
      iconBg: "#E6DEDD",
      duration: `4 ${t('hours')}`,
      points: [
        t('br_bertoni_museum_t1'),
        t('br_bertoni_museum_t2'),
        t('br_bertoni_museum_t3'),
      ],
      images: [
        bertoniMuseum
      ]
    },
    {
      title: t('br_fish_title'),
      countryKey: "br",
      country: t('br'),
      icon: sportFishingIcon,
      iconBg: "#E6DEDD",
      duration: `4 ${t('hours')}`,
      points: [
        t('br_fish_t1'),
        t('br_fish_t2'),
        t('br_fish_t3'),
      ],
      images: [
        sportFishing1
      ]
    },
    {
      title: t('br_marco_title'),
      countryKey: "br",
      country: t('br'),
      icon: bordersIcon,
      iconBg: "#E6DEDD",
      duration: `1 ${t('hour')}`,
      points: [
        t('br_marco_t1'),
        t('br_marco_t2'),
      ],
      images: [
        borders1
      ]
    },
    {
      title: t('br_rural_title'),
      countryKey: "br",
      country: t('br'),
      icon: ruralTourIcon,
      iconBg: "#E6DEDD",
      duration: t('full_day'),
      points: [
        t('br_rural_t1'),
        t('br_rural_t2'),
        t('br_rural_t3'),
        t('br_rural_t4'),
      ],
      images: [
        ruralTour1, ruralTour2, ruralTour3
      ]
    },
    {
      title: t('br_porto_canoas_title'),
      countryKey: "br",
      country: t('br'),
      icon: restaurantIcon,
      iconBg: "#E6DEDD",
      duration: `~1 ${t('hour')}`,
      points: [
        t('br_porto_canoas_t1'),
        t('br_porto_canoas_t2'),
        t('br_porto_canoas_t3'),
        t('br_porto_canoas_t4'),
        t('br_porto_canoas_t5'),
      ],
      images: [
        portocanoas1
      ]
    },
    {
      title: t('br_barbcue_title'),
      countryKey: "br",
      country: t('br'),
      icon: brazilianbarbecueIcon,
      iconBg: "#E6DEDD",
      duration: `~1 ${t('hour')}`,
      points: [
        t('br_barbcue_t1'),
      ],
      images: [
        brazilianBarbcue
      ]
    },
    {
      title: t('br_templo_title'),
      countryKey: "br",
      country: t('br'),
      icon: brazilianbarbecueIcon,
      iconBg: "#E6DEDD",
      duration: `~1 ${t('hour')}`,
      points: [
        t('br_templo_t1'),
        t('br_templo_t2'),
        t('br_templo_t3'),
      ],
      images: [
        templo, templo1, templo2
      ]
    },
    {
      title: t('br_mesquita_title'),
      countryKey: "br",
      country: t('br'),
      icon: brazilianbarbecueIcon,
      iconBg: "#E6DEDD",
      duration: `~1 ${t('hour')}`,
      points: [
        t('br_mesquita_t1'),
        t('br_mesquita_t2'),
        t('br_mesquita_t3'),
      ],
      images: [
        comingSoon
      ]
    },
    {
      title: t('br_cated_title'),
      countryKey: "br",
      country: t('br'),
      icon: brazilianbarbecueIcon,
      iconBg: "#E6DEDD",
      duration: `~1 ${t('hour')}`,
      points: [
        t('br_cated_t1'),
        t('br_cated_t2'),
        t('br_cated_t3'),
      ],
      images: [
        comingSoon
      ]
    },
    {
      title: t('br_dreampark_title'),
      countryKey: "br",
      country: t('br'),
      icon: brazilianbarbecueIcon,
      iconBg: "#E6DEDD",
      duration: `~1 ${t('hour')}`,
      points: [
        t('br_dreampark_t1'),
        t('br_dreampark_t2'),
        t('br_dreampark_t3'),
      ],
      images: [
        comingSoon
      ]
    },
    {
      title: t('br_moviecar_title'),
      countryKey: "br",
      country: t('br'),
      icon: brazilianbarbecueIcon,
      iconBg: "#E6DEDD",
      duration: `~1 ${t('hour')}`,
      points: [
        t('br_moviecar_t1'),
        t('br_moviecar_t2'),
        t('br_moviecar_t3'),
      ],
      images: [
        comingSoon
      ]
    },
  ]
} 

const paraguayRides = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('py_visit_title'),
      countryKey: "py",
      country: t('py'),
      icon: cataratas01,
      iconBg: "#E6DEDD",
      duration: `3 ${t('hours')}`,
      points: [
        t('py_visit_t1'),
        t('py_visit_t2'),
        t('py_visit_t3'),
        t('py_visit_t4'),
      ],
      images: [
        py1, py2, py3
      ]
    },
    {
      title: t('py_marco_title'),
      countryKey: "py",
      country: t('py'),
      icon: macucoIcon,
      iconBg: "#E6DEDD",
      duration: `2 ${t('hours')}`,
      points: [
        t('py_marco_t1'),
        t('py_marco_t2'),
        t('py_marco_t3'),
      ],
      images: [
        comingSoon
      ]
    },
    {
      title: t('py_monday_title'),
      countryKey: "py",
      country: t('py'),
      icon: birdparkicon,
      iconBg: "#E6DEDD",
      duration: `1 ${t('hour')}`,
      points: [
        t('py_monday_t1'),
        t('py_monday_t2'),
      ],
      images: [
        comingSoon
      ]
    },
  ]
} 

export { 
  services,
  natureTours,
  testimonials,
  projects,
  culturalTours,
  gastronomyTour,
  hotels,
  argentinaRides,
  map,
  brasilRides,
  paraguayRides
};

export const startingFeatures = () => {
  const { t } = useTranslation();
  return [
    t('star_steps_first'),
    t('star_steps_sec'),
    t('star_steps_thi'),
  ]
} 

