import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/Api';
import {
  Card,
  ImageWrapper,
  PokemonImage,
  Content,
  Title,
  Types,
  StatsGrid,
  BackButton
} from './PokeDetails.styles';

interface Stat { stat: { name: string }; base_stat: number; }
interface PokemonDetails {
  name: string;
  sprites: { other: { 'official-artwork': { front_default: string } } };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  height: number;
  weight: number;
  stats: Stat[];
}

const PokeDetails: React.FC = () => {
  const { name } = useParams<{ name?: string }>(); // name pode ser undefined
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    if (!name) return;
    api.get(`pokemon/${name}`)
      .then(res => setPokemon(res.data))
      .catch(err => console.error(err));
  }, [name]);

  if (!pokemon) return <Card>Carregando...</Card>;
  
  const capName = name
    ? name.charAt(0).toUpperCase() + name.slice(1)
    : '';

  const heightM = (pokemon.height / 10).toFixed(1);
  const weightKg = (pokemon.weight / 10).toFixed(1);

  return (
   
   <Card>
        
      <BackButton onClick={() => navigate('/')}>Voltar</BackButton>

      <ImageWrapper>
        <PokemonImage
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={capName}
        />
      </ImageWrapper>

      <Content>
        <Title>{capName}</Title>

        <Types>
          {pokemon.types.map(t => (
            <span key={t.type.name}>{t.type.name}</span>
          ))}
        </Types>

        <div>
          <span>Altura:</span> {heightM} m &nbsp;|&nbsp;
          <span>Peso:</span> {weightKg} kg
        </div>

        <StatsGrid>
          {pokemon.stats.map(s => (
            <div key={s.stat.name}>
              <span>{s.stat.name.replace('-', ' ')}</span>: {s.base_stat}
            </div>
          ))}
        </StatsGrid>
      </Content>
    </Card>
  );
};

export default PokeDetails;
