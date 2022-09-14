import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import DashboardContext from '../context/DashboardContext'
import { useContext } from 'react'

const ChatBox = () => {
  const {
    state: { user },
  } = useContext(DashboardContext)

  const MessageWrapper = (
    <div className="component-chat-box__message-wrapper">
      <div className="component-chat-box__img-wrapper" style={user?.currentUser && { order: 1 }}>
        <img
          src="https://media.istockphoto.com/photos/profile-picture-of-smiling-millennial-man-in-glasses-posing-picture-id1262376609?k=20&m=1262376609&s=612x612&w=0&h=bKrWVDHkRyxLfmghmXjIopJ0ptMNnmirGdhHiYVo1ng="
          alt="avatar"
        />
        <div />
      </div>
      <div>
        <div
          className={`component-chat-box__message ${
            user?.currentUser ? 'message-pos-right' : 'message-pos-left'
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, unde praesentium. Quis
          ipsa reprehenderit praesentium, ipsam nostrum voluptatem suscipit aliquid explicabo
          expedita.
        </div>
        <div className={`component-chat-box__time ${user?.currentUser && 'time-right'}`}>
          <FontAwesomeIcon icon={faCalendar} /> <span>11:01 AM | Yesterday</span>
        </div>
      </div>
    </div>
  )

  return <div className="component-chat-box">{MessageWrapper}</div>
}

export default ChatBox
