import React, { Component } from 'react';
import PropTypes from 'prop-types';

//https://min-api.cryptocompare.com/
const MoreInfo = (props) => (
  <div>
    <h2>More Info</h2>
    https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=10
  </div>
);

MoreInfo.propTypes = { };

export default MoreInfo;
