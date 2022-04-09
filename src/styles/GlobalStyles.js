import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root{
        --bacKground-primary:  #ECF0F1;
        --color-primary: #18171C;
        --first-backgroundColor-card: #8E44AD;
        --second-backgroundColor-card: #4A235A;
        --color-card-primary: #F4F4F4;
    }

    body {
        background-color: var(--bacKground-primary);
        color: var(--color-primary);
        margin: 0;
        font-family: Helvetica, Serif, Arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
      
`
