import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { yellowText } from "../globalColorScheme";
import {CEOTxt} from "./Util/base64Images"
import { useTranslation } from "react-i18next";
import { enio } from "../assets";


const Papyrus = () => {
    const base64Img = "data:image/png;base64," + CEOTxt;
    const { t } = useTranslation();
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="1280.000000pt" height="1198.000000pt" viewBox="0 0 1280.000000 1198.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1198.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M1753 11958 c-55 -62 -100 -294 -116 -598 l-2 -45 -59 -3 c-80 -4
                        -144 11 -205 49 -73 46 -124 48 -306 10 -173 -35 -272 -47 -478 -57 l-149 -6
                        -36 35 c-66 64 -132 80 -213 52 -84 -30 -139 -108 -139 -200 0 -189 218 -285
                        350 -154 l31 32 182 -6 c184 -6 317 -22 484 -57 144 -31 193 -28 278 19 76 42
                        161 60 228 47 l34 -6 7 -123 c16 -298 75 -532 136 -532 61 0 111 157 140 444
                        5 57 10 125 10 152 l0 49 123 0 123 0 17 -128 c22 -167 48 -253 88 -286 27
                        -23 40 -26 107 -27 84 -1 178 -12 188 -22 4 -4 8 -104 9 -224 2 -120 8 -285
                        14 -368 6 -82 15 -238 20 -345 4 -116 13 -205 20 -218 6 -12 24 -25 39 -28 83
                        -19 106 -28 134 -53 43 -38 41 -73 -5 -134 -20 -27 -59 -66 -86 -88 -28 -21
                        -56 -49 -63 -61 -16 -31 -16 -52 27 -1438 41 -1325 55 -1998 55 -2610 0 -814
                        -32 -1640 -85 -2210 -22 -228 -20 -293 8 -325 34 -39 86 -44 141 -11 24 14 52
                        26 61 26 10 0 34 -18 55 -41 31 -34 46 -42 84 -46 25 -3 51 -12 57 -19 32 -39
                        -47 -145 -119 -159 -20 -4 -83 -8 -140 -10 -118 -4 -130 -9 -189 -86 -65 -87
                        -94 -203 -132 -541 -19 -170 -22 -180 -85 -283 -44 -71 -80 -183 -102 -309 -9
                        -50 -17 -92 -19 -94 -2 -2 -78 -6 -169 -9 -137 -5 -166 -4 -170 8 -2 8 -9 79
                        -15 159 -23 306 -75 485 -141 485 -61 0 -120 -234 -136 -532 l-7 -123 -31 -2
                        c-107 -5 -152 3 -228 43 -96 49 -129 50 -328 10 -178 -36 -323 -51 -493 -51
                        l-129 0 -30 30 c-129 129 -348 32 -348 -155 0 -190 224 -285 352 -149 l27 29
                        193 -7 c194 -6 309 -20 492 -59 132 -29 185 -23 266 26 59 36 69 38 161 43
                        l99 5 0 -66 c0 -85 17 -251 36 -356 31 -173 80 -270 122 -245 27 16 69 112 86
                        197 16 76 43 302 48 402 l3 50 140 3 c77 2 154 0 171 -3 l30 -5 12 -100 c23
                        -197 52 -280 108 -317 48 -31 512 -35 3154 -24 1383 6 3069 11 3745 11 1203 0
                        1231 0 1262 20 57 34 106 170 119 331 l7 78 41 6 c23 4 64 5 91 3 l50 -3 3
                        -55 c10 -222 54 -473 95 -544 32 -57 51 -65 80 -38 56 53 104 292 120 602 l2
                        45 90 -1 c86 -1 94 -3 168 -42 93 -49 130 -53 267 -22 176 39 343 58 567 62
                        l112 3 33 -32 c64 -62 148 -79 223 -44 169 78 165 324 -7 395 -74 31 -158 14
                        -216 -44 l-30 -30 -129 0 c-170 0 -315 15 -493 51 -200 40 -236 39 -324 -10
                        -71 -39 -126 -49 -232 -43 l-31 2 -7 122 c-15 291 -74 527 -133 536 -35 5 -71
                        -54 -98 -161 -25 -99 -55 -334 -55 -431 0 -30 -5 -58 -10 -61 -6 -4 -46 -3
                        -89 0 l-78 7 -6 183 c-8 264 -17 278 -176 290 -134 10 -136 14 -145 181 -4 71
                        -14 237 -22 369 -12 188 -15 392 -12 940 1 385 2 920 1 1188 -2 447 -4 492
                        -20 525 -25 52 -70 74 -166 82 -69 6 -83 11 -98 31 -55 74 -62 79 -117 95 -58
                        17 -92 38 -92 59 0 6 14 24 31 41 55 51 55 65 4 174 -57 121 -55 128 35 145
                        26 5 51 24 96 71 l60 64 96 0 c83 0 97 3 113 20 18 20 19 62 20 903 1 485 7
                        1031 14 1212 35 1010 82 2031 111 2410 24 308 40 630 34 665 -4 18 6 39 35 77
                        56 75 111 257 111 369 l0 44 135 0 135 0 0 -55 c0 -98 30 -333 55 -432 27
                        -107 63 -166 98 -161 59 9 118 245 133 534 l7 122 38 5 c63 8 162 -8 205 -35
                        94 -57 138 -61 319 -23 171 35 266 45 467 52 l177 6 31 -32 c78 -77 189 -83
                        271 -13 128 110 95 312 -60 367 -81 28 -147 12 -213 -52 l-36 -35 -149 6
                        c-206 10 -305 22 -478 57 -182 38 -233 36 -306 -10 -61 -38 -125 -53 -205 -49
                        l-59 3 -2 45 c-16 310 -64 549 -120 602 -29 27 -48 19 -80 -38 -42 -74 -93
                        -368 -93 -541 l0 -63 -117 0 c-65 0 -123 4 -129 8 -7 4 -13 70 -17 172 -7 173
                        -17 229 -43 251 -14 11 -374 17 -1978 31 -1078 9 -2905 26 -4059 37 -1763 18
                        -2103 19 -2130 7 -89 -37 -180 -218 -203 -403 -13 -108 -6 -103 -144 -103
                        l-120 0 0 58 c0 77 -26 304 -45 397 -24 116 -68 205 -100 205 -6 0 -21 -10
                        -32 -22z"/>
                    </g>
                    <text className="font-director-message-body" x="375" y="170" fontSize="38" fill="white">
                        {t('txt_1')}
                    </text>
                    <text className="font-director-message-body" x="325" y="250" fontSize="22" fill="white">
                        {t('txt_2')}
                    </text>
                    <text className="font-director-message-body" x="300" y="280" fontSize="22" fill="white">
                        {t('txt_3')}
                    </text>
                    <text className="font-director-message-body" x="300" y="310" fontSize="22" fill="white">
                        {t('txt_4')}
                    </text>
                    <text className="font-director-message-body" x="300" y="340" fontSize="22" fill="white">
                        {t('txt_5')}
                    </text>
                    <text className="font-director-message-body" x="300" y="370" fontSize="22" fill="white">
                        {t('txt_6')}
                    </text>
                    <text className="font-director-message-body" x="300" y="400" fontSize="22" fill="white">
                        {t('txt_7')}
                    </text>
                    <text className="font-director-message-body" x="300" y="430" fontSize="22" fill="white">
                        {t('txt_8')}
                    </text>
                    <text className="font-director-message-body" x="300" y="460" fontSize="22" fill="white">
                        {t('txt_9')}
                    </text>
                    <text className="font-director-message-body" x="300" y="490" fontSize="22" fill="white">
                        {t('txt_10')}
                    </text>
                    <text className="font-director-message-body" x="300" y="520" fontSize="22" fill="white">
                        {t('txt_11')}
                    </text>
                    <text className="font-director-message-body" x="325" y="550" fontSize="22" fill="white">
                        {t('txt_12')}
                    </text>
                    <text className="font-director-message-body" x="300" y="580" fontSize="22" fill="white">
                        {t('txt_13')}
                    </text>
                    <text className="font-director-message-body" x="300" y="610" fontSize="22" fill="white">
                        {t('txt_14')}
                    </text>
                    <text className="font-director-message-body" x="300" y="640" fontSize="22" fill="white">
                        {t('txt_15')}
                    </text>
                    <text className="font-director-message-body" x="300" y="670" fontSize="22" fill="white">
                        {t('txt_16')}
                    </text>
                    <text className="font-director-message-body" x="300" y="700" fontSize="22" fill="white">
                        {t('txt_17')}
                    </text>
                    <text className="font-director-message-body" x="325" y="730" fontSize="22" fill="white">
                        {t('txt_18')}
                    </text>
                    <text className="font-director-message-body" x="300" y="760" fontSize="22" fill="white">
                        {t('txt_19')}
                    </text>
                    <text className="font-director-message-body" x="300" y="790" fontSize="22" fill="white">
                        {t('txt_20')}
                    </text>
                    <text className="font-director-message-body" x="300" y="820" fontSize="22" fill="white">
                        {t('txt_21')}
                    </text>
                    <text className="font-director-message-body" x="300" y="850" fontSize="22" fill="white">
                        {t('txt_22')}
                    </text>
                    <text className="font-director-message-body" x="300" y="880" fontSize="22" fill="white">
                        {t('txt_23')}
                    </text>
                    <text className="font-director-message-body" x="300" y="910" fontSize="22" fill="white">
                        {t('txt_24')}
                    </text>
                    <text className="font-director-message-body" x="300" y="940" fontSize="22" fill="white">
                        {t('txt_25')}                        
                    </text>
                    <text className="font-director-message-body" x="310" y="970" fontSize="22" fill="white">
                        {t('txt_26')}
                    </text>
                    <text className="font-director-message-body" x="310" y="1000" fontSize="22" fill="white">
                        {t('txt_27')}
                    </text>
                    <text className="font-director-message-body" x="300" y="1050" fontSize="22" fill="white">
                        Enio Eidt - CEO
                    </text>
                    <image
                        x="300"
                        y="350"
                        width="200"
                        height="1500"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAA1CAYAAAAZKprCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
                            bWFnZVJlYWR5ccllPAAACdJJREFUeNrsXWtsFFUUvtulL2iBVioWkEdBBSqCJAQkEExNEQUrJlUS
                            JEYxGEwgxPDDHyRihMQHiaCgISgYiCEkoAmCQqpVYhVBRBEBUUAoUp4tLQVaSqH1nMw34XCdmd3t
                            Y3e7c7/ky+7O3JmdvfPNmXPOPXc20NzcrAwMYogA0RZhsvh8L5alEgcTrxPvInYhXiV2w/prxAvE
                            o8T7xH6zxfvuxCWdTF8bRChMBuumMzGNmEscQOwBEbLw+hBHEvsS6yHMPGJPiDZFiDVayDdi9zeS
                            YClZePcThxP7EQfBSvL6TLRpT62wJa8jNuA72cJvJa4njiL+TryE47yIC6YRF1s27gKPEe8hXiEe
                            JOYQ/yYOxLJpAePGJJx4AxBAIfFB4nhY364QR1or9l9DLCf2wut27O8shHqcWE08DyvfAFGyOG9g
                            H03CbYkqjGXvOGBr1xvW62lYrEEQXkvO4zUIsYq4iVhCrIVVrIcgmxKpA43Y4wtBWOWXiFMRWOXB
                            YodyAyqJp+EOLCH+AUGfg6h9DyP26Im4C/gc8WEs7wsfuUuI7dnC7oYPy9mJzULYBkbsUfeV05CR
                            eIT4BHEiMhaBMLY/iywGW+AFxB+Fv2uCKiP2qCKAvkqGJea87wr4y17gwOxP4mH4wxXEMuI/COQ4
                            S3DTdK8Reyws8wAEfvxarKy0V4qHdW6GiNk/3kU8RPyOeEpkHwyM2GPyWzn3Oob4PvFOCDlU4Pcv
                            8QxeV0DQnK24alwMI/ZYuhpsodPhXhQQFyO74WaZbyJbsZ+4j7iFeBJZjFq4IQZG7DHLanAQyPnm
                            4QgERyurZsIpPccW+Aj4E8gux0XjKxuxx4PvnIwsBlvn2cTp6vaiHiewNV6PwO8rWOUGY5kNYi12
                            dilSYY2nKaumYQyWKQ934ze4HJ9B0LYlv2CCQYNYiz0oRM3uxgvEISGCQvaVXyEeUFZqrhzLjJgN
                            Yi72NLgcGcoq63yeOFl55585LbeSuJf4M/GyMsPZBnEgdulDp8B3ngm3Y5hyr0nmcswzEPU2uB/s
                            R5tUnUFcip1LREtCbM9W+QQCxNXKGh2sNpkOg3iEVz0756lL2/j7mmDhM+HT81Sq3XCB+AL5Xlkl
                            p7yuAj57Ji4qHlq/irsGt61TCVaCahA7sdtBJs8Cmaus0UcW6iQVuiYkFuDc+SFcCFvgRpXChTIw
                            UO01UykJtN2ZABgUrwzO1vSD1WYrzbUoXDV4DNZ+FILgwepWarIJjCS4ZjdrFfFtZTI7Ruwd8dhx
                            ITTi4snDRfEA8RniUJftuPT2a3PqjdgTFSOUNSglA3MTRPsMST75jXPF5y+N0I3YEw1cLHYQwp6J
                            ZRwfTPHBeQ22YBseT+HUMd/qi4zY4/+38ISLSpywU8Jvnwgf/6QPhL4NQfiQCLZZqqyiuXH4/FAi
                            dkxHr2fPIr4GN0VasyacdK6YrPXRnZonYk/C+4Yw2nPtPxfSyQnfi9GnRuwxBqcf5xDfcbgr/UKc
                            R9yj/Flrs00IfY2yyp29wJb/kPi8TFlFeAmLeBY7ux08F/RlUFofvk3zJOZZPha3BM9/HY3364gv
                            hmi/Cn1n4264fcqIPXrivoP4hrIeEqQHWTzD6C3iF8oahDKwsFMIfU0YQufSiwztbumLSS6xFDtX
                            UE4gvkvsr63j56iUQNxHjeV2xVoRTG4KIfRMLX65COPiG0RzUIlTW5z226hZbT4AfrYKT6vjHPgB
                            ZYb0wwE/5XYy3h9W3tmXIgSvNvhpYr391mHtKfYgfO5P1K2Ulg1+BPEHCKpOGd1GDL7rFeI9z+RK
                            92jLxqVYfOb4Z6UfO60txc4+N0/B43Tf65pfyH7iTPjbZhJ068ADZfb4QZNyH0DiuiEuqNMrVE9j
                            H48qn02maa3PzjOY+Ala2x069QcEmvxAeDM83zYoVbcXuLmdP70WSKIXDI7vZo0ltaA9B5M70Fk8
                            mWK/EPo6uC5s5cfDF/eT0ANwKfjvVLLaeN/c5wWa0J0EuxpC/xUujsQhGKgBfrQUncI8gVMh5Axt
                            3bfKegTzWWO9b3MvbFyH6Osc+jQSy8qT00cK18VN6DxqmgJD85669S8bfJ54wMnXWS0vyz4IVps7
                            93MhdHZNUnHCeKJFRQcXejGE86ZHGxZKrsu6HGw/FGJaBioIr0xrfwZ9mtUCoZ+Aj64LPRPLUnBu
                            nhTbpOE8NYYwaEMSXu0coAomEYubb8c54jhiutY2XslBdzaY7NImSFyq/c4mh3a5xBuiTVBbXyrW
                            FeD75ohldcTOon21WNdfLM8iTiOWExuJI7F8l2i/0eW3TMP6anwu8jheN15D+1Ud5By3iPLDIu3k
                            L4L44/1H9MaFOJZ4vfn/mKO1n9/sjP5au+kO/SHXn8Pym8S+xE9F28vEfK19o7iogrgohxHrXY7n
                            vHi/1OW3H9OOrVBs0ynM/hsktlme6GJP1ixOYQc5eLbcZ1yEchO0kYSLwg3Z2r7nhbgQdmjWWyLT
                            4VgbxfqUEMeiw8nadhbr+2BZnsOycJiPbdYmstBtse/Fj53fRjtNgtViZkRwKw2XOcQaB1HMx/fZ
                            7fZheY0mfHYNjmjis7cp0IS51eH7pzt891UHS9pTc2lsC60fO7tJs2BkLmvrnAxPgVifKi58G90S
                            XbStEfsVdFJLfPJknBC+hVd5WCcW2+w2uIh0S34Ft2G97SyX48iFf2wj2eH2LzEW69mHLnNYv0cI
                            zo4FZrm4Uzr2oz0fz19h3G2YlVhXC2OicJHZyDOi9hb7BM3yZEH42bglF8JCvRrmSXRDa9yjYQ4X
                            T45L27UO310ixNGEZZUI+nQrO8JF2Dpk4DlJs9gVcCW6iuBP74s+4q6qo6fD3czGAs0A2ChqoSvY
                            x09id/JRI0E9AptRwm2xXZkexKda4coERSAorbNb2+MOF0UPrZ2blc3Q2h3XLoJitKnR9i9RBWOh
                            H1t5iD5c7REflInv0vvRvnA3RNCn7LYt1L6/q5/Ebrskm11cEA7CdsLCZqBtIAoBqMSHHm3zPFwQ
                            J5+/Hq5AfhhpTKfl+7Xv2qxZep3pLiIfh76Uore3SdX2r++ztgVCX+IQa/T2m2WPNxaGkeFwa18W
                            pZRpUAtuw2k/CYKTbspWcVewl0nLm+GwryqRnozkmG2Uetxt7aB6YaKJPV4fkmQf1CWMNIZzkDxy
                            eKODjebKgi37v1btkc6PMFqtY4Oy/rHEq+LRDcmg1z9j8x+pDRfHZEp82xlcJvw4cUaiD2Dj9VmU
                            HSwT1aT1LmW79e0sRP7ub1BycMGI3aAt4PT8e76TdffYhsX+MYrvzOO627nE16DtMFD7PCWE0BVK
                            dmcYoRvL3hGxnDhWWY/mNgJuZ/wnwAD7P+Xq/fYCtQAAAABJRU5ErkJggg==
                        "
                    />
                    <image
                        x="50"
                        y="-370"
                        width="200"
                        height="1500"
                        xlinkHref={"data:image/png;base64," + CEOTxt}
                        alt="enio"
                    />
                </svg>
            </div>
        </>
    );
}

