import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 6rem;
  padding: 1rem;
`

export const MarqueeContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme['gray-900']};
  max-width: 75rem;
  border-radius: 8px;
  gap: 1rem;

  @media (max-width: 1024px){
    max-width: 60rem;
  }

  @media (max-width: 768px){
    max-width: 45rem;
  }

  @media (max-width: 425px){
    max-width: 25rem;
  }
`