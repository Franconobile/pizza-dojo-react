import React from 'react'
import { CardCategoria } from './CategoriaStyle';

export const CategoriaCard = ({ id, img, title, category }) => {
  
  return (
    <CardCategoria
      whileTap={{ scale: 0.95 }} 
    >
      <img
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
    </CardCategoria>
  );
};

export default CategoriaCard;