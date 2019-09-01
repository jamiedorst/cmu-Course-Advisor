const lunch_sides = {
  side1:["Chicken Rice Soup", "Hot and Sour Soup", "Chicken Noodle Soup","Can of Soda", "Egg Roll", "Wonton Soup", "Egg Drop Soup"],
  side2:["Pork Fried Rice", "Steamed White Rice", "Brown Rice"]
};
const menu_info = {
  tabs: {
    "All Dishes": {
      cat: ["Appetizers", "Soup","Fried Rice","Chop Suey","Lo Mein","Chow Mei Fun","Chow Ho Fun","Chicken","Pork",
  "Beef","Seafood","Vegetable","Bean Curd","Egg Foo Young"]
    },
    "Diet Menu": {
      cat:["Diet_Vegetable", "Diet_Chicken", "Diet_Beef", "Diet_Seafood"],
      description: "Steamed Vegetable Served With Brown Rice"

    },

    "American Chinese Specials": {
      cat: ["American_Chicken", "American_Pork", "American_Seafood" ]
    },


    "Chef Specialties":{
      description: "Served With White Rice",
      cat:["Chef_Appetizer","Chef_Chicken", "Chef_Beef", "Chef_Seafood", "Chef_Mixed"],
    },

    "Combination Plates":{
      description:"Served with egg roll and pork fried rice",
      cat:["Comb_Appetizer", "Comb_Chicken", "Comb_Beef", "Comb_Pork", "Comb_Seafood"],
    },

    "Party Menu":{
      description: "Easy tray serves 6-8 people",
      cat:["Party_Chicken", "Party_Beef", "Party_Pork","Party_Seafood", "Party_Vegetable" ],
    },

    "Lunch Special":{
      description: "Served with choice of soup, soda or egg roll and rice",
      cat:["Lunch_Beef", "Lunch_Chicken", "Lunch_Pork", "Lunch_Tofu", "Lunch_Seafood", "Lunch_Vegetable"],
    }

  },
  cats: {
    "Appetizers": {
      displayed_name: "Appetizers",
      items:["Spring Roll","Egg Roll","Shrimp Roll",
    "Fried Wontons","Chicken Dumplings","Vegetable Dumblings",
    "Fried Dumplings","Steamed Dumplings","Roast Pork Sliced",
    "B-B-Q Spare Ribs","Cold Noodles Sesame Sauce","Pu-Pu Platter",
    "Shrimp Toasts","Teriyaki Beef Steaks",
    "B-B-Q Boneless Spare Ribs","Crab Rangoon (Cheese Dumplings)",
    "Scallion Pancake","Pan Fired Wontons in Hot Oil","French Fries",
    "Apple Sticks"]
    },

    "Soup": {
      displayed_name: "Soup",
      items: ["Wonton Soup","Egg Drop Soup","Chicken Rice Soup","Chicken Noodle Soup",
      "Wonton Egg Drop Soup","Bean Curd with Mixed Vegetable Soup",
      "Seafood with Vegetable Soup","House Special Wonton Sooup",
      "Fresh Pork Yat Gaw Mein","Roast Pork Yat Gaw Mein","Chicken Yat Gaw Mein",
      "Shrimp Yat Gaw Mein","Beef Yat Gaw Mein","Vegetable Yat Gaw Mein",
      "Hot and Sour Soup"]
    },

    "Fried Rice": {
      displayed_name: "Fried Rice",
      items: ["Onion Fried Rice","Plain Fried Rice","Vegetable Fried Rice",
      "Roast Pork Fried Rice","Chicken Fried Rice","Crab Meat Fried Rice",
      "Shrimp Fried Rice","Beef Fried Rice","House Special Fried Rice",
      "Yeung Chow Fried Rice",],
    },

    "Chop Suey":{
      displayed_name: "Chop Suey",
      items: ["Roast Pork Chop Suey","White Meat Chicken Chop Suey",
      "Vegetable Chop Suey","Shrimp Chop Suey","Beef Chop Suey","House Special Chop Suey",],
    },

    "Lo Mein": {
      displayed_name: "Lo Mein",
      items: ["Vegetable Lo Mein","Roast Pork Lo Mein","Chicken Lo Mein","Beef Lo Mein",
      "Shrimp Lo Mein","Crab Meat Lo Mein","House Special Lo Mein"],
    },

    "Chow Mei Fun": {
      displayed_name: "Chow Mei Fun",
      items: ["Vegetable Mei Fun", "Pork Mei Fun", "Chicken Mei Fun",
      "Shrimp Mei Fun", "Beef Mei Fun", "Subgum Mei Fun","Crab Meat Mei Fun",
      "Singapore Mei Fun"],
    },


    "Chow Ho Fun": {
      displayed_name: "Chow Ho Fun",
      items: ["Vegetable Ho Fun","Pork Ho Fun",
      "Chicken Ho Fun","Shrimp Ho Fun","Beef Ho Fun","Subgum Ho Fun",
      "Crab Meat Ho Fun"],
    },


    "Chicken": {
      displayed_name: "Chicken",
      items: ["White Meat Chicken with Brown Sauce", "Sweet and Sour Chicken",
      "Chicken with Broccoli", "Chicken with Black Bean Sauce",
      "Chicken with Snow Peas", "Chicken with Cashew Nuts", "Chicken with Mushrooms",
      "Chicken with Mixed Vegetables", "Moo Goo Gai Pan", "Chicken with String Beans",
      "Chicken Mixed Vegetable Pan Fried Noodles (no rice)",
      "Chicken and Shrimp with Mixed Vegetables", "Moo Shu Chicken with 4 Pancakes",
      "Boneless Chicken", "Lemon Chicken", "Chicken with Garlic Sauce",
      "Chicken with Curry Sauce", "Chicken Eggplant with Garlic Sauce",
      "Twice Cooked Chicken with Cabbage", "Kung Bo Chicken", "Hunan Chicken",
      "Szechuan Chicken",],
    },

    "Pork": {
      displayed_name: "Pork",
      items: ["Sweet and Sour Pork", "Roast Pork with Mixed Vegetables",
      "Roast Pork with Mushrooms", "Roast Pork with Broccoli",
      "Roast Pork with Snow Peas", "Roast Pork with String Beans",
      "Pork with Scallions", "Rib Tips with Black Bean Sauce",
      "Moo Shu Pork with 4 Pancakes", "Roast Pork with Garlic Sauce",
      "Roast Pork Eggplant with Garlic Sauce", "Roast Pork Hunan Style",
      "Szechuan Spare Rib Tips", "Twice Cooked Pork with Cabbage", ],

    },

    "Beef": {
      displayed_name: "Beef",
      items: ["Pepper Steak with Onions", "Beef with Chinese Vegetables",
      "Beef with Mushrooms", "Beef with Broccoli", "Beef with Snow Peas",
      "Beef with Black Bean Sauce", "Beef with Scallions",
      "Beef with String Beans", "Moo Shu Beef with 4 Pancakes",
      "Beef with Garlic Sauce", "Beef with Curry Sauce", "Hot Spiced Beef",
      "Szechuan Beef", "Hunan Beef", "Beef with Eggplant in Garlic Sauce", ],
    },


    "Seafood": {
      displayed_name: "Seafood",
      items: ["Sweet and Sour Shrimp", "Shrimp with Lobster Sauce",
      "Shrimp with Black Bean Sauce", "Shrimp with Chinese Vegetables",
      "Shrimp with Mixed Vegetables", "Shrimp with Broccoli",
      "Shrimp with Snow Peas", "Shrimp with Cashew Nuts",
      "Scallops with Broccoli", "Moo Shu Shrimp (with 4 pancakes)",
      "Shrimp with Garlic Sauce", "Scallops with Garlic Sauce",
      "Shrimp Eggplant with Garlic Sauce", "Shrimp with Curry Sauce",],
    },


    "Vegetable": {
      displayed_name: "Vegetable",
      items: ["Broccoli with Oyster Sauce", "Sauteed Mixed Vegetables",
      "Sauteed Snow Peas",
      "Broccoli, String Beans and Snow Peas sauteed in Garlic Sauce",
      "Tofu String Beans with Cashew Nuts",
      "Onion Mushroom Mixed Vegetables Pan Fried Noodles (no rice)",
      "Moo Shu Vegetables (with 4 pancakes)", "Broccoli with Garlic Sauce",
      "Eggplant with Garlic Sauce", "String Beans with Garlic Sauce", ],
    },


    "Bean Curd": {
      displayed_name: "Bean Curd",
      items: ["Broccoli and Tofu with Oyster Sauce",
      "Chicken with Bean Curd", "Roast Pork with Bean Curd",
      "Shrimp with Bean Curd", "Beef with Bean Curd",
      "Eggplant Tofu with Black Bean Sauce", "Bean Curd Home Style",
      "Crispy Tofu with Curry Sauce", "Bean Curd Szechuan Style",
      "Ma Po Tofu (with meat)", "General Tsos Tofu", ],
    },


    "Egg Foo Young": {
      displayed_name: "Egg Foo Young",
      items: ["Vegetable Egg Foo Young", "Roast Pork Egg Foo Young",
      "Chicken Egg Foo Young", "Beef Egg Foo Young", "Shrimp Egg Foo Young",
      "House Special Egg Foo Young", "Crab Meat Egg Foo Young", ],
    },

    "Diet_Vegetable":{
      displayed_name: "Vegetable",
      items:["Steamed Mixed Vegetables"],
    },
    "Diet_Chicken":{
      displayed_name: "Chicken",
      items:["Chicken with Broccoli","Chicken with Mixed Vegetables", "Chicken with String Beans"],
    },
    "Diet_Beef":{
      displayed_name: "Beef",
      items:["Steamed Beef Sliced"],
    },
    "Diet_Seafood":{
      displayed_name: "Seafood",
      items:["Jumbo Shrimp with Snow Peas",
      "Shrimp with Broccoli",
      "Shrimp with Mixed Vegetables", "Scallops and Shrimp with Mixed Vegetables"],
    },

    "American_Chicken":{
      displayed_name: "Chicken",
      items:["1/2 Fried Chicken",
      "Shrimp with Broccoli","Fried Chicken Wings","Teriyaki Chicken",
      "B.B.Q. Chicken Wings",],
    },
    "American_Pork":{
      displayed_name: "Pork",
      items:["Barbeque Tips",],
    },
    "American_Seafood": {
      displayed_name: "Seafood",
      items: [
      "Fried Jumbo Shrimps", "Fried Scallops", "Club Seafood",],
    },
    "Chef_Seafood":{
      displayed_name: "Seafood",
      items:["Crispy General Tsos Fish", "Ocean Triple Delight", "Green Jade Shrimp",
        "Seafood Pan Fried Noodles (no rice)", "Coral Shrimp",
        "Butterfly Shrimp with Bacon", "Sesame Shrimp",
        "Crispy General Tsos Shrimp",  "Hunan Scallops and Shrimp",
        "Hot Spicy Shrimp with Chili Sauce"],
    },
    "Chef_Chicken":{
      displayed_name: "Chicken",
      items: ["Sesame Chicken","General Tsos Chicken",
      "Chicken with Orange Flavor","Pineapple Chicken", "Tai Ching Chicken"],
    },
    "Chef_Beef":{
      displayed_name: "Beef",
      items: ["Crispy Orange Flavor Beef", "Sesame Beef", ]
    },
    "Chef_Mixed":{
      displayed_name: "Mixed",
      items: ["Shrimp, Chicken, Beef Hunan Style", "Happy Family", "Dragon and Phoenix","Hunan Scallops and Beef", ]
    },
    "Chef_Appetizer":{
      displayed_name: "Appetizer",
      items: ["Subgum Wonton","Chow Sam Din"]
    },



    "Comb_Appetizer":{
      displayed_name: "Appetizer",
      items: ["Fried Dumplings Combination Plate", "Steamed Dumplings Combination Plate", ]
    },
    "Comb_Seafood":{
      displayed_name: "Seafood",
      items:["Shrimp Chop Suey Combination Plate",
      "Shrimp with Lobster Sauce Combination Plate",
      "Shrimp Egg Foo Young Combination Plate",
      "Shrimp Lo Mein Combination Plate",
      "Shrimp with Broccoli Combination Plate",],
    },
    "Comb_Chicken":{
      displayed_name: "Chicken",
      items: ["Chicken Chop Suey Combination Plate",
      "Chicken with Black Bean Sauce Combination Plate",
      "Sweet and Sour Chicken Combination Plate",
      "Chicken with String Beans Combination Plate",
      "Chicken Lo Mein Combination Plate",
      "Moo Goo Gai Pan Combination Plate",
      "Chicken with Cashew Nuts Combination Plate",
      "Chicken with Broccoli Combination Plate",
      "Chicken with Mixed Vegetables Combination Plate",
      "Chicken with Garlic Sauce Combination Plate",
      "General Tsos Chicken Combination Plate",
      "Sesame Chicken Combination Plate", "Kung Bo Chicken Combination Plate",],
    },
    "Comb_Beef":{
      displayed_name: "Beef",
      items: ["Pepper Steak with Onions Combination Plate",
      "Beef Lo Mein Combination Plate",
      "Beef with Broccoli Combination Plate",
      "Beef with Garlic Sauce Combination Plate",
      "Beef with Mushrooms Combination Plate",
      "Orange Flavored Beef Combination Plate",
      "Beef with Mixed Vegetables Combination Plate", ]
    },
    "Comb_Pork":{
      displayed_name: "Pork",
      items:["Barbecued Spare Ribs Combination Plate",
      "Boneless Ribs Combination Plate",
      "Sweet and Sour Pork Combination Plate",
      "Roast Pork Lo Mein Combination Plate",]
    },

    "Party_Seafood":{
      displayed_name: "Seafood",
      items:["Shrimp Fried Rice Party Tray", "Shrimp Lo Mein Party Tray",
      "Sweet and Sour Shrimp Party Tray", "Shrimp with Broccoli Party Tray",],
    },
    "Party_Chicken":{
      displayed_name: "Chicken",
      items: ["Chicken Fried Rice Party Tray", "Chicken Lo Mein Party Tray",
      "Sweet and Sour Chicken Party Tray", "Chicken with Broccoli Party Tray",
      "Chicken with Cashew Nuts Party Tray", "Sesame Chicken Party Tray",
      "General Tsos Chicken Party Tray", "Orange Flavor Chicken", ],
    },
    "Party_Beef":{
      displayed_name: "Beef",
      items: ["Beef Fried Rice Party Tray", "Beef Lo Mein Party Tray",
      "Beef with Broccoli Party Tray", "Pepper Steak Party Tray",
      "Beef with Mixed Vegetables Party Tray", "Orange Flavor Beef Party Tray", ]
    },
    "Party_Pork":{
      displayed_name: "Pork",
      items: ["Roast Pork Fried Rice Party Tray","Roast Pork Lo Mein Party Tray",
      "Sweet and Sour Pork Party Tray", ]
    },
    "Party_Vegetable":{
      displayed_name: "Vegetable",
      items: ["Four Season Vegetable Party Tray", ]
    },


    "Lunch_Tofu":{
      displayed_name: "Tofu",
      items: ["Lunch Ma Po Tofu", "Lunch Crispy Tofu with Curry Sauce",
      "Lunch Broccoli Tofu with Black Bean Sauce", ]
    },
    "Lunch_Seafood":{
      displayed_name: "Seafood",
      items:["Lunch Shrimp Chop Suey", "Lunch Shrimp with Cashew Nuts",
      "Lunch Shrimp Lo Mein (No Rice)", "Lunch Shrimp with Broccoli",
      "Lunch Baby Shrimp with Chili Sauce", "Lunch Sesame Shrimp",
      "Lunch Shrimp with Lobster Sauce","Lunch Crispy Fish with Garlic Sauce",
      "Lunch Crispy Fish with General Taos Sauce", ],
    },
    "Lunch_Chicken":{
      displayed_name: "Chicken",
      items: ["Lunch Chicken Chop Suey", "Lunch Chicken with Broccoli",
      "Lunch Chicken with Garlic Sauce", "Lunch Kung Bo Chicken",
      "Lunch Chicken Egg Foo Young", "Lunch Chicken Lo Mein (No Rice)",
      "Lunch Chicken with Bean Curd", "Lunch Moo Goo Gai Pan",
      "Lunch Chicken with Cashew Nuts", "Lunch Sweet and Sour Chicken",
      "Lunch Chicken with Mixed Vegetables",
      "Lunch Chicken Eggplant with Garlic Sauce","Lunch General Taos Chicken",
      "Lunch Sesame Chicken", "Lunch Orange Chicken",],
    },
    "Lunch_Beef":{
      displayed_name: "Beef",
      items: ["Lunch Beef with Broccoli","Lunch Beef Lo Mein (No Rice)",
      "Lunch Beef with Garlic Sauce", "Lunch Pepper Steak with Onions",
      "Lunch Beef with Chinese Vegetables",
      "Lunch Shredded Beef with Hot Spicy Sauce", ]
    },
    "Lunch_Pork":{
      displayed_name: "Pork",
      items: ["Lunch Roast Pork with Garlic Sauce",
      "Lunch Roasted Pork with String Beans",
      "Lunch Roasted Pork Egg Foo Young", "Lunch Roast Pork Lo Mein (No Rice)",
      "Lunch Roasted Pork Hunan Style", "Lunch Sweet and Sour Pork",
      "Lunch Roasted Pork with Mixed Vegetables", "Lunch Boneless Ribs", ]
    },
    "Lunch_Vegetable":{
      displayed_name: "Vegetable",
      items: ["Lunch Broccoli with Garlic Sauce",
      "Lunch Eggplant with Garlic Sauce", "Lunch Sauteed Mixed Vegetables", ]
    },


  },
  items: {
    "Spring Roll": {
      price: {
        sm: 1.50,
      },
      description:"Only vegetable",
    },
    "Egg Roll":{
      price:{
        sm: 1.50,
      }
    },
    "Shrimp Roll":{
      price:{
        sm: 1.50,
      }
    },
    "Fried Wontons": {
      price: {
        sm: 3.00,
      },
      description:"Contains 8 wontons",
    },
    "Chicken Dumplings": {
      price: {
        sm: 4.95,
      },
      description:"Contains 8 dumplings",
    },
    "Vegetable Dumblings": {
      price: {
        sm: 4.50,
      },
      description:"Contains 8 dumplings",

    },

    "Fried Dumplings": {
      price: {
        sm: 4.50,
      },
      description:"Contains 8 dumplings",
    },
    "Steamed Dumplings": {
      price: {
        sm: 4.50,
      },
      description:"Contains 8 dumplings",
    },
    "Roast Pork Sliced": {
      price: {
        sm: 6.00,
        lg: 10.00
      }
    },
    "B-B-Q Spare Ribs": {
      price: {
        sm: 6.00,
        lg: 10.00
      }
    },
    "Cold Noodles Sesame Sauce": {
      price: {
        sm: 4.50,
      }
    },
    "Pu-Pu Platter": {
      price: {
        sm: 12.50,
      },
      description: "2 spare ribs, 2 egg rolls, 2 jumbo shrimps, 4 crab ragoons, 2 shrimp toast, 2 teritaki steaks, 2 chicken wings."
    },
    "Shrimp Toasts": {
      price: {
        sm: 3.00,
      },
      description:"Contains 4 toasts",
    },
    "Teriyaki Beef Steaks": {
      price: {
        sm: 4.00,
        lg: 6.00
      },
      description:"Contains 2 steaks for small order and 4 steaks for large order",
    },
    "B-B-Q Boneless Spare Ribs": {
      price: {
        sm: 6.00,
        lg: 10.00
      }
    },
    "Crab Rangoon (Cheese Dumplings)": {
      price: {
        sm: 3.95,
      },
      description:"Contains 6 dumplings",
    },
    "Scallion Pancake": {
      price: {
        sm: 3.95,
      }
    },
    "Pan Fired Wontons in Hot Oil": {
      price: {
        sm: 4.50,
      },
      description:"Contains 10 wontons",
    },
    "French Fries": {
      price: {
        sm: 2.75,
        lg: 3.50
      }
    },
    "Apple Sticks": {
      price: {
        sm: 2.75,
        lg: 3.50
      },
      description:"Contains 8 for small order and 15 for large order",
    },
    "Wonton Soup": {
      price: {
        sm: 1.50,
        lg: 2.75
      }
    },
    "Egg Drop Soup": {
      price: {
        sm: 1.50,
        lg: 2.75
      }
    },
    "Chicken Rice Soup": {
      price: {
        sm: 1.50,
        lg: 2.75
      }
    },
    "Chicken Noodle Soup": {
      price: {
        sm: 1.50,
        lg: 2.75
      }
    },
    "Wonton Egg Drop Soup": {
      price: {
        sm: 2.00,
        lg: 3.50
      }
    },
    "Bean Curd with Mixed Vegetable Soup": {
      price: {
        sm: 2.00,
        lg: 3.50
      }
    },
    "Seafood with Vegetable Soup": {
      price: {
        sm: 6.50,
      }
    },
    "House Special Wonton Sooup": {
      price: {
        sm: 6.50,
      }
    },
    "Fresh Pork Yat Gaw Mein": {
      price: {
        sm: 4.95,
      }
    },
    "Roast Pork Yat Gaw Mein": {
      price: {
        sm: 4.50,
      }
    },
    "Chicken Yat Gaw Mein": {
      price: {
        sm: 4.50,
      }
    },
    "Shrimp Yat Gaw Mein": {
      price: {
        sm: 4.95,
      }
    },
    "Beef Yat Gaw Mein": {
      price: {
        sm: 4.95,
      }
    },
    "Vegetable Yat Gaw Mein": {
      price: {
        sm: 4.50,
      }
    },
    "Hot and Sour Soup": {
      price: {
        sm: 3.50,
      }
    },
    "Onion Fried Rice": {
      price: {
        sm: 3.50,
        lg: 6.50
      }
    },
    "Plain Fried Rice": {
      price: {
        sm: 3.50,
        lg: 6.50
      }
    },
    "Vegetable Fried Rice": {
      price: {
        sm: 3.95,
        lg: 6.85
      }
    },
    "Roast Pork Fried Rice": {
      price: {
        sm: 3.95,
        lg: 6.85
      }
    },
    "Chicken Fried Rice": {
      price: {
        sm: 3.95,
        lg: 6.85
      }
    },
    "Crab Meat Fried Rice": {
      price: {
        sm: 4.95,
        lg: 7.85
      }
    },
    "Shrimp Fried Rice": {
      price: {
        sm: 4.95,
        lg: 7.85
      }
    },
    "Beef Fried Rice": {
      price: {
        sm: 4.95,
        lg: 7.85
      }
    },
    "House Special Fried Rice": {
      price: {
        sm: 4.95,
        lg: 7.85
      }
    },
    "Yeung Chow Fried Rice": {
      price: {
        sm: 4.95,
        lg: 7.85
      }
    },
    "Roast Pork Chop Suey": {
      price: {
        sm: 4.95,
        lg: 7.85
      }
    },
    "White Meat Chicken Chop Suey": {
      price: {
        sm: 4.95,
        lg: 7.85
      }
    },
    "Vegetable Chop Suey": {
      price: {
        sm: 4.95,
        lg: 7.85
      }
    },
    "Shrimp Chop Suey": {
      price: {
        sm: 5.60,
        lg: 8.50
      }
    },
    "Beef Chop Suey": {
      price: {
        sm: 5.60,
        lg: 8.50
      }
    },
    "House Special Chop Suey": {
      price: {
        sm: 5.60,
        lg: 8.50
      }
    },
    "Vegetable Lo Mein": {
      price: {
        sm: 4.95,
        lg: 7.85
      }
    },
    "Roast Pork Lo Mein": {
      price: {
        sm: 4.95,
        lg: 7.85
      }
    },
    "Chicken Lo Mein": {
      price: {
        sm: 4.95,
        lg: 7.85
      }
    },
    "Beef Lo Mein": {
      price: {
        sm: 5.60,
        lg: 8.50
      }
    },
    "Shrimp Lo Mein": {
      price: {
        sm: 5.60,
        lg: 8.50
      }
    },
    "Crab Meat Lo Mein": {
      price: {
        sm: 5.60,
        lg: 8.50
      }
    },
    "House Special Lo Mein": {
      price: {
        sm: 5.60,
        lg: 8.50
      }
    },
    "Vegetable Mei Fun": {
      price: {
        sm: 7.85
      }
    },
    "Pork Mei Fun": {
      price: {
        sm: 7.85
      }
    },
    "Chicken Mei Fun": {
      price: {
        sm: 7.85
      }
    },
    "Shrimp Mei Fun": {
      price: {
        sm: 8.50
      }
    },
    "Beef Mei Fun": {
      price: {
        sm: 8.50
      }
    },
    "Subgum Mei Fun": {
      price: {
        sm: 8.50
      }
    },
    "Crab Meat Mei Fun": {
      price: {
        sm: 8.50
      }
    },
    "Singapore Mei Fun": {
      price: {
        sm: 8.50
      }
    },
    "Vegetable Ho Fun": {
      price: {
        sm: 7.85
      }
    },
    "Pork Ho Fun": {
      price: {
        sm: 7.85
      }
    },
    "Chicken Ho Fun": {
      price: {
        sm: 7.85
      }
    },
    "Shrimp Ho Fun": {
      price: {
        sm: 8.50
      }
    },
    "Beef Ho Fun": {
      price: {
        sm: 8.50
      }
    },
    "Subgum Ho Fun": {
      price: {
        sm: 8.50
      }
    },
    "Crab Meat Ho Fun": {
      price: {
        sm: 8.50
      }
    },
    "White Meat Chicken with Brown Sauce":{
    	price:{
    		sm: 7.85,
        lg: 12.95
    	},
      description:"Comes with two sides?",
    },
    "Sweet and Sour Chicken":{
    	price:{
        sm: 6.10,
        lg: 9.25
    	}
    },
    "Chicken with Broccoli":{
    	price:{
    		sm: 6.10,
        lg: 9.25
    	}
    },
    "Chicken with Black Bean Sauce":{
    	price:{
        sm: 6.10,
        lg: 9.25
    	}
    },
    "Chicken with Snow Peas":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Chicken with Cashew Nuts":{
    	price:{
        sm: 6.10,
        lg: 9.25
    	}
    },
    "Chicken with Mushrooms":{
    	price:{
        sm: 6.10,
        lg: 9.25
    	}
    },
    "Chicken with Mixed Vegetables":{
    	price:{
        sm: 6.10,
        lg: 9.25
    	}
    },
    "Moo Goo Gai Pan":{
    	price:{
        sm: 9.25
    	}
    },
    "Chicken with String Beans":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Chicken Mixed Vegetable Pan Fried Noodles (no rice)":{
    	price:{
    		sm: 11.75,
    	}
    },
    "Chicken and Shrimp with Mixed Vegetables":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Moo Shu Chicken with 4 Pancakes":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Boneless Chicken":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Lemon Chicken":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Chicken with Garlic Sauce":{
    	price:{
        sm: 6.10,
        lg: 9.25
    	}
    },
    "Chicken with Curry Sauce":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Chicken Eggplant with Garlic Sauce":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Twice Cooked Chicken with Cabbage":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Kung Bo Chicken":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Hunan Chicken":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Szechuan Chicken":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Sweet and Sour Pork":{
    	price:{
    		sm: 6.10,
        lg: 9.25
    	}
    },
    "Roast Pork with Mixed Vegetables":{
    	price:{
        sm: 6.10,
        lg: 9.25
    	}
    },
    "Roast Pork with Mushrooms":{
    	price:{
        sm: 6.10,
        lg: 9.25
    	}
    },
    "Roast Pork with Broccoli":{
    	price:{
        sm: 6.10,
        lg: 9.25
    	}
    },
    "Roast Pork with Snow Peas":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Roast Pork with String Beans":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Pork with Scallions":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Rib Tips with Black Bean Sauce":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Moo Shu Pork with 4 Pancakes":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Roast Pork with Garlic Sauce":{
    	price:{
    		sm: 9.25,
        lg: 6.10
    	}
    },
    "Roast Pork Eggplant with Garlic Sauce":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Roast Pork Hunan Style":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Szechuan Spare Rib Tips":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Twice Cooked Pork with Cabbage":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Pepper Steak with Onions":{
    	price:{
    		sm: 6.85,
        lg: 10.50
    	}
    },
    "Beef with Chinese Vegetables":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Beef with Mushrooms":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Beef with Broccoli":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Beef with Snow Peas":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Beef with Black Bean Sauce":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Beef with Scallions":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Beef with String Beans":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Moo Shu Beef with 4 Pancakes":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Beef with Garlic Sauce":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Beef with Curry Sauce":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Hot Spiced Beef":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Szechuan Beef":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Hunan Beef":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Beef with Eggplant in Garlic Sauce":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Sweet and Sour Shrimp":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Shrimp with Lobster Sauce":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Shrimp with Black Bean Sauce":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Shrimp with Chinese Vegetables":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Shrimp with Mixed Vegetables":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Shrimp with Broccoli":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Shrimp with Snow Peas":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Shrimp with Cashew Nuts":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Scallops with Broccoli":{
    	price:{
    		sm: 13.95,
    	}
    },
    "Moo Shu Shrimp (with 4 pancakes)":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Shrimp with Garlic Sauce":{
    	price:{
        sm: 6.85,
        lg: 10.50
    	}
    },
    "Scallops with Garlic Sauce":{
    	price:{
    		sm: 13.95,
    	}
    },
    "Shrimp Eggplant with Garlic Sauce":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Shrimp with Curry Sauce":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Broccoli with Oyster Sauce":{
    	price:{
    		sm: 5.60,
        lg: 7.85
    	}
    },
    "Sauteed Mixed Vegetables":{
    	price:{
        sm: 5.60,
        lg: 7.85
    	}
    },
    "Sauteed Snow Peas":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Broccoli, String Beans and Snow Peas sauteed in Garlic Sauce":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Tofu String Beans with Cashew Nuts":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Onion Mushroom Mixed Vegetables Pan Fried Noodles (no rice)":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Moo Shu Vegetables (with 4 pancakes)":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Broccoli with Garlic Sauce":{
    	price:{
    		sm: 5.60,
        lg: 7.85
    	}
    },
    "Eggplant with Garlic Sauce":{
    	price:{
    		sm: 7.85,
    	}
    },
    "String Beans with Garlic Sauce":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Broccoli and Tofu with Oyster Sauce":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Chicken with Bean Curd":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Roast Pork with Bean Curd":{
    	price:{
    		sm: 9.25,
    	}
    },
    "Shrimp with Bean Curd":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Beef with Bean Curd":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Eggplant Tofu with Black Bean Sauce":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Bean Curd Home Style":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Crispy Tofu with Curry Sauce":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Bean Curd Szechuan Style":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Ma Po Tofu (with meat)":{
    	price:{
    		sm: 7.85,
    	}
    },
    "General Tsos Tofu":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Vegetable Egg Foo Young":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Roast Pork Egg Foo Young":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Chicken Egg Foo Young":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Beef Egg Foo Young":{
    	price:{
    		sm: 8.50,
    	}
    },
    "Shrimp Egg Foo Young":{
    	price:{
    		sm: 8.50,
    	}
    },
    "House Special Egg Foo Young":{
    	price:{
    		sm: 8.50,
    	}
    },
    "Crab Meat Egg Foo Young":{
    	price:{
    		sm: 8.50,
    	}
    },
    "Steamed Mixed Vegetables":{
    	price:{
    		sm: 8.35,
    	}
    },
    "Steamed Chicken with Broccoli":{
    	price:{
    		sm: 9.50,
    	}
    },
    "Jumbo Shrimp with Snow Peas":{
    	price:{
    		sm: 11.00,
    	}
    },
    "Steamed Chicken with Mixed Vegetables":{
    	price:{
    		sm: 9.50,
    	}
    },
    "Steamed Shrimp with Broccoli":{
    	price:{
    		sm: 11.00,
    	}
    },
    "Steamed Chicken with String Beans":{
    	price:{
    		sm: 9.50,
    	}
    },
    "Steamed Shrimp with Mixed Vegetables":{
    	price:{
    		sm: 11.00,
    	}
    },
    "Scallops and Shrimp with Mixed Vegetables":{
    	price:{
    		sm: 13.95,
    	}
    },
    "Steamed Beef Sliced":{
    	price:{
    		sm: 9.50,
        lg: 13.95
    	}
    },
    "1/2 Fried Chicken":{
    	price:{
    		sm: 4.5,
    	},
      addOn:{
        "French Fries": 6.1,
        "Fried Rice": 6.1,
        "Vegetable Fried Rice": 6.85,
        "Chicken Fried Rice": 6.85,
        "Pork Fried Rice": 6.85,
        "Beef Fried Rice": 7.85,
        "Shrimp Fried Rice": 7.85
      }

    },
    "Fried Chicken Wings":{
    	price:{
    		sm: 4.5,
    	},
      description: "There are 4 pieces.",
      addOn:{
        "French Fries": 6.1,
        "Fried Rice": 6.1,
        "Vegetable Fried Rice": 6.85,
        "Chicken Fried Rice": 6.85,
        "Pork Fried Rice": 6.85,
        "Beef Fried Rice": 7.85,
        "Shrimp Fried Rice": 7.85
      }
    },
    "Fried Jumbo Shrimps":{
    	price:{
    		sm: 4.5,
    	},
      description: "There are 5 pieces.",
      addOn:{
        "French Fries": 6.1,
        "Fried Rice": 6.1,
        "Vegetable Fried Rice": 6.85,
        "Chicken Fried Rice": 6.85,
        "Pork Fried Rice": 6.85,
        "Beef Fried Rice": 7.85,
        "Shrimp Fried Rice": 7.85
      }
    },
    "Barbeque Tips":{
    	price:{
    		sm: 4.5,
    	},
      addOn:{
        "French Fries": 6.1,
        "Fried Rice": 6.1,
        "Vegetable Fried Rice": 6.85,
        "Chicken Fried Rice": 6.85,
        "Pork Fried Rice": 6.85,
        "Beef Fried Rice": 7.85,
        "Shrimp Fried Rice": 7.85
      }
    },
    "Fried Scallops":{
    	price:{
    		sm: 4.5,
    	},
      description: "There are 10 pieces.",
      addOn:{
        "French Fries": 6.1,
        "Fried Rice": 6.1,
        "Vegetable Fried Rice": 6.85,
        "Chicken Fried Rice": 6.85,
        "Pork Fried Rice": 6.85,
        "Beef Fried Rice": 7.85,
        "Shrimp Fried Rice": 7.85
      }
    },
    "Teriyaki Chicken":{
    	price:{
    		sm: 4.5,
    	},
      addOn:{
        "French Fries": 6.1,
        "Fried Rice": 6.1,
        "Vegetable Fried Rice": 6.85,
        "Chicken Fried Rice": 6.85,
        "Pork Fried Rice": 6.85,
        "Beef Fried Rice": 7.85,
        "Shrimp Fried Rice": 7.85
      }
    },
    "B.B.Q. Chicken Wings":{
    	price:{
    		sm: 5.6,
    	},
      addOn:{
        "French Fries": 6.85,
        "Fried Rice": 6.85,
        "Vegetable Fried Rice": 7.85,
        "Chicken Fried Rice": 7.85,
        "Pork Fried Rice": 7.85,
        "Beef Fried Rice": 8.50,
        "Shrimp Fried Rice": 8.50
      }
    },
    "Shrimp, Chicken, Beef Hunan Style":{
    	price:{
    		sm: 10.50,
    	},
      description:"Sliced chicken, beef, shrimp sauteed with mixed vegetables in Hunan sauce."
    },
    "Crispy Orange Flavor Beef":{
    	price:{
    		sm: 12.95,
    	},
      description:"Tender fillet of marinated beef delicately sauteed and seasoned with imported orange peels"
    },
    "Sesame Beef":{
    	price:{
    		sm: 12.95,
    	},
      description:"Chunks of flank steak marinated with garlic, wine, brown bacon and hot peppers surrounded by broccoli flowers and sesame seeds."
    },
    "Club Seafood":{
    	price:{
    		sm: 13.95,
    	}
    },
    "Happy Family":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Sesame Chicken":{
    	price:{
    		sm: 10.50,
    	}
    },
    "General Tsos Chicken":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Chicken with Orange Flavor":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Subgum Wonton":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Chow Sam Din":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Crispy General Tsos Fish":{
    	price:{
    		sm: 12.95,
    	}
    },
    "Ocean Triple Delight":{
    	price:{
    		sm: 13.95,
    	},
      description:"Fillet scallops and shrimp sauteed with selected vegetables in white sauce."
    },
    "Pineapple Chicken":{
    	price:{
    		sm: 12.95,
    	}
    },
    "Dragon and Phoenix":{
    	price:{
    		sm: 10.50,
    	},
      description:"Genral Tsos chicken and shrimp in chili sauce."

    },
    "Green Jade Shrimp":{
    	price:{
    		sm: 12.95,
    	},
      description:"Jumbo shrimp sauteed with string beans, broccoli and snow peas in a special white sauce."
    },
    "Seafood Pan Fried Noodles (no rice)":{
    	price:{
    		sm: 13.95,
    	}
    },
    "Coral Shrimp":{
    	price:{
    		sm: 12.95,
    	}
    },
    "Butterfly Shrimp with Bacon":{
    	price:{
    		sm: 12.95,
    	}
    },
    "Sesame Shrimp":{
    	price:{
    		sm: 12.95,
    	}
    },
    "Crispy General Tsos Shrimp":{
    	price:{
    		sm: 12.95,
    	}
    },
    "Tai Ching Chicken":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Hunan Scallops and Beef":{
    	price:{
    		sm: 13.95,
    	}
    },
    "Hunan Scallops and Shrimp":{
    	price:{
    		sm: 13.95,
    	}
    },
    "Hot Spicy Shrimp with Chili Sauce":{
    	price:{
    		sm: 10.50,
    	}
    },
    "Chicken Chop Suey Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Shrimp Chop Suey Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Chicken with Black Bean Sauce Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Fried Dumplings Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Steamed Dumplings Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Pepper Steak with Onions Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Barbecued Spare Ribs Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Shrimp with Lobster Sauce Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Boneless Ribs Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Shrimp Egg Foo Young Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Sweet and Sour Pork Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Sweet and Sour Chicken Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Chicken with String Beans Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Roast Pork Lo Mein Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Chicken Lo Mein Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Shrimp Lo Mein Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Beef Lo Mein Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Moo Goo Gai Pan Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Chicken with Cashew Nuts Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Chicken with Broccoli Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Chicken with Mixed Vegetables Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Beef with Broccoli Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Chicken with Garlic Sauce Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Beef with Garlic Sauce Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "General Tsos Chicken Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Sesame Chicken Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Beef with Mushrooms Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Orange Flavored Beef Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Beef with Mixed Vegetables Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Shrimp with Broccoli Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Kung Bo Chicken Combination Plate":{
    	price:{
    		sm: 7.85,
    	}
    },
    "Roast Pork Fried Rice Party Tray":{
    	price:{
    		sm: 26.95,
    	}
    },
    "Chicken Fried Rice Party Tray":{
    	price:{
    		sm: 26.95,
    	}
    },
    "Beef Fried Rice Party Tray":{
    	price:{
    		sm: 30.95,
    	}
    },
    "Shrimp Fried Rice Party Tray":{
    	price:{
    		sm: 30.95,
    	}
    },
    "Roast Pork Lo Mein Party Tray":{
    	price:{
    		sm: 26.95,
    	}
    },
    "Chicken Lo Mein Party Tray":{
    	price:{
    		sm: 26.95,
    	}
    },
    "Beef Lo Mein Party Tray":{
    	price:{
    		sm: 30.95,
    	}
    },
    "Shrimp Lo Mein Party Tray":{
    	price:{
    		sm: 30.95,
    	}
    },
    "Four Season Vegetable Party Tray":{
    	price:{
    		sm: 26.95,
    	}
    },
    "Sweet and Sour Chicken Party Tray":{
    	price:{
    		sm: 36.95,
    	}
    },
    "Sweet and Sour Pork Party Tray":{
    	price:{
    		sm: 36.95,
    	}
    },
    "Chicken with Broccoli Party Tray":{
    	price:{
    		sm: 36.95,
    	}
    },
    "Chicken with Cashew Nuts Party Tray":{
    	price:{
    		sm: 36.95,
    	}
    },
    "Beef with Broccoli Party Tray":{
    	price:{
    		sm: 40.95,
    	}
    },
    "Pepper Steak Party Tray":{
    	price:{
    		sm: 40.95,
    	}
    },
    "Beef with Mixed Vegetables Party Tray":{
    	price:{
    		sm: 40.95,
    	}
    },
    "Sesame Chicken Party Tray":{
    	price:{
    		sm: 42.95,
    	}
    },
    "Orange Flavor Beef Party Tray":{
    	price:{
    		sm: 42.95,
    	}
    },
    "General Tsos Chicken Party Tray":{
    	price:{
    		sm: 42.95,
    	}
    },
    "Orange Flavor Chicken":{
    	price:{
    		sm: 42.95,
    	}
    },
    "Sweet and Sour Shrimp Party Tray":{
    	price:{
    		sm: 46.95,
    	}
    },
    "Shrimp with Broccoli Party Tray":{
    	price:{
    		sm: 46.95,
    	}
    },
    "Lunch Chicken Chop Suey":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Shrimp Chop Suey":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Shrimp with Cashew Nuts":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Roast Pork with Garlic Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Chicken with Broccoli":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Beef with Broccoli":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Shrimp Lo Mein (No Rice)":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Beef Lo Mein (No Rice)":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Chicken with Garlic Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Beef with Garlic Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Shrimp with Broccoli":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Baby Shrimp with Chili Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Pepper Steak with Onions":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Kung Bo Chicken":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Beef with Chinese Vegetables":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Ma Po Tofu":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Roasted Pork with String Beans":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Roasted Pork Egg Foo Young":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Chicken Egg Foo Young":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Roast Pork Lo Mein (No Rice)":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Chicken Lo Mein (No Rice)":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Chicken with Bean Curd":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Shredded Beef with Hot Spicy Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Moo Goo Gai Pan":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Chicken with Cashew Nuts":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Roasted Pork Hunan Style":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Sweet and Sour Chicken":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Sweet and Sour Pork":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Sesame Shrimp":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Shrimp with Lobster Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Roasted Pork with Mixed Vegetables":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Chicken with Mixed Vegetables":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Crispy Fish with Garlic Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Crispy Fish with General Taos Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Crispy Tofu with Curry Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Broccoli with Garlic Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Chicken Eggplant with Garlic Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Broccoli Tofu with Black Bean Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Eggplant with Garlic Sauce":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Sauteed Mixed Vegetables":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch General Taos Chicken":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Sesame Chicken":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Boneless Ribs":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },
    "Lunch Orange Chicken":{
    	price:{
    		sm: 6.10,
    	},
    	sides: lunch_sides
    },

    ItemD: {
      price: {
        sm: 4.0,
        lg: 8.95
      }
    },
  }
}
export default menu_info;
