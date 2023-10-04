import Base from "@layouts/Baseof";
import config from "@config/config.json";
import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const [credentials, setCredentials] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signIn('credentials', {
      username: credentials.username,
      password: credentials.password,
      redirect: true, // Redirect to home after login
    })
  }

  return (
    <Base title={`${config.site.title} | Sign In`}>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="dark:text-white mt-6 text-center text-3xl font-extrabold text-gray-900 font-third">
              Hi Admin, Please Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only forn-third">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none font-third rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#2e2e2e] dark:border-[#4e4e4e] dark:text-white"
                  placeholder="Username"
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only font-third">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none font-third rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#2e2e2e] dark:border-[#4e4e4e] dark:text-white"
                  placeholder="Password"
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#325aa5] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Base>
  )
}
