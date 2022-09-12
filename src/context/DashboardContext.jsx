import { createContext, useState } from 'react'

const DashboardContext = createContext()

export const DashboardProvider = ({ children }) => {
  const [user] = useState({
    id: 1,
    name: 'John Wick',
    role: 'Developer',
  })
  return <DashboardContext.Provider value={{ user }}>{children}</DashboardContext.Provider>
}

export default DashboardContext
