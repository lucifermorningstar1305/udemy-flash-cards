import React from "react";
import FlashCard from "./FlashCard";

const FlashCards = ({ questions }) => {
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <FlashCard question={question} key={question.id} />
      ))}
    </div>
  );
};

export default FlashCards;
