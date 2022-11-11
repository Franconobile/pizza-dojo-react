import { ProductosContainer } from "./ProductoStyle";
import { formatprice } from '../../Utils';
import { BsCartFill } from "react-icons/bs";
import Button from '../UI/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CategoriasContainer } from "./ProductoStyle";
import { CardCategoria } from "./ProductoStyle";
import { ProductoCard } from './ProductoStyle';

import {
  CardPrice,
  ContainerPrice,
} from './ProductoStyle';

// -------------------

const ProductosCard = ({ setAbrirPopup }) => {


  const [categoria, setcategoria] = useState(null);
  let { foods } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

    if (categoria) {
      foods = { [categoria]: foods[categoria] };
    }

  return (
     <ProductoCard>
      <CategoriasContainer>
        {categories.map((category) => (
          <CardCategoria 
            key={category.id}
            onClick={() => setcategoria(category.categoria)}
            selected={category.categoria === categoria}
          >
            <img src={category.imgTag}></img>
            <p>{category.categoria}</p>
          </CardCategoria >
        ))}
      </CategoriasContainer>
    );
      {Object.entries(foods).map(([, Foods ]) => {
        
        return (
         
              <ProductosContainer key={Foods.id}>
              
              {Foods.map((food) => (
                <div className="cardItems">
                      <img
                        src={food.img}
                        alt={food.name}
                      />
                    <h2>{food.name}</h2>
                    <p>{food.info}</p>
                    <ContainerPrice>
                      <CardPrice>
                      {formatprice(food.price)}
                      <Button  
                      key={food.id}
                      img={food.img}
                      onClick={() => setAbrirPopup(food)
                      }><BsCartFill style={{marginRight: "10px"}}/>Pedir</Button>
                      </CardPrice>
                    </ContainerPrice>
                </div>
                
              ))}
              </ProductosContainer>
        )
        
      })}
       </ProductoCard>
  );
};

export default ProductosCard