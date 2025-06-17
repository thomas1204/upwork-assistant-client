import { NavLink } from 'react-router'
import Logo from '../assets/logo.png'

export default function TermsOfService() {
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
        </nav>
      </header>

      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">UpsiftAI – Terms of Service</h1>

            <p className="mb-4 text-sm text-gray-900">Effective Date: 17 June, 2025</p>
            <p className="mb-4 text-sm text-gray-900">
              Welcome to UpsiftAI! These Terms of Service ("Terms") govern your use of the UpsiftAI Chrome Extension
              ("the Extension") and related services ("Services"). By installing or using the Extension, you agree to be
              bound by these Terms.
            </p>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">1. Use of the Extension</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may use UpsiftAI only for lawful purposes and in accordance with these Terms.</li>
                <li>You must be 18 years or older to use the Extension.</li>
                <li>
                  You agree not to misuse the Extension or attempt to reverse engineer, interfere with, or disrupt its
                  functionality.
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">2. Features & Functionality</h2>
              <p>
                UpsiftAI analyzes publicly available job postings on Upwork.com to generate AI-powered job insights,
                client behavior analysis, rate fairness tips, and cover letter suggestions. Certain features may be
                available only to subscribed users. Free and paid versions may differ in functionality.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">3. Account & Authentication</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You may be required to sign in using your Google account. If so, you are responsible for maintaining
                  the confidentiality of your login credentials.
                </li>
                <li>We do not access or store your Upwork credentials.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">4. Subscription & Payments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Some features of the Extension may require a paid subscription, managed via a secure third-party
                  payment processor (e.g., Stripe).
                </li>
                <li>
                  Subscriptions may be billed monthly or annually. Trial periods, cancellations, and refunds are subject
                  to our payment provider's terms.
                </li>
                <li>
                  You may cancel your subscription at any time. No prorated refunds will be issued for partial periods.
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">5. Data Usage & Privacy</h2>
              <p>
                We collect only the data necessary to provide functionality and improve user experience. This includes
                job page data, user preferences, and (with permission) basic Google account info. For more details,
                please review our{' '}
                <NavLink to="/privacy-policy" className="text-purple-600 underline">
                  Privacy Policy
                </NavLink>
                .
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
              <p>
                All content, branding, and logic associated with UpsiftAI are the intellectual property of the
                developers. You may not copy, resell, or republish the Extension or its outputs without permission.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">7. Disclaimers</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>UpsiftAI is not affiliated with Upwork or any third-party job platform.</li>
                <li>We do not guarantee job success, client responses, or hiring outcomes.</li>
                <li>
                  The information provided by the Extension is for informational purposes only and should not be
                  considered legal, financial, or professional advice.
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate access to the Extension at any time for violations of these
                Terms or misuse of the service.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of the Extension after changes constitutes
                acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">10. Contact</h2>
              <p>
                If you have any questions or concerns, please contact us at:
                <br />
                <span className="font-semibold">shayamthomasmohanram@gmail.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>

      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8 border-t-1 border-gray-900">
          <div className="flex justify-center gap-x-6 md:order-2">
            <p className="text-center text-slate-950 text-base sm:text-xs font-medium">
              <NavLink to="/">Home</NavLink> <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </p>
          </div>
          <p className="mt-8 text-center text-base text-slate-950 md:order-1 md:mt-0 sm:text-xs">
            &copy; 2025 UpsiftAI. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
