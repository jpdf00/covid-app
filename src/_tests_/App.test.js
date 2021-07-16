import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../Reducers/index';
import Navbar from '../Components/Navbar';
import CountriesList from '../Components/CountriesList';
import DayliesList from '../Components/DayliesList';

const initialState = {
  country: 'brazil',
  filter: 'Confirmed',
  countryData: [
    {
      ID: '7cbb7fc3-35fa-4b7c-9481-faaccdef92b7',
      Country: 'Afghanistan',
      CountryCode: 'AF',
      Slug: 'afghanistan',
      NewConfirmed: 0,
      TotalConfirmed: 134653,
      NewDeaths: 0,
      TotalDeaths: 5791,
      NewRecovered: 0,
      TotalRecovered: 82586,
      Date: '2021-07-13T16:48:27.928Z',
      Premium: {},
    },
    {
      ID: 'a4884659-8802-4358-ab39-092d5d0524fb',
      Country: 'Albania',
      CountryCode: 'AL',
      Slug: 'albania',
      NewConfirmed: 0,
      TotalConfirmed: 132597,
      NewDeaths: 0,
      TotalDeaths: 2456,
      NewRecovered: 0,
      TotalRecovered: 130052,
      Date: '2021-07-13T16:48:27.928Z',
      Premium: {},
    },
  ],
  globalData: {
    NewConfirmed: 225843,
    TotalConfirmed: 186993816,
    NewDeaths: 3702,
    TotalDeaths: 4036414,
    NewRecovered: 125764,
    TotalRecovered: 123415634,
    Date: '2021-07-13T16:48:27.928Z',
  },
  dayData: [{ Country: 'Brazil' }],
};

const mockStore = configureStore({ reducer: { rootReducer }, initialState });

it(`Navbar should Render Text`, () => {
  const { getByText } = render(
    <Provider store={mockStore}>
      <BrowserRouter >
        <Navbar />
      </BrowserRouter >
    </Provider>,
  );
  const btnName = getByText(/Covid-19 Data/i);
  expect(btnName).toBeInTheDocument();
});

it(`Navbar should Render the Filter Component`, () => {
  const { getByText } = render(
    <Provider store={mockStore}>
      <BrowserRouter >
        <Navbar />
      </BrowserRouter >
    </Provider>,
  );
  const btnName = getByText(/Confirmed/i);
  expect(btnName).toBeInTheDocument();
});

it(`CountryList should Render be Loading`, () => {
  const { getByText } = render(
    <Provider store={mockStore}>
      <BrowserRouter >
        <CountriesList />
      </BrowserRouter >
    </Provider>,
  );
  const btnName = getByText(/Processing/i);
  expect(btnName).toBeInTheDocument();
});

it(`DayliesList should Render be Loading`, () => {
  const { getByText } = render(
    <Provider store={mockStore}>
      <BrowserRouter >
        <DayliesList />
      </BrowserRouter >
    </Provider>,
  );
  const btnName = getByText(/Processing/i);
  expect(btnName).toBeInTheDocument();
});
