import styled from 'styled-components'

export const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  width: 75rem;
  gap: 1rem;
  padding: 2rem;

  border-radius: 8px;

  background: ${({ theme }) => theme['white']};

  overflow-y: scroll;

  @media (max-width: 1024px){
    width: 60rem;
  }

  @media (max-width: 768px){
    width: 45rem;
  }

  @media (max-width: 425px){
    width: 25rem;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 1rem;
`