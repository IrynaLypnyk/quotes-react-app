import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [quote, setQuote] = useState({});

    const getQuote = () => fetch("https://iryna-lypnyk-quote-server.glitch.me/quotes/random").then((res) => res.json()).then((data) => setQuote(data));

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div className="App">
            <figure className="quote" onClick={getQuote}>
                <blockquote>
                    {quote?.quote}
                </blockquote>
                <figcaption>
                    <cite>{quote?.author}</cite>
                </figcaption>
            </figure>
            <button className="button" onClick={getQuote}>Get another quote!</button>
        </div>
    );
}

export default App;
