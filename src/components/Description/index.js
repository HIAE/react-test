import React from 'react';
import PropTypes from 'prop-types';
import { DescriptionComponent } from './Description.styled';

function Description({ symbol, locale }) {
  return (
    <DescriptionComponent>
      <p>Here we have some information about the researched company.</p>
      <p>Symbol: {symbol}</p>
      <p>Location: {locale}</p>
      <p>Below you can filter by a date range:</p>
    </DescriptionComponent>
  );
}

Description.propTypes = {
  symbol: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

export default Description;
