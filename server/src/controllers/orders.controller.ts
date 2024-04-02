import db from '../utils/db.js'
import { generateSummary } from 'services/orders.services.js'

export default {
    getOrders: async ({ date = '2022-01-01'}) => {
        const ordersData = db.getOrders()

        let summary = {
            products: {},
            lineItems: {}
        }
        const orders = []

        for (const order of ordersData) {
            if (order.orderDate != date) continue;

            const orderSummary = generateSummary(order.lineItems, {})
            summary = generateSummary(order.lineItems, summary)

            orders.push(orderSummary)

            
        }

        return { summary, orders }
    }
}