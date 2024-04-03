'use client'

import { useQuery } from '@tanstack/react-query';
import Summary from './Summary';
import { getOrders } from '@/utils/api';
import { OrdersProvider, useOrders } from '@/contexts/Orders.context';

export default function Orders() {
    return (
        <>
            <OrdersProvider>
                <Summary />
            </OrdersProvider>
        </>
    );
}