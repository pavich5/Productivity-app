import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
  };

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <button onClick={fetchQuote}>Get New Quote</button>
      <p>{quote}</p>
    </div>
  );
}

export default App;
