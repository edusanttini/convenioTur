import { cataratas01, cataratas02, cataratasbr, cataratasbr1, cataratasbr10, cataratasbr11, cataratasbr12, cataratasbr13, cataratasbr2, cataratasbr3, cataratasbr4, cataratasbr5, cataratasbr6, cataratasbr7, cataratasbr8, cataratasbr9, comingSoon, damIcon, devilsthoat4, devilsthroat, devilsthroat1, devilsthroat2, devilsthroat3, eventsIcon, fallIcon, heli, heli1, heli2, heli3, ruins3, ruins4, ruins5, ruins6, ruins7, templo, templo1, templo2, transferIcon} from "../assets";
import { macuco1 } from "../assets";
import { macucoIcon } from "../assets";
import { birdpark1 } from "../assets";
import { birdpark } from "../assets";
import { ecoadventure1 } from "../assets";
import { ecoadventure3 } from "../assets";
import { ecoadventureBlackIcon } from "../assets";
import { ecoadventureBlack2 } from "../assets";
import { otherAttractions1 } from "../assets";
import { restaurantIcon } from "../assets";
import { cassinoIcon } from "../assets";
import { brazilianbarbecueIcon } from "../assets";
import { brazilianBarbcue } from "../assets";
import { cassinoiguazu } from "../assets";
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
import {
  flagpy,
  flagbr,
  flagarg,
  cataratas,
  cardCataratas,
  cardTransfer,
  cardGastronomia,
  cardEvents,
  waterfall,
  itaipuLogo, itaipu1, itaipu2, itaipu3,
  ruinsIcon, ruins1, ruins2,
  katalogo, kata1,
  bertoniMuseumIcon, bertoniMuseum,
  sportFishingIcon, sportFishing1,
  bordersIcon, borders1,
  ruralTourIcon, ruralTour1, ruralTour2, ruralTour3,
  py1, py2, py3,
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
  culturalTours,
  gastronomyTour,
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

