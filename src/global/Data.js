export const filterData = [
  {
    name: "Fast food",
    image: require("../../assets/images/slide1.jpg"),
    id: "0",
  },
  {
    name: "Burgers",
    image: require("../../assets/images/slide1.jpg"),
    id: "1",
  },
  { name: "salads", image: require("../../assets/images/slide2.jpg"), id: "2" },
  { name: "Bakery", image: require("../../assets/images/slide3.jpg"), id: "3" },
  {
    name: "Ice cream",
    image: require("../../assets/images/slide3.jpg"),
    id: "4",
  },
  { name: "milk", image: require("../../assets/images/slide1.jpg"), id: "5" },
];

export const restaurantsData = [
  {
    restaurantName: "Meze fresh",
    farAway: "21.2",
    businessAddress: "kg 340, Kimihurura",
    images:
      "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543976/res-console.cloudinary_zfg3zp.jpg",
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: { lat: -26.1888612, lng: 28.246325 },
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: "Burgers, Wraps,Milkshakes...",
    productData: [
      {
        name: "Hand cut chips",
        price: 29.3,
        image:
          "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543924/fast-food_vcc4vf.jpg",
      },
      {
        name: "Big Mac",
        price: 50.8,
        image:
          "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543923/milk_piuflc.jpg",
      },
      {
        name: "Chicken Burger",
        price: 70,
        image:
          "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543976/res-console.cloudinary_zfg3zp.jpg",
      },
    ],
    id: 0,
  },

  {
    restaurantName: "KFC",
    farAway: "12.7",
    businessAddress: "Kg 435, Remera",
    images:
      "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543924/fast-food_vcc4vf.jpg",
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: { lat: -26.1891648, lng: 28.2441808 },
    discount: 20,
    deliveryTime: 30,
    collectTime: 10,
    foodType: "Chicken,Chicken wings... ",
    productData: [
      {
        name: "Hand cut chips",
        price: 29.3,
        image:
          "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543976/res-console.cloudinary_zfg3zp.jpg",
      },
      {
        name: "Big Mac",
        price: 50.8,
        image:
          "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543923/milk_piuflc.jpg",
      },
      {
        name: "Chicken Burger",
        price: 70,
        image:
          "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543923/burger_j9pxgq.jpg",
      },
    ],
    id: 1,
  },

  {
    restaurantName: "Camelia",
    farAway: "5",
    businessAddress: " KN 210, Downtown",
    images:
      "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543923/milk_piuflc.jpg",
    coordinates: { lat: -26.1886781, lng: 28.244879 },
    averageReview: 4.9,
    numberOfReview: 1272,
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: "Flame grilled beef Burgers",
    productData: [
      {
        name: "Hand cut chips",
        price: 29.3,
        image:
          "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543976/res-console.cloudinary_zfg3zp.jpg",
      },
      {
        name: "Big Mac",
        price: 50.8,
        image:
          "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543923/milk_piuflc.jpg",
      },
      {
        name: "Chicken Burger",
        price: 70,
        image:
          "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543923/burger_j9pxgq.jpg",
      },
    ],
    id: 2,
  },

  {
    restaurantName: "American burger planet",
    farAway: "7",
    businessAddress: "kg 610, kimihurura",
    images:
      "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543976/res-console.cloudinary_zfg3zp.jpg",
    averageReview: 4.3,
    numberOfReview: 700,
    coordinates: { lat: -26.1845336, lng: 28.2481691 },
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: "Chicken pizza, Vegetarian pizza...",
    productData: [
      {
        name: "Hand cut chips",
        price: 29.3,
        image:
          "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543976/res-console.cloudinary_zfg3zp.jpg",
      },
      {
        name: "Big Mac",
        price: 50.8,
        image:
          "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543923/milk_piuflc.jpg",
      },
      {
        name: "Chicken Burger",
        price: 70,
        image:
          "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543923/burger_j9pxgq.jpg",
      },
    ],
    id: 3,
  },
];

export const menuData = [
  { title: "BEEF", special: false, key: 0 },
  { title: "CHICKEN", special: false, key: 1 },
  { title: "VEGGIE BURGER", special: false, key: 2 },
  { title: "FRIES& CORN", special: false, key: 3 },
  { title: "SALADS", special: false, key: 4 },
  { title: "HAPPY MEALS", special: false, key: 5 },
  { title: "SAHRE BOX", special: false, key: 6 },
  { title: "MILKSHAKES", special: false, key: 7 },
  { title: "COLD DRINKS", special: false, key: 8 },
  { title: "DESSERTS", special: false, key: 9 },
  { title: "HOT DRINKS", special: false, key: 10 },
];

export const specialData = [
  { title: "LIMITED OFFER", key: 0 },
  { title: "GO CHILLI", key: 1 },
  { title: "GO CHEESE", key: 2 },
  { title: "MCCHICKEN DELUXE PROMO", key: 3 },
];

export const menu = [
  { key: 1, title: "BEEF" },
  { key: 2, title: "CHICKEN" },
  { key: 3, title: "VEGGIE BURGER" },
  { key: 4, title: "SHARE BOX" },
  { key: 5, title: "Happy Meals" },
  { key: 6, title: "Fries" },
  { key: 7, title: "Sides" },
  { key: 8, title: "Milkshakes" },
];

