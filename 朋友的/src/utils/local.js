import { Base64 } from 'js-base64'

const baseName = 'admin-react'
const TOKEN = `${baseName}-token`
const USER = `${baseName}-user`
const REMEMBER_LOGIN_USER = `${baseName}-remember-login-user`
const SIDEBAR_THEME = `${baseName}-sidebar-theme`

export const setStorageVal = (key, value) => localStorage.setItem(key, value)

export const getStorageVal = key => localStorage.getItem(key)

// export const setToken = (key, value) => localStorage.setItem(key, value)

// export const getToken = key => localStorage.getItem(key)

export const removeToken = key => localStorage.removeItem(key)

export const setUser = (userKey,data) => {
  const enText = Base64.encode(JSON.stringify(data))
  return localStorage.setItem(userKey, enText)
}

export const getUser = userKey => {
    const enText = localStorage.getItem(userKey)
    if (!enText) return
    let data = null
    try {
      const deText = Base64.decode(enText)
      data = JSON.parse(deText)
    } catch (err) {
      console.log(err)
    }
    return data
}

export const removeUser = userKey => localStorage.removeItem(userKey)

  
export const removeUserData = (userKey, tokenKey) => {
  removeUser(userKey)
  removeToken(tokenKey)
}
