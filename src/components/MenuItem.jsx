import React from "react";

// Functional component to display a single menu item
function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      {/* Image container styled with inline background image */}
      <div style={{ backgroundImage: `url(${image})` }}> </div>

      {/* Pizza name */}
      <h1> {name} </h1>

      {/* Pizza price */}
      <p> ${price} </p>
    </div>
  );
}

export default MenuItem;
