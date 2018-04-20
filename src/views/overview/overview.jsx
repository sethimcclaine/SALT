import React from 'react';
import { getPriceMulti } from 'src/utils/api';
import {
  isEmpty,
  forEachObjIndexed,
  path,
} from 'ramda';
import CoinSelector from 'src/components/coin-selector';

//https://min-api.cryptocompare.com/
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {},
    };

    this.createRows = this.createRows.bind(this);
    this.coinListClick = this.coinListClick.bind(this);
  }

  componentWillMount() {
    getPriceMulti(this.props.appReducer.selectedCoins).then((apiData) => {
      this.setState({apiData});
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.appReducer.selectedCoins !== this.props.appReducer.selectedCoins) {
      getPriceMulti(nextProps.appReducer.selectedCoins).then((apiData) => {
        this.setState({apiData});
      });
    }
  }

  createRows(key, value) {
    const rows = [];

    forEachObjIndexed((value, key) => {
      rows.push((
        <tr key={key}>
          <td>{ path([key, 'CoinName'],this.props.appReducer.coinList) }</td>
          <td>{ key }</td>
          <td>{ value.USD }</td>
          <td>{ (value.USD / this.props.appReducer.bitCoin).toFixed(8) }</td>
        </tr>
      ));
    }, this.state.apiData);
    return rows;
  }

  coinListClick({currentTarget}) {
    this.props.setSelectedCoins(currentTarget.attributes.value.nodeValue);
  }

  render() {
    const {
      apiData,
    } = this.state;
    const {
      coinList,
      selectedCoins
    } = this.props.appReducer;

    return (
      <div>
        <h2>Currency Overview (overview.jsx)</h2>
        {/*
          https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR
          Litecoin, Dogecoin, and Monero
          */}
        <CoinSelector coinList={coinList} selectedCoins={selectedCoins} onClick={this.coinListClick}/>
        { isEmpty(apiData) ? (
          <span>Loading...</span>
        ) : (
          <table>
            <thead>
              <tr>
                <th>CoinName</th>
                <th>Symbol</th>
                <th>Price ($)</th>
                <th>Bitcoin Value</th>
              </tr>
            </thead>
            <tbody>
              { this.createRows() }
            </tbody>
          </table>
        )}
      </div>
    )
  }
}

Overview.propTypes = { };

export default Overview;
