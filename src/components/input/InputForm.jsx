import { useRef } from 'react'
import './InputForm.css'

import PropTypes from 'prop-types'
const InputForm = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  required
}) => {
  const inputRef = useRef(null)

  return (
    <div className='input-form-container'>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        ref={inputRef}
      />
    </div>
  )
}

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
}

export default InputForm
