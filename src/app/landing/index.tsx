import { NavLink } from 'react-router'

import Header from '../header'
import Screenshots from '../screenshots'

export default function Landing() {
  return (
    <>
      <Header />

      <div className="bg-white">
        <div className="px-6 pt-24 sm:px-6 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-balance text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 text-center">
              Stop Wasting Connects. Apply Only to Safe, High-Quality Jobs.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-xl/8 leading-relaxed text-gray-900 text-center">
              Our AI-powered Chrome extension scores every Upwork job you see — flagging bad clients, unfair rates,
              vague scopes, and hidden red flags so you don’t waste time or money.
              <br className="hidden sm:block" />
              For just <span className="font-semibold text-gray-900">$10/month</span>, you’ll stop burning connects on
              dead-end jobs and start applying smarter.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
                Add to Chrome
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              What It Does
            </h2>
          </div>
          <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <dt className="font-semibold text-gray-900">Reads job titles and descriptions</dt>
              <dd className="mt-1 text-lg leading-relaxed text-gray-600">
                Scores clarity, complexity, scope, and buzzwords — so you know what you're walking into.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Checks rate fairness & connects value</dt>
              <dd className="mt-1 text-lg leading-relaxed text-gray-600">
                Tells you if the pay justifies the effort — and whether the connects are worth spending.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Rates client activeness</dt>
              <dd className="mt-1 text-lg leading-relaxed text-gray-600">
                Based on real engagement signals: hires, interviews, views, invites, and more.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Estimates job competitiveness</dt>
              <dd className="mt-1 text-lg leading-relaxed text-gray-600">
                Shows if you're early to the party or just burning connects in a crowded room.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Summarizes risks & red flags</dt>
              <dd className="mt-1 text-lg leading-relaxed text-gray-600">
                Detects scope creep, unrealistic timelines, vague expectations, and other hidden traps.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Gives practical cover letter tips</dt>
              <dd className="mt-1 text-lg leading-relaxed text-gray-600">
                You write the proposal — it gives personalized tips based on your experience and the job.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <Screenshots />

      <div className="bg-white">
        <div className="px-6 pt-24 sm:px-6 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Flexible Pricing — Try Before You Commit
            </h2>
            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600 mb-6">
              Start with a <span className="font-semibold text-gray-900">7-day free trial</span> — and experience the
              difference. After the trial, continue with full access for{' '}
              <span className="font-semibold text-gray-900">$10/month</span>. No hidden fees. Cancel anytime.
            </p>

            <NavLink
              to={'/login'}
              className="inline-flex items-center gap-2 bg-slate-950 text-white text-sm sm:text-base font-medium px-5 py-2 rounded-full transition">
              Create Your Account
            </NavLink>
          </div>
        </div>
      </div>

      <section className="bg-white py-12 px-6 text-center rounded-2xl shadow-md mt-12">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Got Questions or Need Technical Help?</h3>
        <p className="text-gray-700 mb-6 text-base sm:text-lg max-w-2xl mx-auto">
          Our official Discord server is the <b>only way to get support</b>, ask technical questions, or connect
          directly with our team. Join us — we’re here to help!
        </p>
        <a
          href="https://discord.gg/YOUR_INVITE_CODE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-950 text-white text-sm sm:text-base font-medium px-5 py-2 rounded-full transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.211.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.51 12.51 0 00-.617-1.25.071.071 0 00-.073-.035c-1.67.3-3.36.826-4.886 1.515a.065.065 0 00-.03.027C.533 9.042-.32 13.55.099 18.012a.08.08 0 00.031.056 19.936 19.936 0 006.088 3.075.073.073 0 00.079-.027c.472-.65.89-1.342 1.245-2.063a.07.07 0 00-.04-.097 12.93 12.93 0 01-1.83-.798.07.07 0 01-.007-.12c.123-.092.246-.188.362-.282a.07.07 0 01.072-.01c3.832 1.745 7.974 1.745 11.74 0a.07.07 0 01.073.01c.116.094.239.19.362.282a.07.07 0 01-.006.12 12.3 12.3 0 01-1.832.797.07.07 0 00-.04.098 13.3 13.3 0 001.246 2.063.072.072 0 00.078.027 19.9 19.9 0 006.089-3.075.08.08 0 00.03-.056c.5-5.177-.838-9.653-3.548-13.616a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z" />
          </svg>
          Join Us on Discord
        </a>
      </section>

      <footer className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center gap-x-6 md:order-2">
            <p className="text-center text-white text-base sm:text-xs font-medium">
              <NavLink to="/privacy-policy">Privacy Policy.</NavLink>{' '}
              <NavLink to="/terms-of-service">Terms of Service.</NavLink>
            </p>
          </div>
          <p className="mt-8 text-center text-base text-white sm:text-xs md:order-1 md:mt-0">
            &copy; 2025 UpsiftAI. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
