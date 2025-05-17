// Importing required dependencies
import React, { useState } from "react"; // useState hook to manage open/close state
import Logo from "../assets/pizzaLogo.png"; // Import logo image
import { Link } from "react-router-dom"; // Link component for client-side routing

import ReorderIcon from "@mui/icons-material/Reorder"; // Import hamburger icon from Material UI
import "../styles/Navbar.css"; // Import the corresponding CSS

function Navbar() {
  // State to track whether mobile menu is open (true) or closed (false)
  const [openLinks, setOpenLinks] = useState(false);

  // Function to toggle the navbar state
  const toggleNavbar = () => {
    setOpenLinks(!openLinks); // Toggle between true/false
  };

  return (
    <div className="navbar">
      {/* Left side of navbar contains logo and hidden links for small screens */}
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} /> {/* Logo image */}
        {/* Hidden links only shown on small screens when menu is open */}
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>

      {/* Right side of navbar: visible links on larger screens + toggle button */}
      <div className="rightSide">
        {/* These links are always shown on larger screens */}
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>

        {/* Hamburger menu button for mobile view */}
        <button onClick={toggleNavbar}>
          <ReorderIcon /> {/* Menu icon from Material UI */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
