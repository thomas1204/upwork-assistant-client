import { useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router'
import { useQuery, gql } from '@apollo/client'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { setAuthToken, removeAuthToken } from '../utils'
import Loader from '../loader'

declare global {
  interface Window {
    google: any
  }
}

const GET_VIEWER = gql`
  query GetViewer {
    viewer {
      id
      email
    }
  }
`

export default function Login() {
  const navigate = useNavigate()
  const { loading, error, data } = useQuery(GET_VIEWER)

  useEffect(() => {
    if (!loading && (error || !data || !data.viewer)) initGoogleOAuth()
  }, [loading, error, data])

  if (loading) {
    return <Loader />
  }

  if (error) {
    removeAuthToken()
  }

  if (data && data.viewer) {
    return <Navigate to="/profile" />
  }

  return (
    <div className="bg-white">
      <div className="px-6 pt-24 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 text-center">
            UpsiftAI
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-xl/8 leading-relaxed text-gray-900 text-center">
            Log in or sign up with Gmail to unlock job scoring, client safety checks, and smart proposal tips — all
            tailored to help you win better Upwork jobs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div id="googleLoginButton" />
          </div>
          <div className="mt-10 flex justify-end items-center">
            <button
              onClick={() => navigate('/')}
              className={'inline-flex items-center justify-center text-sm underline'}>
              <ChevronLeftIcon className="size-4 text-gray-900" />
              <span className={'ml-1 text-gray-900'}>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  function initGoogleOAuth() {
    if (!window.google || !window.google.accounts) return

    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID,
      callback: async (response: { credential: string }) => await handleOAuthCallback(response),
    })
    window.google.accounts.id.renderButton(document.getElementById('googleLoginButton'), {
      theme: 'filled_blue',
      size: 'large',
      text: 'continue_with',
      shape: 'pill',
    })

    window.google.accounts.id.prompt()
  }

  async function handleOAuthCallback(response: { credential: string }) {
    const loginResponse = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: response.credential }),
    })

    if (!loginResponse.ok) {
      console.log('error', 'Login failed. Please try again.')
      navigate('/')
      return
    }

    setAuthToken((await loginResponse.json()).token)
    console.log('success', 'Logged in successfully')
    navigate('/profile')
  }
}
