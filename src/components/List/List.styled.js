import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { color } from '../../shared/variables';

export const ListComponent = styled(List)`
  width: 400px;
  background-color: ${color.silver_sand};
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  border-radius: 4px;
`;

export const ListItemComponent = styled(ListItem)`
  color: #000;
  font-family: 'Roboto', sans-serif;
  list-style: none;
  display: flex;
  margin: 8px auto;
  transition: 0.2s;
  width: 100%;
  border-radius: 26px;

  &:hover {
    background-color: ${color.iron};
    transition: 0.2s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  }
`;

export const ListItemText = styled.span`
  margin-right: 10px;
`;
