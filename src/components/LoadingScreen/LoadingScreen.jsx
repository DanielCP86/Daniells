import React from 'react';
import {
  LoadingScreenContainer,
  LetterContainer,
  Letter,
} from './LoadingScreen.styled';

const LoadingScreen = () => {
  const letters = [
    { char: 'D', color: 'green', delay: '0s' },
    { char: 'A', color: 'yellow', delay: '0.2s' },
    { char: 'N', color: 'purple', delay: '0.4s' },
    { char: 'I', color: 'orange', delay: '0.6s' },
    { char: 'E', color: 'blue', delay: '0.8s' },
    { char: 'L', color: 'yellow', delay: '1s' },
    { char: 'L', color: 'yellow', delay: '1.2s' },
    { char: "'", color: 'blue', delay: '1.4s' },
    { char: 'S', color: 'pink', delay: '1.6s' },
  ];

  return (
    <LoadingScreenContainer>
      <LetterContainer>
        {letters.map((letter, index) => (
          <Letter
            key={index}
            color={letter.color}
            delay={letter.delay}
            index={index}
          >
            {letter.char}
          </Letter>
        ))}
      </LetterContainer>
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
