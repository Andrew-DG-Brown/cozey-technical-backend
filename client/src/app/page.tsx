'use client'
import Summary from '@/components/Summary';
import { OrdersProvider } from '@/contexts/Orders.context';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <OrdersProvider>
        <Summary />
      </OrdersProvider>
    </main>
  );
}
