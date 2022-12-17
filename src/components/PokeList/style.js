import styled from 'styled-components'

export const PokemonList = styled.div`
  min-height: 100vh;
  max-width: 90vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: 7rem;
  padding: 0 0 4rem 0;
  margin: 0 auto;
  > span {
    width: 90vw;
    color: var(--color-primary);
    font-size: 2rem;
    font-family: monospace;
    font-weight: bold;
  }
  .loader {
    width: 90vw;
    height: 20vh;
    margin: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
