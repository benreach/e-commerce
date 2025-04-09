import profile from "./profile.webp";
import banner1 from "./banner1.jpg";
import rightArrow from "./right-arrow.svg";
import rightArrowBlack from "./right-arrow-black.svg";
import bannerSm from "./banner-sm.jpg";
import organic_vegetable from "./organic-vegetables.webp";
import carrot from "./carrot.webp";
import star from "./star.svg";
import starDull from "./star-dull.svg";
import cart_icon from "./cart.svg";
import bottom_banner_big from "./bottom_banner_big.jpg";
import bottom_banner from "./bottom_banner.jpg";
import trust from "./trust.svg";
import fresh from "./fresh.svg";
import delivery from "./delivery.svg";
import dollar from "./dollar-minimalistic.svg";
import address from "./map.svg";
import order from "./order.svg";
import add from "./add.svg";
import city_shop from "./city-store.svg";
import upload_area from "./upload_area.jpg";
import box from "./box.svg";
import beef from "./beef.avif";
import fish from "./fish.jpg";
import porks from "./porks.jpg";
import fruits from "./fruis.jpg";
import food from "./food.jpg";

export const assets = {
  profile,
  banner1,
  rightArrow,
  rightArrowBlack,
  bannerSm,
  star,
  starDull,
  cart_icon,
  bottom_banner,
  bottom_banner_big,
  trust,
  fresh,
  delivery,
  dollar,
  address,
  order,
  city_shop,
  add,
  upload_area,
  box,
};

export const categories = [
  {
    text: "Organic veggies",
    path: "Vegetables",
    image: organic_vegetable,
    bgColor: "#FEF6DA",
  },
  {
    text: "Organic Fruits",
    path: "Fruits",
    image: fruits,
    bgColor: "#FEA0A9",
  },
  {
    text: "Fresh Pork",
    path: "Porks",
    image: porks,
    bgColor: "#FEc6DA",
  },
  {
    text: "Fresh Fish",
    path: "Fish",
    image: fish,
    bgColor: "#FEF6DA",
  },
  {
    text: "Frsh Beef",
    path: "Beef",
    image: beef,
    bgColor: "#FEA0A9",
  },
  {
    text: "Cooked Food",
    path: "food",
    image: food,
    bgColor: "#FEA0A9",
  },
];

export const features = [
  {
    icon: delivery,
    title: "Fastest Delivery",
    description: "Groceries delivered to your door in under 30 minutes.",
  },
  {
    icon: fresh,
    title: "Always Fresh",
    description: "We deliver the freshest produce and goods every time.",
  },
  {
    icon: dollar,
    title: "Best Prices",
    description: "Enjoy competitive pricing and great deals every day.",
  },
  {
    icon: trust,
    title: "Trusted Service",
    description: "Reliable and safe delivery you can count on.",
  },
];

export const dummyProducts = [
  {
    _id: "ahjajhajadafadsf",
    name: "Potato 50g",
    category: "Fruits",
    price: 25,
    offeredPrice: 20,
    image: [carrot, carrot, carrot],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:17:46.018Z",
    inStock: true,
  },
  {
    _id: "ahjajhajsdfgaad",
    name: "Carrot 50g",
    category: "Fruits",
    price: 25,
    offeredPrice: 20,
    image: [carrot, carrot, carrot],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:17:46.018Z",
    inStock: true,
  },
  {
    _id: "ahjajhasdfgja",
    name: "Potato 50g",
    category: "Fruits",
    price: 25,
    offeredPrice: 20,
    image: [carrot, carrot, carrot],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:17:46.018Z",
    inStock: true,
  },
  {
    _id: "ahjajhajsdfgada",
    name: "Potato 50g",
    category: "Fruits",
    price: 25,
    offeredPrice: 20,
    image: [carrot, carrot, carrot],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:17:46.018Z",
    inStock: true,
  },
  {
    _id: "ahjajhasdfgjdaa",
    name: "Potato 50g",
    category: "Fruits",
    price: 25,
    offeredPrice: 20,
    image: [carrot, carrot, carrot],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:17:46.018Z",
    inStock: true,
  },
  {
    _id: "ahjajhajada",
    name: "Potato 50g",
    category: "Fruits",
    price: 25,
    offeredPrice: 20,
    image: [carrot, carrot, carrot],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:17:46.018Z",
    inStock: true,
  },
  {
    _id: "ahjajhajsdfgaadss",
    name: "Potato 50g",
    category: "Fruits",
    price: 25,
    offeredPrice: 20,
    image: [carrot, carrot, carrot],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:17:46.018Z",
    inStock: true,
  },
  {
    _id: "ahjajhasdfgjaasd",
    name: "Potato 50g",
    category: "Vegetables",
    price: 25,
    offeredPrice: 20,
    image: [carrot, carrot, carrot],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:17:46.018Z",
    inStock: true,
  },
  {
    _id: "ahjajhajsdfgaads",
    name: "Potato 50g",
    category: "Vegetables",
    price: 25,
    offeredPrice: 20,
    image: [carrot, carrot, carrot],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:17:46.018Z",
    inStock: true,
  },
  {
    _id: "ahjajhasdfgjadsa",
    name: "Potato 50g",
    category: "Vegetables",
    price: 25,
    offeredPrice: 20,
    image: [carrot, carrot, carrot],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:17:46.018Z",
    inStock: true,
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your orders", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const dummyAddress = [
  {
    country: "Cambodia",
    street: "Russian Bolevard",
    city: "Phnom Penh",
  },
];

export const dummyOrders = [
  {
    _id: "287237823785jhshjks",
    paymentType: "Online",
    userId: "6348734598498435",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "89347954978345335445",
      },
    ],
    address: {
      street: "Ressian Bolevard",
      country: "Cambodia",
    },
    status: "Order Placed",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updateddAt: "2025-04-25T07:17:46.018Z",
    amount: 89,
  },
  {
    _id: "287237823785jhshjks",
    paymentType: "Online",
    userId: "6348734598498435",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "89347954978345335445",
      },
    ],
    address: 89,
    status: "Order Placed",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updateddAt: "2025-04-25T07:17:46.018Z",
    amount: 89,
  },
];
