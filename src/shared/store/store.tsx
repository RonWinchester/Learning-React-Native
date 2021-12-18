import React from 'react';
/* type TContext = {
    state: TState,
    dispatch: Dispatch<TActions>
  } */

const fetcher = () => {
  return fetch(
    'https://github.com/kode-frontend/files/raw/main/categories.json',
  )
    .then(response => response.json())
    .then(res => {
      return res
    })
    .catch(error => {
      console.error(error);
    });
};
const data = fetcher()

export const Context = React.createContext<any>({
  data,
});

export const AppProvider: React.FC = ({ children }) => {
  //const [state, dispatch] = useReducer(mainReducer, initialState)

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
