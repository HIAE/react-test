import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;

  position: relative;
`

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3.5rem 1fr; 

  padding: 2rem;
  min-width: 75rem;

  @media (max-width: 1024px){
    min-width: 60rem;
  }

  @media (max-width: 768px){
    min-width: 45rem;
  }

  @media (max-width: 425px){
    min-width: 25rem;
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 8px;

  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.1);
`

export const InputContainer = styled.section`
  display: grid;
  grid-template-columns: 80% 1fr;
  gap: 1rem;
`