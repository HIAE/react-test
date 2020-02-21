import React from 'react';
import PropTypes from 'prop-types';

import { TextStyle } from './styles';

export default function Text({type, children}) {
  return (
    <TextStyle type={type}>{children}</TextStyle>
  );
}

Text.propTypes = {
  type: PropTypes.string,
}