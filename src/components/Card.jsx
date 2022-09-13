import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ title = '', icon, color, children, footer = <div></div> }) => {
  return (
    <div className="component-card">
      <header className="component-card__header">
        <FontAwesomeIcon color={color} icon={icon} size="2x" />
        <p>{title}</p>
      </header>
      {children}
      <footer>{footer}</footer>
    </div>
  )
}

export default Card
