export const removeAuthToken = () => {
  localStorage.removeItem('UPSIFTAI_AUTH_TOKEN')
}

export const getAuthToken = () => {
  return localStorage.getItem('UPSIFTAI_AUTH_TOKEN')
}

export const setAuthToken = (token: string) => {
  localStorage.setItem('UPSIFTAI_AUTH_TOKEN', token)
}
