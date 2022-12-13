import { Link } from 'react-router-dom'
import styled from 'styled-components'

const colorType = {
  default: '#FFFFFF',
  steel: '#CCCCCC',
  water: '#B0E2FF',
  bug: '#99CC33',
  dragon: '#AB82FF',
  electric: '#FFD700',
  ghost: '#778899',
  fire: '#FF7F00',
  fairy: '#FFB0FF',
  ice: '#ADD8E6',
  fighting: '#FF6A6A',
  normal: '#DDCCAA',
  grass: '#99FF66',
  psychic: '#FFB5C5',
  rock: '#CD853F',
  dark: '#A9A9A9',
  ground: '#DEB887',
  poison: '#CC88BB',
  flying: '#BAAAFF',
}

export const CardContainer = styled(Link)`
  width: 20rem;
  height: 12rem;
  border: 0.063rem solid var(--color-secondary, #18171c);
  border-radius: 1.3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: radial-gradient(circle, var(--background-secondary, #f0eff6) 65%, var(--background-primary, #18171c));
  box-shadow: 0 0 1rem var(--color-primary, #f4f4f4);
  transition: transform 0.6s ease;
  :hover {
    transform: scale(1.15);
  }
  > span {
    position: absolute;
    color: var(--color-secondary, #18171c);
    right: 0;
    top: 0;
    margin: 1rem 1rem 0 0;
    font-weight: bold;
    font-size: 1.4rem;
  }
  > img {
    width: 8rem;
    height: 8rem;
    transform: translateY(-4.5rem);
  }
  > h2 {
    position: absolute;
    margin: 0;
    font-weight: bold;
    font-size: 2rem;
    color: var(--color-secondary, #18171c);
    :first-letter {
      text-transform: uppercase;
    }
  }
  > div {
    margin-bottom: 0.8rem;
  }
`

export const CardType = styled.span`
  display: inline-block;
  padding: 0.18rem 1.5rem;
  margin: 0.6rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: 0.065rem solid var(--color-secondary, #18171c);
  box-shadow: 0 0 0.9rem var(--color-secondary, #18171c);
  border-radius: 2rem;
  text-align: center;
  color: #18171c;
  background: ${({ PokeType }) => colorType[PokeType] ?? colorType.default};
  :first-letter {
    text-transform: uppercase;
  }
`
