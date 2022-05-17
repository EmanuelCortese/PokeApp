import styled from 'styled-components'

export const PokemonList = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    gap: 7rem;
    width: 85%;
    margin: 0 auto;
`

export const PokemonListButton = styled.button`
    width: 12rem;
    font-family: 'Press Start 2P', cursive;
    background: radial-gradient(circle, var(--first-backgroundColor-card), var(--second-backgroundColor-card));
    margin 3rem 0;
    font-size: 1.1rem;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: .8rem;
    cursor: pointer;
    border: .1rem solid #000000;
    border-radius: 2rem;
    -webkit-text-stroke: .001rem #000000;
    font-weight: bold;
    word-spacing: -.6rem;
    opacity: .6;
    transition: opacity .3s ease, box-shadow .3s ease;
    :hover{
        opacity: 1;
        box-shadow: 0 0 2rem var(--first-backgroundColor-card);
    } 
`
