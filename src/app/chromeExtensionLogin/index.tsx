import { useEffect } from 'react';
import Loader from '../loader';
import { getAuthToken } from '../utils'
import { useSearchParams } from 'react-router'

export default function ChromeExtensionLogin() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    authenticateChromeUser();
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Loader />
      <p className="mt-4 text-sm font-medium">
        Logging in to Chrome Extension… Please wait.
      </p>
    </div>
  );

  async function authenticateChromeUser() {
    const authToken = getAuthToken()
    const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/user/chrome-extension-login?redirect_uri=${searchParams.get("redirect_uri")}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${authToken}`,
      }
    })

    const json = await response.json()
    window.location.replace(json.urlToRedirect)
  }
}
