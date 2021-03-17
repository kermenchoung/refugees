(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=654)})({654:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(655);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},655:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Wellington.18.08-16-2012 05:14:05
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Wellington",revision:18,standaloneInit:true,baseWidth:600,baseHeight:424,baseScaleFactor:10,entities:{1:{outlines:[[M,2729,1133,L,2729,1111,Q,2698,1111,2685,1109,L,2626,1109,2626,1137,2602,1137,2602,1159,2545,1159,2545,1177,2479,1177,2479,1161,2416,1161,2411,1175,2387,1175,2387,1191,Q,2363,1190,2352,1191,2341,1192,2339,1202,2338,1209,2343,1221,L,2326,1221,Q,2324,1228,2325,1262,2320,1289,2297,1278,L,2297,1291,2282,1291,Q,2275,1288,2264,1288,L,2264,1341,2284,1341,2284,1379,2396,1379,2402,1378,2410,1435,Q,2402,1444,2368,1476,2373,1503,2358,1509,2335,1512,2322,1514,2329,1534,2311,1554,2293,1574,2270,1563,L,2270,1621,2245,1621,2245,1665,Q,2245,1689,2230,1687,2225,1692,2212,1695,2203,1697,2203,1705,2205,1729,2185,1732,L,2185,1784,2206,1784,2206,1855,2179,1855,Q,2179,1864,2165,1878,2151,1892,2151,1906,2151,1921,2145,1982,L,2123,1982,2123,2010,2096,2010,2096,2040,2072,2040,2072,2104,2008,2104,2008,2127,1977,2127,Q,1975,2134,1977,2155,1976,2171,1956,2165,L,1956,2200,1928,2200,1928,2220,1913,2220,Q,1913,2228,1911,2233,L,1911,2269,1880,2269,1880,2351,1853,2351,1852,2376,Q,1823,2384,1819,2388,L,1774,2388,1774,2370,1739,2370,Q,1736,2382,1733,2388,L,1712,2388,1712,2373,1684,2373,1684,2392,1636,2392,1636,2492,1614,2492,1614,2513,1594,2513,1594,2534,Q,1599,2537,1614,2537,L,1614,2581,1636,2581,1636,2693,1615,2693,Q,1621,2717,1591,2717,L,1591,2757,1542,2757,Q,1539,2775,1539,2819,L,1523,2819,1523,2854,1498,2854,1498,2885,1474,2885,1474,2918,1450,2918,1450,2943,1425,2943,1425,3007,1384,3007,Q,1380,2988,1381,2982,L,1349,2982,1349,2964,1306,2964,1306,2998,1288,2998,1288,3037,1271,3037,1270,3061,Q,1238,3056,1247,3078,L,1222,3078,Q,1225,3086,1225,3101,L,1209,3101,1209,3125,Q,1250,3163,1247,3177,L,1288,3177,1290,3193,Q,1290,3190,1290,3188,L,1313,3188,1313,3164,1407,3164,1407,3145,Q,1439,3153,1441,3135,1459,3139,1472,3131,1485,3120,1478,3101,L,1533,3101,Q,1542,3106,1573,3123,1620,3126,1627,3136,1631,3142,1650,3142,1671,3143,1676,3148,1692,3167,1728,3164,1768,3184,1772,3184,1774,3184,1786,3203,1791,3211,1813,3208,1824,3211,1831,3220,1837,3227,1852,3228,1858,3228,1873,3239,1887,3249,1896,3247,1896,3256,1900,3266,1925,3260,1946,3281,1967,3304,1985,3305,2011,3306,2020,3332,2023,3344,2041,3347,2053,3348,2046,3370,L,2060,3370,Q,2061,3387,2063,3434,2064,3438,2076,3441,2087,3445,2090,3462,L,2082,3462,2082,3490,2063,3490,Q,2061,3537,2042,3531,2041,3539,2042,3557,2040,3570,2025,3566,L,2025,3730,Q,1993,3718,1998,3776,L,1979,3776,1979,3815,2020,3815,2020,3831,2040,3831,2040,3852,2059,3852,2059,3966,Q,2058,3988,2073,4016,2086,4039,2079,4066,L,2107,4066,2107,4166,2129,4166,2129,4147,Q,2151,4147,2166,4145,L,2177,4145,2177,4166,2227,4166,2227,4186,2286,4186,2286,4206,2332,4206,2332,4177,2402,4177,2402,4158,Q,2415,4158,2422,4160,L,2432,4160,2432,4141,2453,4141,2453,4118,Q,2476,4118,2489,4120,L,2489,4101,Q,2511,4101,2515,4082,2513,4060,2514,4055,L,2533,4055,2533,4018,2590,4018,Q,2591,4e3,2672,4e3,2694,4e3,2728,3998,2751,3999,2755,4014,L,2780,4014,2780,4e3,2814,4e3,2814,3981,2843,3981,2843,3953,Q,2861,3952,2862,3943,2864,3933,2884,3933,2923,3933,2919,3911,2927,3907,2938,3866,2945,3837,2982,3852,2976,3827,3002,3833,L,3002,3812,Q,3037,3827,3022,3765,L,3044,3765,3044,3751,3061,3751,Q,3064,3734,3085,3731,3097,3729,3124,3728,L,3124,3698,Q,3126,3697,3186,3699,3225,3699,3223,3675,L,3264,3675,3264,3658,3301,3658,3307,3659,3307,3642,3320,3642,3320,3616,3368,3616,3368,3600,3386,3600,3386,3548,3434,3548,3434,3531,3463,3531,Q,3465,3504,3486,3511,3479,3465,3526,3474,L,3526,3450,3547,3450,Q,3543,3430,3543,3418,3544,3395,3567,3404,3554,3376,3594,3385,L,3594,3369,3611,3369,Q,3599,3345,3655,3345,L,3655,3330,3674,3330,3674,3308,3731,3308,Q,3721,3287,3740,3285,3751,3285,3777,3286,3772,3270,3794,3271,L,3796,3251,3845,3251,3849,3227,Q,3885,3242,3898,3214,3912,3181,3934,3185,3936,3173,3936,3145,L,4005,3145,4005,3126,4045,3126,4045,3105,Q,4051,3108,4058,3109,L,4058,3058,4025,3058,4025,3050,4005,3050,4005,3037,4018,3037,Q,4013,3010,4034,2997,4056,2984,4056,2971,L,4073,2971,4073,2958,Q,4059,2957,4012,2934,3972,2916,3935,2923,L,3935,2876,Q,3944,2876,3950,2863,3956,2850,3953,2838,3955,2838,4011,2839,4046,2839,4053,2827,L,4053,2785,Q,4047,2783,4032,2783,4037,2757,4009,2755,3968,2753,3963,2749,3896,2712,3896,2702,3896,2695,3906,2692,3914,2688,3914,2677,3914,2659,3904,2657,3891,2655,3889,2643,3887,2631,3870,2626,L,3854,2624,Q,3839,2624,3842,2639,L,3832,2639,3832,2654,3817,2654,3817,2631,3804,2631,3804,2612,3830,2612,Q,3830,2597,3828,2591,L,3828,2582,3859,2582,3859,2532,Q,3886,2538,3887,2516,3884,2485,3887,2471,3903,2471,3918,2464,L,3918,2399,Q,3906,2399,3900,2401,L,3889,2401,3889,2386,3821,2386,3821,2422,3806,2422,Q,3806,2424,3807,2468,3807,2494,3787,2490,L,3787,2512,3745,2512,Q,3747,2521,3747,2540,L,3724,2540,Q,3726,2543,3726,2555,L,3710,2555,Q,3707,2553,3705,2512,L,3682,2512,3682,2492,Q,3671,2490,3648,2490,L,3652,2455,Q,3621,2462,3599,2441,3576,2419,3544,2426,L,3511,2426,Q,3496,2411,3494,2411,L,3424,2411,Q,3424,2399,3422,2394,L,3365,2394,3365,2375,3329,2375,Q,3329,2357,3327,2350,L,3327,2335,3343,2335,3341,2276,3369,2276,Q,3369,2272,3371,2272,L,3371,2246,3326,2247,Q,3302,2247,3302,2224,L,3302,2219,3323,2219,3323,2194,3240,2194,Q,3221,2195,3211,2181,3200,2167,3188,2167,3165,2166,3152,2149,3138,2132,3124,2132,L,3044,2132,3044,2117,Q,3002,2116,2987,2114,L,2987,2075,3020,2075,3020,2038,Q,3e3,2038,2993,2036,2998,2007,2997,1985,3008,1985,3031,1987,L,3031,1972,3059,1972,Q,3055,1961,3055,1953,3055,1940,3074,1940,3094,1939,3096,1936,3098,1933,3098,1912,3098,1908,3083,1881,3080,1878,3081,1844,3080,1806,3090,1809,L,3090,1784,3059,1784,3059,1723,3033,1723,3033,1750,3018,1750,3018,1767,2997,1767,Q,2995,1763,2995,1743,L,2900,1743,2900,1723,2847,1723,2847,1746,2818,1746,2818,1719,2794,1719,2794,1748,2771,1748,Q,2758,1740,2750,1741,L,2750,1714,Q,2727,1714,2716,1712,L,2716,1586,2735,1586,2735,1518,2714,1518,2714,1454,2691,1454,2691,1420,Q,2714,1419,2718,1417,L,2718,1380,2698,1380,2698,1363,2674,1363,2674,1345,Q,2691,1348,2692,1299,2689,1245,2689,1236,L,2709,1236,Q,2709,1204,2733,1211,L,2733,1175,2750,1175,2750,1133,Z]],label:"South Wairarapa District",shortLabel:"SP",labelPosition:[264.1,265.7],labelAlignment:[CEN,MID]},2:{outlines:[[M,1275,2051,L,1262,2051,1262,2063,1208,2063,1208,2082,1087,2082,1087,2051,1063,2051,1063,2067,1049,2067,1049,2084,1028,2084,1028,2095,Q,1014,2099,1009,2099,1010,2113,998,2120,985,2127,986,2141,988,2156,975,2165,962,2175,962,2192,L,947,2192,947,2218,Q,907,2219,903,2286,902,2298,884,2317,L,884,2374,867,2374,867,2413,895,2413,895,2429,Q,903,2430,934,2425,960,2426,951,2455,958,2456,976,2455,991,2458,995,2481,L,1026,2481,1026,2559,1045,2559,1045,2628,Q,1027,2627,1026,2651,L,1026,2694,1011,2694,1011,2712,982,2712,Q,982,2759,980,2774,975,2777,962,2783,962,2800,960,2807,L,941,2807,941,2837,909,2837,909,2872,885,2872,883,2904,862,2904,862,2958,839,2958,838,2998,820,2998,820,3023,838,3023,839,3041,Q,857,3031,861,3049,863,3059,865,3082,L,885,3085,Q,886,3091,885,3105,887,3115,902,3110,L,902,3135,926,3136,926,3184,895,3184,895,3204,882,3204,883,3246,Q,908,3242,928,3267,936,3267,951,3267,965,3268,962,3283,L,999,3283,999,3308,Q,1015,3302,1019,3318,1022,3327,1023,3347,L,1042,3347,Q,1032,3373,1065,3373,L,1065,3395,1075,3395,1075,3378,1084,3378,1084,3356,1099,3356,Q,1101,3332,1127,3316,1159,3302,1173,3295,1179,3291,1186,3274,1203,3275,1211,3264,1221,3247,1237,3246,1247,3246,1264,3246,L,1264,3230,1288,3230,Q,1288,3206,1290,3193,L,1288,3177,1247,3177,Q,1250,3163,1209,3125,L,1209,3101,1225,3101,Q,1225,3086,1222,3078,L,1247,3078,Q,1238,3056,1270,3061,L,1271,3037,1288,3037,1288,2998,1306,2998,1306,2964,1349,2964,1349,2982,1381,2982,Q,1380,2988,1384,3007,L,1425,3007,1425,2943,1450,2943,1450,2918,1474,2918,1474,2885,1498,2885,1498,2854,1523,2854,1523,2819,1539,2819,Q,1539,2775,1542,2757,L,1591,2757,1591,2717,Q,1621,2717,1615,2693,L,1636,2693,1636,2581,1614,2581,1614,2537,Q,1599,2537,1594,2534,L,1594,2513,1614,2513,1614,2492,1636,2492,1636,2392,1590,2391,1590,2410,1558,2410,1558,2388,1509,2388,1509,2410,1488,2410,Q,1470,2407,1446,2407,L,1446,2389,1413,2389,1413,2369,1383,2369,Q,1390,2395,1369,2395,1350,2395,1348,2386,1349,2373,1348,2366,L,1331,2366,1331,2328,1353,2328,1353,2298,1375,2298,1376,2270,1400,2270,1400,2206,Q,1373,2180,1356,2172,L,1356,2160,Q,1365,2160,1370,2158,1370,2145,1360,2139,1350,2132,1350,2124,L,1350,2069,Q,1326,2070,1316,2069,1298,2067,1307,2044,L,1278,2044,Z]],label:"Lower Hutt City",shortLabel:"LH",labelPosition:[122.8,271.9],labelAlignment:[CEN,MID]},3:{outlines:[[M,853,2128,L,853,2112,825,2112,825,2089,781,2089,781,2112,748,2112,748,2148,719,2148,719,2112,700,2112,700,2065,667,2065,667,2040,654,2040,654,2061,641,2061,641,2069,596,2069,596,2084,584,2084,584,2101,Q,557,2091,554,2114,552,2127,554,2150,L,533,2150,533,2165,478,2165,Q,474,2174,480,2213,480,2244,454,2230,448,2243,434,2253,430,2264,430,2288,415,2286,415,2296,415,2302,417,2318,417,2331,409,2332,398,2331,390,2332,L,390,2377,339,2377,339,2396,330,2396,315,2393,315,2432,298,2432,298,2454,250,2455,250,2472,149,2472,149,2491,130,2491,130,2516,106,2516,106,2534,84,2534,84,2554,70,2554,70,2612,45,2612,45,2717,46,2719,89,2719,89,2787,Q,85,2809,101,2820,116,2831,113,2845,L,128,2845,128,2857,142,2858,Q,141,2879,166,2883,162,2908,191,2907,L,191,2925,257,2926,257,2945,283,2946,283,2965,Q,320,2961,317,2987,L,332,2987,332,3006,376,3006,376,3030,399,3030,399,3013,416,3013,416,2982,437,2982,437,2963,517,2963,517,2945,540,2945,540,2967,645,2967,645,2925,Q,645,2905,642,2887,L,683,2887,Q,684,2901,683,2916,683,2926,695,2923,696,2929,695,2939,695,2948,708,2946,L,740,2946,740,2962,747,2962,747,2945,763,2945,763,2908,782,2908,783,2889,807,2889,807,2860,Q,804,2857,805,2848,L,782,2848,782,2834,764,2834,764,2809,785,2809,Q,783,2760,782,2740,L,800,2740,800,2719,788,2719,788,2700,766,2700,766,2675,754,2675,754,2695,744,2695,744,2756,727,2756,727,2773,708,2773,708,2792,Q,710,2797,710,2809,L,686,2809,686,2794,657,2794,656,2787,656,2777,675,2777,675,2765,701,2765,701,2740,686,2740,686,2714,625,2714,625,2682,Q,617,2680,598,2680,L,598,2651,615,2651,615,2585,647,2585,Q,649,2574,649,2553,704,2547,717,2535,728,2515,734,2506,744,2490,764,2498,L,764,2478,Q,787,2478,799,2476,L,799,2457,819,2457,Q,810,2432,836,2434,861,2435,855,2413,L,867,2413,867,2374,884,2374,884,2317,Q,902,2298,903,2286,907,2219,947,2218,L,947,2192,962,2192,Q,962,2175,975,2165,988,2156,986,2141,985,2127,998,2120,1010,2113,1009,2099,L,1008,2099,Q,993,2088,986,2084,977,2096,932,2091,929,2095,930,2106,L,890,2106,890,2150,877,2150,877,2128,Z]],label:"Wellington City",shortLabel:"WE",labelPosition:[37.6,264.2],labelAlignment:[CEN,MID]},4:{outlines:[[M,596,1794,L,596,1850,Q,625,1857,621,1823,L,659,1823,659,1765,618,1767,618,1794,Z],[M,1193,1454,L,1193,1437,1167,1437,Q,1167,1438,1167,1439,L,1138,1439,1138,1458,1118,1458,Q,1121,1481,1089,1476,L,1089,1493,1067,1493,1067,1519,1041,1520,1041,1536,958,1536,956,1554,Q,930,1545,927,1561,925,1569,926,1594,L,909,1594,Q,909,1613,907,1622,L,865,1622,865,1641,848,1641,848,1680,820,1680,820,1707,863,1707,863,1725,883,1725,883,1746,905,1746,904,1781,919,1781,920,1827,978,1827,978,1801,1007,1801,1007,1827,1025,1827,1025,1846,1066,1846,1066,1886,978,1886,Q,950,1882,934,1882,904,1883,913,1905,883,1896,891,1929,L,869,1929,869,1954,851,1954,851,1984,828,1984,828,2005,818,2005,Q,819,1935,820,1923,L,859,1923,Q,849,1876,901,1883,L,901,1868,944,1868,944,1851,915,1851,915,1839,889,1839,889,1820,869,1820,869,1805,857,1805,857,1825,828,1825,828,1842,804,1842,804,1886,746,1885,745,1909,716,1909,Q,709,1905,701,1905,L,702,1961,662,1961,662,1985,636,1985,636,2024,611,2024,611,2048,596,2048,596,2069,641,2069,641,2061,654,2061,654,2040,667,2040,667,2065,700,2065,700,2112,719,2112,719,2148,748,2148,748,2112,781,2112,781,2089,825,2089,825,2112,853,2112,853,2128,877,2128,877,2150,890,2150,890,2106,930,2106,Q,929,2095,932,2091,977,2096,986,2084,993,2088,1008,2099,L,1009,2099,Q,1014,2099,1028,2095,L,1028,2084,1049,2084,1049,2067,1063,2067,1063,2051,1087,2051,1087,2082,1208,2082,1208,2063,1262,2063,1262,2051,1275,2051,1278,2044,1278,2008,1306,2008,1306,1992,1332,1992,Q,1331,1961,1331,1942,1330,1907,1343,1906,L,1343,1870,Q,1333,1874,1328,1866,1323,1857,1326,1849,1317,1849,1313,1847,L,1313,1824,1352,1824,1352,1752,1339,1752,1339,1764,1286,1764,1286,1697,1260,1697,1260,1627,Q,1265,1625,1280,1625,L,1280,1604,1291,1604,1291,1578,Q,1273,1566,1272,1548,1271,1530,1252,1521,L,1252,1480,1227,1480,1227,1454,Z]],label:"Porirua City",shortLabel:"PR",labelPosition:[108.4,166.1],labelAlignment:[CEN,MID]},5:{outlines:[[M,2142,1315,L,2142,1295,2085,1295,2085,1334,2066,1334,2066,1351,2045,1351,2045,1323,2028,1323,Q,2033,1297,2017,1295,L,2017,1315,1956,1315,1956,1273,1937,1273,1937,1304,1888,1304,1888,1277,Q,1872,1275,1840,1275,1848,1232,1813,1245,L,1813,1216,1774,1216,1774,1238,1726,1238,1726,1258,1696,1258,1696,1304,1724,1313,1724,1363,1639,1363,1639,1338,1612,1338,1612,1317,1597,1317,1597,1275,1577,1275,Q,1572,1248,1571,1247,L,1571,1264,1557,1264,1557,1298,1533,1298,1533,1338,1514,1338,Q,1516,1375,1498,1374,1498,1380,1503,1393,L,1468,1393,Q,1478,1421,1420,1425,1360,1426,1369,1461,L,1332,1461,1332,1480,1252,1480,1252,1521,Q,1271,1530,1272,1548,1273,1566,1291,1578,L,1291,1604,1280,1604,1280,1625,Q,1265,1625,1260,1627,L,1260,1697,1286,1697,1286,1764,1339,1764,1339,1752,1352,1752,1352,1824,1313,1824,1313,1847,Q,1317,1849,1326,1849,1323,1857,1328,1866,1333,1874,1343,1870,L,1343,1906,Q,1330,1907,1331,1942,1331,1961,1332,1992,L,1306,1992,1306,2008,1278,2008,1278,2044,1307,2044,Q,1298,2067,1316,2069,1326,2070,1350,2069,L,1350,2124,Q,1350,2132,1360,2139,1370,2145,1370,2158,1365,2160,1356,2160,L,1356,2172,Q,1373,2180,1400,2206,L,1400,2270,1376,2270,1375,2298,1353,2298,1353,2328,1331,2328,1331,2366,1348,2366,Q,1349,2373,1348,2386,1350,2395,1369,2395,1390,2395,1383,2369,L,1413,2369,1413,2389,1446,2389,1446,2407,Q,1470,2407,1488,2410,L,1509,2410,1509,2388,1558,2388,1558,2410,1590,2410,1590,2391,1684,2392,1684,2373,1712,2373,1712,2388,1733,2388,Q,1736,2382,1739,2370,L,1774,2370,1774,2388,1819,2388,Q,1823,2384,1852,2376,L,1853,2351,1880,2351,1880,2269,1911,2269,1911,2233,Q,1913,2228,1913,2220,L,1928,2220,1928,2200,1956,2200,1956,2165,Q,1976,2171,1977,2155,1975,2134,1977,2127,L,2008,2127,2008,2104,2072,2104,2072,2040,2096,2040,2096,2010,2123,2010,2123,1982,2145,1982,Q,2151,1921,2151,1906,2151,1892,2165,1878,2179,1864,2179,1855,L,2206,1855,2206,1784,2185,1784,2185,1732,Q,2205,1729,2203,1705,2203,1697,2212,1695,2225,1692,2230,1687,2245,1689,2245,1665,L,2245,1621,2270,1621,2270,1563,Q,2293,1574,2311,1554,2329,1534,2322,1514,2335,1512,2358,1509,2373,1503,2368,1476,2402,1444,2410,1435,L,2402,1378,2396,1379,2284,1379,2284,1341,2264,1341,2264,1315,Z]],label:"Upper Hutt City",shortLabel:"UH",labelPosition:[172.3,181.3],labelAlignment:[CEN,MID]},6:{outlines:[[M,1125,618,Q,1130,636,1113,659,1097,684,1103,704,L,1090,704,1090,744,1069,744,1069,763,1042,763,Q,1038,761,1027,761,L,1027,807,1010,807,1010,827,987,827,987,851,942,851,942,912,966,912,966,934,1010,934,1010,901,1053,901,1053,917,Q,1050,920,1050,928,L,1067,928,1067,848,Q,1090,850,1088,827,L,1123,827,Q,1114,809,1143,812,L,1143,778,1158,776,1158,740,1179,740,1179,700,1202,700,1202,677,Q,1210,677,1227,674,L,1227,654,1254,654,1254,643,1236,643,1236,624,1195,624,1195,603,1181,603,1181,618,Z],[M,2692,239,L,2658,239,2658,247,2647,247,2647,237,2607,237,2607,319,2586,319,2586,334,2557,334,2557,319,2450,319,2450,334,Q,2423,333,2411,333,2390,335,2400,357,L,2375,357,2375,376,2360,376,2360,402,2289,402,2289,378,2251,378,2251,359,2156,359,2156,387,2105,387,2105,365,2061,365,2061,319,Q,2055,317,2042,317,L,2042,277,2101,277,2101,230,Q,2091,219,2082,224,2087,211,2072,202,2057,194,2048,199,L,2048,188,1991,188,Q,1991,175,1987,136,1957,144,1947,129,1938,107,1933,97,L,1907,97,1907,70,1879,70,1879,88,1863,88,Q,1859,96,1865,133,1865,163,1839,156,1847,180,1832,194,1814,208,1818,222,1818,225,1810,232,1801,238,1802,247,1804,277,1780,277,1789,308,1759,321,1756,329,1759,352,1757,370,1734,363,1742,378,1732,381,1717,385,1717,400,1717,410,1716,432,1713,447,1695,441,1692,448,1695,466,1692,483,1675,488,L,1675,518,Q,1674,521,1666,522,1658,523,1656,531,1660,559,1636,581,1638,592,1621,607,1605,621,1614,644,1607,644,1603,645,1603,658,1586,673,1568,687,1557,722,L,1540,722,Q,1548,742,1519,762,1483,781,1476,788,1464,797,1459,799,1456,813,1453,816,L,1434,829,1434,856,1415,856,1415,873,1350,873,1350,892,1328,892,1328,932,1315,932,1315,1029,Q,1312,1049,1317,1087,1317,1115,1291,1111,1291,1112,1292,1180,1293,1219,1269,1215,1269,1220,1272,1238,1272,1253,1254,1257,1251,1276,1252,1320,L,1225,1320,1225,1335,1208,1335,1209,1383,Q,1196,1377,1193,1386,1186,1400,1181,1403,1165,1412,1167,1437,L,1193,1437,1193,1454,1227,1454,1227,1480,1332,1480,1332,1461,1369,1461,Q,1360,1426,1420,1425,1478,1421,1468,1393,L,1503,1393,Q,1498,1380,1498,1374,1516,1375,1514,1338,L,1533,1338,1533,1298,1557,1298,1557,1264,1571,1264,1571,1247,Q,1572,1248,1577,1275,L,1597,1275,1597,1317,1612,1317,1612,1338,1639,1338,1639,1363,1724,1363,1724,1313,1696,1304,1696,1258,1726,1258,1726,1238,1774,1238,1774,1216,1813,1216,1813,1245,Q,1848,1232,1840,1275,1872,1275,1888,1277,L,1888,1304,1937,1304,1937,1273,1956,1273,1956,1315,2017,1315,2017,1295,Q,2033,1297,2028,1323,L,2045,1323,2045,1351,2066,1351,2066,1334,2085,1334,2085,1295,2142,1295,2142,1315,2264,1315,2264,1288,Q,2275,1288,2282,1291,L,2297,1291,2297,1278,Q,2320,1289,2325,1262,2324,1228,2326,1221,L,2343,1221,Q,2338,1209,2339,1202,L,2303,1201,2303,1149,2352,1149,Q,2354,1151,2362,1153,L,2371,1153,2371,1129,2400,1129,Q,2402,1131,2408,1134,L,2413,1134,2413,1114,2452,1114,2452,1092,2476,1092,2476,1068,2531,1068,2531,1007,2559,1007,Q,2561,1002,2561,987,L,2597,987,2597,948,2609,948,2609,688,2590,688,2590,670,Q,2615,677,2615,645,2614,641,2614,637,L,2614,605,2669,605,2669,567,Q,2669,552,2676,551,2680,551,2690,550,2692,523,2692,468,L,2713,468,2713,442,2736,442,Q,2735,418,2734,406,2734,385,2753,392,L,2753,357,2774,357,2774,341,2842,341,2840,300,2818,300,Q,2811,294,2812,285,L,2749,285,2749,262,2692,262,Z]],label:"Kapiti Coast District",shortLabel:"KC",labelPosition:[199.9,77.5],labelAlignment:[CEN,MID]},7:{outlines:[[M,5214,89,L,5193,89,Q,5202,72,5165,72,5139,72,5136,80,5134,86,5133,97,5131,105,5119,101,5101,135,5101,150,L,5101,219,5086,221,5086,242,5053,242,5053,259,4953,259,Q,4953,253,4948,238,L,4906,238,4906,215,4896,215,Q,4896,194,4887,194,L,4868,196,4859,238,4837,238,4837,257,Q,4827,255,4814,272,4804,285,4789,282,L,4723,282,Q,4723,336,4721,338,4719,340,4663,340,L,4663,361,4621,361,4621,393,4606,393,4606,426,4583,426,4583,458,4575,458,4575,441,4553,441,Q,4551,428,4549,422,L,4511,422,4511,404,4492,404,Q,4435,481,4387,483,L,4387,502,4368,502,Q,4368,479,4351,477,4331,479,4328,477,4299,439,4295,439,4291,441,4287,441,L,4287,461,4273,461,Q,4264,453,4265,441,L,4226,441,4226,422,4204,422,4204,446,4188,446,4188,483,4176,483,4176,502,4110,502,Q,4103,481,4104,463,L,4068,463,4068,483,4049,483,Q,4043,449,4012,458,L,4009,384,4051,384,4051,338,4086,338,4085,307,Q,4084,290,4102,285,L,4102,256,4062,256,4062,212,Q,4073,207,4073,190,4073,178,4056,163,4038,148,4040,136,L,4022,136,Q,4022,138,4014,138,L,4012,153,3992,153,3992,203,3971,203,3971,167,3979,167,3979,136,3761,140,3761,221,3730,221,3730,273,3706,275,Q,3695,275,3693,270,3690,257,3689,256,L,3652,256,3652,291,Q,3634,290,3630,293,L,3630,302,Q,3632,308,3632,321,L,3556,321,3556,372,3532,372,3532,361,3510,361,3510,346,3471,346,3471,323,3455,321,3455,300,3401,300,3401,279,3344,279,3344,295,3324,295,3324,273,3305,273,3305,239,3275,239,3275,216,Q,3262,220,3253,221,3238,221,3237,203,3214,202,3205,200,3189,197,3193,177,L,3155,177,Q,3147,167,3150,156,L,3113,156,Q,3117,137,3104,136,3085,138,3073,136,L,3069,114,3028,114,3028,97,3008,97,3008,116,2993,116,Q,2993,141,2980,148,2979,189,2971,192,2952,196,2951,199,L,2951,223,Q,2951,228,2942,238,2934,248,2936,258,L,2916,258,2916,353,Q,2931,360,2933,359,L,2933,379,Q,2948,379,2952,381,2944,397,2959,412,2972,425,2990,421,2994,443,3025,440,3047,438,3038,464,L,3073,464,3073,518,Q,3053,524,3053,535,3053,587,3058,600,L,3058,632,3040,632,3040,706,3009,706,3009,721,Q,3009,722,3016,744,L,3016,761,2994,761,2994,790,3009,790,Q,3013,815,3018,820,3020,824,3040,829,3040,848,3042,855,L,3060,855,3060,921,Q,3066,923,3079,923,L,3079,951,3156,951,3156,966,Q,3178,958,3178,982,L,3199,982,3200,1008,Q,3213,1010,3244,1010,3241,1020,3246,1028,3251,1036,3261,1032,3270,1080,3273,1082,3277,1085,3277,1135,3299,1129,3312,1144,3327,1160,3345,1158,3337,1188,3359,1214,3379,1240,3408,1242,3407,1270,3425,1286,3434,1296,3453,1310,3461,1318,3473,1344,3485,1366,3504,1362,L,3504,1390,Q,3523,1389,3533,1412,3543,1439,3571,1443,3586,1477,3592,1479,3615,1488,3630,1504,L,3630,1593,3609,1593,3609,1679,3592,1679,3592,1698,3528,1698,3528,1724,3499,1724,3499,1779,3563,1779,3563,1808,3589,1808,3589,1794,3602,1794,3602,1777,Q,3599,1775,3600,1768,L,3624,1768,3624,1731,3647,1731,Q,3657,1707,3666,1707,L,3666,1694,3651,1694,3651,1677,3685,1677,3685,1657,3707,1657,Q,3713,1659,3727,1659,L,3727,1622,3702,1622,3702,1598,3736,1598,3736,1585,3827,1585,3827,1559,3875,1559,Q,3878,1501,3879,1500,L,3897,1500,3897,1519,3930,1519,3930,1498,3954,1498,3958,1534,Q,3958,1554,3956,1557,3952,1564,3932,1563,L,3932,1585,Q,3941,1585,3949,1587,L,3949,1602,3972,1602,3972,1622,3995,1622,3995,1696,3976,1696,Q,3978,1716,3941,1707,L,3941,1722,3926,1722,3927,1806,Q,3907,1800,3895,1814,3882,1827,3887,1849,L,3874,1849,3874,1865,Q,3892,1883,3900,1882,3938,1877,3944,1889,3951,1904,3957,1923,3970,1930,3988,1939,L,3988,1961,3975,1961,Q,3975,1963,3973,1968,3972,1981,3994,1983,4013,1985,4010,2009,L,4032,2009,4032,2029,4049,2029,Q,4046,2037,4051,2043,4055,2049,4062,2046,4050,2078,4072,2085,4076,2086,4115,2088,L,4115,2111,Q,4123,2109,4143,2109,L,4143,2193,4180,2193,4180,2212,4206,2212,Q,4205,2200,4218,2193,4233,2185,4231,2168,L,4263,2168,4263,2147,4335,2147,4335,2123,4347,2123,4347,2170,4366,2170,4366,2189,4383,2189,4383,2201,4416,2201,4416,2164,4462,2164,4462,2195,4499,2195,Q,4501,2204,4501,2221,L,4523,2221,4523,2295,4543,2295,4543,2350,4578,2350,4578,2370,4624,2370,4624,2400,4712,2401,Q,4721,2381,4721,2367,4721,2351,4722,2345,4724,2337,4741,2329,4747,2326,4747,2308,4747,2289,4758,2285,4777,2277,4789,2250,4823,2231,4828,2219,4835,2201,4870,2204,4873,2202,4888,2166,4899,2165,4921,2162,4937,2155,4929,2130,L,4957,2128,Q,4960,2109,4972,2101,4973,2100,4976,2062,4994,2025,4994,1990,4994,1976,5002,1973,5008,1970,5007,1964,L,5007,1911,5022,1902,Q,5023,1901,5028,1887,5031,1885,5044,1883,5054,1880,5053,1866,5051,1850,5075,1839,5084,1834,5081,1807,5099,1795,5094,1739,5093,1728,5110,1711,5125,1695,5116,1666,5115,1660,5123,1656,5132,1652,5131,1645,L,5131,1605,5150,1605,Q,5153,1597,5146,1593,L,5146,1582,5169,1582,5169,1563,5190,1563,Q,5186,1552,5197,1544,5214,1532,5214,1531,L,5214,1486,Q,5240,1419,5232,1401,L,5247,1401,Q,5237,1381,5262,1366,5285,1349,5277,1331,L,5300,1331,5300,1314,5315,1314,5315,1297,5338,1297,Q,5350,1280,5351,1270,5352,1259,5376,1257,L,5376,1235,5395,1233,Q,5395,1217,5397,1213,L,5435,1213,5435,1198,5454,1198,5454,1176,5480,1176,5480,1158,5543,1158,5543,1139,5568,1139,5568,1117,5585,1117,5585,1089,5572,1089,5572,1107,5539,1107,5539,1014,5557,1014,5557,973,5578,973,5578,949,5606,949,Q,5605,936,5610,927,5615,917,5617,899,5618,881,5620,873,5640,872,5643,859,5643,845,5644,835,L,5642,803,5666,803,5666,763,5680,763,5680,672,5701,672,Q,5701,608,5702,578,5703,574,5703,571,L,5703,571,Q,5711,497,5711,428,L,5739,428,5739,395,5718,395,5718,376,5687,376,5687,398,Q,5669,395,5659,395,L,5659,364,5638,364,5638,319,Q,5626,316,5621,316,L,5621,242,5587,242,5587,218,5492,218,Q,5504,185,5429,185,5401,185,5394,172,5392,169,5357,155,L,5357,135,5374,135,5374,95,Q,5348,94,5332,94,5297,92,5296,118,L,5258,118,Q,5247,118,5239,87,Q,5221,87,5214,89,Z]],label:"Masterton District",shortLabel:"MT",labelPosition:[432.7,110.7],labelAlignment:[CEN,MID]},8:{outlines:[[M,5760,133,Q,5766,112,5746,110,5719,113,5710,111,L,5710,89,Q,5705,89,5703,87,L,5672,87,5672,109,5631,109,Q,5629,94,5612,83,5588,68,5585,65,5572,45,5568,41,5564,34,5541,35,5509,67,5496,67,5479,67,5482,50,L,5424,50,Q,5418,65,5387,67,L,5387,96,Q,5380,95,5374,95,L,5374,135,5357,135,5357,155,Q,5392,169,5394,172,5401,185,5429,185,5504,185,5492,218,L,5587,218,5587,242,5621,242,5621,316,Q,5626,316,5638,319,L,5638,364,5659,364,5659,395,Q,5669,395,5687,398,L,5687,376,5718,376,5718,395,5739,395,5739,428,5711,428,Q,5711,497,5703,571,L,5741,571,5741,544,5764,544,5764,515,5795,515,Q,5795,478,5794,459,5794,423,5808,419,L,5808,397,5832,397,5834,373,Q,5847,380,5849,367,5848,347,5849,338,L,5862,338,Q,5864,323,5865,284,L,5891,284,5891,255,5912,255,Q,5912,222,5952,229,L,5952,194,5941,194,5941,172,5895,172,5880,175,5880,198,5788,198,Q,5786,179,5786,133,Z]],label:"Tararua District",shortLabel:"TR",labelPosition:[574,27.6],labelAlignment:[CEN,MID]},9:{outlines:[[M,3273,1082,Q,3270,1080,3261,1032,3251,1036,3246,1028,3241,1020,3244,1010,3213,1010,3200,1008,L,3199,982,3178,982,Q,3178,958,3156,966,L,3156,951,3079,951,3079,923,Q,3066,923,3060,921,L,3060,855,3042,855,Q,3040,848,3040,829,3020,824,3018,820,3013,815,3009,790,L,2994,790,2994,761,3016,761,3016,744,Q,3009,722,3009,721,L,3009,706,3040,706,3040,632,3058,632,3058,600,Q,3053,587,3053,535,3053,524,3073,518,L,3073,464,3038,464,Q,3047,438,3025,440,2994,443,2990,421,2972,425,2959,412,2944,397,2952,381,2948,379,2933,379,L,2933,359,Q,2931,360,2916,353,L,2916,315,2840,315,2842,341,2774,341,2774,357,2753,357,2753,392,Q,2734,385,2734,406,2735,418,2736,442,L,2713,442,2713,468,2692,468,Q,2692,523,2690,550,2680,551,2676,551,2669,552,2669,567,L,2669,605,2614,605,2614,637,Q,2614,641,2615,645,2615,677,2590,670,L,2590,688,2609,688,2609,948,2597,948,2597,987,2561,987,Q,2561,1002,2559,1007,L,2531,1007,2531,1068,2476,1068,2476,1092,2452,1092,2452,1114,2413,1114,2413,1134,2408,1134,Q,2402,1131,2400,1129,L,2371,1129,2371,1153,2362,1153,Q,2354,1151,2352,1149,L,2303,1149,2303,1201,2339,1202,Q,2341,1192,2352,1191,2363,1190,2387,1191,L,2387,1175,2411,1175,2416,1161,2479,1161,2479,1177,2545,1177,2545,1159,2602,1159,2602,1137,2626,1137,2626,1109,2685,1109,Q,2698,1111,2729,1111,L,2729,1133,2750,1133,2750,1175,2733,1175,2733,1211,Q,2709,1204,2709,1236,L,2689,1236,Q,2689,1245,2692,1299,2691,1348,2674,1345,L,2674,1363,2698,1363,2698,1380,2718,1380,2718,1417,Q,2714,1419,2691,1420,L,2691,1454,2714,1454,2714,1518,2735,1518,2735,1586,2716,1586,2716,1712,Q,2727,1714,2750,1714,L,2750,1741,Q,2758,1740,2771,1748,L,2794,1748,2794,1719,2818,1719,2818,1746,2847,1746,2847,1723,2900,1723,2900,1743,2995,1743,Q,2995,1763,2997,1767,L,3018,1767,3018,1750,3033,1750,3033,1723,3059,1723,3059,1784,3090,1784,3090,1809,Q,3080,1806,3081,1844,3080,1878,3083,1881,3098,1908,3098,1912,3098,1933,3096,1936,3094,1939,3074,1940,3055,1940,3055,1953,3055,1961,3059,1972,L,3031,1972,3031,1987,Q,3008,1985,2997,1985,2998,2007,2993,2036,3e3,2038,3020,2038,L,3020,2075,2987,2075,2987,2114,Q,3002,2116,3044,2117,L,3044,2132,3124,2132,Q,3138,2132,3152,2149,3165,2166,3188,2167,3200,2167,3211,2181,3221,2195,3240,2194,L,3323,2194,3323,2219,3302,2219,3302,2224,Q,3302,2247,3326,2247,L,3371,2246,3371,2272,Q,3369,2272,3369,2276,L,3341,2276,3343,2335,3327,2335,3327,2350,Q,3329,2357,3329,2375,L,3365,2375,3365,2394,3422,2394,Q,3424,2399,3424,2411,L,3494,2411,Q,3496,2411,3511,2426,L,3544,2426,Q,3576,2419,3599,2441,3621,2462,3652,2455,L,3648,2490,Q,3671,2490,3682,2492,L,3682,2512,3705,2512,Q,3707,2553,3710,2555,L,3726,2555,Q,3726,2543,3724,2540,L,3747,2540,Q,3747,2521,3745,2512,L,3787,2512,3787,2490,Q,3807,2494,3807,2468,3806,2424,3806,2422,L,3821,2422,3821,2386,3889,2386,3889,2401,3900,2401,Q,3906,2399,3918,2399,L,3918,2464,Q,3903,2471,3887,2471,3884,2485,3887,2516,3886,2538,3859,2532,L,3859,2582,3828,2582,3828,2591,Q,3830,2597,3830,2612,L,3804,2612,3804,2631,3817,2631,3817,2654,3832,2654,3832,2639,3842,2639,Q,3839,2624,3854,2624,L,3870,2626,Q,3887,2631,3889,2643,3891,2655,3904,2657,3914,2659,3914,2677,3914,2688,3906,2692,3896,2695,3896,2702,3896,2712,3963,2749,3968,2753,4009,2755,4037,2757,4032,2783,4047,2783,4053,2785,L,4053,2827,Q,4046,2839,4011,2839,3955,2838,3953,2838,3956,2850,3950,2863,3944,2876,3935,2876,L,3935,2923,Q,3972,2916,4012,2934,4059,2957,4073,2958,L,4073,2971,4056,2971,Q,4056,2984,4034,2997,4013,3010,4018,3037,L,4005,3037,4005,3050,4025,3050,4025,3058,4058,3058,4058,3109,Q,4086,3111,4111,3061,4138,3060,4138,3042,4143,3032,4172,3027,4174,3016,4174,2981,4179,2979,4192,2979,4202,2977,4200,2961,L,4222,2961,Q,4221,2946,4224,2942,L,4259,2942,Q,4258,2921,4260,2911,4263,2892,4285,2898,L,4285,2791,Q,4304,2768,4313,2767,4322,2765,4324,2740,L,4355,2740,Q,4348,2723,4367,2707,4386,2691,4402,2697,4398,2669,4429,2677,4433,2664,4433,2658,L,4479,2658,Q,4470,2632,4502,2631,4519,2630,4547,2632,L,4547,2616,Q,4565,2614,4621,2610,4622,2588,4622,2578,4623,2560,4634,2551,4636,2538,4637,2529,4641,2512,4665,2508,4673,2507,4678,2453,4690,2459,4699,2444,4707,2429,4706,2413,4710,2406,4712,2401,L,4624,2400,4624,2370,4578,2370,4578,2350,4543,2350,4543,2295,4523,2295,4523,2221,4501,2221,Q,4501,2204,4499,2195,L,4462,2195,4462,2164,4416,2164,4416,2201,4383,2201,4383,2189,4366,2189,4366,2170,4347,2170,4347,2123,4335,2123,4335,2147,4263,2147,4263,2168,4231,2168,Q,4233,2185,4218,2193,4205,2200,4206,2212,L,4180,2212,4180,2193,4143,2193,4143,2109,Q,4123,2109,4115,2111,L,4115,2088,Q,4076,2086,4072,2085,4050,2078,4062,2046,4055,2049,4051,2043,4046,2037,4049,2029,L,4032,2029,4032,2009,4010,2009,Q,4013,1985,3994,1983,3972,1981,3973,1968,3975,1963,3975,1961,L,3988,1961,3988,1939,Q,3970,1930,3957,1923,3951,1904,3944,1889,3938,1877,3900,1882,3892,1883,3874,1865,L,3874,1849,3887,1849,Q,3882,1827,3895,1814,3907,1800,3927,1806,L,3926,1722,3941,1722,3941,1707,Q,3978,1716,3976,1696,L,3995,1696,3995,1622,3972,1622,3972,1602,3949,1602,3949,1587,Q,3941,1585,3932,1585,L,3932,1563,Q,3952,1564,3956,1557,3958,1554,3958,1534,L,3954,1498,3930,1498,3930,1519,3897,1519,3897,1500,3879,1500,Q,3878,1501,3875,1559,L,3827,1559,3827,1585,3736,1585,3736,1598,3702,1598,3702,1622,3727,1622,3727,1659,Q,3713,1659,3707,1657,L,3685,1657,3685,1677,3651,1677,3651,1694,3666,1694,3666,1707,Q,3657,1707,3647,1731,L,3624,1731,3624,1768,3600,1768,Q,3599,1775,3602,1777,L,3602,1794,3589,1794,3589,1808,3563,1808,3563,1779,3499,1779,3499,1724,3528,1724,3528,1698,3592,1698,3592,1679,3609,1679,3609,1593,3630,1593,3630,1504,Q,3615,1488,3592,1479,3586,1477,3571,1443,3543,1439,3533,1412,3523,1389,3504,1390,L,3504,1362,Q,3485,1366,3473,1344,3461,1318,3453,1310,3434,1296,3425,1286,3407,1270,3408,1242,3379,1240,3359,1214,3337,1188,3345,1158,3327,1160,3312,1144,3299,1129,3277,1135,Q,3277,1085,3273,1082,Z]],label:"Carterton District",shortLabel:"CR",labelPosition:[320.7,147.5],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"wellington",type:"maps"}}})});