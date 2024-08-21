import React from "react";
import "./style.scss";

function App() {
  return (
    <div>
      <nav>
        {/* use the class list to remove bullet points and align items side-by-side */}
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      {/* use the class title to change the title color */}
      <h1>SCSS!</h1>
      <p>This is an example using SCSS!</p>
    </div>
  );
}

export default App;