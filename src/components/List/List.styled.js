import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { color } from '../../shared/variables';

export const ListComponent = styled(List)`
  padding: 0;
  background-color: ${color.silver_sand};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  border-radius: 4px;
  max-width: 400px;
  width: 100%;
  height: 400px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: ${color.outer_space};
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 760px) {
    max-width: 600px;
    width: 100%;
    overflow-y: auto;
    height: 190px;
  }
`;

export const ListItemComponent = styled(ListItem)`
  color: #000;
  font-family: 'Roboto', sans-serif;
  list-style: none;
  display: flex;
  margin: 8px auto;
  transition: 0.2s;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: ${color.iron};
    transition: 0.2s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  }
`;

export const CompanyNameSymbol = styled.p`
  font-size: 16px;
`;

export const CompanyNameComponent = styled.p`
  font-size: 12px;
  max-width: 330px;
  text-align: right;
`;
