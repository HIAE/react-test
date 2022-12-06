import styled from "styled-components"

export const OptionsContainer = styled.li`
  display: grid;
  grid-template-columns: 1fr 90%;
  border-bottom: 1px solid ${({ theme }) => theme["gray-100"]};
`

export const SymbolText = styled.strong`
  width: 100%;
`

export const NameText = styled.p`
  text-align: right;
  width: 100%;
`