const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}> {t('about')} </p>
                <h2 className={styles.sectionHeadText}>
                    Convenio
                    <span style={yellowText}>
                        Tur
                    </span>
                </h2>
            </motion.div>

            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-black text-[17px] max-w-3xl leading-[30px] pt-16'
            >
                <p>
                    <span>
                        {t('about_first_p')}
                    </span>
                    <span style={yellowText}> {t('about_sec_p')} </span>
                </p>
            </motion.div>

            <motion.div
             variants={textVariant()}
             className="lg:pt-32 pt-8 text-center pb-16"
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.25 }}
            >
                <h1 className="font-director-message md:text-[100px]
                 sm:text-[90px] xs:text-[80px] text-[60px]"
                 style={yellowText}>
                    {t('message_ceo')}
                </h1>
            </motion.div>
            <div className="hidden md:block" >
                <Papyrus />
            </div>
            <div className="block md:hidden">
                <img src={enio} />
                <h2 className="text-[20px]" >
                    {t('txt_all_title')}
                </h2>
                <p className="indent-8 pt-8" >
                    <em>
                        {t('txt_all_1p')}
                    </em>
                </p>
                <p className="indent-8 pt-4" >
                    <em>
                        {t('txt_all_2p')}
                    </em>
                </p>
                <p className="indent-8 pt-4" >
                    <em>
                        {t('txt_all_3p')}
                    </em>
                </p>
            </div>
        </>
    );
};

export default SectionWrapper(AboutUs, "about");
