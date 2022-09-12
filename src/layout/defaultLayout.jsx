import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import DashboardContext from '../context/DashboardContext'

const defaultLayout = WrapperComponent => () => {
  const { user } = useContext(DashboardContext)
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__header-logo-wrapper">
          <span className="layout__header-logo">
            <FontAwesomeIcon icon={faReact} size="4x" />
          </span>
          <span className="layout__header-title">React</span>
        </div>
        <div className="layout__header-user">
          <span className="layout__header-user__name">{user?.name}</span>
          <span className="layout__header-user__role">{user?.role}</span>
        </div>
      </header>
      <div className="layout__main">
        <WrapperComponent />
      </div>
      <footer className="layout__header-footer"></footer>
    </div>
  )
}

export default defaultLayout
