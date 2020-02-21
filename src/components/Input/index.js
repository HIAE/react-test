import React from 'react';
import PropTypes from 'prop-types';

import { InputStyle } from './styles';

export default function Input({type, noMargin, ...rest}) {
  return (
    <InputStyle type={type} noMargin {...rest}/>
  );
}

Input.defaultPropTypes = {
  type: PropTypes.string,
  noMargin: PropTypes.bool,
}