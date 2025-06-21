import { NavLink } from 'react-router'
import Logo from '../assets/logo.png'

export default function PrivacyPolicy() {
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
            <h1 className="text-3xl font-bold mb-6 text-gray-900">UpsiftAI - Privacy Policy</h1>

            <p className="mb-4 text-sm text-gray-900">Effective Date: 17 June, 2025</p>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>
                  <strong>Job Page Data:</strong> We analyze job listings and publicly available job details from
                  Upwork.com to generate job insights, cover letter suggestions, and client behavior analysis. No
                  private Upwork account data, credentials, or personal Upwork profile information is collected.
                </li>
                <li>
                  <strong>User Account Information (if you sign in):</strong> Google Account ID, Google email address
                  (only if you authorize it), Basic profile information (name, email).
                </li>
                <li>
                  <strong>Extension Preferences & Settings:</strong> We store your preferences (such as filtering
                  options or AI settings) locally or securely in our servers to personalize your experience.
                </li>
                <li>
                  <strong>Usage Data (optional):</strong> We may collect limited, anonymized usage data to improve
                  product performance, fix bugs, and enhance features.
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2"> How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Generating job insights, cover letter tips, and client analysis.</li>
                <li>Personalizing your extension experience.</li>
                <li>Managing subscriptions and account access.</li>
                <li>Providing customer support.</li>
                <li>Improving extension functionality.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Data Sharing</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>We do not sell, rent, or share your personal data with third parties.</li>
                <li>
                  We may share limited information with trusted service providers (such as cloud providers, AI APIs, or
                  payment processors like Stripe) strictly for providing core extension features.
                </li>
                <li>We comply with applicable data protection laws.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Data Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Secure data transmission (SSL encryption).</li>
                <li>Secure storage of limited user account data.</li>
                <li>No access to your Upwork credentials or private Upwork account data.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2"> User Control & Rights</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>You can revoke access at any time through your Google Account.</li>
                <li>You can uninstall the extension at any time to stop all data collection.</li>
                <li>You may contact us to request deletion of your account data.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Changes to this Policy</h2>
              <p className="text-gray-900">
                We may update this policy to reflect changes in our practices or legal requirements. Significant changes
                will be notified via the extension or our website.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h2>
              <p className="text-gray-900">
                If you have any questions or concerns, please contact us at:{' '}
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
              <NavLink to="/">Home.</NavLink>
              <NavLink to="/blogs">Blogs.</NavLink>
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
}
