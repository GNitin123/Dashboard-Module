import React from 'react'
import defaultLayout from '../layout/defaultLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <div className="component-dashboard">
      <div className="component-dashboard__page-header">
        <div className="component-dashboard__page-header__title-wrapper">
          <div className="component-dashboard__page-header__icon">
            <FontAwesomeIcon color={'#1e73be'} icon={faPlane} size="2x" />
          </div>
          <div className="component-dashboard__page-header__title">
            <h4>Analytics Dashboard</h4>
            <p>
              Dashboard is a online report where your website data from e-commerce to web analytics
              is displayed
            </p>
          </div>
        </div>
        <div>
          <Button variant="light" className="component-dashboard__page-header__star-btn">
            <FontAwesomeIcon icon={faStar} />
          </Button>
          <Button variant="success">
            <FontAwesomeIcon icon={faPlus} /> Create New
          </Button>
        </div>
      </div>
    </div>
  )
}

export default defaultLayout(Dashboard)
