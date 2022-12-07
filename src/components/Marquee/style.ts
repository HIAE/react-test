import styled from 'styled-components'

export const Item = styled.span`
  display: inline-block;
  margin-top: 4px;
  margin-right: 100px;
  border-radius: 8px;
  padding: 5px;

  font-size: 1rem;
  gap: 1rem;
`

interface PriceProps {
  negative?: boolean
}

export const Price = styled.span<PriceProps>`
  color: ${({ theme, negative }) => negative ? theme['red-300'] : theme['green-300']};
  margin-left: .5rem;

  svg {
    width: 1rem;
    height: 1rem;
    margin-left: .2rem;
  }
`