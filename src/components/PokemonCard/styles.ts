import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 16px;
  width: 180px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform .2s;
  background-color: rgb(76, 163, 245);
 

  &:hover {
    transform: scale(1.05);
    background-color:rgb(255, 255, 255);
  }

  h3 {
    margin-top: 12px;
    font-size: 18px;
    font-weight: 500;
    color: #333;
  }
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
`;
export const Container = styled.div`
  display:flex;
  flex-wrap: wrap;
  gap: 20px;
    margin: 0 auto;
  
   
  padding: 20px 40px;
  justify-items: center;
`;
