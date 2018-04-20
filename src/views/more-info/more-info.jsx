import './more-info.css';
import React from 'react';
import { getHistoryMinute } from 'src/utils/api';
import { forEach, pathOr } from 'ramda';
import CoinSelector from 'src/components/coin-selector';
import Chart from 'chart.js';

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

  componentWillReceiveProps(nextProps) {
    if(nextProps.appReducer.selectedCoin !== this.props.appReducer.selectedCoin) {
      getHistoryMinute(nextProps.appReducer.selectedCoin).then((resp) => {
        this.setState({apiData: resp.Data});
        this.setChart();
      });
    }
  }


  coinListClick({currentTarget}) {
    this.props.setSelectedCoin(currentTarget.attributes.value.nodeValue);
  }

  setChart() {
    const labels = [];
    const high = [];
    const low = [];

    forEach((value) => {
      const date = new Date();
      date.setUTCSeconds(value.time);
      labels.push( date.getUTCHours() + ':' + date.getUTCMinutes()); //time
      high.push(value.high);
      low.push(value.low);
    }, this.state.apiData);

    //https://www.chartjs.org/docs/latest/charts/line.html
    new Chart(document.getElementById('myChart'), {
      type: 'line',
      data: {
          labels,
          xAxisID: 'Value ($USD)',
          yAxisID: 'Time',
          datasets:[{
            label: "high",
            data: high,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            lineTension: 0.1
          },{
            label: "low",
            data: low,
            fill: false,
            borderColor: "rgb(240,128,128)",
            lineTension: 0.1
          },
        ],
      },
      options: {}
    });
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
      <div className="more-info">
        <h2>More Info for { pathOr(selectedCoin, [selectedCoin, 'FullName'], coinList) }</h2>
        {/* https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=10 */}
        <div className="chart-container">
          <canvas id="myChart"/>
        </div>
        <CoinSelector coinList={coinList} selectedCoins={selectedCoin} onClick={this.coinListClick}/>
      </div>
    );
  }
};

export default MoreInfo;
