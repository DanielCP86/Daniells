import styled from 'styled-components';

export const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 50px;
  }
`;

export const ProductTitle = styled.h1`
  margin: 0 0 10px;
`;

export const ProductDescription = styled.p`
  margin: 0;
`;
