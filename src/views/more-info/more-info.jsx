import React from 'react';
import { getHistoryMinute } from 'src/utils/api';
import { isEmpty } from 'ramda';
import CoinSelector from 'src/components/coin-selector';
import Chart from 'chart.js';
//import PropTypes from 'prop-types';

//https://min-api.cryptocompare.com/

class MoreInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
    };

    this.coinListClick = this.coinListClick.bind(this);
    this.setChart = this.setChart.bind(this);
  }
  componentWillMount() {
    getHistoryMinute(this.props.appReducer.selectedCoin).then((resp) => {
      this.setState({apiData: resp.Data});
      this.setChart();
    });
  }

  coinListClick({currentTarget}) {
    //this.props.setSelectedCoin(currentTarget.attributes.value.nodeValue);
  }

  setChart() {
    const myChart = new Chart(document.getElementById('myChart'), {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
    });
    return myChart;
  }

  render() {
    const {
      ctx,
    } = this.state;
    const {
      coinList,
      selectedCoin,
    } = this.props.appReducer

    return (
      <div>
        <h2>More Info</h2>
        https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=10

        <canvas id="myChart" width="400" height="400"></canvas>
        <CoinSelector coinList={coinList} selectedCoins={selectedCoin} onClick={this.coinListClick}/>
      </div>
    );
  }
};

MoreInfo.propTypes = { };

export default MoreInfo;