export const menuDetailedData = [
  {
    meal: "Big Mac",
    price: 70.2,
    image: "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543976/res-console.cloudinary_zfg3zp.jpg",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: [
      "Choose your 2 dips",
      "Choose your 1st drink flavour",
      "Choose your 2nd drink flavour",
      "Would you like to add a side?",
      "Would you Like any extra sauce?",
    ],
    preferenceData: [
      [
        { name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 },
        { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 },
        { name: "BBQ Dip", price: 11.99, checked: false, id: 12 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 13 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 14 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 15 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 16 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 17 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 18 },
        {
          name: "Small Strawberry Shake",
          price: 16.95,
          checked: false,
          id: 19,
        },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 20 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 21 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 22 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 23 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 24 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 25 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 26 },
        {
          name: "Small Strawberry Shake",
          price: 16.95,
          checked: false,
          id: 27,
        },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 28 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 29 },
      ],

      [
        { name: "debonairs sauce", price: 8.9, checked: false, id: 30 },
        { name: "BBQ Sauce", price: 8.9, checked: false, id: 31 },
        { name: "Tikka Sauce", price: 11.9, checked: false, id: 32 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 33 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 34 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 35 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 36 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 37 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 38 },
        {
          name: "Small Strawberry Shake",
          price: 16.95,
          checked: false,
          id: 39,
        },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 40 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0,
  },

  {
    meal: "Hand cut chips",
    price: 29.3,
    image: "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543976/res-console.cloudinary_zfg3zp.jpg",
    details: "Two 100% fresh beef burger patties that are hot,deliciously",
    preferenceTitle: [
      "Choose your 2 dips",
      "Choose your 1st drink flavour",
      "Choose your 2nd drink flavour",
      "Would you like to add a side?",
      "Would you Like any extra sauce?",
    ],
    preferenceData: [
      [
        { name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 },
        { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 },
        { name: "BBQ Dip", price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: "debonairs sauce", price: 8.9, checked: false, id: 0 },
        { name: "BBQ Sauce", price: 8.9, checked: false, id: 1 },
        { name: "Tikka Sauce", price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 },
      ],
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1,
  },

  {
    meal: "Chicken Burger",
    price: 45.7,
    image: "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543976/res-console.cloudinary_zfg3zp.jpg",
    details: "",
    preferenceTitle: [
      "Choose your 2 dips",
      "Choose your 1st drink flavour",
      "Choose your 2nd drink flavour",
      "Would you like to add a side?",
      "Would you Like any extra sauce?",
    ],
    preferenceData: [
      [
        { name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 },
        { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 },
        { name: "BBQ Dip", price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: "debonairs sauce", price: 8.9, checked: false, id: 0 },
        { name: "BBQ Sauce", price: 8.9, checked: false, id: 1 },
        { name: "Tikka Sauce", price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2,
  },

  {
    meal: "Big Mac",
    price: 50.8,
    image: "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543976/res-console.cloudinary_zfg3zp.jpg",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: [
      "Choose your 2 dips",
      "Choose your 1st drink flavour",
      "Choose your 2nd drink flavour",
      "Would you like to add a side?",
      "Would you Like any extra sauce?",
    ],
    preferenceData: [
      [
        { name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 },
        { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 },
        { name: "BBQ Dip", price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: "debonairs sauce", price: 8.9, checked: false, id: 0 },
        { name: "BBQ Sauce", price: 8.9, checked: false, id: 1 },
        { name: "Tikka Sauce", price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3,
  },

  {
    meal: "Hand cut chips",
    price: 29.3,
    image: "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543976/res-console.cloudinary_zfg3zp.jpg",
    details: "Two 100% fresh beef burger patties that are hot,deliciously",

    preferenceTitle: [
      "Choose your 2 dips",
      "Choose your 1st drink flavour",
      "Choose your 2nd drink flavour",
      "Would you like to add a side?",
      "Would you Like any extra sauce?",
    ],

    preferenceData: [
      [
        { name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 },
        { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 },
        { name: "BBQ Dip", price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: "debonairs sauce", price: 8.9, checked: false, id: 0 },
        { name: "BBQ Sauce", price: 8.9, checked: false, id: 1 },
        { name: "Tikka Sauce", price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },

  {
    meal: "Big Mac",
    price: 70.2,
    image: "https://res.cloudinary.com/dr4j1ymco/image/upload/v1640543976/res-console.cloudinary_zfg3zp.jpg",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: [
      "Choose your 2 dips",
      "Choose your 1st drink flavour",
      "Choose your 2nd drink flavour",
      "Would you like to add a side?",
      "Would you Like any extra sauce?",
    ],
    preferenceData: [
      [
        { name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 },
        { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 },
        { name: "BBQ Dip", price: 11.99, checked: false, id: 12 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 13 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 14 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 15 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 16 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 17 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 18 },
        {
          name: "Small Strawberry Shake",
          price: 16.95,
          checked: false,
          id: 19,
        },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 20 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 21 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 22 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 23 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 24 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 25 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 26 },
        {
          name: "Small Strawberry Shake",
          price: 16.95,
          checked: false,
          id: 27,
        },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 28 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 29 },
      ],

      [
        { name: "debonairs sauce", price: 8.9, checked: false, id: 30 },
        { name: "BBQ Sauce", price: 8.9, checked: false, id: 31 },
        { name: "Tikka Sauce", price: 11.9, checked: false, id: 32 },
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 33 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 34 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 35 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 36 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 37 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 38 },
        {
          name: "Small Strawberry Shake",
          price: 16.95,
          checked: false,
          id: 39,
        },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 40 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 5,
  },
];
