import { NavLink } from 'react-router'
import Logo from '../assets/logo.png'

export default function Example() {
  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="flex items-center">
          <NavLink to="/" className="text-gray-900 text-2xl sm:text-3xl font-semibold flex items-center cursor-pointer">
            <div className="inline-flex items-center mr-2 h-8 w-8">
              <img src={Logo} alt="Logo" className="h-full w-full object-contain" />
            </div>
            <div className="inline-flex items-center">UpsiftAI</div>
          </NavLink>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <NavLink
            to="/login"
            className="rounded-full bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
            Login or Register
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
