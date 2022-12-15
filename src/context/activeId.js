import { createContext, useContext, useState } from 'react'
const ActiveIdContext = createContext()

export function ActiveIdProvider({ children }) {
  const [activeId, setActiveId] = useState(null)
  const changeActiveId = id => {
    setActiveId(id)
  }

  return (
    <ActiveIdContext.Provider value={(activeId, changeActiveId)}>
      {children}
    </ActiveIdContext.Provider>
  )
}

export function useActiveIdContext() {
  return useContext(ActiveIdContext)
}
export const ActiveIdConsumer = ActiveIdContext.Consumer
