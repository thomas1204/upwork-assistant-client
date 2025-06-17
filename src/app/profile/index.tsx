import { lazy } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router'
import { useQuery, gql } from '@apollo/client'
import { removeAuthToken } from '../utils'
import Logo from '../assets/logo.png'

const ProPlan = lazy(() => import('./proPlan'))

const GET_VIEWER = gql`
  query GetViewer {
    viewer {
      id
      firstName
      lastName
      image
    }
  }
`

export default function Profile() {
  const navigate = useNavigate()
  const { client, error, data } = useQuery(GET_VIEWER)

  if (error) {
    removeAuthToken()
    return <Navigate to="/login" />
  }

  return (
    <>
      <header className="bg-white">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
          <div className="flex items-center">
            <NavLink to="/" className="text-gray-900 text-2xl sm:text-3xl font-semibold flex items-center">
              <div className="inline-flex items-center mr-2 h-8 w-8">
                <img src={Logo} alt="Logo" className="h-full w-full object-contain" />
              </div>
              <div className="inline-flex items-center">UpsiftAI</div>
            </NavLink>
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-2">
            <div className={'h-10 w-10 rounded-full overflow-hidden'}>
              <img
                className={'w-full h-full object-contain'}
                alt={'user-profile-image'}
                src={data?.viewer?.image ?? 'https://avatar.iran.liara.run/public'}
              />
            </div>
            <button
              onClick={() => logout()}
              className="rounded-full bg-slate-950 px-3.5 py-2.5 text-sm text-white shadow-sm border-0 cursor-pointer">
              Logout
            </button>
          </div>
        </nav>
      </header>

      <ProPlan />

      <div className="bg-white">
        <div className="px-6 pt-24 sm:px-6 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
              UpsiftAI Chrome Extension Access Token
            </h3>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base/7 text-gray-600">
              To access smart job insights, red flag detection, and personalized cover letter tips — install our Chrome
              extension. <br />
              It works right on Upwork, helping you apply faster and smarter.
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
                Add to Chrome
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900">Connect Your Upwork Profile</h3>
          <p className="mt-4 text-lg text-gray-600">To unlock tailored cover letter tips based on your experience.</p>
        </div>

        <div className="mt-5 max-w-xl mx-auto">
          <ol className="list-decimal list-inside space-y-4 text-gray-700 text-base leading-relaxed">
            <li>
              <span className="font-bold">Install the Chrome Extension.</span>
              <br />
              This gives you access to smart job insights and personalized proposal support.
            </li>
            <li>
              <span className="font-bold">Visit Your Upwork Profile Page.</span>
              <br />
              Once the extension is installed, go to your Upwork profile. This helps the extension read your skills,
              work history, and strengths.
            </li>
          </ol>
        </div>
      </div>

      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8 border-t-1 border-gray-900">
          <div className="flex justify-center gap-x-6 md:order-2">
            <p className="text-center text-slate-950 text-md sm:text-lg">We never share or sell your data. Period.</p>
          </div>
          <p className="mt-8 text-center text-base text-slate-950 md:order-1 md:mt-0">
            &copy; 2025 UpsiftAI. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )

  function logout() {
    removeAuthToken()
    client.resetStore()
    navigate('/')
  }
}
