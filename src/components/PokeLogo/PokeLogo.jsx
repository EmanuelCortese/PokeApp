import { HOME } from '../../routes'
import LogoHeader from '../../assets/Logo_Header.png'
import { LogoContainer } from './style'

export const PokeLogo = ({ width, margin, position, widhtcontainer }) => {
  return (
    <LogoContainer width={width} margin={margin} position={position} widhtcontainer={widhtcontainer} to={HOME}>
      <img src={LogoHeader} alt='Logo PokeApp' />
    </LogoContainer>
  )
}
