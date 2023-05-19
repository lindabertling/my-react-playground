import React, { useEffect, useState } from "react";
import "./QuotePage.css";
import Button from "../UI/Button";

const colors = ["#f9f7e8", "#cec8e4", "#fdcfb3", "#cfe4d9"];

const QuotePage = () => {
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const [quotes, setQuotes] = useState("");
  const [quote, setQuote] = useState(null);
  const [buttonColor, setButtonColor] = useState("#FFBF00");

  const applyRandomBackgroundColor = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    const randomColor = colors[randomIndex];
    setBackgroundColor(randomColor);
  };

  const applyRandomButtonColor = () => {
    let randomColor;
    do {
      const randomIndex = Math.floor(Math.random() * 4);
      randomColor = colors[randomIndex];
    } while (randomColor === backgroundColor);

    setButtonColor(randomColor);
  };

  useEffect(() => {
    applyRandomBackgroundColor();
    fetchQuote();
  }, []);

  useEffect(() => {
    applyRandomButtonColor();
  }, [backgroundColor]);

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
    applyRandomBackgroundColor();
    applyRandomButtonColor();
  };

  console.log(quote.author);

  return (
    <div
      className="quote-content-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="quote-container">
        {quote && (
          <>
            <section className="quote-text">
              <h3>{quote.text}</h3>
            </section>
            <p>---</p>
            <section className="quote-author">
              <h4>{quote.author !== null ? quote.author : "unknown"}</h4>
            </section>
          </>
        )}
      </div>
      <Button onClick={handleNewQuote} style={{ backgroundColor: buttonColor }}>
        Another quote!
      </Button>
    </div>
  );
};

export default QuotePage;
