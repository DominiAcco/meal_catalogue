import React, { useEffect, useState } from 'react';
import api from '../services/Api';
import { useNavigate } from 'react-router-dom';

import { Header } from '../components/Header';
import { PokemonCard ,type Pokemon } from '../components/PokemonCard';
import { Container } from '../components/PokemonCard/styles';

export const Home: React.FC = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [visiblePokemons, setVisiblePokemons] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  
  useEffect(() => {
    (async () => {
      const res = await api.get('pokemon?limit=100');
      const details = await Promise.all(
        res.data.results.map(async (p: { name: string }) => {
          const d = await api.get(`pokemon/${p.name}`);
          return { name: p.name, image: d.data.sprites.front_default };
        })
      );
      setAllPokemons(details);
      setVisiblePokemons(details);
    })();
  }, []);

  // reset quando apaga
  useEffect(() => {
    if (!searchTerm.trim()) setVisiblePokemons(allPokemons);
  }, [searchTerm, allPokemons]);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    setVisiblePokemons(
      allPokemons.filter(p =>
        p.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <>
      <Header
        searchTerm={searchTerm}
        onChange={setSearchTerm}
        onSearch={handleSearch}
      />
      <Container>
        {visiblePokemons.map(p => (
          <PokemonCard
            key={p.name}
            pokemon={p}
            onClick={name => navigate(`/pokemon/${name}`)}
          />
        ))}
      </Container>
    </>
  );
};

export default Home;
