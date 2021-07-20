import { rest } from 'msw';
import { setupServer } from 'msw/node';
import getData from '../util/asyncFetch';
import { SUMMARY, BRAZIL } from './mockData';

const url1 = 'https://api.covid19api.com/summary';
const url2 = 'https://api.covid19api.com/country/brazil';

const server = setupServer(
  rest.get(url1, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(SUMMARY),
  )),
  rest.get(url2, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(BRAZIL),
  )),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Summary Data', () => {
  it('Should fetch the correct summary data', async () => {
    await getData(url1).then((resp) => resp.json()).then((res) => {
      expect(res).toEqual(SUMMARY);
    });
  });

  it('Should not fetch the incorrect summary data', async () => {
    await getData(url1).then((resp) => resp.json()).then((res) => {
      expect(res).not.toEqual('Summary');
    });
  });
});

describe('Country Data', () => {
  it('Should fetch the correct country data', async () => {
    await getData(url2).then((resp) => resp.json()).then((res) => {
      expect(res).toEqual(BRAZIL);
    });
  });

  it('Should not fetch the incorrect country data', async () => {
    await getData(url2).then((resp) => resp.json()).then((res) => {
      expect(res).not.toEqual('Brazil');
    });
  });
});
