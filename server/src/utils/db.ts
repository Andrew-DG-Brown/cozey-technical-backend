import products from '../../data/products.json'
import orders from '../../data/orders.json'
import { Products, Orders } from 'types/db.types.js'

export default {
    getProducts() {
        return products as Products
    },
    getOrders() {
        return orders as Orders
    }
}