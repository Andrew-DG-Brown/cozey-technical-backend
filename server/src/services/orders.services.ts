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
        const { lineItemName } = lineItems[lineItemId]
        return { lineItemId, lineItemName, quantity }
    })

    return { products: productsMapped, lineItems: lineItemsMapped }
}

export const generateDaySummary = (orders, { products, lineItems }) => {
    const totals = {
        products: {},
        lineItems: {},
        checkTotals(type, quantity, id, name) {
            if (!(id in this[type])) {
                this[type][id] = { name, quantity }
            } else {
                this[type][id].quantity += quantity
            }
        }
    }
    for (const { orderSummary: { products, lineItems } } of orders) {
        for (const i in products) {
            const { quantity, productId, productName } = products[i]
            totals.checkTotals('products', quantity, productId, productName)
            
            if (!lineItems[i]) continue
            const { quantity: lQuantity, lineItemId, lineItemName } = lineItems[i]
            totals.checkTotals('lineItems', lQuantity, lineItemId, lineItemName)
        }
    }

    return { products: Object.values(totals.products), lineItems: Object.values(totals.lineItems) }
}