import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1080px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;

  && svg {
    cursor: pointer;
  }

  @media (max-width: 783px) { 
    justify-content: flex-start;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 20px 0; 
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 783px) {
    flex-direction: column;
    align-items: flex-start
  }
  margin: ${props => props.margin}

`;