import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-blue: #3d7dca;
        --color-yellow: #FFCB05;
        --speed-normal: 0.8s;
        --speed-fast: 0.4s;
        --switch-sun-color: #FDFD96;
        --switch-moon-color: #ADD8E6;
    }

    #dark{
      --background-primary:  #18171C;
      --background-secondary: #F0EFF6;
      --color-primary: #F4F4F4;
      --color-secondary: #18171C;
      --translateX-button: 1.4rem;
      --switch-background: #ADD8E6;
      }

    #light{
      --background-primary: #F0EFF6;
      --background-secondary: #18171C;
      --color-primary: #18171C;
      --color-secondary: #F4F4F4;
      --translateX-button: -1.4rem;
      --switch-background: #FDFD96;
    }

    body {
        background-color: var(--background-primary,  #18171C);
        color: var(--color-primary);
        margin: 0;
        font-family: Tahoma;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
`
