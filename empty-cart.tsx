'use client'

import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function EmptyCart() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4 bg-white rounded-lg">
      <div className="mb-6">
        <ShoppingBag className="w-16 h-16 text-gray-200" />
      </div>
      <h2 className="text-2xl font-semibold mb-2">Cart is Empty</h2>
      <p className="text-gray-500 mb-8">Add some items to the cart to checkout</p>
      <button
        onClick={() => router.push('/menu')}
        className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
      >
        Back to Menu
      </button>
    </div>
  )
}

