import React from 'react';
import { useSelector } from 'react-redux';
import CategoriaCard from './CategoriaCard';

import { CategoriasContainer } from './CategoriaStyle';

const CategoriasCard = () => {
    const Categories = useSelector(state => state.categories.categories)
    return (
      <CategoriasContainer>
        {Categories.map(category => (
          <CategoriaCard key={category.id} {...category} />
        ))}
      </CategoriasContainer>
    );
  };
  
  export default CategoriasCard;