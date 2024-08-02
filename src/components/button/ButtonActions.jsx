import PropTypes from 'prop-types'
import React from 'react'
import { useClientContext } from '../../hooks/useClientContext'
import CustomButton from './button'
import './button.css'

const BodyActions = ({ renderButtons, clientId }) => {
  const { openModal, deleteItem } = useClientContext()

  const handleClick = React.useCallback((btn) => {
    const handleDeleteItem = () => {
      if (!btn.clientId) return
      deleteItem(clientId)
    }

    const handleOpenModal = () => {
      openModal(btn.clientId)
    }

    return btn.id === 'editar' ? handleOpenModal : handleDeleteItem
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='button-actions-container'>
      {renderButtons.map((btn) => (
        <CustomButton
          key={btn.id}
          id={btn.id}
          classNames={`button ${btn.color}`}
          onClick={handleClick({ ...btn, clientId })}
        >
          {btn.label}
        </CustomButton>
      ))}
    </div>
  )
}

BodyActions.propTypes = {
  renderButtons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  clientId: PropTypes.number
}

export default BodyActions
