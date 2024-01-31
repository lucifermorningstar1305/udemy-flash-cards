import React, { useState } from "react";

const FlashCard = ({ question }) => {
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((s) => !s);
  };

  const handleMouseLeave = () => {
    setSelected((s) => false);
  };

  return (
    <div
      onClick={handleClick}
      className={isSelected ? "selected" : ""}
      onMouseLeave={handleMouseLeave}
    >
      <p>{isSelected ? question.answer : question.question}</p>
    </div>
  );
};

export default FlashCard;
