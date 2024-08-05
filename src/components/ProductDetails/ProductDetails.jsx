import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/productsData';
import {
  ProductDetailsWrapper,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
} from './ProductDetails.styled';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find(product => product.id === parseInt(id));

  if (!product) {
    return <p>Produsul nu a fost găsit!</p>;
  }

  return (
    <ProductDetailsWrapper>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductInfo>
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
