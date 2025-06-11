import { Suspense } from 'react'
import { render, screen } from '@testing-library/react'
import ProPlan from './proPlan'
import { describe, test, expect } from 'vitest'

const renderWithSuspense = (ui: React.ReactElement) => {
  return render(<Suspense fallback="Loading...">{ui}</Suspense>)
}

describe('ProPlan', () => {
  const mockViewer = {
    hasActiveSubscription: false,
    isTrial: false,
    isCancelled: false,
    subscriptionStartDate: '',
    subscriptionEndDate: '',
  }

  describe('when user is not subscribed', () => {
    test('renders "Subscribe Now" button', async () => {
      renderWithSuspense(<ProPlan viewer={mockViewer} />)
      expect(await screen.findByText('Subscribe Now')).toBeInTheDocument()
    })
  })

  describe('when user is subscribed', () => {
    test('renders "Cancel Subscription" button', async () => {
      renderWithSuspense(<ProPlan viewer={{ ...mockViewer, hasActiveSubscription: true }} />)
      expect(await screen.findByText('Cancel Subscription')).toBeInTheDocument()
    })
  })

  describe('when user is subscribed but cancelled', () => {
    test('renders "Cancel Subscription" button', async () => {
      renderWithSuspense(<ProPlan viewer={{ ...mockViewer, hasActiveSubscription: true, isCancelled: true}} />)
      expect(await screen.findByText('Reactivate Subscription')).toBeInTheDocument()
    })
  })

  describe('when user is subscribed to trial', () => {
    test('renders "Cancel Subscription" button', async () => {
      renderWithSuspense(<ProPlan viewer={{ ...mockViewer, hasActiveSubscription: true, isTrial: true}} />)
      expect(await screen.findByText('Cancel Subscription')).toBeInTheDocument()
    })
  })
})
