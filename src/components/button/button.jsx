/* eslint-disable react/prop-types */
import './button.css'

const CustomButton = ({ onClick, children, classNames, type }) => {
  const defaultClassNames = classNames ? classNames : 'button blue mobile'

  const typeButton = type ? type : 'button'

  return (
    <button
      type={typeButton}
      className={`${defaultClassNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButton
