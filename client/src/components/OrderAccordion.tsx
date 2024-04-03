
import { Accordion, AccordionBody, AccordionHeader, AccordionList, Divider } from '@tremor/react'
import LineItemsCard from './LineItemsCard'
import ProductsCard from './ProductsCard'
export default function OrderAccordion({ order }: { order: any }) {
    return (
        <Accordion key={`${order.orderId}`}>
            <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                <div className='flex gap-5'>
                    <b>Order ID:</b>{order.orderId}
                    <div className='mx-2'>|</div>
                    <b>Address: </b>{order.shippingAddress}
                </div>
            </AccordionHeader>
            <AccordionBody className="leading-6">
                <div className='my-4 flex flex-col flex-wrap gap-4 max-h-32'>     
                    <p>Customer Name: <b>{order.customerName}</b></p>
                    <p>Customer Email: <b>{order.customerEmail}</b></p>
                    <p>Order Date: <b>{order.orderDate}</b></p>
                    <p>Order ID: <b>{order.orderId}</b></p>
                    <p>Order Total: <b>${order.orderTotal}</b></p>
                    <p>Shipping Address: <b>{order.shippingAddress}</b></p>
                </div>
                <Divider />
                <div className='flex gap-2 mb-5'>
                    <LineItemsCard lineItems={order.orderSummary.lineItems}/>
                    <ProductsCard products={order.orderSummary.products}/>
                </div>
            </AccordionBody>
        </Accordion>
    )
}