import { ObservableObject, ObservablePrimitiveBaseFns } from '@legendapp/state';
import { createContext, useContext } from 'react';
import { useObservable } from '@legendapp/state/react';
 
export type ValidDate = '2022-01-01' | '2022-01-02'

const OrdersContext = createContext<{
    date: ObservablePrimitiveBaseFns<ValidDate> | null
}>({ date: null });

export const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
    const date = useObservable<ValidDate>('2022-01-01')

    return (
        <OrdersContext.Provider
            value={{ 
                date
            }}>
            { children }
        </OrdersContext.Provider>
    )
}


export const useOrders = () => useContext(OrdersContext)!;