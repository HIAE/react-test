import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import { ListComponent, ListItem, ListItemText } from './List.styled';

export default function CompanyList({ list }) {
  return (
    <>
      <ListComponent>
        {list.map(item => (
          <Link to={{ pathname: `/${item.symbol}/details` }}>
            <Box display="flex" justifyContent="flex-start">
              <ListItem>
                <ListItemText>{item.symbol}</ListItemText>
                <ListItemText>{item.name}</ListItemText>
              </ListItem>
            </Box>
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
