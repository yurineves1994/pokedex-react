import { useReducer } from 'react';
import { PokemonsContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

export const PokemonsProvider = ({ children }) => {
  const [pokemonsState, pokemonsDispatch] = useReducer(reducer, data);

  return (
    <PokemonsContext.Provider value={{ ...pokemonsState, pokemonsDispatch }}>
      {children}
    </PokemonsContext.Provider>
  );
};
