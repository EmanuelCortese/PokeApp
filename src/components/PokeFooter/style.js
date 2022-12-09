import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100vw;
  height: 3rem;
  position: fixed;
  bottom: 0;
  background: var(--background-secondary);
  color: var(--color-secondary);
  font-family: monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  > span {
    display: flex;
    align-items: center;
    column-gap: 0.4rem;
  }
  > span > svg {
    font-size: 1.6rem;
    color: #fe251b;
  }
`
