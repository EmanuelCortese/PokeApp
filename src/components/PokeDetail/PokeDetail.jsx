import { useContext, useEffect } from 'react'
import noImage from '../../assets/No-Image.png'
import { PokeContext } from '../../context/PokeContext'
import { idNumber } from '../../utils/idNumber'
import {
  BackgroundBarStats,
  BarStats,
  FirstPokeBackground,
  PokeDetailContainer,
  PokeDetailType,
  SecondPokeBackground,
} from './style'

const convertUnit = (unit) => {
  return reduceDecimals(unit * 0.1)
}

const reduceDecimals = (unit) => {
  return unit.toFixed(1)
}

export const PokeDetail = ({ id, name, image, types, specie, height, weight, stats }) => {
  const { dispatch } = useContext(PokeContext)
  useEffect(() => dispatch({ type: 'reset_pokemons' }), [])
  const PokeHeight = convertUnit(height)

  const PokeWeight = convertUnit(weight)

  const PokeSpecies = specie?.replace('Pokémon', '')

  return (
    <PokeDetailContainer>
      <FirstPokeBackground>
        <h2>{name}</h2>
        <span>{idNumber({ id })}</span>
      </FirstPokeBackground>

      <img src={image ?? noImage} alt='Pokemon Detail' />

      <SecondPokeBackground>
        <div>
          {types?.map((type, index) => (
            <PokeDetailType PokeType={type} key={index}>
              {type}
            </PokeDetailType>
          ))}
        </div>

        <div>
          <div>
            <h3>Species</h3>
            <span>{PokeSpecies}</span>
          </div>
          <div>
            <h3>Height</h3>
            <span>{PokeHeight} m</span>
          </div>
          <div>
            <h3>Weight</h3>
            <span>{PokeWeight} kg</span>
          </div>
        </div>

        <div>
          <h3>Base Stats</h3>
          {stats?.map(({ name, baseStat }) => (
            <div key={name}>
              <span>{name}</span>
              <span size='isSmall' bold='isBold'>
                {baseStat}
              </span>
              <BarStats bgStat={name} opacity='.3'>
                <BackgroundBarStats opacity='1' bgStat={name} baseStat={baseStat} />
              </BarStats>
            </div>
          ))}
        </div>
      </SecondPokeBackground>
    </PokeDetailContainer>
  )
}
