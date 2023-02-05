import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

type ContextTypes = {
  currentUserId: string
}

const TransactionsContext = createContext<Partial<ContextTypes>>({})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [currentUserId, setCurrentUserId] = useState<string>('pW0gkZUkWWE75svpE6wt')
  return (
    <TransactionsContext.Provider value={{ currentUserId }}>
      {props.children}
    </TransactionsContext.Provider>
  )
}

export const useAuth = useContext(TransactionsContext)

export default TransactionsContext
