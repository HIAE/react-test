import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  ListComponent,
  ListItemComponent,
  CompanyNameSymbol,
  CompanyNameComponent,
} from './List.styled';

export default function CompanyList({ list }) {
  return (
    <>
      {list.length > 0 && (
        <ListComponent>
          {list.map(company => (
            <Link to={{ pathname: `/${company.symbol}/details` }}>
              <ListItemComponent>
                <CompanyNameSymbol>{company.symbol}</CompanyNameSymbol>
                <CompanyNameComponent>{company.name}</CompanyNameComponent>
              </ListItemComponent>
            </Link>
          ))}
        </ListComponent>
      )}
    </>
  );
}

CompanyList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

CompanyList.defaultProps = {
  list: [],
};
