import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.GET_POKEMONS: {
      return { ...state, pokemons: action.payload, loading: false };
    }
    case types.ALL_TYPES: {
      return { ...state, typesPokemons: action.payload, loading: false };
    }
    case types.POST_LOADING: {
      return { ...state, loading: true };
    }
    default:
      return { ...state };
  }
};
