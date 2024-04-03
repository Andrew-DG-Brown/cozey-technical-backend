import db from '../utils/db.js'
import { generateDaySummary, generateOrderSummary } from 'services/orders.services.js'

export default {
    getOrders: async ({ date = '2022-01-01'}) => {
        const ordersData = db.getOrders()
        const productsData = db.getProducts()
        const orders = []
        
        ordersData.forEach(order => {
            if (order.orderDate != date) return;

            const orderSummary = generateOrderSummary(order.lineItems, productsData)
            delete order.lineItems

            orders.push({ ...order, orderSummary })
        })
        const summary = generateDaySummary(orders, productsData)

        return { summary, orders }
    }
}