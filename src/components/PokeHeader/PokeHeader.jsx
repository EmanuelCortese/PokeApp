import { Link } from 'react-router-dom'
import { PokeHeaderStyle, PokeHeaderTitle } from './style'
import logo from '../../assets/Logo.png'
import { PokeLogo } from '../PokeLogo/PokeLogo'

export const PokeHeader = ({ show, title, margin }) => {
  return (
    <PokeHeaderStyle>
      <div>
        <PokeLogo width='100%' widhtcontainer='5rem' />
        <input type='text' />
      </div>
      {show && (
        <Link to='/'>
          <img src={logo} />
        </Link>
      )}

      <PokeHeaderTitle margin={margin}>
        {title}
      </PokeHeaderTitle>

    </PokeHeaderStyle>
  )
}
