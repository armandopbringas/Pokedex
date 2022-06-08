import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import { Grid } from 'semantic-ui-react'
import '../../Styles/styles.css'

export default function PokemonList() {
	const pokemons = Array(20).fill('')

	return (
		<Grid className='pokemon_list'>
			{pokemons.map((pokemon,index) => <PokemonCard key={index} />)}
		</Grid>
	)
}