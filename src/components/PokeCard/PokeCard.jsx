import { CardContainer, CardID, CardImage, CardType, CardTypeContainer, CardTitle } from './style'
export const PokeCard = ({ id, name, type, image }) => {
  return (
    <CardContainer to={`detail/${id}`}>
      <CardID>#{id}</CardID>
      <CardImage loading='lazy' src={image} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CardTypeContainer>
        {
            type?.map(type => <CardType PokeType={type} key={type}>{type}</CardType>)
        }
      </CardTypeContainer>
    </CardContainer>
  )
}
