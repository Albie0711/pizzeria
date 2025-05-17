// Importing React to use JSX
import React from "react";

// Importing an image used as the background for the left side
import PizzaLeft from "../assets/pizzaLeft.jpg";

// Importing the corresponding CSS for styling the Contact page
import "../styles/Contact.css";

// Functional component for the Contact page
function Contact() {
  return (
    <div className="contact">
      {/* Left side with background image set via inline style */}
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>

      {/* Right side containing the contact form */}
      <div className="rightSide">
        <h1> Contact Us</h1>

        {/* Contact form structure */}
        <form id="contact-form" method="POST">
          {/* Name input field */}
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />

          {/* Email input field */}
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />

          {/* Message textarea */}
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required // Makes sure user doesn't submit an empty message
          ></textarea>

          {/* Submit button */}
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

// Exporting the component so it can be used in other parts of the app
export default Contact;
