import styled from 'styled-components';

export const Card = styled.div`
  max-width: 400px;
  margin: 40px auto;
  background-color:rgb(0, 162, 255);
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  overflow: hidden;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

export const ImageWrapper = styled.div`
  background: linear-gradient(180deg,rgb(0, 0, 0) 0%,rgb(0, 162, 255) 100%);
  padding: 32px;
`;

export const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

export const Content = styled.div`
  padding: 24px;
`;

export const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 28px;
  color: #333;
`;

export const Types = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;

  span {
    background-color:rgb(120, 1, 255) ;
    border-radius: 12px;
    padding: 4px 12px;
    font-size: 14px;
    text-transform: capitalize;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 16px;

  div {
    background-color:rgb(255, 255, 255);
    padding: 8px;
    border-radius: 8px;
    font-size: 14px;

    span {
      font-weight: 600;
      text-transform: capitalize;
    }
  }
`;

export const BackButton = styled.button`
  margin: 16px;
  padding: 8px 16px;
  border: 2px solid #3b4cca;
  color: #3b4cca;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(255, 255, 255);
  }
`;
