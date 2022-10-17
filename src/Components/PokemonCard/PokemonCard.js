import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'
import styled from 'styled-components'




const PokemonCard = (props) => {

    const evoluirPokemon = () => {
        console.log("Cliquei no botão de evoluir")
    }
    
  return (
    <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={() => props.evoluirPokemon(props.pokemon)}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard