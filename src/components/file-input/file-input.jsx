import './file-input.scss';

import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
/**
 * @class
 * @name IconUpload
 *
 * @description This component accepts files. You can click on it and select a
 * file, or drop a file on it. Upon recieving a new file, onChange is triggered.
 * What you do with the file is implmented with the onChange handler.
 */
export class FileInput extends React.Component {
    constructor(props) {
        super(props);

        this.onFilesDrop = this.onFilesDrop.bind(this);
    }

    /**
     * dispurse approved and rejected files to their destinations
     * @param  {array} acceptedFiles array of file objects
     * @param  {array} rejectedFiles array of file objects
     */
    onFilesDrop(acceptedFiles, rejectedFiles) {
        if (rejectedFiles.length) {
            this.props.handleReject(rejectedFiles);
        }

        if (acceptedFiles.length) {
            this.props.handleAccept(acceptedFiles);
        }
    }

    render() {
        const {
            isEditable,
            types,
            children,
        } = this.props;

        return (
            <Dropzone onDrop={ this.onFilesDrop }
                accept={ types }
                className='drop-zone'
                disabled={ !isEditable }
                disableClick={ !isEditable }>
                <div className='drop-zone-message'>
                    { children }
                </div>
            </Dropzone>
        );
    }
}

FileInput.propTypes = {
    types: PropTypes.string,
    children: PropTypes.object,
    isEditable: PropTypes.bool,
    handleAccept: PropTypes.func,
    handleReject: PropTypes.func,
    onChange: PropTypes.func,
};
