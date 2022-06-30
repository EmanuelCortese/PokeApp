import PixelButton from '../../assets/Pixel_button.png'
import styled from 'styled-components'

export const PokeError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ECF0F1;
    height: 100vh;
    >div:nth-child(1){
        width: 100vw;
        height: 6rem;
        text-align: left;
    }
    >div:nth-child(2){ 
        width: 100vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        >img{
            width: 70rem;
        }
    }
    >h2{
        font-family: 'Press Start 2P', cursive;
        margin: 0 0 5rem 0;
    }

    >a{
        text-decoration: none;
        padding: 1.2rem 0;
        margin-bottom: 4rem;
        font-family: 'Press Start 2P', cursive;
        border: 0.099rem solid var(--color-blue);
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        width: 14rem;
        letter-spacing: 0.063rem;
        word-spacing: -.6rem; 
        text-decoration: none;
        text-align: center;
        color: var(--color-blue);
        &:hover {
            background: var(--color-yellow) url(${PixelButton}); // 360px x 1080px
            transition-delay: 0.7s;
            background-size: 14rem;
            animation: animate var(--speed-fast) steps(8) forwards;
        }

        &::before{
            content: '';
            width: 10px;
            height: 10px;
            display: block;
            position: absolute;
            background:  #ECF0F1;
            border-bottom: 0.099rem solid var(--color-blue);
            border-right: 0.099rem solid var(--color-blue);
        }

        &::after{
            content: '';
            width: 10px;
            height: 10px;
            display: block;
            position: absolute;
            background:  #ECF0F1;
            border-bottom: 0.099rem solid var(--color-blue);
            border-left: 0.099rem solid var(--color-blue)
        }

        &::before{  top: -1.6px; left: -1.6px; }
        &::after{  top: -1.6px; right: -1.6px; }
        
        @keyframes animate {
            0% {
            background-position-y: 0;
            }
            100% {
            background-position-y: -600px;
            }
        }

        >div{
            &::before{
                content: '';
                width: 10px;
                height: 10px;
                display: block;
                position: absolute;
                background:  #ECF0F1;
                border-top: 0.099rem solid var(--color-blue);
                border-right: 0.099rem solid var(--color-blue);
            }
            &::after{
                content: '';
                width: 10px;
                height: 10px;
                display: block;
                position: absolute;
                background:  #ECF0F1;
                border-top: 0.099rem solid var(--color-blue);
                border-left: 0.099rem solid var(--color-blue);
            }

            &::before{ bottom: -1.6px; left: -1.6px; }
            &::after{ bottom: -1.6px; right: -1.6px; }
        }
    }
`
