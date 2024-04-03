'use client'
import { useOrders } from '@/contexts/Orders.context';
import { AccordionList, Divider } from '@tremor/react';
import OrderAccordion from './OrderAccordion';

export default function OrdersBreakdown() {
    const { data: { orders } = {} } = useOrders()
    return (
        <section className={`mx-auto min-w-[1300px]`}>
            <Divider className='mt-10'/>
            <div id='orders' className={`flex flex-col justify-between mx-auto mt-14`}>
                <h2 className='text-[2.6rem] ml-2 mb-5 text-tremor-content-strong'>Order Breakdown</h2>
                <AccordionList>
                    {orders ? (
                        orders.map((order: any, i: number) => {
                            return <OrderAccordion key={i} order={order}/>
                        })
                    ) : null}
                </AccordionList>
            </div>
        </section>
    )
}