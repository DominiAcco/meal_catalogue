import React from 'react';
import { Card, PokemonImage } from './styles';

export interface Pokemon {
  name: string;
  image: string;
}

interface Props {
  pokemon: Pokemon;
  onClick: (name: string) => void;
}

export const PokemonCard: React.FC<Props> = ({ pokemon, onClick }) => {
  const capitalized = 
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <Card onClick={() => onClick(pokemon.name)}>
      <h3>{capitalized}</h3>
      <PokemonImage src={pokemon.image} alt={pokemon.name} />
    </Card>
  );
};
