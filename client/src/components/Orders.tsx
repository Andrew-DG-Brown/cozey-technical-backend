'use client'

import { useQuery } from '@tanstack/react-query';
import Summary from './Summary';
import { getOrders } from '@/utils/api';
import { OrdersProvider, useOrders } from '@/contexts/Orders.context';
import OrdersBreakdown from './OrdersBreakdown';

export default function Orders() {
    return (
        <OrdersProvider>
            <div className='text-[3rem] flex justify-center w-full font-semibold mb-10'>
                <h1 className='mx-auto'>Warehouse Order Manager</h1>
            </div>
            <Summary />
            <OrdersBreakdown />
        </OrdersProvider>
    );
}