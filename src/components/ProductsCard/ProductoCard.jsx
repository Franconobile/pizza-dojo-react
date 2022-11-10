import React from 'react';
import { formatPrice } from '../../utils/index';
import { BsCartFill } from "react-icons/bs";
import Button from '../UI/Button/Button';

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from './ProductoStyle';

const ProductoCard = ({ img, title, info, price }) => {
  return (
    <ProductosCard>
      <img
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{info}</p>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <Button onClick={e => e.preventDefault()}><BsCartFill style={{marginRight: "10px"}}/>Pedir</Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default ProductoCard;