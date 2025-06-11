import { lazy } from 'react'
import { Navigate } from 'react-router'
import { useQuery, gql } from '@apollo/client'
import { CheckIcon } from '@heroicons/react/20/solid'
import Loader from '../loader'
import { removeAuthToken } from '../utils'

const SubscribeNowButton = lazy(() => import('./subscribeNowButton'))
const CancelSubscriptionButton = lazy(() => import('./cancelSubscriptionButton'))
const ReactivateSubscriptionButton = lazy(() => import('./reactivateSubscriptionButton'))

const includedFeatures = [
  'Analyzes Job Titles & Descriptions',
  'Evaluates Rate Fairness & Connects Value',
  'Rates Client Activeness',
  'Estimates Job Competitiveness',
  'Summarizes Risks & Red Flags',
  'Offers Cover Letter Tips',
]

const GET_VIEWER = gql`
  query GetViewer {
    viewer {
      hasActiveSubscription
      isTrial
      isCancelled
      subscriptionStartDate
      subscriptionEndDate
    }
  }
`

export default function ProPlan() {
  const { error, data, loading } = useQuery(GET_VIEWER)

  if (!data && loading) return <Loader />

  if (error) {
    removeAuthToken()
    return <Navigate to="/login" />
  }

  const { hasActiveSubscription, isCancelled } = data.viewer
  return (
    <div className="bg-white pt-24 sm:pt-32 pb-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
              {hasActiveSubscription ? 'Pro Plan - Subscribed' : 'Pro Plan'}
            </h3>
            <p className="mt-6 text-base/7 text-gray-600">
              Unlock the full power of smarter freelancing with the Pro Membership Plan. Designed for serious
              freelancers, this plan gives you advanced tools to find better jobs, faster.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-slate-950">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-slate-950" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0 flex items-center justify-center">
            <div className="rounded-2xl py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Monthly</p>
                <p className="mt-4 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-gray-900">$10</span>
                  <span className="text-sm/6 font-semibold tracking-wide text-gray-600">USD</span>
                </p>
                {!hasActiveSubscription && <SubscribeNowButton />}
                {hasActiveSubscription && !isCancelled && <CancelSubscriptionButton viewer={data.viewer} />}
                {hasActiveSubscription && isCancelled && <ReactivateSubscriptionButton viewer={data.viewer} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
