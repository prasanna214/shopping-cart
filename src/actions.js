export const add = (productName, id) => ({
    type: 'ADD',
    product: {
        id: id,
        name: productName
    }
});
export const remove = product => ({
    type: 'REMOVE',
    product: product
});

