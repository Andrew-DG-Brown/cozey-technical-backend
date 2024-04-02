export const generateOrderSummary = (orderLineItems, { products, lineItems }) => {
    const orderProductPrices = {}
    const productCounts = {}

    for (let { productId, price } of orderLineItems) {
        productCounts[productId] = productId in productCounts ? productCounts[productId] + 1 : 1
        orderProductPrices[productId] = price
    }

    const lineItemCounts = {}

    const productsMapped = Object.entries(productCounts).map(([productId, quantity]) => {
        const { lineItemId } = products[productId]
        const { lineItemName } = lineItems[lineItemId]
        const productPrice = orderProductPrices[productId]

        lineItemCounts[lineItemId] = quantity
        return { ...products[productId], quantity, lineItemName , productPrice }
    })
    const lineItemsMapped = Object.entries(lineItemCounts).map(([lineItemId, quantity]) => {
        return { lineItemId, name: lineItems[lineItemId].lineItemName, quantity }
    })

    return { products: productsMapped, lineItems: lineItemsMapped }
}

export const generateDaySummary = (orders, { products, lineItems }) => {
    //store each product and lineItem
}