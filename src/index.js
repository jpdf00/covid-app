import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';
import './Assets/Stylesheets/index.css';
import rootReducer from './Reducers/index';

const initialState = {
  country: 'brazil',
  filter: 'Confirmed',
  countryData: [],
  globalData: {},
  dayData: [{ Country: 'Brazil' }],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
