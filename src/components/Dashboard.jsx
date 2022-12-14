import { useContext, useRef, useState } from 'react'
import defaultLayout from '../layout/defaultLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faPlus, faStar, faDatabase, faPrint } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, InputGroup, Badge, Image } from 'react-bootstrap'
import Card from './Card'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import DashboardContext from '../context/DashboardContext'
import ChatBox from './ChatBox'

const Dashboard = () => {
  const {
    state: { taskList, user },
    dispatch,
  } = useContext(DashboardContext)
  const [isTaskListOrderChanged, setIsTaskListOrderChanged] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const chatBoxWrapper = useRef()

  const onDragEnd = result => {
    const { source, destination } = result
    if (!destination) return
    if (source.index == destination.index) {
      return
    } else {
      setIsTaskListOrderChanged(true)
    }
    const items = Array.from(taskList)
    const [reorderItem] = items.splice(source.index, 1)
    items.splice(destination.index, 0, reorderItem)
    items && dispatch({ type: 'REORDER_TASK', payload: items })
  }

  const handleSave = () => {
    taskList.map((task, index) => console.log(`Task ${index + 1}:`, task))
    setIsTaskListOrderChanged(false)
  }

  const messageChange = event => setNewMessage(event.target.value)

  const handleKeyPress = event => {
    if (event.key === 'Enter') sendMessage()
  }

  const sendMessage = () => {
    dispatch({
      type: 'ADD_MESSAGE',
      payload: {
        userId: user?.id,
        message: newMessage,
        createdAt: `${new Date().toLocaleTimeString()} | Today`,
        profilePic:
          'https://media.istockphoto.com/photos/middle-aged-man-smiling-at-the-camera-picture-id1323163855?k=20&m=1323163855&s=612x612&w=0&h=toV5tWlpSzYEdRxeTKUgenLbxtX2qeKyKfTF8IIKv60=',
      },
    })
    setTimeout(() => {
      chatBoxWrapper.current && chatBoxWrapper.current()
    })
    setNewMessage('')
  }

  const TaskListFooter = (
    <div className="component-dashboard__main-section__task-btn-wrapper">
      <Button variant="light" onClick={() => setIsTaskListOrderChanged(false)}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleSave}>
        save
      </Button>
    </div>
  )

  const chatBoxFooter = (
    <InputGroup>
      <Form.Control
        placeholder="write here and hit enter to send.."
        aria-label="write here and hit enter to send.."
        aria-describedby="basic-addon2"
        onChange={messageChange}
        value={newMessage}
        onKeyDown={handleKeyPress}
      />
      <Button variant="success" onClick={sendMessage}>
        Send
      </Button>
    </InputGroup>
  )

  const Task = taskList.map((task, index) => (
    <Draggable draggableId={index + task} key={index} index={index}>
      {provided => (
        <div
          className="component-dashboard__main-section__tasks"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Form.Check />
          <div className="component-dashboard__main-section__task-desc">
            {task.imageURL && (
              <Image src={task?.imageURL} className="component-dashboard__main-section__img" />
            )}
            <div>
              <h5>
                {task?.title}{' '}
                <Badge bg={task?.type} className="ms-1">
                  {task?.status}
                </Badge>
              </h5>
              <p>{task?.description}</p>
            </div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  ))

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
        <DragDropContext onDragEnd={onDragEnd}>
          <Card
            title="Task Lists"
            icon={faDatabase}
            color="#1e73be"
            footer={isTaskListOrderChanged && TaskListFooter}
          >
            <Droppable droppableId="taskList">
              {provided => (
                <div
                  className="component-dashboard__main-section__droppable"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {Task}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Card>
        </DragDropContext>
        <Card title="Chat Box" icon={faPrint} color="#e41638" footer={chatBoxFooter}>
          <ChatBox chatBoxWrapper={chatBoxWrapper} />
        </Card>
      </div>
    </div>
  )
}

export default defaultLayout(Dashboard)
