import './App.css';
import Main from './Components/Main';
import React, { useState, createContext } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const Context = createContext();

function App() {

  const [data, setData] = useState()

  

  return (
    <>
      <Provider store={store}>
        <Main />
        </Provider>
    </>
  );
}

export default App;
