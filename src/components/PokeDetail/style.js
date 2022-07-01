import { CardType } from '../PokeCard/style'
import styled from 'styled-components'

const backgroundStat = ({ opacity }) => {
  return {
    hp: `rgba(96, 211, 148, ${opacity})`,
    attack: `rgba(241, 75, 61, ${opacity})`,
    defense: `rgba(253, 216, 93, ${opacity})`,
    'special-attack': `rgba(149, 184, 246, ${opacity})`,
    'special-defense': `rgba(177, 134, 241, ${opacity})`,
    speed: `rgba(255, 132, 79, ${opacity})`,
    default: `rgba(142, 68, 173, ${opacity})`
  }
}

export const PokeDetailContainer = styled.div`
    width: 30rem;
    height: 45rem;
    margin: 0  auto 2rem auto;
    border: 0.125rem solid var(--color-primary);
    border-radius: 1.99rem;
    position: relative;
    >img{
        width: 16rem;
        height: 16rem;
        transform: translateY(-14rem);
        margin: 0 auto;
    }
`

export const FirstPokeBackground = styled.div`
    position: relative;
    background: linear-gradient(to bottom, var(--first-backgroundColor-card), var(--second-backgroundColor-card));
    height: 20rem; 
    clip-path: ellipse(110% 95% at 50% 0);
    border-top-left-radius: 1.9rem;
    border-top-right-radius: 1.9rem;
    >h2{
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
    }
    >span{
        color: var(--color-card-primary);
        position: absolute;
        top: 2rem;
        right: 2rem;
        font-weight: bold;
        font-size: 1.6rem;
    }
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
    >div:nth-child(2){
        display: flex;
        justify-content: center;
        >div:nth-child(1){
            width: 10rem;
            margin: 0 .8rem;
        }
        >div:nth-child(2), >div:nth-child(3){
            width: 10rem;
            margin: 0 .8rem;
            border-left: solid .1rem var(--first-backgroundColor-card);
        }
        >div > h3{
            font-weight: bold;
            font-size: 1.4rem;
            margin: 0 0 1.1rem 0;
        }
        >div > span{
            width: 30%;
            font-weight: bold;
            text-align: justify;
            text-transform: uppercase;
            font-size: .9rem;
        }
    }
    >div:nth-child(3){
        display: flex;
        flex-direction: column;
        gap: .4rem;
        height: 100%;
        justify-content: center; 
        >h3{
            font-weight: bold;
            font-size: 1.4rem;
            margin: 0 0 1.1rem 0;
        }
        >div{
            display: flex;
            margin: 0 .5rem;
            gap: .4rem;
            justify-content: center;
        }
        >div > span:nth-child(1){
            width: 30%;
            font-weight: bold;
            text-align: justify;
            text-transform: uppercase;
            font-size: .9rem;
        }
        >div > span:nth-child(2){
            width: 10%;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            font-size: .9rem;
        }
    }
    `
export const PokeDetailType = styled(CardType)`
        padding: .2rem 1.8rem;
        margin: .8rem;
        font-size: 1.4rem;
    `

export const BarStats = styled.div`
        position: relative;
        width: 17.2rem;
        height: 1rem;
        border-radius: 1rem;
        background: ${({ bgStat, opacity }) => backgroundStat({ opacity })[bgStat] ?? backgroundStat({ opacity }).default};
    `

export const BackgroundBarStats = styled.div`
        position: absolute;
        background: ${({ bgStat, opacity }) => backgroundStat({ opacity })[bgStat] ?? backgroundStat({ opacity }).default};
        border-radius: 1rem;
        height: 1rem;
        width: ${({ baseStat }) => `${baseStat / 3}%`};
    `
