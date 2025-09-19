const express = require('express');
const app = express();
const port = process.env.PORT || 7001;

// CORS middleware to allow all domains
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const orderHistory = {
    "success": true,
    "data": [
        {
            "orderNumber": "37500168647300",
            "date": "2025-01-01",
            "customer": {
                "firstName": "Megan",
                "lastName": "Disney"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "TB2501",
                        "name": "Tastebuds-January'25/US"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100419S",
                        "name": "TasteBuds 3 Month Subscription/US"
                    },
                    "quantity": 1,
                    "total": 54
                }
            ]
        },
        {
            "orderNumber": "1600314142",
            "date": "2025-01-01",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "4192",
                        "name": "$5 PC Money/1"
                    },
                    "quantity": 3,
                    "total": 15
                }
            ]
        },
        {
            "orderNumber": "1600432146",
            "date": "2025-01-01",
            "customer": {
                "firstName": "Mary",
                "lastName": "Phelan"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101354",
                        "name": "Give Back Set US"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1752",
                        "name": "Glass Mixing Bowl Set"
                    },
                    "quantity": 1,
                    "total": 26
                },
                {
                    "product": {
                        "sku": "100741",
                        "name": "Whipped Cream Maker & Decorator"
                    },
                    "quantity": 1,
                    "total": 35
                },
                {
                    "product": {
                        "sku": "100738",
                        "name": "Stone Pie Plate"
                    },
                    "quantity": 1,
                    "total": 50
                }
            ]
        },
        {
            "orderNumber": "1599941908",
            "date": "2025-01-02",
            "customer": {
                "firstName": "Natasha",
                "lastName": "Fijalkowski"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100041",
                        "name": "Micro-Cooker® Set"
                    },
                    "quantity": 1,
                    "total": 49.5
                }
            ]
        },
        {
            "orderNumber": "1052776",
            "date": "2025-01-02",
            "customer": {
                "firstName": "Amy",
                "lastName": "Becker"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "9812",
                        "name": "Jamaican Jerk Rub"
                    },
                    "quantity": 3,
                    "total": 18
                }
            ]
        },
        {
            "orderNumber": "1052865",
            "date": "2025-01-03",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "4192",
                        "name": "$5 PC Money/1"
                    },
                    "quantity": 20,
                    "total": 100
                }
            ]
        },
        {
            "orderNumber": "1052998",
            "date": "2025-01-03",
            "customer": {
                "firstName": "Andrew",
                "lastName": "Smith"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "RP1003",
                        "name": "Handle (#2729,2734,2735,2737,2738,2741)"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "1053883",
            "date": "2025-01-04",
            "customer": {
                "firstName": "Kayla",
                "lastName": "Hart"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100662",
                        "name": "Silicone Egg Bites Mold"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 12.5
                }
            ]
        },
        {
            "orderNumber": "1575352186",
            "date": "2025-01-04",
            "customer": {
                "firstName": "Katherine",
                "lastName": "Spitler"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2677",
                        "name": "Jar Opener"
                    },
                    "quantity": 1,
                    "total": 17.5
                }
            ]
        },
        {
            "orderNumber": "207629G0002",
            "date": "2025-01-04",
            "customer": {
                "firstName": "Katherine",
                "lastName": "Weaver"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100943",
                        "name": "Almond Pound Cake Mix"
                    },
                    "quantity": 1,
                    "total": 11
                }
            ]
        },
        {
            "orderNumber": "59221960870839",
            "date": "2025-01-04",
            "customer": {
                "firstName": "Angela",
                "lastName": "Skipper"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "PB2332",
                        "name": "Host Bonus Mystery Gift/12'24/NA"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1086",
                        "name": "Air Fryer Cooking Guide (#100194)"
                    },
                    "quantity": 1,
                    "total": 3.38
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 6.16
                },
                {
                    "product": {
                        "sku": "1742",
                        "name": "2-cup(500ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 8.88
                },
                {
                    "product": {
                        "sku": "2432",
                        "name": "Small Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 10.49
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 12.33
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 12.34
                },
                {
                    "product": {
                        "sku": "1743",
                        "name": "3-cup(750ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 13.57
                },
                {
                    "product": {
                        "sku": "2431",
                        "name": "Classic Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 15.42
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 15.43
                },
                {
                    "product": {
                        "sku": "100193",
                        "name": "Easy-Read Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 22.5
                },
                {
                    "product": {
                        "sku": "100223",
                        "name": "Leakproof Glass Container Set"
                    },
                    "quantity": 1,
                    "total": 28.5
                },
                {
                    "product": {
                        "sku": "100287",
                        "name": "Insulated Serving Bowl Set"
                    },
                    "quantity": 1,
                    "total": 30.4
                }
            ]
        },
        {
            "orderNumber": "71088532340299",
            "date": "2025-01-06",
            "customer": {
                "firstName": "Riley",
                "lastName": "Sullivan"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100264",
                        "name": "Ice Cream Scoop"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "100268",
                        "name": "Potato Masher"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "42691629792158",
            "date": "2025-01-07",
            "customer": {
                "firstName": "Judith",
                "lastName": "Wall"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100504",
                        "name": "Guacamole Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100835",
                        "name": "Spatula Tongs"
                    },
                    "quantity": 1,
                    "total": 26
                }
            ]
        },
        {
            "orderNumber": "59271612735176",
            "date": "2025-01-07",
            "customer": {
                "firstName": "Amber",
                "lastName": "Dostal"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1182",
                        "name": "Egg Slicer Plus®"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                },
                {
                    "product": {
                        "sku": "101215",
                        "name": "9x13 Brilliance Nonstick Baking Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 45
                }
            ]
        },
        {
            "orderNumber": "83652291433902",
            "date": "2025-01-07",
            "customer": {
                "firstName": "Amy",
                "lastName": "Coles"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1655",
                        "name": "Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                },
                {
                    "product": {
                        "sku": "100384",
                        "name": "Stone Bar Pan"
                    },
                    "quantity": 1,
                    "total": 50
                }
            ]
        },
        {
            "orderNumber": "97648137423630",
            "date": "2025-01-07",
            "customer": {
                "firstName": "Kathy",
                "lastName": "Dean"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100361",
                        "name": "Citrus Juicer & Zester"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "1602",
                        "name": "Mini Fluted Cake Pan"
                    },
                    "quantity": 1,
                    "total": 33
                }
            ]
        },
        {
            "orderNumber": "12775785605267",
            "date": "2025-01-08",
            "customer": {
                "firstName": "Anne",
                "lastName": "Holst"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100715",
                        "name": "Scampi Mix"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "2705",
                        "name": "Meat Tenderizer"
                    },
                    "quantity": 1,
                    "total": 35
                },
                {
                    "product": {
                        "sku": "101218",
                        "name": "Brilliance NS Long Loaf Pan Set With Lids"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "65622228071656",
            "date": "2025-01-08",
            "customer": {
                "firstName": "Clarice",
                "lastName": "Richardson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100517",
                        "name": "French Onion Dip Mix"
                    },
                    "quantity": 1,
                    "total": 8.1
                },
                {
                    "product": {
                        "sku": "100819",
                        "name": "Sourdough Bread Mix NA"
                    },
                    "quantity": 1,
                    "total": 8.1
                },
                {
                    "product": {
                        "sku": "101205",
                        "name": "Basil Pesto Seasoning Mix NA"
                    },
                    "quantity": 1,
                    "total": 8.1
                },
                {
                    "product": {
                        "sku": "101283",
                        "name": "Italian Herb Bread Mix NA"
                    },
                    "quantity": 1,
                    "total": 8.1
                },
                {
                    "product": {
                        "sku": "2071",
                        "name": "Small Spreader"
                    },
                    "quantity": 1,
                    "total": 8.1
                },
                {
                    "product": {
                        "sku": "101276",
                        "name": "Pizza Crust Mix NA"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 2,
                    "total": 21.6
                },
                {
                    "product": {
                        "sku": "100947",
                        "name": "Rosemary Focaccia Bread Mix"
                    },
                    "quantity": 3,
                    "total": 29.7
                },
                {
                    "product": {
                        "sku": "101111",
                        "name": "Wood Cake Stand"
                    },
                    "quantity": 1,
                    "total": 44.1
                }
            ]
        },
        {
            "orderNumber": "73310218232762",
            "date": "2025-01-08",
            "customer": {
                "firstName": "Akiko",
                "lastName": "Stefanovich"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100256",
                        "name": "Small Stone Bar Pan"
                    },
                    "quantity": 1,
                    "total": 30
                },
                {
                    "product": {
                        "sku": "100537",
                        "name": "*Scraper Set"
                    },
                    "quantity": 1,
                    "total": 34.5
                },
                {
                    "product": {
                        "sku": "100255",
                        "name": "Medium Stone Bar Pan"
                    },
                    "quantity": 1,
                    "total": 40
                }
            ]
        },
        {
            "orderNumber": "89982102709297",
            "date": "2025-01-08",
            "customer": {
                "firstName": "Jennifer",
                "lastName": "Woolsey"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "5231",
                        "name": "$25 Kit Credit/US"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "92220016776464",
            "date": "2025-01-08",
            "customer": {
                "firstName": "Kristen",
                "lastName": "Davis"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 1.8
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.05
                },
                {
                    "product": {
                        "sku": "9733",
                        "name": "Rosemary Herb Seasoning Mix"
                    },
                    "quantity": 1,
                    "total": 6.3
                },
                {
                    "product": {
                        "sku": "100689",
                        "name": "Silicone Turner"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "100472",
                        "name": "Adjustable Double Grater"
                    },
                    "quantity": 1,
                    "total": 49.5
                },
                {
                    "product": {
                        "sku": "100476",
                        "name": "Carving Set"
                    },
                    "quantity": 1,
                    "total": 105
                }
            ]
        },
        {
            "orderNumber": "OE_ORDER_LINES_ALL739493048",
            "date": "2025-01-08",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PM1313",
                        "name": "Career Club Recruiting Level - 650"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "OE_ORDER_LINES_ALL739493049",
            "date": "2025-01-08",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB2343",
                        "name": "NED/SED Sample (#101485)/1'25/NA"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "10892352626907",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Kimberly",
                "lastName": "Schnurr"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "100537",
                        "name": "*Scraper Set"
                    },
                    "quantity": 1,
                    "total": 34.5
                },
                {
                    "product": {
                        "sku": "100667",
                        "name": "9x13 (23x33-cm) Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 39.5
                }
            ]
        },
        {
            "orderNumber": "12381893334764",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Heidi",
                "lastName": "Cavanaugh"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2614",
                        "name": "Large Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 49
                }
            ]
        },
        {
            "orderNumber": "12885039496749",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Christen",
                "lastName": "Ferro"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "2236",
                        "name": "Mini Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2225",
                        "name": "Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1657",
                        "name": "Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "101172",
                        "name": "Brownie Bite Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "13933837568753",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Tricia",
                "lastName": "Soares"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "1657",
                        "name": "Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100471",
                        "name": "4-qt (3.8-L) Plastic Mixing Bowl"
                    },
                    "quantity": 1,
                    "total": 27
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "14635089002824",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Kelley",
                "lastName": "Moore"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100491",
                        "name": "My Safe Cutter"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "101278",
                        "name": "Roasted Red Pepper Tomato Bisque Mix NA"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100517",
                        "name": "French Onion Dip Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100649",
                        "name": "Garden Vegetable Dip Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "101138",
                        "name": "Chili Peach Sauce"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "15662998590824",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Dawne",
                "lastName": "Breen"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 2,
                    "total": 50
                }
            ]
        },
        {
            "orderNumber": "20389367880364",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Minnie",
                "lastName": "Olson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "28979628840539",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Karen",
                "lastName": "Murphy"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "101171",
                        "name": "Muffin Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                }
            ]
        },
        {
            "orderNumber": "31875058503534",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Je",
                "lastName": "Muhlenbruch"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "101121",
                        "name": "Easy Clean Kitchen Brush"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "1771",
                        "name": "Large Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 27
                },
                {
                    "product": {
                        "sku": "1574",
                        "name": "Cookie Sheet"
                    },
                    "quantity": 1,
                    "total": 28
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "100597",
                        "name": "Modular Sheet Pans"
                    },
                    "quantity": 1,
                    "total": 42
                },
                {
                    "product": {
                        "sku": "100251",
                        "name": "Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 50
                },
                {
                    "product": {
                        "sku": "101216",
                        "name": "8\" Brilliance Nonstick Square Pan With Lid"
                    },
                    "quantity": 2,
                    "total": 80
                }
            ]
        },
        {
            "orderNumber": "32344879992292",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Heidi",
                "lastName": "Hotvedt"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "182A",
                        "name": "1-Cup/250ml Lid (#1825, #100108)"
                    },
                    "quantity": 2,
                    "total": 5
                },
                {
                    "product": {
                        "sku": "174J",
                        "name": "2-Cup/500ml Lid(1 Lid) #1742"
                    },
                    "quantity": 2,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "2432",
                        "name": "Small Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "1742",
                        "name": "2-cup(500ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100537",
                        "name": "*Scraper Set"
                    },
                    "quantity": 1,
                    "total": 34.5
                }
            ]
        },
        {
            "orderNumber": "33031048906371",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Robin",
                "lastName": "Witmer"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100120",
                        "name": "Tortilla Warmer"
                    },
                    "quantity": 1,
                    "total": 15
                }
            ]
        },
        {
            "orderNumber": "33261781420563",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Celeste",
                "lastName": "Mitten"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100676",
                        "name": "Mix 'N Chop Spatula"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "1529",
                        "name": "Ceramic Egg Cooker"
                    },
                    "quantity": 1,
                    "total": 19.5
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "33684756598484",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Brent",
                "lastName": "Bingham"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100808",
                        "name": "Garlic Parmesan Seasoning"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "33939749762238",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Travis",
                "lastName": "Justice-Schnurr"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "1767",
                        "name": "Half Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "37948914181313",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Pauline",
                "lastName": "Mitchell"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                }
            ]
        },
        {
            "orderNumber": "38289932415156",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Julie",
                "lastName": "Diers"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "1642",
                        "name": "All-Purpose Spreader"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "101239",
                        "name": "Nesting Spoon Rest Set"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "1485",
                        "name": "Baker's Roller®"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "40524454171633",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Clarice",
                "lastName": "Richardson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB1598",
                        "name": "Citrus Peeler Gift"
                    },
                    "quantity": 1,
                    "total": 5
                }
            ]
        },
        {
            "orderNumber": "43160747162030",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Anne",
                "lastName": "Holst"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB1598",
                        "name": "Citrus Peeler Gift"
                    },
                    "quantity": 1,
                    "total": 5
                }
            ]
        },
        {
            "orderNumber": "44636655243390",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Ellen",
                "lastName": "Elam"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2719",
                        "name": "Indoor Outdoor Portable Grill"
                    },
                    "quantity": 1,
                    "total": 149
                }
            ]
        },
        {
            "orderNumber": "44976525388072",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Anne",
                "lastName": "Holst"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB2275",
                        "name": "Season's Best® (Fall/Winter 2024) Gift"
                    },
                    "quantity": 1,
                    "total": 4
                }
            ]
        },
        {
            "orderNumber": "51027494383545",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Cheryl",
                "lastName": "Wilson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "52648965125440",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Stacie",
                "lastName": "Chunka"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100505",
                        "name": "Everything Bagel Seasoning"
                    },
                    "quantity": 2,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "100728",
                        "name": "Silicone Egg Turner"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100676",
                        "name": "Mix 'N Chop Spatula"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "2618",
                        "name": "5-Section Tray"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "2427",
                        "name": "Apple Wedger"
                    },
                    "quantity": 1,
                    "total": 22
                },
                {
                    "product": {
                        "sku": "100020",
                        "name": "Mini Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                }
            ]
        },
        {
            "orderNumber": "53118509982942",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Maryann",
                "lastName": "Mcmullen"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "101278",
                        "name": "Roasted Red Pepper Tomato Bisque Mix NA"
                    },
                    "quantity": 2,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "101276",
                        "name": "Pizza Crust Mix NA"
                    },
                    "quantity": 2,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100253",
                        "name": "Personal Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 30
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 2,
                    "total": 32
                },
                {
                    "product": {
                        "sku": "101284",
                        "name": "Soup & Bread Mix Set US"
                    },
                    "quantity": 1,
                    "total": 45
                }
            ]
        },
        {
            "orderNumber": "53365608520663",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Michele",
                "lastName": "Woodruff"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1794",
                        "name": "Cake Tester & Releaser"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "57903109263965",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Jennifer",
                "lastName": "Haggard"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "1657",
                        "name": "Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 2,
                    "total": 26
                }
            ]
        },
        {
            "orderNumber": "59221059037585",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Clarice",
                "lastName": "Richardson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB2275",
                        "name": "Season's Best® (Fall/Winter 2024) Gift"
                    },
                    "quantity": 1,
                    "total": 4
                }
            ]
        },
        {
            "orderNumber": "63221276235085",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Jennifer",
                "lastName": "Martin"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2626",
                        "name": "Large Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "101166",
                        "name": "Dip Mix Set US"
                    },
                    "quantity": 1,
                    "total": 26
                }
            ]
        },
        {
            "orderNumber": "64647401200855",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Chris",
                "lastName": "Poffenberger"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100025",
                        "name": "Brown Sugar Keeper Set"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 16
                }
            ]
        },
        {
            "orderNumber": "67216355672868",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Tiffany",
                "lastName": "Westberry"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "2571",
                        "name": "Toaster Tongs"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "2460",
                        "name": "Corn Butterer"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100264",
                        "name": "Ice Cream Scoop"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "100190",
                        "name": "Measure, Mix & Pour"
                    },
                    "quantity": 1,
                    "total": 19.5
                },
                {
                    "product": {
                        "sku": "1485",
                        "name": "Baker's Roller®"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "101171",
                        "name": "Muffin Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "100475",
                        "name": "Kitchen Spritzer"
                    },
                    "quantity": 1,
                    "total": 30
                }
            ]
        },
        {
            "orderNumber": "68279931033159",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Julie",
                "lastName": "Cavanaugh"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100429",
                        "name": "Beer Bread Mix"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "2576",
                        "name": "Garlic Press"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100221",
                        "name": "Stone Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "71206715750625",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Teresa",
                "lastName": "Saulter"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "72353973924799",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Patricia",
                "lastName": "Hansen"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "2236",
                        "name": "Mini Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2225",
                        "name": "Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1529",
                        "name": "Ceramic Egg Cooker"
                    },
                    "quantity": 1,
                    "total": 19.5
                }
            ]
        },
        {
            "orderNumber": "72382672655981",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Deborah",
                "lastName": "Lawrence"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "73509260155321",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Colleen",
                "lastName": "Tortorice"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "2571",
                        "name": "Toaster Tongs"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "2460",
                        "name": "Corn Butterer"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2308",
                        "name": "Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100264",
                        "name": "Ice Cream Scoop"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "100725",
                        "name": "Stainless Steel Measuring Scoop"
                    },
                    "quantity": 2,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2595",
                        "name": "Citrus Press"
                    },
                    "quantity": 1,
                    "total": 23
                },
                {
                    "product": {
                        "sku": "101239",
                        "name": "Nesting Spoon Rest Set"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "74773830717450",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Fleming"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.05
                },
                {
                    "product": {
                        "sku": "100514",
                        "name": "Salt & Vinegar Seasoning"
                    },
                    "quantity": 1,
                    "total": 6.3
                },
                {
                    "product": {
                        "sku": "100505",
                        "name": "Everything Bagel Seasoning"
                    },
                    "quantity": 2,
                    "total": 12.6
                },
                {
                    "product": {
                        "sku": "1659",
                        "name": "Small Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 13.5
                },
                {
                    "product": {
                        "sku": "100684",
                        "name": "Silicone Spoon"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "100478",
                        "name": "Cheese Knife"
                    },
                    "quantity": 1,
                    "total": 15.3
                },
                {
                    "product": {
                        "sku": "100186",
                        "name": "Wood Salad Bowl & Servers Set"
                    },
                    "quantity": 1,
                    "total": 31.5
                }
            ]
        },
        {
            "orderNumber": "80804395288603",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Susan",
                "lastName": "Lutfi"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100381",
                        "name": "Seasoning Salt"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100826",
                        "name": "*12\" (30-cm) Cast Iron Grill Pan Skillet"
                    },
                    "quantity": 1,
                    "total": 89
                }
            ]
        },
        {
            "orderNumber": "80939306555995",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Karen",
                "lastName": "Griffith"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100122",
                        "name": "Quick Shred"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "100253",
                        "name": "Personal Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 30
                },
                {
                    "product": {
                        "sku": "101216",
                        "name": "8\" Brilliance Nonstick Square Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 40
                }
            ]
        },
        {
            "orderNumber": "83145895679876",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Addrein",
                "lastName": "Banker"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100836",
                        "name": "Bag Clip & Slicer Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 2,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100904",
                        "name": "Icing Spatula"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "2540",
                        "name": "Medium Scoop"
                    },
                    "quantity": 1,
                    "total": 22
                }
            ]
        },
        {
            "orderNumber": "86270545539467",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Dawne",
                "lastName": "Breen"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "101221",
                        "name": "Linzer Cookie Cutter Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "1790",
                        "name": "Large Scoop"
                    },
                    "quantity": 1,
                    "total": 23
                },
                {
                    "product": {
                        "sku": "1135",
                        "name": "Multi-Blade Sharpener"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "2431",
                        "name": "Classic Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "1593",
                        "name": "Kitchen Shears"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "91953023733594",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Melissa",
                "lastName": "Rinard"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "1642",
                        "name": "All-Purpose Spreader"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100668",
                        "name": "8\" (20-cm) Square Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "92755388027024",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Kathryn",
                "lastName": "Garwold"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100191",
                        "name": "Salad Claws"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "1182",
                        "name": "Egg Slicer Plus®"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100694",
                        "name": "Spider Strainer"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "94938298446537",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Debbie",
                "lastName": "Platt"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100483",
                        "name": "Sauce Whisk"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100041",
                        "name": "Micro-Cooker® Set"
                    },
                    "quantity": 1,
                    "total": 49.5
                },
                {
                    "product": {
                        "sku": "100837",
                        "name": "Coated Knife Set"
                    },
                    "quantity": 1,
                    "total": 99
                }
            ]
        },
        {
            "orderNumber": "95036516810727",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Amy",
                "lastName": "Blansett"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2308",
                        "name": "Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "95155265468315",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Amy",
                "lastName": "Armstrong"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100751",
                        "name": "Utensil Scrubber"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100839",
                        "name": "Coated Paring Knife"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100221",
                        "name": "Stone Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 35
                },
                {
                    "product": {
                        "sku": "100774",
                        "name": "Stone Rectangle Baker"
                    },
                    "quantity": 1,
                    "total": 65
                }
            ]
        },
        {
            "orderNumber": "97671957127953",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Dawn",
                "lastName": "Sullivan"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "98364258995118",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Charity",
                "lastName": "Hathaway"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1752",
                        "name": "Glass Mixing Bowl Set"
                    },
                    "quantity": 2,
                    "total": 52
                }
            ]
        },
        {
            "orderNumber": "OE_ORDER_LINES_ALL739622817",
            "date": "2025-01-09",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB2339",
                        "name": "NED/SED Seasonal Pwk & Product/S'25/US"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "12332660509467",
            "date": "2025-01-10",
            "customer": {
                "firstName": "Je",
                "lastName": "Muhlenbruch"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "RP1103",
                        "name": "Small Flexible Cutting Mat Gift"
                    },
                    "quantity": 1,
                    "total": 6
                }
            ]
        },
        {
            "orderNumber": "19901193638350",
            "date": "2025-01-10",
            "customer": {
                "firstName": "Angela",
                "lastName": "Triolo"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "27715724307577",
            "date": "2025-01-10",
            "customer": {
                "firstName": "Deborah",
                "lastName": "Mears"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100429",
                        "name": "Beer Bread Mix"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "2432",
                        "name": "Small Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "1012",
                        "name": "Cutting Board"
                    },
                    "quantity": 1,
                    "total": 22
                }
            ]
        },
        {
            "orderNumber": "28496969270613",
            "date": "2025-01-10",
            "customer": {
                "firstName": "Sarah",
                "lastName": "Holst"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 2.7
                },
                {
                    "product": {
                        "sku": "101278",
                        "name": "Roasted Red Pepper Tomato Bisque Mix NA"
                    },
                    "quantity": 1,
                    "total": 6.3
                },
                {
                    "product": {
                        "sku": "2071",
                        "name": "Small Spreader"
                    },
                    "quantity": 1,
                    "total": 8.1
                },
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 13.5
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "2278",
                        "name": "Quick-Stir® Pitcher"
                    },
                    "quantity": 1,
                    "total": 25.2
                },
                {
                    "product": {
                        "sku": "101116",
                        "name": "Cold Brew Pitcher"
                    },
                    "quantity": 1,
                    "total": 30
                },
                {
                    "product": {
                        "sku": "100221",
                        "name": "Stone Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 31.5
                }
            ]
        },
        {
            "orderNumber": "30959165596787",
            "date": "2025-01-10",
            "customer": {
                "firstName": "Arlene",
                "lastName": "Killeen"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "9492",
                        "name": "Garlic & Herb Rub"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "9870",
                        "name": "Greek Rub"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100809",
                        "name": "Honey Sriracha Seasoning"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100943",
                        "name": "Almond Pound Cake Mix"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100648",
                        "name": "Parmesan Garlic Olive Oil"
                    },
                    "quantity": 1,
                    "total": 21
                },
                {
                    "product": {
                        "sku": "1603",
                        "name": "Fluted Cake Pan"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100879",
                        "name": "Vanilla Smoothie Mix"
                    },
                    "quantity": 2,
                    "total": 28
                }
            ]
        },
        {
            "orderNumber": "38413616787536",
            "date": "2025-01-10",
            "customer": {
                "firstName": "Janelle",
                "lastName": "Griffith"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101127",
                        "name": "Deluxe Coffee Machine Hot Water Insert"
                    },
                    "quantity": 1,
                    "total": 10.8
                },
                {
                    "product": {
                        "sku": "100867",
                        "name": "Deluxe Stand Mixer Pouring Shield"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "101119",
                        "name": "Deluxe Coffee Machine Espresso Insert"
                    },
                    "quantity": 1,
                    "total": 22.5
                },
                {
                    "product": {
                        "sku": "101231",
                        "name": "Deluxe Stand Mixer Pasta Roller & Cutter Set"
                    },
                    "quantity": 1,
                    "total": 135
                }
            ]
        },
        {
            "orderNumber": "43829499165728",
            "date": "2025-01-10",
            "customer": {
                "firstName": "Sandra",
                "lastName": "Robinson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100381",
                        "name": "Seasoning Salt"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "1794",
                        "name": "Cake Tester & Releaser"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2677",
                        "name": "Jar Opener"
                    },
                    "quantity": 1,
                    "total": 17.5
                },
                {
                    "product": {
                        "sku": "101172",
                        "name": "Brownie Bite Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                }
            ]
        },
        {
            "orderNumber": "84060754084273",
            "date": "2025-01-10",
            "customer": {
                "firstName": "Misty",
                "lastName": "Townson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1142",
                        "name": "Scoop Loop®"
                    },
                    "quantity": 1,
                    "total": 5
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 2,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100835",
                        "name": "Spatula Tongs"
                    },
                    "quantity": 1,
                    "total": 26
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                }
            ]
        },
        {
            "orderNumber": "98078163092428",
            "date": "2025-01-10",
            "customer": {
                "firstName": "Mary",
                "lastName": "Christie"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "100517",
                        "name": "French Onion Dip Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100649",
                        "name": "Garden Vegetable Dip Mix"
                    },
                    "quantity": 1,
                    "total": 9
                }
            ]
        },
        {
            "orderNumber": "25700959970772",
            "date": "2025-01-11",
            "customer": {
                "firstName": "Sandra",
                "lastName": "Black"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100255",
                        "name": "Medium Stone Bar Pan"
                    },
                    "quantity": 1,
                    "total": 40
                }
            ]
        },
        {
            "orderNumber": "47031069138007",
            "date": "2025-01-11",
            "customer": {
                "firstName": "Jennifer",
                "lastName": "Hoven"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100034",
                        "name": "Kitchen Paring Knife"
                    },
                    "quantity": 1,
                    "total": 7.5
                },
                {
                    "product": {
                        "sku": "100841",
                        "name": "Coated Tomato Knife"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100842",
                        "name": "Coated Utility Knife"
                    },
                    "quantity": 1,
                    "total": 18
                }
            ]
        },
        {
            "orderNumber": "14935821393935",
            "date": "2025-01-12",
            "customer": {
                "firstName": "Diana",
                "lastName": "Strahan"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "1142",
                        "name": "Scoop Loop®"
                    },
                    "quantity": 1,
                    "total": 5
                },
                {
                    "product": {
                        "sku": "9812",
                        "name": "Jamaican Jerk Rub"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100809",
                        "name": "Honey Sriracha Seasoning"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "1529",
                        "name": "Ceramic Egg Cooker"
                    },
                    "quantity": 1,
                    "total": 19.5
                },
                {
                    "product": {
                        "sku": "2427",
                        "name": "Apple Wedger"
                    },
                    "quantity": 1,
                    "total": 22
                }
            ]
        },
        {
            "orderNumber": "17060696082417",
            "date": "2025-01-12",
            "customer": {
                "firstName": "Kathleen",
                "lastName": "Mac"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                }
            ]
        },
        {
            "orderNumber": "19182832930310",
            "date": "2025-01-12",
            "customer": {
                "firstName": "Kristen",
                "lastName": "Davis"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100482",
                        "name": "Adjustable Zester"
                    },
                    "quantity": 1,
                    "total": 26.1
                },
                {
                    "product": {
                        "sku": "100747",
                        "name": "Cupcake Baking Set"
                    },
                    "quantity": 1,
                    "total": 39
                },
                {
                    "product": {
                        "sku": "101218",
                        "name": "Brilliance NS Long Loaf Pan Set With Lids"
                    },
                    "quantity": 1,
                    "total": 50.4
                }
            ]
        },
        {
            "orderNumber": "36059236696959",
            "date": "2025-01-12",
            "customer": {
                "firstName": "Jaye",
                "lastName": "Geater"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100504",
                        "name": "Guacamole Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100523",
                        "name": "Caramel Latte Bread Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100524",
                        "name": "Chili Mix 3 Pack"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "100943",
                        "name": "Almond Pound Cake Mix"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "100947",
                        "name": "Rosemary Focaccia Bread Mix"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "9807",
                        "name": "Spicy Pineapple Rum Sauce"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "101159",
                        "name": "Gourmet Cherry Almond Syrup"
                    },
                    "quantity": 1,
                    "total": 21
                },
                {
                    "product": {
                        "sku": "101160",
                        "name": "Gourmet Limoncello Syrup"
                    },
                    "quantity": 1,
                    "total": 21
                },
                {
                    "product": {
                        "sku": "101173",
                        "name": "Java Chip Frappe Drink Mix"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "101174",
                        "name": "Vanilla Crème Frappe Drink Mix"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "59927701314048",
            "date": "2025-01-12",
            "customer": {
                "firstName": "Linda",
                "lastName": "Watson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 0.06
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 0.21
                },
                {
                    "product": {
                        "sku": "9733",
                        "name": "Rosemary Herb Seasoning Mix"
                    },
                    "quantity": 2,
                    "total": 0.46
                },
                {
                    "product": {
                        "sku": "100688",
                        "name": "Small Silicone Spatula"
                    },
                    "quantity": 1,
                    "total": 0.54
                },
                {
                    "product": {
                        "sku": "100689",
                        "name": "Silicone Turner"
                    },
                    "quantity": 1,
                    "total": 0.54
                },
                {
                    "product": {
                        "sku": "100728",
                        "name": "Silicone Egg Turner"
                    },
                    "quantity": 1,
                    "total": 0.54
                },
                {
                    "product": {
                        "sku": "1674",
                        "name": "Bamboo Spoon Set"
                    },
                    "quantity": 1,
                    "total": 0.58
                },
                {
                    "product": {
                        "sku": "2432",
                        "name": "Small Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 0.58
                },
                {
                    "product": {
                        "sku": "1529",
                        "name": "Ceramic Egg Cooker"
                    },
                    "quantity": 1,
                    "total": 0.67
                },
                {
                    "product": {
                        "sku": "1790",
                        "name": "Large Scoop"
                    },
                    "quantity": 1,
                    "total": 0.77
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 0.85
                },
                {
                    "product": {
                        "sku": "1574",
                        "name": "Cookie Sheet"
                    },
                    "quantity": 1,
                    "total": 0.95
                },
                {
                    "product": {
                        "sku": "100198",
                        "name": "Silicone Oven Mitt Set"
                    },
                    "quantity": 1,
                    "total": 1.33
                },
                {
                    "product": {
                        "sku": "101418",
                        "name": "*Utensil Starter Set"
                    },
                    "quantity": 1,
                    "total": 39.6
                },
                {
                    "product": {
                        "sku": "1581",
                        "name": "*Steak Knife Set"
                    },
                    "quantity": 2,
                    "total": 139
                },
                {
                    "product": {
                        "sku": "1609",
                        "name": "*Knife Set"
                    },
                    "quantity": 1,
                    "total": 189.75
                }
            ]
        },
        {
            "orderNumber": "69793418592747",
            "date": "2025-01-12",
            "customer": {
                "firstName": "Natalie",
                "lastName": "Craft"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100111",
                        "name": "Stainless Steel Nonstick Wok"
                    },
                    "quantity": 1,
                    "total": 240
                }
            ]
        },
        {
            "orderNumber": "91471100602955",
            "date": "2025-01-12",
            "customer": {
                "firstName": "Kelly",
                "lastName": "Staley"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "92186472301626",
            "date": "2025-01-12",
            "customer": {
                "firstName": "Shannin",
                "lastName": "Lou"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "5231",
                        "name": "$25 Kit Credit/US"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "95407685989000",
            "date": "2025-01-12",
            "customer": {
                "firstName": "Kim",
                "lastName": "Hutzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 11.7
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "2460",
                        "name": "Corn Butterer"
                    },
                    "quantity": 3,
                    "total": 21.6
                },
                {
                    "product": {
                        "sku": "100251",
                        "name": "Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 45
                }
            ]
        },
        {
            "orderNumber": "1199234053",
            "date": "2025-01-13",
            "customer": {
                "firstName": "Lori",
                "lastName": "Eischeid"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2654",
                        "name": "Twix-It Clips (Set of 2)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "100201",
                        "name": "Microwave Grip Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100820",
                        "name": "Silicone Helper Handle Protectors"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100478",
                        "name": "Cheese Knife"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100676",
                        "name": "Mix 'N Chop Spatula"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "1135",
                        "name": "Multi-Blade Sharpener"
                    },
                    "quantity": 1,
                    "total": 24
                }
            ]
        },
        {
            "orderNumber": "41524377532511",
            "date": "2025-01-13",
            "customer": {
                "firstName": "Felica",
                "lastName": "Tortorici"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100429",
                        "name": "Beer Bread Mix"
                    },
                    "quantity": 1,
                    "total": 7.2
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100726",
                        "name": "Plastic Mixing Bowl Set"
                    },
                    "quantity": 1,
                    "total": 59.4
                },
                {
                    "product": {
                        "sku": "101222",
                        "name": "Dual-Sided Charcuterie Board Set"
                    },
                    "quantity": 1,
                    "total": 59.4
                }
            ]
        },
        {
            "orderNumber": "OE_ORDER_LINES_ALL740000324",
            "date": "2025-01-13",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB2344",
                        "name": "Consultant Recruiter Promo(#101481)/2025/NA"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "32733994075359",
            "date": "2025-01-14",
            "customer": {
                "firstName": "Jey Paula",
                "lastName": "Grenier"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1655",
                        "name": "Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 3.65
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 2,
                    "total": 3.98
                },
                {
                    "product": {
                        "sku": "1001",
                        "name": "Bar Board"
                    },
                    "quantity": 1,
                    "total": 4.8
                },
                {
                    "product": {
                        "sku": "2460",
                        "name": "Corn Butterer"
                    },
                    "quantity": 2,
                    "total": 5.3
                },
                {
                    "product": {
                        "sku": "2071",
                        "name": "Small Spreader"
                    },
                    "quantity": 2,
                    "total": 5.94
                },
                {
                    "product": {
                        "sku": "2530",
                        "name": "Small Scoop"
                    },
                    "quantity": 1,
                    "total": 6.95
                },
                {
                    "product": {
                        "sku": "2540",
                        "name": "Medium Scoop"
                    },
                    "quantity": 1,
                    "total": 7.28
                },
                {
                    "product": {
                        "sku": "100830",
                        "name": "Extra-Large Scoop"
                    },
                    "quantity": 1,
                    "total": 8.27
                },
                {
                    "product": {
                        "sku": "1752",
                        "name": "Glass Mixing Bowl Set"
                    },
                    "quantity": 1,
                    "total": 8.61
                },
                {
                    "product": {
                        "sku": "100904",
                        "name": "Icing Spatula"
                    },
                    "quantity": 2,
                    "total": 11.92
                },
                {
                    "product": {
                        "sku": "100257",
                        "name": "Pizza Peel"
                    },
                    "quantity": 1,
                    "total": 13.08
                },
                {
                    "product": {
                        "sku": "100906",
                        "name": "Store & Serve"
                    },
                    "quantity": 1,
                    "total": 26.23
                },
                {
                    "product": {
                        "sku": "100287",
                        "name": "Insulated Serving Bowl Set"
                    },
                    "quantity": 1,
                    "total": 31.46
                },
                {
                    "product": {
                        "sku": "100467",
                        "name": "RockCrok Digital Slow Cooker Stand"
                    },
                    "quantity": 1,
                    "total": 32.78
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 2,
                    "total": 37.08
                }
            ]
        },
        {
            "orderNumber": "34712914897296",
            "date": "2025-01-14",
            "customer": {
                "firstName": "Sandra",
                "lastName": "Cirrito"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 45
                }
            ]
        },
        {
            "orderNumber": "35114149272043",
            "date": "2025-01-14",
            "customer": {
                "firstName": "Susan",
                "lastName": "Horbach"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100523",
                        "name": "Caramel Latte Bread Mix"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "9807",
                        "name": "Spicy Pineapple Rum Sauce"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "1752",
                        "name": "Glass Mixing Bowl Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 18
                }
            ]
        },
        {
            "orderNumber": "38223871026894",
            "date": "2025-01-14",
            "customer": {
                "firstName": "Natalie",
                "lastName": "Snyder"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1742",
                        "name": "2-cup(500ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 18
                }
            ]
        },
        {
            "orderNumber": "40322627798199",
            "date": "2025-01-14",
            "customer": {
                "firstName": "Angela",
                "lastName": "Easley"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "9492",
                        "name": "Garlic & Herb Rub"
                    },
                    "quantity": 1,
                    "total": 0.22
                },
                {
                    "product": {
                        "sku": "100502",
                        "name": "Everything But the Pizza Seasoning"
                    },
                    "quantity": 1,
                    "total": 0.23
                },
                {
                    "product": {
                        "sku": "9733",
                        "name": "Rosemary Herb Seasoning Mix"
                    },
                    "quantity": 1,
                    "total": 0.24
                },
                {
                    "product": {
                        "sku": "100429",
                        "name": "Beer Bread Mix"
                    },
                    "quantity": 1,
                    "total": 0.28
                },
                {
                    "product": {
                        "sku": "100649",
                        "name": "Garden Vegetable Dip Mix"
                    },
                    "quantity": 1,
                    "total": 0.31
                },
                {
                    "product": {
                        "sku": "100025",
                        "name": "Brown Sugar Keeper Set"
                    },
                    "quantity": 1,
                    "total": 0.51
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 12.5
                },
                {
                    "product": {
                        "sku": "101198",
                        "name": "*Brownie Pan Set"
                    },
                    "quantity": 1,
                    "total": 27.5
                },
                {
                    "product": {
                        "sku": "100292",
                        "name": "Stoneware Starter Set"
                    },
                    "quantity": 1,
                    "total": 57.5
                }
            ]
        },
        {
            "orderNumber": "57080598188379",
            "date": "2025-01-14",
            "customer": {
                "firstName": "Jennifer",
                "lastName": "Cartwright"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1794",
                        "name": "Cake Tester & Releaser"
                    },
                    "quantity": 1,
                    "total": 0.77
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 1.93
                },
                {
                    "product": {
                        "sku": "100738",
                        "name": "Stone Pie Plate"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100247",
                        "name": "2-qt. (2-L) Enameled Cast Iron Baker"
                    },
                    "quantity": 1,
                    "total": 37.5
                }
            ]
        },
        {
            "orderNumber": "72255366809037",
            "date": "2025-01-14",
            "customer": {
                "firstName": "Nicole",
                "lastName": "Martincich"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 1.57
                },
                {
                    "product": {
                        "sku": "1794",
                        "name": "Cake Tester & Releaser"
                    },
                    "quantity": 1,
                    "total": 2.1
                },
                {
                    "product": {
                        "sku": "2071",
                        "name": "Small Spreader"
                    },
                    "quantity": 1,
                    "total": 2.37
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 2.62
                },
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 3.15
                },
                {
                    "product": {
                        "sku": "1642",
                        "name": "All-Purpose Spreader"
                    },
                    "quantity": 1,
                    "total": 3.42
                },
                {
                    "product": {
                        "sku": "101121",
                        "name": "Easy Clean Kitchen Brush"
                    },
                    "quantity": 1,
                    "total": 3.93
                },
                {
                    "product": {
                        "sku": "101123",
                        "name": "Easy Clean Bottle Brush"
                    },
                    "quantity": 1,
                    "total": 3.94
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 4.2
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 4.2
                },
                {
                    "product": {
                        "sku": "2956",
                        "name": "Sauté Tongs"
                    },
                    "quantity": 1,
                    "total": 4.47
                },
                {
                    "product": {
                        "sku": "100483",
                        "name": "Sauce Whisk"
                    },
                    "quantity": 1,
                    "total": 4.72
                },
                {
                    "product": {
                        "sku": "100904",
                        "name": "Icing Spatula"
                    },
                    "quantity": 1,
                    "total": 4.72
                },
                {
                    "product": {
                        "sku": "2626",
                        "name": "Large Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 4.72
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 5.25
                },
                {
                    "product": {
                        "sku": "1655",
                        "name": "Skinny Scraper"
                    },
                    "quantity": 2,
                    "total": 5.76
                },
                {
                    "product": {
                        "sku": "1012",
                        "name": "Cutting Board"
                    },
                    "quantity": 1,
                    "total": 5.77
                },
                {
                    "product": {
                        "sku": "1519",
                        "name": "Flexible Cutting Mat Set"
                    },
                    "quantity": 1,
                    "total": 5.77
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 6.57
                },
                {
                    "product": {
                        "sku": "100835",
                        "name": "Spatula Tongs"
                    },
                    "quantity": 1,
                    "total": 6.82
                },
                {
                    "product": {
                        "sku": "100020",
                        "name": "Mini Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 7.75
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 7.75
                },
                {
                    "product": {
                        "sku": "1588",
                        "name": "Stackable Cooling Rack Set"
                    },
                    "quantity": 1,
                    "total": 9.19
                },
                {
                    "product": {
                        "sku": "1593",
                        "name": "Kitchen Shears"
                    },
                    "quantity": 1,
                    "total": 9.45
                },
                {
                    "product": {
                        "sku": "1767",
                        "name": "Half Sheet Pan"
                    },
                    "quantity": 2,
                    "total": 18.36
                },
                {
                    "product": {
                        "sku": "101420",
                        "name": "*Cookie Baking Set"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "72414462941421",
            "date": "2025-01-14",
            "customer": {
                "firstName": "Anita",
                "lastName": "Uhl Wartalla"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1742",
                        "name": "2-cup(500ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "1743",
                        "name": "3-cup(750ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 22
                },
                {
                    "product": {
                        "sku": "100221",
                        "name": "Stone Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "77690708640189",
            "date": "2025-01-14",
            "customer": {
                "firstName": "Kirsten",
                "lastName": "Dailey"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1142",
                        "name": "Scoop Loop®"
                    },
                    "quantity": 1,
                    "total": 0.04
                },
                {
                    "product": {
                        "sku": "100649",
                        "name": "Garden Vegetable Dip Mix"
                    },
                    "quantity": 1,
                    "total": 0.08
                },
                {
                    "product": {
                        "sku": "1174",
                        "name": "Burger & Slider Press"
                    },
                    "quantity": 1,
                    "total": 0.15
                },
                {
                    "product": {
                        "sku": "100023",
                        "name": "Powdered Sugar Shaker"
                    },
                    "quantity": 1,
                    "total": 0.18
                }
            ]
        },
        {
            "orderNumber": "78542082858806",
            "date": "2025-01-14",
            "customer": {
                "firstName": "Amy",
                "lastName": "Hodgson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 1.8
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 11.7
                },
                {
                    "product": {
                        "sku": "2308",
                        "name": "Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 11.7
                },
                {
                    "product": {
                        "sku": "101198",
                        "name": "*Brownie Pan Set"
                    },
                    "quantity": 1,
                    "total": 27.5
                },
                {
                    "product": {
                        "sku": "101418",
                        "name": "*Utensil Starter Set"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "81030743440486",
            "date": "2025-01-14",
            "customer": {
                "firstName": "Michelle",
                "lastName": "White"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "100041",
                        "name": "Micro-Cooker® Set"
                    },
                    "quantity": 1,
                    "total": 44.55
                },
                {
                    "product": {
                        "sku": "100659",
                        "name": "*Deluxe Multi Cooker"
                    },
                    "quantity": 1,
                    "total": 91.6
                },
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "100041",
                        "name": "Micro-Cooker® Set"
                    },
                    "quantity": 1,
                    "total": 44.55
                },
                {
                    "product": {
                        "sku": "100659",
                        "name": "*Deluxe Multi Cooker"
                    },
                    "quantity": 1,
                    "total": 91.6
                }
            ]
        },
        {
            "orderNumber": "81156284275348",
            "date": "2025-01-14",
            "customer": {
                "firstName": "Anita",
                "lastName": "Uhl-Wartalla"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "10209593656957",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Fatina",
                "lastName": "Pfeiffer"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1182",
                        "name": "Egg Slicer Plus®"
                    },
                    "quantity": 1,
                    "total": 17
                }
            ]
        },
        {
            "orderNumber": "12017703034850",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Carla",
                "lastName": "Luallin"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "101221",
                        "name": "Linzer Cookie Cutter Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100009",
                        "name": "2-qt. Micro-Cooker®"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "101233",
                        "name": "Cupcake Pan & Carrier Set"
                    },
                    "quantity": 1,
                    "total": 49
                }
            ]
        },
        {
            "orderNumber": "20145439659171",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Louveta",
                "lastName": "Moore"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100871",
                        "name": "Everything Seasoning Set (US)"
                    },
                    "quantity": 1,
                    "total": 19
                }
            ]
        },
        {
            "orderNumber": "21834128457634",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Jackie",
                "lastName": "Wadsworth"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "2477",
                        "name": "Stainless Steel Mini Whisk"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                },
                {
                    "product": {
                        "sku": "100750",
                        "name": "Coated Steak Knife Set"
                    },
                    "quantity": 1,
                    "total": 49.5
                }
            ]
        },
        {
            "orderNumber": "21837587485843",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Cynthia",
                "lastName": "Marion"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "100679",
                        "name": "Silicone Slotted Turner"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100090",
                        "name": "1-qt. (1-L)Cool & Serve Bowl"
                    },
                    "quantity": 1,
                    "total": 30
                }
            ]
        },
        {
            "orderNumber": "21962671396294",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Elaine",
                "lastName": "Winfree"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2431",
                        "name": "Classic Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "22672693589244",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Carla",
                "lastName": "Purvis"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100780",
                        "name": "Minestrone Soup Mix"
                    },
                    "quantity": 1,
                    "total": 6.3
                },
                {
                    "product": {
                        "sku": "100517",
                        "name": "French Onion Dip Mix"
                    },
                    "quantity": 1,
                    "total": 8.1
                },
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 10.8
                },
                {
                    "product": {
                        "sku": "101354",
                        "name": "Give Back Set US"
                    },
                    "quantity": 1,
                    "total": 13.5
                },
                {
                    "product": {
                        "sku": "2614",
                        "name": "Large Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 29.4
                }
            ]
        },
        {
            "orderNumber": "23338971972116",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Ursula",
                "lastName": "Popham"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "101437",
                        "name": "Black Truffle & Herb Seasoning Mix NA"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "101205",
                        "name": "Basil Pesto Seasoning Mix NA"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "2956",
                        "name": "Sauté Tongs"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100838",
                        "name": "Coated Chef's Knife"
                    },
                    "quantity": 1,
                    "total": 23
                },
                {
                    "product": {
                        "sku": "100597",
                        "name": "Modular Sheet Pans"
                    },
                    "quantity": 1,
                    "total": 42
                }
            ]
        },
        {
            "orderNumber": "27263321199587",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Nichole",
                "lastName": "Keihn"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "9702",
                        "name": "Raspberry Habanero Sauce"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "2576",
                        "name": "Garlic Press"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "100292",
                        "name": "Stoneware Starter Set"
                    },
                    "quantity": 1,
                    "total": 115
                }
            ]
        },
        {
            "orderNumber": "31027279620405",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Gloria",
                "lastName": "Lyda Fowler"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101354",
                        "name": "Give Back Set US"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100841",
                        "name": "Coated Tomato Knife"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "1574",
                        "name": "Cookie Sheet"
                    },
                    "quantity": 1,
                    "total": 28
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101354",
                        "name": "Give Back Set US"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100841",
                        "name": "Coated Tomato Knife"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "1574",
                        "name": "Cookie Sheet"
                    },
                    "quantity": 1,
                    "total": 28
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 29.5
                }
            ]
        },
        {
            "orderNumber": "34511854112441",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Grace",
                "lastName": "Mickle"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "35284064930136",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Jennifer",
                "lastName": "Langley"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.05
                },
                {
                    "product": {
                        "sku": "2308",
                        "name": "Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 11.7
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "2955",
                        "name": "Large Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 18.72
                },
                {
                    "product": {
                        "sku": "1743",
                        "name": "3-cup(750ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 19.8
                },
                {
                    "product": {
                        "sku": "101173",
                        "name": "Java Chip Frappe Drink Mix"
                    },
                    "quantity": 1,
                    "total": 22.5
                },
                {
                    "product": {
                        "sku": "101174",
                        "name": "Vanilla Crème Frappe Drink Mix"
                    },
                    "quantity": 1,
                    "total": 22.5
                }
            ]
        },
        {
            "orderNumber": "35907502233338",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Kerry",
                "lastName": "Brockmeier"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                }
            ]
        },
        {
            "orderNumber": "38128992257458",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Kristy",
                "lastName": "Oswald"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2955",
                        "name": "Large Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 20.8
                }
            ]
        },
        {
            "orderNumber": "38227992036024",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Theresa",
                "lastName": "Fahnle"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "40237984330635",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Samantha",
                "lastName": "Colona"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "2225",
                        "name": "Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                },
                {
                    "product": {
                        "sku": "100597",
                        "name": "Modular Sheet Pans"
                    },
                    "quantity": 1,
                    "total": 42
                }
            ]
        },
        {
            "orderNumber": "43412490782517",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Michelle",
                "lastName": "Caldwell"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1752",
                        "name": "Glass Mixing Bowl Set"
                    },
                    "quantity": 1,
                    "total": 26
                }
            ]
        },
        {
            "orderNumber": "46311827379968",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Beverly",
                "lastName": "Hamby"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100491",
                        "name": "My Safe Cutter"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "101121",
                        "name": "Easy Clean Kitchen Brush"
                    },
                    "quantity": 1,
                    "total": 15
                }
            ]
        },
        {
            "orderNumber": "46505597207455",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Teresa",
                "lastName": "Olsen"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "2576",
                        "name": "Garlic Press"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "1574",
                        "name": "Cookie Sheet"
                    },
                    "quantity": 1,
                    "total": 28
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "48093162148107",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Koren",
                "lastName": "Nelson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100197",
                        "name": "Quick Cooker Glass Lid"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100264",
                        "name": "Ice Cream Scoop"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100267",
                        "name": "Corer"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100483",
                        "name": "Sauce Whisk"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100520",
                        "name": "Donut Mix"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100674",
                        "name": "Silicone Pancake Turner"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100687",
                        "name": "Silicone Scoop & Serve Spatula"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100694",
                        "name": "Spider Strainer"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100827",
                        "name": "Grill Pan Scraper (#100826)"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "9578",
                        "name": "Bell Pepper Herb Rub"
                    },
                    "quantity": 2,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "9659",
                        "name": "Three Onion Rub"
                    },
                    "quantity": 2,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100090",
                        "name": "1-qt. (1-L)Cool & Serve Bowl"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "100091",
                        "name": "2.5-qt.(2.35L) Cool & Serve Bowl"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "100121",
                        "name": "Instant Read Food Thermometer"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "100129",
                        "name": "Charcuterie & Cheese Board Accessories"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "100193",
                        "name": "Easy-Read Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "100257",
                        "name": "Pizza Peel"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "100536",
                        "name": "*Whisk Set"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "100686",
                        "name": "Silicone Fish Spatula"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "100738",
                        "name": "Stone Pie Plate"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "101110",
                        "name": "Tube Cake Pan"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "1406",
                        "name": "Mini Nylon Serving Spatula-Teal"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "1603",
                        "name": "Fluted Cake Pan"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "1794",
                        "name": "Cake Tester & Releaser"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "2530",
                        "name": "Small Scoop"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "2576",
                        "name": "Garlic Press"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "2635",
                        "name": "Stainless Steel Mini Whipper"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "2955",
                        "name": "Large Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "2957",
                        "name": "Small Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "9714",
                        "name": "Southwestern Seasoning Mix"
                    },
                    "quantity": 1,
                    "total": 0.01
                },
                {
                    "product": {
                        "sku": "100738",
                        "name": "Stone Pie Plate"
                    },
                    "quantity": 2,
                    "total": 0.02
                },
                {
                    "product": {
                        "sku": "101118",
                        "name": "Stainless Steel Tongs Set"
                    },
                    "quantity": 2,
                    "total": 0.02
                },
                {
                    "product": {
                        "sku": "1023",
                        "name": "Large Grooved Cutting Board"
                    },
                    "quantity": 2,
                    "total": 0.02
                },
                {
                    "product": {
                        "sku": "1602",
                        "name": "Mini Fluted Cake Pan"
                    },
                    "quantity": 2,
                    "total": 0.02
                },
                {
                    "product": {
                        "sku": "100837",
                        "name": "Coated Knife Set"
                    },
                    "quantity": 1,
                    "total": 0.03
                },
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 3,
                    "total": 0.03
                },
                {
                    "product": {
                        "sku": "1538",
                        "name": "Ice Cream Maker"
                    },
                    "quantity": 1,
                    "total": 0.03
                },
                {
                    "product": {
                        "sku": "1575",
                        "name": "8\" (20cm) Chef's Knife"
                    },
                    "quantity": 1,
                    "total": 0.03
                },
                {
                    "product": {
                        "sku": "100868",
                        "name": "On-the-Go Serving Bowl Set"
                    },
                    "quantity": 1,
                    "total": 0.04
                },
                {
                    "product": {
                        "sku": "101356",
                        "name": "Deluxe Electric Grill & Griddle Set"
                    },
                    "quantity": 1,
                    "total": 0.12
                }
            ]
        },
        {
            "orderNumber": "52048668515101",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Daune",
                "lastName": "Runkle"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1174",
                        "name": "Burger & Slider Press"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "2432",
                        "name": "Small Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "2431",
                        "name": "Classic Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "52190415631657",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Jennifer",
                "lastName": "Kraft"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100728",
                        "name": "Silicone Egg Turner"
                    },
                    "quantity": 1,
                    "total": 8.23
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 8.23
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 10.28
                },
                {
                    "product": {
                        "sku": "1135",
                        "name": "Multi-Blade Sharpener"
                    },
                    "quantity": 1,
                    "total": 12.6
                },
                {
                    "product": {
                        "sku": "100835",
                        "name": "Spatula Tongs"
                    },
                    "quantity": 1,
                    "total": 13.37
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 17.9
                },
                {
                    "product": {
                        "sku": "100263",
                        "name": "2.5-qt. (2.4-L) Insulated Serving Bowl"
                    },
                    "quantity": 1,
                    "total": 30.87
                },
                {
                    "product": {
                        "sku": "100476",
                        "name": "Carving Set"
                    },
                    "quantity": 1,
                    "total": 90.03
                },
                {
                    "product": {
                        "sku": "100850",
                        "name": "*Rockcrok 4-qt. Slow Cooker Set"
                    },
                    "quantity": 1,
                    "total": 110.61
                },
                {
                    "product": {
                        "sku": "1581",
                        "name": "*Steak Knife Set"
                    },
                    "quantity": 2,
                    "total": 143
                },
                {
                    "product": {
                        "sku": "1609",
                        "name": "*Knife Set"
                    },
                    "quantity": 1,
                    "total": 195.23
                }
            ]
        },
        {
            "orderNumber": "53080872344305",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Tina",
                "lastName": "Caron"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1406",
                        "name": "Mini Nylon Serving Spatula-Teal"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "1656",
                        "name": "Mini Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "1657",
                        "name": "Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 18
                }
            ]
        },
        {
            "orderNumber": "53676615129152",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Abby",
                "lastName": "Meyer"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100838",
                        "name": "Coated Chef's Knife"
                    },
                    "quantity": 1,
                    "total": 23
                },
                {
                    "product": {
                        "sku": "101215",
                        "name": "9x13 Brilliance Nonstick Baking Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 45
                }
            ]
        },
        {
            "orderNumber": "54351173897451",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Michelle Sti",
                "lastName": "Styke"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100034",
                        "name": "Kitchen Paring Knife"
                    },
                    "quantity": 1,
                    "total": 7.5
                },
                {
                    "product": {
                        "sku": "101205",
                        "name": "Basil Pesto Seasoning Mix NA"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "1656",
                        "name": "Mini Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "1659",
                        "name": "Small Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "1657",
                        "name": "Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100092",
                        "name": "Metal Straws (set of 2)"
                    },
                    "quantity": 2,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2955",
                        "name": "Large Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 20.8
                }
            ]
        },
        {
            "orderNumber": "55237421193628",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1001",
                        "name": "Bar Board"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100121",
                        "name": "Instant Read Food Thermometer"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100192",
                        "name": "Long Skinny Scraper"
                    },
                    "quantity": 2,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100257",
                        "name": "Pizza Peel"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100366",
                        "name": "Nesting Silicone Trivets"
                    },
                    "quantity": 3,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100467",
                        "name": "RockCrok Digital Slow Cooker Stand"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100537",
                        "name": "*Scraper Set"
                    },
                    "quantity": 2,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100659",
                        "name": "*Deluxe Multi Cooker"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100670",
                        "name": "Oil & Vinegar Dispenser"
                    },
                    "quantity": 2,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100738",
                        "name": "Stone Pie Plate"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100739",
                        "name": "Tapered Rolling Pin"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100781",
                        "name": "Quick Italian Marinade Mix"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1012",
                        "name": "Cutting Board"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101238",
                        "name": "Kitchen Towel Set"
                    },
                    "quantity": 4,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101443",
                        "name": "Heart Shaped Medium Stone"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1023",
                        "name": "Large Grooved Cutting Board"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1142",
                        "name": "Scoop Loop®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1593",
                        "name": "Kitchen Shears"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1656",
                        "name": "Mini Mix 'N Scraper®"
                    },
                    "quantity": 2,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1659",
                        "name": "Small Mix 'N Scraper®"
                    },
                    "quantity": 2,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1718",
                        "name": "Pastry Mat"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2071",
                        "name": "Small Spreader"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1177",
                        "name": "Silicone Plunger (#100741)"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1178",
                        "name": "Dispensing Tip (#100741)"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "58120471855373",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Penelope",
                "lastName": "Nicks"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "2955",
                        "name": "Large Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 20.8
                },
                {
                    "product": {
                        "sku": "2957",
                        "name": "Small Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 21
                },
                {
                    "product": {
                        "sku": "100120",
                        "name": "Tortilla Warmer"
                    },
                    "quantity": 2,
                    "total": 30
                }
            ]
        },
        {
            "orderNumber": "59499614541936",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Cora",
                "lastName": "Bailey"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "1794",
                        "name": "Cake Tester & Releaser"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100025",
                        "name": "Brown Sugar Keeper Set"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100120",
                        "name": "Tortilla Warmer"
                    },
                    "quantity": 1,
                    "total": 15
                }
            ]
        },
        {
            "orderNumber": "63403343124106",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Pamela",
                "lastName": "Meadows"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100189",
                        "name": "3-Piece Peeler Set"
                    },
                    "quantity": 1,
                    "total": 18
                }
            ]
        },
        {
            "orderNumber": "63917210494533",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Jessica",
                "lastName": "Collins"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100528",
                        "name": "*Cast Iron Sizzle Skillet & Wood Trivet"
                    },
                    "quantity": 1,
                    "total": 125
                }
            ]
        },
        {
            "orderNumber": "64174212492496",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Becky",
                "lastName": "Cavaliero"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100694",
                        "name": "Spider Strainer"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2530",
                        "name": "Small Scoop"
                    },
                    "quantity": 1,
                    "total": 21
                },
                {
                    "product": {
                        "sku": "100600",
                        "name": "Bowl & Bench Scraper Set"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "100666",
                        "name": "Secret Center Cake Pan"
                    },
                    "quantity": 1,
                    "total": 45
                }
            ]
        },
        {
            "orderNumber": "64534323545917",
            "date": "2025-01-15",
            "customer": {
                "firstName": "James",
                "lastName": "Rew"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100683",
                        "name": "Silicone Pasta Fork"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1089",
                        "name": "Crinkle Cutter"
                    },
                    "quantity": 1,
                    "total": 17
                }
            ]
        },
        {
            "orderNumber": "67421469826594",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Melodee",
                "lastName": "Carstens"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100687",
                        "name": "Silicone Scoop & Serve Spatula"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "9677",
                        "name": "Garlic-Infused Canola Oil"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100468",
                        "name": "Deluxe Air Fryer Mess Catcher"
                    },
                    "quantity": 2,
                    "total": 55
                }
            ]
        },
        {
            "orderNumber": "69076081047917",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Teresa",
                "lastName": "Stewart"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101354",
                        "name": "Give Back Set US"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "72115359826868",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Deborah",
                "lastName": "Lewis"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100808",
                        "name": "Garlic Parmesan Seasoning"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100355",
                        "name": "Avocado Tool"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100694",
                        "name": "Spider Strainer"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "72171991458013",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Dawn",
                "lastName": "Fields"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100520",
                        "name": "Donut Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100947",
                        "name": "Rosemary Focaccia Bread Mix"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "100879",
                        "name": "Vanilla Smoothie Mix"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "75022624883354",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Annette",
                "lastName": "Bellemore"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1089",
                        "name": "Crinkle Cutter"
                    },
                    "quantity": 1,
                    "total": 17
                }
            ]
        },
        {
            "orderNumber": "78837138739365",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Robin",
                "lastName": "Shook"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100009",
                        "name": "2-qt. Micro-Cooker®"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "1529",
                        "name": "Ceramic Egg Cooker"
                    },
                    "quantity": 1,
                    "total": 19.5
                }
            ]
        },
        {
            "orderNumber": "79689760064118",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Melissa",
                "lastName": "Bunting"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "82616399325608",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Ciana",
                "lastName": "Peil"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100267",
                        "name": "Corer"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "101239",
                        "name": "Nesting Spoon Rest Set"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "1588",
                        "name": "Stackable Cooling Rack Set"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "82671100343079",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Evelyn",
                "lastName": "Shaw"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100201",
                        "name": "Microwave Grip Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100268",
                        "name": "Potato Masher"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "84880603721212",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Amy",
                "lastName": "Manning"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "1529",
                        "name": "Ceramic Egg Cooker"
                    },
                    "quantity": 1,
                    "total": 19.5
                }
            ]
        },
        {
            "orderNumber": "87283314571658",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Tana",
                "lastName": "Degraffenreid"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "101112",
                        "name": "Modular Grill Pans"
                    },
                    "quantity": 1,
                    "total": 120
                }
            ]
        },
        {
            "orderNumber": "92374854385605",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Rachel",
                "lastName": "Beck"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                },
                {
                    "product": {
                        "sku": "100251",
                        "name": "Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 50
                },
                {
                    "product": {
                        "sku": "100900",
                        "name": "Stone Round Baker"
                    },
                    "quantity": 1,
                    "total": 50
                }
            ]
        },
        {
            "orderNumber": "95104515129464",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Cynthia",
                "lastName": "Lower"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100687",
                        "name": "Silicone Scoop & Serve Spatula"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100688",
                        "name": "Small Silicone Spatula"
                    },
                    "quantity": 1,
                    "total": 16
                }
            ]
        },
        {
            "orderNumber": "96902240768357",
            "date": "2025-01-15",
            "customer": {
                "firstName": "Cindy",
                "lastName": "West"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100525",
                        "name": "Tuscan Herb Chicken Mix 3 Pack"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "100267",
                        "name": "Corer"
                    },
                    "quantity": 2,
                    "total": 36
                },
                {
                    "product": {
                        "sku": "9702",
                        "name": "Raspberry Habanero Sauce"
                    },
                    "quantity": 7,
                    "total": 105
                }
            ]
        },
        {
            "orderNumber": "1534988182",
            "date": "2025-01-16",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "4192",
                        "name": "$5 PC Money/1"
                    },
                    "quantity": 20,
                    "total": 100
                }
            ]
        },
        {
            "orderNumber": "18243382756123",
            "date": "2025-01-16",
            "customer": {
                "firstName": "Heather",
                "lastName": "Hiemes"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2614",
                        "name": "Large Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 49
                }
            ]
        },
        {
            "orderNumber": "24604979854210",
            "date": "2025-01-16",
            "customer": {
                "firstName": "Leesa",
                "lastName": "Eklund"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100680",
                        "name": "Silicone Angled Turner"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 2,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 2,
                    "total": 50
                }
            ]
        },
        {
            "orderNumber": "57580062303424",
            "date": "2025-01-16",
            "customer": {
                "firstName": "Katherine",
                "lastName": "Hyde"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100840",
                        "name": "Coated Santoku Knife"
                    },
                    "quantity": 1,
                    "total": 22
                },
                {
                    "product": {
                        "sku": "2576",
                        "name": "Garlic Press"
                    },
                    "quantity": 1,
                    "total": 24.5
                }
            ]
        },
        {
            "orderNumber": "83220656091960",
            "date": "2025-01-16",
            "customer": {
                "firstName": "Glenda",
                "lastName": "Baker"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100130",
                        "name": "Cut-N-Seal"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "64944434092799",
            "date": "2025-01-17",
            "customer": {
                "firstName": "Denise J",
                "lastName": "Huttenlocker"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1642",
                        "name": "All-Purpose Spreader"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "2571",
                        "name": "Toaster Tongs"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100009",
                        "name": "2-qt. Micro-Cooker®"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "1772",
                        "name": "Medium Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "1771",
                        "name": "Large Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 27
                },
                {
                    "product": {
                        "sku": "1588",
                        "name": "Stackable Cooling Rack Set"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "70479230024876",
            "date": "2025-01-17",
            "customer": {
                "firstName": "Beverly",
                "lastName": "Misuna"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2797",
                        "name": "Stainless Steel Mesh Colander Set"
                    },
                    "quantity": 1,
                    "total": 42
                }
            ]
        },
        {
            "orderNumber": "83470553065586",
            "date": "2025-01-17",
            "customer": {
                "firstName": "Sue",
                "lastName": "Seward"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100190",
                        "name": "Measure, Mix & Pour"
                    },
                    "quantity": 1,
                    "total": 19.5
                },
                {
                    "product": {
                        "sku": "2955",
                        "name": "Large Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 20.8
                },
                {
                    "product": {
                        "sku": "100841",
                        "name": "Coated Tomato Knife"
                    },
                    "quantity": 2,
                    "total": 36
                },
                {
                    "product": {
                        "sku": "101114",
                        "name": "Small Grill Pan"
                    },
                    "quantity": 1,
                    "total": 45
                },
                {
                    "product": {
                        "sku": "2614",
                        "name": "Large Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 49
                }
            ]
        },
        {
            "orderNumber": "OE_ORDER_LINES_ALL740387187",
            "date": "2025-01-17",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB2317",
                        "name": "FFA/L4/11'24/US"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "OE_ORDER_LINES_ALL740387188",
            "date": "2025-01-17",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB2325",
                        "name": "FFA/L4/12'24/US"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "50103520297971",
            "date": "2025-01-18",
            "customer": {
                "firstName": "Shelby",
                "lastName": "Wilson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "59758303594432",
            "date": "2025-01-18",
            "customer": {
                "firstName": "Kim",
                "lastName": "Knapp"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "2576",
                        "name": "Garlic Press"
                    },
                    "quantity": 1,
                    "total": 24.5
                }
            ]
        },
        {
            "orderNumber": "79620229222669",
            "date": "2025-01-18",
            "customer": {
                "firstName": "Daughn",
                "lastName": "Baker"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "182A",
                        "name": "1-Cup/250ml Lid (#1825, #100108)"
                    },
                    "quantity": 1,
                    "total": 2.5
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "85808219922771",
            "date": "2025-01-18",
            "customer": {
                "firstName": "Darlene",
                "lastName": "Kaiser"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100255",
                        "name": "Medium Stone Bar Pan"
                    },
                    "quantity": 1,
                    "total": 40
                },
                {
                    "product": {
                        "sku": "2576",
                        "name": "Garlic Press"
                    },
                    "quantity": 2,
                    "total": 49
                }
            ]
        },
        {
            "orderNumber": "27208609392298",
            "date": "2025-01-19",
            "customer": {
                "firstName": "Jennifer",
                "lastName": "Boston"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2495",
                        "name": "Can Strainer"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100267",
                        "name": "Corer"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "1751",
                        "name": "Silicone Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 27.5
                },
                {
                    "product": {
                        "sku": "101218",
                        "name": "Brilliance NS Long Loaf Pan Set With Lids"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "28863610815752",
            "date": "2025-01-19",
            "customer": {
                "firstName": "Kim S",
                "lastName": "Wyatt"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2677",
                        "name": "Jar Opener"
                    },
                    "quantity": 1,
                    "total": 17.5
                },
                {
                    "product": {
                        "sku": "1012",
                        "name": "Cutting Board"
                    },
                    "quantity": 1,
                    "total": 22
                }
            ]
        },
        {
            "orderNumber": "30295041245064",
            "date": "2025-01-19",
            "customer": {
                "firstName": "Janet",
                "lastName": "Crockett"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2460",
                        "name": "Corn Butterer"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100517",
                        "name": "French Onion Dip Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "1656",
                        "name": "Mini Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "1659",
                        "name": "Small Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                },
                {
                    "product": {
                        "sku": "100597",
                        "name": "Modular Sheet Pans"
                    },
                    "quantity": 1,
                    "total": 42
                }
            ]
        },
        {
            "orderNumber": "33944325730923",
            "date": "2025-01-19",
            "customer": {
                "firstName": "Frankie",
                "lastName": "Pilkinton"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "101120",
                        "name": "Level & Funnel Scoop"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "42438850753267",
            "date": "2025-01-19",
            "customer": {
                "firstName": "Laura",
                "lastName": "Kerbin"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100908",
                        "name": "Garlic Prep Tool"
                    },
                    "quantity": 1,
                    "total": 34
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                },
                {
                    "product": {
                        "sku": "100095",
                        "name": "Wine Tumblers with Bag"
                    },
                    "quantity": 1,
                    "total": 67
                }
            ]
        },
        {
            "orderNumber": "50231168542554",
            "date": "2025-01-19",
            "customer": {
                "firstName": "Mikyla",
                "lastName": "Hefti"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101218",
                        "name": "Brilliance NS Long Loaf Pan Set With Lids"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "67776689216682",
            "date": "2025-01-19",
            "customer": {
                "firstName": "Carley",
                "lastName": "Raleigh"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100489",
                        "name": "Large Reusable Storage Bag"
                    },
                    "quantity": 1,
                    "total": 24.5
                }
            ]
        },
        {
            "orderNumber": "34164581337762",
            "date": "2025-01-20",
            "customer": {
                "firstName": "Elisabeth",
                "lastName": "Turner"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1771",
                        "name": "Large Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 27
                },
                {
                    "product": {
                        "sku": "100223",
                        "name": "Leakproof Glass Container Set"
                    },
                    "quantity": 1,
                    "total": 57
                }
            ]
        },
        {
            "orderNumber": "35772769786986",
            "date": "2025-01-20",
            "customer": {
                "firstName": "Rhonda",
                "lastName": "Bunnell"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100827",
                        "name": "Grill Pan Scraper (#100826)"
                    },
                    "quantity": 2,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1650",
                        "name": "Classic Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2723",
                        "name": "Wooden Grill Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1457",
                        "name": "Microwave Popcorn Maker"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100597",
                        "name": "Modular Sheet Pans"
                    },
                    "quantity": 1,
                    "total": 19.5
                },
                {
                    "product": {
                        "sku": "101109",
                        "name": "Electric Milk Frother"
                    },
                    "quantity": 1,
                    "total": 35.6
                },
                {
                    "product": {
                        "sku": "100544",
                        "name": "*French Fry Kit/US"
                    },
                    "quantity": 1,
                    "total": 41
                }
            ]
        },
        {
            "orderNumber": "46995217698768",
            "date": "2025-01-20",
            "customer": {
                "firstName": "Julie",
                "lastName": "Venhaus"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100674",
                        "name": "Silicone Pancake Turner"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100737",
                        "name": "Large Round Stone"
                    },
                    "quantity": 1,
                    "total": 59.5
                },
                {
                    "product": {
                        "sku": "100773",
                        "name": "2 Piece Cookware Set"
                    },
                    "quantity": 1,
                    "total": 160
                }
            ]
        },
        {
            "orderNumber": "84470629493670",
            "date": "2025-01-20",
            "customer": {
                "firstName": "Paula",
                "lastName": "Cline"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100904",
                        "name": "Icing Spatula"
                    },
                    "quantity": 1,
                    "total": 16.2
                },
                {
                    "product": {
                        "sku": "1587",
                        "name": "Stackable Cooling Rack"
                    },
                    "quantity": 1,
                    "total": 21.15
                },
                {
                    "product": {
                        "sku": "100224",
                        "name": "Herb Prep Set"
                    },
                    "quantity": 1,
                    "total": 37.2
                }
            ]
        },
        {
            "orderNumber": "88700198804543",
            "date": "2025-01-20",
            "customer": {
                "firstName": "Adele",
                "lastName": "Bealefeld"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2735",
                        "name": "*2qt.(1.9L) Nonstick Sauce Pan"
                    },
                    "quantity": 1,
                    "total": 130
                },
                {
                    "product": {
                        "sku": "100897",
                        "name": "12\" (30-cm) Brilliance Weeknight Skillet"
                    },
                    "quantity": 1,
                    "total": 165
                }
            ]
        },
        {
            "orderNumber": "14538048779303",
            "date": "2025-01-21",
            "customer": {
                "firstName": "Tracy",
                "lastName": "Vallandingham"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "9880",
                        "name": "Chipotle Rub"
                    },
                    "quantity": 3,
                    "total": 18
                }
            ]
        },
        {
            "orderNumber": "38384098087013",
            "date": "2025-01-21",
            "customer": {
                "firstName": "Rachel",
                "lastName": "Crees"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1655",
                        "name": "Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 5.23
                },
                {
                    "product": {
                        "sku": "2225",
                        "name": "Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 6.18
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 12.5
                },
                {
                    "product": {
                        "sku": "100536",
                        "name": "*Whisk Set"
                    },
                    "quantity": 1,
                    "total": 13.79
                },
                {
                    "product": {
                        "sku": "100041",
                        "name": "Micro-Cooker® Set"
                    },
                    "quantity": 1,
                    "total": 24.75
                },
                {
                    "product": {
                        "sku": "101214",
                        "name": "Brilliance Nonstick Metal Bakeware Set 6pc"
                    },
                    "quantity": 1,
                    "total": 59.6
                }
            ]
        },
        {
            "orderNumber": "40359059335514",
            "date": "2025-01-21",
            "customer": {
                "firstName": "Kendra",
                "lastName": "Epperson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1142",
                        "name": "Scoop Loop®"
                    },
                    "quantity": 2,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100122",
                        "name": "Quick Shred"
                    },
                    "quantity": 1,
                    "total": 17.7
                },
                {
                    "product": {
                        "sku": "100648",
                        "name": "Parmesan Garlic Olive Oil"
                    },
                    "quantity": 1,
                    "total": 18.9
                }
            ]
        },
        {
            "orderNumber": "57665143996836",
            "date": "2025-01-21",
            "customer": {
                "firstName": "Dawn",
                "lastName": "Hawkins"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101170",
                        "name": "Brownie Pan"
                    },
                    "quantity": 1,
                    "total": 16.93
                },
                {
                    "product": {
                        "sku": "100667",
                        "name": "9x13 (23x33-cm) Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 22.67
                },
                {
                    "product": {
                        "sku": "2614",
                        "name": "Large Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "100375",
                        "name": "Rectangular Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 30
                }
            ]
        },
        {
            "orderNumber": "70763473954273",
            "date": "2025-01-21",
            "customer": {
                "firstName": "Sherry",
                "lastName": "Williams"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100092",
                        "name": "Metal Straws (set of 2)"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1656",
                        "name": "Mini Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2427",
                        "name": "Apple Wedger"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2455",
                        "name": "Corn Holders"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "9668",
                        "name": "Smoky Applewood Rub"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "9722",
                        "name": "Smoky Barbecue Rub"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1182",
                        "name": "Egg Slicer Plus®"
                    },
                    "quantity": 1,
                    "total": 8.5
                },
                {
                    "product": {
                        "sku": "100193",
                        "name": "Easy-Read Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100826",
                        "name": "*12\" (30-cm) Cast Iron Grill Pan Skillet"
                    },
                    "quantity": 1,
                    "total": 44.5
                },
                {
                    "product": {
                        "sku": "101214",
                        "name": "Brilliance Nonstick Metal Bakeware Set 6pc"
                    },
                    "quantity": 1,
                    "total": 59.6
                }
            ]
        },
        {
            "orderNumber": "75817465299006",
            "date": "2025-01-21",
            "customer": {
                "firstName": "Laura",
                "lastName": "Moore"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101283",
                        "name": "Italian Herb Bread Mix NA"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100715",
                        "name": "Scampi Mix"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "101418",
                        "name": "*Utensil Starter Set"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "32758209649036",
            "date": "2025-01-22",
            "customer": {
                "firstName": "Kaitlyn",
                "lastName": "Letner"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100251",
                        "name": "Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 50
                }
            ]
        },
        {
            "orderNumber": "45329599676973",
            "date": "2025-01-22",
            "customer": {
                "firstName": "Michelle",
                "lastName": "Caldwell"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "101174",
                        "name": "Vanilla Crème Frappe Drink Mix"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "84064781479960",
            "date": "2025-01-22",
            "customer": {
                "firstName": "Laura",
                "lastName": "Duncan"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2635",
                        "name": "Stainless Steel Mini Whipper"
                    },
                    "quantity": 1,
                    "total": 8.1
                },
                {
                    "product": {
                        "sku": "100728",
                        "name": "Silicone Egg Turner"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "2427",
                        "name": "Apple Wedger"
                    },
                    "quantity": 1,
                    "total": 19.8
                },
                {
                    "product": {
                        "sku": "2705",
                        "name": "Meat Tenderizer"
                    },
                    "quantity": 1,
                    "total": 31.5
                },
                {
                    "product": {
                        "sku": "101116",
                        "name": "Cold Brew Pitcher"
                    },
                    "quantity": 1,
                    "total": 45
                },
                {
                    "product": {
                        "sku": "2635",
                        "name": "Stainless Steel Mini Whipper"
                    },
                    "quantity": 1,
                    "total": 8.1
                },
                {
                    "product": {
                        "sku": "100728",
                        "name": "Silicone Egg Turner"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "2427",
                        "name": "Apple Wedger"
                    },
                    "quantity": 1,
                    "total": 19.8
                },
                {
                    "product": {
                        "sku": "2705",
                        "name": "Meat Tenderizer"
                    },
                    "quantity": 1,
                    "total": 31.5
                },
                {
                    "product": {
                        "sku": "101116",
                        "name": "Cold Brew Pitcher"
                    },
                    "quantity": 1,
                    "total": 45
                }
            ]
        },
        {
            "orderNumber": "95294052597427",
            "date": "2025-01-22",
            "customer": {
                "firstName": "Adam",
                "lastName": "Lamberth"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100808",
                        "name": "Garlic Parmesan Seasoning"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100478",
                        "name": "Cheese Knife"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "10285517620879",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Tom",
                "lastName": "Mareth"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100082",
                        "name": "Batter Mixer & Dispenser"
                    },
                    "quantity": 1,
                    "total": 54.5
                }
            ]
        },
        {
            "orderNumber": "12446487564209",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Candice",
                "lastName": "Van Slyke"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100257",
                        "name": "Pizza Peel"
                    },
                    "quantity": 1,
                    "total": 39.5
                }
            ]
        },
        {
            "orderNumber": "14554808801844",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Carolina",
                "lastName": "Neiderhiser"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "9492",
                        "name": "Garlic & Herb Rub"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "9668",
                        "name": "Smoky Applewood Rub"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "9812",
                        "name": "Jamaican Jerk Rub"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100808",
                        "name": "Garlic Parmesan Seasoning"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100504",
                        "name": "Guacamole Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "9659",
                        "name": "Three Onion Rub"
                    },
                    "quantity": 2,
                    "total": 12
                }
            ]
        },
        {
            "orderNumber": "15778118857950",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Michelle",
                "lastName": "Lovejoy"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2477",
                        "name": "Stainless Steel Mini Whisk"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "101116",
                        "name": "Cold Brew Pitcher"
                    },
                    "quantity": 1,
                    "total": 50
                }
            ]
        },
        {
            "orderNumber": "16180044940171",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Barbara",
                "lastName": "Black"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101221",
                        "name": "Linzer Cookie Cutter Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "16446237753498",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Elise",
                "lastName": "Posey"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100517",
                        "name": "French Onion Dip Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100649",
                        "name": "Garden Vegetable Dip Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100878",
                        "name": "Green Goddess Seasoning Mix"
                    },
                    "quantity": 2,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "101229",
                        "name": "Tea Steeper & Dispenser"
                    },
                    "quantity": 2,
                    "total": 70
                }
            ]
        },
        {
            "orderNumber": "19063760077553",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Robin",
                "lastName": "Thornton"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1114",
                        "name": "Kernel Cutter"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "1089",
                        "name": "Crinkle Cutter"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100190",
                        "name": "Measure, Mix & Pour"
                    },
                    "quantity": 1,
                    "total": 19.5
                }
            ]
        },
        {
            "orderNumber": "19082481934697",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Laura",
                "lastName": "Newman"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "19379421628342",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Melonie",
                "lastName": "Milefchik"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100684",
                        "name": "Silicone Spoon"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "100686",
                        "name": "Silicone Fish Spatula"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "100688",
                        "name": "Small Silicone Spatula"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 32.4
                }
            ]
        },
        {
            "orderNumber": "20453848948717",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Erin",
                "lastName": "Avera"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "1182",
                        "name": "Egg Slicer Plus®"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100260",
                        "name": "Easy Accent® Decorator"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "21690715166603",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Melody",
                "lastName": "Yanovic"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100520",
                        "name": "Donut Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "100682",
                        "name": "Silicone Straining Ladle"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1674",
                        "name": "Bamboo Spoon Set"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100373",
                        "name": "Donut Hole Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                }
            ]
        },
        {
            "orderNumber": "23581568914655",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Christina",
                "lastName": "Horton"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "24044460107183",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Lisa",
                "lastName": "Pagliaro"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100020",
                        "name": "Mini Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "101172",
                        "name": "Brownie Bite Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                }
            ]
        },
        {
            "orderNumber": "27944811601189",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Kelly",
                "lastName": "Packard"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1642",
                        "name": "All-Purpose Spreader"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100260",
                        "name": "Easy Accent® Decorator"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "28343564613788",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Deena",
                "lastName": "Perelman"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "29704057473678",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Adam",
                "lastName": "Lamberth"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB2275",
                        "name": "Season's Best® (Fall/Winter 2024) Gift"
                    },
                    "quantity": 1,
                    "total": 4
                }
            ]
        },
        {
            "orderNumber": "29764498490063",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Michelle",
                "lastName": "Winn"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1655",
                        "name": "Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "9664",
                        "name": "Chili Lime Rub"
                    },
                    "quantity": 2,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "101278",
                        "name": "Roasted Red Pepper Tomato Bisque Mix NA"
                    },
                    "quantity": 2,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "100264",
                        "name": "Ice Cream Scoop"
                    },
                    "quantity": 1,
                    "total": 14.5
                }
            ]
        },
        {
            "orderNumber": "30812095838093",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Debra",
                "lastName": "Lee"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "1593",
                        "name": "Kitchen Shears"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "30919690194266",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Patti",
                "lastName": "Mcnally"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1489",
                        "name": "Electric Wine Opener"
                    },
                    "quantity": 1,
                    "total": 49.5
                },
                {
                    "product": {
                        "sku": "2734",
                        "name": "*10\"(25cm) Nonstick Fry Pan"
                    },
                    "quantity": 1,
                    "total": 108
                }
            ]
        },
        {
            "orderNumber": "31599966879830",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Margaret",
                "lastName": "Beamer"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "2956",
                        "name": "Sauté Tongs"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "31955900247919",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Kimberly",
                "lastName": "Thompson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100355",
                        "name": "Avocado Tool"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "32749329229166",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Kristin",
                "lastName": "Stetler"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100777",
                        "name": "Tortilla Soup Mix"
                    },
                    "quantity": 1,
                    "total": 6.3
                },
                {
                    "product": {
                        "sku": "100780",
                        "name": "Minestrone Soup Mix"
                    },
                    "quantity": 1,
                    "total": 6.3
                },
                {
                    "product": {
                        "sku": "100524",
                        "name": "Chili Mix 3 Pack"
                    },
                    "quantity": 1,
                    "total": 9.9
                },
                {
                    "product": {
                        "sku": "100715",
                        "name": "Scampi Mix"
                    },
                    "quantity": 1,
                    "total": 9.9
                }
            ]
        },
        {
            "orderNumber": "34483176724019",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Janet",
                "lastName": "Burkes"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100478",
                        "name": "Cheese Knife"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "101198",
                        "name": "*Brownie Pan Set"
                    },
                    "quantity": 1,
                    "total": 55
                }
            ]
        },
        {
            "orderNumber": "35045657131924",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Laura",
                "lastName": "Canada"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "1174",
                        "name": "Burger & Slider Press"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100674",
                        "name": "Silicone Pancake Turner"
                    },
                    "quantity": 2,
                    "total": 32
                },
                {
                    "product": {
                        "sku": "2613",
                        "name": "Small Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 40
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 2,
                    "total": 50
                },
                {
                    "product": {
                        "sku": "101112",
                        "name": "Modular Grill Pans"
                    },
                    "quantity": 1,
                    "total": 120
                }
            ]
        },
        {
            "orderNumber": "35714353727429",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Maria Elena",
                "lastName": "Thompson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1794",
                        "name": "Cake Tester & Releaser"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100264",
                        "name": "Ice Cream Scoop"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                },
                {
                    "product": {
                        "sku": "100535",
                        "name": "*Tongs Set"
                    },
                    "quantity": 1,
                    "total": 64
                }
            ]
        },
        {
            "orderNumber": "36760903462396",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Jessica",
                "lastName": "Lopez"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100125",
                        "name": "Deluxe Cooking Blender"
                    },
                    "quantity": 1,
                    "total": 349
                }
            ]
        },
        {
            "orderNumber": "37205133207971",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Jeni",
                "lastName": "Voncannon"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "1771",
                        "name": "Large Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 27
                },
                {
                    "product": {
                        "sku": "100837",
                        "name": "Coated Knife Set"
                    },
                    "quantity": 1,
                    "total": 99
                }
            ]
        },
        {
            "orderNumber": "38704840013979",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Kennie",
                "lastName": "Johnson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101437",
                        "name": "Black Truffle & Herb Seasoning Mix NA"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "101138",
                        "name": "Chili Peach Sauce"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100872",
                        "name": "Air Fryer Seasoning Set (US)"
                    },
                    "quantity": 1,
                    "total": 19
                },
                {
                    "product": {
                        "sku": "101160",
                        "name": "Gourmet Limoncello Syrup"
                    },
                    "quantity": 1,
                    "total": 21
                }
            ]
        },
        {
            "orderNumber": "41955369049230",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Melanie",
                "lastName": "Judge"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100777",
                        "name": "Tortilla Soup Mix"
                    },
                    "quantity": 3,
                    "total": 21
                },
                {
                    "product": {
                        "sku": "1519",
                        "name": "Flexible Cutting Mat Set"
                    },
                    "quantity": 1,
                    "total": 22
                },
                {
                    "product": {
                        "sku": "1023",
                        "name": "Large Grooved Cutting Board"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "44908051000760",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Darlene",
                "lastName": "Kaiser"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB2275",
                        "name": "Season's Best® (Fall/Winter 2024) Gift"
                    },
                    "quantity": 1,
                    "total": 4
                }
            ]
        },
        {
            "orderNumber": "45211918917667",
            "date": "2025-01-23",
            "customer": {
                "firstName": "David",
                "lastName": "Judge"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1529",
                        "name": "Ceramic Egg Cooker"
                    },
                    "quantity": 1,
                    "total": 19.5
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "46295221944841",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Essie",
                "lastName": "Dowdell"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101234",
                        "name": "Electric Twist & Chop"
                    },
                    "quantity": 1,
                    "total": 99
                }
            ]
        },
        {
            "orderNumber": "47244410867625",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Christi",
                "lastName": "Nemes"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100909",
                        "name": "Spreading Knife Set"
                    },
                    "quantity": 1,
                    "total": 15
                }
            ]
        },
        {
            "orderNumber": "47541061291391",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Bridget",
                "lastName": "Goldsmith"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100916",
                        "name": "Stone Square Baker"
                    },
                    "quantity": 1,
                    "total": 55
                }
            ]
        },
        {
            "orderNumber": "47643651412444",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Tia",
                "lastName": "Shaffer"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "100264",
                        "name": "Ice Cream Scoop"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100223",
                        "name": "Leakproof Glass Container Set"
                    },
                    "quantity": 1,
                    "total": 57
                }
            ]
        },
        {
            "orderNumber": "47705970771964",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Kristi",
                "lastName": "Koth"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2460",
                        "name": "Corn Butterer"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2431",
                        "name": "Classic Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "47939681750814",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Antoinette",
                "lastName": "Pack"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100201",
                        "name": "Microwave Grip Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100687",
                        "name": "Silicone Scoop & Serve Spatula"
                    },
                    "quantity": 1,
                    "total": 16
                }
            ]
        },
        {
            "orderNumber": "50059212508203",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Barb",
                "lastName": "Piho"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100504",
                        "name": "Guacamole Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "1182",
                        "name": "Egg Slicer Plus®"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100353",
                        "name": "Cherry & Olive Pitter"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "53579872306889",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Christine",
                "lastName": "Paige"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "1656",
                        "name": "Mini Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1659",
                        "name": "Small Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "1174",
                        "name": "Burger & Slider Press"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100517",
                        "name": "French Onion Dip Mix"
                    },
                    "quantity": 2,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                },
                {
                    "product": {
                        "sku": "100111",
                        "name": "Stainless Steel Nonstick Wok"
                    },
                    "quantity": 1,
                    "total": 240
                }
            ]
        },
        {
            "orderNumber": "57329038146634",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Janet",
                "lastName": "Simmons"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100837",
                        "name": "Coated Knife Set"
                    },
                    "quantity": 1,
                    "total": 99
                }
            ]
        },
        {
            "orderNumber": "59029289663192",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Alisa",
                "lastName": "Smith"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 2.7
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 7.2
                },
                {
                    "product": {
                        "sku": "100193",
                        "name": "Easy-Read Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 21.6
                }
            ]
        },
        {
            "orderNumber": "60390546646569",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Amanda",
                "lastName": "Rau"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2618",
                        "name": "5-Section Tray"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100830",
                        "name": "Extra-Large Scoop"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "2614",
                        "name": "Large Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 49
                }
            ]
        },
        {
            "orderNumber": "62288400252469",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Thelma",
                "lastName": "Stone"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100201",
                        "name": "Microwave Grip Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2225",
                        "name": "Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2719",
                        "name": "Indoor Outdoor Portable Grill"
                    },
                    "quantity": 1,
                    "total": 149
                }
            ]
        },
        {
            "orderNumber": "64100369082631",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Helen",
                "lastName": "Reetz"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "2955",
                        "name": "Large Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 20.8
                },
                {
                    "product": {
                        "sku": "100600",
                        "name": "Bowl & Bench Scraper Set"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                },
                {
                    "product": {
                        "sku": "101101",
                        "name": "Stainless Steel Colander Set"
                    },
                    "quantity": 1,
                    "total": 80
                }
            ]
        },
        {
            "orderNumber": "64970595747816",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Daniel",
                "lastName": "Lawwill"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1656",
                        "name": "Mini Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "1650",
                        "name": "Classic Scraper"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1657",
                        "name": "Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                },
                {
                    "product": {
                        "sku": "100251",
                        "name": "Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 50
                }
            ]
        },
        {
            "orderNumber": "66793583457299",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Kim",
                "lastName": "Mccallister"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101110",
                        "name": "Tube Cake Pan"
                    },
                    "quantity": 1,
                    "total": 37
                }
            ]
        },
        {
            "orderNumber": "66993080920427",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Jenny",
                "lastName": "Mckenna"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "1772",
                        "name": "Medium Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 24.5
                }
            ]
        },
        {
            "orderNumber": "69687740177061",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Rhonda",
                "lastName": "Hutzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100264",
                        "name": "Ice Cream Scoop"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "100120",
                        "name": "Tortilla Warmer"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "1751",
                        "name": "Silicone Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 27.5
                },
                {
                    "product": {
                        "sku": "1576",
                        "name": "5\" (13cm) Utility Knife"
                    },
                    "quantity": 1,
                    "total": 49.5
                }
            ]
        },
        {
            "orderNumber": "70885051549283",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Kelley",
                "lastName": "Black"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 24.5
                }
            ]
        },
        {
            "orderNumber": "71114550146168",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Ashlynn",
                "lastName": "Johnson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "1001",
                        "name": "Bar Board"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "1529",
                        "name": "Ceramic Egg Cooker"
                    },
                    "quantity": 1,
                    "total": 19.5
                }
            ]
        },
        {
            "orderNumber": "71315270849611",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Diana",
                "lastName": "Strickland"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1732",
                        "name": "Reversible Silicone Baking Mat"
                    },
                    "quantity": 1,
                    "total": 33
                }
            ]
        },
        {
            "orderNumber": "72818011110770",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Tammy",
                "lastName": "Mix"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "9736",
                        "name": "Crushed Peppercorn & Garlic Rub"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "101276",
                        "name": "Pizza Crust Mix NA"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "101136",
                        "name": "Chocolate Banana Bread Mix NA"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "75161823792232",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Phyllis",
                "lastName": "Arnold"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2571",
                        "name": "Toaster Tongs"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "2495",
                        "name": "Can Strainer"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "1182",
                        "name": "Egg Slicer Plus®"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100483",
                        "name": "Sauce Whisk"
                    },
                    "quantity": 1,
                    "total": 18
                }
            ]
        },
        {
            "orderNumber": "76389690502017",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Evelyn",
                "lastName": "Thorns"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100836",
                        "name": "Bag Clip & Slicer Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "1655",
                        "name": "Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "76550805299265",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Laura",
                "lastName": "Duncan"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 1.8
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 2.7
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.05
                },
                {
                    "product": {
                        "sku": "101278",
                        "name": "Roasted Red Pepper Tomato Bisque Mix NA"
                    },
                    "quantity": 2,
                    "total": 12.6
                },
                {
                    "product": {
                        "sku": "100680",
                        "name": "Silicone Angled Turner"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "100688",
                        "name": "Small Silicone Spatula"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "101277",
                        "name": "Sweet Cornbread Mix NA"
                    },
                    "quantity": 2,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "101354",
                        "name": "Give Back Set US"
                    },
                    "quantity": 2,
                    "total": 27
                },
                {
                    "product": {
                        "sku": "100128",
                        "name": "Lazy Susan"
                    },
                    "quantity": 1,
                    "total": 30
                },
                {
                    "product": {
                        "sku": "101111",
                        "name": "Wood Cake Stand"
                    },
                    "quantity": 1,
                    "total": 44.1
                }
            ]
        },
        {
            "orderNumber": "77401653591891",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Lois",
                "lastName": "Brown"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "258E",
                        "name": "Clear Collar (#2585)"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "77515095041832",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Pamela",
                "lastName": "Mayes"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 1.8
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 50.4
                }
            ]
        },
        {
            "orderNumber": "78069703047612",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Ruthanne M",
                "lastName": "Brown"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 1.8
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 2.7
                },
                {
                    "product": {
                        "sku": "101283",
                        "name": "Italian Herb Bread Mix NA"
                    },
                    "quantity": 1,
                    "total": 8.1
                },
                {
                    "product": {
                        "sku": "100943",
                        "name": "Almond Pound Cake Mix"
                    },
                    "quantity": 1,
                    "total": 9.9
                },
                {
                    "product": {
                        "sku": "100947",
                        "name": "Rosemary Focaccia Bread Mix"
                    },
                    "quantity": 1,
                    "total": 9.9
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 22.5
                }
            ]
        },
        {
            "orderNumber": "78293044367403",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Chrissie",
                "lastName": "Bice"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                }
            ]
        },
        {
            "orderNumber": "79364970172676",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Dawn",
                "lastName": "Mulvihill"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100684",
                        "name": "Silicone Spoon"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1674",
                        "name": "Bamboo Spoon Set"
                    },
                    "quantity": 1,
                    "total": 17
                }
            ]
        },
        {
            "orderNumber": "80016725741626",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Simone",
                "lastName": "Posey"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100271",
                        "name": "Digital Kitchen Scale"
                    },
                    "quantity": 1,
                    "total": 35
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "81881360178617",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Carrie",
                "lastName": "Cochran"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1574",
                        "name": "Cookie Sheet"
                    },
                    "quantity": 1,
                    "total": 28
                }
            ]
        },
        {
            "orderNumber": "82061590869536",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Michelle",
                "lastName": "Shullick"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "101143",
                        "name": "Prep Board"
                    },
                    "quantity": 1,
                    "total": 71.2
                }
            ]
        },
        {
            "orderNumber": "82247672624023",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Amanda",
                "lastName": "Hoban"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "118E",
                        "name": "Wire Frame (#1182)"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100122",
                        "name": "Quick Shred"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "2797",
                        "name": "Stainless Steel Mesh Colander Set"
                    },
                    "quantity": 1,
                    "total": 42
                }
            ]
        },
        {
            "orderNumber": "82492623253710",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Rhonda",
                "lastName": "Sparling"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "2432",
                        "name": "Small Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100020",
                        "name": "Mini Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                }
            ]
        },
        {
            "orderNumber": "83063948403390",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Patricia",
                "lastName": "Henricks"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "9870",
                        "name": "Greek Rub"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "2723",
                        "name": "Wooden Grill Scraper"
                    },
                    "quantity": 1,
                    "total": 17
                }
            ]
        },
        {
            "orderNumber": "84177276646313",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Anne",
                "lastName": "Puffett"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 3,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                }
            ]
        },
        {
            "orderNumber": "84369711572056",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Janice",
                "lastName": "Williams"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100252",
                        "name": "Medium Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 40
                },
                {
                    "product": {
                        "sku": "100104",
                        "name": "Half Sheet Pan & Baking Rack Set"
                    },
                    "quantity": 1,
                    "total": 54.5
                }
            ]
        },
        {
            "orderNumber": "87389072112203",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Kim",
                "lastName": "Graham"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100819",
                        "name": "Sourdough Bread Mix NA"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100264",
                        "name": "Ice Cream Scoop"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "100221",
                        "name": "Stone Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "89380863338203",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Deborah",
                "lastName": "Claffey"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 24.5
                }
            ]
        },
        {
            "orderNumber": "89480829396661",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Linda",
                "lastName": "Chester"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "9702",
                        "name": "Raspberry Habanero Sauce"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "2797",
                        "name": "Stainless Steel Mesh Colander Set"
                    },
                    "quantity": 1,
                    "total": 42
                }
            ]
        },
        {
            "orderNumber": "89670583678799",
            "date": "2025-01-23",
            "customer": {
                "firstName": "April",
                "lastName": "Tribus"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100491",
                        "name": "My Safe Cutter"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "2460",
                        "name": "Corn Butterer"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "101221",
                        "name": "Linzer Cookie Cutter Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "1114",
                        "name": "Kernel Cutter"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1174",
                        "name": "Burger & Slider Press"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100280",
                        "name": "Rectangle Stone"
                    },
                    "quantity": 1,
                    "total": 45
                }
            ]
        },
        {
            "orderNumber": "90481598149615",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Kimberly",
                "lastName": "Tribus"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1794",
                        "name": "Cake Tester & Releaser"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100675",
                        "name": "Utensil Clip"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100478",
                        "name": "Cheese Knife"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100267",
                        "name": "Corer"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100475",
                        "name": "Kitchen Spritzer"
                    },
                    "quantity": 1,
                    "total": 30
                },
                {
                    "product": {
                        "sku": "100001",
                        "name": "Snack Bar Maker Set"
                    },
                    "quantity": 1,
                    "total": 32
                },
                {
                    "product": {
                        "sku": "100193",
                        "name": "Easy-Read Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "90566567096233",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Lisa",
                "lastName": "Schroeder"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100201",
                        "name": "Microwave Grip Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "2477",
                        "name": "Stainless Steel Mini Whisk"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2540",
                        "name": "Medium Scoop"
                    },
                    "quantity": 1,
                    "total": 22
                },
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "100727",
                        "name": "Veggie Wedger"
                    },
                    "quantity": 1,
                    "total": 32
                }
            ]
        },
        {
            "orderNumber": "90776703681422",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Alexis",
                "lastName": "Schumacher"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100523",
                        "name": "Caramel Latte Bread Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100819",
                        "name": "Sourdough Bread Mix NA"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "101283",
                        "name": "Italian Herb Bread Mix NA"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "2613",
                        "name": "Small Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 40
                }
            ]
        },
        {
            "orderNumber": "92432868937500",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Tammy",
                "lastName": "Sequeira"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "101205",
                        "name": "Basil Pesto Seasoning Mix NA"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "101221",
                        "name": "Linzer Cookie Cutter Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "2955",
                        "name": "Large Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 20.8
                },
                {
                    "product": {
                        "sku": "1181",
                        "name": "Quick Slice"
                    },
                    "quantity": 1,
                    "total": 45
                }
            ]
        },
        {
            "orderNumber": "94810177211588",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Susan",
                "lastName": "Chodera"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2225",
                        "name": "Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100687",
                        "name": "Silicone Scoop & Serve Spatula"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "2475",
                        "name": "Stainless Steel Whisk"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100676",
                        "name": "Mix 'N Chop Spatula"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2576",
                        "name": "Garlic Press"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 29.5
                }
            ]
        },
        {
            "orderNumber": "95470967311164",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Patricia",
                "lastName": "Grindle"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB1598",
                        "name": "Citrus Peeler Gift"
                    },
                    "quantity": 1,
                    "total": 5
                }
            ]
        },
        {
            "orderNumber": "98119005819905",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Jessica",
                "lastName": "Heiser"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "9666",
                        "name": "Teriyaki Sauce with Honey"
                    },
                    "quantity": 2,
                    "total": 30
                }
            ]
        },
        {
            "orderNumber": "99513713291752",
            "date": "2025-01-23",
            "customer": {
                "firstName": "Louveta",
                "lastName": "Moore"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB2275",
                        "name": "Season's Best® (Fall/Winter 2024) Gift"
                    },
                    "quantity": 1,
                    "total": 4
                }
            ]
        },
        {
            "orderNumber": "32305850967422",
            "date": "2025-01-24",
            "customer": {
                "firstName": "Laura",
                "lastName": "Walton"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100287",
                        "name": "Insulated Serving Bowl Set"
                    },
                    "quantity": 1,
                    "total": 57
                }
            ]
        },
        {
            "orderNumber": "64319316849974",
            "date": "2025-01-24",
            "customer": {
                "firstName": "Kimberly",
                "lastName": "Tribus"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "RP1103",
                        "name": "Small Flexible Cutting Mat Gift"
                    },
                    "quantity": 1,
                    "total": 6
                }
            ]
        },
        {
            "orderNumber": "93321928266053",
            "date": "2025-01-24",
            "customer": {
                "firstName": "Susan",
                "lastName": "Horbach"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1574",
                        "name": "Cookie Sheet"
                    },
                    "quantity": 1,
                    "total": 25.2
                }
            ]
        },
        {
            "orderNumber": "94167616909718",
            "date": "2025-01-24",
            "customer": {
                "firstName": "Dianne",
                "lastName": "Willis"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100682",
                        "name": "Silicone Straining Ladle"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                }
            ]
        },
        {
            "orderNumber": "11492926666915",
            "date": "2025-01-25",
            "customer": {
                "firstName": "Kim",
                "lastName": "Anderson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100130",
                        "name": "Cut-N-Seal"
                    },
                    "quantity": 1,
                    "total": 0.17
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 0.19
                },
                {
                    "product": {
                        "sku": "2475",
                        "name": "Stainless Steel Whisk"
                    },
                    "quantity": 1,
                    "total": 0.2
                },
                {
                    "product": {
                        "sku": "100122",
                        "name": "Quick Shred"
                    },
                    "quantity": 1,
                    "total": 0.34
                },
                {
                    "product": {
                        "sku": "100120",
                        "name": "Tortilla Warmer"
                    },
                    "quantity": 1,
                    "total": 7.5
                },
                {
                    "product": {
                        "sku": "101418",
                        "name": "*Utensil Starter Set"
                    },
                    "quantity": 1,
                    "total": 39.6
                },
                {
                    "product": {
                        "sku": "101419",
                        "name": "*Cutlery Basics Set"
                    },
                    "quantity": 1,
                    "total": 79.5
                }
            ]
        },
        {
            "orderNumber": "24586110288364",
            "date": "2025-01-25",
            "customer": {
                "firstName": "Eve",
                "lastName": "Ranard"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100947",
                        "name": "Rosemary Focaccia Bread Mix"
                    },
                    "quantity": 1,
                    "total": 1.48
                },
                {
                    "product": {
                        "sku": "1655",
                        "name": "Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 1.48
                },
                {
                    "product": {
                        "sku": "9864",
                        "name": "Coarse Sea & Himalayan Salt"
                    },
                    "quantity": 2,
                    "total": 1.88
                },
                {
                    "product": {
                        "sku": "182A",
                        "name": "1-Cup/250ml Lid (#1825, #100108)"
                    },
                    "quantity": 6,
                    "total": 2.04
                },
                {
                    "product": {
                        "sku": "100674",
                        "name": "Silicone Pancake Turner"
                    },
                    "quantity": 1,
                    "total": 2.14
                },
                {
                    "product": {
                        "sku": "100686",
                        "name": "Silicone Fish Spatula"
                    },
                    "quantity": 1,
                    "total": 2.14
                },
                {
                    "product": {
                        "sku": "9677",
                        "name": "Garlic-Infused Canola Oil"
                    },
                    "quantity": 1,
                    "total": 2.14
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 2.67
                },
                {
                    "product": {
                        "sku": "1012",
                        "name": "Cutting Board"
                    },
                    "quantity": 1,
                    "total": 2.95
                },
                {
                    "product": {
                        "sku": "2407",
                        "name": "Splatter Screen"
                    },
                    "quantity": 1,
                    "total": 3.61
                },
                {
                    "product": {
                        "sku": "2956",
                        "name": "Sauté Tongs"
                    },
                    "quantity": 2,
                    "total": 4.54
                },
                {
                    "product": {
                        "sku": "100251",
                        "name": "Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 6.68
                },
                {
                    "product": {
                        "sku": "2412",
                        "name": "Salt & Pepper Grinder Set"
                    },
                    "quantity": 1,
                    "total": 8.97
                },
                {
                    "product": {
                        "sku": "100826",
                        "name": "*12\" (30-cm) Cast Iron Grill Pan Skillet"
                    },
                    "quantity": 1,
                    "total": 11.91
                },
                {
                    "product": {
                        "sku": "101418",
                        "name": "*Utensil Starter Set"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "38861607072759",
            "date": "2025-01-25",
            "customer": {
                "firstName": "Joanne",
                "lastName": "Letona"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 3.22
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 6.43
                },
                {
                    "product": {
                        "sku": "1655",
                        "name": "Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 7.86
                },
                {
                    "product": {
                        "sku": "1656",
                        "name": "Mini Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 8.57
                },
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 10.72
                },
                {
                    "product": {
                        "sku": "2432",
                        "name": "Small Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 12.14
                },
                {
                    "product": {
                        "sku": "100662",
                        "name": "Silicone Egg Bites Mold"
                    },
                    "quantity": 1,
                    "total": 21.44
                },
                {
                    "product": {
                        "sku": "100775",
                        "name": "Stone Serving Tray"
                    },
                    "quantity": 1,
                    "total": 32.16
                },
                {
                    "product": {
                        "sku": "100750",
                        "name": "Coated Steak Knife Set"
                    },
                    "quantity": 1,
                    "total": 35.37
                },
                {
                    "product": {
                        "sku": "100292",
                        "name": "Stoneware Starter Set"
                    },
                    "quantity": 1,
                    "total": 54.79
                }
            ]
        },
        {
            "orderNumber": "61105980272113",
            "date": "2025-01-25",
            "customer": {
                "firstName": "Keri",
                "lastName": "Weaver"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "101239",
                        "name": "Nesting Spoon Rest Set"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100122",
                        "name": "Quick Shred"
                    },
                    "quantity": 1,
                    "total": 29.5
                }
            ]
        },
        {
            "orderNumber": "27017085164584",
            "date": "2025-01-26",
            "customer": {
                "firstName": "Laura",
                "lastName": "Duncan"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100680",
                        "name": "Silicone Angled Turner"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "100483",
                        "name": "Sauce Whisk"
                    },
                    "quantity": 1,
                    "total": 16.2
                },
                {
                    "product": {
                        "sku": "2427",
                        "name": "Apple Wedger"
                    },
                    "quantity": 1,
                    "total": 19.8
                },
                {
                    "product": {
                        "sku": "101173",
                        "name": "Java Chip Frappe Drink Mix"
                    },
                    "quantity": 1,
                    "total": 22.5
                },
                {
                    "product": {
                        "sku": "101174",
                        "name": "Vanilla Crème Frappe Drink Mix"
                    },
                    "quantity": 1,
                    "total": 22.5
                },
                {
                    "product": {
                        "sku": "101116",
                        "name": "Cold Brew Pitcher"
                    },
                    "quantity": 1,
                    "total": 30
                }
            ]
        },
        {
            "orderNumber": "27605111067593",
            "date": "2025-01-26",
            "customer": {
                "firstName": "Terri",
                "lastName": "Westby"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1718",
                        "name": "Pastry Mat"
                    },
                    "quantity": 1,
                    "total": 39.5
                }
            ]
        },
        {
            "orderNumber": "72965959776387",
            "date": "2025-01-26",
            "customer": {
                "firstName": "Michelle",
                "lastName": "Young"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "5231",
                        "name": "$25 Kit Credit/US"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2705",
                        "name": "Meat Tenderizer"
                    },
                    "quantity": 1,
                    "total": 17.5
                },
                {
                    "product": {
                        "sku": "101234",
                        "name": "Electric Twist & Chop"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "88249231631862",
            "date": "2025-01-26",
            "customer": {
                "firstName": "Karen",
                "lastName": "Squires"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100009",
                        "name": "2-qt. Micro-Cooker®"
                    },
                    "quantity": 1,
                    "total": 15
                }
            ]
        },
        {
            "orderNumber": "96943186756718",
            "date": "2025-01-26",
            "customer": {
                "firstName": "Ann",
                "lastName": "Mowen"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 1.8
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 2.7
                },
                {
                    "product": {
                        "sku": "1182",
                        "name": "Egg Slicer Plus®"
                    },
                    "quantity": 1,
                    "total": 10.2
                },
                {
                    "product": {
                        "sku": "100733",
                        "name": "2-qt. (1.9-L) Nonstick Sauce Pan"
                    },
                    "quantity": 1,
                    "total": 99
                }
            ]
        },
        {
            "orderNumber": "23808736664114",
            "date": "2025-01-27",
            "customer": {
                "firstName": "Sarah",
                "lastName": "Packard"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 0.76
                },
                {
                    "product": {
                        "sku": "2723",
                        "name": "Wooden Grill Scraper"
                    },
                    "quantity": 1,
                    "total": 0.85
                },
                {
                    "product": {
                        "sku": "100186",
                        "name": "Wood Salad Bowl & Servers Set"
                    },
                    "quantity": 1,
                    "total": 2.62
                },
                {
                    "product": {
                        "sku": "101419",
                        "name": "*Cutlery Basics Set"
                    },
                    "quantity": 1,
                    "total": 7.93
                }
            ]
        },
        {
            "orderNumber": "33288525330470",
            "date": "2025-01-27",
            "customer": {
                "firstName": "Susette",
                "lastName": "Mitchell"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1142",
                        "name": "Scoop Loop®"
                    },
                    "quantity": 1,
                    "total": 5
                },
                {
                    "product": {
                        "sku": "101234",
                        "name": "Electric Twist & Chop"
                    },
                    "quantity": 1,
                    "total": 39.6
                },
                {
                    "product": {
                        "sku": "2614",
                        "name": "Large Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 49
                },
                {
                    "product": {
                        "sku": "100922",
                        "name": "*Close & Cut Set"
                    },
                    "quantity": 1,
                    "total": 49.5
                }
            ]
        },
        {
            "orderNumber": "66444976739591",
            "date": "2025-01-27",
            "customer": {
                "firstName": "Joan",
                "lastName": "Martin"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2495",
                        "name": "Can Strainer"
                    },
                    "quantity": 1,
                    "total": 10.8
                },
                {
                    "product": {
                        "sku": "100120",
                        "name": "Tortilla Warmer"
                    },
                    "quantity": 1,
                    "total": 13.5
                },
                {
                    "product": {
                        "sku": "100268",
                        "name": "Potato Masher"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100485",
                        "name": "Spice Organizer"
                    },
                    "quantity": 1,
                    "total": 26.55
                }
            ]
        },
        {
            "orderNumber": "78704171604189",
            "date": "2025-01-27",
            "customer": {
                "firstName": "Kimberly",
                "lastName": "Edwards"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1659",
                        "name": "Small Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 3.44
                },
                {
                    "product": {
                        "sku": "2432",
                        "name": "Small Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 3.91
                },
                {
                    "product": {
                        "sku": "1657",
                        "name": "Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 4.14
                },
                {
                    "product": {
                        "sku": "1742",
                        "name": "2-cup(500ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 4.14
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 5.75
                },
                {
                    "product": {
                        "sku": "1603",
                        "name": "Fluted Cake Pan"
                    },
                    "quantity": 1,
                    "total": 5.75
                },
                {
                    "product": {
                        "sku": "2431",
                        "name": "Classic Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 5.75
                },
                {
                    "product": {
                        "sku": "100193",
                        "name": "Easy-Read Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 8.28
                },
                {
                    "product": {
                        "sku": "100750",
                        "name": "Coated Steak Knife Set"
                    },
                    "quantity": 1,
                    "total": 11.39
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 3,
                    "total": 20.34
                },
                {
                    "product": {
                        "sku": "100384",
                        "name": "Stone Bar Pan"
                    },
                    "quantity": 2,
                    "total": 23
                },
                {
                    "product": {
                        "sku": "100292",
                        "name": "Stoneware Starter Set"
                    },
                    "quantity": 1,
                    "total": 46
                }
            ]
        },
        {
            "orderNumber": "11913532832953",
            "date": "2025-01-28",
            "customer": {
                "firstName": "Amy",
                "lastName": "Cura"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1603",
                        "name": "Fluted Cake Pan"
                    },
                    "quantity": 1,
                    "total": 1.86
                },
                {
                    "product": {
                        "sku": "100020",
                        "name": "Mini Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 2.19
                },
                {
                    "product": {
                        "sku": "1406",
                        "name": "Mini Nylon Serving Spatula-Teal"
                    },
                    "quantity": 1,
                    "total": 3.5
                },
                {
                    "product": {
                        "sku": "1602",
                        "name": "Mini Fluted Cake Pan"
                    },
                    "quantity": 1,
                    "total": 16.5
                },
                {
                    "product": {
                        "sku": "101198",
                        "name": "*Brownie Pan Set"
                    },
                    "quantity": 1,
                    "total": 27.5
                },
                {
                    "product": {
                        "sku": "101420",
                        "name": "*Cookie Baking Set"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "20676773193998",
            "date": "2025-01-28",
            "customer": {
                "firstName": "Beth",
                "lastName": "Brannon"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1181",
                        "name": "Quick Slice"
                    },
                    "quantity": 1,
                    "total": 45
                }
            ]
        },
        {
            "orderNumber": "39517536502773",
            "date": "2025-01-28",
            "customer": {
                "firstName": "Brenda",
                "lastName": "Basham"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100686",
                        "name": "Silicone Fish Spatula"
                    },
                    "quantity": 1,
                    "total": 4.07
                },
                {
                    "product": {
                        "sku": "100728",
                        "name": "Silicone Egg Turner"
                    },
                    "quantity": 1,
                    "total": 4.07
                },
                {
                    "product": {
                        "sku": "100504",
                        "name": "Guacamole Mix"
                    },
                    "quantity": 2,
                    "total": 4.56
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 8.84
                },
                {
                    "product": {
                        "sku": "100257",
                        "name": "Pizza Peel"
                    },
                    "quantity": 1,
                    "total": 10.03
                },
                {
                    "product": {
                        "sku": "2729",
                        "name": "*8\" (20cm)Nonstick Fry Pan"
                    },
                    "quantity": 1,
                    "total": 20.31
                },
                {
                    "product": {
                        "sku": "101231",
                        "name": "Deluxe Stand Mixer Pasta Roller & Cutter Set"
                    },
                    "quantity": 1,
                    "total": 38.09
                },
                {
                    "product": {
                        "sku": "100833",
                        "name": "Deluxe Stand Mixer"
                    },
                    "quantity": 1,
                    "total": 101.32
                },
                {
                    "product": {
                        "sku": "100125",
                        "name": "Deluxe Cooking Blender"
                    },
                    "quantity": 1,
                    "total": 139.6
                }
            ]
        },
        {
            "orderNumber": "39574780609804",
            "date": "2025-01-28",
            "customer": {
                "firstName": "Cami",
                "lastName": "Tallant"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100504",
                        "name": "Guacamole Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "39703925859787",
            "date": "2025-01-28",
            "customer": {
                "firstName": "Kelley",
                "lastName": "Mcnally"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100682",
                        "name": "Silicone Straining Ladle"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1656",
                        "name": "Mini Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2540",
                        "name": "Medium Scoop"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100826",
                        "name": "*12\" (30-cm) Cast Iron Grill Pan Skillet"
                    },
                    "quantity": 1,
                    "total": 44.5
                },
                {
                    "product": {
                        "sku": "101214",
                        "name": "Brilliance Nonstick Metal Bakeware Set 6pc"
                    },
                    "quantity": 1,
                    "total": 74.5
                }
            ]
        },
        {
            "orderNumber": "46161144994690",
            "date": "2025-01-28",
            "customer": {
                "firstName": "Jennifer",
                "lastName": "Kemp"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 2.28
                },
                {
                    "product": {
                        "sku": "2225",
                        "name": "Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 3.3
                },
                {
                    "product": {
                        "sku": "100267",
                        "name": "Corer"
                    },
                    "quantity": 1,
                    "total": 4.57
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 5.07
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 6.36
                },
                {
                    "product": {
                        "sku": "1771",
                        "name": "Large Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 6.86
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 7.5
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 8.84
                },
                {
                    "product": {
                        "sku": "100668",
                        "name": "8\" (20-cm) Square Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 8.89
                },
                {
                    "product": {
                        "sku": "2613",
                        "name": "Small Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 10.16
                },
                {
                    "product": {
                        "sku": "2614",
                        "name": "Large Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 12.45
                },
                {
                    "product": {
                        "sku": "100263",
                        "name": "2.5-qt. (2.4-L) Insulated Serving Bowl"
                    },
                    "quantity": 1,
                    "total": 15.24
                },
                {
                    "product": {
                        "sku": "100906",
                        "name": "Store & Serve"
                    },
                    "quantity": 1,
                    "total": 20.12
                },
                {
                    "product": {
                        "sku": "101420",
                        "name": "*Cookie Baking Set"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "52960547930954",
            "date": "2025-01-28",
            "customer": {
                "firstName": "Shelby",
                "lastName": "Wilson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "5231",
                        "name": "$25 Kit Credit/US"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "85615197640672",
            "date": "2025-01-28",
            "customer": {
                "firstName": "Teresa",
                "lastName": "Frantz"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "9722",
                        "name": "Smoky Barbecue Rub"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100429",
                        "name": "Beer Bread Mix"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 13.5
                },
                {
                    "product": {
                        "sku": "101354",
                        "name": "Give Back Set US"
                    },
                    "quantity": 1,
                    "total": 15
                }
            ]
        },
        {
            "orderNumber": "35391072589650",
            "date": "2025-01-29",
            "customer": {
                "firstName": "Maureen",
                "lastName": "Tallant"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2571",
                        "name": "Toaster Tongs"
                    },
                    "quantity": 1,
                    "total": 1.62
                },
                {
                    "product": {
                        "sku": "100504",
                        "name": "Guacamole Mix"
                    },
                    "quantity": 1,
                    "total": 2.43
                },
                {
                    "product": {
                        "sku": "2635",
                        "name": "Stainless Steel Mini Whipper"
                    },
                    "quantity": 1,
                    "total": 2.44
                },
                {
                    "product": {
                        "sku": "100192",
                        "name": "Long Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 3.52
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 3.79
                },
                {
                    "product": {
                        "sku": "1001",
                        "name": "Bar Board"
                    },
                    "quantity": 1,
                    "total": 3.92
                },
                {
                    "product": {
                        "sku": "100264",
                        "name": "Ice Cream Scoop"
                    },
                    "quantity": 1,
                    "total": 3.93
                },
                {
                    "product": {
                        "sku": "100909",
                        "name": "Spreading Knife Set"
                    },
                    "quantity": 1,
                    "total": 4.06
                },
                {
                    "product": {
                        "sku": "100683",
                        "name": "Silicone Pasta Fork"
                    },
                    "quantity": 1,
                    "total": 4.33
                },
                {
                    "product": {
                        "sku": "100687",
                        "name": "Silicone Scoop & Serve Spatula"
                    },
                    "quantity": 1,
                    "total": 4.33
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 4.33
                },
                {
                    "product": {
                        "sku": "2475",
                        "name": "Stainless Steel Whisk"
                    },
                    "quantity": 1,
                    "total": 4.33
                },
                {
                    "product": {
                        "sku": "100478",
                        "name": "Cheese Knife"
                    },
                    "quantity": 1,
                    "total": 4.6
                },
                {
                    "product": {
                        "sku": "2432",
                        "name": "Small Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 4.6
                },
                {
                    "product": {
                        "sku": "2677",
                        "name": "Jar Opener"
                    },
                    "quantity": 1,
                    "total": 4.73
                },
                {
                    "product": {
                        "sku": "100678",
                        "name": "Stainless Steel Egg Separator"
                    },
                    "quantity": 1,
                    "total": 5.14
                },
                {
                    "product": {
                        "sku": "100871",
                        "name": "Everything Seasoning Set (US)"
                    },
                    "quantity": 1,
                    "total": 5.14
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 5.4
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 5.41
                },
                {
                    "product": {
                        "sku": "2427",
                        "name": "Apple Wedger"
                    },
                    "quantity": 1,
                    "total": 5.95
                },
                {
                    "product": {
                        "sku": "2540",
                        "name": "Medium Scoop"
                    },
                    "quantity": 1,
                    "total": 5.95
                },
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 6.62
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 9.41
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 9.74
                },
                {
                    "product": {
                        "sku": "100597",
                        "name": "Modular Sheet Pans"
                    },
                    "quantity": 1,
                    "total": 11.35
                },
                {
                    "product": {
                        "sku": "100666",
                        "name": "Secret Center Cake Pan"
                    },
                    "quantity": 1,
                    "total": 12.17
                },
                {
                    "product": {
                        "sku": "101215",
                        "name": "9x13 Brilliance Nonstick Baking Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 12.17
                },
                {
                    "product": {
                        "sku": "101218",
                        "name": "Brilliance NS Long Loaf Pan Set With Lids"
                    },
                    "quantity": 1,
                    "total": 15.15
                },
                {
                    "product": {
                        "sku": "100195",
                        "name": "Deluxe Cooking Blender Smoothie Cup & Adapter"
                    },
                    "quantity": 1,
                    "total": 22.99
                },
                {
                    "product": {
                        "sku": "100125",
                        "name": "Deluxe Cooking Blender"
                    },
                    "quantity": 1,
                    "total": 139.6
                }
            ]
        },
        {
            "orderNumber": "45212829907972",
            "date": "2025-01-29",
            "customer": {
                "firstName": "Carol",
                "lastName": "Pettis"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "2477",
                        "name": "Stainless Steel Mini Whisk"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 13.5
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "69707240831754",
            "date": "2025-01-29",
            "customer": {
                "firstName": "Cynthia",
                "lastName": "Mason-Posey"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 0.43
                },
                {
                    "product": {
                        "sku": "101278",
                        "name": "Roasted Red Pepper Tomato Bisque Mix NA"
                    },
                    "quantity": 1,
                    "total": 1.47
                },
                {
                    "product": {
                        "sku": "100429",
                        "name": "Beer Bread Mix"
                    },
                    "quantity": 1,
                    "total": 1.69
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 2.11
                },
                {
                    "product": {
                        "sku": "1114",
                        "name": "Kernel Cutter"
                    },
                    "quantity": 1,
                    "total": 3.16
                },
                {
                    "product": {
                        "sku": "100682",
                        "name": "Silicone Straining Ladle"
                    },
                    "quantity": 1,
                    "total": 3.37
                },
                {
                    "product": {
                        "sku": "100676",
                        "name": "Mix 'N Chop Spatula"
                    },
                    "quantity": 1,
                    "total": 3.79
                },
                {
                    "product": {
                        "sku": "100190",
                        "name": "Measure, Mix & Pour"
                    },
                    "quantity": 1,
                    "total": 4.1
                },
                {
                    "product": {
                        "sku": "2957",
                        "name": "Small Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 4.42
                },
                {
                    "product": {
                        "sku": "2278",
                        "name": "Quick-Stir® Pitcher"
                    },
                    "quantity": 1,
                    "total": 5.9
                },
                {
                    "product": {
                        "sku": "2277",
                        "name": "Family-Size Quick-Stir® Pitcher"
                    },
                    "quantity": 1,
                    "total": 6.95
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 7.57
                },
                {
                    "product": {
                        "sku": "100193",
                        "name": "Easy-Read Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 7.58
                },
                {
                    "product": {
                        "sku": "2582",
                        "name": "Salad Chopper"
                    },
                    "quantity": 1,
                    "total": 8.32
                },
                {
                    "product": {
                        "sku": "100082",
                        "name": "Batter Mixer & Dispenser"
                    },
                    "quantity": 1,
                    "total": 11.48
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 11.79
                },
                {
                    "product": {
                        "sku": "100929",
                        "name": "Prep & Store System"
                    },
                    "quantity": 1,
                    "total": 30.32
                },
                {
                    "product": {
                        "sku": "101234",
                        "name": "Electric Twist & Chop"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "OE_ORDER_LINES_ALL741015282",
            "date": "2025-01-29",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB2360",
                        "name": "NED/SED Sample (#101486)/2'25/NA"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "10237856257583",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Rhonda",
                "lastName": "Boom"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100381",
                        "name": "Seasoning Salt"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100502",
                        "name": "Everything But the Pizza Seasoning"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "101278",
                        "name": "Roasted Red Pepper Tomato Bisque Mix NA"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "1588",
                        "name": "Stackable Cooling Rack Set"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "10454303961854",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Glenda",
                "lastName": "Wilhelm"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100777",
                        "name": "Tortilla Soup Mix"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100524",
                        "name": "Chili Mix 3 Pack"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "100943",
                        "name": "Almond Pound Cake Mix"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "100684",
                        "name": "Silicone Spoon"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100871",
                        "name": "Everything Seasoning Set (US)"
                    },
                    "quantity": 1,
                    "total": 19
                },
                {
                    "product": {
                        "sku": "100835",
                        "name": "Spatula Tongs"
                    },
                    "quantity": 1,
                    "total": 26
                }
            ]
        },
        {
            "orderNumber": "10600180552762",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Paul",
                "lastName": "Allen"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "2225",
                        "name": "Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2530",
                        "name": "Small Scoop"
                    },
                    "quantity": 1,
                    "total": 21
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "101239",
                        "name": "Nesting Spoon Rest Set"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                },
                {
                    "product": {
                        "sku": "101154",
                        "name": "Kitchen Cleaning Set"
                    },
                    "quantity": 1,
                    "total": 50
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "1539518633",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 1.2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 1.8
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 2.7
                },
                {
                    "product": {
                        "sku": "100942",
                        "name": "Chimichurri Seasoning Mix"
                    },
                    "quantity": 1,
                    "total": 3.24
                }
            ]
        },
        {
            "orderNumber": "1539652785",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100090",
                        "name": "1-qt. (1-L)Cool & Serve Bowl"
                    },
                    "quantity": 1,
                    "total": 18
                }
            ]
        },
        {
            "orderNumber": "16867216118186",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Angela",
                "lastName": "Bakopoulos"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100820",
                        "name": "Silicone Helper Handle Protectors"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2495",
                        "name": "Can Strainer"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100820",
                        "name": "Silicone Helper Handle Protectors"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2495",
                        "name": "Can Strainer"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "16892293705722",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Melissa",
                "lastName": "Paxton"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100950",
                        "name": "Chimichurri Seasoning Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "1655",
                        "name": "Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "1529",
                        "name": "Ceramic Egg Cooker"
                    },
                    "quantity": 2,
                    "total": 39
                }
            ]
        },
        {
            "orderNumber": "17234614094915",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Jacqueline",
                "lastName": "Luther"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 3,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "101221",
                        "name": "Linzer Cookie Cutter Set"
                    },
                    "quantity": 1,
                    "total": 10
                }
            ]
        },
        {
            "orderNumber": "24606852776509",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Michelle",
                "lastName": "Spencer"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 1.8
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 31.32
                }
            ]
        },
        {
            "orderNumber": "27310509222246",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Heather",
                "lastName": "Goetzinger"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100857",
                        "name": "Black Garlic Seasoning Mix"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100009",
                        "name": "2-qt. Micro-Cooker®"
                    },
                    "quantity": 1,
                    "total": 15
                }
            ]
        },
        {
            "orderNumber": "29574401820671",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Mary",
                "lastName": "Batoha"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "2571",
                        "name": "Toaster Tongs"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100751",
                        "name": "Utensil Scrubber"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100268",
                        "name": "Potato Masher"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100840",
                        "name": "Coated Santoku Knife"
                    },
                    "quantity": 1,
                    "total": 22
                },
                {
                    "product": {
                        "sku": "100468",
                        "name": "Deluxe Air Fryer Mess Catcher"
                    },
                    "quantity": 1,
                    "total": 27.5
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "2277",
                        "name": "Family-Size Quick-Stir® Pitcher"
                    },
                    "quantity": 1,
                    "total": 33
                }
            ]
        },
        {
            "orderNumber": "31479120514183",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Karen",
                "lastName": "Walk"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100517",
                        "name": "French Onion Dip Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100130",
                        "name": "Cut-N-Seal"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "31741600914128",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Sonya",
                "lastName": "Hewitt"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100842",
                        "name": "Coated Utility Knife"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100752",
                        "name": "Coated Bread Knife"
                    },
                    "quantity": 1,
                    "total": 22
                }
            ]
        },
        {
            "orderNumber": "32234603183139",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Kathi",
                "lastName": "Root"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100840",
                        "name": "Coated Santoku Knife"
                    },
                    "quantity": 2,
                    "total": 44
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "32781595001727",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Kristi",
                "lastName": "Turner"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "9812",
                        "name": "Jamaican Jerk Rub"
                    },
                    "quantity": 2,
                    "total": 12
                }
            ]
        },
        {
            "orderNumber": "33787243249213",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Sue",
                "lastName": "Ross"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2477",
                        "name": "Stainless Steel Mini Whisk"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 13.5
                },
                {
                    "product": {
                        "sku": "100025",
                        "name": "Brown Sugar Keeper Set"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100683",
                        "name": "Silicone Pasta Fork"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1657",
                        "name": "Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "1790",
                        "name": "Large Scoop"
                    },
                    "quantity": 1,
                    "total": 23
                }
            ]
        },
        {
            "orderNumber": "34527348343797",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Deb",
                "lastName": "Murray"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100041",
                        "name": "Micro-Cooker® Set"
                    },
                    "quantity": 1,
                    "total": 49.5
                }
            ]
        },
        {
            "orderNumber": "35641321988391",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Amy",
                "lastName": "Mcgee"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100429",
                        "name": "Beer Bread Mix"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100201",
                        "name": "Microwave Grip Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100908",
                        "name": "Garlic Prep Tool"
                    },
                    "quantity": 1,
                    "total": 34
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "35689322410856",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Daylene",
                "lastName": "Bladorn"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100841",
                        "name": "Coated Tomato Knife"
                    },
                    "quantity": 1,
                    "total": 18
                }
            ]
        },
        {
            "orderNumber": "35794435965321",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Nancy",
                "lastName": "Kearney"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2407",
                        "name": "Splatter Screen"
                    },
                    "quantity": 1,
                    "total": 27
                }
            ]
        },
        {
            "orderNumber": "35841463656854",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Stephanie",
                "lastName": "Horner"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "2427",
                        "name": "Apple Wedger"
                    },
                    "quantity": 1,
                    "total": 22
                }
            ]
        },
        {
            "orderNumber": "36092751596397",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Donna",
                "lastName": "Martin"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "1089",
                        "name": "Crinkle Cutter"
                    },
                    "quantity": 1,
                    "total": 17
                }
            ]
        },
        {
            "orderNumber": "37628405996199",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Starr",
                "lastName": "De Grado"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1406",
                        "name": "Mini Nylon Serving Spatula-Teal"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "2236",
                        "name": "Mini Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "1642",
                        "name": "All-Purpose Spreader"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2432",
                        "name": "Small Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100676",
                        "name": "Mix 'N Chop Spatula"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100667",
                        "name": "9x13 (23x33-cm) Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 39.5
                },
                {
                    "product": {
                        "sku": "100730",
                        "name": "8.5\" (21-cm) Nonstick Fry Pan"
                    },
                    "quantity": 1,
                    "total": 65
                }
            ]
        },
        {
            "orderNumber": "37870942749292",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Kendra",
                "lastName": "Welch"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100808",
                        "name": "Garlic Parmesan Seasoning"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100429",
                        "name": "Beer Bread Mix"
                    },
                    "quantity": 1,
                    "total": 8
                }
            ]
        },
        {
            "orderNumber": "38289323279491",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Donna",
                "lastName": "Gurak"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100580",
                        "name": "Brownie Mix"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "101172",
                        "name": "Brownie Bite Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "101149",
                        "name": "Stainless Steel Measuring Scoop Set"
                    },
                    "quantity": 1,
                    "total": 30
                },
                {
                    "product": {
                        "sku": "101229",
                        "name": "Tea Steeper & Dispenser"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "39224051271326",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Sarah",
                "lastName": "Packard"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 2.7
                },
                {
                    "product": {
                        "sku": "101278",
                        "name": "Roasted Red Pepper Tomato Bisque Mix NA"
                    },
                    "quantity": 1,
                    "total": 6.3
                },
                {
                    "product": {
                        "sku": "101158",
                        "name": "Gourmet Brown Sugar Syrup"
                    },
                    "quantity": 1,
                    "total": 18.9
                }
            ]
        },
        {
            "orderNumber": "41501489132120",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Becky",
                "lastName": "Bodish"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2614",
                        "name": "Large Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 49
                }
            ]
        },
        {
            "orderNumber": "41697362599183",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Patty",
                "lastName": "Yon"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 2.7
                },
                {
                    "product": {
                        "sku": "1142",
                        "name": "Scoop Loop®"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "100524",
                        "name": "Chili Mix 3 Pack"
                    },
                    "quantity": 1,
                    "total": 9.9
                },
                {
                    "product": {
                        "sku": "1181",
                        "name": "Quick Slice"
                    },
                    "quantity": 1,
                    "total": 27
                },
                {
                    "product": {
                        "sku": "101216",
                        "name": "8\" Brilliance Nonstick Square Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "43325645739864",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Mary",
                "lastName": "Willer"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100836",
                        "name": "Bag Clip & Slicer Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100483",
                        "name": "Sauce Whisk"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100694",
                        "name": "Spider Strainer"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "43591534134707",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Jessica",
                "lastName": "Cheverton"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "44146251502939",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Wanda",
                "lastName": "Rodrigues"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "1642",
                        "name": "All-Purpose Spreader"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 2,
                    "total": 50
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "45324514312614",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Joann",
                "lastName": "Crow"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100667",
                        "name": "9x13 (23x33-cm) Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100726",
                        "name": "Plastic Mixing Bowl Set"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1538",
                        "name": "Ice Cream Maker"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1593",
                        "name": "Kitchen Shears"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1657",
                        "name": "Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "45657817622878",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Jaime",
                "lastName": "Richard"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100808",
                        "name": "Garlic Parmesan Seasoning"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100504",
                        "name": "Guacamole Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "46141269137747",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Valarie",
                "lastName": "Johnson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "1642",
                        "name": "All-Purpose Spreader"
                    },
                    "quantity": 2,
                    "total": 26
                },
                {
                    "product": {
                        "sku": "100251",
                        "name": "Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 50
                }
            ]
        },
        {
            "orderNumber": "50937534831324",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Angi",
                "lastName": "Bell"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100251",
                        "name": "Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 50
                }
            ]
        },
        {
            "orderNumber": "51133720777549",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Karrah",
                "lastName": "Lengyel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "2225",
                        "name": "Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "51342388095189",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Melinda",
                "lastName": "Burds"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1657",
                        "name": "Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "51437158448649",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Heather",
                "lastName": "Beckwith"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2071",
                        "name": "Small Spreader"
                    },
                    "quantity": 1,
                    "total": 8.1
                },
                {
                    "product": {
                        "sku": "100682",
                        "name": "Silicone Straining Ladle"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "100842",
                        "name": "Coated Utility Knife"
                    },
                    "quantity": 1,
                    "total": 16.2
                },
                {
                    "product": {
                        "sku": "2957",
                        "name": "Small Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 18.9
                },
                {
                    "product": {
                        "sku": "100838",
                        "name": "Coated Chef's Knife"
                    },
                    "quantity": 1,
                    "total": 20.7
                },
                {
                    "product": {
                        "sku": "100537",
                        "name": "*Scraper Set"
                    },
                    "quantity": 1,
                    "total": 31.05
                },
                {
                    "product": {
                        "sku": "101215",
                        "name": "9x13 Brilliance Nonstick Baking Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 40.5
                }
            ]
        },
        {
            "orderNumber": "51832919767935",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Kendra",
                "lastName": "Pingel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "9713",
                        "name": "All-Purpose Dill Mix"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "2071",
                        "name": "Small Spreader"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "1656",
                        "name": "Mini Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1674",
                        "name": "Bamboo Spoon Set"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "1012",
                        "name": "Cutting Board"
                    },
                    "quantity": 1,
                    "total": 22
                }
            ]
        },
        {
            "orderNumber": "53104185173843",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Laura",
                "lastName": "Johnson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100251",
                        "name": "Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 50
                }
            ]
        },
        {
            "orderNumber": "55840202963360",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Christina",
                "lastName": "Mukanos"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1142",
                        "name": "Scoop Loop®"
                    },
                    "quantity": 1,
                    "total": 5
                },
                {
                    "product": {
                        "sku": "100844",
                        "name": "Decorating Bag Set"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "56925949497740",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Kim",
                "lastName": "Dombrowski"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "9578",
                        "name": "Bell Pepper Herb Rub"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100648",
                        "name": "Parmesan Garlic Olive Oil"
                    },
                    "quantity": 1,
                    "total": 21
                }
            ]
        },
        {
            "orderNumber": "57184086889881",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Rose",
                "lastName": "Moran"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "1655",
                        "name": "Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 11
                },
                {
                    "product": {
                        "sku": "1603",
                        "name": "Fluted Cake Pan"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "59327858136575",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Michele",
                "lastName": "Garren"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2626",
                        "name": "Large Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 18
                }
            ]
        },
        {
            "orderNumber": "59922435222910",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Katey",
                "lastName": "Rausch"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1657",
                        "name": "Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "2431",
                        "name": "Classic Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "101149",
                        "name": "Stainless Steel Measuring Scoop Set"
                    },
                    "quantity": 1,
                    "total": 30
                }
            ]
        },
        {
            "orderNumber": "60453893790832",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Teresa",
                "lastName": "Frantz"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB1598",
                        "name": "Citrus Peeler Gift"
                    },
                    "quantity": 1,
                    "total": 5
                }
            ]
        },
        {
            "orderNumber": "61193231810433",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Shelly",
                "lastName": "Wolf"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "9736",
                        "name": "Crushed Peppercorn & Garlic Rub"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100153",
                        "name": "Metal Rack 6 Soup Containers"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1825",
                        "name": "1-cup(250ml) Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "62938239508419",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Sheryl",
                "lastName": "Stokesbary"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100929",
                        "name": "Prep & Store System"
                    },
                    "quantity": 1,
                    "total": 144
                }
            ]
        },
        {
            "orderNumber": "63358265134570",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Audra",
                "lastName": "Keele"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100429",
                        "name": "Beer Bread Mix"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "100819",
                        "name": "Sourdough Bread Mix NA"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "101277",
                        "name": "Sweet Cornbread Mix NA"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100221",
                        "name": "Stone Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 35
                },
                {
                    "product": {
                        "sku": "100292",
                        "name": "Stoneware Starter Set"
                    },
                    "quantity": 1,
                    "total": 115
                }
            ]
        },
        {
            "orderNumber": "64199833055582",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Jeri",
                "lastName": "Patterson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100725",
                        "name": "Stainless Steel Measuring Scoop"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "64534199490364",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Christy",
                "lastName": "Ferguson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "100130",
                        "name": "Cut-N-Seal"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "100687",
                        "name": "Silicone Scoop & Serve Spatula"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "1023",
                        "name": "Large Grooved Cutting Board"
                    },
                    "quantity": 1,
                    "total": 35
                },
                {
                    "product": {
                        "sku": "1718",
                        "name": "Pastry Mat"
                    },
                    "quantity": 1,
                    "total": 39.5
                }
            ]
        },
        {
            "orderNumber": "66018468147886",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Cathy",
                "lastName": "Miller"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 24.5
                }
            ]
        },
        {
            "orderNumber": "67307999948565",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Arlene",
                "lastName": "Hodges"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100662",
                        "name": "Silicone Egg Bites Mold"
                    },
                    "quantity": 1,
                    "total": 30
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "68045705898465",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Tamberlyn",
                "lastName": "Mcintosh"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 1.8
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 2.7
                },
                {
                    "product": {
                        "sku": "100524",
                        "name": "Chili Mix 3 Pack"
                    },
                    "quantity": 1,
                    "total": 9.9
                },
                {
                    "product": {
                        "sku": "2013",
                        "name": "Stainless Steel Rotating Utensil Holder"
                    },
                    "quantity": 1,
                    "total": 23.4
                }
            ]
        },
        {
            "orderNumber": "68145916443488",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Cindy",
                "lastName": "Long"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "68780699826855",
            "date": "2025-01-30",
            "customer": {
                "firstName": "April",
                "lastName": "Schaefer"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100840",
                        "name": "Coated Santoku Knife"
                    },
                    "quantity": 1,
                    "total": 22
                },
                {
                    "product": {
                        "sku": "100838",
                        "name": "Coated Chef's Knife"
                    },
                    "quantity": 1,
                    "total": 23
                },
                {
                    "product": {
                        "sku": "9702",
                        "name": "Raspberry Habanero Sauce"
                    },
                    "quantity": 2,
                    "total": 30
                }
            ]
        },
        {
            "orderNumber": "72041729091636",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Deborah",
                "lastName": "Vancampen"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100223",
                        "name": "Leakproof Glass Container Set"
                    },
                    "quantity": 2,
                    "total": 114
                }
            ]
        },
        {
            "orderNumber": "74520455147148",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Marlene",
                "lastName": "Beiler"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100867",
                        "name": "Deluxe Stand Mixer Pouring Shield"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2278",
                        "name": "Quick-Stir® Pitcher"
                    },
                    "quantity": 1,
                    "total": 28
                }
            ]
        },
        {
            "orderNumber": "75147901700285",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Dale",
                "lastName": "Murray"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100674",
                        "name": "Silicone Pancake Turner"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100680",
                        "name": "Silicone Angled Turner"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100835",
                        "name": "Spatula Tongs"
                    },
                    "quantity": 1,
                    "total": 26
                },
                {
                    "product": {
                        "sku": "1771",
                        "name": "Large Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 27
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                }
            ]
        },
        {
            "orderNumber": "75305383251755",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Sue",
                "lastName": "Rausch"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "101221",
                        "name": "Linzer Cookie Cutter Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 13.5
                }
            ]
        },
        {
            "orderNumber": "78617330729733",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Deborah",
                "lastName": "James"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100731",
                        "name": "10\" (25-cm) Nonstick Fry Pan"
                    },
                    "quantity": 1,
                    "total": 95
                }
            ]
        },
        {
            "orderNumber": "79227121937758",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Todd",
                "lastName": "Wells"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100844",
                        "name": "Decorating Bag Set"
                    },
                    "quantity": 1,
                    "total": 35
                },
                {
                    "product": {
                        "sku": "2705",
                        "name": "Meat Tenderizer"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "80665707501790",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Angela",
                "lastName": "Whetstine"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 8
                },
                {
                    "product": {
                        "sku": "101099",
                        "name": "Serving Tray Set"
                    },
                    "quantity": 1,
                    "total": 77
                }
            ]
        },
        {
            "orderNumber": "82334879432502",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Jennifer",
                "lastName": "Bell"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "101354",
                        "name": "Give Back Set US"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "82682533041971",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Leigh",
                "lastName": "Devoe"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101123",
                        "name": "Easy Clean Bottle Brush"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100904",
                        "name": "Icing Spatula"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "2431",
                        "name": "Classic Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "101170",
                        "name": "Brownie Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "100739",
                        "name": "Tapered Rolling Pin"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "85353782070078",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Roberta",
                "lastName": "Pape"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "2571",
                        "name": "Toaster Tongs"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "1174",
                        "name": "Burger & Slider Press"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100483",
                        "name": "Sauce Whisk"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100694",
                        "name": "Spider Strainer"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100280",
                        "name": "Rectangle Stone"
                    },
                    "quantity": 1,
                    "total": 45
                },
                {
                    "product": {
                        "sku": "101217",
                        "name": "Brilliance Nonstick Half Sheet Pan With Rack"
                    },
                    "quantity": 1,
                    "total": 70
                }
            ]
        },
        {
            "orderNumber": "85374730298734",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Sherry",
                "lastName": "Bietz"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100684",
                        "name": "Silicone Spoon"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100687",
                        "name": "Silicone Scoop & Serve Spatula"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100676",
                        "name": "Mix 'N Chop Spatula"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "2427",
                        "name": "Apple Wedger"
                    },
                    "quantity": 1,
                    "total": 22
                }
            ]
        },
        {
            "orderNumber": "86160262411120",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Julie",
                "lastName": "Price"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100260",
                        "name": "Easy Accent® Decorator"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "86565831025568",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Dawn",
                "lastName": "Fowlie"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100190",
                        "name": "Measure, Mix & Pour"
                    },
                    "quantity": 1,
                    "total": 19.5
                },
                {
                    "product": {
                        "sku": "2436",
                        "name": "Multicolor Kitchen Utensil Set"
                    },
                    "quantity": 1,
                    "total": 26
                },
                {
                    "product": {
                        "sku": "100248",
                        "name": "1-qt. (1-L) Enameled Cast Iron Baker"
                    },
                    "quantity": 1,
                    "total": 55
                },
                {
                    "product": {
                        "sku": "100916",
                        "name": "Stone Square Baker"
                    },
                    "quantity": 1,
                    "total": 55
                }
            ]
        },
        {
            "orderNumber": "86574412881042",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Kim",
                "lastName": "Hutzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 1.26
                },
                {
                    "product": {
                        "sku": "100751",
                        "name": "Utensil Scrubber"
                    },
                    "quantity": 1,
                    "total": 2.36
                },
                {
                    "product": {
                        "sku": "100267",
                        "name": "Corer"
                    },
                    "quantity": 1,
                    "total": 2.82
                },
                {
                    "product": {
                        "sku": "2618",
                        "name": "5-Section Tray"
                    },
                    "quantity": 1,
                    "total": 2.82
                },
                {
                    "product": {
                        "sku": "2530",
                        "name": "Small Scoop"
                    },
                    "quantity": 1,
                    "total": 3.28
                },
                {
                    "product": {
                        "sku": "2540",
                        "name": "Medium Scoop"
                    },
                    "quantity": 1,
                    "total": 3.46
                },
                {
                    "product": {
                        "sku": "1790",
                        "name": "Large Scoop"
                    },
                    "quantity": 1,
                    "total": 3.6
                },
                {
                    "product": {
                        "sku": "101239",
                        "name": "Nesting Spoon Rest Set"
                    },
                    "quantity": 1,
                    "total": 3.91
                },
                {
                    "product": {
                        "sku": "2407",
                        "name": "Splatter Screen"
                    },
                    "quantity": 1,
                    "total": 4.24
                },
                {
                    "product": {
                        "sku": "2759",
                        "name": "Smooth-Edge Can Opener"
                    },
                    "quantity": 1,
                    "total": 4.62
                },
                {
                    "product": {
                        "sku": "100256",
                        "name": "Small Stone Bar Pan"
                    },
                    "quantity": 1,
                    "total": 4.7
                },
                {
                    "product": {
                        "sku": "100597",
                        "name": "Modular Sheet Pans"
                    },
                    "quantity": 1,
                    "total": 6.59
                },
                {
                    "product": {
                        "sku": "100280",
                        "name": "Rectangle Stone"
                    },
                    "quantity": 1,
                    "total": 22.5
                },
                {
                    "product": {
                        "sku": "2614",
                        "name": "Large Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "100736",
                        "name": "Rectangle Baker with Lid"
                    },
                    "quantity": 1,
                    "total": 55
                }
            ]
        },
        {
            "orderNumber": "88719171424161",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Carrie",
                "lastName": "Cochran"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100909",
                        "name": "Spreading Knife Set"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100683",
                        "name": "Silicone Pasta Fork"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100835",
                        "name": "Spatula Tongs"
                    },
                    "quantity": 1,
                    "total": 26
                }
            ]
        },
        {
            "orderNumber": "90571152786843",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Kellie",
                "lastName": "Chandler"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 2,
                    "total": 50
                },
                {
                    "product": {
                        "sku": "101218",
                        "name": "Brilliance NS Long Loaf Pan Set With Lids"
                    },
                    "quantity": 1,
                    "total": 56
                }
            ]
        },
        {
            "orderNumber": "90717454193024",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Sherri",
                "lastName": "Van Campen"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "91849337961080",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Marella",
                "lastName": "Kazos"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100520",
                        "name": "Donut Mix"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100019",
                        "name": "Donut Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "100020",
                        "name": "Mini Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 29.5
                },
                {
                    "product": {
                        "sku": "100548",
                        "name": "*Donut Hole Kit/US"
                    },
                    "quantity": 1,
                    "total": 54
                }
            ]
        },
        {
            "orderNumber": "92595433385097",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Tammy",
                "lastName": "Wuertzer"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101173",
                        "name": "Java Chip Frappe Drink Mix"
                    },
                    "quantity": 1,
                    "total": 22.5
                },
                {
                    "product": {
                        "sku": "1771",
                        "name": "Large Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 24.3
                }
            ]
        },
        {
            "orderNumber": "93650436705751",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Brenda",
                "lastName": "Muller"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "100942",
                        "name": "Chimichurri Seasoning Mix"
                    },
                    "quantity": 1,
                    "total": 5.4
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2427",
                        "name": "Apple Wedger"
                    },
                    "quantity": 1,
                    "total": 22
                }
            ]
        },
        {
            "orderNumber": "96122370755729",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Lisa",
                "lastName": "Veit"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "100808",
                        "name": "Garlic Parmesan Seasoning"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100191",
                        "name": "Salad Claws"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "9702",
                        "name": "Raspberry Habanero Sauce"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "101138",
                        "name": "Chili Peach Sauce"
                    },
                    "quantity": 1,
                    "total": 16
                }
            ]
        },
        {
            "orderNumber": "96764157975902",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Vimarie",
                "lastName": "Lopez"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101278",
                        "name": "Roasted Red Pepper Tomato Bisque Mix NA"
                    },
                    "quantity": 2,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "100264",
                        "name": "Ice Cream Scoop"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "100725",
                        "name": "Stainless Steel Measuring Scoop"
                    },
                    "quantity": 2,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "97301300975142",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Tia",
                "lastName": "Koutz"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "RP1223",
                        "name": "Large Grey Twixit! Clip/1 (#100902)"
                    },
                    "quantity": 1,
                    "total": 4.5
                },
                {
                    "product": {
                        "sku": "2071",
                        "name": "Small Spreader"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100189",
                        "name": "3-Piece Peeler Set"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "100830",
                        "name": "Extra-Large Scoop"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "101239",
                        "name": "Nesting Spoon Rest Set"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                }
            ]
        },
        {
            "orderNumber": "97789863112483",
            "date": "2025-01-30",
            "customer": {
                "firstName": "Lynne",
                "lastName": "Northrup"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1001",
                        "name": "Bar Board"
                    },
                    "quantity": 1,
                    "total": 14.5
                }
            ]
        },
        {
            "orderNumber": "12945404383208",
            "date": "2025-01-31",
            "customer": {
                "firstName": "Susan",
                "lastName": "Horbach"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 11.7
                }
            ]
        },
        {
            "orderNumber": "18135640104073",
            "date": "2025-01-31",
            "customer": {
                "firstName": "Wendy",
                "lastName": "Tool"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 0.78
                },
                {
                    "product": {
                        "sku": "9677",
                        "name": "Garlic-Infused Canola Oil"
                    },
                    "quantity": 1,
                    "total": 6.21
                },
                {
                    "product": {
                        "sku": "100600",
                        "name": "Bowl & Bench Scraper Set"
                    },
                    "quantity": 1,
                    "total": 9.51
                },
                {
                    "product": {
                        "sku": "2431",
                        "name": "Classic Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 9.7
                },
                {
                    "product": {
                        "sku": "2797",
                        "name": "Stainless Steel Mesh Colander Set"
                    },
                    "quantity": 1,
                    "total": 16.3
                },
                {
                    "product": {
                        "sku": "100774",
                        "name": "Stone Rectangle Baker"
                    },
                    "quantity": 1,
                    "total": 25.23
                },
                {
                    "product": {
                        "sku": "101420",
                        "name": "*Cookie Baking Set"
                    },
                    "quantity": 1,
                    "total": 38.43
                },
                {
                    "product": {
                        "sku": "101419",
                        "name": "*Cutlery Basics Set"
                    },
                    "quantity": 1,
                    "total": 63.6
                },
                {
                    "product": {
                        "sku": "101198",
                        "name": "*Brownie Pan Set"
                    },
                    "quantity": 3,
                    "total": 64.05
                },
                {
                    "product": {
                        "sku": "100287",
                        "name": "Insulated Serving Bowl Set"
                    },
                    "quantity": 2,
                    "total": 73.76
                }
            ]
        },
        {
            "orderNumber": "26922714109660",
            "date": "2025-01-31",
            "customer": {
                "firstName": "Erica",
                "lastName": "Wuertzer"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101205",
                        "name": "Basil Pesto Seasoning Mix NA"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "28973704032478",
            "date": "2025-01-31",
            "customer": {
                "firstName": "Bonnie",
                "lastName": "Noll-Nelson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100130",
                        "name": "Cut-N-Seal"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 24.5
                }
            ]
        },
        {
            "orderNumber": "45153540326380",
            "date": "2025-01-31",
            "customer": {
                "firstName": "Teresa",
                "lastName": "Garner"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1755",
                        "name": "Chef's Silicone Basting Brush"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100841",
                        "name": "Coated Tomato Knife"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100190",
                        "name": "Measure, Mix & Pour"
                    },
                    "quantity": 1,
                    "total": 19.5
                },
                {
                    "product": {
                        "sku": "1529",
                        "name": "Ceramic Egg Cooker"
                    },
                    "quantity": 1,
                    "total": 19.5
                },
                {
                    "product": {
                        "sku": "100838",
                        "name": "Coated Chef's Knife"
                    },
                    "quantity": 1,
                    "total": 23
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100847",
                        "name": "On-the-Go 2-qt. (1.9-L) Serving Bowl"
                    },
                    "quantity": 1,
                    "total": 60
                }
            ]
        },
        {
            "orderNumber": "83340516970147",
            "date": "2025-01-31",
            "customer": {
                "firstName": "Jim",
                "lastName": "Cameron"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100009",
                        "name": "2-qt. Micro-Cooker®"
                    },
                    "quantity": 1,
                    "total": 15
                }
            ]
        },
        {
            "orderNumber": "97283534349707",
            "date": "2025-01-31",
            "customer": {
                "firstName": "Vicki",
                "lastName": "Bradley"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100190",
                        "name": "Measure, Mix & Pour"
                    },
                    "quantity": 1,
                    "total": 19.5
                },
                {
                    "product": {
                        "sku": "1012",
                        "name": "Cutting Board"
                    },
                    "quantity": 1,
                    "total": 22
                }
            ]
        },
        {
            "orderNumber": "OE_ORDER_LINES_ALL741302095",
            "date": "2025-01-31",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "PB2342",
                        "name": "Consultant Sales Promo (#101485)/1'25/NA"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "37353022253782",
            "date": "2025-02-01",
            "customer": {
                "firstName": "Megan",
                "lastName": "Disney"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "TB2502",
                        "name": "Tastebuds-February'25/US"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100968",
                        "name": "Donut Mix (Add-Ons)#100520/US"
                    },
                    "quantity": 1,
                    "total": 6.48
                },
                {
                    "product": {
                        "sku": "101243",
                        "name": "Sourdough Bread Mix (Add-Ons)#100819/US"
                    },
                    "quantity": 2,
                    "total": 12.96
                }
            ]
        },
        {
            "orderNumber": "49934520441425",
            "date": "2025-02-01",
            "customer": {
                "firstName": "Maureen",
                "lastName": "Richards"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "2576",
                        "name": "Garlic Press"
                    },
                    "quantity": 1,
                    "total": 24.5
                }
            ]
        },
        {
            "orderNumber": "65236297088285",
            "date": "2025-02-01",
            "customer": {
                "firstName": "Julie",
                "lastName": "Price"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2308",
                        "name": "Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100903",
                        "name": "Icing Smoother"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "1089",
                        "name": "Crinkle Cutter"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "100267",
                        "name": "Corer"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100678",
                        "name": "Stainless Steel Egg Separator"
                    },
                    "quantity": 1,
                    "total": 19
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100908",
                        "name": "Garlic Prep Tool"
                    },
                    "quantity": 1,
                    "total": 34
                },
                {
                    "product": {
                        "sku": "100537",
                        "name": "*Scraper Set"
                    },
                    "quantity": 1,
                    "total": 34.5
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 2,
                    "total": 40
                }
            ]
        },
        {
            "orderNumber": "73193707858523",
            "date": "2025-02-01",
            "customer": {
                "firstName": "Carla",
                "lastName": "Purvis"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "101120",
                        "name": "Level & Funnel Scoop"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100694",
                        "name": "Spider Strainer"
                    },
                    "quantity": 1,
                    "total": 12
                }
            ]
        },
        {
            "orderNumber": "82011091202128",
            "date": "2025-02-01",
            "customer": {
                "firstName": "Kim",
                "lastName": "Metzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101120",
                        "name": "Level & Funnel Scoop"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 45
                }
            ]
        },
        {
            "orderNumber": "90044555189408",
            "date": "2025-02-01",
            "customer": {
                "firstName": "Emily",
                "lastName": "Jessup"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 2,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "2955",
                        "name": "Large Chef's Tongs"
                    },
                    "quantity": 1,
                    "total": 26
                },
                {
                    "product": {
                        "sku": "1574",
                        "name": "Cookie Sheet"
                    },
                    "quantity": 1,
                    "total": 28
                },
                {
                    "product": {
                        "sku": "101216",
                        "name": "8\" Brilliance Nonstick Square Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 40
                },
                {
                    "product": {
                        "sku": "101215",
                        "name": "9x13 Brilliance Nonstick Baking Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 45
                }
            ]
        },
        {
            "orderNumber": "96530932819419",
            "date": "2025-02-01",
            "customer": {
                "firstName": "Alicia",
                "lastName": "Ross"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2308",
                        "name": "Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1650",
                        "name": "Classic Scraper"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "1659",
                        "name": "Small Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 2,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2436",
                        "name": "Multicolor Kitchen Utensil Set"
                    },
                    "quantity": 1,
                    "total": 26
                },
                {
                    "product": {
                        "sku": "1751",
                        "name": "Silicone Prep Bowl Set"
                    },
                    "quantity": 1,
                    "total": 27.5
                },
                {
                    "product": {
                        "sku": "100772",
                        "name": "5-Piece Nonstick Cookware Set"
                    },
                    "quantity": 1,
                    "total": 375
                }
            ]
        },
        {
            "orderNumber": "51511294168633",
            "date": "2025-02-02",
            "customer": {
                "firstName": "Codi",
                "lastName": "Parks"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100201",
                        "name": "Microwave Grip Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "100287",
                        "name": "Insulated Serving Bowl Set"
                    },
                    "quantity": 1,
                    "total": 95
                }
            ]
        },
        {
            "orderNumber": "73265814319445",
            "date": "2025-02-02",
            "customer": {
                "firstName": "Alisa",
                "lastName": "Drury"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "RP1070",
                        "name": "Motor Bushing (#100125)"
                    },
                    "quantity": 4,
                    "total": 8
                }
            ]
        },
        {
            "orderNumber": "1541282036",
            "date": "2025-02-03",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "4192",
                        "name": "$5 PC Money/1"
                    },
                    "quantity": 10,
                    "total": 50
                }
            ]
        },
        {
            "orderNumber": "46932223325376",
            "date": "2025-02-03",
            "customer": {
                "firstName": "Simona",
                "lastName": "Rasocha"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100841",
                        "name": "Coated Tomato Knife"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "1519",
                        "name": "Flexible Cutting Mat Set"
                    },
                    "quantity": 1,
                    "total": 22
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "101109",
                        "name": "Electric Milk Frother"
                    },
                    "quantity": 1,
                    "total": 89
                }
            ]
        },
        {
            "orderNumber": "68504977051625",
            "date": "2025-02-03",
            "customer": {
                "firstName": "Judy",
                "lastName": "Gibb"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100503",
                        "name": "Lemon Garlic Rub"
                    },
                    "quantity": 1,
                    "total": 4.8
                },
                {
                    "product": {
                        "sku": "9664",
                        "name": "Chili Lime Rub"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100505",
                        "name": "Everything Bagel Seasoning"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "100808",
                        "name": "Garlic Parmesan Seasoning"
                    },
                    "quantity": 1,
                    "total": 7
                },
                {
                    "product": {
                        "sku": "9713",
                        "name": "All-Purpose Dill Mix"
                    },
                    "quantity": 1,
                    "total": 7
                }
            ]
        },
        {
            "orderNumber": "77937688633144",
            "date": "2025-02-03",
            "customer": {
                "firstName": "Lynn",
                "lastName": "Dennis"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100737",
                        "name": "Large Round Stone"
                    },
                    "quantity": 1,
                    "total": 59.5
                }
            ]
        },
        {
            "orderNumber": "88730282825610",
            "date": "2025-02-03",
            "customer": {
                "firstName": "Elizabeth",
                "lastName": "Vrancik"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100909",
                        "name": "Spreading Knife Set"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 20
                }
            ]
        },
        {
            "orderNumber": "91030715838753",
            "date": "2025-02-03",
            "customer": {
                "firstName": "Susan",
                "lastName": "Hunt"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100777",
                        "name": "Tortilla Soup Mix"
                    },
                    "quantity": 1,
                    "total": 5.6
                },
                {
                    "product": {
                        "sku": "101221",
                        "name": "Linzer Cookie Cutter Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "9666",
                        "name": "Teriyaki Sauce with Honey"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "101139",
                        "name": "Sweet Onion Sauce US"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "101149",
                        "name": "Stainless Steel Measuring Scoop Set"
                    },
                    "quantity": 1,
                    "total": 30
                },
                {
                    "product": {
                        "sku": "100726",
                        "name": "Plastic Mixing Bowl Set"
                    },
                    "quantity": 1,
                    "total": 66
                }
            ]
        },
        {
            "orderNumber": "99627041517435",
            "date": "2025-02-03",
            "customer": {
                "firstName": "Laura",
                "lastName": "Walton"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1771",
                        "name": "Large Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 16.2
                }
            ]
        },
        {
            "orderNumber": "20745072406441",
            "date": "2025-02-04",
            "customer": {
                "firstName": "Jade",
                "lastName": "Stacey"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 22.5
                },
                {
                    "product": {
                        "sku": "101234",
                        "name": "Electric Twist & Chop"
                    },
                    "quantity": 1,
                    "total": 89.1
                }
            ]
        },
        {
            "orderNumber": "36870736137569",
            "date": "2025-02-04",
            "customer": {
                "firstName": "Tamara",
                "lastName": "Paluch"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100041",
                        "name": "Micro-Cooker® Set"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1642",
                        "name": "All-Purpose Spreader"
                    },
                    "quantity": 1,
                    "total": 6.5
                },
                {
                    "product": {
                        "sku": "100597",
                        "name": "Modular Sheet Pans"
                    },
                    "quantity": 1,
                    "total": 21
                },
                {
                    "product": {
                        "sku": "100251",
                        "name": "Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "101418",
                        "name": "*Utensil Starter Set"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "38755557275733",
            "date": "2025-02-04",
            "customer": {
                "firstName": "Jean",
                "lastName": "Wuertzer"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "9713",
                        "name": "All-Purpose Dill Mix"
                    },
                    "quantity": 1,
                    "total": 1.39
                },
                {
                    "product": {
                        "sku": "100819",
                        "name": "Sourdough Bread Mix NA"
                    },
                    "quantity": 1,
                    "total": 1.79
                },
                {
                    "product": {
                        "sku": "100836",
                        "name": "Bag Clip & Slicer Set"
                    },
                    "quantity": 1,
                    "total": 1.98
                },
                {
                    "product": {
                        "sku": "101138",
                        "name": "Chili Peach Sauce"
                    },
                    "quantity": 1,
                    "total": 3.18
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 3.18
                },
                {
                    "product": {
                        "sku": "101159",
                        "name": "Gourmet Cherry Almond Syrup"
                    },
                    "quantity": 1,
                    "total": 3.33
                },
                {
                    "product": {
                        "sku": "1174",
                        "name": "Burger & Slider Press"
                    },
                    "quantity": 1,
                    "total": 3.38
                },
                {
                    "product": {
                        "sku": "100023",
                        "name": "Powdered Sugar Shaker"
                    },
                    "quantity": 1,
                    "total": 3.87
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 3.97
                },
                {
                    "product": {
                        "sku": "101173",
                        "name": "Java Chip Frappe Drink Mix"
                    },
                    "quantity": 1,
                    "total": 3.97
                },
                {
                    "product": {
                        "sku": "100600",
                        "name": "Bowl & Bench Scraper Set"
                    },
                    "quantity": 1,
                    "total": 4.86
                },
                {
                    "product": {
                        "sku": "100090",
                        "name": "1-qt. (1-L)Cool & Serve Bowl"
                    },
                    "quantity": 1,
                    "total": 5.96
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 8.95
                },
                {
                    "product": {
                        "sku": "101198",
                        "name": "*Brownie Pan Set"
                    },
                    "quantity": 1,
                    "total": 10.93
                },
                {
                    "product": {
                        "sku": "101113",
                        "name": "Large Grill Pan"
                    },
                    "quantity": 1,
                    "total": 12.92
                },
                {
                    "product": {
                        "sku": "1577",
                        "name": "5\" (13cm) Santoku Knife"
                    },
                    "quantity": 1,
                    "total": 13.82
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 13.92
                },
                {
                    "product": {
                        "sku": "100773",
                        "name": "2 Piece Cookware Set"
                    },
                    "quantity": 1,
                    "total": 31.8
                },
                {
                    "product": {
                        "sku": "101234",
                        "name": "Electric Twist & Chop"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "56791363800813",
            "date": "2025-02-04",
            "customer": {
                "firstName": "Mary",
                "lastName": "Frisby"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "5231",
                        "name": "$25 Kit Credit/US"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 22.5
                }
            ]
        },
        {
            "orderNumber": "57792421667111",
            "date": "2025-02-04",
            "customer": {
                "firstName": "Stacie",
                "lastName": "Watson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1794",
                        "name": "Cake Tester & Releaser"
                    },
                    "quantity": 1,
                    "total": 1.25
                },
                {
                    "product": {
                        "sku": "100201",
                        "name": "Microwave Grip Set"
                    },
                    "quantity": 1,
                    "total": 1.55
                },
                {
                    "product": {
                        "sku": "100836",
                        "name": "Bag Clip & Slicer Set"
                    },
                    "quantity": 1,
                    "total": 1.56
                },
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 2.03
                },
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 1,
                    "total": 2.03
                },
                {
                    "product": {
                        "sku": "100688",
                        "name": "Small Silicone Spatula"
                    },
                    "quantity": 1,
                    "total": 2.5
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 3.12
                },
                {
                    "product": {
                        "sku": "101214",
                        "name": "Brilliance Nonstick Metal Bakeware Set 6pc"
                    },
                    "quantity": 1,
                    "total": 59.6
                },
                {
                    "product": {
                        "sku": "100833",
                        "name": "Deluxe Stand Mixer"
                    },
                    "quantity": 1,
                    "total": 62.25
                }
            ]
        },
        {
            "orderNumber": "63902075522348",
            "date": "2025-02-04",
            "customer": {
                "firstName": "Nancy",
                "lastName": "Davenport Ganiko"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100836",
                        "name": "Bag Clip & Slicer Set"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "2571",
                        "name": "Toaster Tongs"
                    },
                    "quantity": 2,
                    "total": 10.8
                },
                {
                    "product": {
                        "sku": "1114",
                        "name": "Kernel Cutter"
                    },
                    "quantity": 1,
                    "total": 13.5
                },
                {
                    "product": {
                        "sku": "2583",
                        "name": "Mix 'N Chop"
                    },
                    "quantity": 1,
                    "total": 14.4
                },
                {
                    "product": {
                        "sku": "2432",
                        "name": "Small Batter Bowl"
                    },
                    "quantity": 1,
                    "total": 15.3
                },
                {
                    "product": {
                        "sku": "100678",
                        "name": "Stainless Steel Egg Separator"
                    },
                    "quantity": 1,
                    "total": 17.1
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 22.5
                },
                {
                    "product": {
                        "sku": "100221",
                        "name": "Stone Loaf Pan"
                    },
                    "quantity": 1,
                    "total": 31.5
                },
                {
                    "product": {
                        "sku": "1593",
                        "name": "Kitchen Shears"
                    },
                    "quantity": 1,
                    "total": 32.4
                },
                {
                    "product": {
                        "sku": "101234",
                        "name": "Electric Twist & Chop"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "68399207146421",
            "date": "2025-02-04",
            "customer": {
                "firstName": "Dawn",
                "lastName": "Hoffmann"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 3.04
                },
                {
                    "product": {
                        "sku": "100201",
                        "name": "Microwave Grip Set"
                    },
                    "quantity": 1,
                    "total": 3.8
                },
                {
                    "product": {
                        "sku": "101159",
                        "name": "Gourmet Cherry Almond Syrup"
                    },
                    "quantity": 1,
                    "total": 6.39
                },
                {
                    "product": {
                        "sku": "2956",
                        "name": "Sauté Tongs"
                    },
                    "quantity": 1,
                    "total": 6.47
                },
                {
                    "product": {
                        "sku": "2613",
                        "name": "Small Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 15.22
                },
                {
                    "product": {
                        "sku": "101216",
                        "name": "8\" Brilliance Nonstick Square Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "2585",
                        "name": "Food Chopper"
                    },
                    "quantity": 1,
                    "total": 17.13
                },
                {
                    "product": {
                        "sku": "100128",
                        "name": "Lazy Susan"
                    },
                    "quantity": 1,
                    "total": 19.03
                },
                {
                    "product": {
                        "sku": "100263",
                        "name": "2.5-qt. (2.4-L) Insulated Serving Bowl"
                    },
                    "quantity": 2,
                    "total": 45.66
                }
            ]
        },
        {
            "orderNumber": "83109061331777",
            "date": "2025-02-04",
            "customer": {
                "firstName": "Kellie",
                "lastName": "Chandler"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100429",
                        "name": "Beer Bread Mix"
                    },
                    "quantity": 1,
                    "total": 2.16
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100597",
                        "name": "Modular Sheet Pans"
                    },
                    "quantity": 1,
                    "total": 21
                },
                {
                    "product": {
                        "sku": "100807",
                        "name": "Silicone Utensil Set"
                    },
                    "quantity": 1,
                    "total": 21.75
                },
                {
                    "product": {
                        "sku": "100837",
                        "name": "Coated Knife Set"
                    },
                    "quantity": 1,
                    "total": 26.64
                },
                {
                    "product": {
                        "sku": "101418",
                        "name": "*Utensil Starter Set"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "88612012758098",
            "date": "2025-02-04",
            "customer": {
                "firstName": "Carrie",
                "lastName": "Jacobs"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100035",
                        "name": "Kitchen Paring Knife Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "100130",
                        "name": "Cut-N-Seal"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                }
            ]
        },
        {
            "orderNumber": "16411345577575",
            "date": "2025-02-05",
            "customer": {
                "firstName": "Michelle",
                "lastName": "Simmons"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101297",
                        "name": "Season's Best"
                    },
                    "quantity": 1,
                    "total": 2
                },
                {
                    "product": {
                        "sku": "100843",
                        "name": "Twixit! Clip Set"
                    },
                    "quantity": 1,
                    "total": 13
                },
                {
                    "product": {
                        "sku": "2705",
                        "name": "Meat Tenderizer"
                    },
                    "quantity": 1,
                    "total": 35
                }
            ]
        },
        {
            "orderNumber": "18925455038967",
            "date": "2025-02-05",
            "customer": {
                "firstName": "Kathy",
                "lastName": "Wood"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "5231",
                        "name": "$25 Kit Credit/US"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100667",
                        "name": "9x13 (23x33-cm) Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 19.75
                },
                {
                    "product": {
                        "sku": "101234",
                        "name": "Electric Twist & Chop"
                    },
                    "quantity": 1,
                    "total": 39.6
                }
            ]
        },
        {
            "orderNumber": "19085196603571",
            "date": "2025-02-05",
            "customer": {
                "firstName": "Dianne",
                "lastName": "Willis"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2013",
                        "name": "Stainless Steel Rotating Utensil Holder"
                    },
                    "quantity": 1,
                    "total": 39
                }
            ]
        },
        {
            "orderNumber": "43861111096400",
            "date": "2025-02-05",
            "customer": {
                "firstName": "Sandy",
                "lastName": "Smith"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100269",
                        "name": "Citrus Peeler"
                    },
                    "quantity": 1,
                    "total": 3
                },
                {
                    "product": {
                        "sku": "2571",
                        "name": "Toaster Tongs"
                    },
                    "quantity": 1,
                    "total": 6
                },
                {
                    "product": {
                        "sku": "100201",
                        "name": "Microwave Grip Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100675",
                        "name": "Utensil Clip"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100478",
                        "name": "Cheese Knife"
                    },
                    "quantity": 1,
                    "total": 17
                },
                {
                    "product": {
                        "sku": "101118",
                        "name": "Stainless Steel Tongs Set"
                    },
                    "quantity": 1,
                    "total": 19
                },
                {
                    "product": {
                        "sku": "100090",
                        "name": "1-qt. (1-L)Cool & Serve Bowl"
                    },
                    "quantity": 1,
                    "total": 30
                }
            ]
        },
        {
            "orderNumber": "66698110746684",
            "date": "2025-02-05",
            "customer": {
                "firstName": "Christina",
                "lastName": "Toms"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1142",
                        "name": "Scoop Loop®"
                    },
                    "quantity": 1,
                    "total": 0.6
                },
                {
                    "product": {
                        "sku": "2571",
                        "name": "Toaster Tongs"
                    },
                    "quantity": 1,
                    "total": 0.73
                },
                {
                    "product": {
                        "sku": "1001",
                        "name": "Bar Board"
                    },
                    "quantity": 1,
                    "total": 1.76
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 3.04
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 3.04
                },
                {
                    "product": {
                        "sku": "100001",
                        "name": "Snack Bar Maker Set"
                    },
                    "quantity": 1,
                    "total": 3.88
                },
                {
                    "product": {
                        "sku": "100844",
                        "name": "Decorating Bag Set"
                    },
                    "quantity": 1,
                    "total": 4.25
                },
                {
                    "product": {
                        "sku": "100271",
                        "name": "Digital Kitchen Scale"
                    },
                    "quantity": 1,
                    "total": 4.26
                },
                {
                    "product": {
                        "sku": "100248",
                        "name": "1-qt. (1-L) Enameled Cast Iron Baker"
                    },
                    "quantity": 1,
                    "total": 5
                },
                {
                    "product": {
                        "sku": "100847",
                        "name": "On-the-Go 2-qt. (1.9-L) Serving Bowl"
                    },
                    "quantity": 1,
                    "total": 7.28
                },
                {
                    "product": {
                        "sku": "100375",
                        "name": "Rectangular Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 7.29
                }
            ]
        },
        {
            "orderNumber": "81184663372816",
            "date": "2025-02-05",
            "customer": {
                "firstName": "Brenda",
                "lastName": "Coffman"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1001",
                        "name": "Bar Board"
                    },
                    "quantity": 1,
                    "total": 14.5
                },
                {
                    "product": {
                        "sku": "100193",
                        "name": "Easy-Read Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "12840859177021",
            "date": "2025-02-06",
            "customer": {
                "firstName": "Dawn",
                "lastName": "Fisher"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101221",
                        "name": "Linzer Cookie Cutter Set"
                    },
                    "quantity": 1,
                    "total": 4.42
                },
                {
                    "product": {
                        "sku": "1656",
                        "name": "Mini Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 5.31
                },
                {
                    "product": {
                        "sku": "2225",
                        "name": "Measure-All® Cup"
                    },
                    "quantity": 1,
                    "total": 5.75
                },
                {
                    "product": {
                        "sku": "1659",
                        "name": "Small Mix 'N Scraper®"
                    },
                    "quantity": 1,
                    "total": 6.64
                },
                {
                    "product": {
                        "sku": "100674",
                        "name": "Silicone Pancake Turner"
                    },
                    "quantity": 1,
                    "total": 7.08
                },
                {
                    "product": {
                        "sku": "101235",
                        "name": "Cup Zester"
                    },
                    "quantity": 1,
                    "total": 8.84
                },
                {
                    "product": {
                        "sku": "2595",
                        "name": "Citrus Press"
                    },
                    "quantity": 1,
                    "total": 10.18
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 11.05
                },
                {
                    "product": {
                        "sku": "100830",
                        "name": "Extra-Large Scoop"
                    },
                    "quantity": 1,
                    "total": 11.06
                },
                {
                    "product": {
                        "sku": "100835",
                        "name": "Spatula Tongs"
                    },
                    "quantity": 1,
                    "total": 11.5
                },
                {
                    "product": {
                        "sku": "100536",
                        "name": "*Whisk Set"
                    },
                    "quantity": 1,
                    "total": 12.82
                },
                {
                    "product": {
                        "sku": "100537",
                        "name": "*Scraper Set"
                    },
                    "quantity": 1,
                    "total": 15.26
                },
                {
                    "product": {
                        "sku": "2705",
                        "name": "Meat Tenderizer"
                    },
                    "quantity": 1,
                    "total": 15.48
                },
                {
                    "product": {
                        "sku": "100667",
                        "name": "9x13 (23x33-cm) Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 17.48
                },
                {
                    "product": {
                        "sku": "100279",
                        "name": "Numbers and Letters Cake Pan"
                    },
                    "quantity": 1,
                    "total": 19.25
                },
                {
                    "product": {
                        "sku": "101112",
                        "name": "Modular Grill Pans"
                    },
                    "quantity": 1,
                    "total": 53.09
                },
                {
                    "product": {
                        "sku": "100593",
                        "name": "14\"x10\"(35cmX25cm)Enameled Cast Iron Pan"
                    },
                    "quantity": 1,
                    "total": 57.22
                },
                {
                    "product": {
                        "sku": "101214",
                        "name": "Brilliance Nonstick Metal Bakeware Set 6pc"
                    },
                    "quantity": 1,
                    "total": 59.6
                },
                {
                    "product": {
                        "sku": "100734",
                        "name": "4-qt. (3.8-L) Nonstick Sauce Pan"
                    },
                    "quantity": 1,
                    "total": 64.15
                }
            ]
        },
        {
            "orderNumber": "32303103834237",
            "date": "2025-02-06",
            "customer": {
                "firstName": "Liz",
                "lastName": "Valsamidis"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100503",
                        "name": "Lemon Garlic Rub"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100601",
                        "name": "Hand Pie & Pocket Maker"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "9807",
                        "name": "Spicy Pineapple Rum Sauce"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101216",
                        "name": "8\" Brilliance Nonstick Square Pan With Lid"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "101198",
                        "name": "*Brownie Pan Set"
                    },
                    "quantity": 1,
                    "total": 27.5
                },
                {
                    "product": {
                        "sku": "100896",
                        "name": "Electric Pop & Stir"
                    },
                    "quantity": 1,
                    "total": 49.5
                }
            ]
        },
        {
            "orderNumber": "95943220647416",
            "date": "2025-02-06",
            "customer": {
                "firstName": "Kim",
                "lastName": "Foley"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "2635",
                        "name": "Stainless Steel Mini Whipper"
                    },
                    "quantity": 1,
                    "total": 9
                },
                {
                    "product": {
                        "sku": "100201",
                        "name": "Microwave Grip Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "100911",
                        "name": "Funnels With Strainer"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2622",
                        "name": "Mini Serving Spatula"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "101124",
                        "name": "Serrated Nylon Knife"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100480",
                        "name": "Baster"
                    },
                    "quantity": 1,
                    "total": 14
                },
                {
                    "product": {
                        "sku": "101228",
                        "name": "Pivoting Peeler"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "1114",
                        "name": "Kernel Cutter"
                    },
                    "quantity": 1,
                    "total": 15
                },
                {
                    "product": {
                        "sku": "100483",
                        "name": "Sauce Whisk"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "100676",
                        "name": "Mix 'N Chop Spatula"
                    },
                    "quantity": 1,
                    "total": 18
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "2427",
                        "name": "Apple Wedger"
                    },
                    "quantity": 1,
                    "total": 22
                },
                {
                    "product": {
                        "sku": "1303",
                        "name": "Pizza & Crust Cutter"
                    },
                    "quantity": 1,
                    "total": 24.5
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "100537",
                        "name": "*Scraper Set"
                    },
                    "quantity": 1,
                    "total": 34.5
                },
                {
                    "product": {
                        "sku": "2797",
                        "name": "Stainless Steel Mesh Colander Set"
                    },
                    "quantity": 1,
                    "total": 42
                }
            ]
        },
        {
            "orderNumber": "97322482779469",
            "date": "2025-02-06",
            "customer": {
                "firstName": "Ashley",
                "lastName": "Lamberth"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 0.53
                },
                {
                    "product": {
                        "sku": "100190",
                        "name": "Measure, Mix & Pour"
                    },
                    "quantity": 1,
                    "total": 1.74
                },
                {
                    "product": {
                        "sku": "100577",
                        "name": "Coating Trays & Tongs"
                    },
                    "quantity": 1,
                    "total": 2.68
                },
                {
                    "product": {
                        "sku": "100292",
                        "name": "Stoneware Starter Set"
                    },
                    "quantity": 1,
                    "total": 46
                }
            ]
        },
        {
            "orderNumber": "10008777101731",
            "date": "2025-02-07",
            "customer": {
                "firstName": "Christine",
                "lastName": "Beil"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "5231",
                        "name": "$25 Kit Credit/US"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "1542772636",
            "date": "2025-02-07",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "CS1251",
                        "name": "$50 PC Dollars/1 (US)"
                    },
                    "quantity": 2,
                    "total": 100
                }
            ]
        },
        {
            "orderNumber": "68696322042484",
            "date": "2025-02-07",
            "customer": {
                "firstName": "Kim",
                "lastName": "Foley"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100258",
                        "name": "Pan Scraper Set (set of 3)"
                    },
                    "quantity": 1,
                    "total": 0.05
                },
                {
                    "product": {
                        "sku": "1142",
                        "name": "Scoop Loop®"
                    },
                    "quantity": 1,
                    "total": 0.05
                },
                {
                    "product": {
                        "sku": "100808",
                        "name": "Garlic Parmesan Seasoning"
                    },
                    "quantity": 1,
                    "total": 0.06
                },
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 0.07
                },
                {
                    "product": {
                        "sku": "101158",
                        "name": "Gourmet Brown Sugar Syrup"
                    },
                    "quantity": 1,
                    "total": 0.16
                },
                {
                    "product": {
                        "sku": "101159",
                        "name": "Gourmet Cherry Almond Syrup"
                    },
                    "quantity": 1,
                    "total": 0.16
                },
                {
                    "product": {
                        "sku": "101160",
                        "name": "Gourmet Limoncello Syrup"
                    },
                    "quantity": 1,
                    "total": 0.16
                },
                {
                    "product": {
                        "sku": "101125",
                        "name": "Flexible Basting Bottle"
                    },
                    "quantity": 1,
                    "total": 0.18
                },
                {
                    "product": {
                        "sku": "100597",
                        "name": "Modular Sheet Pans"
                    },
                    "quantity": 1,
                    "total": 0.39
                },
                {
                    "product": {
                        "sku": "100916",
                        "name": "Stone Square Baker"
                    },
                    "quantity": 1,
                    "total": 0.4
                },
                {
                    "product": {
                        "sku": "100178",
                        "name": "10\" Cast Iron Skillet"
                    },
                    "quantity": 1,
                    "total": 0.47
                },
                {
                    "product": {
                        "sku": "100351",
                        "name": "Rapid Prep Mandoline"
                    },
                    "quantity": 1,
                    "total": 35
                },
                {
                    "product": {
                        "sku": "100292",
                        "name": "Stoneware Starter Set"
                    },
                    "quantity": 1,
                    "total": 57.5
                },
                {
                    "product": {
                        "sku": "101419",
                        "name": "*Cutlery Basics Set"
                    },
                    "quantity": 1,
                    "total": 79.5
                },
                {
                    "product": {
                        "sku": "100125",
                        "name": "Deluxe Cooking Blender"
                    },
                    "quantity": 1,
                    "total": 139.6
                }
            ]
        },
        {
            "orderNumber": "88264021117126",
            "date": "2025-02-07",
            "customer": {
                "firstName": "Mindy",
                "lastName": "Bladorn"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1142",
                        "name": "Scoop Loop®"
                    },
                    "quantity": 1,
                    "total": 0.51
                },
                {
                    "product": {
                        "sku": "100198",
                        "name": "Silicone Oven Mitt Set"
                    },
                    "quantity": 1,
                    "total": 4
                },
                {
                    "product": {
                        "sku": "2613",
                        "name": "Small Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 4.04
                },
                {
                    "product": {
                        "sku": "100121",
                        "name": "Instant Read Food Thermometer"
                    },
                    "quantity": 1,
                    "total": 26
                },
                {
                    "product": {
                        "sku": "2725",
                        "name": "*Grilling Tool Set"
                    },
                    "quantity": 1,
                    "total": 34.8
                },
                {
                    "product": {
                        "sku": "101420",
                        "name": "*Cookie Baking Set"
                    },
                    "quantity": 1,
                    "total": 39.6
                },
                {
                    "product": {
                        "sku": "101109",
                        "name": "Electric Milk Frother"
                    },
                    "quantity": 1,
                    "total": 44.5
                }
            ]
        },
        {
            "orderNumber": "89881125087490",
            "date": "2025-02-07",
            "customer": {
                "firstName": "Martha",
                "lastName": "Ring"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1071",
                        "name": "Vegetable Peeler"
                    },
                    "quantity": 1,
                    "total": 13.5
                },
                {
                    "product": {
                        "sku": "100687",
                        "name": "Silicone Scoop & Serve Spatula"
                    },
                    "quantity": 1,
                    "total": 16
                },
                {
                    "product": {
                        "sku": "100285",
                        "name": "Deluxe Air Fryer Skewers"
                    },
                    "quantity": 1,
                    "total": 22
                },
                {
                    "product": {
                        "sku": "100272",
                        "name": "Flex+ Multi-Prep Set"
                    },
                    "quantity": 1,
                    "total": 119
                }
            ]
        },
        {
            "orderNumber": "OE_ORDER_LINES_ALL741825011",
            "date": "2025-02-10",
            "customer": {
                "firstName": "Stacy",
                "lastName": "Itzel"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "MR26",
                        "name": "NB17 Sales Pin/US"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "29211338420050",
            "date": "2025-02-11",
            "customer": {
                "firstName": "Cyndi",
                "lastName": "Williams"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100504",
                        "name": "Guacamole Mix"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100520",
                        "name": "Donut Mix"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1406",
                        "name": "Mini Nylon Serving Spatula-Teal"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101172",
                        "name": "Brownie Bite Pan"
                    },
                    "quantity": 1,
                    "total": 14.75
                }
            ]
        },
        {
            "orderNumber": "76146790319937",
            "date": "2025-02-11",
            "customer": {
                "firstName": "Laura",
                "lastName": "Waton"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101239",
                        "name": "Nesting Spoon Rest Set"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "27228180806055",
            "date": "2025-02-12",
            "customer": {
                "firstName": "Kerri",
                "lastName": "Johnson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "101159",
                        "name": "Gourmet Cherry Almond Syrup"
                    },
                    "quantity": 1,
                    "total": 16.8
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100943",
                        "name": "Almond Pound Cake Mix"
                    },
                    "quantity": 2,
                    "total": 22
                }
            ]
        },
        {
            "orderNumber": "24114539965569",
            "date": "2025-02-13",
            "customer": {
                "firstName": "Erin",
                "lastName": "Crossley"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100363",
                        "name": "Mesh Produce Bags"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "100809",
                        "name": "Honey Sriracha Seasoning"
                    },
                    "quantity": 1,
                    "total": 3.85
                },
                {
                    "product": {
                        "sku": "100504",
                        "name": "Guacamole Mix"
                    },
                    "quantity": 1,
                    "total": 4.33
                },
                {
                    "product": {
                        "sku": "1523",
                        "name": "Small Flexible Cutting Mat Set"
                    },
                    "quantity": 1,
                    "total": 5.77
                },
                {
                    "product": {
                        "sku": "1114",
                        "name": "Kernel Cutter"
                    },
                    "quantity": 1,
                    "total": 7.21
                },
                {
                    "product": {
                        "sku": "100842",
                        "name": "Coated Utility Knife"
                    },
                    "quantity": 1,
                    "total": 8.65
                },
                {
                    "product": {
                        "sku": "2257",
                        "name": "Measuring Cup Set"
                    },
                    "quantity": 1,
                    "total": 9.61
                },
                {
                    "product": {
                        "sku": "100840",
                        "name": "Coated Santoku Knife"
                    },
                    "quantity": 1,
                    "total": 10.58
                },
                {
                    "product": {
                        "sku": "100860",
                        "name": "Cup Slicer"
                    },
                    "quantity": 1,
                    "total": 12.02
                },
                {
                    "product": {
                        "sku": "1767",
                        "name": "Half Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 16.83
                },
                {
                    "product": {
                        "sku": "1593",
                        "name": "Kitchen Shears"
                    },
                    "quantity": 1,
                    "total": 17.3
                },
                {
                    "product": {
                        "sku": "100597",
                        "name": "Modular Sheet Pans"
                    },
                    "quantity": 1,
                    "total": 20.19
                },
                {
                    "product": {
                        "sku": "100251",
                        "name": "Pizza Stone"
                    },
                    "quantity": 1,
                    "total": 24.04
                },
                {
                    "product": {
                        "sku": "1591",
                        "name": "Wood Cutting Board"
                    },
                    "quantity": 1,
                    "total": 35.83
                },
                {
                    "product": {
                        "sku": "100230",
                        "name": "Rockcrok Starter Set"
                    },
                    "quantity": 1,
                    "total": 88.96
                },
                {
                    "product": {
                        "sku": "PB2082",
                        "name": "Stainless Steel Nonstick Wok (#100111)"
                    },
                    "quantity": 1,
                    "total": 96
                },
                {
                    "product": {
                        "sku": "100850",
                        "name": "*Rockcrok 4-qt. Slow Cooker Set"
                    },
                    "quantity": 1,
                    "total": 103.38
                }
            ]
        },
        {
            "orderNumber": "70427268353003",
            "date": "2025-02-13",
            "customer": {
                "firstName": "Tara",
                "lastName": "Miller"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "5231",
                        "name": "$25 Kit Credit/US"
                    },
                    "quantity": 1,
                    "total": 0
                }
            ]
        },
        {
            "orderNumber": "14610005136419",
            "date": "2025-02-14",
            "customer": {
                "firstName": "Paul",
                "lastName": "White"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101238",
                        "name": "Kitchen Towel Set"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100929",
                        "name": "Prep & Store System"
                    },
                    "quantity": 1,
                    "total": 180
                },
                {
                    "product": {
                        "sku": "100539",
                        "name": "Enameled Cast Iron Set"
                    },
                    "quantity": 1,
                    "total": 187.85
                }
            ]
        },
        {
            "orderNumber": "77987916768712",
            "date": "2025-02-14",
            "customer": {
                "firstName": "Wanda",
                "lastName": "Griffin"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100260",
                        "name": "Easy Accent® Decorator"
                    },
                    "quantity": 1,
                    "total": 36
                }
            ]
        },
        {
            "orderNumber": "51382445716821",
            "date": "2025-02-15",
            "customer": {
                "firstName": "Laurie",
                "lastName": "Eastman"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "2613",
                        "name": "Small Square Cool & Serve"
                    },
                    "quantity": 1,
                    "total": 40
                }
            ]
        },
        {
            "orderNumber": "60570176448663",
            "date": "2025-02-16",
            "customer": {
                "firstName": "Merrill",
                "lastName": "Craig"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100832",
                        "name": "Dual-Sided Cleaning Brush"
                    },
                    "quantity": 1,
                    "total": 8
                }
            ]
        },
        {
            "orderNumber": "65083694287302",
            "date": "2025-02-16",
            "customer": {
                "firstName": "Joanna",
                "lastName": "Champagne"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "100201",
                        "name": "Microwave Grip Set"
                    },
                    "quantity": 1,
                    "total": 10
                },
                {
                    "product": {
                        "sku": "2258",
                        "name": "Adjustable Measuring Spoon Set"
                    },
                    "quantity": 1,
                    "total": 12
                },
                {
                    "product": {
                        "sku": "100913",
                        "name": "Whisk Tongs"
                    },
                    "quantity": 1,
                    "total": 25
                },
                {
                    "product": {
                        "sku": "2797",
                        "name": "Stainless Steel Mesh Colander Set"
                    },
                    "quantity": 1,
                    "total": 42
                }
            ]
        },
        {
            "orderNumber": "37228033489084",
            "date": "2025-02-17",
            "customer": {
                "firstName": "Russ",
                "lastName": "Anderson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1771",
                        "name": "Large Sheet Pan"
                    },
                    "quantity": 1,
                    "total": 27
                }
            ]
        },
        {
            "orderNumber": "65259023828912",
            "date": "2025-02-17",
            "customer": {
                "firstName": "Christy",
                "lastName": "Anderson"
            },
            "currency": "USD",
            "lineItems": [
                {
                    "product": {
                        "sku": "1166",
                        "name": "Slice 'N Serve®"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "1704",
                        "name": "Mini Skinny Scraper"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "PB2415",
                        "name": "Host Bonus Mystery Gift/2'25/NA"
                    },
                    "quantity": 1,
                    "total": 0
                },
                {
                    "product": {
                        "sku": "101158",
                        "name": "Gourmet Brown Sugar Syrup"
                    },
                    "quantity": 1,
                    "total": 4.84
                },
                {
                    "product": {
                        "sku": "100862",
                        "name": "Beer Bread Mix Trio"
                    },
                    "quantity": 1,
                    "total": 5.78
                },
                {
                    "product": {
                        "sku": "100384",
                        "name": "Stone Bar Pan"
                    },
                    "quantity": 1,
                    "total": 20
                },
                {
                    "product": {
                        "sku": "100272",
                        "name": "Flex+ Multi-Prep Set"
                    },
                    "quantity": 1,
                    "total": 59.5
                },
                {
                    "product": {
                        "sku": "100539",
                        "name": "Enameled Cast Iron Set"
                    },
                    "quantity": 1,
                    "total": 93.92
                }
            ]
        }
    ]
}

