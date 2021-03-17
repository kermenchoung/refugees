(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=148)})({148:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(149);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},149:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Ardahan.1.02-22-2017 12:07:07
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Ardahan",revision:1,standaloneInit:true,baseWidth:533,baseHeight:600,baseScaleFactor:10,entities:{"TR.AR.AR":{outlines:[[M,2304,2519,Q,2291,2524,2261,2524,2227,2523,2212,2523,2163,2527,2130,2527,2100,2526,2095,2527,2081,2528,2062,2536,L,1921,2536,Q,1916,2535,1850,2536,1801,2536,1771,2519,L,1728,2505,Q,1722,2500,1708,2494,1695,2489,1689,2489,1672,2486,1648,2475,1621,2461,1609,2455,1601,2451,1563,2439,1526,2426,1514,2420,1490,2407,1470,2402,1458,2399,1441,2391,1422,2382,1417,2380,1378,2368,1323,2342,1283,2329,1273,2324,L,1253,2315,Q,1248,2310,1246,2308,1243,2306,1240,2306,1240,2313,1240,2334,1240,2359,1238,2366,1237,2371,1231,2380,1227,2389,1228,2398,1229,2407,1214,2434,1213,2436,1212,2449,1212,2462,1211,2465,1207,2470,1205,2479,1203,2489,1201,2493,1197,2502,1173,2513,1167,2518,1147,2535,1134,2546,1125,2554,1124,2553,1119,2557,1115,2559,1109,2564,1101,2572,1094,2575,1086,2578,1080,2585,1069,2597,1068,2598,1060,2604,1050,2609,1042,2613,1036,2618,1029,2624,1010,2640,L,950,2672,Q,916,2689,913,2691,910,2693,892,2698,877,2704,868,2710,858,2716,828,2727,801,2737,786,2747,773,2756,753,2769,736,2780,717,2789,712,2791,702,2799,691,2806,686,2808,666,2815,657,2829,654,2834,645,2842,638,2850,638,2856,637,2866,627,2874,618,2880,614,2884,611,2885,611,2886,599,2896,570,2923,567,2925,554,2945,537,2960,535,2962,489,3016,470,3042,457,3061,439,3091,419,3124,409,3139,392,3161,379,3185,371,3200,354,3233,353,3234,351,3237,L,313,3316,Q,299,3343,266,3404,L,187,3551,Q,184,3557,172,3573,165,3584,163,3592,162,3595,162,3598,152,3621,128,3668,107,3713,98,3735,L,78,3771,Q,76,3775,73,3787,70,3800,67,3805,53,3831,49,3866,49,3868,49,3873,49,3877,49,3884,49,3892,46,3900,43,3908,43,3918,L,43,3935,Q,43,3953,44,3958,45,3962,51,3984,52,3990,51,4005,51,4021,51,4028,51,4030,53,4034,55,4033,64,4028,73,4023,76,4023,96,4024,109,4018,122,4010,130,4005,145,3997,155,3997,155,3997,167,3997,178,3997,183,3996,186,3995,198,3989,205,3985,211,3984,216,3983,225,3983,230,3984,237,3980,243,3976,245,3974,250,3971,257,3972,267,3972,281,3965,L,301,3954,Q,317,3948,350,3931,369,3924,399,3904,416,3890,435,3893,L,577,3893,Q,579,3893,607,3889,630,3885,645,3885,649,3885,688,3887,711,3887,725,3885,745,3882,785,3858,799,3848,816,3841,834,3833,846,3826,933,3779,963,3760,972,3754,996,3742,1020,3730,1025,3727,1049,3709,1073,3704,1084,3704,1099,3700,1105,3699,1135,3689,1166,3681,1192,3679,1196,3679,1204,3675,1212,3670,1218,3670,L,1335,3670,Q,1335,3669,1336,3670,L,1338,3670,1463,3670,Q,1473,3670,1497,3677,1519,3679,1567,3679,1609,3681,1633,3691,1636,3693,1647,3694,1659,3696,1663,3698,1675,3703,1694,3711,1709,3716,1753,3735,1777,3745,1781,3745,1789,3745,1814,3758,1842,3767,1875,3781,1887,3783,1901,3790,1907,3793,1917,3796,1926,3799,1933,3803,1941,3807,1950,3812,1957,3815,1965,3817,1970,3817,1980,3820,1985,3820,1989,3824,1994,3828,1997,3829,2055,3854,2067,3858,2080,3863,2095,3873,2106,3880,2125,3889,2137,3896,2149,3910,2157,3917,2173,3933,2176,3937,2187,3947,2197,3956,2204,3959,2210,3961,2216,3967,2220,3971,2228,3979,2253,3997,2257,3999,2260,3999,2271,4009,2280,4018,2283,4021,2285,4025,2294,4030,2299,4033,2309,4040,2316,4045,2331,4060,2331,4060,2331,4061,2332,4061,2332,4062,2340,4069,2348,4072,2367,4079,2375,4083,2392,4091,2421,4106,2436,4112,2444,4118,L,2467,4130,Q,2492,4142,2511,4153,2530,4163,2563,4174,2599,4185,2614,4192,2633,4201,2673,4213,2675,4214,2694,4220,2706,4226,2716,4227,2716,4220,2722,4214,2726,4209,2738,4201,2748,4193,2757,4183,2764,4173,2770,4171,2777,4170,2782,4164,2786,4159,2791,4155,2794,4151,2807,4140,2820,4131,2827,4125,2833,4118,2837,4113,2839,4111,2842,4109,2850,4101,2866,4090,2878,4081,2888,4071,2912,4040,2929,4027,2936,4021,2976,3991,2986,3982,2998,3975,3019,3960,3021,3959,3025,3956,3048,3953,L,3078,3942,Q,3092,3936,3109,3931,3126,3926,3138,3922,3203,3894,3249,3886,3251,3886,3254,3885,3261,3884,3271,3879,3278,3875,3289,3869,3300,3863,3337,3854,3402,3832,3421,3824,3428,3821,3448,3817,3444,3798,3426,3770,3406,3739,3399,3727,3368,3669,3341,3630,L,3324,3607,Q,3314,3599,3312,3596,L,3304,3582,Q,3293,3569,3273,3537,L,3240,3486,Q,3215,3454,3208,3444,3207,3442,3206,3442,3203,3436,3198,3430,3191,3423,3189,3418,L,3164,3391,Q,3128,3355,3121,3347,3105,3326,3078,3300,3043,3267,3034,3257,3021,3242,2994,3210,2959,3168,2956,3163,2934,3130,2922,3117,2917,3112,2908,3093,2898,3074,2893,3068,2893,3067,2893,3066,2878,3045,2869,3030,2853,3004,2844,2987,2830,2960,2826,2936,2823,2900,2818,2891,2815,2886,2815,2880,2814,2872,2813,2869,2806,2852,2804,2846,2801,2839,2799,2826,2796,2808,2795,2804,2791,2790,2776,2754,2766,2731,2765,2708,2765,2707,2765,2706,L,2765,2684,Q,2761,2678,2757,2672,2755,2667,2755,2659,2755,2652,2759,2640,2764,2627,2764,2623,2763,2613,2775,2589,2773,2572,2784,2561,2786,2558,2789,2546,2792,2533,2792,2526,2792,2524,2792,2524,L,2791,2524,2791,2522,Q,2789,2516,2778,2513,2769,2511,2759,2512,2757,2512,2748,2506,2739,2501,2736,2501,2714,2501,2713,2501,L,2684,2502,Q,2672,2507,2643,2507,2612,2508,2602,2511,2594,2513,2585,2519,2579,2524,2568,2523,2531,2523,2530,2523,2498,2524,2487,2524,2472,2523,2459,2516,2442,2508,2408,2509,2392,2511,2385,2511,L,2378,2511,Q,2318,2512,2304,2519,Z]],label:"Ardahan",shortLabel:"AR",labelPosition:[174.5,319.4],labelAlignment:[CEN,MID]},"TR.AR.CI":{outlines:[[M,3929,1481,Q,3918,1479,3910,1477,3899,1471,3893,1470,3874,1465,3857,1457,3850,1453,3840,1452,3826,1450,3821,1448,3809,1441,3803,1441,3787,1441,3782,1439,3763,1428,3745,1423,L,3673,1401,Q,3663,1401,3654,1396,3644,1390,3635,1390,3626,1389,3592,1380,3589,1379,3574,1377,3564,1375,3553,1369,3528,1356,3513,1351,L,3431,1327,Q,3426,1326,3413,1324,3402,1322,3391,1317,L,3347,1305,Q,3317,1297,3310,1293,3305,1290,3300,1287,3298,1294,3297,1305,3294,1315,3294,1321,L,3293,1353,Q,3293,1361,3286,1385,3280,1408,3280,1421,3280,1452,3280,1456,3279,1462,3273,1474,3269,1482,3270,1491,3272,1514,3269,1531,3266,1544,3260,1562,3259,1564,3258,1567,L,3258,1627,Q,3258,1632,3243,1647,3234,1654,3222,1656,3220,1656,3219,1656,3219,1657,3219,1676,3219,1688,3216,1694,3203,1714,3205,1733,L,3203,1779,Q,3196,1794,3191,1802,3191,1803,3191,1817,3191,1831,3199,1841,3205,1847,3222,1865,3239,1888,3241,1891,3244,1896,3249,1908,3251,1913,3254,1916,3254,1917,3255,1918,3257,1922,3261,1934,3265,1950,3265,1952,3264,1967,3273,1977,3280,1986,3285,2012,3288,2037,3293,2053,3298,2068,3308,2090,L,3329,2159,Q,3331,2162,3338,2173,3344,2182,3344,2188,3344,2200,3341,2205,3335,2212,3331,2231,3331,2233,3324,2252,3320,2262,3320,2268,3320,2271,3320,2274,3320,2284,3320,2288,3319,2301,3312,2308,L,3274,2343,Q,3267,2349,3241,2377,3239,2380,3224,2396,3210,2406,3206,2410,3189,2431,3164,2443,3155,2446,3146,2458,3135,2472,3132,2475,L,3058,2524,2792,2524,Q,2792,2524,2792,2526,2792,2533,2789,2546,2786,2558,2784,2561,2773,2572,2775,2589,2763,2613,2764,2623,2764,2627,2759,2640,2755,2652,2755,2659,2755,2667,2757,2672,2761,2678,2765,2684,L,2765,2706,Q,2765,2707,2765,2708,2766,2731,2776,2754,2791,2790,2795,2804,2796,2808,2799,2826,2801,2839,2804,2846,2806,2852,2813,2869,2814,2872,2815,2880,2815,2886,2818,2891,2823,2900,2826,2936,2830,2960,2844,2987,2853,3004,2869,3030,2878,3045,2893,3066,2893,3067,2893,3068,2898,3074,2908,3093,2917,3112,2922,3117,2934,3130,2956,3163,2959,3168,2994,3210,3021,3242,3034,3257,3043,3267,3078,3300,3105,3326,3121,3347,3128,3355,3164,3391,L,3189,3418,Q,3191,3423,3198,3430,3203,3436,3206,3442,3207,3442,3208,3444,3215,3454,3240,3486,L,3273,3537,Q,3293,3569,3304,3582,L,3312,3596,Q,3314,3599,3324,3607,L,3341,3630,Q,3368,3669,3399,3727,3406,3739,3426,3770,3444,3798,3448,3817,3454,3815,3462,3813,3498,3807,3509,3803,3542,3790,3552,3790,3556,3790,3578,3782,3582,3780,3603,3780,3618,3780,3645,3781,3651,3781,3665,3776,3678,3773,3684,3773,3698,3774,3728,3760,3758,3746,3778,3746,3796,3746,3823,3735,3830,3732,3839,3731,3845,3730,3861,3729,3874,3728,3910,3716,3912,3716,3926,3714,3935,3713,3940,3712,3944,3711,3945,3710,L,3976,3706,Q,3979,3706,3988,3701,3998,3696,4007,3695,4015,3694,4023,3687,4033,3679,4037,3677,4042,3674,4061,3660,4089,3635,4104,3616,4111,3608,4129,3597,4141,3587,4152,3570,4160,3557,4172,3547,4179,3541,4202,3524,4223,3506,4245,3483,4247,3481,4265,3467,4279,3457,4286,3440,L,4314,3376,Q,4318,3357,4330,3333,4347,3299,4348,3296,4350,3285,4353,3278,4356,3272,4367,3253,4384,3224,4386,3214,4403,3185,4404,3180,4404,3170,4407,3155,4410,3140,4410,3136,4412,3128,4414,3101,4416,3075,4416,3065,4416,3063,4416,3062,L,4416,3045,Q,4415,3042,4420,3035,4426,3028,4427,3027,4432,3013,4432,2983,4432,2975,4439,2960,4441,2955,4441,2937,4441,2926,4443,2914,4446,2902,4446,2894,4456,2881,4456,2847,4454,2810,4455,2796,4456,2789,4460,2773,4465,2755,4465,2745,L,4465,2708,4465,2702,Q,4465,2632,4470,2625,4476,2617,4477,2588,4477,2556,4477,2545,4489,2545,4506,2540,4522,2536,4532,2536,4559,2536,4585,2528,4605,2520,4644,2521,4686,2521,4696,2519,4701,2518,4711,2512,L,4726,2511,Q,4729,2511,4741,2511,4749,2511,4756,2510,4761,2509,4780,2501,4793,2497,4803,2498,4815,2499,4829,2495,4848,2488,4853,2487,4865,2485,4901,2487,L,4929,2487,Q,4930,2487,4931,2487,4933,2486,4933,2487,4945,2487,4983,2486,4997,2485,5006,2489,5010,2490,5016,2496,5023,2501,5032,2504,5041,2506,5068,2518,5092,2527,5128,2549,5133,2552,5141,2555,5146,2557,5153,2562,5173,2577,5176,2576,L,5244,2613,5248,2613,Q,5247,2605,5250,2599,5252,2596,5258,2585,5262,2577,5262,2553,5263,2550,5268,2535,5272,2520,5273,2519,L,5273,2490,Q,5273,2482,5273,2477,5273,2468,5277,2465,5283,2456,5284,2449,5285,2447,5285,2436,5287,2414,5293,2406,5299,2399,5299,2388,5299,2378,5293,2375,5285,2369,5284,2363,L,5269,2332,Q,5255,2310,5248,2298,5238,2281,5235,2271,5235,2269,5234,2267,5233,2262,5230,2255,5223,2244,5219,2237,L,5196,2203,Q,5183,2182,5173,2161,5163,2137,5156,2124,5137,2088,5112,2046,L,5089,2008,Q,5076,1988,5059,1983,5052,1980,5040,1973,L,5021,1960,Q,4999,1948,4990,1941,4976,1930,4951,1930,4922,1932,4907,1932,4880,1929,4863,1930,4858,1930,4847,1925,4836,1919,4826,1920,L,4779,1920,Q,4773,1920,4759,1918,4748,1917,4744,1916,L,4720,1918,Q,4717,1918,4710,1921,4703,1925,4701,1926,4688,1931,4684,1934,4665,1945,4664,1945,4645,1956,4630,1965,4630,1965,4625,1972,4620,1974,4616,1976,4606,1979,4599,1985,4595,1988,4581,1993,4575,1994,4565,2003,4560,2008,4546,2015,4529,2022,4526,2025,4511,2034,4489,2051,4460,2066,4454,2070,L,4408,2094,Q,4372,2112,4367,2115,4337,2123,4325,2129,4310,2135,4289,2146,4282,2150,4266,2152,4264,2152,4247,2158,4230,2164,4214,2174,4209,2177,4198,2180,4187,2183,4181,2186,4180,2186,4175,2192,4171,2196,4163,2196,4151,2198,4149,2200,4140,2205,4143,2205,L,4135,2205,Q,4117,2182,4107,2174,4097,2165,4092,2160,4083,2152,4078,2144,4070,2125,4054,2106,4033,2082,4026,2073,4017,2060,3976,1995,L,3884,1854,Q,3870,1837,3855,1811,3838,1782,3835,1777,3830,1768,3828,1766,3825,1762,3825,1758,3825,1752,3836,1734,3843,1726,3849,1716,L,3874,1675,Q,3881,1664,3896,1634,3917,1597,3922,1590,3927,1586,3950,1549,3964,1526,3967,1506,L,3967,1493,Q,3960,1494,3949,1489,Q,3930,1481,3929,1481,Z]],label:"Çildir",shortLabel:"CI",labelPosition:[371.5,274.4],labelAlignment:[CEN,MID]},"TR.AR.DA":{outlines:[[M,2850,1104,Q,2839,1099,2818,1091,2798,1083,2788,1083,2778,1083,2767,1081,2756,1079,2748,1075,2745,1073,2731,1066,2723,1062,2718,1060,2716,1060,2716,1059,2657,1057,2633,1066,2606,1075,2568,1075,2515,1075,2505,1066,2498,1060,2478,1058,2462,1057,2448,1059,2426,1062,2409,1057,2383,1048,2373,1047,L,2358,1047,Q,2352,1047,2347,1043,2341,1038,2337,1038,2282,1038,2279,1038,2236,1038,2229,1038,2215,1039,2206,1045,2197,1051,2186,1052,2174,1053,2166,1053,2157,1053,2140,1053,2123,1053,2110,1052,2096,1050,2075,1050,2057,1050,2004,1069,1961,1083,1940,1093,1917,1099,1902,1103,1886,1105,1866,1125,1846,1144,1822,1166,1798,1188,1762,1218,1731,1244,1705,1260,1689,1270,1650,1297,1658,1314,1669,1334,1682,1355,1690,1373,L,1693,1384,Q,1694,1392,1697,1396,1705,1409,1710,1414,1726,1428,1744,1448,1749,1453,1761,1462,1769,1469,1776,1476,1785,1483,1800,1508,1816,1535,1841,1588,1842,1589,1842,1590,1854,1617,1871,1652,1875,1659,1888,1678,1900,1695,1904,1704,1913,1719,1946,1750,1953,1757,1991,1803,1994,1808,1996,1817,1997,1826,2e3,1828,2008,1836,2023,1847,2041,1864,2050,1866,2056,1868,2084,1868,2120,1868,2126,1867,2134,1865,2147,1860,2159,1857,2171,1856,L,2351,1856,Q,2357,1854,2370,1848,2382,1843,2391,1842,2401,1842,2419,1842,2435,1843,2444,1842,2450,1841,2463,1833,2473,1827,2482,1829,2490,1830,2504,1825,2512,1821,2523,1816,L,2570,1816,2608,1804,Q,2612,1802,2629,1802,2638,1802,2656,1795,L,2674,1789,Q,2683,1789,2692,1786,2697,1785,2711,1781,2724,1777,2731,1774,2761,1758,2808,1747,2816,1745,2850,1729,2854,1728,2871,1721,2883,1717,2889,1713,2892,1711,2908,1711,2923,1710,2928,1704,2946,1700,2947,1700,2963,1702,2970,1699,2985,1692,2995,1690,3004,1688,3017,1689,3026,1690,3043,1683,3060,1676,3063,1676,3100,1676,3104,1676,3115,1678,3126,1673,3142,1665,3143,1665,3147,1663,3162,1663,3178,1663,3187,1659,3200,1654,3205,1654,L,3222,1656,Q,3234,1654,3243,1647,3258,1632,3258,1627,L,3258,1567,Q,3259,1564,3260,1562,3266,1544,3269,1531,3272,1514,3270,1491,3269,1482,3273,1474,3279,1462,3280,1456,3280,1452,3280,1421,3280,1408,3286,1385,3293,1361,3293,1353,L,3294,1321,Q,3294,1315,3297,1305,3298,1294,3300,1287,3291,1279,3286,1273,3285,1271,3276,1257,3265,1239,3250,1220,3235,1201,3216,1177,3197,1152,3176,1124,L,3175,1123,Q,3160,1132,3140,1142,3113,1157,3100,1163,3087,1169,3070,1181,3054,1193,3046,1193,3038,1193,3004,1176,2970,1158,2966,1154,2961,1149,2929,1132,2896,1114,2879,1111,Q,2861,1109,2850,1104,Z]],label:"Damal",shortLabel:"DA",labelPosition:[247.5,145.3],labelAlignment:[CEN,MID]},"TR.AR.GO":{outlines:[[M,1567,3679,Q,1519,3679,1497,3677,1473,3670,1463,3670,L,1218,3670,Q,1212,3670,1204,3675,1196,3679,1192,3679,1166,3681,1135,3689,1105,3699,1099,3700,1084,3704,1073,3704,1049,3709,1025,3727,1020,3730,996,3742,972,3754,963,3760,933,3779,846,3826,834,3833,816,3841,799,3848,785,3858,745,3882,725,3885,711,3887,688,3887,649,3885,645,3885,630,3885,607,3889,579,3893,577,3893,L,435,3893,Q,416,3890,399,3904,369,3924,350,3931,317,3948,301,3954,L,281,3965,Q,267,3972,257,3972,250,3971,245,3974,243,3976,237,3980,230,3984,225,3983,216,3983,211,3984,205,3985,198,3989,186,3995,183,3996,178,3997,167,3997,155,3997,155,3997,145,3997,130,4005,122,4010,109,4018,96,4024,76,4023,73,4023,64,4028,55,4033,53,4034,55,4049,65,4082,77,4121,77,4128,L,77,4142,Q,77,4169,81,4179,82,4183,86,4200,89,4217,91,4222,97,4239,102,4268,108,4300,113,4314,114,4319,118,4339,121,4357,124,4363,131,4378,143,4407,150,4422,164,4450,174,4471,180,4485,L,184,4498,Q,186,4503,191,4511,L,210,4544,Q,217,4554,228,4575,238,4592,247,4602,267,4626,355,4760,366,4785,388,4820,391,4827,404,4842,415,4854,419,4873,426,4887,445,4917,458,4937,475,4956,486,4972,501,4998,509,5013,525,5043,528,5051,538,5065,547,5080,552,5085,569,5102,579,5123,582,5129,592,5144,604,5160,608,5169,L,623,5192,Q,632,5204,635,5210,636,5211,636,5212,639,5222,645,5232,660,5252,661,5254,664,5261,680,5281,L,686,5289,Q,687,5291,688,5303,716,5353,746,5393,751,5400,775,5429,793,5451,805,5470,809,5477,819,5489,829,5502,834,5511,840,5521,848,5537,855,5548,865,5556,873,5571,898,5599,926,5630,935,5646,943,5658,970,5696,1001,5739,1013,5756,1029,5780,1058,5818,1086,5856,1095,5869,1097,5872,1103,5888,1109,5901,1117,5909,1129,5920,1129,5933,1129,5964,1129,5964,L,1189,5964,Q,1217,5950,1274,5949,1305,5949,1364,5950,1383,5949,1408,5949,1428,5947,1444,5929,1454,5918,1471,5904,1497,5882,1500,5879,1529,5852,1561,5828,1568,5822,1585,5805,1603,5787,1613,5778,1673,5724,1678,5720,1692,5708,1715,5702,1727,5698,1753,5693,1798,5681,1837,5666,1861,5656,1922,5630,1944,5620,1960,5622,1989,5623,1997,5622,2053,5612,2075,5611,2085,5611,2115,5603,2140,5597,2161,5599,2181,5601,2203,5595,2215,5592,2239,5584,2261,5576,2273,5576,2284,5576,2292,5574,2295,5573,2313,5567,2336,5559,2364,5559,2384,5560,2398,5549,L,2434,5549,Q,2436,5548,2438,5548,2449,5544,2457,5537,2469,5526,2470,5514,2471,5509,2476,5498,2483,5485,2484,5483,2487,5469,2487,5455,2485,5419,2497,5404,2500,5383,2503,5376,2508,5362,2508,5356,L,2508,5354,Q,2510,5343,2512,5337,2513,5332,2520,5317,2524,5308,2525,5294,2527,5279,2529,5273,2532,5240,2549,5195,2551,5188,2553,5174,2554,5161,2558,5153,2560,5148,2563,5133,2565,5116,2567,5111,2570,5101,2581,5073,2590,5055,2589,5040,2589,5038,2589,5037,2588,5032,2588,5021,2589,5005,2589,5e3,L,2589,4961,Q,2591,4951,2591,4924,2591,4919,2595,4905,2600,4888,2600,4885,2600,4869,2602,4844,2602,4824,2602,4812,2604,4791,2609,4775,2616,4753,2616,4721,2615,4719,2615,4716,2614,4706,2614,4700,2614,4689,2616,4682,2626,4656,2625,4643,2624,4631,2624,4615,2625,4598,2625,4591,2626,4583,2631,4568,2636,4554,2636,4549,2636,4537,2642,4530,2647,4522,2648,4520,2648,4518,2648,4508,2648,4498,2651,4489,2657,4471,2658,4467,2664,4435,2667,4428,2677,4404,2678,4394,2679,4391,2678,4389,2680,4378,2682,4374,L,2690,4355,Q,2690,4341,2690,4334,2690,4322,2692,4315,2697,4302,2699,4295,2703,4283,2702,4273,2701,4265,2706,4254,2714,4237,2716,4232,2715,4229,2716,4227,2706,4226,2694,4220,2675,4214,2673,4213,2633,4201,2614,4192,2599,4185,2563,4174,2530,4163,2511,4153,2492,4142,2467,4130,L,2444,4118,Q,2436,4112,2421,4106,2392,4091,2375,4083,2367,4079,2348,4072,2340,4069,2332,4062,2332,4061,2331,4061,2331,4060,2331,4060,2316,4045,2309,4040,2299,4033,2294,4030,2285,4025,2283,4021,2280,4018,2271,4009,2260,3999,2257,3999,2253,3997,2228,3979,2220,3971,2216,3967,2210,3961,2204,3959,2197,3956,2187,3947,2176,3937,2173,3933,2157,3917,2149,3910,2137,3896,2125,3889,2106,3880,2095,3873,2080,3863,2067,3858,2055,3854,1997,3829,1994,3828,1989,3824,1985,3820,1980,3820,1970,3817,1965,3817,1957,3815,1950,3812,1941,3807,1933,3803,1926,3799,1917,3796,1907,3793,1901,3790,1887,3783,1875,3781,1842,3767,1814,3758,1789,3745,1781,3745,1777,3745,1753,3735,1709,3716,1694,3711,1675,3703,1663,3698,1659,3696,1647,3694,1636,3693,1633,3691,Q,1609,3681,1567,3679,Z]],label:"Göle",shortLabel:"GO",labelPosition:[138.4,481.7],labelAlignment:[CEN,MID]},"TR.AR.HA":{outlines:[[M,2463,1833,Q,2450,1841,2444,1842,2435,1843,2419,1842,2401,1842,2391,1842,2382,1843,2370,1848,2357,1854,2351,1856,L,2171,1856,Q,2159,1857,2147,1860,2134,1865,2126,1867,2120,1868,2084,1868,2056,1868,2050,1866,2041,1864,2023,1847,2008,1836,2e3,1828,1997,1826,1996,1817,1994,1808,1991,1803,1953,1757,1946,1750,1913,1719,1904,1704,1900,1695,1888,1678,1875,1659,1871,1652,1854,1617,1842,1590,1842,1589,1841,1588,1816,1535,1800,1508,1785,1483,1776,1476,1769,1469,1761,1462,1749,1453,1744,1448,1726,1428,1710,1414,1705,1409,1697,1396,1694,1392,1693,1384,L,1690,1373,Q,1682,1355,1669,1334,1658,1314,1650,1297,1648,1298,1645,1300,1609,1325,1592,1334,1544,1352,1451,1428,1441,1436,1387,1487,1347,1525,1315,1544,1266,1573,1236,1589,1182,1619,1138,1638,1071,1669,1049,1674,1034,1676,1008,1689,983,1701,971,1710,976,1720,983,1731,993,1746,1014,1798,1018,1807,1029,1830,1038,1847,1043,1862,1044,1864,1045,1865,1049,1881,1058,1903,1059,1910,1069,1925,1069,1926,1073,1937,1075,1945,1080,1952,1081,1954,1083,1961,1086,1968,1089,1971,1099,1985,1100,1993,1102,2001,1109,2014,1114,2022,1122,2037,1126,2043,1132,2054,1138,2065,1138,2078,1138,2084,1146,2096,1158,2117,1158,2118,1166,2134,1179,2165,1180,2169,1191,2191,1197,2205,1201,2213,1198,2228,1204,2239,1207,2246,1221,2269,1232,2291,1239,2302,1240,2303,1240,2306,1243,2306,1246,2308,1248,2310,1253,2315,L,1273,2324,Q,1283,2329,1323,2342,1378,2368,1417,2380,1422,2382,1441,2391,1458,2399,1470,2402,1490,2407,1514,2420,1526,2426,1563,2439,1601,2451,1609,2455,1621,2461,1648,2475,1672,2486,1689,2489,1695,2489,1708,2494,1722,2500,1728,2505,L,1771,2519,Q,1801,2536,1850,2536,1916,2535,1921,2536,L,2062,2536,Q,2081,2528,2095,2527,2100,2526,2130,2527,2163,2527,2212,2523,2227,2523,2261,2524,2291,2524,2304,2519,2318,2512,2378,2511,2378,2510,2381,2511,2382,2511,2385,2511,2392,2511,2408,2509,2442,2508,2459,2516,2472,2523,2487,2524,2498,2524,2530,2523,2531,2523,2568,2523,2579,2524,2585,2519,2594,2513,2602,2511,2612,2508,2643,2507,2672,2507,2684,2502,L,2713,2501,Q,2714,2501,2736,2501,2739,2501,2748,2506,2757,2512,2759,2512,2769,2511,2778,2513,2789,2516,2791,2522,2792,2523,2792,2524,L,3058,2524,3132,2475,Q,3135,2472,3146,2458,3155,2446,3164,2443,3189,2431,3206,2410,3210,2406,3224,2396,3239,2380,3241,2377,3267,2349,3274,2343,L,3312,2308,Q,3319,2301,3320,2288,3320,2284,3320,2274,3320,2271,3320,2268,3320,2262,3324,2252,3331,2233,3331,2231,3335,2212,3341,2205,3344,2200,3344,2188,3344,2182,3338,2173,3331,2162,3329,2159,L,3308,2090,Q,3298,2068,3293,2053,3288,2037,3285,2012,3280,1986,3273,1977,3264,1967,3265,1952,3265,1950,3261,1934,3257,1922,3255,1918,3254,1917,3254,1916,3251,1913,3249,1908,3244,1896,3241,1891,3239,1888,3222,1865,3205,1847,3199,1841,3191,1831,3191,1817,3191,1803,3191,1802,3196,1794,3203,1779,L,3205,1733,Q,3203,1714,3216,1694,3219,1688,3219,1676,3219,1657,3219,1656,3220,1656,3222,1656,L,3205,1654,Q,3200,1654,3187,1659,3178,1663,3162,1663,3147,1663,3143,1665,3142,1665,3126,1673,3115,1678,3104,1676,3100,1676,3063,1676,3060,1676,3043,1683,3026,1690,3017,1689,3004,1688,2995,1690,2985,1692,2970,1699,2963,1702,2947,1700,2946,1700,2928,1704,2923,1710,2908,1711,2892,1711,2889,1713,2883,1717,2871,1721,2854,1728,2850,1729,2816,1745,2808,1747,2761,1758,2731,1774,2724,1777,2711,1781,2697,1785,2692,1786,2683,1789,2674,1789,L,2656,1795,Q,2638,1802,2629,1802,2612,1802,2608,1804,L,2570,1816,2523,1816,Q,2512,1821,2504,1825,2490,1830,2482,1829,Q,2473,1827,2463,1833,Z]],label:"Hanak",shortLabel:"HA",labelPosition:[215.7,215.6],labelAlignment:[CEN,MID]},"TR.AR.PO":{outlines:[[M,2431,116,Q,2416,118,2406,114,2401,112,2392,107,2386,103,2382,103,2372,101,2355,101,2340,102,2331,102,L,2315,101,Q,2313,101,2309,99,2304,96,2302,96,L,2261,96,Q,2226,96,2215,93,2193,85,2185,84,2182,83,2164,84,2148,84,2124,82,2093,80,2082,79,2047,78,2043,76,2030,71,2003,68,1994,67,1978,67,1963,68,1959,67,1936,57,1926,58,1899,57,1883,58,1877,58,1866,55,1854,52,1851,52,1823,52,1811,52,1806,51,1792,45,1778,39,1770,38,1744,33,1705,35,L,1671,35,Q,1660,35,1645,40,1628,47,1620,47,1580,51,1571,50,1558,48,1542,55,1524,62,1510,61,1488,60,1483,61,1478,62,1468,67,1459,72,1456,72,1447,71,1443,71,1437,71,1430,77,1418,86,1401,86,L,1379,86,Q,1371,86,1355,96,1344,102,1311,124,1305,127,1298,143,1291,162,1289,165,1289,178,1281,210,1280,212,1272,230,1270,238,1269,251,1261,267,1253,298,1251,302,1246,321,1241,337,1236,345,1231,352,1231,365,L,1221,385,Q,1214,396,1214,411,1214,415,1213,417,L,1210,423,Q,1204,429,1204,434,1203,444,1197,457,1190,472,1188,480,L,1177,519,Q,1177,521,1176,527,1175,529,1174,533,1170,545,1170,548,1170,551,1159,576,1157,579,1153,600,1148,617,1141,625,L,1120,644,Q,1107,655,1100,665,1088,677,1060,713,1038,735,1021,755,1015,762,1004,778,991,796,984,806,959,834,944,846,936,852,924,868,L,906,887,Q,903,890,901,893,896,902,892,907,888,910,881,918,874,925,873,926,871,927,865,936,859,944,851,949,844,954,826,977,807,1e3,800,1006,794,1011,785,1017,777,1023,770,1024,768,1026,763,1029,757,1035,749,1036,737,1037,736,1038,L,736,1052,Q,744,1055,747,1069,748,1074,748,1091,747,1099,753,1115,759,1134,760,1139,L,761,1161,Q,761,1165,768,1183,770,1189,778,1208,785,1223,785,1232,785,1238,783,1251,782,1254,782,1257,782,1264,785,1273,L,794,1295,Q,794,1298,794,1305,794,1312,797,1317,798,1321,805,1336,805,1336,809,1356,812,1374,815,1380,L,824,1399,Q,824,1400,836,1420,L,880,1507,Q,881,1510,902,1547,914,1571,920,1583,920,1585,921,1588,L,935,1621,Q,935,1622,947,1657,955,1682,971,1710,983,1701,1008,1689,1034,1676,1049,1674,1071,1669,1138,1638,1182,1619,1236,1589,1266,1573,1315,1544,1347,1525,1387,1487,1441,1436,1451,1428,1544,1352,1592,1334,1609,1325,1645,1300,1648,1298,1650,1297,1689,1270,1705,1260,1731,1244,1762,1218,1798,1188,1822,1166,1846,1144,1866,1125,1886,1105,1902,1103,1917,1099,1940,1093,1961,1083,2004,1069,2057,1050,2075,1050,2096,1050,2110,1052,2123,1053,2140,1053,2157,1053,2166,1053,2174,1053,2186,1052,2197,1051,2206,1045,2215,1039,2229,1038,2236,1038,2279,1038,2282,1038,2337,1038,2341,1038,2347,1043,2352,1047,2358,1047,L,2373,1047,Q,2383,1048,2409,1057,2426,1062,2448,1059,2462,1057,2478,1058,2498,1060,2505,1066,2515,1075,2568,1075,2606,1075,2633,1066,2657,1057,2716,1059,2716,1060,2718,1060,2723,1062,2731,1066,2745,1073,2748,1075,2756,1079,2767,1081,2778,1083,2788,1083,2798,1083,2818,1091,2839,1099,2850,1104,2861,1109,2879,1111,2896,1114,2929,1132,2961,1149,2966,1154,2970,1158,3004,1176,3038,1193,3046,1193,3054,1193,3070,1181,3087,1169,3100,1163,3113,1157,3140,1142,3160,1132,3175,1123,3155,1104,3148,1096,3125,1067,3119,1060,3109,1045,3085,1018,3051,982,3045,974,3019,943,3009,931,2992,910,2980,890,2958,856,2907,800,2856,743,2845,729,2811,693,2779,647,2745,599,2722,574,2711,562,2690,531,2668,497,2662,488,2657,480,2652,468,2647,454,2641,444,2626,419,2621,410,2618,406,2617,405,2613,398,2607,385,2597,367,2592,359,2565,325,2560,316,2539,278,2528,261,2514,241,2491,212,2483,201,2463,163,2454,142,2449,133,Q,2439,117,2431,116,Z]],label:"Posof",shortLabel:"PO",labelPosition:[195.5,63.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"ardahan",type:"maps"}}})});