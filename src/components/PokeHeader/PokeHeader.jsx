import { Link } from 'react-router-dom'
import { PokeHeaderMain, PokeHeaderTitle } from './style'
import logo from '../../assets/Logo.png'
import { PokeLogo } from '../PokeLogo/PokeLogo'
import { BsSearch, BsSun, BsMoonStarsFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import Context from '../../context/ThemeContext'
import { useContext } from 'react'

export const PokeHeader = ({ show, title, margin }) => {
  const { changeTheme } = useContext(Context)
  return (
    <PokeHeaderMain>
      <div>
        <PokeLogo width='100%' widhtcontainer='5rem' />
        <div>
          <BsSearch />
          <input type='text' />
        </div>
        <div>
          <label className='switchBackgound' htmlFor='switch'>
            <BsMoonStarsFill />
            <input type='checkbox' id='switch' onChange={() => changeTheme()} />
            <span />
            <BsSun />
          </label>
          <AiOutlineUser />
        </div>
      </div>
      {show && (
        <Link to='/'>
          <img src={logo} />
        </Link>
      )}

      <PokeHeaderTitle margin={margin}>
        {title}
      </PokeHeaderTitle>

    </PokeHeaderMain>
  )
}
