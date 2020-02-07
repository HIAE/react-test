import React from 'react';
import PropTypes from 'prop-types';
import TitleComponent from './Title.styled';

function Title({ text }) {
  return <TitleComponent>{text}</TitleComponent>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
