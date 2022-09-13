import React from 'react'
import defaultLayout from '../layout/defaultLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faPlus, faStar, faDatabase, faPrint } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, InputGroup } from 'react-bootstrap'
import Card from './Card'

const Dashboard = () => {
  const TaskListFooter = (
    <div className="component-dashboard__main-section__task-btn-wrapper">
      <Button variant="light">Cancel</Button>
      <Button variant="primary">save</Button>
    </div>
  )

  const chatBoxFooter = (
    <InputGroup>
      <Form.Control
        placeholder="write here and hit enter to send.."
        aria-label="write here and hit enter to send.."
        aria-describedby="basic-addon2"
      />
      <Button variant="success">Send</Button>
    </InputGroup>
  )

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
      <div className="component-dashboard__main-section">
        <Card title="Task Lists" icon={faDatabase} color="#1e73be" footer={TaskListFooter} />
        <Card title="Chat Box" icon={faPrint} color="#e41638" footer={chatBoxFooter} />
      </div>
    </div>
  )
}

export default defaultLayout(Dashboard)
