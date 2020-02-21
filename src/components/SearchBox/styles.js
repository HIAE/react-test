import styled from 'styled-components';

import InputComponent from 'components/Input'

export const Container = styled.div`
  width: 500px;

  @media (max-width: 783px) {
    width: 250px;
  }
`;

export const Input = styled(InputComponent).attrs({
  type: 'text',
  placeholder: 'Type to search for a company'
})`
  width: 100%;
  height: 32px;
  padding: 0 16px;
  margin-bottom: 8px;
  border: 0.5px solid rgb(0 0 0 / 0.1);
  border-radius: 16px;
  background-color: transparent;
  transition: all 0.1s ease-in-out;

  &:focus{
    border: 2px solid rgb(0 0 0 / 0.6);
  }
`;

export const DisplayBox =  styled.div`
  width: 100%;
  background-color: #fff; 
  padding: 16px;
  box-shadow: 0px 3px 5px 2px rgba(39, 39, 39, 0.2);
`;

export const DisplayItem =  styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &&:hover, && p:not(:hover) {
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
