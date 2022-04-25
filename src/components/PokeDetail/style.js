import { CardType } from '../PokeCard/style'
import styled from 'styled-components'

// Backgroun con Headecimales
// const bgStats = ({ bgStat }) => {
//   switch (bgStat) {
//     case 'hp':
//       return '#60D394'
//     case 'attack':
//       return '#F14B3D'
//     case 'defense':
//       return '#FDD85D'
//     case 'special-attack':
//       return '#95B8F6'
//     case 'special-defense':
//       return '#B186F1'
//     case 'speed':
//       return '#FF844F'
//   }
// }

const bgStats = ({ bgStat, opacity }) => {
  const bgOpacity = opacity ? '.3' : '1'
  switch (bgStat) {
    case 'hp':
      return `rgb(96, 211, 148, ${bgOpacity})`
    case 'attack':
      return `rgb(241, 75, 61, ${bgOpacity})`
    case 'defense':
      return `rgb(253, 216, 93, ${bgOpacity})`
    case 'special-attack':
      return `rgb(149, 184, 246, ${bgOpacity})`
    case 'special-defense':
      return `rgb(177, 134, 241, ${bgOpacity})`
    case 'speed':
      return `rgb(255, 132, 79, ${bgOpacity})`
  }
}

export const PokeDetailContainer = styled.div`
    width: 30rem;
    height: 45rem;
    margin: 0 auto 4rem ;
    border: 0.125rem solid var(--color-primary);
    border-radius: 1.99rem;
    position: relative;
`

export const FirstPokeBackground = styled.div`
    position: relative;
    background: linear-gradient(to bottom, var(--first-backgroundColor-card), var(--second-backgroundColor-card));
    height: 20rem; 
    clip-path: ellipse(110% 95% at 50% 0);
    border-top-left-radius: 1.9rem;
    border-top-right-radius: 1.9rem;
`
export const PokeDetailTitle = styled.h2`
    color: var(--color-card-primary);
    margin: 0;
    top: 2rem;
    left: 2rem;
    position: absolute;
    font-weight: bold;
    letter-spacing: .1rem;
    font-size: 2rem;
    -webkit-text-stroke: .1rem #000000;
    :first-letter{
        text-transform: uppercase;
    }
`
export const PokeDetailId = styled.span`
    color: var(--color-card-primary);
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-weight: bold;
    font-size: 1.6rem;
`

export const SecondPokeBackground = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
    margin-top: 2rem;
    position: absolute;
    top: 20rem;
    height: 50%;
    width: 100%;
`

export const PokeDetailImg = styled.img`
    width: 16rem;
    height: 16rem;
    transform: translateY(-14rem);
    margin: 0 auto;
`
export const PokeDetailType = styled(CardType)`
    padding: .2rem 1.8rem;
    margin: .8rem;
    font-size: 1.4rem;
`

export const BaseStatsContainer = styled.div`
    display: ${({ flex }) => flex && 'flex'};
    flex-direction: ${({ direction }) => `${direction}`}; 
    gap: ${({ gap }) => gap ? '.4rem' : ''};
    height: ${({ fullHeight }) => fullHeight && '100%'};
    justify-content: center; 
`

export const BaseStatistics = styled.div`
    display: flex;
    margin: 0 .5rem;
    gap: .4rem;
    justify-content: center;
`

export const StatsTitle = styled.h3`
    font-weight: bold;
    font-size: 1.4rem;
    margin: 0 0 1.1rem 0;
    color: var(--first-backgroundColor-card);
`

export const BaseStats = styled.div`
    width: 10rem;
    margin: 0 .8rem;
    border-left: ${({ border }) => border === 'isBorder' && 'solid .1rem var(--first-backgroundColor-card)'}
`

export const Stats = styled.span`
    width: ${({ size }) => size === 'isSmall' ? '10%' : '30%'};
    /*font-weight: ${({ bold }) => bold === 'isBold' && 'bold'};*/
    font-weight: bold;
    text-align: ${({ textAlign }) => textAlign === 'center' ? 'center' : 'justify'};
    text-transform: uppercase;
    font-size: .9rem;
`

export const BarStats = styled.div`
    position: relative;
    width: 17.2rem;
    height: 1rem;
    border-radius: 1rem;
    background: ${({ bgStat, opacity }) => bgStats({ bgStat, opacity })};
`

export const BackgroundBarStats = styled.div`
    position: absolute;
    background: ${({ bgStat, opacity }) => bgStats({ bgStat, opacity })};
    border-radius: 1rem;
    height: 1rem;
    width: ${({ baseStat }) => `${baseStat / 3}%`};
`
