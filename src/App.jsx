import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './App.styled';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import Home from 'components/Home/Home';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulăm o întârziere pentru a afișa ecranul de încărcare
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3500 ms = 3.5 secunde

    // Curățăm timeout-ul la demontare
    return () => clearTimeout(timeout);
  }, []); // Rulăm efectul doar o singură dată, la încărcarea componentei

  return (
    <>
      <GlobalStyle />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Home />
        </div>
      )}
    </>
  );
};

export default App;
