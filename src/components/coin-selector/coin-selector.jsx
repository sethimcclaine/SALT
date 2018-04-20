import './coin-selector.css';
import React from 'react';
//import PropTypes from 'prop-types';
import {
  forEachObjIndexed,
  contains,
} from 'ramda';

export const CoinSelector = (props) => {
  const listCoins = () => {
    const list = [];

    forEachObjIndexed((value, key) => {
      list.push((
        <li
          key={ key }
          className={ contains(key, props.selectedCoins ) ? 'selected' : null }
          value={ key }
          onClick={ props.onClick }>
          { value.FullName }
        </li>
      ))
    }, props.coinList)

    return list;
  }

  return (
    <div className="coin-selector">
      <ul>
        { listCoins() }
      </ul>
    </div>
  );
}

CoinSelector.propTypes = { };
