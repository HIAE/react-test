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
  width: 57.5rem;
  height: 21.25rem;
  gap: 1rem;

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
  height: 3.5rem;
  gap: 1rem;
`

export const CardContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme['gray-300']};
  border-radius: 8px;
`