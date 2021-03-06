(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=474)})({474:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(475);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},475:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Liquica.17.06-21-2016 06:10:57
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Liquica",revision:17,standaloneInit:true,baseWidth:500,baseHeight:232,baseScaleFactor:10,entities:{"TL.LQ.BA":{outlines:[[M,4469,49,Q,4469,58,4479,62,4497,68,4499,70,4526,87,4514,166,4514,172,4514,177,4514,202,4478,229,4441,258,4401,258,4382,258,4376,243,4374,239,4371,212,4367,166,4309,166,4246,166,4172,194,4099,221,4086,221,4055,221,4046,215,4032,201,4005,185,3987,175,3957,170,3927,165,3911,155,3896,146,3874,138,3844,127,3819,127,3808,127,3773,113,3738,99,3734,99,3712,99,3682,107,3650,119,3635,122,3607,128,3562,128,3518,126,3509,127,3436,136,3378,164,3360,173,3289,216,3244,244,3191,268,3131,296,3097,301,3081,304,3031,301,2989,299,2975,306,2970,308,2934,338,2907,359,2885,359,2877,359,2864,357,2859,393,2852,419,2847,434,2847,467,2847,502,2855,518,2862,534,2862,546,2862,559,2856,571,2853,578,2845,592,2841,598,2841,603,2841,617,2859,628,2876,640,2876,652,2876,666,2866,669,2856,672,2856,682,2856,686,2880,717,2905,748,2905,760,2905,761,2902,771,2900,780,2900,784,2900,795,2911,798,2918,799,2935,801,2947,803,2955,809,2960,813,2969,821,2979,829,3002,851,3011,858,3021,859,3027,860,3040,861,3054,863,3059,865,3068,869,3071,877,3073,881,3077,891,3082,900,3094,900,3109,900,3127,929,3144,956,3144,971,3144,981,3143,983,3141,987,3133,987,3121,987,3114,981,3103,972,3090,963,L,3067,963,3067,979,Q,3072,990,3080,1011,3087,1029,3093,1037,3096,1040,3115,1053,3134,1068,3134,1082,L,3131,1115,Q,3131,1127,3140,1129,3154,1132,3161,1144,3171,1160,3171,1188,3176,1199,3178,1213,3178,1216,3178,1236,3178,1253,3173,1264,3170,1271,3160,1289,3154,1301,3156,1326,3157,1348,3149,1356,3142,1363,3123,1361,3105,1359,3102,1367,3102,1392,3096,1396,3093,1399,3082,1401,3074,1403,3074,1410,3074,1411,3080,1430,3086,1450,3087,1463,3088,1475,3097,1496,3106,1517,3106,1528,3106,1535,3100,1549,3094,1563,3094,1569,3094,1574,3090,1591,3086,1608,3084,1612,3077,1625,3066,1644,3058,1662,3058,1690,3067,1679,3083,1679,3116,1679,3133,1704,3150,1728,3161,1728,3173,1728,3198,1688,3227,1639,3242,1626,3256,1614,3291,1583,3324,1558,3352,1563,3369,1557,3404,1566,3448,1577,3465,1577,3466,1577,3480,1575,3495,1573,3501,1573,3502,1564,3510,1505,3516,1464,3516,1439,3516,1416,3528,1373,3545,1310,3573,1310,3597,1310,3623,1345,3649,1380,3663,1380,3668,1380,3719,1345,3727,1339,3751,1330,3780,1319,3789,1315,3802,1307,3816,1291,3829,1275,3841,1268,3851,1262,3874,1255,3890,1251,3897,1241,3911,1218,3926,1178,3942,1148,3980,1137,4037,1121,4049,1105,4071,1078,4072,1076,4086,1062,4099,1062,4109,1062,4132,1074,4154,1086,4163,1086,4175,1086,4189,1075,4203,1064,4210,1064,4223,1064,4235,1077,4246,1090,4258,1090,4281,1090,4312,1060,4343,1029,4394,1029,4398,1029,4428,1036,4457,1041,4468,1041,4504,1041,4542,1021,4581,1001,4591,1001,4606,1001,4633,1002,4655,1003,4670,999,4696,991,4716,979,4738,966,4754,960,4761,957,4775,957,4783,957,4797,958,4805,959,4811,946,4815,939,4819,928,4826,914,4829,886,4833,853,4834,844,4850,808,4894,779,4952,741,4964,724,L,4964,692,Q,4900,683,4892,675,4882,664,4882,600,4882,544,4901,510,4920,476,4920,447,4920,396,4891,378,4889,376,4814,350,4785,339,4766,300,4739,244,4728,231,4720,222,4675,185,4638,155,4626,133,4615,112,4605,87,4597,61,4593,56,4580,33,4525,33,4488,33,4485,34,Q,4469,36,4469,49,Z]],label:"Bazartete",shortLabel:"BA",labelPosition:[390.2,71.2],labelAlignment:[CEN,MID]},"TL.LQ.LI":{outlines:[[M,2864,357,Q,2853,354,2838,351,2805,341,2787,341,2762,341,2747,358,2739,367,2727,395,2705,449,2656,449,2641,449,2589,427,2537,405,2518,405,2476,405,2456,462,2443,500,2440,506,2429,529,2412,536,2360,561,2335,571,2342,602,2355,641,2372,691,2378,710,2380,720,2396,749,2409,774,2410,794,2411,802,2411,819,2412,834,2417,839,2420,842,2438,858,2443,863,2443,875,2443,890,2435,907,2421,928,2412,942,2409,947,2406,964,2404,977,2404,983,2404,996,2396,1004,2388,1012,2388,1016,2388,1030,2412,1053,2437,1077,2437,1119,2437,1145,2427,1171,2417,1197,2417,1218,2417,1227,2420,1247,2422,1263,2423,1272,2425,1274,2425,1276,2425,1293,2429,1315,2429,1324,2436,1338,2443,1351,2443,1354,2443,1359,2433,1377,2421,1397,2413,1403,2401,1411,2385,1412,2380,1413,2358,1413,2347,1413,2306,1408,2264,1402,2246,1401,2208,1397,2185,1395,2168,1393,2160,1379,2153,1366,2133,1366,2127,1366,2109,1393,2094,1415,2088,1427,2085,1434,2084,1458,2083,1475,2066,1489,2051,1501,2052,1522,2052,1534,2053,1557,2051,1571,2032,1582,2009,1593,2002,1598,1970,1617,1956,1659,1934,1722,1922,1741,1911,1765,1906,1774,1898,1790,1879,1801,1862,1813,1848,1821,1822,1838,1811,1838,1805,1838,1793,1825,1781,1811,1771,1811,1766,1811,1729,1845,1708,1863,1666,1901,1642,1923,1624,1966,1607,2008,1609,2039,1616,2035,1625,2035,1633,2035,1647,2044,1663,2052,1668,2053,1688,2057,1740,2053,1819,2053,1828,2047,1838,2037,1849,2029,1870,2014,1910,1995,1914,1993,1947,1973,1971,1958,1991,1954,2050,1941,2101,1929,2152,1915,2189,1894,2221,1875,2267,1834,2276,1827,2288,1799,2300,1773,2313,1766,2333,1754,2357,1744,2391,1730,2410,1730,2420,1730,2430,1734,2440,1738,2445,1738,2464,1738,2487,1716,2511,1695,2519,1671,2523,1660,2555,1630,2587,1600,2598,1600,2623,1600,2637,1629,2652,1659,2661,1659,2667,1659,2694,1644,2727,1629,2762,1629,2794,1629,2802,1630,2829,1635,2819,1654,L,2833,1654,Q,2841,1646,2856,1644,2860,1644,2876,1644,2889,1644,2902,1657,2909,1665,2924,1687,2958,1730,3017,1730,3040,1730,3048,1705,3052,1695,3058,1690,3058,1662,3066,1644,3077,1625,3084,1612,3086,1608,3090,1591,3094,1574,3094,1569,3094,1563,3100,1549,3106,1535,3106,1528,3106,1517,3097,1496,3088,1475,3087,1463,3086,1450,3080,1430,3074,1411,3074,1410,3074,1403,3082,1401,3093,1399,3096,1396,3102,1392,3102,1367,3105,1359,3123,1361,3142,1363,3149,1356,3157,1348,3156,1326,3154,1301,3160,1289,3170,1271,3173,1264,3178,1253,3178,1236,3178,1216,3178,1213,3176,1199,3171,1188,3171,1160,3161,1144,3154,1132,3140,1129,3131,1127,3131,1115,L,3134,1082,Q,3134,1068,3115,1053,3096,1040,3093,1037,3087,1029,3080,1011,3072,990,3067,979,L,3067,963,3090,963,Q,3103,972,3114,981,3121,987,3133,987,3141,987,3143,983,3144,981,3144,971,3144,956,3127,929,3109,900,3094,900,3082,900,3077,891,3073,881,3071,877,3068,869,3059,865,3054,863,3040,861,3027,860,3021,859,3011,858,3002,851,2979,829,2969,821,2960,813,2955,809,2947,803,2935,801,2918,799,2911,798,2900,795,2900,784,2900,780,2902,771,2905,761,2905,760,2905,748,2880,717,2856,686,2856,682,2856,672,2866,669,2876,666,2876,652,2876,640,2859,628,2841,617,2841,603,2841,598,2845,592,2853,578,2856,571,2862,559,2862,546,2862,534,2855,518,2847,502,2847,467,2847,434,2852,419,Q,2859,393,2864,357,Z]],label:"Liqui????",shortLabel:"LI",labelPosition:[272.9,119.8],labelAlignment:[CEN,MID]},"TL.LQ.MA":{outlines:[[M,1972,571,Q,1921,558,1917,558,1829,558,1792,559,1737,560,1673,566,1614,571,1553,584,1487,597,1446,602,1439,602,1418,602,1396,601,1385,602,1377,602,1359,612,1339,624,1339,624,1316,632,1278,636,1238,640,1219,645,1196,651,1155,669,1098,693,1096,694,1085,698,1035,715,1e3,727,978,737,967,742,879,791,807,832,777,841,751,850,714,867,674,886,642,898,606,913,585,923,544,940,522,941,409,949,338,1062,316,1098,286,1164,259,1224,245,1252,243,1255,242,1258,241,1260,240,1263,231,1289,218,1331,203,1376,186,1414,181,1426,144,1483,110,1540,110,1562,110,1589,126,1625,141,1660,141,1736,141,1765,129,1820,123,1849,113,1889,113,1932,75,1992,56,2022,36,2044,36,2083,84,2093,100,2096,156,2096,213,2096,247,2090,281,2084,307,2084,341,2084,369,2111,399,2141,441,2147,452,2149,480,2148,502,2147,511,2151,529,2158,543,2173,551,2181,566,2199,590,2223,635,2235,680,2249,732,2246,762,2244,811,2250,866,2256,878,2260,890,2262,920,2257,937,2254,968,2247,983,2244,1010,2228,1035,2214,1053,2214,1078,2214,1098,2248,1118,2282,1144,2282,1164,2282,1209,2224,1260,2157,1281,2145,1314,2127,1398,2092,1441,2075,1477,2061,1485,2061,1505,2071,1524,2081,1547,2081,1576,2081,1590,2059,1598,2045,1609,2039,1607,2008,1624,1966,1642,1923,1666,1901,1708,1863,1729,1845,1766,1811,1771,1811,1781,1811,1793,1825,1805,1838,1811,1838,1822,1838,1848,1821,1862,1813,1879,1801,1898,1790,1906,1774,1911,1765,1922,1741,1934,1722,1956,1659,1970,1617,2002,1598,2009,1593,2032,1582,2051,1571,2053,1557,2052,1534,2052,1522,2051,1501,2066,1489,2083,1475,2084,1458,2085,1434,2088,1427,2094,1415,2109,1393,2127,1366,2133,1366,2153,1366,2160,1379,2168,1393,2185,1395,2208,1397,2246,1401,2264,1402,2306,1408,2347,1413,2358,1413,2380,1413,2385,1412,2401,1411,2413,1403,2421,1397,2433,1377,2443,1359,2443,1354,2443,1351,2436,1338,2429,1324,2429,1315,2425,1293,2425,1276,L,2423,1276,Q,2423,1274,2423,1272,2422,1263,2420,1247,2417,1227,2417,1218,2417,1197,2427,1171,2437,1145,2437,1119,2437,1077,2412,1053,2388,1030,2388,1016,2388,1012,2396,1004,2404,996,2404,983,2404,977,2406,964,2409,947,2412,942,2421,928,2435,907,2443,890,2443,875,2443,863,2438,858,2420,842,2417,839,2412,834,2411,819,2411,802,2410,794,2409,774,2396,749,2380,720,2378,710,2372,691,2355,641,2342,602,2335,571,2327,574,2321,576,2291,587,2227,587,2183,588,2162,582,L,2034,584,Q,2023,584,1972,571,Z]],label:"Maubara",shortLabel:"MA",labelPosition:[124,142],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"liquica",type:"maps"}}})});