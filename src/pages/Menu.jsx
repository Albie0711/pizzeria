// Import React to use JSX and component features
import React from "react";

// Import the array of menu items (with image, name, and price)
import { MenuList } from "../helpers/MenuList";

// Import the child component that displays each menu item
import MenuItem from "../components/MenuItem";

// Import styles specific to this page
import "../styles/Menu.css";

// Functional component that renders the Menu page
function Menu() {
  return (
    <div className="menu">
      {/* Section title */}
      <h1 className="menuTitle">Our Menu</h1>

      {/* Container for the list of menu items */}
      <div className="menuList">
        {/* Loop through MenuList and render a MenuItem for each object */}
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key} // React uses this to optimize rendering
              image={menuItem.image} // Pass image prop to MenuItem
              name={menuItem.name} // Pass name prop to MenuItem
              price={menuItem.price} // Pass price prop to MenuItem
            />
          );
        })}
      </div>
    </div>
  );
}

// Export the component to be used in other parts of the app
export default Menu;
