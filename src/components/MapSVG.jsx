import { Tooltip, styled, tooltipClasses } from "@mui/material";
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import { map } from "../constants";
import { useNavigate } from "react-router-dom";

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
}));

const MapPin = ({ name, local, desc, keyword }) => {
    const [isMouseEntered, setIsMouseEntered] = useState(false);
    const [width, setWidth] = useState(280);
    const [height, setHeight] = useState(350);
    const navigateTo = useNavigate();

    const handleMouseEnter = () => {
        setIsMouseEntered(true);
        setWidth(400);
        setHeight(500);
    };

    const handleMouseLeave = () => {
        setIsMouseEntered(false);
        setWidth(280);
        setHeight(350);
    };

    return (
        <g 
            onMouseEnter={handleMouseEnter}
            transform={`scale(${isMouseEntered ? 1.5 : 1})`}
            onMouseLeave={handleMouseLeave}
            >
            <path fill="black" fillRule="nonzero" d="M192.125,0C122.955,0,66.674,56.279,66.674,125.449c0,63.29,100.927,232.376,112.427,251.451
                    c2.757,4.557,7.694,7.35,13.024,7.35s10.267-2.793,13.021-7.35c11.504-19.074,112.43-188.161,112.43-251.451
                    C317.576,56.28,261.295,0,192.125,0z M192.125,339.1c-35.029-60.594-95.039-172.887-95.039-213.649
                    c0-52.404,42.635-95.035,95.039-95.035c52.404,0,95.039,42.631,95.039,95.035C287.164,166.198,227.154,278.498,192.125,339.1z"/>
            <path fill="black" d="M192.125,53.214c-39.835,0-72.236,32.403-72.236,72.235c0,39.836,32.401,72.236,72.236,72.236
                    c39.832,0,72.236-32.4,72.236-72.236C264.361,85.618,231.957,53.214,192.125,53.214z M192.125,167.274
                    c-23.062,0-41.824-18.762-41.824-41.824c0-23.06,18.762-41.824,41.824-41.824c23.06,0,41.824,18.765,41.824,41.824
                    C233.949,148.512,215.186,167.274,192.125,167.274z"/>
                
            <HtmlTooltip
                title={
                <React.Fragment>
                    <Typography color="inherit">{name}</Typography>
                    <br/>
                    <em>{desc}</em>
                    Click
                    <u className="cursor-pointer"> {keyword} </u>
                    and let's get going!
                    <br/><br/>
                    Tour in
                    <u 
                        onClick={ () => { navigateTo('/arg') }}
                        className={ local === 'Brasil' ? 'text-green-700 cursor-pointer' :
                                    local === 'Argentina' ? 'text-blue-700 cursor-pointer' : 
                                    'text-red-700 cursor-pointer'
                        }
                    > {local}.</u>
                </React.Fragment>
                }
                >
                <rect
                    x="0"
                    y="0"
                    width="280"
                    height="350"
                    fill="transparent"
                    stroke="none"
                />
            </HtmlTooltip>
        </g>
    )
};

