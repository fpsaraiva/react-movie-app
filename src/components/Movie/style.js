import styled from 'styled-components';

export const MovieCard = styled.div `
  background-color: #373b69;
  border-radius: 3px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  margin: 1rem;
  width: 300px;
`;

export const MovieImage = styled.img `
  object-fit: cover;
  height: 450px;
  width: 100%;
`;

export const MovieInformation = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const MovieTitle = styled.h3 `
  margin: 0;
`;

export const MovieOverview = styled.div `
  background-color: #373b69;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  color: #373b69;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  max-height: 100%;
  transform: translateY(98%);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(0%);
    background-color: #fff;
  }
`;
