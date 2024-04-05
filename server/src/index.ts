import App from 'app.js'
import ordersRoute from 'routes/orders.route.js'

const app = new App(Number(process.env.PORT) || 4000)

const API_PREFIX = '/api/v1'

app.express.use(`${API_PREFIX}/orders`, ordersRoute)

app.express.get(API_PREFIX, (req, res) => {
    res.status(200).json({ message: 'base get' })
})