const MapSVG = () => {
    return (
        <>
            <g stroke-width="1" fill-rule="evenodd" stroke-linejoin="bevel" stroke-linecap="square" fill="none" stroke="black">
                {/* Paraguay - red area on the map */}
                <g stroke-width="3.07087" font-family="MS Shell Dlg 2" stroke-opacity="1" font-style="normal" fill-opacity="1" stroke-linejoin="bevel" font-weight="400" stroke-linecap="square" fill="#e31a1c" stroke="#232323" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="34.375">
                    <path vector-effect="none" fill-rule="evenodd" d="M1242.17,1533.88 L1240.03,1539.35 L1238.93,1546.63 L1239.06,1553.37 L1239.11,1555.7 L1239.11,1568.39 L1239.86,1580.84 L1241.09,1592.15 L1241.93,1599.21 L1242.59,1604.81 L1243.7,1622.7 L1244.87,1631.52 L1245.33,1641.94 L1242.9,1659.87 L1246.26,1689.81 L1242.55,1702.73 L1239.13,1718.87 L1236.86,1730.47 L1235.84,1742.27 L1234.31,1752.96 L1233.2,1759.98 L1233.2,1759.98 L1233.2,1759.98 L1233.2,1759.99 L1233.14,1762.12 L1232.9,1769.75 L1233.26,1775.18 L1235.01,1787.62 L1235.08,1791.02 L1235.68,1796.45 L1234.11,1805.07 L1232.3,1814.62 L1231.7,1821.5 L1231.69,1821.54 L1231.48,1823.93 L1232.4,1832.29 L1235.34,1841.55 L1239.07,1853.04 L1241.76,1859.33 L1241.79,1859.41 L1243.79,1864.07 L1248.79,1876.46 L1253.97,1885.42 L1257.42,1895.34 L1258.35,1897.04 L1258.34,1897.04 L1262.6,1904.78 L1268.81,1915.34 L1273.09,1921.63 L1275.51,1925.2 L1281.15,1933.23 L1284.01,1937.29 L1290.18,1945.58 L1294.34,1953.44 L1296.75,1961.33 L1299.47,1972.38 L1300.12,1979.85 L1300.23,1985.52 L1299.58,1990.29 L1298.67,1994.62 L1296.02,1999.65 L1293.83,2002.63 L1290.41,2006.75 L1285.24,2010.92 L1278.83,2015.33 L1272.37,2017.71 L1268.14,2018.69 L1259.42,2019.97 L1247.68,2021.07 L1239.21,2022.35 L1235.99,2022.6 L1228.72,2023.19 L1218.2,2022.46 L1207.44,2022.18 L1198.82,2021.97 L1196.44,2021.91 L1187.65,2020.25 L1176.33,2017.02 L1169.48,2012.16 L1165.61,2010.33 L1165.61,2010.33 L1160.65,2007.99 L1150.55,2002.95 L1143.75,2000.57 L1137.19,1997.73 L1130.39,1995.56 L1115.57,1992.19 L1106.51,1989.39 L1095.45,1986.39 L1084.14,1983.39 L1071.86,1982.02 L1062.78,1983.9 L1053.61,1983.87 L1044.81,1984.63 L1042.15,1984.86 L1034.11,1986.9 L1024.35,1991.02 L1020.07,1991 L1013.51,1976.38 L1012.82,1975.2 L1012.67,1975.02 L1010.83,1972.7 L999.088,1957.92 L984.678,1939.78 L982.872,1937.51 L966.816,1917.3 L953.739,1900.83 L943.574,1888.03 L943.406,1887.82 L908.889,1844.36 L908.629,1844.03 L903.677,1837.79 L871.565,1797.34 L871.253,1796.95 L870.09,1795.48 L870.088,1795.48 L869.987,1795.35 L816.305,1727.72 L805.105,1713.6 L799.275,1706.26 L768.777,1667.82 L731.422,1620.73 L731.21,1619.51 L728.071,1620.51 L721.197,1622 L717.118,1622.81 L713.055,1623.2 L711.863,1623.31 L708.381,1624.75 L704.497,1629.69 L700.055,1636.02 L695.608,1642.13 L692.053,1645.9 L691.101,1651.22 L692.869,1658.09 L694.71,1662.62 L694.949,1669.09 L693.322,1675.8 L691.533,1680.18 L687.186,1685.45 L684.365,1690.9 L680.361,1695.74 L675.843,1704.3 L668.946,1710.77 L664.837,1716.25 L660.978,1722.57 L658.312,1723.88 L655.625,1724.13 L650.348,1723.47 L647.764,1722.77 L644.82,1721.97 L639.657,1721.2 L633.683,1720.87 L625.733,1721.2 L618.602,1721.53 L615.792,1721.46 L612.483,1719.71 L610.085,1718.17 L609.753,1717.53 L609.747,1717.51 L608.745,1715.55 L608.39,1713.62 L609.216,1710.29 L612.921,1705.7 L614.515,1703.34 L617.566,1697.56 L620.834,1690.93 L627.232,1682.77 L632.297,1678.34 L635.861,1675 L638.533,1674 L643.08,1673.19 L645.992,1672.51 L647.852,1671.84 L650.5,1669.57 L652.622,1664.23 L653.006,1660.87 L652.958,1658.37 L652.615,1656.08 L651.008,1653.12 L648.635,1651.35 L644.869,1650.14 L642.64,1649.85 L637.976,1650.67 L632.842,1651.38 L628.742,1651.13 L625.225,1650.4 L625.672,1647.17 L627.299,1628.63 L627.348,1628.07 L656.016,1301.17 L656.019,1301.14 L659.94,1256.41 L660.595,1249.57 L661.464,1240.8 L662.074,1233.86 L663.522,1215.4 L665.129,1192.03 L665.14,1191.87 L665.6,1185.19 L665.662,1184.28 L666.284,1175.23 L666.338,1174.44 L666.339,1174.44 L666.592,1170.76 L674.253,1051.24 L674.281,1050.8 L677.573,999.433 L678.097,999.111 L678.528,998.731 L678.662,998.518 L678.678,998.493 L678.691,998.425 L678.692,998.418 L678.693,998.418 L678.733,998.393 L679.164,998.013 L679.314,997.775 L679.4,997.342 L679.545,996.849 L679.756,996.296 L680.025,995.781 L680.326,995.266 L680.466,995.087 L680.513,995.028 L680.685,994.809 L681,994.431 L681.014,994.419 L681.032,994.405 L681.08,994.366 L681.471,994.05 L681.676,993.733 L681.648,993.576 L681.372,993.109 L681.238,992.758 L681.272,992.541 L681.398,992.188 L681.45,991.832 L681.45,991.472 L681.45,991.424 L681.45,991.353 L681.45,990.886 L681.49,990.787 L681.673,990.329 L681.534,989.076 L681.213,988.689 L680.727,988.102 L681.339,987.183 L681.102,986.835 L681.242,986.111 L682.55,984.942 L684.749,984.218 L685.61,983.857 L685.699,983.773 L685.696,983.773 L686.336,983.355 L687.854,981.893 L688.828,980.641 L690.071,979.968 L690.801,979.573 L692.224,978.803 L692.431,978.701 L694.814,977.522 L695.003,977.143 L695.029,977.144 L694.312,975.713 L693.867,974.46 L694.257,972.651 L693.644,971.036 L693.587,970.913 L693.449,970.618 L693.467,970.147 L693.477,969.867 L693.185,967.069 L693.909,966.568 L695.217,966.011 L695.468,965.537 L695.008,965.189 L694.814,964.466 L695.537,963.742 L693.964,960.387 L693.199,958.257 L692.726,956.364 L692.893,954.332 L694.02,952.731 L695.134,950.699 L695.148,949.376 L695.418,948.479 L695.492,938.598 L695.463,938.57 L699.258,932.388 L698.214,927.558 L697.781,925.552 L696.913,915.277 L680.063,901.331 L658.385,888.684 L648.093,886.393 L628.795,887.304 L620.607,887.675 L614.698,881.764 L614.12,872.465 L619.28,867.119 L637.261,855.206 L645.392,842.955 L657.838,823.534 L663.225,808.754 L664.32,795.264 L673.915,796.463 L677.935,799.977 L686.566,815.246 L694.572,826.64 L687.106,845.495 L680.411,862.378 L677.869,873.017 L679.733,878.608 L703.96,890.41 L719.107,897.908 L718.253,902.698 L711.865,907.206 L713.899,918.364 L720.111,927.061 L735.002,930.784 L735.019,930.788 L735.035,930.764 L742.837,919.094 L757.274,899.796 L773.554,881.736 L782.8,867.505 L782.851,867.426 L782.811,867.183 L777.823,837.154 L782.84,832.044 L786.021,833.801 L791.416,836.782 L791.549,836.855 L791.582,836.889 L800.096,845.533 L800.245,845.684 L829.441,859.351 L841.865,867.426 L849.933,882.321 L849.94,882.335 L849.971,882.856 L850.561,892.895 L858.637,906.561 L872.924,912.773 L888.453,915.879 L888.454,915.879 L913.277,915.259 L913.302,915.258 L906.469,935.136 L899.636,949.424 L894.245,955.413 L894.045,955.636 L879.757,956.257 L868.488,958.048 L851.26,948.844 L851.182,948.803 L818.88,930.167 L807.078,927.682 L807.07,927.686 L798.596,931.923 L798.381,932.03 L792.994,941.827 L788.014,952.809 L787.963,952.923 L779.95,956.856 L741,956.377 L734.457,960.399 L734.189,960.563 L731.989,970.935 L731.292,983.589 L731.218,1009.44 L728.186,1028.94 L742.517,1044.49 L757.993,1060.61 L758.003,1060.62 L758.076,1060.56 L769.185,1051.92 L783.472,1046.33 L783.51,1046.2 L787.2,1033.28 L790.305,1015.89 L790.35,1015.87 L790.575,1015.73 L799.556,1010.35 L820.78,1003.34 L845.526,992.869 L854.91,995.392 L854.922,995.403 L862.364,1001.6 L884.727,1024.59 L898.393,1033.91 L910.817,1038.88 L910.817,1045.69 L910.817,1045.71 L904.605,1060.62 L898.393,1074.28 L887.212,1080.5 L875.409,1085.47 L865.47,1094.78 L867.334,1109.07 L878.961,1124.74 L878.971,1124.76 L881.621,1128.33 L890.318,1137.65 L903.984,1148.83 L922.605,1155.65 L922.62,1155.66 L933.164,1149.46 L933.164,1149.46 L933.18,1149.45 L930.695,1138.27 L939.392,1112.8 L964.239,1098.51 L964.292,1098.37 L978.946,1060.03 L993.571,1041.66 L1012.41,1040.35 L1028.02,1044.13 L1033.57,1051.41 L1034.43,1052.54 L1040.03,1064.34 L1036.92,1077.39 L1037.54,1095.4 L1040.03,1107.21 L1053.07,1116.52 L1073.57,1118.39 L1088.48,1112.18 L1098.42,1115.28 L1104.01,1122.12 L1105.82,1129.23 L1105.87,1137.02 L1100.9,1171.81 L1097.8,1178.02 L1093.57,1180.03 L1084.34,1181.83 L1080.65,1179.67 L1077.72,1175.51 L1074.42,1171.97 L1068.87,1167.79 L1061.77,1166.22 L1056.8,1168.71 L1053.28,1172.81 L1050.11,1179.92 L1049.28,1192.63 L1053.07,1198.52 L1061.51,1207.82 L1061.51,1207.83 L1061.77,1210.95 L1067.36,1221.51 L1075.53,1226.72 L1077.77,1232.5 L1077.77,1232.5 L1075.43,1241.39 L1075.43,1241.39 L1077.85,1245.18 L1078.83,1246.48 L1081.34,1248.28 L1081.96,1248.83 L1082.27,1249.07 L1084.55,1250.88 L1086.65,1252.55 L1090.3,1253.18 L1090.33,1253.18 L1090.34,1253.19 L1097.78,1250.71 L1097.8,1250.7 L1110.84,1254.43 L1113.95,1258.16 L1116.1,1262.38 L1116.77,1272.05 L1134.21,1280.92 L1144.74,1285.56 L1153.36,1286.73 L1165.29,1282.55 L1172,1283.02 L1185.35,1288.74 L1200.32,1295.16 L1227.16,1308.38 L1227.19,1308.4 L1219.28,1322.93 L1215.86,1329.2 L1216.32,1333.51 L1216.29,1338.26 L1216.43,1340.53 L1216.45,1340.76 L1216.66,1344.15 L1215.84,1353.23 L1214.46,1359.15 L1213.5,1365.46 L1213.35,1366.41 L1213.44,1370.73 L1213.47,1372.32 L1214.48,1385.2 L1216.67,1395.14 L1217.04,1396.25 L1217.04,1396.25 L1217.14,1396.55 L1219.33,1403.26 L1219.33,1403.26 L1222.75,1411.8 L1222.75,1411.81 L1224.87,1418.13 L1224.87,1418.13 L1225.72,1420.03 L1228.79,1426.9 L1233.45,1434.98 L1237.83,1441.72 L1240.96,1448.22 L1240.96,1448.23 L1241.12,1448.94 L1241.12,1448.94 L1241.14,1448.94 L1242.19,1453.79 L1242.61,1455.68 L1243.81,1465.42 L1243.7,1472.67 L1243.08,1479.26 L1241.75,1487.43 L1241.63,1493.77 L1241.78,1501.48 L1243.7,1510.05 L1245.86,1517.95 L1245.71,1523.39 L1244.07,1528.64 L1242.17,1533.88"/>
                </g>
                {/* Argentina - blue area on the map */}
                <g stroke-width="3.07087" font-family="MS Shell Dlg 2" stroke-opacity="1" font-style="normal" fill-opacity="1" stroke-linejoin="bevel" font-weight="400" stroke-linecap="square" fill="#07f3ef" stroke="#232323" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="34.375">
                    <path vector-effect="none" fill-rule="evenodd" d="M3103.32,1474.99 L3103.82,1485.58 L3103.85,1486.17 L3104.04,1490.22 L3117.76,1783.55 L3117.85,1785.57 L3121.85,1871.06 L3135.95,1874.52 L3133.87,1879.21 L3126.62,1960.63 L3102.79,2227.96 L3092.59,2342.24 L3092.36,2344.85 L3087.54,2398.88 L3085.57,2420.94 L2230.4,2396.47 L2122.25,2393.12 L1867.9,2385.25 L1381.59,2370.2 L1324.31,2368.42 L1251.84,2366.18 L1227.49,2365.43 L1077.7,2360.79 L1071.34,2360.59 L1070.85,2357.5 L1069.17,2347.1 L1068.08,2337.75 L1067.01,2321.64 L1064.19,2314.35 L1061.4,2299.27 L1060.46,2297.4 L1055.16,2286.78 L1050.64,2274.28 L1047.07,2261.9 L1046.14,2258.68 L1041.62,2244.63 L1036.5,2233.18 L1031.4,2222.24 L1025.72,2213.4 L1021.75,2203.5 L1014.92,2195.16 L1012.1,2188.39 L1007.55,2180.05 L1001.29,2169.12 L996.668,2158.72 L996.203,2157.67 L989.967,2149.28 L987.667,2146.18 L983.121,2137.86 L977.439,2129 L972.331,2119.11 L967.821,2104.55 L965.351,2085.59 L965.392,2076.99 L965.458,2063.48 L970.708,2046.87 L973.93,2038.98 L977.689,2029.77 L984.047,2022.52 L990.378,2015.8 L994.986,2010.62 L1000.19,2004.4 L1007.67,2000.29 L1014.56,1997.2 L1019.37,1993.52 L1020.07,1991 L1024.35,1991.02 L1034.11,1986.9 L1042.15,1984.86 L1044.81,1984.63 L1053.61,1983.87 L1062.78,1983.9 L1071.86,1982.02 L1085.73,1982.44 L1115.57,1992.19 L1130.39,1995.56 L1137.19,1997.73 L1143.75,2000.57 L1150.55,2002.95 L1169.48,2012.16 L1176.33,2017.02 L1196.44,2021.91 L1218.2,2022.46 L1228.72,2023.19 L1239.21,2022.35 L1247.68,2021.07 L1278.83,2015.33 L1290.41,2006.75 L1296.02,1999.65 L1298.67,1994.62 L1300.23,1985.52 L1299.67,1978.26 L1299.58,1977.62 L1297.31,1972.94 L1296.21,1964.61 L1294.51,1957.34 L1292.83,1952.13 L1289.42,1945.37 L1282.58,1936.5 L1276.31,1928.16 L1267.77,1918.77 L1264.37,1909.41 L1262.91,1905.75 L1257.42,1895.34 L1252.44,1885.47 L1248.48,1877.13 L1244.52,1867.77 L1240.56,1857.36 L1239.07,1853.04 L1232.4,1832.29 L1231.48,1823.93 L1232.3,1814.62 L1235.68,1796.45 L1235.08,1791.02 L1233.26,1775.18 L1232.9,1769.75 L1233.14,1762.12 L1233.2,1759.99 L1236.86,1730.47 L1237.77,1725.88 L1239.11,1718.25 L1240.14,1712.39 L1242.55,1702.73 L1246.26,1689.81 L1252.09,1690.54 L1256.27,1690.56 L1268.65,1691.33 L1287.99,1692.8 L1296.03,1691.74 L1304.5,1689.03 L1312.76,1686.49 L1319.6,1684.6 L1328.56,1684.46 L1341.19,1685.26 L1361.35,1684.49 L1369.69,1682.33 L1376.11,1678.4 L1381.83,1675.39 L1389.08,1672.46 L1396.33,1670.38 L1403.08,1669.13 L1405.52,1669.23 L1409.2,1669.39 L1416.16,1670.34 L1423.05,1672 L1432.83,1677.68 L1441.08,1682.71 L1447.25,1686.81 L1453.67,1691.07 L1465.39,1700.04 L1481.53,1706.11 L1498.3,1713.61 L1501.11,1717.56 L1502.88,1720.01 L1505.31,1727.57 L1505.98,1739.03 L1504.88,1748.39 L1504.26,1752.1 L1502.02,1762.91 L1501.73,1763.96 L1499.38,1769.44 L1495.14,1777.41 L1490.08,1783.79 L1487.68,1790.34 L1488.8,1798.1 L1490.24,1802.66 L1496.21,1813.7 L1508.57,1826.64 L1532.57,1845.67 L1538.54,1848.98 L1545.75,1850.2 L1556.77,1846.7 L1560.63,1843.43 L1563.89,1838.23 L1567.36,1834.58 L1572.86,1832.12 L1579.67,1831.24 L1583.54,1829.55 L1588.28,1826.03 L1591.51,1822.59 L1593.73,1817.86 L1596.96,1812.3 L1602.34,1804.08 L1608.36,1802.47 L1624.61,1800.41 L1629.3,1798.32 L1631.87,1794.92 L1633.84,1790.96 L1638.16,1787.68 L1642.44,1786.33 L1650.08,1786.01 L1659.98,1789.33 L1672.43,1795.95 L1685.34,1803.49 L1698.15,1814.42 L1711.82,1826.48 L1716.93,1833.08 L1724.05,1840.48 L1727.1,1842.12 L1732.75,1845.09 L1743.72,1850.19 L1752.38,1856.86 L1759.03,1862.36 L1765.32,1867.65 L1771.63,1872.52 L1782.75,1879.17 L1788.79,1885.35 L1792.14,1888.7 L1800.11,1898.72 L1803.21,1904.75 L1807.08,1908.66 L1807.11,1908.7 L1819.03,1917.25 L1823.36,1921.36 L1830.4,1932.3 L1835.46,1939.31 L1844.65,1948.85 L1849.84,1956.04 L1858.92,1965.35 L1863.37,1969.83 L1864.82,1972.65 L1877.95,1990.45 L1882.47,1996.76 L1885.49,2001.79 L1891.23,2009.31 L1892.81,2015.14 L1896.56,2021.46 L1898.08,2027.33 L1898.85,2032.57 L1900.35,2036.87 L1898.61,2039.05 L1897.19,2042.23 L1898.38,2049.02 L1900.06,2055.29 L1902.82,2062.11 L1903.66,2065.57 L1904.16,2072.36 L1904.21,2077.5 L1905.64,2081.72 L1907.23,2087.35 L1908.88,2095.6 L1911.94,2105.26 L1918.06,2117.89 L1919.01,2119.91 L1921,2124.98 L1924.73,2133.15 L1929.98,2141.56 L1934.96,2145.16 L1950.17,2146.06 L1966.33,2142.55 L1976.18,2136.68 L1984.42,2127.64 L1985.92,2117.8 L1985.46,2099.56 L1982.25,2086.82 L1976.8,2069.64 L1973.96,2053.99 L1970.65,2032.33 L1971.81,2023.82 L1971.08,2015.08 L1972.85,2006.13 L1973.31,2001.84 L1973.32,1997.17 L1974.95,1989.66 L1978.2,1979.85 L1987.3,1968.78 L2003.43,1955.4 L2020.76,1944.94 L2034.61,1935.08 L2049.89,1924.78 L2073.85,1915.76 L2084.56,1906.99 L2101.1,1896.33 L2110.65,1882.25 L2124.46,1863.92 L2131.96,1846.97 L2136.44,1830.17 L2137.11,1815.74 L2135.48,1801.14 L2131.77,1787.96 L2128.03,1773.06 L2126.38,1754.34 L2129.18,1739.16 L2136.9,1723.31 L2144.64,1715.06 L2157.33,1708.52 L2176.36,1703.06 L2189.3,1698.63 L2198.42,1696.39 L2213.22,1699.42 L2223.81,1707.96 L2239.07,1723.48 L2247.97,1734.29 L2262.69,1747.83 L2277.62,1756.92 L2292.07,1759.49 L2293.4,1758.97 L2325.51,1744.89 L2339.18,1729.34 L2360.14,1694.65 L2367.04,1676.87 L2371.44,1659.6 L2379.58,1638.07 L2388.23,1617.71 L2397.61,1601.29 L2409.1,1591.81 L2423.65,1582.33 L2441.74,1573.69 L2462.15,1571 L2496.54,1564.69 L2511.03,1558.79 L2528.34,1549.28 L2539.26,1539.03 L2554.11,1536.1 L2554.91,1535.78 L2563.68,1532.22 L2573.78,1530.93 L2578.44,1530.93 L2588.88,1533.41 L2590.12,1533.7 L2592.93,1534.81 L2608.72,1544.64 L2625.73,1565.54 L2625.91,1565.84 L2638.85,1586.97 L2646.52,1599.38 L2651.39,1611.27 L2656.52,1623.07 L2663.66,1634.41 L2666.72,1638.66 L2671.27,1644.97 L2673.16,1647.03 L2683.53,1659.69 L2688.56,1666.72 L2688.92,1667.22 L2691.1,1670.64 L2694.41,1674.9 L2697.39,1678.74 L2708.54,1694.35 L2716.38,1702.19 L2716.62,1702.43 L2725.08,1708.11 L2726.09,1708.79 L2731.99,1711.59 L2738.67,1713.61 L2746.44,1714.69 L2753.89,1715.01 L2761.19,1715.01 L2770.82,1714.07 L2782.31,1710.97 L2789.76,1707.24 L2795.81,1702.59 L2801.26,1698.39 L2805.45,1693.26 L2808.71,1686.43 L2810.11,1677.58 L2810.42,1671.06 L2810.21,1666.72 L2809.8,1658.27 L2807.31,1645.43 L2805.84,1637.88 L2802.14,1618.93 L2798.43,1599.66 L2798.36,1593.76 L2799.49,1585.22 L2801.96,1580.04 L2805.04,1573.58 L2810.21,1568.4 L2816.63,1564.88 L2825.53,1562.61 L2834.02,1562.4 L2834.45,1562.45 L2841.48,1563.23 L2846.48,1564.57 L2852.25,1566.13 L2864.25,1572.62 L2871.3,1577.86 L2880.59,1586.47 L2884.55,1590.15 L2887.88,1593.48 L2888,1593.6 L2895.94,1601.53 L2914.99,1617.48 L2934.41,1630.66 L2936.89,1632.06 L2942.09,1635 L2949.05,1637.83 L2952.03,1639.05 L2961.02,1642.71 L2969.8,1646.29 L2978.62,1649.89 L2985.2,1652.57 L2989.35,1654.2 L2993.73,1655.67 L3003.03,1658.79 L3016.55,1661.59 L3023.66,1661.91 L3028.18,1661.54 L3040.49,1660.55 L3050.82,1657.78 L3059.18,1654.15 L3063.08,1650.83 L3063.56,1650.35 L3068.84,1645.15 L3071.53,1642.21 L3073,1639.43 L3074.96,1635.7 L3076.36,1630.11 L3076.67,1624.52 L3076.05,1620.95 L3073.83,1614.71 L3073.45,1614 L3068.69,1605.11 L3066.73,1602.47 L3061.3,1596.25 L3058.62,1593.6 L3041.73,1576.84 L3036.93,1572.64 L3027.45,1567.52 L3018.9,1565.04 L2999.18,1560.69 L2993.73,1559.59 L2989.4,1558.71 L2986.13,1558.05 L2975.88,1556.34 L2958.7,1551.92 L2953.35,1549.87 L2950.65,1548.62 L2949.81,1548.16 L2941.71,1543.63 L2936.71,1539.82 L2925.72,1524.2 L2922.92,1516.08 L2922.77,1515.65 L2920.91,1501.21 L2921.53,1492.51 L2922.48,1489.08 L2925.26,1479 L2928.34,1472.62 L2928.78,1471.7 L2935.22,1462.88 L2935.66,1462.48 L2936.04,1462.11 L2939.03,1459.31 L2943.3,1456.16 L2945.53,1454.52 L2947.16,1453.32 L2949.06,1452.18 L2956.71,1447.58 L2960.06,1445.97 L2960.56,1445.74 L2965.53,1443.36 L2977.06,1439.23 L2984.76,1438.79 L2989.73,1438.95 L2993.13,1439.06 L2993.73,1439.08 L2999.17,1439.26 L3007.22,1440.73 L3011.88,1442.46 L3033.2,1450.43 L3034.69,1450.91 L3046.36,1456.1 L3059.9,1463.47 L3066.81,1466.24 L3076.21,1470 L3079.35,1470.84 L3090.65,1473.88 L3095.66,1474.7 L3103.32,1474.99"/>
                </g>
                {/* Brazil - green area on the map */}
                <g stroke-width="3.07087" font-family="MS Shell Dlg 2" stroke-opacity="1" font-style="normal" fill-opacity="1" stroke-linejoin="bevel" font-weight="400" stroke-linecap="square" fill="#04bf11" stroke="#232323" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="34.375">
                    <path vector-effect="none" fill-rule="evenodd" d="M1470.84,1702.09 L1470.55,1701.98 L1465.39,1700.04 L1453.67,1691.07 L1441.08,1682.71 L1433.02,1677.8 L1432.83,1677.68 L1432.3,1677.37 L1423.05,1672 L1416.28,1670.38 L1416.16,1670.34 L1409.2,1669.39 L1405.52,1669.23 L1403.08,1669.13 L1396.33,1670.38 L1389.08,1672.46 L1384.1,1674.47 L1381.83,1675.39 L1376.11,1678.4 L1369.69,1682.33 L1361.91,1684.35 L1361.35,1684.49 L1354.14,1684.83 L1348.82,1685.01 L1341.19,1685.26 L1328.56,1684.46 L1323.34,1684.54 L1321.75,1684.57 L1319.6,1684.6 L1312.76,1686.49 L1304.5,1689.03 L1303.32,1689.4 L1299.06,1690.77 L1296.03,1691.74 L1295.02,1691.87 L1288.96,1692.67 L1287.99,1692.8 L1278.52,1692.11 L1268.65,1691.33 L1265.61,1691.22 L1256.27,1690.56 L1255.92,1690.56 L1252.09,1690.54 L1246.26,1689.81 L1246.22,1689.52 L1245,1680.4 L1244.21,1671.54 L1242.9,1659.87 L1243.07,1655.21 L1243.4,1646.1 L1243.38,1632.09 L1242.78,1619.51 L1242.57,1615.05 L1242.27,1612.99 L1240.21,1598.94 L1240.05,1596.06 L1239.37,1583.95 L1239.61,1572.99 L1238.82,1560.4 L1238.8,1548.72 L1240.07,1539.86 L1242.13,1531.92 L1243.15,1524.68 L1242.88,1516.76 L1242.2,1512.39 L1241.83,1509.99 L1241.82,1503.31 L1241.54,1500.04 L1241.03,1493.99 L1240.51,1483.75 L1240.71,1479.81 L1241.01,1473.73 L1241.51,1464.87 L1240.97,1453.67 L1238.64,1445.51 L1233.98,1437.11 L1233.26,1435.92 L1228.79,1428.49 L1225.81,1424.65 L1222.83,1420.81 L1219.19,1410.55 L1215.82,1399.39 L1213.36,1390.56 L1212.71,1388.23 L1211.39,1377.3 L1211.63,1365.64 L1212.16,1361.87 L1213.42,1352.83 L1213.91,1339.07 L1213.71,1329.48 L1213.63,1325.78 L1213.61,1316.68 L1213.03,1312.16 L1212.57,1308.52 L1209.97,1300.12 L1209.18,1294.99 L1208.4,1289.86 L1206.87,1280.37 L1204.79,1272.7 L1205.29,1265.02 L1207.85,1253.6 L1209.91,1245.67 L1210.92,1233.31 L1211.17,1232.38 L1210.2,1229.58 L1207.28,1221.19 L1202.09,1212.1 L1195.11,1205.58 L1186.33,1199.53 L1178.81,1193 L1167.95,1186.02 L1161.45,1179.24 L1154.23,1173.2 L1149.37,1168.04 L1143.18,1160.35 L1138.94,1152.04 L1136.67,1147.59 L1133.32,1137.32 L1131.8,1129.44 L1131.48,1127.78 L1131.44,1118 L1131.16,1107.05 L1130.1,1097.02 L1130.21,1095 L1130.62,1087.22 L1131.65,1079.53 L1134.3,1075.05 L1134.98,1073.92 L1142.99,1073.21 L1150.46,1071.88 L1161.27,1066.04 L1170.57,1059.5 L1175.85,1055.53 L1181.13,1051.56 L1182.87,1050.03 L1191.73,1042.21 L1199.42,1031.47 L1206.88,1018.86 L1212.02,1007.18 L1213.44,1003.3 L1216.65,994.591 L1217.42,992.476 L1220.03,982.542 L1220.47,980.856 L1224.55,969.504 L1225.32,967.361 L1230.43,955.247 L1234.65,946.454 L1235.59,944.513 L1237.01,941.479 L1238.43,938.444 L1245.62,929.816 L1251.26,917.918 L1256.14,908.347 L1257.82,903.683 L1264.19,885.114 L1267.79,872.14 L1269.92,864.508 L1277.17,838.439 L1292.35,816.861 L1342.9,759.432 L1385.71,709.671 L1411.49,682.113 L1415.5,677.825 L1459.84,642.853 L1482.48,625.001 L1542.8,555.436 L1589.38,478.78 L1593.63,470.347 L1593.74,470.124 L1596.19,465.253 L1646,406.254 L1669.67,362.401 L1691.3,322.35 L1706.94,261.091 L1722.57,199.832 L1741.97,115.319 L1747.12,98.4327 L1749.13,91.8677 L1765.04,39.7353 L1767.93,33.1241 L1779.69,36.4036 L1793.34,41.553 L1799.52,46.7061 L1803.4,58.3522 L1821.27,83.6675 L1824.56,102.095 L1829.74,103.572 L1841.94,101.729 L1856.93,104.988 L1858.86,100.28 L1858.77,89.5179 L1864.78,85.7971 L1881.24,97.1237 L1886.07,96.9065 L1894.78,88.8849 L1903.74,85.2904 L1906.84,88.9956 L1902.53,98.6057 L1903.58,104.972 L1926.95,127.429 L1960.05,131.922 L1991.7,131.27 L1996.8,132.55 L1997.36,138.683 L1983.33,154.935 L1985.3,161.107 L1996.9,167.974 L2001.99,167.242 L2010.18,146.995 L2014.33,143.177 L2025.55,147.973 L2035.34,141.256 L2040.16,142.637 L2045.23,164.964 L2041.03,181.06 L2043.68,188.216 L2049.72,192.043 L2056.1,193.081 L2061.3,189.989 L2060.97,169.921 L2064.1,165.837 L2080.27,158.772 L2095.73,155.758 L2101.33,152.474 L2091.91,137.829 L2090.94,133.196 L2093.59,128.407 L2102.8,123.448 L2109.45,123.505 L2114.37,126.15 L2123.05,135.537 L2124.17,137.939 L2125.16,138.233 L2126.37,142.678 L2126.1,155.011 L2124.27,159.562 L2115.83,167.556 L2115.08,172.703 L2119.73,178.332 L2123.6,179.458 L2147.81,176.085 L2151.84,181.162 L2146.41,192.46 L2151.11,195.182 L2153.42,201.159 L2147.88,212.487 L2153.01,242.572 L2138.55,266.493 L2130.93,292.148 L2130.43,327.556 L2133.71,369.846 L2123.08,397.045 L2118.25,422.798 L2126.96,431.666 L2128.5,433.233 L2138.18,443.078 L2143.97,458.298 L2142.18,476.514 L2138.1,499.063 L2111.05,648.498 L2092.02,753.616 L2065.32,733.543 L2057.48,726.102 L2052.15,715.797 L2046.92,714.565 L2032.55,722.266 L2016.98,721.067 L2013.69,711.333 L2008.37,677.182 L2001.97,663.614 L1997.4,659.905 L1981.43,664.808 L1973.2,659.329 L1967.05,647.602 L1950.48,648.827 L1948.48,648.232 L1939.82,645.665 L1928.97,647.172 L1923.41,643.703 L1920.27,637.72 L1910.69,631.113 L1904.05,602.841 L1900.2,596.459 L1905.39,583.431 L1900.08,567.9 L1895.03,567.881 L1886.05,576.46 L1879.66,576.291 L1869.99,560.625 L1851.73,543.527 L1835.06,538.637 L1825.49,543.52 L1797.12,525.478 L1787.67,533.342 L1778.24,535.626 L1778.63,546.75 L1773.18,550.464 L1761.82,546.578 L1759.64,551.202 L1760.82,557.486 L1763.27,562.73 L1768.96,567.646 L1767.37,573.862 L1756.87,576.02 L1746.94,583.336 L1749.6,593.953 L1748.64,612.163 L1742.58,612.776 L1734.5,602.742 L1724.96,596.905 L1716.99,594.789 L1715.34,596.673 L1713.99,597.97 L1712.08,602.257 L1709.52,604.446 L1707.24,606.818 L1703.14,609.827 L1700.58,611.378 L1699.67,612.29 L1693.74,616.121 L1690.46,620.134 L1688.27,624.877 L1685.54,633.268 L1683.16,637.646 L1681.34,640.382 L1677.14,642.571 L1672.04,645.581 L1662,652.877 L1652.7,661.086 L1649.6,662.363 L1645.95,664.369 L1644.13,666.376 L1642.85,667.835 L1640.3,670.389 L1639.02,671.301 L1636.65,673.308 L1632.45,679.692 L1629.35,684.8 L1627.16,691.914 L1622.97,701.765 L1620.6,708.331 L1620.05,716.312 L1625.52,723.244 L1630.26,726.345 L1641.21,733.094 L1642.12,742.671 L1636.83,750.515 L1635.01,756.899 L1632.09,765.108 L1635.19,773.682 L1639.02,777.512 L1651.42,783.851 L1671.31,802.275 L1674.59,815.5 L1676.78,824.256 L1677.87,827.904 L1681.34,830.276 L1684.44,828.817 L1688.09,838.849 L1688.45,867.853 L1707.06,870.772 L1714.5,870.321 L1714.39,903.948 L1714.21,963.589 L1713.8,1095.03 L1713.65,1141.75 L1713.63,1147.76 L1713.46,1203.18 L1713.46,1203.37 L1713.44,1207.86 L1713.36,1234.56 L1713.27,1263.34 L1713.1,1319.4 L1712.48,1516.48 L1765.06,1516.93 L1798.04,1508.66 L1804.69,1515.23 L1815.66,1513.69 L1919.38,1499.18 L1922.12,1498.8 L1974.8,1491.43 L1980.97,1481.87 L1985.74,1479.21 L1989.18,1479.27 L1993.39,1479.34 L2002.62,1487.16 L2160.36,1466.06 L2198.19,1461 L2203.33,1462.45 L2211.79,1460.75 L2215.65,1455.8 L2231.13,1456.93 L2283.84,1450.19 L2301.99,1450.64 L2314.79,1446.42 L2387.87,1437.75 L2390.65,1435.64 L2406.29,1433.38 L2425.62,1434.23 L2427.42,1432.24 L2436.76,1433.38 L2456.44,1431.65 L2458.08,1434.64 L2464.51,1437.77 L2470.11,1437.12 L2479.34,1441.52 L2484.26,1445.54 L2490.71,1452.14 L2494.29,1478.98 L2488.42,1491.12 L2493.28,1504.74 L2502.18,1506.88 L2512.37,1513.63 L2523.24,1534.25 L2539.26,1539.03 L2529.75,1547.95 L2528.34,1549.28 L2511.03,1558.79 L2496.54,1564.69 L2462.15,1571 L2462.07,1571.02 L2441.74,1573.69 L2423.65,1582.33 L2409.1,1591.81 L2397.61,1601.29 L2388.23,1617.71 L2379.58,1638.07 L2371.44,1659.6 L2367.04,1676.87 L2360.14,1694.65 L2349.64,1712.45 L2339.18,1729.34 L2325.51,1744.89 L2306.32,1753.87 L2293.4,1758.97 L2292.07,1759.49 L2277.62,1756.92 L2262.69,1747.83 L2247.97,1734.29 L2239.07,1723.48 L2223.81,1707.96 L2213.22,1699.42 L2210.12,1698.79 L2198.42,1696.39 L2189.3,1698.63 L2176.36,1703.06 L2157.33,1708.52 L2144.64,1715.06 L2136.9,1723.31 L2129.18,1739.16 L2126.38,1754.34 L2128.03,1773.06 L2131.77,1787.96 L2135.48,1801.14 L2137.11,1815.74 L2136.44,1830.17 L2134.45,1837.62 L2131.96,1846.97 L2124.46,1863.92 L2118.37,1871.93 L2110.65,1882.25 L2101.1,1896.33 L2084.56,1906.99 L2073.85,1915.76 L2056.14,1922.43 L2049.89,1924.78 L2034.61,1935.08 L2020.76,1944.94 L2003.43,1955.4 L1987.3,1968.78 L1987.15,1968.95 L1978.2,1979.85 L1976.7,1984.37 L1974.95,1989.66 L1973.32,1997.17 L1972.85,2006.13 L1971.08,2015.08 L1971.81,2023.82 L1970.65,2032.33 L1973.96,2053.99 L1976.8,2069.64 L1982.42,2088 L1985.46,2099.56 L1985.93,2111.73 L1985.92,2114.14 L1985.92,2117.8 L1984.42,2127.64 L1976.18,2136.68 L1966.33,2142.55 L1950.17,2146.06 L1934.96,2145.16 L1929.98,2141.56 L1924.73,2133.15 L1921,2124.98 L1919.01,2119.91 L1918.06,2117.89 L1914.72,2111.24 L1911.94,2105.26 L1908.88,2095.6 L1907.23,2087.35 L1906.27,2084.12 L1905.64,2081.72 L1904.74,2079.38 L1904.21,2077.5 L1904.16,2072.36 L1903.66,2065.57 L1902.82,2062.11 L1900.06,2055.29 L1898.38,2049.02 L1897.19,2042.23 L1898.61,2039.05 L1900.35,2036.87 L1898.85,2032.57 L1898.08,2027.33 L1896.56,2021.46 L1892.81,2015.14 L1891.23,2009.31 L1886.89,2003.71 L1885.49,2001.79 L1882.47,1996.76 L1877.95,1990.45 L1869.73,1979.45 L1864.82,1972.65 L1863.37,1969.83 L1855.26,1961.87 L1849.84,1956.04 L1844.65,1948.85 L1835.46,1939.31 L1830.4,1932.3 L1823.36,1921.36 L1819.03,1917.25 L1807.11,1909.02 L1803.21,1904.75 L1800.11,1898.72 L1791.47,1888.25 L1782.75,1879.17 L1771.63,1872.52 L1765.32,1867.65 L1754.87,1859.06 L1743.72,1850.19 L1733.67,1845.65 L1727.5,1842.33 L1727.1,1842.12 L1724.05,1840.48 L1716.93,1833.08 L1711.82,1826.48 L1698.15,1814.42 L1685.34,1803.49 L1672.43,1795.95 L1659.98,1789.33 L1653.16,1787.04 L1650.08,1786.01 L1642.44,1786.33 L1638.16,1787.68 L1633.84,1790.96 L1631.87,1794.92 L1629.3,1798.32 L1625.58,1799.98 L1624.61,1800.41 L1623.44,1800.51 L1618.41,1800.94 L1608.36,1802.47 L1602.34,1804.08 L1600,1807.56 L1596.96,1812.3 L1593.73,1817.86 L1591.51,1822.59 L1588.28,1826.03 L1583.54,1829.55 L1579.67,1831.24 L1572.86,1832.12 L1567.36,1834.58 L1563.89,1838.23 L1561.22,1842.49 L1560.63,1843.43 L1556.77,1846.7 L1551.3,1848.68 L1545.75,1850.2 L1538.54,1848.98 L1532.57,1845.67 L1525.95,1840.61 L1506.9,1824.88 L1496.21,1813.7 L1490.24,1802.66 L1488.8,1798.1 L1487.8,1791.19 L1487.79,1791.15 L1487.68,1790.34 L1490.08,1783.79 L1495.14,1777.41 L1499.38,1769.44 L1502.02,1762.91 L1504.26,1752.1 L1504.88,1748.39 L1505.98,1739.03 L1505.31,1727.57 L1502.88,1720.01 L1498.3,1713.61 L1488.79,1709.39 L1481.53,1706.11 L1470.84,1702.09"/>
                </g>
                {/* Location Pins */}
                {map.map((pin, index) => (
                    <g key={index} transform={pin.coordinates}>
                        <MapPin name={pin.name} local={pin.local} desc={pin.description} keyword={pin.keyword} />
                    </g>
                ))}
            </g>
        </>
    );
}

export default MapSVG;