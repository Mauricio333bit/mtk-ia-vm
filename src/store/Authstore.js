
import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isLoggedIn: false,

  login: (user, token) => {
    sessionStorage.setItem('user', JSON.stringify(user))
    sessionStorage.setItem('token', token)
    set({ user, token, isLoggedIn: true })
  },

  logout: () => {
    sessionStorage.clear()
    set({ user: null, token: null, isLoggedIn: false })
  },

  restoreSession: () => {
    const storedUser = sessionStorage.getItem('user')
    const storedToken = sessionStorage.getItem('token')
    if (storedUser && storedToken) {
      set({
        user: JSON.parse(storedUser),
        token: storedToken,
        isLoggedIn: true,
      })
    }
  },
}))
