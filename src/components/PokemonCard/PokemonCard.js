import React from 'react'
import { Grid, Image, Label, Icon } from 'semantic-ui-react'
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants'
import '../../Styles/styles.css'

const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'

export default function PokemonCard() {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='pokemon_card'>
        <Icon name='favorite' color={FAV_COLOR} />
        <Image centered src={imageUrl} alt='pokemon front' />
        <p className='pokemon_card-title'>Ditto</p>
        <Label color={MAIN_COLOR}>Normal</Label>
      </div>
    </Grid.Column>
  )
}