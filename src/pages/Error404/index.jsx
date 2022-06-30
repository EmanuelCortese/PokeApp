import { PokeError404 } from '../../components/PokeError404/PokeError404'

export default function ErrorPage ({ message }) {
  return (
    <PokeError404 message={message} />
  )
}
