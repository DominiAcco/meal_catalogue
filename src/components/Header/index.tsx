import React from 'react';
import {
  Wrapper,
  Title,
  Controls,
  SearchInput,
  SearchButton,
} from './styles';

interface Props {
  searchTerm: string;
  onChange: (v: string) => void;
  onSearch: () => void;
}

export const Header: React.FC<Props> = ({ searchTerm, onChange, onSearch }) => (
  <Wrapper>
    <Title>Pokédex</Title>
    <Controls>
      <SearchInput
        type="text"
        placeholder="Buscar pokémon..."
        value={searchTerm}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onSearch()}
      />
      <SearchButton onClick={onSearch}>Buscar</SearchButton>
    </Controls>
  </Wrapper>
);
