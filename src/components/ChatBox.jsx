import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import DashboardContext from '../context/DashboardContext'
import { useContext, useEffect, useRef } from 'react'

const ChatBox = ({ chatBoxWrapper }) => {
  const {
    state: { user, messages },
  } = useContext(DashboardContext)
  const chatBox = useRef()

  useEffect(() => {
    chatBoxWrapper.current = scrollToBottom
  }, [])

  const scrollToBottom = () => {
    chatBox.current.scrollTo(0, chatBox.current.scrollHeight)
  }

  const MessageWrapper = messages.map((message, index) => (
    <div key={index}>
      <div className="component-chat-box__message-wrapper">
        <div
          className="component-chat-box__img-wrapper"
          style={user?.id === message.userId ? { order: 1 } : {}}
        >
          <img src={message?.profilePic} alt="avatar" />
          <div />
        </div>
        <div>
          <div
            className={`component-chat-box__message ${
              user?.id === message.userId ? 'message-pos-right' : 'message-pos-left'
            }`}
          >
            {message?.message}
          </div>
          <div
            className={`component-chat-box__time ${user?.id === message.userId && 'time-right'}`}
          >
            <FontAwesomeIcon icon={faCalendar} /> <span>{message?.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <div ref={chatBox} className="component-chat-box">
      {MessageWrapper}
    </div>
  )
}

export default ChatBox
