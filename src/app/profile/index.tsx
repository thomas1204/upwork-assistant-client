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
              <a
                target="_blank"
                href={import.meta.env.VITE_CHROME_EXTENSION_URL}
                className="rounded-md bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
                Add to Chrome
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="isolate bg-white px-6 pt-24 sm:pt-32 lg:px-8">
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

      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
              Got Questions or Need Technical Help?
            </h3>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base/7 text-gray-600">
              Our official Discord server is the <b>only way to get support</b>, ask technical questions, or connect
              directly with our team. Join us — we’re here to help!
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <a
                href={import.meta.env.VITE_DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-950 text-white text-sm sm:text-base font-medium px-5 py-2 rounded-full transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.211.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.51 12.51 0 00-.617-1.25.071.071 0 00-.073-.035c-1.67.3-3.36.826-4.886 1.515a.065.065 0 00-.03.027C.533 9.042-.32 13.55.099 18.012a.08.08 0 00.031.056 19.936 19.936 0 006.088 3.075.073.073 0 00.079-.027c.472-.65.89-1.342 1.245-2.063a.07.07 0 00-.04-.097 12.93 12.93 0 01-1.83-.798.07.07 0 01-.007-.12c.123-.092.246-.188.362-.282a.07.07 0 01.072-.01c3.832 1.745 7.974 1.745 11.74 0a.07.07 0 01.073.01c.116.094.239.19.362.282a.07.07 0 01-.006.12 12.3 12.3 0 01-1.832.797.07.07 0 00-.04.098 13.3 13.3 0 001.246 2.063.072.072 0 00.078.027 19.9 19.9 0 006.089-3.075.08.08 0 00.03-.056c.5-5.177-.838-9.653-3.548-13.616a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z" />
                </svg>
                Join Us on Discord
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8 border-t-1 border-gray-900">
          <div className="flex justify-center gap-x-6 md:order-2">
            <p className="text-center text-slate-950 text-base sm:text-xs font-medium">
              <NavLink to="/privacy-policy">Privacy Policy.</NavLink>{' '}
              <NavLink to="/terms-of-service">Terms of Service.</NavLink>
            </p>
          </div>
          <p className="mt-8 text-center text-base text-slate-950 md:order-1 md:mt-0 sm:text-xs">
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
