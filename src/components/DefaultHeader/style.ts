import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 6rem;
  padding: 1rem;
`

const sizes = {
  'small': '57.5rem',
  'medium': '75rem',
}

interface MarqueeContainerProps {
  size: 'small' | 'medium'
}

export const MarqueeContainer = styled.div<MarqueeContainerProps>`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme['gray-900']};
  max-width: ${({ size }) => sizes[size]};
  border-radius: 8px;
  gap: 1rem;
`