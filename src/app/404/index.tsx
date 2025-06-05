import { NavLink } from 'react-router'

export default function PageNotFound() {
  return (
    <div className="h-full min-h-screen flex justify-center px-4 pt-24">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">UpsiftAI</h1>
        <h1 className="text-2xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-lg mb-4">
          It looks like you've wandered off the path. The page you're looking for doesn't exist (or maybe it moved).
        </p>
        <p className="text-lg flex justify-center items-center">
          No worries, though! You can head back to the
          <NavLink to="/" className="ml-1.5 text-slate-950 underline">
            homepage
          </NavLink>
          .
        </p>
      </div>
    </div>
  )
}
