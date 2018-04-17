import React, { Component } from 'react';
import PropTypes from 'prop-types';

//https://min-api.cryptocompare.com/
const List = (props) => (
  <div>
    <h2>Overview</h2>
    https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR
    Litecoin, Dogecoin, and Monero
  </div>
);

List.propTypes = { };

export default List;
