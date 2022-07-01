import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LogoContainer = styled(Link)`
        display: flex;
        align-items: center;
        width: ${({ widhtcontainer }) => widhtcontainer};
        height: 100%;
        margin: 0 0 0 2rem;
        >img{
            width: ${({ width }) => width};
            margin: ${({ margin }) => margin ? ' 1rem 0 0 1rem' : ''};
            position: ${({ position }) => position}
        }
`
