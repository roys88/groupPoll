import React, {Component} from 'react';
import PropTypes from 'prop-types';
const divStyle = {
    color: '#ae5856'
};
const InlineError = ({text}) => <span style={divStyle}>{text}</span>;

export default InlineError;