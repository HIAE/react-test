import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from './Button.styled';

function Button({ text }) {
  return (
    <>
      <ButtonComponent>{text}</ButtonComponent>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
