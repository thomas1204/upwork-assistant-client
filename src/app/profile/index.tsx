import { Navigate, NavLink, useNavigate } from 'react-router'
import { useQuery, gql } from '@apollo/client'
import Loader from '../loader'
import { removeAuthToken } from '../utils'
import { CheckIcon } from '@heroicons/react/20/solid'

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

const includedFeatures = [
  'Analyzes Job Titles & Descriptions',
  'Evaluates Rate Fairness & Connects Value',
  'Rates Client Activeness',
  'Estimates Job Competitiveness',
  'Summarizes Risks & Red Flags',
  'Offers Cover Letter Tips',
]

export default function Profile() {
  const navigate = useNavigate()
  const { client, loading, error, data } = useQuery(GET_VIEWER)

  if (loading) {
    return <Loader />
  }

  if (error) {
    removeAuthToken()
    return <Navigate to="/login" />
  }

  return (
    <>
      <header className="bg-white">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
          <div className="flex items-center">
            <NavLink to="/" className="text-gray-900 text-2xl sm:text-3xl font-semibold">
              UpsiftAI
            </NavLink>
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-2">
            <div className={'h-10 w-10 rounded-full overflow-hidden'}>
              <img
                className={'w-full h-full object-contain'}
                alt={`${data.viewer.firstName} ${data.viewer.lastName}`}
                src={data.viewer.image ?? 'https://avatar.iran.liara.run/public'}
              />
            </div>
            <button
              onClick={() => logout()}
              className="rounded-full bg-slate-950 px-3.5 py-2.5 text-sm text-white shadow-sm border-0">
              Logout
            </button>
          </div>
        </nav>
      </header>

      <div className="bg-white pt-24 sm:pt-32 pb-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-3xl font-semibold tracking-tight text-gray-900">Pro Plan</h3>
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
                  <a
                    href="#"
                    className="mt-5 block w-full rounded-md bg-slate-950 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm">
                    Subscribe Now
                  </a>
                  <p className="mt-6 text-xs/5 text-gray-600">
                    Try it FREE for 7 days – no commitment, cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white">
        <div className="px-6 pt-24 sm:px-6 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
              Install the Chrome Extension
            </h3>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base/7 text-gray-600">
              To access smart job insights, red flag detection, and personalized cover letter tips — install our Chrome extension. <br />
              It works right on Upwork, helping you apply faster and smarter.
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
                Add to Chrome
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
            Connect Your Upwork Profile
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            To unlock tailored cover letter tips based on your experience.
          </p>
        </div>

        <div className="mt-5 max-w-xl mx-auto">
          <ol className="list-decimal list-inside space-y-4 text-gray-700 text-base leading-relaxed">
            <li>
              <span className="font-bold">Install the Chrome Extension.</span><br />
              This gives you access to smart job insights and personalized proposal support.
            </li>
            <li>
              <span className="font-bold">Visit Your Upwork Profile Page.</span><br />
              Once the extension is installed, go to your Upwork profile. This helps the extension read your skills, work history, and strengths.
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
