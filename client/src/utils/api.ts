import { ValidDate } from '@/contexts/Orders.context'

const LOCAL_PORT = process.env.NEXT_API_PORT || '4000'
const BASE_URI = process.env.NEXT_API_BASE_URI || `http://localhost:${LOCAL_PORT}`
const PREFIX = process.env.NEXT_API_PREFIX || 'api/v1'
const URI = `${BASE_URI}/${PREFIX}`

export function getOrders(date: ValidDate) {
    return fetch(`${URI}/orders/${date}`).then(res => res.json())
}