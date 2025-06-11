import { useState } from 'react'
import { getAuthToken } from '../utils'

export default function SubscribeNowButton() {
  const [loading, setLoading] = useState(false)

  return (
    <>
      {loading && (
        <button
          disabled={true}
          className="mt-5 block w-full rounded-md bg-slate-950 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm border-0">
          <div className="flex justify-center items-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        </button>
      )}
      {!loading && (
        <button
          onClick={() => getCheckoutUrl()}
          className="mt-5 block w-full rounded-md bg-slate-950 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm border-0">
          Subscribe Now
        </button>
      )}
      <p className="mt-6 text-xs/5 text-gray-600">Try it FREE for 7 days – no commitment, cancel anytime.</p>
    </>
  )

  async function getCheckoutUrl() {
    setLoading(true)
    const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/subscription/checkout`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
    })

    if (!response.ok) {
      setLoading(false)
      return
    }

    const result = await response.json()
    if (!result?.stripeCheckoutUrl) return
    window.location.href = result.stripeCheckoutUrl
  }
}
