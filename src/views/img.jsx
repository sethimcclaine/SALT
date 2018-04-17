import './img.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconUpload from 'src/components/icon-upload/index'

class Img extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 512,
      width: 512,
      dataUri: null,
      linked: true,
    }

    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSizechange = this.handleSizechange.bind(this);
    this.handleLink = this.handleLink.bind(this);
    this.quickSet = this.quickSet.bind(this);
  }

  handleImageChange(dataUri) {
    console.log(dataUri);
    this.setState({
      dataUri,
    });
  }

  handleSizechange({target}) {
    const state = this.state.linked ? {
      height: target.value,
      width: target.value,
    } : {
      [target.name]: target.value
    }
    this.setState(state);
  }

  handleLink() {
    const state = {
      linked: !this.state.linked,
    };

    if(!this.state.linked) {
        state.width= this.state.height;
    }

    this.setState(state);
  }

  quickSet({target}) {
    this.setState({
      height: target.value,
      width: target.value,
    });
  }

  render() {
    const {
      height,
      width,
      dataUri,
      linked
    } = this.state;
    return (
      <div className="img">
        <h2>Image Resizer</h2>

        <div className="controls">
          <div className="sizer">
            <div>
              <b>Height</b>
              <input
                type="text"
                name="height"
                placeholder="height"
                value={height}
                onChange={this.handleSizechange}/>
            </div>
            <button
              disabled="true"
              onClick={ this.handleLink }>
              {linked ? "Linked" : "Unlinked" }
            </button>
            <div>
              <b>Width</b>
              <input
                type="text"
                name="width"
                placeholder="width"
                value={width}
                onChange={this.handleSizechange}/>
            </div>
          </div>
          <div className="quick-set">
            <span>Quick Set</span>
            <button value="64" onClick={this.quickSet}>64</button>
            <button value="128" onClick={this.quickSet}>128</button>
            <button value="512" onClick={this.quickSet}>512</button>
            <button value="1024" onClick={this.quickSet}>1024</button>
          </div>
        </div>

        <IconUpload
            isEditable={ true }
            onChange={ this.handleImageChange }
            iconSize={{
              height: height || 512,
              width: width || 512,
            }}
        />
        { dataUri && (
          <div className="output">
            <div>
              <h3>Output</h3>
            </div>
            <div>
              <textarea>{dataUri}</textarea>
            </div>
            <div>
              <img src={dataUri}/>
            </div>
          </div>
        )}

      </div>
    )
  }
}

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
