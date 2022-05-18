import React from "react";

const Header = (props) => {
  console.log(props);
  return (
    <div className="container header">
      <h1>Cocktaily </h1>
      <p>Hit me with your best shot 🍸</p>

      {/*Design a form here with input field to take input of cocktail name to be searched */}
    </div>
  );
};

export default Header;
