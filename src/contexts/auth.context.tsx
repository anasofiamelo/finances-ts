import React, { createContext, useContext, useState } from 'react'

type ContextTypes = {
  currentUserId: string
}

const AuthContext = createContext<Partial<ContextTypes>>({})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [currentUserId, setCurrentUserId] = useState<string>('pW0gkZUkWWE75svpE6wt')
  return (
    <AuthContext.Provider value={{ currentUserId }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = useContext(AuthContext)

export default AuthContext
