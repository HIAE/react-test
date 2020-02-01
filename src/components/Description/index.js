import React from 'react';
import PropTypes from 'prop-types';

function Description({ text }) {
  return <p>{text}</p>;
}

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
