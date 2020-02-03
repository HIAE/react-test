import styled from 'styled-components';

const SearchComponent = styled.input`
  width: 300px;
  height: 40px;
  border: none;
  padding: 16px;
  border-radius: 26px;
  transition: 0.2s;

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    transition: 0.2s;
  }
`;

export default SearchComponent;
