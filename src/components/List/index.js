import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ListItemText from '@material-ui/core/ListItemText';

// import Box from '@material-ui/core/Box';
import { ListComponent, ListItemComponent } from './List.styled';

export default function CompanyList({ list }) {
  return (
    <>
      <ListComponent>
        {list.map(company => (
          <Link to={{ pathname: `/${company.symbol}/details` }}>
            <ListItemComponent>
              <ListItemText primary={company.name} />
            </ListItemComponent>
          </Link>
        ))}
      </ListComponent>
    </>
  );
}

CompanyList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

CompanyList.defaultProps = {
  list: [],
};
