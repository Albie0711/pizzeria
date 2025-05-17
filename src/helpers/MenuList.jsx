// Importing image files from the local assets folder
import Pepperoni from "../assets/pepperoni.jpg";
import Margherita from "../assets/margherita.jpg";
import PedroTechSpecial from "../assets/pedrotechspecial.jpg";
import Vegan from "../assets/vegan.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg";

// Exporting an array called MenuList
// This array contains objects representing different types of pizzas on the menu
export const MenuList = [
  {
    name: "Pepperoni Pizza", // Name of the pizza
    image: Pepperoni, // Imported image file for visual representation
    price: 15.99, // Price in dollars
  },
  {
    name: "Margherita Pizza",
    image: Margherita,
    price: 11.99,
  },
  {
    name: "PedroTech Special Pizza",
    image: PedroTechSpecial,
    price: 256.53, // A humorous high price for demonstration
  },
  {
    name: "Vegan Pizza",
    image: Vegan,
    price: 17.99,
  },
  {
    name: "Pineapple Pizza",
    image: Pineapple,
    price: 4.99, // A cheaper option
  },
  {
    name: "Very Expensive Pizza",
    image: Expensive,
    price: 1997.99, // Likely a joke item or placeholder
  },
];
