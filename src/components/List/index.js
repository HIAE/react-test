import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CompanyList({ list }) {
  return (
    <>
      {list.map(item => (
        <div key={item.symbol}>
          <Link to={{ pathname: `/company/${item.symbol}` }}>
            <div>
              <p>{item.symbol}</p>
              <p>{item.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

CompanyList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

CompanyList.defaultProps = {
  list: [],
};
