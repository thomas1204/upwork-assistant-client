import { lazy } from 'react'
import { useQuery, gql } from '@apollo/client'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router'
import { removeAuthToken } from './utils'

// Components
const Landing = lazy(() => import('./landing'))
const Login = lazy(() => import('./login'))
const Profile = lazy(() => import('./profile'))
const Loader = lazy(() => import('./loader'))
const PageNotFound = lazy(() => import('./404'))
const SubscriptionProcessing = lazy(() => import('./subscriptionProcessing'))
const PrivacyPolicy = lazy(() => import('./privacyPolicy'))

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path={'/profile'} element={<Protected />}>
          <Route index element={<Profile />} />
          <Route path={'/profile/update-subscription'} element={<SubscriptionProcessing />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

const GET_VIEWER = gql`
  query GetViewer {
    viewer {
      id
      email
    }
  }
`

function Protected() {
  const { loading, error, data } = useQuery(GET_VIEWER)
  if (loading && !data) return <Loader />

  if (error || !data?.viewer) {
    removeAuthToken()
    return <Navigate to="/login" />
  }

  return <Outlet />
}
