import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon0, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
    id: 0
  })

  const [pokemon1, setPokemon1] = useState(
    {
      name: "Charmander",
      type: "Fire",
      evolved: false,
      weight: 3,
      color: 'orange',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      id: 1
    });
    const [pokemon2, setPokemon2] = useState(
      {
        name: "Bulbassaur",
        type: "grass",
        evolved: false,
        weight: 2,
        color: 'green',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        id: 2
      });

      const [pokemon3, setPokemon3] = useState(
        {
          name: "Squirtle",
          type: "Water",
          evolved: true,
          weight: 3,
          color: 'blue',
          image: '  https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
          id: 3
        });

        const [pokemon4, setPokemon4] = useState(
          {
            name: "Pikachu",
            type: "Electric",
            evolved: true,
            weight: 4,
            color: 'yellow',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
            id: 4
          });


  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard pokemon={pokemon0}  />
      <PokemonCard pokemon={pokemon1}  />
      <PokemonCard pokemon={pokemon2}  />
      <PokemonCard pokemon={pokemon3}  />
      <PokemonCard pokemon={pokemon4}  />
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
