import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';

export default function CompanyList({ list }) {
  return (
    <>
      <ul>
        {list.map(item => (
          <li key={item.symbol}>
            <Link to={{ pathname: `/:${item.symbol}/details` }}>
              <Box display="flex" justifyContent="flex-start">
                <p>{item.symbol}</p>
                <p>{item.name}</p>
              </Box>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

CompanyList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

CompanyList.defaultProps = {
  list: [],
};
