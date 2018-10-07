
const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                products: [...state.products, action.product]
            };
        case 'REMOVE':
            return {
                ...state,
                products: state.products.filter(product => product !== action.product)
            };
        default:
            return state;
    }
};
export default reducer;
