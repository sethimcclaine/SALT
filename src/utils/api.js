import iFetch from 'isomorphic-fetch';

const baseGetConfig = {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
        Accept: 'application/json',
    },
};
/*
const basePostConfig = {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        Accept: 'application/json',
        Cookie: document.cookie,
        'Content-Type': 'application/json',
    },
};
*/

if (!window.fetch) {
    window.fetch = iFetch;
}
  /**
   * @private
   * @name getFetch
   * @description Initiates a GET fetch request using default options
   * @param  {string}  url The URL to GET
   * @return {Promise}     A fetch Promise
   */

const getFetch = (url) => fetch(url, baseGetConfig);
  /**
   * @private
   * @name postFetch
   * @description Initiates a POST fetch request using default options
   * @param  {string} url  The URL to POST to
   * @param  {object} body The POST body to send
   * @return {Promise}     A fetch Promise
   */
   /*
const postFetch = (url, body) => fetch(url, {
    ...basePostConfig,
    body: JSON.stringify(body),
})
*/

/**
 * default for handling api responses
 * @param  {object} response
 * @return {object} response.json()
 */
const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

const callWith = (query) =>
  getFetch(query)
    .then(handleResponse)
    .catch((error) => {
        throw new Error(error);
    });

export const getPriceMulti = (selectedCoins) => {
    return callWith('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + selectedCoins.join(',') + '&tsyms=USD,EUe');
}

export const getMoreInfo = () =>
    callWith('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=30');

export const getCoinList = () =>
    callWith('https://min-api.cryptocompare.com/data/all/coinlist');
