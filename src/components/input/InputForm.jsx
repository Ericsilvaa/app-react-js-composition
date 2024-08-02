import './InputForm.css'

import PropTypes from 'prop-types'
const InputForm = ({ type, placeholder, required, label }) => {
  return (
    <div className='input-form-container'>
      <label htmlFor='nome'>{label}</label>
      <input
        type={type}
        id={label}
        className='modal-input'
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired
}

export default InputForm
