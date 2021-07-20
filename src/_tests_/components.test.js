import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reducers/index';
import Navbar from '../Components/Navbar';
import Filter from '../Containers/Filter';
import CountriesList from '../Containers/CountriesList';
import Earth from '../Components/Earth';
import Country from '../Components/Country';
import DayliesList from '../Containers/DayliesList';
import AllDays from '../Components/AllDays';
import Dayly from '../Components/Dayly';
import NotFound from '../Components/NotFound';

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
  dayData: [
    {
      ID: '82bb182c-e73f-41d1-a634-58e23d0875c2',
      Country: 'Brazil',
      CountryCode: 'BR',
      Province: '',
      City: '',
      CityCode: '',
      Lat: '-14.24',
      Lon: '-51.93',
      Confirmed: 0,
      Deaths: 0,
      Recovered: 0,
      Active: 0,
      Date: '2020-01-22T00:00:00Z',
    },
  ],
};

const mockStore = configureStore({ reducer: { rootReducer }, initialState });

describe('Navbar', () => {
  it('Should render text', () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );
    const element = getByText(/Covid-19 Data/i);
    expect(element).toBeInTheDocument();
  });

  it('Should render the Filter component', () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );
    const element = getByText(/Confirmed/i);
    expect(element).toBeInTheDocument();
  });

  it('Should have Filter with confirmed option', () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Filter />
        </BrowserRouter>
      </Provider>,
    );
    const element = getByText(/Confirmed/i);
    expect(element).toBeInTheDocument();
  });

  it('Should have Filter with deaths option', () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Filter />
        </BrowserRouter>
      </Provider>,
    );
    const element = getByText(/Deaths/i);
    expect(element).toBeInTheDocument();
  });

  it('Should have Filter with recovered option', () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Filter />
        </BrowserRouter>
      </Provider>,
    );
    const element = getByText(/Recovered/i);
    expect(element).toBeInTheDocument();
  });
});

describe('CountryList', () => {
  it('Should be Loading', () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <CountriesList />
        </BrowserRouter>
      </Provider>,
    );
    const element = getByText(/Processing/i);
    expect(element).toBeInTheDocument();
  });

  it('Should render Earth component', () => {
    const globe = initialState.globalData;
    const { filter } = initialState;

    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Earth globe={globe} filter={filter} />
        </BrowserRouter>
      </Provider>,
    );
    const element = getByText(/Total Confirmed/i);
    expect(element).toBeInTheDocument();
  });

  it('Should render Country component', () => {
    const countries = initialState.countryData;
    const { filter } = initialState;

    const handleCountryChange = () => (0);

    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          {countries.map((country) => (
            <Country
              key={country.ID}
              country={country}
              filter={filter}
              handleCountryChange={handleCountryChange}
            />
          ))}
        </BrowserRouter>
      </Provider>,
    );
    const element = getByText(/Afghanistan/i);
    expect(element).toBeInTheDocument();
  });
});

describe('DayliesList', () => {
  it('Should be Loading', () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <DayliesList />
        </BrowserRouter>
      </Provider>,
    );
    const element = getByText(/Processing/i);
    expect(element).toBeInTheDocument();
  });

  it('Should load AllDays component', () => {
    const days = initialState.dayData;

    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <AllDays country={days[0].Country} />
        </BrowserRouter>
      </Provider>,
    );
    const element = getByText(/Brazil/i);
    expect(element).toBeInTheDocument();
  });

  it('Should load Dayly component', () => {
    const days = initialState.dayData;
    const { filter } = initialState;

    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          {days.map((day) => (
            <Dayly key={day.ID} day={day} filter={filter} />
          ))}
        </BrowserRouter>
      </Provider>,
    );
    const element = getByText(/21/i);
    expect(element).toBeInTheDocument();
  });
});

describe('Not Found', () => {
  it('Not Found should be Loading', () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </Provider>,
    );
    const element = document.querySelector('#notFound');
    expect(element).toBeInTheDocument();
  });
});