// const orderHistory = [
//     {
//       "orderNumber": "1052776",
//       "userId": "user123",
//       "productTitle": "Nonstick Fry Pan 10-Inch",
//       "category": "Cookware",
//       "price": 45.99,
//       "currency": "USD",
//       "description": "Durable nonstick fry pan ideal for everyday cooking, easy to clean and PFOA-free."
//     },
//     {
//       "orderNumber": "1052865",
//       "userId": "user123",
//       "productTitle": "Mixing Bowl Set with Lids",
//       "category": "Kitchen Tools",
//       "price": 32.50,
//       "currency": "USD",
//       "description": "Set of 3 mixing bowls with airtight lids, perfect for baking, mixing, and storing."
//     },
//     {
//       "orderNumber": "1052998",
//       "userId": "user123",
//       "productTitle": "Stoneware Baking Dish",
//       "category": "Bakeware",
//       "price": 54.00,
//       "currency": "USD",
//       "description": "Heavy-duty stoneware dish for casseroles, lasagna, and oven-to-table serving."
//     },
//     {
//       "orderNumber": "1053883",
//       "userId": "user123",
//       "productTitle": "Pampered Chef Chef's Knife",
//       "category": "Cutlery",
//       "price": 69.95,
//       "currency": "USD",
//       "description": "Professional chef's knife with ergonomic handle and stainless-steel blade."
//     },
//     {
//       "orderNumber": "1575352186",
//       "userId": "user123",
//       "productTitle": "Manual Food Processor",
//       "category": "Food Prep",
//       "price": 64.99,
//       "currency": "USD",
//       "description": "Chop, mix, and blend ingredients quickly with this manual hand-powered processor."
//     },
//     {
//       "orderNumber": "207629G0002",
//       "userId": "user123",
//       "productTitle": "Cast Iron Skillet 12-Inch",
//       "category": "Cookware",
//       "price": 79.00,
//       "currency": "USD",
//       "description": "Pre-seasoned cast iron skillet for even heat distribution and versatile cooking."
//     },
//     {
//       "orderNumber": "59221960870839",
//       "userId": "user123",
//       "productTitle": "Garlic Press with Cleaning Tool",
//       "category": "Kitchen Tools",
//       "price": 24.95,
//       "currency": "USD",
//       "description": "Effortlessly press garlic cloves with a sturdy design and included cleaning tool."
//     }
//   ]

