import styled from 'styled-components'

export const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  width: 75rem;
  gap: 1rem;
  padding: 2rem;

  border-radius: 8px;

  background: ${({ theme }) => theme['white']};
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 1rem;
`