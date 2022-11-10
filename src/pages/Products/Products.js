import React from 'react'
import Categorias from '../../components/Categorias/CategoriasCard';
import ProductosCard from '../../components/ProductsCard/ProductosCard';

import {
  CategoriasWrapper,
  ProductosWrapper,
} from '../../components/ProductsCard/ProductoStyle';

const Products = () => {
  return (
    <>
                <h2 style={{
                color: "#E35151",
                fontSize: "2.3rem",
                textAlign: "center",
                backgroundColor: "black",
                paddingTop: "5.5rem",
                }}>¡Qué hambre! ¿Qué pedimos hoy?</h2>
      <CategoriasWrapper>
        <Categorias></Categorias>
      </CategoriasWrapper>
      <ProductosWrapper>
        <ProductosCard></ProductosCard>
      </ProductosWrapper>
    </>
  )
}

export default Products