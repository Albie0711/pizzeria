import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Pizzeria </h1>
        <p>
          At <strong>albie's Pizzeria</strong> , pizza isn't just food — it's
          our passion. Founded on tradition and fired with flavor, we craft
          every pizza with love, fresh ingredients, and a whole lot of cheese.
          From our hand-tossed dough to our signature sauces and bold toppings,
          each slice tells a story of taste and quality. Whether you're grabbing
          a quick bite or enjoying a family meal, we’re here to serve comfort,
          joy, and unforgettable flavor — one pizza at a time
        </p>
      </div>
    </div>
  );
}

export default About;
