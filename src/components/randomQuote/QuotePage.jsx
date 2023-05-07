import React, { useEffect, useState } from "react";
import "./QuotePage.css";
import Button from "../UI/Button";

const colors = ["#f9f7e8", "#cec8e4", "#fdcfb3", "#cfe4d9"];

const QuotePage = () => {
  const [backgroundColor, setBackgroundColor] = useState();
  const [quotes, setQuotes] = useState("");
  const [quote, setQuote] = useState(null);

  const applyRandomBackgroundColor = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    const randomColor = colors[randomIndex];
    setBackgroundColor(randomColor);
  };

  useEffect(() => {
    applyRandomBackgroundColor();
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote);
      });
  };

  const handleNewQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div
      className="quote-content-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="quote-container">
        {quote && (
          <>
            {quote.text}
            {quote.author}
          </>
        )}
      </div>
      <Button onClick={handleNewQuote} style={{ backgroundColor: "#FFBF00" }}>
        Another quote!
      </Button>
    </div>
  );
};

export default QuotePage;
