import React from 'react'
import ProductosCard from '../components/ProductsCard/ProductosCard';
import { PopupPedido } from '../components/PopupPedido/PopupPedido';

import {
  ProductosWrapper
} from '../components/ProductsCard/ProductoStyle';


const Products = ({ abrirPopup }) => {
  return (
    <ProductosWrapper>
                      <PopupPedido {...abrirPopup} />
                      <h2 style={{
                color: "#E35151",
                fontSize: "2.3rem",
                textAlign: "center",
                backgroundColor: "black",
                paddingTop: "5.5rem",
                }}>¡Qué hambre! ¿Qué pedimos hoy?</h2>

                <ProductosCard {...abrirPopup} />
    </ProductosWrapper>
  )
}

export default Products