import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';
import { PokemonsProvider } from './context/ContextPokemons';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonsProvider>
      <App />
    </PokemonsProvider>
  </React.StrictMode>,
);
