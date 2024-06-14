import styled, { keyframes } from 'styled-components';

export const LoadingScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;

export const LetterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Merienda', cursive;
  font-size: 96px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Letter = styled.span`
  position: relative;
  opacity: 0;
  animation: ${props => (props.index % 2 === 0 ? enterLeft : enterRight)} 1.2s
    forwards;
  color: ${props => props.color};
  animation-delay: ${props => props.delay};
`;

const enterLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const enterRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
