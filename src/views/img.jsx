import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconUpload from 'src/components/icon-upload/index'

const Img = (props) => (
  <div>
    <h2>Img resizer</h2>
    <IconUpload
        isEditable={ true }
        onChange={ (props) => {
          debugger;
          //@TODO shouldn't put this in a render...

        }}
        icon={{ size: 55 }}
    />

  </div>
);

Img.propTypes = {
  /*
    types: PropTypes.string,
    children: PropTypes.object,
    isEditable: PropTypes.bool,
    handleAccept: PropTypes.func,
    handleReject: PropTypes.func,
    onChange: PropTypes.func,
    */
};

export default Img;
