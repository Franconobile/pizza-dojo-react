import { Productos, ProductsTotal } from '../../data/Products';

const INITIAL_STATE = {
  products: Productos,
  totalProducts: ProductsTotal,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;