'use client'
import Orders from '@/components/Orders';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Orders />
    </main>
  );
}
