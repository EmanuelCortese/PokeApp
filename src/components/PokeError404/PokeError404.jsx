import { HOME } from '../../routes'
import Error404Img from '../../assets/Error404.png'
import { PokeError } from './style'
import { usePokemons } from '../../hooks/usePokemons'
import { Link } from 'react-router-dom'
import { PokeLogo } from '../PokeLogo/PokeLogo'

export const PokeError404 = ({ message }) => {
  const { error } = usePokemons()
  return (
    <PokeError>
      <div>
        <PokeLogo width='7rem' margin='true' widhtcontainer='7rem' position='absolute' />
      </div>
      <div>
        <img src={Error404Img} alt='Error Image' />
      </div>

      <h2>{message ?? 'Sorry! But the requested page is not found.'}</h2>

      {error ? null : <Link to={HOME}><div>Back to Home</div></Link>}
    </PokeError>
  )
}
