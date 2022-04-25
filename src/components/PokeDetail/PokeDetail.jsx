import {
  FirstPokeBackground,
  PokeDetailContainer,
  PokeDetailId,
  PokeDetailImg,
  PokeDetailTitle,
  PokeDetailType,
  SecondPokeBackground,
  BaseStatsContainer,
  BaseStats,
  StatsTitle,
  BarStats,
  BackgroundBarStats,
  Stats,
  BaseStatistics
} from './style'

export const PokeDetail = ({ id, name, image, types, specie, height, weight, stats }) => {
  const idNumb = id.toString().length === 1
    ? `#00${id}`
    : id.toString().length === 2 ? `#0${id}` : `#${id}`

  // Convertir decimetros a metros
  const decimeterToMeter = height * 0.1
  // Reducir los decimales a 1
  const Pokeheight = decimeterToMeter.toFixed(1)

  // Convertir hectogramos a kilogramos
  const hectogramsToKilograms = weight * 0.1

  const Pokeweight = hectogramsToKilograms.toFixed(1)

  // Quitar la palabra Pokémos del final
  const PokeSpecies = specie.replace('Pokémon', '')

  return (
    <PokeDetailContainer>
      <FirstPokeBackground>
        <PokeDetailTitle>{name}</PokeDetailTitle>
        <PokeDetailId>{idNumb}</PokeDetailId>
      </FirstPokeBackground>

      <PokeDetailImg src={image} alt='Pokemon Detail' />

      <SecondPokeBackground>
        <div>
          {
                types.map((type, index) => <PokeDetailType PokeType={type} key={index}>{type}</PokeDetailType>)
            }
        </div>

        <BaseStatsContainer flex='flex'>
          <BaseStats>
            <StatsTitle>Species</StatsTitle>
            <Stats>{PokeSpecies}</Stats>
          </BaseStats>
          <BaseStats border='isBorder'>
            <StatsTitle>Height</StatsTitle>
            <Stats>{Pokeheight} m</Stats>
          </BaseStats>
          <BaseStats border='isBorder'>
            <StatsTitle>Weight</StatsTitle>
            <Stats>{Pokeweight} kg</Stats>
          </BaseStats>
        </BaseStatsContainer>

        <BaseStatsContainer flex='flex' direction='column' gap='gap' fullHeight='true'>
          <StatsTitle>Base Stats</StatsTitle>
          {stats.map(({ name, baseStat }) => (
            <BaseStatistics key={name}>
              <Stats>{name}</Stats>
              <Stats size='isSmall' textAlign='center' bold='isBold'>{baseStat}</Stats>
              <BarStats bgStat={name} opacity='true'>
                <BackgroundBarStats bgStat={name} baseStat={baseStat} />
              </BarStats>
            </BaseStatistics>)
          )}
        </BaseStatsContainer>

      </SecondPokeBackground>

    </PokeDetailContainer>
  )
}
