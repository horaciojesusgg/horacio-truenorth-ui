import Cookies from 'js-cookie'

const TOKEN_COOKIE_NAME = 'authToken'

export const setTokenCookie = (token) => {
  Cookies.set(TOKEN_COOKIE_NAME, token, { expires: 7 }) // Set the cookie to expire after 7 days
}

export const getTokenCookie = () => {
  return Cookies.get(TOKEN_COOKIE_NAME)
}

export const deleteTokenCookie = () => {
  Cookies.remove(TOKEN_COOKIE_NAME)
}
