import PropTypes from 'prop-types'
import { useClientContext } from '../../hooks/useClientContext'
import { useModalContext } from '../../hooks/useModalContext'
import CustomButton from './button'
import './button.css'

const InfoActions = ({ renderActions, clientId }) => {
  const { deleteItem, getById } = useClientContext()
  const { openModal } = useModalContext()

  const handleClick = (btn) => {
    const handleDeleteItem = () => {
      deleteItem(clientId)
    }

    const handleOpenModal = () => {
      getById(btn.clientId)
      openModal()
    }

    return btn.id === 'editar' ? handleOpenModal : handleDeleteItem
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  return (
    <div className='button-actions-container'>
      {renderActions.map((btn) => (
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

InfoActions.propTypes = {
  renderActions: PropTypes.array,
  clientId: PropTypes.number
}

export default InfoActions
