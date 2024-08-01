const updateProductQuantity = ({id, products, quantity}) => {
    return products.map(product => {
        return product.id === id ? {...product, quantity: (product.quantity ?? 0) + quantity} : product
    })
}

export default updateProductQuantity;