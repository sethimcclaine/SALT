import React, { Component } from 'react';
import PropTypes from 'prop-types';

//https://min-api.cryptocompare.com/
const Overview = (props) => (
  <div>
    <h2>Currency Overview (overview.jsx)</h2>
    
    https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR
    Litecoin, Dogecoin, and Monero
  </div>
);

Overview.propTypes = { };

export default Overview;
