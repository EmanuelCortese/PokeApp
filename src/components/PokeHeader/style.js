import styled from 'styled-components'

export const PokeHeaderStyle = styled.div`
>div{
    display: flex;
    width: 100%;
    height: 4rem;
    background: var(--second-backgroundColor-card);
    gap: 4rem;
    align-items: center;
    >input{
            height: 1.5rem;
            width: 14rem;
            border: none;
            border-radius: 4rem;
            padding: .09rem .9rem;
            caret-color: auto;
            outline: none;
    }
}
>a:nth-child(2) img{
    width: 44rem;
    margin: 3rem 0 5rem 0;
    text-align: center;
}
`
export const PokeHeaderTitle = styled.h2`
    display: inline-block;
    width: 90%;
    margin: ${({ margin }) => margin ? '0 0 7rem 4rem' : '1rem 0 0 0'} ;
    text-align: left;
    font-size: 5rem;
    font-weight: 700;
    color: var(--second-backgroundColor-card);
`
