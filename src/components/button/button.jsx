/* eslint-disable react/prop-types */
import './button.css'

const CustomButton = ({ onClick, children, classNames }) => {
  const defaultClassNames = classNames ? classNames : 'button blue mobile'

  return (
    <button type='button' className={`${defaultClassNames}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default CustomButton
