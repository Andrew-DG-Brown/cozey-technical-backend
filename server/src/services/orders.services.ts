export const generateSummary = (lineItems, summary) => {
    const currentOrderCounts = {
        products: {},
        lineItems: {}
    }
    const uniqueProducts = { ...summary.products }
    const uniqueLineItems = { ...summary.lineItems }

    for (const { lineItemId, productId } of lineItems) {
        if (productId in currentOrderCounts.products) {
            currentOrderCounts.products[productId]++
        } else {
            currentOrderCounts.products[productId] = 1
        }
        console.log(currentOrderCounts.products)
        uniqueProducts[productId] = productId in uniqueProducts ? uniqueProducts[productId] + 1 : 1

        if (lineItemId in currentOrderCounts.lineItems) continue
        currentOrderCounts.lineItems[lineItemId] = 1

        uniqueLineItems[lineItemId] = lineItemId in uniqueLineItems ? uniqueLineItems[lineItemId] + 1 : 1 
    }
    return { products: uniqueProducts, lineItems: uniqueLineItems }
}