import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function ButtonComponent({ text }) {
  return (
    <>
      <Button variant="contained" color="primary" type="button">
        {text}
      </Button>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

export default ButtonComponent;
