// src/pages/Home.styled.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  width: 160px;
  padding: 12px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const PokemonImage = styled.img`
  width: 96px;
  height: 96px;
  margin-top: 8px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  flex-direction: column;
`;

export const SearchInput = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 300px;
  margin-top: 8px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 12px;
`;
