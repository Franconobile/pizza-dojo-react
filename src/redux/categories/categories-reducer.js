import { Categorias } from '../../data/Categorias'

const INITIAL_STATE = {
    categories: Categorias,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default categoriesReducer;