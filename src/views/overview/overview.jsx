import React from 'react';
//import PropTypes from 'prop-types';
import { getOverview } from 'src/utils/api';

//https://min-api.cryptocompare.com/
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: null,
    }
  }
  componentWillMount() {
    getOverview().then((apiData) => {
      this.setState({apiData});
    });

  }

  render() {
    const {
      apiData,
    } = this.state;
    console.warn(apiData);
    return (
      <div>
        <h2>Currency Overview (overview.jsx)</h2>
        { apiData ? (
          <span>Loading...</span>
        ) : (
          <table>
          </table>
        )}
        https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR
        Litecoin, Dogecoin, and Monero
      </div>
    )
  }
}

Overview.propTypes = { };

export default Overview;
