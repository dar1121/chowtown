myResto : [
    {
      "restaurantName": "Portabello's",
      "deliveryTime": "50-65 min",
      "new": true,
      "cuisine": "Italian",
      "menuItems": [
        {
          "itemName": "Chicken Parmigiana",
          "description": "Topped with tomato sauce and mozzarella",
          "price": "$21.00",
        },
        {
          "itemName": "Spaghettini",
          "description": "Served with tomato basil sauce",
          "price": "$19.00",
        },
        {
          "itemName": "Chicken Paillard",
          "description": "Served with arugula, tomato, and onion",
          "price": "$22.00",
        },
        {
          "itemName": "Linguini",
          "description": "Choice of red or white clam sauce",
          "price": "$25.30",
        },
        {
          "itemName": "Ricotta Meatballs",
          "description": "Served with tomato basil sauce",
          "price": "$20.70",
        },
        {
          "itemName": "Caprese",
          "description": "Beefsteak tomatoes and buffalo mozzarella",
          "price": "$23.00",
        },
        {
          "itemName": "Gnocchi",
          "description": "$25.30",
          "price": "Served with fava beans, ricota salata, and zucchini flower",
        },
        {
          "itemName": "Wild Salmon",
          "description": "Wild mushrooms and cherry peppers.",
          "price": "$28.30",
        },
        {
          "itemName": "Calamari",
          "description": "Piccante",
          "price": "$21.85",
        },
        {
          "itemName": "Taglierini Cacio e Pepe",
          "description": "Parmigiano romano cheese and pepper",
          "price": "$27.60",
        },
        {
          "itemName": "Veal Chop Milanese",
          "description": "Topped with a light arugula salad",
          "price": "$29.50",
        },
      ]
    }
    {
      "restaurantName": "Royal Kitchen",
      "deliveryTime": "30-45 min",
      "new": false,
      "cuisine": "Chinese",
      "menuItems": [
        {
          "itemName": "General Tso's Chicken",
          "description": " ",
          "price": "$11.50",
        },
        {
          "itemName": "Sesame Chicken",
          "description": " ",
          "price": "$11.50",
        },
        {
          "itemName": "Dumplings",
          "description": "6 pieces",
          "price": "$9.50",
        },
        {
          "itemName": "Chicken Lo Mein",
          "description": " ",
          "price": "$7.75",
        },
        {
          "itemName": "Pork Fried Rice",
          "description": " ",
          "price": "$7.10",
        },
        {
          "itemName": "House Special Chow Fun",
          "description": " ",
          "price": "$9.45",
        },
        {
          "itemName": "Chicken Hunan Style",
          "description": " ",
          "price": "$11.50",
        },
        {
          "itemName": "Beef with Broccoli",
          "description": " ",
          "price": "$12.15",
        },
        {
          "itemName": "Curry Shrimp with Onion",
          "description": " ",
          "price": "$10.15",
        },
        {
          "itemName": "Shrimp with Beans Sprout",
          "description": " ",
          "price": "$10.15",
        },
        {
          "itemName": "Wonton Soup",
          "description": " ",
          "price": "$10.50",
        },
      ]
    }
    {
      "restaurantName": "Hole Kitchen",
      "deliveryTime": "20-35 min",
      "new": false,
      "cuisine": "American",
      "menuItems": [
        {
          "itemName": "Rustic Chicken",
          "description": "With potatoes, carrots, celery, leeks, thyme",
          "price": "$15.50",
        },
        {
          "itemName": "Salt & Pepper Chicken Sandwich",
          "description": "With roasted red peppers, aioli, on ciabatta",
          "price": "$11.00",
        },
        {
          "itemName": "Salumi Sandwich",
          "description": "P. Balistreri Salumi, mortadella, provolone, relish, aiolio, on ciabatta",
          "price": "$9.50",
        },
        {
          "itemName": "Avocado Toast",
          "description": "Avocado toast, topped with ricotta cheese, fresno chile, pickled onions, herbed salad and falk salt",
          "price": "$9.35",
        },
        {
          "itemName": "Wagyu",
          "description": "Wagyu sirloin, crispy smashed yukon gold potatoes, red chimichurri, frisee, shaved asparagus & arugula, warm bacon vinaigrette",
          "price": "$17.05",
        },
        {
          "itemName": "Seared Tuna",
          "description": "Seared rare",
          "price": "$8.25",
        },
        {
          "itemName": "Buttermilk Fried Chicken & Waffles",
          "description": "With spiced maple syrup",
          "price": "$14.50",
        },
        {
          "itemName": "Falafel Bowl",
          "description": "On a bed of sprouted brown rice",
          "price": "$13.15",
        },
        {
          "itemName": "Tabobuleh and Green Hummus Platter",
          "description": "With Celery",
          "price": "$8.20",
        },
        {
          "itemName": "Duck Shoulder",
          "description": "Farro and Sweet Potatoes",
          "price": "$15.45",
        },
        {
          "itemName": "Caprese Sandwich",
          "description": "Mozzarella, roasted tomatoes, arugula, aioli, on ciabatta",
          "price": "$10.45",
        },
      ]
    }
  ];

var rName, dTime, new, cuisine, mItems;



function loadResto() {
for (i = 0; i < myResto.length; i++) {
  var x = document.createElement('div');
  x.className = 'flex-item';
  x.innerHTML = 'testing';
  document.getElementById('flex-container').appendChild(x);
};
}




