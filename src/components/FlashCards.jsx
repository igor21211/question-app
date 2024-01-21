import { useState } from "react";
import questions from "../data/data";

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          onClick={() => setSelectedId(q.id)}
          key={q.id}
          className={q.id === selectedId ? "selected" : ""}
        >
          {" "}
          <p>{q.id === selectedId ? q.answer : q.question}</p>
        </div>
      ))}
    </div>
  );
};

export default FlashCards;
