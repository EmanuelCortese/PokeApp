import { Link } from 'react-router-dom'
import styled from 'styled-components'

const backgroundType = ({ PokeType }) => {
  switch (PokeType) {
    case 'steel':
      return '#CCCCCC'
    case 'water':
      return '#B0E2FF'
    case 'bug':
      return '#99CC33'
    case 'dragon':
      return '#AB82FF'
    case 'electric':
      return '#FFD700'
    case 'ghost':
      return '#778899'
    case 'fire':
      return '#FF7F00'
    case 'fairy':
      return '#FFB0FF'
    case 'ice':
      return '#ADD8E6'
    case 'fighting':
      return '#FF6A6A'
    case 'normal':
      return '#DDCCAA'
    case 'grass':
      return '#99FF66'
    case 'psychic':
      return '#FFB5C5'
    case 'rock':
      return '#CD853F'
    case 'dark':
      return '#A9A9A9'
    case 'ground':
      return '#DEB887'
    case 'poison':
      return '#CC88BB'
    case 'flying':
      return '#BAAAFF'
  }
}

export const CardContainer = styled(Link)`
    width: 20rem;
    border: .063rem solid #000000;
    border-radius: 1.3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background:  radial-gradient(circle, var(--first-backgroundColor-card) , var(--second-backgroundColor-card)); ;
    color: var(--color-card-primary);
    box-shadow: 0 0 1rem var(--color-primary);
    transition: transform .6s ease;
    :hover{
      transform: scale(1.15);
    }
`
export const CardID = styled.span`
    position: absolute;
    color: var(--color-card-primary);
    right: 0;
    top: 0;
    margin: 1rem 1rem 0 0;
    font-weight: bold;
    font-size: 1.4rem;
    -webkit-text-stroke: .07rem #000000;
`

export const CardImage = styled.img`
    width: 8rem;
    height: 8rem;
    transform: translateY(-4.5rem)
`

export const CardTitle = styled.h2`
    position: absolute;
    margin: 0;
    font-weight: bold;
    font-size: 2rem;
    -webkit-text-stroke: .09rem #000000;
    :first-letter{
        text-transform: uppercase;
    }
`

export const CardTypeContainer = styled.div`
    margin-bottom: .8rem;
`

export const CardType = styled.span`
    display: inline-block;
    padding: .18rem 1.5rem;
    margin: .6rem;
    font-size: 1.1rem;
    font-weight: 600;
    border: 0.065rem solid var(--color-primary);
    box-shadow: 0 0 .9rem var(--color-primary);
    border-radius: 2rem;
    text-aling: center;
    color: var(--color-primary);
    background: ${({ PokeType }) => {
       return backgroundType({ PokeType })
    }};
    :first-letter{
        text-transform: uppercase;
    }
`
