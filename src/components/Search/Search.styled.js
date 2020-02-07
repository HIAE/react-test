import styled from 'styled-components';
import { fontSize } from '../../shared/variables';

const SearchComponent = styled.input`
  max-width: 400px;
  width: 100%;
  height: 40px;
  border: none;
  padding: 8px 16px;
  border-radius: 26px;
  transition: 0.2s;
  margin-bottom: 32px;
  font-size: ${fontSize['u-fontSize-18']};

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    transition: 0.2s;
  }
`;

export default SearchComponent;
