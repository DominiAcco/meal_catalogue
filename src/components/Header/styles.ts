
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color:rgb(157, 62, 247);
  margin: 0;
`;

export const Controls = styled.div`
  display: flex;
  gap: 8px;
`;

export const SearchInput = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 250px;

  &:focus {
    outline: none;
    border-color: #3b4cca;
    box-shadow: 0 0 0 2px rgba(59, 76, 202, 0.2);
  }
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color:rgb(124, 62, 238);
  color: white;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color:rgb(1, 103, 255);
  }

  &:active {
    background-color: #1f2a8a;
  }
`;
