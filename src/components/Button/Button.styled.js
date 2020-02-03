import styled from 'styled-components';

const ButtonComponent = styled.button`
  background-color: #ebedee;
  width: 100px;
  padding: 16px;
  border-radius: 26px;
  border: none;
  margin-bottom: 30px;
  transition: 0.2s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    transition: 0.2s;
  }
`;

export default ButtonComponent;
