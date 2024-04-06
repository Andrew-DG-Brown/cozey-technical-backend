import db from '../utils/db.js'
import { generateDaySummary, generateOrderSummary } from 'services/orders.services.js'

export default {
    getOrders: async (date) => {
        const ordersData = db.getOrders()
        const productsData = db.getProducts()
        const orders = []

        for (const order of ordersData) {
            const orderClone = { ...order }
            if (orderClone.orderDate != date) continue;

            const orderSummary = generateOrderSummary(orderClone.lineItems, productsData)
            delete orderClone.lineItems

            orders.push({ ...orderClone, orderSummary })
        }
        const summary = generateDaySummary(orders)

        return { summary, orders }
    }
}