import React from 'react'
import { idNumber } from '../../utils/idNumber'
import { CardContainer, CardType } from './style'

function PokeCard ({ id, name, type, image }) {
  return (
    <CardContainer to={`detail/${id}`}>
      <span>{idNumber({ id })}</span>
      <img loading='lazy' src={image} alt={name} />
      <h2>{name}</h2>
      <div>
        {
            type?.map((type, index) => {
              return <CardType PokeType={type} key={index}>{type}</CardType>
            })
        }
      </div>
    </CardContainer>
  )
}

export default React.memo(PokeCard)
