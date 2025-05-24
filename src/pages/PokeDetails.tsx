import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/Api';

interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
}

const PokeDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    if (name) {
      api.get(`pokemon/${name}`).then(res => setPokemon(res.data));
    }
  }, [name]);

  if (!pokemon) return <div>Carregando...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>Tipos:</h3>
      <ul>
        {pokemon.types.map(t => (
          <li key={t.type.name}>{t.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokeDetails;
