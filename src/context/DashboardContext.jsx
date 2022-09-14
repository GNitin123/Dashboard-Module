import { createContext, useReducer } from 'react'
import { DashboardReducer, initialState } from '../reducer/DashboardReducer'

const DashboardContext = createContext()

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DashboardReducer, initialState)

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>{children}</DashboardContext.Provider>
  )
}

export default DashboardContext
