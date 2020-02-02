import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  list: {
    width: '100%',
    maxWidth: 400,
    margin: '10px',
  },
});

export default function CompanyList({ list }) {
  const classes = useStyles();
  return (
    <>
      <List className={classes.list}>
        {list.map(item => (
          <Link to={{ pathname: `/${item.symbol}/details` }}>
            <Box display="flex" justifyContent="flex-start">
              <ListItem button>
                <ListItemText primary={item.symbol} />
                <ListItemText primary={item.name} />
              </ListItem>
            </Box>
          </Link>
        ))}
      </List>
    </>
  );
}

CompanyList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

CompanyList.defaultProps = {
  list: [],
};
