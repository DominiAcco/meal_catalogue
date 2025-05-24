// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import api from '../services/Api';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Card,
  PokemonImage,
  SearchBarWrapper,
  SearchInput,
  Title,
} from './Home.styles';

interface Pokemon {
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await api.get('pokemon?limit=100');
        const details = await Promise.all(
          res.data.results.map(async (p: { name: string }) => {
            const detail = await api.get(`pokemon/${p.name}`);
            return {
              name: p.name,
              image: detail.data.sprites.front_default,
            };
          })
        );
        setPokemons(details);
      } catch (error) {
        console.error('Erro ao buscar os pokémons:', error);
      }
    };

    fetchPokemons();
  }, []);

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    if (!term) {
      setFilteredPokemon(null);
      return;
    }

    try {
      const res = await api.get(`pokemon/${term.toLowerCase()}`);
      const result: Pokemon = {
        name: res.data.name,
        image: res.data.sprites.front_default,
      };
      setFilteredPokemon(result);
    } catch (error) {
      setFilteredPokemon(null); // Não encontrado
    }
  };

  return (
    <>
      <SearchBarWrapper>
        <Title>Pokédex</Title>
        <SearchInput
          type="text"
          placeholder="Buscar pokémon..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </SearchBarWrapper>

      <Container>
        {filteredPokemon ? (
          <Card onClick={() => navigate(`/pokemon/${filteredPokemon.name}`)}>
            <h3>{filteredPokemon.name}</h3>
            <PokemonImage src={filteredPokemon.image} alt={filteredPokemon.name} />
          </Card>
        ) : (
          pokemons.map((pokemon) => (
            <Card key={pokemon.name} onClick={() => navigate(`/pokemon/${pokemon.name}`)}>
              <h3>{pokemon.name}</h3>
              <PokemonImage src={pokemon.image} alt={pokemon.name} />
            </Card>
          ))
        )}
      </Container>
    </>
  );
};

export default Home;
