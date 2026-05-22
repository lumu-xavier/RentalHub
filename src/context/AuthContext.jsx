import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [userBookings, setUserBookings] = useState([])
  const [userProperties, setUserProperties] = useState([])
  const [reviews, setReviews] = useState([])

  // Load from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    const savedRole = localStorage.getItem('role')
    const savedFavorites = localStorage.getItem('favorites')
    const savedBookings = localStorage.getItem('userBookings')
    const savedProperties = localStorage.getItem('userProperties')
    const savedReviews = localStorage.getItem('reviews')

    if (savedUser) setUser(JSON.parse(savedUser))
    if (savedRole) setRole(savedRole)
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites))
    if (savedBookings) setUserBookings(JSON.parse(savedBookings))
    if (savedProperties) setUserProperties(JSON.parse(savedProperties))
    if (savedReviews) setReviews(JSON.parse(savedReviews))
  }, [])

  const login = (name, userRole) => {
    const newUser = { id: Date.now(), name, role: userRole }
    setUser(newUser)
    setRole(userRole)
    localStorage.setItem('user', JSON.stringify(newUser))
    localStorage.setItem('role', userRole)
  }

  const logout = () => {
    setUser(null)
    setRole(null)
    localStorage.removeItem('user')
    localStorage.removeItem('role')
  }

  const addFavorite = (propertyId) => {
    const updated = favorites.includes(propertyId)
      ? favorites.filter(id => id !== propertyId)
      : [...favorites, propertyId]
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  const addBooking = (booking) => {
    const updated = [...userBookings, { ...booking, id: Date.now() }]
    setUserBookings(updated)
    localStorage.setItem('userBookings', JSON.stringify(updated))
  }

  const addProperty = (property) => {
    const updated = [...userProperties, { ...property, id: Date.now() }]
    setUserProperties(updated)
    localStorage.setItem('userProperties', JSON.stringify(updated))
  }

  const addReview = (review) => {
    const updated = [...reviews, { ...review, id: Date.now() }]
    setReviews(updated)
    localStorage.setItem('reviews', JSON.stringify(updated))
  }

  const value = {
    user,
    role,
    login,
    logout,
    favorites,
    addFavorite,
    userBookings,
    addBooking,
    userProperties,
    addProperty,
    reviews,
    addReview
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
