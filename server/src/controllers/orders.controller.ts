import db from '../utils/db.js'
import { generateDaySummary, generateOrderSummary } from 'services/orders.services.js'

export default {
    getOrders: async ({ date = '2022-01-01'}) => {
        const ordersData = db.getOrders()
        const productsData = db.getProducts()
        const orders = []

        for (const order of ordersData) {
            if (order.orderDate != date) continue;

            const orderSummary = generateOrderSummary(order.lineItems, productsData)
            delete order.lineItems

            orders.push({
                ...order,
                orderSummary
            })
        }

        //calculate the summary at the end
        const summary = generateDaySummary(orders, productsData)

        return { summary, orders }
    }
}