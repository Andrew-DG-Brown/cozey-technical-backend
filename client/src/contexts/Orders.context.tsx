import { ObservableObject, ObservablePrimitiveBaseFns } from '@legendapp/state';
import { createContext, useContext } from 'react';
import { useObservable, useObserve } from '@legendapp/state/react';
import { useQuery } from '@tanstack/react-query';
import { getOrders } from '@/utils/api';
 
export type ValidDate = '2022-02-01' | '2022-02-02'

const OrdersContext = createContext<{
    date: ObservablePrimitiveBaseFns<ValidDate> | null,
    data: any
}>({ date: null, data: null });

export const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
    const date = useObservable<ValidDate>('2022-02-01')

    const { data, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => getOrders(date!.get()),
    })
    useObserve(date, (state) => {
        if (state.num === 0) return
        refetch()
    })

    return (
        <OrdersContext.Provider
            value={{ 
                date, data
            }}>
            { children }
        </OrdersContext.Provider>
    )
}


export const useOrders = () => useContext(OrdersContext)!;