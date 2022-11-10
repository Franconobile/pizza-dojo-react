import ProductoCard from "./ProductoCard";

import { ProductosContainer } from "./ProductoStyle";
import { ButtonContainerStyled } from "./ProductoStyle";
import { useSelector } from "react-redux";

const ProductosCard = () => {
    const products = useSelector(state => state.products.products)
    
    return (
        <>
            <ProductosContainer>
                {Object.entries(products).map(([, comidas]) => (comidas.map(comida => <ProductoCard key={comida.id} {...comida}/>)
                
                ))}
            </ProductosContainer>
            <ButtonContainerStyled>
            </ButtonContainerStyled>

        </>
    )
}

export default ProductosCard;