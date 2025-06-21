import { lazy, useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import moment from 'moment-timezone'

// Components
const Header = lazy(() => import('../header'))
const Loader = lazy(() => import('../loader'))

type Blog = {
  title: string
  slug: string
  subtitle: string
  image: string
  link: string
  createdAt: string
}

export default function Blogs() {
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [totalBlogs, setTotalBlogs] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true)
      const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ page }),
      })

      if (response.ok) {
        const data = await response.json()
        setBlogs((prevBlogs) => {
          const existingIds = new Set(prevBlogs.map((blog) => blog.slug))
          const newBlogs = (data?.blogs ?? []).filter((blog: Blog) => !existingIds.has(blog.slug))
          return [...prevBlogs, ...newBlogs]
        })
        setTotalBlogs(data?.totalBlogs ?? 0)
      }

      setLoading(false)
    }

    fetchBlogs()
  }, [page])

  return (
    <>
      <Header />

      <div className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogs.length === 0 && !loading && (
              <div className="px-6 pt-24 sm:px-6 sm:pt-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-balance text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                    Oops… No Blogs Yet!
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600 mb-6">
                    Either we’re still writing them… or got distracted by cat videos. 🐱 Check back soon — fresh content
                    is brewing!
                  </p>
                </div>
              </div>
            )}

            {blogs.length > 0 &&
              blogs.map((blog) => (
                <article key={blog.slug} className="flex flex-col items-start justify-between">
                  <div className="relative w-full">
                    <img
                      alt=""
                      src={blog.image}
                      className="aspect-video w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-6 flex items-center gap-x-4 text-xs">
                      <time dateTime={blog.createdAt} className="text-gray-500">
                        {moment.utc(blog.createdAt).local().format('MMM D, YYYY')}
                      </time>
                    </div>
                    <a className=" block group relative cursor-pointer" href={blog.link} target="_blank">
                      <h3 className="mt-2 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        {blog.title}
                      </h3>
                      <p className="mt-4 line-clamp-3 text-sm/6 text-gray-600">{blog.subtitle}</p>
                    </a>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>

      {blogs.length < totalBlogs && !loading && (
        <div className="bg-white py-4 sm:py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <button
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm text-white shadow-sm"
              onClick={() => setPage((prev) => prev + 1)}>
              Load More
            </button>
          </div>
        </div>
      )}

      {loading && <Loader />}

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
}