app.get('/health', (req, res) => {
    res.send({
        success: true,
        message: 'Server is running'
    })
})


app.get('/GetOrderHistory/orders', (req, res) => {
    try {
        const { globalId, startDate, endDate } = req.query;

        // Validate globalId is provided
        if (!globalId) {
            return res.status(400).json({
                success: false,
                error: 'Bad Request',
                message: 'globalId parameter is required'
            });
        }

        // Only return data for specific globalId (1621989), empty array for others
        let filteredOrders = [];
        
        if (globalId === "1621989") {
            filteredOrders = orderHistory.data;

            // Filter by date range if provided
            if (startDate || endDate) {
                filteredOrders = orderHistory.data.filter(order => {
                    const orderDate = new Date(order.date);
                    let includeOrder = true;

                    if (startDate) {
                        const start = new Date(startDate);
                        includeOrder = includeOrder && orderDate >= start;
                    }

                    if (endDate) {
                        const end = new Date(endDate);
                        includeOrder = includeOrder && orderDate <= end;
                    }

                    return includeOrder;
                });
            }
        }
        // For any other globalId, filteredOrders remains empty array []

        // Return results
        if (filteredOrders.length > 0) {
            // Return with metadata when there's data
            res.json({
                success: true,
                data: filteredOrders,
                metadata: {
                    globalId: globalId,
                    totalResults: filteredOrders.length,
                    appliedFilters: {
                        startDate: startDate || null,
                        endDate: endDate || null
                    }
                }
            });
        } else {
            // Return without metadata when data is empty
            res.json({
                success: true,
                data: []
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            message: error.message
        });
    }
})

app.get('/api/empty', (req, res) => {
    res.json({
        success: true,
        data: []
    });
})


app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})