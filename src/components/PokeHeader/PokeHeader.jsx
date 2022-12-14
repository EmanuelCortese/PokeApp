import { useContext } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsMoonStarsFill, BsSearch, BsSun } from 'react-icons/bs'
import logo from '../../assets/Logo.png'
import Context from '../../context/ThemeContext'
import { useSearchPokemons } from '../../hooks/useSearchPokemons'
import { PokeLogo } from '../PokeLogo/PokeLogo'
import { PokeHeaderMain, PokeHeaderTitle } from './style'

const PokeHeader = ({ show, title, margin, get = true, visible = true } = {}) => {
  const { changeTheme } = useContext(Context)
  const { handleKeyword } = useSearchPokemons({ get })
  const keywordValue = window.localStorage.getItem('keyword') ?? ''
  return (
    <PokeHeaderMain>
      <div>
        <PokeLogo width='100%' widhtcontainer='5rem' />
        <div>
          <BsSearch />
          {visible && (
            <input
              type='text'
              value={keywordValue}
              onChange={(e) => handleKeyword(e)}
              placeholder='Search a Pokemon by name...'
            />
          )}
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
      {show && <img src={logo} />}

      <PokeHeaderTitle margin={margin}>{title}</PokeHeaderTitle>
    </PokeHeaderMain>
  )
}

export default PokeHeader
